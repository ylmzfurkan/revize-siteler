import { defineConfig } from "astro/config";

// GitHub Pages: https://ylmzfurkan.github.io/revize-siteler/asaf-insaat/
// Yerel önizleme için kök dizin: SITE_BASE=/ npm run dev
export default defineConfig({
  devToolbar: { enabled: false },
  site: process.env.SITE_URL || "https://ylmzfurkan.github.io",
  base: process.env.SITE_BASE || "/revize-siteler/asaf-insaat",
});
