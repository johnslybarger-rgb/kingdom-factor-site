function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const PRIORITY_MAP = {
  urgent: "Urgent",
  high: "High",
  normal: "Normal",
  medium: "Normal",
  low: "Low",
};

const TYPE_MAP = {
  content: "Content change",
  "content change": "Content change",
  design: "Design tweak",
  "design tweak": "Design tweak",
  bug: "Bug fix",
  "bug fix": "Bug fix",
  feature: "New feature",
  "new feature": "New feature",
  seo: "SEO request",
  "seo request": "SEO request",
  other: "Other",
};

function normalize(input, map, fallback) {
  const key = String(input || "").trim().toLowerCase();
  return map[key] || fallback;
}

async function handleFeedback(request, env) {
  try {
    const form = await request.formData();
    const honeypot = String(form.get("website") || "").trim();
    if (honeypot) return json({ success: true, requestId: "REQ-SKIPPED" });

    const businessName = String(form.get("businessName") || "Kingdom Factor").trim();
    const requestType = String(form.get("requestType") || form.get("type") || "").trim();
    const priority = String(form.get("priority") || "Normal").trim();
    const page = String(form.get("page") || "").trim();
    const title = String(form.get("title") || "").trim();
    const description = String(form.get("description") || "").trim();
    const submitterName = String(form.get("submitterName") || form.get("name") || "").trim();
    const submitterEmail = String(form.get("submitterEmail") || form.get("email") || "").trim();
    const screenshotUrl = String(form.get("screenshotUrl") || "").trim();

    if (!requestType || !title || !description) {
      return json({ error: "Please complete request type, title, and details." }, 400);
    }

    const requestId = `REQ-${Date.now().toString(36).toUpperCase()}`;
    const normalizedType = normalize(requestType, TYPE_MAP, "Other");
    const normalizedPriority = normalize(priority, PRIORITY_MAP, "Normal");

    const NOTION_API_KEY = env.NOTION_API_KEY;
    const NOTION_DATABASE_ID = env.NOTION_DATABASE_ID;

    if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
      console.log("[feedback] Notion vars not set, logging submission only", {
        requestId,
        businessName,
        title,
        type: normalizedType,
        priority: normalizedPriority,
        page,
        submitter: submitterName || submitterEmail || "anonymous",
        descriptionPreview: description.slice(0, 160),
      });
      return json({ success: true, requestId, queued: false });
    }

    const notionResponse = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
          "Title": { title: [{ text: { content: title } }] },
          "Business": { rich_text: [{ text: { content: businessName } }] },
          "Type": { select: { name: normalizedType } },
          "Priority": { select: { name: normalizedPriority } },
          "Status": { select: { name: "New" } },
          "Page URL": page ? { url: page } : { url: null },
          "Details": { rich_text: [{ text: { content: description.slice(0, 1900) } }] },
          ...(submitterName && { "Submitter Name": { rich_text: [{ text: { content: submitterName } }] } }),
          ...(submitterEmail && { "Submitter Email": { email: submitterEmail } }),
          ...(screenshotUrl && { "Screenshot URL": { url: screenshotUrl } }),
        },
      }),
    });

    if (!notionResponse.ok) {
      const errorBody = await notionResponse.text();
      console.error("[feedback] Notion API error", notionResponse.status, errorBody);
      return json({ error: "Request could not be filed. Please copy your notes and send them directly." }, 500);
    }

    return json({ success: true, requestId, queued: true });
  } catch (error) {
    console.error("[feedback] route error", error);
    return json({ error: "Something went wrong." }, 500);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/feedback" && request.method === "POST") {
      return handleFeedback(request, env);
    }
    if (url.pathname === "/api/feedback") {
      return json({ error: "Method not allowed" }, 405);
    }

    let response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    if (!url.pathname.includes('.')) {
      const indexUrl = new URL(request.url);
      indexUrl.pathname = url.pathname.replace(/\/$/, '') + '/index.html';
      response = await env.ASSETS.fetch(new Request(indexUrl, request));
      if (response.status !== 404) return response;
    }

    const notFoundUrl = new URL(request.url);
    notFoundUrl.pathname = '/404.html';
    return env.ASSETS.fetch(new Request(notFoundUrl, request));
  }
};
