// Runs after `vite build`. Vite/React here is a client-only SPA (no server-side
// rendering), so the raw index.html is identical for every route and only has
// the homepage's <title>/<meta> tags. Crawlers or bots that don't execute
// JavaScript (link-preview bots on Slack/WhatsApp/Twitter, some crawlers) would
// otherwise see the same title/description on every page.
//
// This script copies dist/index.html into dist/<route>/index.html for every
// route in seoConfig.ts and swaps in that route's own title/description/
// canonical/OG tags. Vercel serves the matching static file for that path
// automatically — no server config needed. The React app still hydrates on
// top and renders the full page exactly as before.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const indexPath = path.join(distDir, 'index.html');

const SITE_URL = 'https://wwtico.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/weltwissen/weltwissen-mark.png`;

const seoEntries = [
  { path: '', title: 'WELTWISSEN | Industrial Construction, Heavy Equipment & Project Logistics | Saudi Arabia', description: 'WELTWISSEN delivers industrial construction, heavy equipment rental and project logistics for demanding sites across Saudi Arabia. Get a quote today.' },
  { path: 'services', title: 'Services | Industrial Construction & Project Logistics | WELTWISSEN', description: "Explore WELTWISSEN's industrial construction, engineering and project logistics services delivered across Saudi Arabia by an experienced field team." },
  { path: 'fleet', title: 'Equipment Fleet & Heavy Machinery Rental | WELTWISSEN', description: "Browse WELTWISSEN's heavy equipment and machinery fleet available for rental in Saudi Arabia, from earthmoving to transport equipment." },
  { path: 'industries', title: 'Industries We Serve | WELTWISSEN Saudi Arabia', description: 'WELTWISSEN supports construction, energy, infrastructure and industrial sectors across Saudi Arabia with equipment, manpower and logistics.' },
  { path: 'about', title: 'About Us | WELTWISSEN', description: "Learn about WELTWISSEN's mission, vision and track record delivering industrial construction and logistics projects in Saudi Arabia." },
  { path: 'contact', title: 'Contact Us | Request a Quote | WELTWISSEN', description: 'Get in touch with WELTWISSEN for a project quote, equipment rental enquiry or general question. Our Al Khobar team responds quickly.' },
];

if (!existsSync(indexPath)) {
  console.error('[prerender] dist/index.html not found — run `vite build` first.');
  process.exit(1);
}

// Strip any tags this script injected on a previous run so re-running
// `npm run build` never accumulates duplicate canonical/OG/Twitter tags.
function stripPreviouslyInjected(html) {
  return html
    .replace(/\s*<link rel="canonical"[^>]*>/g, '')
    .replace(/\s*<meta property="og:[^"]*"[^>]*>/g, '')
    .replace(/\s*<meta name="twitter:[^"]*"[^>]*>/g, '');
}

const baseHtml = stripPreviouslyInjected(readFileSync(indexPath, 'utf-8'));

function buildHtmlFor(entry) {
  const canonical = `${SITE_URL}${entry.path ? `/${entry.path}` : ''}`;
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${entry.title}</title>`);

  if (html.includes('name="description"')) {
    html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${entry.description}" />`);
  } else {
    html = html.replace('</title>', `</title>\n    <meta name="description" content="${entry.description}" />`);
  }

  const extraTags = `
    <link rel="canonical" href="${canonical}" />
    <meta property="og:site_name" content="WELTWISSEN" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${entry.title}" />
    <meta property="og:description" content="${entry.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${DEFAULT_OG_IMAGE}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${entry.title}" />
    <meta name="twitter:description" content="${entry.description}" />`;

  html = html.replace('</head>', `${extraTags}\n  </head>`);
  return html;
}

for (const entry of seoEntries) {
  if (entry.path === '') {
    // Overwrite the root index.html with the same tags for consistency.
    writeFileSync(indexPath, buildHtmlFor(entry));
    continue;
  }
  const dir = path.join(distDir, entry.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.html'), buildHtmlFor(entry));
  console.log(`[prerender] wrote dist/${entry.path}/index.html`);
}

console.log('[prerender] done.');
