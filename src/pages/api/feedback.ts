import type { APIRoute } from "astro";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const PRIORITY_MAP: Record<string, string> = {
  urgent: "Urgent",
  high: "High",
  normal: "Normal",
  medium: "Normal",
  low: "Low",
};

const TYPE_MAP: Record<string, string> = {
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

function normalize(input: FormDataEntryValue | string | null, map: Record<string, string>, fallback: string) {
  const key = String(input || "").trim().toLowerCase();
  return map[key] || fallback;
}

function getRuntimeEnv(locals: App.Locals): Record<string, string | undefined> {
  return ((locals as any).runtime?.env || {}) as Record<string, string | undefined>;
}

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    let form: FormData;
    if (contentType.includes("application/x-www-form-urlencoded")) {
      const body = await request.text();
      const params = new URLSearchParams(body);
      form = new FormData();
      params.forEach((value, key) => form.append(key, value));
    } else {
      form = await request.formData();
    }

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
    console.log("[feedback] submission received", {
      requestId,
      businessName,
      title,
      type: normalizedType,
      priority: normalizedPriority,
      page,
      submitter: submitterName || submitterEmail || "anonymous",
      screenshotUrl: screenshotUrl || undefined,
      descriptionPreview: description.slice(0, 160),
    });

    return json({ success: true, requestId, queued: true });
  } catch (error) {
    console.error("[feedback] route error", error);
    return json({ error: "Something went wrong." }, 500);
  }
};

export const ALL: APIRoute = async () => json({ error: "Method not allowed" }, 405);
