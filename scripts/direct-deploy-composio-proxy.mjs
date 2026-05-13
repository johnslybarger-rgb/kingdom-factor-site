import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { Composio } from 'file:///tmp/composio-shadow-check/node_modules/@composio/core/dist/index.mjs';
import * as esbuild from 'esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || 'c1e96a4b36c73f3cf4ddf50a90082d94';
const scriptName = process.env.CF_WORKER_NAME || 'kingdom-factor-site';
const connectedAccountId = process.env.COMPOSIO_CLOUDFLARE_CONNECTED_ACCOUNT_ID || 'ca_k1hQBBQWi63G';
const clientRoot = path.join(projectRoot, 'dist/client');
const serverRoot = path.join(projectRoot, 'dist/server');
const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) out.push(...walk(p)); else out.push(p);
  }
  return out;
}
function mimeFor(file) {
  if (file.endsWith('.html')) return 'text/html; charset=utf-8';
  if (file.endsWith('.css')) return 'text/css; charset=utf-8';
  if (file.endsWith('.js') || file.endsWith('.mjs')) return 'text/javascript; charset=utf-8';
  if (file.endsWith('.json')) return 'application/json; charset=utf-8';
  if (file.endsWith('.svg')) return 'image/svg+xml';
  if (file.endsWith('.png')) return 'image/png';
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) return 'image/jpeg';
  if (file.endsWith('.webp')) return 'image/webp';
  if (file.endsWith('.ico')) return 'image/x-icon';
  if (file.endsWith('.txt')) return 'text/plain; charset=utf-8';
  return 'application/octet-stream';
}
function multipart(parts) {
  const boundary = '----shadow-' + crypto.randomBytes(12).toString('hex');
  const chunks = [];
  for (const part of parts) {
    chunks.push(Buffer.from(`--${boundary}\r\n`));
    let disp = `Content-Disposition: form-data; name="${part.name}"`;
    if (part.filename) disp += `; filename="${part.filename}"`;
    chunks.push(Buffer.from(disp + '\r\n'));
    if (part.type) chunks.push(Buffer.from(`Content-Type: ${part.type}\r\n`));
    chunks.push(Buffer.from('\r\n'));
    chunks.push(Buffer.isBuffer(part.value) ? part.value : Buffer.from(String(part.value)));
    chunks.push(Buffer.from('\r\n'));
  }
  chunks.push(Buffer.from(`--${boundary}--\r\n`));
  return { body: Buffer.concat(chunks), contentType: `multipart/form-data; boundary=${boundary}` };
}
async function proxy({ endpoint, method, body, contentType, headers = [] }) {
  const res = await composio.client.tools.proxy({
    connected_account_id: connectedAccountId,
    endpoint,
    method,
    parameters: [
      ...headers.map(([name, value]) => ({ name, value, type: 'header' })),
    ],
    binary_body: body ? { base64: body.toString('base64'), content_type: contentType } : undefined,
  });
  return res.data || res;
}

