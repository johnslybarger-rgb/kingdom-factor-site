import { defineMiddleware } from "astro:middleware";

/**
 * Canonicalize the host: 301 the bare apex (purpose-drivenconsulting.net) to
 * www.purpose-drivenconsulting.net so there is a single origin (passkeys are
 * origin-bound) and no duplicate-content split for search engines. The
 * workers.dev preview host is left alone; its pages carry a canonical tag
 * pointing at www, which handles dedup without breaking the preview.
 */
export const onRequest = defineMiddleware((context, next) => {
  const { hostname } = context.url;
  if (hostname === "purpose-drivenconsulting.net") {
    const target = new URL(context.url);
    target.hostname = "www.purpose-drivenconsulting.net";
    return context.redirect(target.toString(), 301);
  }
  return next();
});
