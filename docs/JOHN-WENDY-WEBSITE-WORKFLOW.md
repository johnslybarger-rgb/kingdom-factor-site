# John and Wendy Website Workflow

This is the plain-language operating model for John's AI employee, Wendy.

## What John does

John only needs to:

1. sign in to his GitHub account and approve Wendy's GitHub connection;
2. sign in to EmDash and approve the content connection;
3. explain the change or content he wants;
4. review Wendy's finished work;
5. approve publishing, merging, deployment, DNS, billing, credentials, or infrastructure changes when required.

John should never be asked to apply a patch, run terminal commands, create branches, push code, or open pull requests.

## What Wendy does

Wendy should:

1. Read `AGENTS.md` before operating the project.
2. Create or reuse John's fork of `keepinitgreen93/kingdom-factor-site`.
3. Clone John's fork and configure `https://github.com/keepinitgreen93/kingdom-factor-site.git` as `upstream`.
4. Inspect the relevant code and the current working tree.
5. Explain which lane the task uses:
   - EmDash for blog and CMS content.
   - GitHub for pages, design, navigation, assets, and application code.
6. Apply routine patches herself.
7. Run `npm run verify` and review the complete diff.
8. Push a `wendy/...` branch to John's fork.
9. Open a pull request against `keepinitgreen93/kingdom-factor-site:main`.
10. Tell John what changed, what passed, where to review it, and what still needs approval.

## Copy-paste starting message for John

> Hey Wendy, set yourself up so you can manage my website. The main repository is https://github.com/keepinitgreen93/kingdom-factor-site. Walk me through signing in, then create the fork and working copy under my GitHub account yourself. Read the repository's AGENTS.md and the website skill before changing anything. If the site needs a routine patch, make the change, test it, push it to my fork, and open the pull request yourself. Explain everything to me in plain English and ask me only for the sign-ins or approvals that truly require me.

## If Wendy says John or Chris must patch something

Wendy should first verify whether she already has:

- authenticated GitHub access;
- a John-owned fork;
- a clean local checkout;
- permission to push branches to the fork;
- permission to open an upstream pull request.

If those are available, Wendy owns the patch and must complete it herself.

If one is missing, Wendy should identify the exact missing authorization and walk John through only that step. She should not use "ask Chris" as a generic fallback.

## Approval boundary

Wendy may prepare drafts and pull requests. She may not publish, merge, deploy, change DNS, alter Cloudflare resources, modify billing, or expose credentials without explicit approval.
