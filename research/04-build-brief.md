# Kingdom Factor — Unified Website Builder Build Brief

Date: 2026-05-08
Prepared by: TAM AIOS Web Designer Agent
Status: build handoff package, not production code, not approved public copy
Project path: `Web Designer Agent/Clients/Kingdom Factor/kingdom-factor-site/`

## Build mandate

Chris approved moving Kingdom Factor into the Web Designer Agent / Unified Website Builder lane.

**Critical architecture decision:** build one Kingdom Factor website first, with two clear lanes for John and Jim. Do not create two separate websites now.

**No deploy / publish / DNS / client-facing launch** without explicit Chris approval.

## Stack direction

Use the Unified Website Builder stack unless Chris changes scope:

- Astro + Tailwind.
- EmDash CMS/admin at `/_emdash/admin` where CMS is in scope.
- GitHub as source of truth.
- GitHub → Cloudflare deployment pipeline.
- Cloudflare Workers/Pages target; EmDash CMS/Admin is planned, with runtime activation after memory cap fix and provisioning approval.
- No default R2; use Cloudflare asset handling or approved storage only if a real media/storage need appears.
- No default D1; use client CRM or Convex if backend/database storage is needed.
- JSON-LD schema, sitemap index, robots.txt, `llms.txt`, and AI-search-friendly content structure.

Approval-gated:

- Production Cloudflare resources.
- DNS changes.
- Public domain launch.
- Client-facing preview links.
- CRM, form, calendar, and email routing.

## Source-backed positioning

Kingdom Factor helps Christian business owners and leaders make better decisions, grow with wisdom, and lead in alignment with faith and calling.

The site should feel like a faith-integrated advisory platform, not a generic coaching site.

Primary proof themes from source:

- Christian leaders often carry isolation, blind spots, decision fatigue, and quiet burnout.
- Peer advisory groups provide a trusted circle for wise counsel, accountability, shared learning, and spiritual alignment.
- Marketplace Ministry helps leaders connect faith with business decisions, culture, ethics, stewardship, and Kingdom impact.
- John and Jim bring author/source authority through books, webinars, and advisory frameworks.

## Core conversion strategy

Primary first-version funnel recommendation:

1. Home page qualifies the visitor and splits them into the right lane.
2. John lane routes established owners/executives toward Executive Coaching Intensive, peer advisory, or a fit call.
3. Jim lane routes emerging owners/solopreneurs toward peer community, story/values resources, webinar, or a fit call.
4. Webinar pages provide low-friction conversion paths.
5. Books/resources build authority and feed lead magnets after permissions.
6. Apply/contact page captures intent and routes internally after calendar/CRM decisions.

If Chris wants the fastest ship path, the first live version should prioritize:

- Home.
- Peer Advisory Groups.
- Executive Coaching / John lane.
- Peer Community / Jim lane.
- Leadership Circle webinar.
- Marketplace Ministry webinar.
- Books & Resources.
- About.
- Apply / Contact.
- Privacy / Terms.

## Exact page map

### Core pages

1. `/` — Home
2. `/peer-advisory-groups/` — Christian Peer Advisory Groups
3. `/executive-coaching/` — John lane / Executive Coaching Intensive
4. `/peer-community/` — Jim lane / emerging owners and peer community
5. `/leadership-circle/` — free Leadership Circle webinar / briefing
6. `/marketplace-ministry/` — free Marketplace Ministry webinar / resource page
7. `/collective/` — Kingdom Factor Collective / interview story archive invitation
8. `/books/` — John and Jim books/resources
9. `/about/` — Kingdom Factor, John, Jim, and Purpose Driven Consulting relationship if approved
10. `/apply/` — fit call / application / next step
11. `/contact/` — general contact and safe routing
12. `/privacy/`
13. `/terms/`

### Optional later pages

- `/resources/` — blog/resource hub once content calendar is approved.
- `/assessments/` — readiness assessment/calculators if approved.
- `/stories/` — Collective story archive after real interviews are approved.
- `/john-lybarger/` — future person page if useful for SEO.
- `/james-lybarger/` — future person page if useful for SEO.
- `/arizona/` — only if Arizona-first geo strategy is approved.

## Homepage module plan

1. **Hero / authority promise**
   - Headline draft: “A trusted advisory circle for Christian business owners who want to lead with wisdom, faith, and accountability.”
   - CTA: “Schedule an Introductory Conversation” or “Join the Next Free Webinar.”
   - Secondary CTA: “Explore the Leadership Circle.”
   - Visual: premium advisory-circle / table / logo-mark composition. Avoid cheesy stock faith imagery.

