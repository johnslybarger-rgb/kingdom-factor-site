# Kingdom Factor — PRODUCT.md

Date: 2026-05-08
Prepared by: TAM AIOS Web Designer Agent
Status: product/build handoff, not production implementation

## Product definition

Kingdom Factor’s first website should be a premium authority and conversion platform for Christian business owners and leaders.

It should unify three jobs:

1. Explain Kingdom Factor’s faith-integrated advisory model.
2. Route visitors into the right John or Jim pathway.
3. Convert qualified prospects into webinars, fit calls, applications, or resource engagement without publishing unapproved proof.

## Primary product decision

Build **one website** first.

Do not split John and Jim into two separate websites at this stage. Use one unified Kingdom Factor domain with two clearly labeled lanes:

- **John lane:** established Christian owners, executives, senior leaders, Executive Coaching Intensive, premium peer advisory.
- **Jim lane:** solopreneurs, startup founders, emerging Christian owners/leaders, story/values/peer community.

## Product goals

### Business goals

- Establish Kingdom Factor as the umbrella authority platform.
- Clarify offers that are currently spread across books, webinars, brochures, strategy docs, and coaching material.
- Support the 30-day build and 90-day sprint by giving content, webinar, and sourcing agents a clear public destination.
- Create a safe, approval-controlled path to Cloudflare deployment later.

### User goals

Visitors should quickly answer:

- Is this for Christian business leaders like me?
- Is this practical for real business decisions, not just inspirational content?
- Should I follow the John/executive path or the Jim/community path?
- What first step should I take?
- Can I trust these guides enough to schedule a conversation or join a webinar?

## Primary users

### User 1: Established Christian business owner / executive

- Owns or leads a meaningful business.
- Carries weight for people, revenue, and hard decisions.
- Wants trusted counsel, not generic networking.
- Needs faith integration and practical business wisdom.
- Likely pathway: `/executive-coaching/`, `/peer-advisory-groups/`, `/leadership-circle/`, `/apply/`.

### User 2: Emerging Christian owner / solopreneur / founder

- Earlier in the business journey.
- May need identity, confidence, values alignment, story, and peer community.
- Wants a trusted group and language for integrating faith and work.
- Likely pathway: `/peer-community/`, `/leadership-circle/`, `/marketplace-ministry/`, `/books/`.

### User 3: Collective interview participant

- Christian business leader invited to share their story.
- Needs to understand why the interview exists and how it will be used.
- Needs permission clarity before being featured publicly.
- Likely pathway: `/collective/`.

### User 4: Referral partner / trusted network contact

- CPA, advisor, attorney, coach, church/business leader, Christian university contact, or ministry partner.
- Needs a concise explanation and safe next step.
- Likely pathway: home, peer advisory, about, contact.

## Core product flows

### Flow A — Executive owner to fit call

1. Visitor lands on Home.
2. Reads leadership weight/problem framing.
3. Chooses John / Executive Coaching lane.
4. Reviews Executive Coaching Intensive and Peer Advisory integration.
5. Completes fit-call form or application.

Dependencies:

- Calendar link or form routing.
- John approval of public bio/credentials.
- Pricing approval if shown.

### Flow B — Emerging owner to community/webinar

1. Visitor lands on Home.
2. Chooses Jim / Peer Community lane.
3. Reads values/story/community positioning.
4. Chooses Leadership Circle or Marketplace Ministry webinar.
5. Registers or asks for details.

Dependencies:

- Jim public positioning.
- Webinar dates and registration destination.
- Calendar/CRM routing.

### Flow C — Webinar invite recipient to registration

1. Recipient clicks invite link.
2. Lands on Leadership Circle or Marketplace Ministry page.
3. Sees clear who/what/why and host details.
4. Registers via form or calendar link.
5. Receives confirmation through approved CRM/email flow.

Dependencies:

- Webinar schedule.
- Registration form.
- Email/SMS compliance and CRM automation.

### Flow D — Collective interview invite to scheduling

