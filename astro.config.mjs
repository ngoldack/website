import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ngoldack.de",
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
  output: "static",
  adapter: vercel({
    webAnalytics: true,
    speedInsights: true,
    imageService: true,
  }),
});
