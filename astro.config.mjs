// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  base: 'STUDY-astro-tutorial',
  site: 'https://0nn7a.github.io/STUDY-astro-tutorial',
  outDir: './dist',
  output: 'static',
  integrations: [preact()],
});