1. Invitee lands on Collective page.
2. Understands story archive purpose.
3. Reviews interview questions and permission expectations.
4. Schedules interview or submits interest.

Dependencies:

- Approved interview schedule link.
- Consent/release language.
- Whether stories are published to social/site.

### Flow E — Book/resource exploration to next step

1. Visitor browses `/books/`.
2. Selects a topic aligned to their need.
3. Routes to webinar, peer advisory, or lead magnet.

Dependencies:

- Book cover assets.
- Permission for excerpts/downloads.
- Link QA for Amazon URLs.

## MVP page requirements

### Home

- Clear Kingdom Factor promise.
- Pain/need framing.
- Three-pillar model.
- Two-lane path selector.
- Offer ecosystem.
- Book/resource authority preview.
- Collective preview.
- CTA routing.

### Peer Advisory Groups

- Explain the group model.
- Highlight Christian accountability, wise counsel, trusted community, practical strategy.
- Avoid unsupported statistics.
- CTA to webinar or apply.

### Executive Coaching

- Explain the 12-week intensive.
- List included components.
- Clarify best-fit audience without publishing unapproved revenue/employee thresholds.
- CTA to fit call.

### Peer Community

- Jim pathway.
- Emerging-owner language.
- Story/values/community positioning.
- CTA to webinar/community interest.

### Leadership Circle

- Free webinar page.
- Christ-centered peer advisory model.
- Registration placeholder until routing is approved.

### Marketplace Ministry

- Free webinar/resource page.
- Work as worship, leadership as ministry, business as Kingdom impact.
- Registration placeholder until routing is approved.

### Collective

- Interview invitation page.
- Explain why, what, how, and next step.
- Require consent before publishing stories.

### Books

- John and Jim sections.
- Categories and titles.
- Links after QA only.
- No excerpt downloads without permission.

### About

- Kingdom Factor overview.
- John/Jim bios after approval.
- Purpose Driven Consulting relationship if approved.

### Apply / Contact

- Low-risk form shell.
- Routing not wired until approved.
- Include privacy and consent expectations.

## Feature requirements

### Navigation

- Home
- Peer Advisory
- Executive Coaching
- Peer Community
- Leadership Circle
- Marketplace Ministry
- Books
- Collective
- About
- Apply

Use concise labels on mobile. Sticky navigation acceptable if not intrusive.

### CMS requirements

If EmDash is included, support editable collections for:

- Pages.
- Offers.
- Books.
- Webinars/events.
- FAQs.
- Media.
- Collective stories, initially draft/disabled.
- Testimonials, initially disabled until real proof exists.

Admin path: `/_emdash/admin`.

### Forms

Initial form shell only unless integrations are approved.

Suggested fields:

- Name.
- Email.
- Phone, optional.
- Company.
- Role.
- Which path are you interested in?
- Current stage: established owner/executive, emerging owner/founder, interview participant, referral partner, other.
- Message.
- Consent checkbox if any SMS/email follow-up is planned.

Do not connect forms to CRM, SMS, or email until approved.

### SEO / AI discovery

Build should plan for:

- Sitemap index.
- Robots.txt.
- `llms.txt`.
- Schema endpoints.
- JSON-LD for Organization, WebSite, WebPage, Service, Person, Book, FAQPage, BreadcrumbList, Event where real dates exist.
- Clean internal linking.

## Non-goals for this phase

- No production deployment.
- No DNS changes.
- No separate John/Jim websites.
- No CRM automations.
- No live SMS/email sending.
- No fake testimonials or proof.
- No public pricing unless approved.
- No public statistics unless verified or approved.
- No book chapter downloads unless permissions are confirmed.

## Success criteria for the build handoff

- Unified one-site architecture is clear.
- John/Jim lanes are distinct and easy to route.
- Source-backed offers are mapped to pages.
- All approval-gated claims are flagged.
- Unified Website Builder can answer onboarding questions without guessing.
- Deployment path is defined but not executed.
