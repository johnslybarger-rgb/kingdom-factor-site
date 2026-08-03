export const site = {
  name: "Kingdom Factor",
  url: import.meta.env.PUBLIC_SITE_URL || "https://www.purpose-drivenconsulting.net",
  description:
    "Peer advisory, executive coaching, and marketplace ministry for Christian business owners and leaders.",
  email: "john@purpose-drivenconsulting.net",
  phone: "(928) 273-8939",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/peer-advisory-groups/", label: "Peer Advisory" },
  { href: "/executive-coaching/", label: "Executive Coaching" },
  { href: "/purpose-driven-consulting/", label: "Consulting" },
  { href: "/books/", label: "Books" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/apply/", label: "Apply" },
];

export const publicRoutes = [
  { path: "/", label: "Home", priority: "1.0" },
  { path: "/peer-advisory-groups/", label: "Christian Peer Advisory Groups", priority: "0.9" },
  { path: "/executive-coaching/", label: "Executive Coaching Intensive", priority: "0.9" },
  { path: "/marketplace-ministry/", label: "Marketplace Ministry Consulting", priority: "0.8" },
  { path: "/collective/", label: "Kingdom Factor Collective", priority: "0.7" },
  { path: "/purpose-driven-consulting/", label: "Purpose Driven Consulting", priority: "0.8" },
  { path: "/books/", label: "Books and Resources", priority: "0.8" },
  { path: "/stop-leading-alone-workshop/", label: "Stop Leading Alone Workshop", priority: "0.8" },
  { path: "/stop-leading-alone-free-resources/", label: "Stop Leading Alone Free Resources", priority: "0.7" },
  { path: "/blog/", label: "Blog and Resources", priority: "0.7" },
  { path: "/about/", label: "About Purpose Driven Consulting and Kingdom Factor", priority: "0.7" },
  { path: "/apply/", label: "Apply", priority: "0.7" },
  { path: "/contact/", label: "Contact", priority: "0.6" },
  { path: "/privacy-policy/", label: "Privacy Policy", priority: "0.3" },
  { path: "/terms/", label: "Terms", priority: "0.3" },
];

export const offers = [
  {
    title: "Peer Advisory Groups",
    href: "/peer-advisory-groups/",
    audience: "Christian owners, senior executives, emerging owners, founders, and solopreneurs",
    summary:
      "A trusted circle for wise counsel, accountability, shared learning, and faith-integrated decision-making.",
  },
  {
    title: "Executive Coaching",
    href: "/executive-coaching/",
    audience: "Established owners, executives, and senior leaders",
    summary:
      "Private advisory for leaders carrying real responsibility, structured around clarity, stewardship, resilience, and faithful execution.",
  },
  {
    title: "Marketplace Ministry Consulting",
    href: "/marketplace-ministry/",
    audience: "Owners integrating faith and business",
    summary:
      "Coaching and consulting on bringing faith into decisions, culture, conflict, stewardship, pricing, hiring, and calling.",
  },
  {
    title: "Kingdom Factor Collective",
    href: "/collective/",
    audience: "Christian business leaders with stories to share",
    summary:
      "Building the world's largest collection of Christian business leadership stories—equipping, inspiring, and glorifying God in the marketplace.",
  },
  {
    title: "Purpose Driven Consulting",
    href: "/purpose-driven-consulting/",
    audience: "Owners and senior leaders ready to install systems",
    summary:
      "Faith-integrated organizational development, human resources, and operations consulting — the hands-on partner that turns Kingdom-shaped vision into installed practice.",
  },
];

export const pillars = [
  {
    title: "Peer Advisory",
    text: "Trusted counsel for leaders who do not want to carry major decisions alone.",
  },
  {
    title: "Kingdom Culture Intensive",
    text: "A bespoke, confidential 90-day intensive for Christian owners and senior leaders who are serious about aligning culture and leadership with the Kingdom while still competing and winning in the marketplace.",
  },
  {
    title: "Executive Coaching",
    text: "One-on-one coaching and structured reflection for Christian leaders.",
  },
  {
    title: "Marketplace Ministry Consulting",
    text: "Faith integration for the daily realities of business, leadership, culture, and stewardship.",
  },
];

export const approvalGates = [
  "Stats, market-size claims, pricing, testimonials, case studies, and founding/history claims require approval before public use.",
  "Calendar links, forms, CRM routing, email routing, and downloadable resources require approval before connection.",
  "Production deploy, DNS, Cloudflare resources, and client-facing preview links require Chris approval.",
];


export const people = [
  {
    name: "Dr. John Lybarger",
    role: "Executive coaching, peer advisory, and marketplace ministry",
    lane: "Executive advisory",
    image: "/images/people/john-lybarger-2026.jpg",
    fallbackInitials: "JL",
    summary:
      "Dr. John Lybarger brings coach-level discernment, organizational psychology, ministry perspective, and executive counsel to leaders carrying owner-level responsibility.",
    href: "/executive-coaching/",
  },
  {
    name: "James “Jim” Lybarger",
    role: "Peer community, story, values, and emerging-owner pathway",
    lane: "Peer community",
    image: "/images/people/jim-lybarger-headshot.jpg",
    fallbackInitials: "JL",
    summary:
      "Jim supports Christian owners and emerging leaders who need story, values alignment, confidence, and a grounded peer community as they build the next stage.",
    href: "/peer-advisory-groups/",
  },
];

export const bookHighlights = [
  "Stop Leading Alone",
  "Marketplace Ministry",
  "The Leadership Circle: Peer Advisory Groups",
  "Biblical Accountability",
  "Relational Intelligence",
  "The Leadership Development Blueprint",
  "The Coaching Skills Playbook",
  "Rise in Peer Community",
  "The Story You're Living",
  "Soar Like an Eagle",
];

export const seoOpportunities = [
  "Christian business peer advisory groups",
  "Christian CEO peer group",
  "faith based executive coaching",
  "marketplace ministry for business owners",
  "Christian business coaching",
  "peer advisory groups for Christian business leaders",
  "faith and business leadership",
  "Christian business owner community",
  "work as worship business leadership",
  "biblical accountability in business",
];
