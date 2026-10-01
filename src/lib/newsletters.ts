export interface NewsletterIssue {
  slug: string;
  month: string;
  publishedLabel: string;
  title: string;
  description: string;
  subject: string;
  preheader: string;
  theme: string;
  letter: string[];
  reflectionQuestion: string;
  quote: string;
  signsTitle: string;
  signs: { title: string; text: string }[];
  signsClosing: string;
  frameworkTitle: string;
  frameworkIntro: string;
  shifts: { from: string; to: string }[];
  practiceTitle: string;
  practiceIntro: string;
  practice: { title: string; text: string }[];
  resource: { title: string; text: string; href: string; label: string };
  continueTitle: string;
  continueText: string;
}

export const newsletters: NewsletterIssue[] = [
  {
    slug: "october-2026",
    month: "October 2026",
    publishedLabel: "Monthly Leadership Letter · October 2026",
    title: "The Decision You Already Know You Need to Make",
    description:
      "A practical courage and integrity check for Christian leaders facing a hard decision, drawn from Stop Leading Alone.",
    subject: "The Decision You Already Know You Need to Make",
    preheader:
      "A four-question courage check for acting with truth and integrity under pressure.",
    theme: "Courageous integrity turns private conviction into faithful action, even while fear is present.",
    letter: [
      "Some leadership decisions are unclear. Others are painfully clear. You already know the conversation that needs to happen, the boundary that needs to be set, or the truth that needs to be named.",
      "Delay can look wise for a while. You gather one more fact, wait for a cleaner moment, or protect short-term peace. Meanwhile, the strain grows in you, your relationships, and your culture.",
      "Stop Leading Alone joins courage with integrity. Courage gives conviction movement. Integrity keeps that movement aligned with what is true, good, and entrusted by God.",
    ],
    reflectionQuestion: "What do I already know is true, and what faithful action does it require?",
    quote: "Courage is not the absence of fear. It is the willingness to do what is true and necessary while fear is still present.",
    signsTitle: "Three signs that delay may be wearing the clothes of wisdom",
    signs: [
      {
        title: "You keep waiting for a painless moment.",
        text: "The same issue remains after more time, more thought, and more prayer. The hoped-for clean option never arrives.",
      },
      {
        title: "You call comfort “peace.”",
        text: "You preserve short-term ease while trust thins, expectations blur, or a needed boundary remains unspoken.",
      },
      {
        title: "You need to control the outcome before you act.",
        text: "You know the faithful step, yet you hesitate until approval, certainty, or protection from criticism feels guaranteed.",
      },
    ],
    signsClosing: "These signs are not a call to rush. They are an invitation to discern whether delay is serving wisdom or protecting fear.",
    frameworkTitle: "Four movements toward courageous integrity",
    frameworkIntro: "Faithful action grows when conviction, motive, and behavior come back into alignment.",
    shifts: [
      { from: "clarity alone", to: "truth expressed in action" },
      { from: "strategic delay", to: "wise, timely response" },
      { from: "self-protection", to: "stewardship of what God entrusted" },
      { from: "private conviction", to: "public obedience with dignity" },
    ],
    practiceTitle: "Take a 15-minute courage and integrity pause",
    practiceIntro: "Bring one delayed decision before God and write a plain answer to each question.",
    practice: [
      {
        title: "Name the truth.",
        text: "What do I already know is true here?",
      },
      {
        title: "Surface the fear.",
        text: "What am I afraid I will lose if I act?",
      },
      {
        title: "Define faithful action.",
        text: "What would courage with integrity look like in one specific conversation, boundary, or decision?",
      },
      {
        title: "Invite wise support.",
        text: "Who can help me test my motives, prepare well, and follow through without shame?",
      },
    ],
    resource: {
      title: "Courage & Integrity Under Pressure",
      text: "Use this decision worksheet to name the pressure, identify what fear is protecting, clarify the truthful action, and prepare to act with both courage and care.",
      href: "/stop-leading-alone-free-resources/#courage-integrity-worksheet",
      label: "Open the decision worksheet",
    },
    continueTitle: "Let truth become faithful action.",
    continueText: "Explore Stop Leading Alone and other books by John and Jim, or learn how Purpose Driven Consulting and Kingdom Factor help Christian leaders grow through executive coaching, consulting, and peer advisory community.",
  },
  {
    slug: "september-2026",
    month: "September 2026",
    publishedLabel: "Monthly Leadership Letter · September 2026",
    title: "When Good Responsibilities Pull Your Life Out of Alignment",
    description:
      "A practical whole-life alignment check for reconnecting faith, work, family, and rest, drawn from Stop Leading Alone.",
    subject: "When Good Responsibilities Pull Your Life Out of Alignment",
    preheader:
      "A four-part alignment check for reconnecting faith, work, family, and rest.",
    theme: "Whole-life leadership begins when faith, work, family, and rest belong to one coherent life under God.",
    letter: [
      "Most Christian leaders do not choose a fragmented life. Drift often begins with good motives: serving people, stewarding opportunity, meeting a need, or carrying a demanding season.",
      "Over time, temporary strain can become a normal pattern. Work receives your best attention. Family receives what remains. Prayer becomes emergency maintenance. Rest happens physically while your mind stays on call.",
      "Stop Leading Alone calls this a question of congruence. The goal is not a perfectly balanced calendar. It is a life in which your faith, decisions, relationships, pace, and private character tell the same story.",
    ],
    reflectionQuestion: "Which part of my life is no longer connected to the whole?",
    quote: "Christian leadership is not only about behavior. It is about congruence.",
    signsTitle: "Three signs your life may be drifting out of alignment",
    signs: [
      {
        title: "Work follows you into every room.",
        text: "Your body is home while your attention stays with unfinished decisions, tension, or tomorrow’s demands.",
      },
      {
        title: "Faith feels separate from practical leadership.",
        text: "Prayer and Scripture remain important, yet they rarely shape your pace, emotional posture, money choices, or response to conflict in real time.",
      },
      {
        title: "Endurance has become your measure of faithfulness.",
        text: "You assume that continuing to function means the current way of leading is forming you well.",
      },
    ],
    signsClosing: "These signs are not an invitation to shame. They are an invitation to tell the truth early, before a demanding season becomes a divided life.",
    frameworkTitle: "Four movements toward whole-life leadership",
    frameworkIntro: "Integration grows through honest attention and one faithful change at a time.",
    shifts: [
      { from: "unexamined accumulation", to: "noticing what has drifted" },
      { from: "managing appearances", to: "naming what is true" },
      { from: "compartmentalized faith", to: "faith shaping daily decisions" },
      { from: "constant availability", to: "a rhythm that protects presence" },
    ],
    practiceTitle: "Take a 20-minute whole-life alignment check",
    practiceIntro: "Bring your calendar, a blank page, and a willingness to see your current season clearly.",
    practice: [
      {
        title: "Name the spheres.",
        text: "Write four headings: faith, work, family, and rest.",
      },
      {
        title: "Notice the drift.",
        text: "Under each heading, write one sentence about what is healthy and one about what feels thin, crowded, or disconnected.",
      },
      {
        title: "Trace the pressure.",
        text: "Ask, “What demand, fear, habit, or unexamined yes is pulling these parts apart?”",
      },
      {
        title: "Restore one rhythm.",
        text: "Choose one change for the next seven days that reconnects belief and practice: a protected meal, a decision pause, an honest conversation, or a true period of rest.",
      },
    ],
    resource: {
      title: "The Calling Reflection Guide",
      text: "Use this guide to name what God has placed in your hand, notice where current strategy competes with that assignment, and test your next decision through stewardship rather than pressure.",
      href: "/stop-leading-alone-free-resources/#the-calling-reflection-guide",
      label: "Open the Calling Reflection Guide",
    },
    continueTitle: "Lead from one coherent life.",
    continueText: "Explore Stop Leading Alone and other books by John and Jim, or learn how Purpose Driven Consulting and Kingdom Factor help Christian leaders grow through executive coaching, consulting, and peer advisory community.",
  },
  {
    slug: "august-2026",
    month: "August 2026",
    publishedLabel: "Monthly Leadership Letter · August 2026",
    title: "The Leadership Weight You Were Never Meant to Carry Alone",
    description:
      "Three signs of hidden leadership isolation and one practical step toward a wiser room, drawn from Stop Leading Alone.",
    subject: "The Leadership Weight You Were Never Meant to Carry Alone",
    preheader:
      "This month: three signs of hidden leadership isolation and one practical step toward a wiser room.",
    theme: "Strong leadership is not silent endurance. It is learning to carry responsibility with truth, wise counsel, and trusted support.",
    letter: [
      "Leadership can look strong on the outside while growing strained on the inside. You may keep making decisions, caring for people, and moving the mission forward while quietly carrying more than anyone knows.",
      "Stop Leading Alone was written for Christian business and ministry leaders facing that tension. The answer is not to abandon responsibility. It is to stop confusing isolation with strength.",
    ],
    reflectionQuestion: "Where do you need a wiser room?",
    quote: "There is a difference between carrying responsibility and carrying it alone.",
    signsTitle: "Three signs that isolation may be shaping your leadership",
    signs: [
      {
        title: "Important decisions stay private too long.",
        text: "You process high-stakes choices alone until your options feel narrow and the pressure feels personal.",
      },
      {
        title: "You appear steady while becoming reactive.",
        text: "Your competence is still visible, while urgency, fatigue, or frustration is quietly directing your pace.",
      },
      {
        title: "People know your results, not your reality.",
        text: "You have many relationships and few places where you can speak honestly about what leadership is costing you.",
      },
    ],
    signsClosing: "These signs do not mean you are weak or failing. They may mean it is time to seek connection, counsel, and accountability before pressure distorts your perspective.",
    frameworkTitle: "Five shifts toward healthier leadership",
    frameworkIntro: "The book describes five movements that help leaders become more integrated, discerning, and faithful over time.",
    shifts: [
      { from: "isolation", to: "connection" },
      { from: "control", to: "collaboration" },
      { from: "performance", to: "purpose" },
      { from: "knowledge", to: "wisdom" },
      { from: "success", to: "legacy" },
    ],
    practiceTitle: "Hold one 20-minute “wiser room” conversation",
    practiceIntro: "Choose one trusted person who can listen without flattery, speak with courage, and keep confidence.",
    practice: [
      {
        title: "Name the weight.",
        text: "Say, “Here is the leadership issue I have been carrying privately.”",
      },
      {
        title: "Invite perspective.",
        text: "Ask, “What might I be missing, avoiding, or assuming?”",
      },
      {
        title: "Choose one faithful step.",
        text: "Decide what you will do, say, stop, or seek next.",
      },
      {
        title: "Schedule follow-up.",
        text: "Give the relationship permission to ask what happened.",
      },
    ],
    resource: {
      title: "Do I Have a Wiser Room?",
      text: "Use this practical readiness checklist to consider whether your current relationships offer truth, perspective, challenge, encouragement, and spiritually grounded counsel.",
      href: "/stop-leading-alone-free-resources/#why-leaders-need-a-wiser-room",
      label: "Open the Wiser Room resource",
    },
    continueTitle: "Real conversations. Real support. Real leadership growth.",
    continueText: "Explore Stop Leading Alone and other books by John and Jim, or learn how Purpose Driven Consulting and Kingdom Factor help Christian leaders grow through executive coaching, consulting, and peer advisory community.",
  },
];

export const newsletterBySlug = (slug: string | undefined) =>
  newsletters.find((issue) => issue.slug === slug);
