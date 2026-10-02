// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The live address, used for link previews (LinkedIn, Slack, WhatsApp...).
  site: 'https://portfolio-abhijna-kanthila.vercel.app',
  image: {
    // Book covers and playlist art are linked from the web; Astro downloads and
    // optimizes them at build time so the live site serves its own copies.
    remotePatterns: [{ protocol: 'https' }],
  },
});
