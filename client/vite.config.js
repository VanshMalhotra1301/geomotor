import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginPrerender from 'vite-plugin-prerender';
import path from 'path';

// Programmatically establish routing paths using your array definitions
const staticRoutes = [
  '/', '/about', '/products', '/oem-solutions', 
  '/certifications', '/faq', '/contact', '/dealers'
];

export default defineConfig({
  plugins: [
    react(),
    vitePluginPrerender({
      staticDir: path.join(__dirname, 'dist'),
      // Pre-render static pages to guarantee instant initial loads and flawless scraping
      routes: staticRoutes,
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ],
});