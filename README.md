# Kingdom Factor Website

Production source for the Purpose Driven Consulting and Kingdom Factor website.

- **Live site:** https://www.purpose-drivenconsulting.net
- **CMS admin:** https://www.purpose-drivenconsulting.net/_emdash/admin
- **Canonical repository:** https://github.com/keepinitgreen93/kingdom-factor-site
- **Stack:** Astro 6, EmDash, Cloudflare Workers, D1, R2, and KV

## For John and Wendy

John does not need to apply code patches or run repository commands himself. After John signs in and approves Wendy's GitHub connection, Wendy should create his fork, clone it, apply routine patches, run the full verification suite, push a `wendy/...` branch, and open a pull request against `keepinitgreen93/kingdom-factor-site:main`.

Start with [`docs/JOHN-WENDY-WEBSITE-WORKFLOW.md`](docs/JOHN-WENDY-WEBSITE-WORKFLOW.md). Agent operating rules are in [`AGENTS.md`](AGENTS.md).

## Local verification

```bash
npm ci
npm run verify
```

`npm run verify` runs the production build, Astro type checking, and EmDash seed validation.

## Safety boundary

Routine source patches are the agent's responsibility. Publishing, merging, deployment, DNS, Cloudflare resources, secrets, billing, and other external-impact actions remain human approval-gated.
