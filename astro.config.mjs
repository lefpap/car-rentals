// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // env: {
  //   schema: {
  //     PUBLIC_SUPABASE_URL: envField.string({
  //       context: "client",
  //       access: "public",
  //       optional: true, // TODO: change this later
  //     }),
  //     PUBLIC_SUPABASE_ANON_KEY: envField.string({
  //       context: "client",
  //       access: "public",
  //       optional: true, // // TODO: change this later
  //     }),
  //   },
  // },

  vite: {
    plugins: [tailwindcss()],
  },

  // adapter: node({
  //   mode: "standalone",
  // }),

  site: "https://lefpap.github.io",
  base: "/car-rentals",
});
