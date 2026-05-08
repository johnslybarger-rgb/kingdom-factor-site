# Kingdom Factor — DESIGN.md

Date: 2026-05-08
Prepared by: TAM AIOS Web Designer Agent
Status: design handoff draft for Unified Website Builder

## Design thesis

Kingdom Factor should feel like a premium advisory platform for Christian business leaders: wise, warm, credible, and serious about real decisions.

It should not look like:

- A generic coach landing page.
- A flashy SaaS startup.
- A church conference microsite.
- A template with stock faith imagery.

It should look like:

- An executive advisory circle.
- A source-backed thought leadership platform.
- A warm, trusted room where leaders can process business, faith, pressure, and responsibility.

## Visual keywords

- Premium editorial.
- Warm executive trust.
- Faith-integrated, not religious cliché.
- Roundtable / counsel / circle.
- Books, wisdom, source library.
- Mature, practical, grounded.
- Subtle cinematic motion.

## Palette direction

Final colors must be extracted/validated from approved logo assets, but first-pass direction is:

- **Burgundy / deep red:** primary brand depth, leadership weight, warmth.
- **Near black / charcoal:** authority, text, footer, premium contrast.
- **Warm cream:** page background, human warmth, editorial feel.
- **Stone / taupe neutrals:** cards, borders, secondary backgrounds.
- **Muted brass / gold:** sparing accent for trust and premium cues.

Suggested token draft:

```text
--color-ink: #171313
--color-charcoal: #24201f
--color-burgundy: #641f24
--color-burgundy-dark: #3f1216
--color-cream: #f7f0e5
--color-warm-white: #fffaf2
--color-stone: #d8cbbb
--color-taupe: #a89483
--color-brass: #b58a44
--color-muted-gold: #d5b26f
```

Accessibility notes:

- Burgundy + cream can be strong if contrast is checked.
- Brass/gold should not be used for small text on light backgrounds.
- Body text should remain charcoal/near-black.

## Typography direction

Use a refined editorial serif for display plus a highly readable sans for UI/body.

Recommended pairing options:

1. **Display:** Cormorant Garamond or Fraunces; **Body/UI:** Inter or Source Sans 3.
2. **Display:** Libre Baskerville; **Body/UI:** Manrope or Inter.
3. **Display:** Playfair Display; **Body/UI:** Source Sans 3.

Preferred first pass:

- Display: `Libre Baskerville` or `Cormorant Garamond` for an advisory/book-author feel.
- Body/UI: `Inter` for clarity and conversion readability.

Typography rules:

- Headlines should feel thoughtful, not trendy.
- Body copy should be direct and digestible.
- Use generous line-height and measure for readability.
- Avoid all-caps except small eyebrow labels.

## Layout system

### Grid

- Max content width: 1120–1200px.
- Wide editorial sections can expand to 1280px.
- Use 12-column desktop grid, 6-column tablet, 1-column mobile.
- Favor spacious sections and clear hierarchy.

### Section rhythm

- Large top/bottom padding on desktop: 96–144px.
- Mobile padding: 56–80px.
- Alternate warm backgrounds: cream, warm white, burgundy, charcoal.
- Use inset card groups for offers and lane selection.

### UI shapes

- Border radius: 16–24px for cards.
- Buttons: pill or soft rectangle, 999px or 12px radius depending logo feel.
- Borders: subtle 1px warm-stone lines.
- Shadows: soft and editorial, not heavy app-card shadows.

## Component styles

### Hero

Recommended structure:

- Left: label, H1, short supporting copy, CTA pair.
- Right: visual system combining KF logo mark, circular advisory motif, book/headshot/photo asset, or abstract roundtable composition.
- Add a subtle “two pathways” cue below the hero.

Motion:

- Fade and slight upward entrance.
- Slow parallax on background mark.
- No aggressive canvas/video unless approved.

### Two-lane path selector

Design:

- Two large cards side by side on desktop.
- John card: deeper burgundy/charcoal accent, executive-advisory language.
- Jim card: warmer cream/taupe accent, community/story language.
- Each card should answer: who this is for, what they need, next page.

### Three-pillar model

Design:

