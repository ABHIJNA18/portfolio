// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    // Book covers are linked from the web (e.g. Open Library); Astro downloads and
    // optimizes them at build time so the live site serves its own copies.
    remotePatterns: [{ protocol: 'https' }],
  },
});
