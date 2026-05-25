import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { productSeries } from './client/src/data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Switch this to your live Vercel address
const BASE_URL = 'https://geomotorsindia.vercel.app';

const staticRoutes = [
  '', '/about', '/products', '/oem-solutions', 
  '/certifications', '/faq', '/contact', '/dealers'
];

let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xmlContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

staticRoutes.forEach(route => {
  xmlContent += `  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
});

productSeries.forEach(series => {
  xmlContent += `  <url>\n    <loc>${BASE_URL}/products/${series.slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  
  series.products.forEach(product => {
    xmlContent += `  <url>\n    <loc>${BASE_URL}/products/${series.slug}/${product.id}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  });
});

xmlContent += `</urlset>`;

fs.writeFileSync(path.join(__dirname, 'client/public/sitemap.xml'), xmlContent);
console.log('✅ Sitemap compiled successfully for geomotorsindia.vercel.app!');