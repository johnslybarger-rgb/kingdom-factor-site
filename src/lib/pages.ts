export type PageSpec = {
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  subheading?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sections: { title: string; body: string; bullets?: string[] }[];
  heroImage?: string;
  heroImageMobile?: string;
  faqs?: { q: string; a: string }[];
};

export const pages: Record<string, PageSpec> = {
  "executive-coaching": {
    heroImage: "/images/generated/leadership-table-1440.webp",
    heroImageMobile: "/images/generated/leadership-table-mobile.webp",
    slug: "executive-coaching",
    title: "Executive Coaching Intensive",
    eyebrow: "Executive Advisory",
    heading: "Dr. John Lybarger",
    subheading: "Executive Coaching, Peer Advisory, and Marketplace Ministry.",
    description:
      "Dr. John Lybarger helps leaders carrying executive-level responsibility gain clarity, make sound decisions, strengthen culture, and lead with disciplined stewardship through expert coaching, pastoral discernment, and executive counsel shaped by real business ownership.",
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
      { q: "What is the Kingdom Culture Intensive?", a: "The Kingdom Culture Intensive is a focused 90-day coaching journey for Christian business owners and senior leaders who want to align faith, culture, and performance. Through a blend of 1:1 coaching and peer advisory support, we help you clarify your Kingdom-shaped vision and build a healthier, more Christ-centered way of leading." },
      { q: "Who is the Kingdom Culture Intensive designed for?", a: "It's designed for Christian owners and senior leaders who are already profitable but feel stuck, stretched, or uneasy about the health of their culture and leadership. If you value Scripture, prayer, and integrity — and you feel the tension between your convictions and 'hard' business realities — you're in the right place." },
      { q: "What results can I expect from the intensive?", a: "By the end of 90 days, you can expect greater clarity about your Kingdom vision, a more honest read on your current culture, and a simple, sustainable leadership rhythm that integrates faith and performance. Many leaders describe experiencing more peace, better people systems, and a culture that is both healthier and more aligned with Christ." },
      { q: "What do we actually work on together?", a: "We work through three phases: clarifying your Kingdom-shaped vision, diagnosing the true health of your culture, and implementing practical, faith-integrated rhythms and systems. This includes defining mission, values, and behaviors; assessing culture health; designing leadership rhythms; upgrading people systems; and applying a biblical decision framework to real, high-stakes issues." },
      { q: "What specific outcomes and tools will I receive?", a: "You'll walk away with a one-page Kingdom Culture Blueprint, a Culture Health Snapshot with key indicators, a weekly leadership rhythm that integrates Scripture, prayer, people, and performance, two redesigned people systems (such as hiring, 1:1s, or feedback), and a decision-making framework rooted in Scripture and wise stewardship." },
      { q: "How is the Kingdom Culture Intensive structured?", a: "Over 90 days, we meet for six 60-minute 1:1 coaching sessions (about every two weeks) and three 4-hour peer advisory group meetings. Between sessions, you'll have light-touch support via email or voice notes and, as needed, brief touch-base calls to keep you moving on your next faithful steps." },
      { q: "What is the investment for the Kingdom Culture Intensive?", a: "Investment depends on which coach you work with — Dr. John Lybarger and Jim Lybarger each run the intensive at a different price point. Either way, the engagement includes the full 90-day intensive, all tools and templates, and access to a peer advisory group and monthly coaching during the intensive. Request a fit conversation and we'll walk you through current pricing along with the full scope of what's included." },
      { q: "Is there support after the 90 days?", a: "Yes. Leaders often continue in a monthly peer advisory group and in monthly 1:1 coaching sessions. This provides continuing support as you live out what you've put in place and navigate new decisions and seasons." },
      { q: "What is unique about Dr. Lybarger's background?", a: "Dr. Lybarger brings extensive experience in coaching, consulting, and marketplace ministry with a focus on culture, leadership, and Kingdom-shaped strategy. He specializes in coaching senior executives who are under pressure to deliver results amid conflicting priorities, organizational complexity, and high-stakes decisions. Clients often tell him they move from feeling constantly on edge, firefighting, managing tense relationships, and second-guessing key calls to approaching tough situations with a clearer head, stronger relationships, and the confidence to decide and move forward. With over 30 years as an organizational psychologist and executive coach and nearly 20 years in senior executive roles with P&L and multi-site responsibility, Dr. Lybarger understands the realities his clients are navigating, from board expectations to frontline disruption. Leaders describe their work with Dr. Lybarger as the turning point where their days stop feeling like a series of urgent crises and start feeling like intentional, focused leadership. Dr. Lybarger is known for being both direct and deeply supportive, helping executives lead in a way that feels purposeful, intentional, wholehearted, and brave, in their organizations and in their lives." },
    ],
  },
  "marketplace-ministry": {
    heroImage: "/images/generated/marketplace-ministry-1440.webp",
    heroImageMobile: "/images/generated/marketplace-ministry-mobile.webp",
    slug: "marketplace-ministry",
    title: "Marketplace Ministry Consulting",
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
    faqs: [
      { q: "What is Marketplace Ministry Consulting?", a: "Marketplace Ministry Consulting is coaching and consulting for Christian business leaders who want their work to be more than just a means of making money. We help you treat your business as a platform for ministry, lead in a way that reflects Christ, and make daily decisions that honor God in real-world markets." },
      { q: "Who is Marketplace Ministry Consulting for?", a: "It is for Christian entrepreneurs, executives, and business owners who care about biblical values and wrestle with how to apply them to pricing, hiring, strategy, conflict, and culture. If you're tired of separating 'Sunday faith' from 'Monday leadership,' this consulting is for you." },
      { q: "What challenges does Marketplace Ministry Consulting address?", a: "We address the tensions many Christian leaders quietly carry: ethical gray areas that are legal but not clearly God-honoring, comparison with competitors who cut corners, pressure around money and growth, confusion about calling, and the desire to build a Christ-centered culture without being preachy or awkward." },
      { q: "What will I learn through Marketplace Ministry Consulting?", a: "You'll learn why marketplace ministry matters, what it actually looks like beyond branding and occasional prayer, and how to apply biblical frameworks to calling, culture, decision-making, stewardship, resilience, and influence. You'll leave with a simple next-step action plan you can implement right away." },
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
    faqs: [
      { q: "What is KF Collective?", a: "KF Collective is a Kingdom Factor initiative that highlights interviews with Christian business owners and leaders who want to share their stories about marketplace ministry. Through the KF Collective, you have an opportunity to tell your story and have it published on our website." },
    ],
  },
};
