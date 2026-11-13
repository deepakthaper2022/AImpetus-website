// @ts-check
import { defineConfig } from 'astro/config';

// Beta 2 – Engine room: Structured. Served at https://aimpetus.ai/beta2/
export default defineConfig({
  site: 'https://aimpetus.ai',
  base: '/beta2/',
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