- Three cards or connected-circle diagram.
- Pillars: Peer Advisory, Executive Coaching, Marketplace Ministry.
- Use linework and icons sparingly.
- Icons should be custom/abstract, not generic icon-library clichés.

### Offer ecosystem grid

- Six cards: Peer Advisory, Executive Coaching, Leadership Circle, Marketplace Ministry, Collective, Books/Resources.
- Each has a short promise, primary audience, and CTA.
- Include internal approval notes only in docs, not final UI.

### Book shelf / authority module

- Use book-cover cards if assets are approved.
- Without covers, use elegant text cards by category.
- Separate John and Jim sections.
- Use links only after QA.

### Collective module

- Use interview/story archive motif.
- Structure as “Why / What we ask / How it works / Schedule.”
- Add consent/permission copy in final page.

### FAQ accordion

- Keep plain and accessible.
- Use source-backed questions:
  - Is this a networking group?
  - Who is this for?
  - How do faith and business fit together here?
  - What is the difference between peer advisory and executive coaching?
  - Which path should I choose?

### Forms

- Large, calm, trust-building form layout.
- Show privacy reassurance.
- Do not include SMS opt-in unless approved compliance text is available.
- Route fields should support John/Jim segmentation.

## Imagery direction

Use approved real assets first:

- KF logo.
- KF background logos.
- John and Jim headshots.
- Book covers/PDF cover art if approved.

AI-generated imagery, if used later:

- Executive roundtable with warm natural light.
- Close-up of notebook, Bible, business plan, and coffee at an advisory table.
- Mature business owners in thoughtful conversation.
- Abstract circle/counsel motif with light through windows.

Avoid:

- Fake photos of John/Jim.
- Fake group-event photos.
- Fake testimonials or member portraits.
- Overused cross-on-desk imagery.
- AI hands/faces if quality is uncertain.

## Motion system

Recommended intensity: moderate cinematic.

Use:

- Section reveal on scroll.
- Subtle parallax on logo watermark.
- Pillar cards revealing in sequence.
- Smooth anchor transitions.
- Hover states on path cards.
- Reduced-motion support.

Avoid:

- Long blocking intro animations.
- Heavy WebGL/canvas hero without approval.
- Distracting scroll-jacking.
- Motion that makes the site feel like a tech demo.

## Accessibility rules

- One H1 per page.
- Visible focus states.
- 44px minimum touch targets.
- Buttons and links clearly distinguishable.
- Alt text must describe real assets accurately.
- Do not imply headshots/books are endorsements beyond what source supports.
- Respect `prefers-reduced-motion`.
- Ensure text contrast meets WCAG AA.

## SEO / content design rules

- Every section should start with the point.
- Short paragraphs, self-contained for AI extraction.
- Use descriptive link text.
- Use FAQ schema only for visible questions and answers.
- Do not hide approval-gated claims in schema.
- No placeholder fake social proof in UI.

## Schema design notes

Potential schema types:

- `Organization` for Kingdom Factor.
- `Person` for John and Jim after bio approval.
- `Service` for Peer Advisory Groups and Executive Coaching.
- `Event` for webinars only with real approved dates.
- `Book` for listed books after link/metadata QA.
- `FAQPage` for visible FAQs.
- `BreadcrumbList` for all interior pages.

## Page design notes

### Home

- Premium hero.
- Leadership weight problem.
- Three-pillar model.
- Two-lane selector.
- Offer ecosystem.
- Authority books.
- Collective preview.
- Final CTA.

### Peer Advisory

- More educational and trust-building.
- Use Christian peer group language clearly.
- Avoid overusing stats.

### Executive Coaching

- More premium, direct, and focused.
- Highlight structure of the 12-week intensive.
- Keep pricing gated.

### Peer Community

- Warmer and more identity/community oriented.
- Needs Jim-specific approval for final voice.

### Webinar pages

- Simple, high-converting landing-page structure.
- Clear benefits, date placeholder, host cards, FAQ.

### Books

- Editorial resource-library feel.
- Separate John and Jim.

## Design quality bar

The final build should feel like a $150k agency advisory platform:

- High typographic taste.
- Fewer but stronger sections.
- No generic gradients or AI-looking cards.
- No fake proof sections.
- Premium whitespace and restraint.
- Practical conversion flow.
