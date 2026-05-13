import { spawn } from 'node:child_process';
import { Composio } from 'file:///tmp/composio-shadow-check/node_modules/@composio/core/dist/index.mjs';

const connectedAccountId = process.env.COMPOSIO_CLOUDFLARE_CONNECTED_ACCOUNT_ID || 'ca_k1hQBBQWi63G';
const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const account = await composio.connectedAccounts.get(connectedAccountId);
const params = account.params || account.data || account.state?.val || {};
const email = params.generic_id || params.headers?.['X-Auth-Email'];
const key = params.generic_api_key || params.headers?.['X-Auth-Key'];
if (!email || !key) {
  console.error('Cloudflare Composio connection did not expose API key/email to SDK response.');
  process.exit(2);
}

const env = { ...process.env };
delete env.CLOUDFLARE_API_TOKEN;
delete env.CF_API_TOKEN;
env.CLOUDFLARE_EMAIL = email;
env.CLOUDFLARE_API_KEY = key;
env.GOMAXPROCS = '1';

const child = spawn('npm', ['exec', '--yes', '--package', 'wrangler', '--', 'wrangler', 'deploy'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  env,
});

const scrub = (s) => String(s).replaceAll(key, '[REDACTED]').replaceAll(email, '[REDACTED_EMAIL]');
child.stdout.on('data', d => process.stdout.write(scrub(d)));
child.stderr.on('data', d => process.stderr.write(scrub(d)));
child.on('exit', code => process.exit(code ?? 1));