2. **The leadership weight problem**
   - Isolation, blind spots, decision fatigue, quiet burnout, and lack of a trusted faith-integrated room.
   - Keep source-backed and empathetic.

3. **Three-pillar Kingdom Factor model**
   - Peer Advisory.
   - Executive Coaching.
   - Marketplace Ministry.
   - Use cards with short benefit copy and source notes.

4. **Choose your path**
   - John / Executive Owners & Senior Leaders.
   - Jim / Emerging Owners & Peer Community.
   - Clear side-by-side lane cards with route CTAs.

5. **Offer ecosystem**
   - Peer Advisory Groups.
   - Executive Coaching Intensive.
   - Leadership Circle.
   - Marketplace Ministry.
   - Kingdom Factor Collective.
   - Books & Resources.

6. **Author authority / source library**
   - John book categories and Jim book titles.
   - No fake best-seller claims unless verified.
   - Book covers can be added only from approved assets.

7. **Kingdom Factor Collective preview**
   - Story archive concept.
   - Interview invitation CTA.
   - Placeholder for real stories: `[REAL PROOF NEEDED]`.

8. **Proof / trust block**
   - Use cautious language only.
   - Approval-gated claims can sit in internal notes, not public copy.
   - Possible safe trust angle: “Built around peer advisory, executive coaching, author resources, and marketplace ministry conversations.”

9. **Final CTA / fit routing**
   - Ask: “Which conversation fits where you are?”
   - CTA options: “Explore Peer Advisory,” “View Executive Coaching,” “Join a Webinar,” “Schedule a Fit Call.”

## Page-specific module plan

### `/peer-advisory-groups/`

- Hero: Christian Peer Advisory Groups for owners/leaders who do not want to carry leadership alone.
- Problem: isolation, blind spots, accountability gap.
- What happens in a group: trusted conversation, wise counsel, prayerful discernment, shared learning, confidentiality.
- 10 source-backed reasons to participate, rewritten carefully and without unsupported stats.
- Who it is for / not for.
- John/Jim routing cards.
- FAQ.
- CTA to webinar or apply.

### `/executive-coaching/`

- Hero: private advisory for Christian business owners carrying real decision-making weight.
- Offer summary: 12-week Executive Coaching Intensive.
- What is included: 12 weekly 1:1 virtual sessions, between-session support, 3 monthly peer advisory meetings.
- Outcomes: clarity, discipleship, leadership integrity, stewardship, resilience, multiplication.
- Best-fit: established Christian owners/executives. Revenue/employee ranges remain approval-gated.
- John authority block: bio/credentials to confirm.
- CTA: fit call/application.
- Pricing: keep hidden unless approved.

### `/peer-community/`

- Hero: peer community for Christian owners and leaders building from values, story, and faith.
- Jim positioning: emerging owners, solopreneurs, startup founders, and smaller-business leaders.
- Themes: story, values alignment, community, confidence, meaning, and shared leadership growth.
- Jim books section.
- CTA: Leadership Circle / peer community interest / fit call.
- Needs stronger Jim-specific voice from kickoff.

### `/leadership-circle/`

- Hero: free one-hour webinar introducing a Christ-centered peer advisory model.
- Problems: isolation, decision fatigue, blind spots, quiet burnout.
- What attendees will learn: why leaders need a circle, what a Leadership Circle is, how peer counsel supports accountability and renewal.
- Host cards for John/Jim if both participate.
- Registration CTA with placeholder: `[CALENDAR/FORM ROUTING NEEDED]`.
- FAQ.

### `/marketplace-ministry/`

- Hero: integrate faith and business without reducing ministry to slogans.
- Problems: profit vs purpose, Sunday faith vs Monday decisions, pressure to compete without compromise.
- What attendees/resources cover: pricing, hiring, conflict, culture, compensation, calling, stewardship.
- Book/resource tie-in: John’s `Marketplace Ministry` book if approved.
- CTA: webinar registration / resource download.

### `/collective/`

- Hero: share and archive real stories of Christian business leaders integrating faith and excellence.
- Why this exists: amplify Kingdom impact, build a resource archive, inspire emerging and established leaders.
- Interview questions from brochure.
- How it works: 15–20 minute interview, recorded virtually/in person, featured after permission.
- CTA: schedule interview. Use placeholder until final link is approved.
- Legal/permission note: require participant consent before publishing.

### `/books/`

- John section: categories and selected titles.
- Jim section: three known book titles.
- Use Amazon links only after link QA.
- Lead magnet candidates: book chapter, reading guide, resource list. Permission needed.
- CTA: explore relevant pathway.

### `/about/`

- Kingdom Factor mission and name meaning from briefing if approved.
- John bio and Jim bio from approved source only.
- Purpose Driven Consulting relationship if approved.
- Timeline only after kickoff approval.

