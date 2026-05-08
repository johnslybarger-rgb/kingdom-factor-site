import { site } from "../lib/site";

export function GET() {
  return new Response(`User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site.url).toString()}
`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
