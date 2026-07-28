# Kingdom Factor Website Agent Instructions

This is the production source project for Purpose Driven Consulting and Kingdom Factor.

- Public site: `https://www.purpose-drivenconsulting.net`
- Canonical repository: `keepinitgreen93/kingdom-factor-site`
- Stack: Astro 6, EmDash CMS, Cloudflare Workers, D1, R2, and KV
- Verification command: `npm run verify`

## Owner-agent operating contract

John's AI employee owns routine technical execution. If the agent has the tools and authorized access, it must inspect the project, apply the patch, run verification, review the diff, push a branch to John's fork, open the pull request, and explain the result in plain English.

Do not tell John or Chris to apply a patch, run terminal commands, create a branch, push code, or open a pull request when the agent can do it itself.

Ask a human only for an unavoidable action or decision:

- sign in or approve GitHub authorization;
- create a passkey or approve an EmDash connection;
- approve exact public content or publishing;
- review and merge a pull request;
- approve deployment, DNS, billing, credentials, or infrastructure changes.

When blocked, report the exact failed command, HTTP response, missing permission, or unavailable credential. Do not use a vague "contact Chris" fallback.

## Fork workflow

The canonical repository is public. A collaborator invitation is not required for routine code work.

John's agent should:

1. Ask John to sign in and approve Wendy's GitHub connection, then verify the authorized session.
2. Create or reuse John's fork of `keepinitgreen93/kingdom-factor-site`.
3. Clone John's fork.
4. Configure remotes:
   - `origin`: John's fork.
   - `upstream`: `https://github.com/keepinitgreen93/kingdom-factor-site.git`.
5. Keep fork `main` synchronized with `upstream/main`.
6. Make changes on `wendy/<short-task>-<slug>` branches.
7. Open pull requests against `keepinitgreen93/kingdom-factor-site:main`.

Never commit directly to canonical `main`. Never merge the agent's own pull request.

## Routine patch workflow

```bash
git status --short --branch
git remote -v
git fetch origin
git fetch upstream
git switch main
git pull --ff-only upstream main
git push origin main
git switch -c "wendy/<short-task>-<slug>"
```

Make the smallest requested change, then run:

```bash
npm ci
npm run verify
git diff --check
git status --short
git diff --stat
git diff
```

Before committing, stage only the expected files and review the complete staged change, including new files:

```bash
git add -- <expected-files>
git diff --cached --check
git diff --cached --stat
git diff --cached
```

Commit only the reviewed staged files, push the branch to `origin`, and open the upstream pull request. The pull request must include:

- what was requested and what changed;
- exact files and pages changed;
- verification results;
- visual evidence when relevant;
- risks and rollback note;
- `Not deployed. Human review required.`

## EmDash lane

Use EmDash at `/_emdash/admin` and the authenticated MCP surface for blog posts, authors, draft content, revisions, and CMS media metadata.

Create or update content as a draft. Publishing, scheduling, unpublishing, destructive deletion, schema changes, and administrative settings require explicit approval.

Use GitHub for Astro pages, components, layouts, navigation, styles, public assets, schema source, and application code.

## Commands

```bash
npm ci
npm run build
npm run typecheck
npm run emdash:seed:validate
npm run verify
```

## Production boundary

Production uses Cloudflare Workers with D1, R2, and KV. Do not run `wrangler deploy`, change DNS, modify bindings, create Cloudflare resources, change secrets, or publish a client-facing preview without explicit approval.

## Content guardrails

- Preserve the two-lane positioning: John for executive advisory and Jim for emerging-owner peer community.
- Do not invent statistics, prices, testimonials, client outcomes, dates, credentials, biographies, founding claims, calendar links, or contact information.
- Preserve approved design and content outside the requested scope.
- Check the working tree before editing and do not include unrelated changes.
- Never print or commit passwords, API keys, PATs, authentication codes, private keys, `.env`, `.dev.vars`, databases, or generated tokens.
