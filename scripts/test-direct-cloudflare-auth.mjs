import { Composio } from 'file:///tmp/composio-shadow-check/node_modules/@composio/core/dist/index.mjs';
const c = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const account = await c.connectedAccounts.get('ca_k1hQBBQWi63G');
const p = account.params || account.data || account.state?.val || {};
const email = p.generic_id || p.headers?.['X-Auth-Email'];
const key = p.generic_api_key || p.headers?.['X-Auth-Key'];
const res = await fetch('https://api.cloudflare.com/client/v4/accounts/c1e96a4b36c73f3cf4ddf50a90082d94/workers/services', { headers: {'X-Auth-Email': email, 'X-Auth-Key': key }});
const data = await res.json();
console.log(JSON.stringify({status: res.status, success: data.success, count: data.result?.length, errors: data.errors}, null, 2));
