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
    heading: "A trusted circle for Christian owners who do not want to lead alone.",
    description:
      "Kingdom Factor peer advisory groups are designed for owners and leaders who need wise counsel, accountability, shared learning, and a room where faith and business decisions can be held together.",
    primaryCta: { label: "Explore the next step", href: "/apply/" },
    secondaryCta: { label: "Join a Leadership Circle", href: "/leadership-circle/" },
    sections: [
      {
        title: "The leadership weight problem",
        body: "Leadership can become isolating. The source material consistently points to blind spots, decision fatigue, quiet burnout, and the need for a confidential place to process complex decisions with people who understand both business and faith.",
        bullets: ["Trusted counsel", "Accountability", "Faith-integrated discernment", "Practical business wisdom"],
      },
      {
        title: "What happens in the room",
        body: "A peer advisory group creates a structured place for honest conversation, shared learning, and prayerful discernment. The experience is designed to keep conversation practical, confidential, faith-integrated, and oriented toward wise next actions.",
        bullets: ["Confidential conversation", "Real business decisions", "Shared experience", "Clear next actions"],
      },
      {
        title: "Who it is for",
        body: "Christian owners, executives, and senior leaders who want practical strategy without separating their leadership from their faith.",
      },
    ],
    faqs: [
      { q: "Is this coaching or a peer group?", a: "Kingdom Factor includes both peer advisory and private coaching pathways. The fit conversation helps discern which room is right for the leader's current season." },
      { q: "Are groups in-person or virtual?", a: "Format and cadence can vary by pathway; the fit conversation is the best way to clarify the next available option." },
    ],
  },
  "executive-coaching": {
    heroImage: "/images/generated/leadership-table-1440.webp",
    heroImageMobile: "/images/generated/leadership-table-mobile.webp",
    slug: "executive-coaching",
    title: "Executive Coaching Intensive",
    eyebrow: "John lane",
    heading: "Private advisory for Christian leaders carrying real decision-making weight.",
    description:
      "The John lane is for established Christian owners, executives, and senior leaders who need clarity, resilience, stewardship, and trusted counsel around meaningful decisions.",
    primaryCta: { label: "Request a fit conversation", href: "/apply/" },
    secondaryCta: { label: "Compare peer advisory", href: "/peer-advisory-groups/" },
    sections: [
      {
        title: "A premium advisory path",
        body: "Source materials reference a 12-week Executive Coaching Intensive with weekly one-on-one sessions, between-session support, and peer advisory integration. The intensive is positioned around consistent one-on-one counsel, leadership clarity, stewardship, and practical next steps.",
        bullets: ["Weekly strategic conversation", "Leadership clarity", "Stewardship and integrity", "Peer advisory integration"],
      },
      {
        title: "Best-fit leader",
        body: "Established Christian owners and executives who are responsible for people, decisions, money, and culture — and who want faith integrated into how they lead.",
      },
      {
        title: "Leadership and trust",
        body: "Leaders need counsel they can trust. Kingdom Factor keeps the emphasis on wisdom, integrity, and practical support for decisions that carry real weight.",
      },
    ],
  },
  "peer-community": {
    heroImage: "/images/generated/collective-studio-1440.webp",
    heroImageMobile: "/images/generated/collective-studio-mobile.webp",
    slug: "peer-community",
    title: "Peer Community for Emerging Christian Owners",
    eyebrow: "Jim lane",
    heading: "A community path for founders and owners building from faith, values, and story.",
    description:
      "The Jim lane helps emerging owners, solopreneurs, startup founders, and smaller-business leaders find language, confidence, and peers for the journey.",
    primaryCta: { label: "Explore the community path", href: "/leadership-circle/" },
    secondaryCta: { label: "View books and resources", href: "/books/" },
    sections: [
      {
        title: "For leaders still forming the path",
        body: "This lane is warmer and more accessible than the executive coaching path. It emphasizes story, values alignment, confidence, community, and practical faith integration.",
        bullets: ["Story and identity", "Values-based decisions", "Community and confidence", "Faith in the everyday work"],
      },
      {
        title: "A grounded growth path",
        body: "This path gives emerging owners a warmer, accessible place to clarify story, build confidence, and grow alongside peers who understand faith-shaped entrepreneurship.",
      },
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
