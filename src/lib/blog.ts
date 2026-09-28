const readerQuestions: Record<string, string> = {
  "stop-leading-alone-01-the-success-that-still-feels-heavy": "Why can success still feel heavy for Christian leaders?",
  "stop-leading-alone-02-why-christian-leaders-still-lead-alone-even-when-they-know-better": "Why do Christian leaders still lead alone when they know better?",
  "stop-leading-alone-03-when-faith-work-and-family-start-to-drift-apart": "How can Christian leaders recognize when faith, work, and family are drifting apart?",
  "stop-leading-alone-04-real-growth-begins-inside-out": "Why does lasting leadership growth begin on the inside?",
  "stop-leading-alone-05-the-kingdom-leadership-framework-leading-with-calling-character-and-community": "What makes a Kingdom-centered leadership framework different?",
  "stop-leading-alone-06-what-makes-this-approach-different": "What makes faith-integrated leadership development different?",
  "stop-leading-alone-07-calling-under-pressure-when-the-work-gets-heavy-and-the-vision-gets-blurry": "How can leaders stay connected to their calling under pressure?",
  "stop-leading-alone-08-the-inner-operating-system-every-leader-carries": "How does a leader's inner operating system shape daily decisions?",
  "rise-in-peer-community-01-you-were-called-to-lead-but-you-were-also-called-to-belong": "Why are Christian leaders called both to lead and to belong?",
  "rise-in-peer-community-02-the-invisible-weight-every-leader-carries": "What invisible weight do Christian leaders carry?",
  "rise-in-peer-community-03-the-myth-of-the-lone-leader-and-why-it-s-costing-you": "What does the lone-leader myth cost you?",
  "rise-in-peer-community-04-formation-flight-god-s-design-for-how-leaders-move-together": "What can formation flight teach Christian leaders about moving together?",
  "rise-in-peer-community-05-what-real-sharpening-actually-looks-like": "What does real peer sharpening look like?",
  "rise-in-peer-community-06-from-image-management-to-integrity": "How can trusted peers help leaders move from image management to integrity?",
  "rise-in-peer-community-07-trust-the-anvil-that-makes-sharpening-possible": "Why is trust essential for honest peer sharpening?",
  "rise-in-peer-community-08-grace-and-truth-in-the-same-room": "How can a peer circle hold grace and truth together?",
};

export function getReaderQuestion(slug: string | undefined): string {
  return (slug && readerQuestions[slug]) || "What does this mean for your leadership?";
}

type PortableTextBlock = {
  style?: string;
  children?: Array<{ text?: string }>;
};

export function getArticleSummary(blocks: unknown, fallback: unknown): string {
  const fallbackText = String(fallback ?? "").trim();
  if (fallbackText && /[.!?][”"']?$/.test(fallbackText)) return fallbackText;

  if (!Array.isArray(blocks)) return fallbackText;

  const paragraphs: string[] = [];
  for (const rawBlock of blocks) {
    const block = rawBlock as PortableTextBlock;
    if (block?.style && block.style !== "normal") continue;
    const text = Array.isArray(block?.children)
      ? block.children.map((child) => child?.text ?? "").join("").trim()
      : "";
    if (!text) continue;
    paragraphs.push(text);
    if (paragraphs.join(" ").length >= 220 || paragraphs.length >= 3) break;
  }

  const joined = paragraphs.join(" ");
  if (!joined) return fallbackText;

  const sentences = joined.match(/.*?[.!?][”"']?(?:\s|$)/g) ?? [joined];
  let summary = "";
  for (const sentence of sentences) {
    const candidate = `${summary} ${sentence.trim()}`.trim();
    if (summary && candidate.length > 360) break;
    summary = candidate;
    if (summary.length >= 180) break;
  }

  return summary || joined;
}