const files = walk(clientRoot);
const manifest = {};
const byHash = new Map();
for (const file of files) {
  const buf = fs.readFileSync(file);
  const hash = crypto.createHash('md5').update(buf).digest('hex');
  const rel = '/' + path.relative(clientRoot, file).split(path.sep).join('/');
  manifest[rel] = { hash, size: buf.length };
  byHash.set(hash, { file, rel, buf });
}
console.log(JSON.stringify({ step: 'manifest-built', files: files.length }));
const session = await composio.tools.proxyExecute({
  connectedAccountId,
  endpoint: `/accounts/${accountId}/workers/scripts/${scriptName}/assets-upload-session`,
  method: 'POST',
  body: { manifest },
});
const sessionData = session.data || session;
if (!sessionData.success) throw new Error('manifest failed: ' + JSON.stringify(sessionData));
const buckets = sessionData.result.buckets || [];
const uploadJwt = sessionData.result.jwt;
console.log(JSON.stringify({ step: 'assets-session', buckets: buckets.length, bucketSizes: buckets.map(b => b.length) }));
let completionJwt = uploadJwt;
let uploadedCount = 0;
const hashesToUpload = buckets.flat();
for (let i = 0; i < hashesToUpload.length; i++) {
  const hash = hashesToUpload[i];
  const item = byHash.get(hash);
  if (!item) throw new Error('missing hash ' + hash);
  const parts = [{ name: hash, filename: path.basename(item.file), type: mimeFor(item.file), value: Buffer.from(item.buf.toString('base64')) }];
  const mp = multipart(parts);
  const data = await proxy({
    endpoint: `/accounts/${accountId}/workers/assets/upload?base64=true`,
    method: 'POST',
    body: mp.body,
    contentType: mp.contentType,
    headers: [['Authorization', `Bearer ${uploadJwt}`]],
  });
  if (!data.success) throw new Error('asset upload failed for ' + item.rel + ': ' + JSON.stringify(data));
  uploadedCount++;
  if (data.result?.jwt) completionJwt = data.result.jwt;
  console.log(JSON.stringify({ step: 'asset-uploaded', number: uploadedCount, total: hashesToUpload.length, rel: item.rel, hasCompletionJwt: Boolean(data.result?.jwt) }));
}

const config = JSON.parse(fs.readFileSync(path.join(serverRoot, 'wrangler.json'), 'utf8'));
const bindings = [];
for (const [name, text] of Object.entries(config.vars || {})) bindings.push({ type: 'plain_text', name, text: String(text) });
for (const kv of config.kv_namespaces || []) bindings.push({ type: 'kv_namespace', name: kv.binding, namespace_id: kv.id });
for (const r2 of config.r2_buckets || []) bindings.push({ type: 'r2_bucket', name: r2.binding, bucket_name: r2.bucket_name });
for (const d1 of config.d1_databases || []) bindings.push({ type: 'd1', name: d1.binding, id: d1.database_id });
const metadata = {
  main_module: 'entry.mjs',
  compatibility_date: config.compatibility_date,
  compatibility_flags: config.compatibility_flags,
  bindings,
  assets: { jwt: completionJwt, config: { html_handling: 'auto-trailing-slash', not_found_handling: 'single-page-application' } },
  annotations: { 'workers/message': 'Shadow deploy via Composio Cloudflare proxy' },
};
const serverModuleParts = [
  { name: 'metadata', type: 'application/json', value: JSON.stringify(metadata) },
];
function moduleValue(moduleFile) {
  const source = fs.readFileSync(moduleFile, 'utf8');
  if (process.env.MINIFY_WORKER_MODULES !== '1') return Buffer.from(source);
  const result = esbuild.transformSync(source, {
    loader: 'js',
    format: 'esm',
    target: 'es2022',
    minify: true,
    legalComments: 'none',
    sourcemap: false,
  });
  return Buffer.byteLength(result.code) < Buffer.byteLength(source) ? Buffer.from(result.code) : Buffer.from(source);
}
for (const moduleFile of walk(serverRoot).filter((p) => p.endsWith('.mjs'))) {
  const rel = path.relative(serverRoot, moduleFile).split(path.sep).join('/');
  serverModuleParts.push({ name: rel, filename: rel, type: 'application/javascript+module', value: moduleValue(moduleFile) });
}
const moduleBytes = serverModuleParts
  .filter((part) => part.type === 'application/javascript+module')
  .reduce((sum, part) => sum + Buffer.byteLength(part.value), 0);
console.log(JSON.stringify({ step: 'server-modules', parts: serverModuleParts.length - 1, moduleBytes, minified: process.env.MINIFY_WORKER_MODULES === '1' }));
const mp = multipart(serverModuleParts);
const deployed = await proxy({
  endpoint: `/accounts/${accountId}/workers/scripts/${scriptName}`,
  method: 'PUT',
  body: mp.body,
  contentType: mp.contentType,
});
if (!deployed.success) throw new Error('deploy failed: ' + JSON.stringify(deployed));
console.log(JSON.stringify({ step: 'deployed', success: deployed.success, id: deployed.result?.id, etag: deployed.result?.etag || deployed.result?.etag_hash || null }));
