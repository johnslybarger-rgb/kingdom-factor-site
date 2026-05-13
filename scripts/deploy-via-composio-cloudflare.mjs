import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { Composio } from 'file:///tmp/composio-shadow-check/node_modules/@composio/core/dist/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || 'c1e96a4b36c73f3cf4ddf50a90082d94';
const scriptName = process.env.CF_WORKER_NAME || 'kingdom-factor-site';
const connectedAccountId = process.env.COMPOSIO_CLOUDFLARE_CONNECTED_ACCOUNT_ID || 'ca_k1hQBBQWi63G';
const clientRoot = path.join(projectRoot, 'dist/client');

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
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
console.log(JSON.stringify({ step: 'manifest-built', files: files.length, scriptName, accountId }));

const session = await composio.tools.proxyExecute({
  connectedAccountId,
  endpoint: `/accounts/${accountId}/workers/scripts/${scriptName}/assets-upload-session`,
  method: 'POST',
  body: { manifest },
});
const data = session.data || session;
if (!data.success) {
  console.error(JSON.stringify(data, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ step: 'assets-session', buckets: data.result.buckets?.length || 0, bucketSizes: (data.result.buckets || []).map(b => b.length) }));
fs.writeFileSync('/tmp/kf-assets-session.json', JSON.stringify(data.result, null, 2));
