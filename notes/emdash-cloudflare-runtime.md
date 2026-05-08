# Workers/Pages + Planned EmDash/Backend Notes

Status: scaffolded, approval-gated, not provisioned.

Default deployment direction for Kingdom Factor is Cloudflare Workers/Pages from GitHub.

Do **not** create Cloudflare D1 or R2 by default. Current assumption:

- Static/source-controlled Astro pages are enough for the first pass.
- Client CRM will be connected after Kingdom Factor provides access.
- If a backend/database is needed, consider Convex before adding Cloudflare D1.
- Use R2 only if there is a specific approved media/object-storage need.

EmDash CMS/Admin remains planned for the build:

- Admin path: `/_emdash/admin`
- Seed file: `seed/seed.json`
- Runtime dependencies are listed in `package.json` under `optionalRuntimeDependencies.emdashCmsIfApproved` and should be installed after the Railway memory cap is fixed and any external provisioning is approved.

Approval required before:

- Deploying Workers/Pages or creating client-facing preview links
- Creating D1 database or R2 bucket
- Adding Convex project/database
- Connecting forms, CRM, calendar, or email routing
- Publishing public claims, testimonials, stats, pricing, or case studies

Railway install note from 2026-05-08:

The hosted Hermes container reported a cgroup memory limit of ~1GB despite higher Railway allocation expectations:

- `/sys/fs/cgroup/memory.max`: `999997440`
- `/sys/fs/cgroup/memory.events`: `oom_kill 4`

That explains `npm install`/`pnpm install` failures with exit `137` during heavy Cloudflare/EmDash dependency install. Once Railway/Hermes runtime memory is actually raised, re-test the full dependency set in an isolated branch before promoting it into the default build.
