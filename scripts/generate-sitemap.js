import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = 'https://stevenene.top';

const projectIds = [
  'playstation-booking', 'alcohol-ecommerce', 'events-kenya-1', 'events-kenya-2',
  'milk-management-1', 'green-grocery', 'milk-management-2', 'job-seeker',
  'greensert-ai-1', 'trading-journal', 'hospital-management', 'tech-lovers',
  'truck-route', 'timebox-tool', 'spending-tracker', 'ai-tourguide',
  'community-platform', 'shopping-list', 'youtube-downloader', 'dairy-system',
  'frontend-template', 'therapy-website', 'network-initiated-push', 'bank-demo',
  'social-auth', 'debt-management'
];

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/projects', priority: '0.9', changefreq: 'weekly' },
  { url: '/blogs', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/resume', priority: '0.8', changefreq: 'monthly' },
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  projectIds.forEach(id => {
    sitemap += `  <url>
    <loc>${DOMAIN}/projects/${id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  const outputPath = join(__dirname, '..', 'public', 'sitemap.xml');
  writeFileSync(outputPath, sitemap);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();
