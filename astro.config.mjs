import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://lafirm.github.io',
  output: 'static',
  build: {
    outDir: './dist',
    assets: 'assets',
    format: 'directory',
  },
  vite: {
    build: {
      minify: 'terser',
      target: 'esnext',
    }
  },
  compressHTML: true,
  trailingSlash: 'ignore',
});
