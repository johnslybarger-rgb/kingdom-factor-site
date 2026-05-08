import { publicRoutes, site } from "../lib/site";

export function GET() {
  const urls = publicRoutes
    .map((route) => {
      const loc = new URL(route.path, site.url).toString();
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        "    <changefreq>weekly</changefreq>",
        `    <priority>${route.priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
