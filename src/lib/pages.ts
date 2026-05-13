export type PageSpec = {
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sections: { title: string; body: string; bullets?: string[] }[];
  heroImage?: string;
  heroImageMobile?: string;
  faqs?: { q: string; a: string }[];
};

export const pages: Record<string, PageSpec> = {
  "peer-advisory-groups": {
    heroImage: "/images/generated/advisory-room-1440.webp",
    heroImageMobile: "/images/generated/advisory-room-mobile.webp",
    slug: "peer-advisory-groups",
    title: "Christian Peer Advisory Groups",
    eyebrow: "Peer advisory",
    heading: "A trusted room for Christian owners carrying real decisions.",
    description:
      "A confidential peer advisory circle where faith, leadership pressure, business decisions, and wise counsel are brought into the same room.",
    primaryCta: { label: "Request a fit conversation", href: "/apply/" },
    secondaryCta: { label: "See how peer advisory works", href: "/leadership-circle/" },
    sections: [
      {
        title: "The weight of leadership",
        body: "Leadership gets costly when blind spots, decision fatigue, conflict, and stewardship questions are processed alone. The room creates a confidential place to test decisions with people who understand business pressure and faith.",
        bullets: ["Decisions tested before they become costly", "Confidential counsel from peers", "Faith-integrated discernment", "Practical next actions"],
      },
      {
        title: "What the room provides",
        body: "Members bring current decisions, not theoretical case studies. The conversation is structured, confidential, prayerful where appropriate, and oriented toward clear next steps.",
        bullets: ["Current decisions, not hypotheticals", "Shared experience from other leaders", "Prayerful, faith-aware discernment", "Specific follow-through"],
      },
      {
        title: "Who belongs here",
        body: "Christian owners, executives, and senior leaders navigating growth, transition, people pressure, culture questions, or decisions where business and faith cannot be separated.",
        bullets: ["Owners carrying real responsibility", "Executives and senior leaders", "Leaders navigating growth or transition", "Faith and strategy in one room"],
      },
    ],
    faqs: [
      { q: "Is this coaching or a peer group?", a: "Kingdom Factor includes both peer advisory and private coaching pathways. The fit conversation helps discern which room is right for the leader's current season." },
      { q: "Are groups in-person or virtual?", a: "Format and cadence can vary by pathway; the fit conversation is the best way to clarify the next available option." },
      { q: "Who is a fit for peer advisory?", a: "Christian owners, executives, and senior leaders carrying responsibility for people, money, culture, and direction." },
      { q: "What happens in a fit conversation?", a: "The goal is to clarify the leader's season, pressure points, and whether peer advisory, private coaching, or a community lane is the right next step." },
      { q: "Is the conversation confidential?", a: "The page positions confidentiality as core to the peer advisory model; final group terms should be confirmed before public launch." },
    ],
  },
  "executive-coaching": {
    heroImage: "/images/generated/leadership-table-1440.webp",
    heroImageMobile: "/images/generated/leadership-table-mobile.webp",
    slug: "executive-coaching",
    title: "Executive Coaching Intensive",
    eyebrow: "Private executive advisory with John Lane",
    heading: "Trusted counsel for Christian leaders carrying real weight.",
    description:
      "Private advisory with John Lane is for established Christian owners, executives, and senior leaders navigating decisions involving people, money, stewardship, succession, culture, and calling.",
    primaryCta: { label: "Request a fit conversation", href: "/apply/" },
    secondaryCta: { label: "Compare peer advisory", href: "/peer-advisory-groups/" },
    sections: [
      {
        title: "Premium advisory path",
        body: "The private advisory path can be structured as a 12-week executive coaching intensive with weekly one-on-one sessions, between-session support, and peer advisory integration where appropriate.",
        bullets: ["Weekly strategic conversation", "Leadership clarity", "Stewardship and integrity", "Peer advisory integration"],
      },
      {
        title: "Best-fit leaders",
        body: "Established Christian owners and executives responsible for people, decisions, money, and culture — and who want faith integrated into how they lead.",
        bullets: ["Owner-level decisions", "Senior leadership pressure", "Culture and people questions", "Faith-integrated execution"],
      },
      {
        title: "Trusted leadership counsel",
        body: "The emphasis is confidential counsel, practical support, integrity under pressure, and wise next steps for decisions that should not be carried alone.",
        bullets: ["Confidential counsel", "Practical decision support", "Integrity under pressure", "Clear next steps"],
      },
    ],
    faqs: [
      { q: "Is this coaching or consulting?", a: "This page positions the path as private advisory and executive coaching: confidential counsel, decision support, and practical leadership reflection for owner-level pressure." },
      { q: "What kinds of decisions fit this path?", a: "People, money, stewardship, succession, culture, calling, and moments where leadership isolation becomes costly." },
      { q: "Can this connect with peer advisory?", a: "Yes. The page keeps peer advisory integration as an option when a leader would benefit from both private counsel and a trusted room of peers." },
    ],
  },
  "peer-community": {
    heroImage: "/images/generated/collective-studio-1440.webp",
    heroImageMobile: "/images/generated/collective-studio-mobile.webp",
    slug: "peer-community",
    title: "Peer Community for Emerging Christian Owners",
    eyebrow: "Peer community with Jim Lane",
    heading: "A peer community for founders building from faith, values, and story.",
    description:
      "The Jim Lane path helps emerging owners, solopreneurs, startup founders, and smaller-business leaders find practical reflection, confidence, and trusted peers for the journey.",
    primaryCta: { label: "Request a fit conversation", href: "/apply/" },
    secondaryCta: { label: "See how the community works", href: "/leadership-circle/" },
    sections: [
      {
        title: "For leaders still forming the path",
        body: "This path gives emerging owners a lower-pressure room for story, values alignment, confidence, community, and practical faith integration before a heavier advisory or coaching commitment.",
        bullets: ["Story and identity", "Values-based decisions", "Community and confidence", "Faith in the everyday work"],
      },
      {
        title: "A grounded growth path",
        body: "Members clarify what they are building, why it matters, and how faith shapes daily decisions while growing alongside peers who understand the founder journey.",
        bullets: ["Story and identity work", "Values-based decisions", "Peer encouragement", "Practical founder momentum"],
      },
      {
        title: "What the community includes",
        body: "A guided peer path for emerging Christian business owners who want practical reflection, honest conversation, and a warm entry point before heavier advisory or coaching.",
        bullets: ["Guided peer conversations", "Founder-focused prompts", "Faith-and-work reflection", "A pathway toward advisory when ready"],
      },
    ],
    faqs: [
      { q: "Is this a peer group or a class?", a: "It is positioned as a guided peer community path, not a passive course. The fit conversation clarifies the exact format and timing available." },
      { q: "Who is this best for?", a: "Emerging owners, solopreneurs, founders, and smaller-business leaders who want faith-aware peer support while their story, offer, and leadership path are still forming." },
      { q: "How is this different from executive coaching?", a: "Executive coaching is a more private, intensive advisory path. The peer community is a warmer entry point built around story, confidence, and practical growth with peers." },
    ],
  },
  "leadership-circle": {
    heroImage: "/images/generated/advisory-room-1440.webp",
    heroImageMobile: "/images/generated/advisory-room-mobile.webp",
    slug: "leadership-circle",
    title: "Leadership Circle",
    eyebrow: "Free webinar / briefing",
    heading: "An introduction to why Christian leaders need a trusted circle.",
    description:
      "A low-friction webinar-style page for leaders exploring a Christ-centered peer advisory model before applying or scheduling a fit conversation.",
    primaryCta: { label: "Explore the Leadership Circle", href: "/apply/" },
    secondaryCta: { label: "Learn about peer advisory", href: "/peer-advisory-groups/" },
    sections: [
      {
        title: "What attendees should learn",
        body: "Why isolation and decision fatigue are common for owners, what a Leadership Circle is, and how trusted peers can support accountability and renewal.",
        bullets: ["The cost of leading alone", "The power of trusted counsel", "What a circle looks like", "A safe next step"],
      },
      {
        title: "A safe next step",
        body: "Use the Leadership Circle as a low-friction way to understand the model, ask better questions, and discern whether a deeper advisory pathway fits.",
      },
    ],
  },
  "marketplace-ministry": {
    heroImage: "/images/generated/marketplace-ministry-1440.webp",
    heroImageMobile: "/images/generated/marketplace-ministry-mobile.webp",
    slug: "marketplace-ministry",
    title: "Marketplace Ministry",
    eyebrow: "Faith and business integration",
    heading: "Bring faith into business decisions without reducing ministry to slogans.",
    description:
      "Marketplace Ministry content should help leaders think through culture, conflict, hiring, pricing, stewardship, calling, and daily leadership pressure.",
    primaryCta: { label: "Explore Marketplace Ministry", href: "/apply/" },
    secondaryCta: { label: "View books", href: "/books/" },
    sections: [
      {
        title: "Monday decisions matter",
        body: "This page frames marketplace ministry as practical leadership: how owners make decisions, treat people, build culture, steward resources, and lead with conviction.",
        bullets: ["Profit and purpose", "Culture and ethics", "Hiring and conflict", "Stewardship and calling"],
      },
      {
        title: "Source tie-ins",
        body: "Marketplace Ministry resources can help leaders connect Sunday conviction to Monday decisions with clarity, courage, and practical wisdom.",
      },
    ],
  },
  "collective": {
    heroImage: "/images/generated/collective-studio-1440.webp",
    heroImageMobile: "/images/generated/collective-studio-mobile.webp",
    slug: "collective",
    title: "Kingdom Factor Collective",
    eyebrow: "Kingdom Factor Collective",
    heading: "Capture real stories of Christian business leaders integrating faith and excellence.",
    description:
      "The Collective path captures stories and lessons from Christian business leaders integrating faith and excellence.",
    primaryCta: { label: "Share your story", href: "/contact/" },
    secondaryCta: { label: "Read about Kingdom Factor", href: "/about/" },
    sections: [
      {
        title: "Why this exists",
        body: "The Collective can amplify Kingdom impact, build a resource archive, and give emerging and established leaders concrete stories to learn from.",
      },
      {
        title: "How it may work",
        body: "The Collective can gather short interviews, practical stories, and leadership lessons that encourage other owners and leaders.",
        bullets: ["15–20 minute interview", "Recorded virtually or in person", "Featured only after permission", "Encouragement for others"],
      },
    ],
  },
};
