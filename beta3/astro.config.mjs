// @ts-check
import { defineConfig } from 'astro/config';

// Beta 3 – Engine room: Schematic. Served at https://aimpetus.ai/beta3/
export default defineConfig({
  site: 'https://aimpetus.ai',
  base: '/beta3/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Always emit external CSS files (cached across pages)
    inlineStylesheets: 'never',
  },
  // Lossless whitespace removal; the Astro 7 default ('jsx') can drop spaces in running copy
  compressHTML: true,
  devToolbar: { enabled: false },
  vite: {
    build: {
      // Never inline scripts or fonts as data: URIs – the site CSP only allows same-origin files
      assetsInlineLimit: 0,
    },
  },
});
