// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://madaria.fr',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
