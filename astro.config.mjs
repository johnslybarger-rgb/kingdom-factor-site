import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import emdash from "emdash/astro";
import { d1, r2, sandbox } from "@emdash-cms/cloudflare";

const site = process.env.PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.purpose-drivenconsulting.net";

export default defineConfig({
  site,
  output: "server",
  adapter: cloudflare({
    configPath: "./wrangler.build.jsonc",
    imageService: "passthrough",
    prerenderEnvironment: "node",
  }),
  devToolbar: { enabled: false },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;
            const parts = id.split("node_modules/").pop()?.split("/") || [];
            const pkg = parts[0]?.startsWith("@") ? `${parts[0]}-${parts[1] || "pkg"}` : parts[0];
            if (!pkg) return "vendor-misc";
            return `vendor-${pkg.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
          },
        },
      },
    },
  },
  integrations: process.env.SKIP_EMDASH === "1" ? [] : [
    emdash({
      siteUrl: site,
      database: d1({ binding: "DB", session: "auto" }),
      storage: r2({
        binding: "MEDIA",
        publicUrl: process.env.EMDASH_MEDIA_PUBLIC_URL,
      }),
      sandboxRunner: sandbox(),
      admin: {
        siteName: "Kingdom Factor CMS",
      },
      maxUploadSize: 25 * 1024 * 1024,
    }),
  ],
});