### `/apply/` and `/contact/`

- Keep safe and lightweight until routing is confirmed.
- Form fields: name, email, phone optional, company, role, business stage, interested path, message.
- Routing placeholders: John/Jim, CRM tags, calendar links.
- A2P/privacy compliance basics if SMS opt-in is included.

## Component / module library plan

Core components:

- `HeroSplitAuthority`
- `TrustedRoomProblemSection`
- `ThreePillarModel`
- `TwoLanePathSelector`
- `OfferEcosystemGrid`
- `AuthorityBookShelf`
- `WebinarFeaturePanel`
- `CollectiveStoryInvite`
- `ProofNeededBlock` for approval-gated areas
- `FAQAccordion`
- `FitCallCTA`
- `Breadcrumbs`
- `PersonAuthorityCard`
- `BookCard`
- `ResourceCard`
- `FormShell`

CMS collections to consider in EmDash:

- Pages.
- Offers.
- Books.
- Webinars/events.
- FAQs.
- Collective stories, disabled until real permissions exist.
- Testimonials, disabled until real proof exists.
- Media assets.

## Design and motion direction

- Premium editorial + warm executive advisory.
- Moderate cinematic motion.
- Use smooth reveals, cards, scroll progress, subtle parallax, and section transitions.
- Avoid heavy scroll-canvas hero until approved.
- Accessibility first: no motion that blocks content, respect reduced motion.

## Content boundaries

Never fabricate:

- Testimonials.
- Reviews.
- Member stories.
- Case studies.
- Outcome stats.
- External proof.

Use approval labels:

- `[REAL PROOF NEEDED]`
- `[CLIENT APPROVAL NEEDED]`
- `[SOURCE VERIFICATION NEEDED]`
- `[CALENDAR/FORM ROUTING NEEDED]`

Statistics and percentages from PDFs/strategy docs must remain internal or approval-gated unless independently verified.

## Known onboarding answers for Unified Website Builder

- Business name: Kingdom Factor.
- Existing URL: `www.kingdomfactor.us`, confirm final domain.
- Business type: Christian business peer advisory, executive coaching, marketplace ministry, author/resource platform.
- Audience: Christian business owners, executives, senior leaders, emerging owners, solopreneurs, startup founders.
- Services: peer advisory, executive coaching intensive, Leadership Circle, Marketplace Ministry, Collective, books/resources, assessments/calculators if approved.
- Differentiators: faith-integrated advisory platform, peer counsel, executive coaching integration, John/Jim author authority, marketplace ministry focus.
- Service area: national, with Arizona-first strategy to confirm.
- Brand tone: wise, grounded, relational, premium, practical, spiritually serious.
- Design style: warm executive trust, premium editorial, restrained cinematic.
- Colors: deep red/black/cream/warm neutrals pending logo extraction.
- Animation: moderate cinematic.
- CMS: yes, EmDash if scope confirms.
- Social: LinkedIn URLs in scripts; full social inventory and public handles need confirmation.
- Testimonials: none approved.
- Contact/routing: John and Jim contact details exist in scripts but public contact strategy must be confirmed.

## Approval-gated deployment assumptions

- Source repo should become a private GitHub repo under `keepinitgreen93` after build approval.
- Recommended repo name: `client-kingdom-factor-site` or `client-kingdom-factor-kingdom-factor-site` depending TAM naming convention.
- Cloudflare deployment should be Workers/Pages-compatible; EmDash CMS/Admin is planned, with runtime activation after memory cap fix and provisioning approval.
- R2/D1 resources should not be assumed or created; use CRM/Convex/backend choices only after scope is approved.
- Forms should not send emails, SMS, or CRM updates until routing and consent language are approved.
- No production deploy or DNS changes without Chris approval.

## Researcher next steps inside Unified Website Builder

1. Crawl existing `kingdomfactor.us` if accessible.
2. Pull brand colors/logo metadata from approved assets.
3. Validate keyword opportunities with DataforSEO.
4. Review competitors: C12, Convene, CBMC, Christian Chamber / peer advisory alternatives.
5. Confirm backlink/index status of existing domain.
6. Build the competitive report.
7. Keep all stats and proof gated unless verified.

## Minimum build acceptance criteria

- One-site/two-lane architecture implemented.
- Clear John and Jim pathways.
- All pages source-backed or clearly marked as needing proof/approval.
- No fabricated proof.
- EmDash CMS/Admin available at `/_emdash/admin` once runtime dependencies and provisioning are approved.
- Fast Astro/Tailwind site with semantic HTML and accessible navigation.
- Sitemap, schema, robots, and AI discovery files planned.
- No deployment, DNS, or public launch without approval.
