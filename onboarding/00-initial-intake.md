# Kingdom Factor Unified Website Builder — Initial Intake / Handoff

Date: 2026-05-08
Prepared by: Shadow / TAM Command Council
Recipient: Web Designer Agent + Unified Website Builder workflow
Project path: `Web Designer Agent/Clients/Kingdom Factor/kingdom-factor-site/`
Client workspace source: `Company Brain/client-workspace/kingdom-factor/`

## Build decision from Chris

Chris approved moving this into the Web Designer Agent / Unified Website Builder lane.

Strategic decision: **one Kingdom Factor website first, with two clearly separated pathways for John and Jim** — not two separate standalone websites at the first build stage.

Reasoning:

- Kingdom Factor should become the umbrella authority platform.
- John and Jim should be positioned as differentiated pathways/guides inside the same brand.
- This avoids splitting SEO authority, analytics, content operations, maintenance, and funnel clarity.
- Optional personal-brand microsites can come later if their offers/brands truly diverge.

## Required stack direction

Use the Unified Website Builder stack unless a later approval changes it:

- Astro site
- EmDash CMS/admin path at `/_emdash/admin`
- Tailwind/design token system
- Cloudflare-native deployment target
- GitHub as source-of-truth repo sync
- GitHub → Cloudflare deployment pipeline
- No default R2; approved asset storage only if needed
- No default D1; CRM or Convex if backend/database storage is needed

Do not deploy, publish DNS, create production Cloudflare resources, or send client-facing links without explicit Chris approval.

## Working site structure

Recommended domain/brand architecture:

- Main site: `kingdomfactor.us` or approved Kingdom Factor domain
- One unified site with separate lanes:
  - `/john` or `/executive-coaching`
  - `/jim` or `/peer-community`
  - `/leadership-circle`
  - `/marketplace-ministry`
  - `/books`
  - `/collective`
  - `/apply` or `/schedule`

## Onboarding answers already available

### Business basics

- Business name: Kingdom Factor
- Known URL: `www.kingdomfactor.us` appears in Executive Summary source; confirm final domain.
- Tagline / promise draft: trusted advisory circle for Christian business owners who want to lead with wisdom, faith, and accountability.
- Contact: source files list John and Jim emails/phones, but public site contact routing must be confirmed before publishing.

### Services / offers

Source-backed offer lanes:

1. Christian Peer Advisory Groups
2. Executive Coaching Intensive
3. Leadership Circle webinar / briefing
4. Marketplace Ministry webinar
5. Kingdom Factor Collective story archive / interviews
6. Books and resources
7. Calculators / readiness assessments — if approved

### Audience lanes

John lane:

- established Christian business owners
- executives and senior leaders
- owner-led businesses with meaningful revenue/employee responsibility
- higher-ticket executive coaching / advisory / authority lane

Jim lane:

- solopreneurs, startup founders, emerging Christian owners/leaders
- values/story/community/peer group lane
- likely more accessible entry point

### Value propositions

- trusted room for Christian business leaders
- faith-integrated business counsel
- accountability, wisdom, spiritual alignment
- peer learning and decision-making support
- executive coaching connected to community/advisory platform
- John/Jim author authority and source library
- marketplace ministry: business as Kingdom impact

### Tone

- wise
- grounded
- faith-integrated
- premium but not corporate cold
- relational and advisory
- spiritually serious without sounding churchy/generic
- practical for business owners carrying real responsibility

### Design direction

Suggested first direction:

- premium editorial advisory platform
- warm executive trust
- deep red/black/cream/neutral palette from KF logo direction unless extracted assets show otherwise
- restrained cinematic motion, not flashy startup animation
- visual language: leadership circles, counsel, table/community, faith and business integration, book/authority resources

### Animation intensity

Moderate cinematic. Use tasteful scroll modules, not overbuilt hero theatrics unless Chris approves a more cinematic version.

### CMS

Use EmDash/Cloudflare admin pattern if build scope confirms CMS.

### Social proof/testimonials

Do not invent. Current source has claims/statistics/founding history but public use must be approved.

## Approval-gated items

- market-size claims
- research/statistical percentages from Executive Summary
- pricing/tier table from Executive Coaching Intensive doc
- founding/history claims: 1998, 2022, 2025 partnership, hundreds/thousands claims
- testimonials, case studies, member outcomes
- calendar links, form routing, CRM integrations
- public launch/deploy/DNS

## Source files to read first

Company Brain:

- `Company Brain/client-workspace/kingdom-factor/website/website-brief-v1.md`
- `Company Brain/client-workspace/kingdom-factor/strategy/marketing-strategy-digest.md`
- `Company Brain/client-workspace/kingdom-factor/sources/hello-productchamp-drive-inventory.md`
- `Company Brain/client-workspace/kingdom-factor/sources/source-intake-tracker.md`
- `Company Brain/client-workspace/kingdom-factor/ai-agents/content-agent-source-map-v1.md`
- `Company Brain/client-workspace/kingdom-factor/meetings/2026-05-11-kickoff-brief.md`

Priority extracts:

- `Company Brain/client-workspace/kingdom-factor/sources/priority-extracts/kingdom-factor-Premium_Exec_Coaching.md`
- `Company Brain/client-workspace/kingdom-factor/sources/priority-extracts/Scripts_for_Webinars.md`
- `Company Brain/client-workspace/kingdom-factor/sources/priority-extracts/KF_Connection_Briefing.slides.md`
- `Company Brain/client-workspace/kingdom-factor/sources/priority-extracts/John_Lybarger_s_Books.md`
- `Company Brain/client-workspace/kingdom-factor/sources/priority-extracts/Jims_Books.md`
- `Company Brain/client-workspace/kingdom-factor/sources/priority-extracts/KF_Collective_Brochure-JCLybarger.md`
- `Company Brain/client-workspace/kingdom-factor/sources/priority-extracts/KF_Collective_Brochure-JLybarger.md`
- `Company Brain/client-workspace/kingdom-factor/sources/priority-extracts/Executive_Summary_Christian_Business_Peer_Groups.md`

## Expected next deliverable from Web Designer Agent

Create a Unified Website Builder Build Brief, not production code yet, unless Chris explicitly approves implementation in the next step.

Deliver:

- `research/04-build-brief.md`
- `research/01-brand-snapshot.md`
- `research/03-seo-keywords.md` with labeled assumptions if live SEO data is not available
- `design/PRODUCT.md`
- `design/DESIGN.md` draft
- recommended page map and component/module plan
- exact open questions for Monday kickoff

## Build stance

Proceed as if the first website is:

> A premium Kingdom Factor authority platform for Christian business owners, with separate John and Jim conversion lanes, source-backed offers, and an approval-safe path to GitHub → Cloudflare deployment.
