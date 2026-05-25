import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// A lightweight version of the data just for slugs, since importing from the React data file
// crashes Node.js due to Vite image imports (e.g. import img from './image.png')
const productSeries = [
    { slug: "commercial-cooler-motor-series", products: ["h-frame-capcan", "h-frame-metal-shell", "e-frame-metal-shell"] },
    { slug: "industrial-cooler-tent-cooler-motor-series", products: ["24-inch-aluminium", "30-inch-aluminium"] },
    { slug: "exhaust-fan-996-model-series", products: ["15-24-exhaust-fan"] },
    { slug: "mini-tank-water-pump-series", products: ["high-speed-motor"] },
    { slug: "metal-blade-and-legs-series", products: ["17-5-113", "18-5-113", "19-5-113", "24-metal-blade", "30-metal-blade", "15-metal-blade"] },
    { slug: "chimney-motor-series", products: ["chimney-152w"] }
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://geomotorsindia.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

const staticRoutes = [
  '', '/about', '/products', '/oem-solutions', 
  '/certifications', '/faq', '/contact', '/dealers'
];

let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xmlContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

staticRoutes.forEach(route => {
  xmlContent += `  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
});

productSeries.forEach(series => {
  xmlContent += `  <url>\n    <loc>${BASE_URL}/products/${series.slug}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  
  series.products.forEach(productId => {
    xmlContent += `  <url>\n    <loc>${BASE_URL}/products/${series.slug}/${productId}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  });
});

xmlContent += `</urlset>`;

// Write to the public folder in client
const destPath = path.join(__dirname, '../client/public/sitemap.xml');
fs.writeFileSync(destPath, xmlContent);
console.log('✅ Sitemap compiled successfully with lastmod dates to ' + destPath);