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
  "peer-advisory-groups": {
    heroImage: "/images/generated/advisory-room-1440.webp",
    heroImageMobile: "/images/generated/advisory-room-mobile.webp",
    slug: "peer-advisory-groups",
    title: "Christian Peer Advisory Groups",
    eyebrow: "Peer advisory",
    heading: "A trusted room for Christian owners and executives carrying real decisions.",
    description:
      "The confidential peer advisory group where faith, leadership pressures, business decisions, and wise counsel are brought into the room.",
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
      { q: "What are Kingdom Factor Peer Advisory Groups?", a: "Kingdom Factor Peer Advisory Groups are Christ-centered circles of business leaders who meet regularly for prayer, honest conversation, godly counsel, and practical problem-solving. They offer a safe place to bring real issues, receive wise feedback, and discern next faithful steps together." },
      { q: "How do peer advisory group meetings typically run?", a: "A typical meeting includes personal and business check-ins, sharing prayer requests and praises, reviewing key 'imperatives,' engaging with a focused content discussion or exercise, processing one or two crucial conversations, and offering godly counsel around real-time issues before closing in prayer and planning next steps." },
      { q: "How much do the peer advisory groups cost?", a: "Current pricing is John's groups at $600 per month and Jim's groups at $400 per month. This reflects ongoing support in a trusted circle of peers who share your commitment to Christ and to meaningful business leadership." },
      { q: "How are these groups different from networking or a Bible study?", a: "Peer advisory groups go much deeper than networking and are more focused on real decision-making than a typical Bible study. You'll experience confidential, Christ-centered conversations about live business and leadership issues, not just theory, while still grounding everything in Scripture, prayer, and character formation." },
      { q: "Who are peer advisory groups best suited for?", a: "They're best suited for Christian business owners, executives, and senior leaders who feel the weight of leadership, don't want to lead alone, and are willing to be honest and vulnerable to grow. If you're ready for peers who both encourage and challenge you, a group like this can be a lifeline." },
    ],
  },
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
      { q: "What is the investment for the Kingdom Culture Intensive?", a: "Current pricing is $6,000 with John and $3,000 with Jim. This includes the full 90-day intensive, all tools and templates, and access to a peer advisory group and monthly coaching during the 90-day intensive." },
      { q: "Is there support after the 90 days?", a: "Yes. Leaders often continue in a monthly peer advisory group and in monthly 1:1 coaching sessions. This provides continuing support as you live out what you've put in place and navigate new decisions and seasons." },
      { q: "What is unique about Dr. Lybarger's background?", a: "Dr. Lybarger brings extensive experience in coaching, consulting, and marketplace ministry with a focus on culture, leadership, and Kingdom-shaped strategy. He specializes in coaching senior executives who are under pressure to deliver results amid conflicting priorities, organizational complexity, and high-stakes decisions. Clients often tell him they move from feeling constantly on edge, firefighting, managing tense relationships, and second-guessing key calls to approaching tough situations with a clearer head, stronger relationships, and the confidence to decide and move forward. With over 30 years as an organizational psychologist and executive coach and nearly 20 years in senior executive roles with P&L and multi-site responsibility, Dr. Lybarger understands the realities his clients are navigating, from board expectations to frontline disruption. Leaders describe their work with Dr. Lybarger as the turning point where their days stop feeling like a series of urgent crises and start feeling like intentional, focused leadership. Dr. Lybarger is known for being both direct and deeply supportive, helping executives lead in a way that feels purposeful, intentional, wholehearted, and brave, in their organizations and in their lives." },
    ],
  },
  "peer-community": {
    heroImage: "/images/generated/collective-studio-1440.webp",
    heroImageMobile: "/images/generated/collective-studio-mobile.webp",
    slug: "peer-community",
    title: "Peer Community for Emerging Christian Owners",
    eyebrow: "Peer Community with James Lybarger",
    heading: "A peer community for founders building from faith, values, and story.",
    description:
      "The James Lybarger path helps emerging owners, solopreneurs, startup founders, and smaller business leaders find practical reflection, confidence, and trusted peers for the journey.",
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
      { q: "What is unique about Jim's background?", a: "Jim brings a unique blend of corrections experience, business ownership, and Christian life coaching, with a strong heart for second chances, practical change, and hope. He served for over seventeen years as a correctional officer in California, then transitioned into business leadership roles and entrepreneurship. That path gives him real-world insight into responsibility, personal change, and grace. Today, he coaches from a place of grounded faith, practical wisdom, and genuine compassion for people who want to move into a better future." },
      { q: "Can I learn more about each coach before I commit?", a: "Yes. You can explore coach bios, interviews, and stories that share how Dr. Lybarger and Jim think about faith, leadership, and transformation. These resources are designed to help you discern who is the best fit for your season and needs." },
      { q: "Who are the coaches involved?", a: "Two of the primary coaches featured are Dr. John S. Lybarger and James C. 'Jim' Lybarger." },
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
        body: "Why isolation and decision fatigue are common for owners and executives, what a Leadership Circle is, and how trusted peers can support accountability and renewal.",
        bullets: ["The cost of leading alone", "The power of trusted counsel", "What a circle looks like", "A safe next step"],
      },
      {
        title: "A safe next step",
        body: "Use the Leadership Circle as a low-friction way to understand the model, ask better questions, and discern whether a deeper advisory pathway fits.",
      },
    ],
    faqs: [
      { q: "What is 'The Leadership Circle: Where Iron Sharpens Iron' webinar?", a: "This one-hour webinar introduces you to the power of Christ-centered peer advisory groups for Christian business leaders. You'll see how a trusted circle of peers can end isolation, sharpen your discernment, strengthen your character, and sustain your calling over the long haul." },
      { q: "Who should attend the Leadership Circle webinar?", a: "It's ideal for business owners, CEOs, senior executives, bi-vocational leaders, and Christian professionals who carry significant responsibility but often feel alone at the top. If you're craving honest conversation, wise counsel, and faith-integrated community instead of surface-level networking, this webinar is designed for you." },
      { q: "What will I gain from the Leadership Circle webinar?", a: "You'll gain a clear picture of what a leadership circle is, how it works, and why it matters. We'll show how trusted peers help reveal blind spots, support calling discernment, protect you from burnout, and encourage growth in both character and competency — so your leadership becomes healthier, more sustainable, and more Christlike." },
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
    faqs: [
      { q: "What is the 'Marketplace Ministry: Lead Your Business as Worship' webinar?", a: "It is a live, one-hour webinar for Christian business leaders who want their work to be more than just a means of making money. You'll learn how to treat your business as a platform for ministry, lead in a way that reflects Christ, and make daily decisions that honor God in real-world markets." },
      { q: "Who is the Marketplace Ministry webinar for?", a: "This webinar is for Christian entrepreneurs, executives, and business owners who care about biblical values and wrestle with how to apply them to pricing, hiring, strategy, conflict, and culture. If you're tired of separating 'Sunday faith' from 'Monday leadership,' this session is for you." },
      { q: "What challenges does the Marketplace Ministry webinar address?", a: "We address the tensions many Christian leaders quietly carry: ethical gray areas that are legal but not clearly God-honoring, comparison with competitors who cut corners, pressure around money and growth, confusion about calling, and the desire to build a Christ-centered culture without being preachy or awkward." },
      { q: "What will I learn in the Marketplace Ministry webinar?", a: "You'll learn why marketplace ministry matters, what it actually looks like beyond branding and occasional prayer, and how to apply biblical frameworks to calling, culture, decision-making, stewardship, resilience, and influence. You'll leave with a simple next-step action plan you can implement right away." },
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
