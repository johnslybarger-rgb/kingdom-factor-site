This is the Kingdom Factor Astro + EmDash site project.

## Commands

```bash
npm install
npm run build
npm run typecheck
npx emdash seed seed/seed.json --validate
```

The default deploy target is Cloudflare Workers/Pages. Do not assume D1/R2. EmDash CMS/Admin at `/_emdash/admin` is part of the intended build; runtime dependency install and external provisioning stay approval-gated. Use the client CRM or Convex for backend/database needs if required.

## Rules

- Do not deploy, create Cloudflare resources, change DNS, publish a client-facing preview, or connect forms/CRM/calendar routing without Chris approval.
- Keep unsupported stats, pricing, testimonials, case studies, founding claims, and calendar/form links out of public copy or mark them as approval-gated in comments/docs.
- This project intentionally uses one Kingdom Factor website with two lanes: John/executive advisory and Jim/emerging-owner peer community.
- EmDash schema/seed is present as planned CMS/Admin scaffolding; the first pass renders source-controlled Astro pages until the runtime dependency install, CMS/CRM/backend workflow, and any external provisioning are approved.
