// Central place to manage per-page SEO metadata.
// Used by <App /> at runtime (via react-helmet-async) AND by
// scripts/prerender.mjs at build time to generate static HTML
// shells for each route (so crawlers/social bots that don't run
// JS still see the correct title/description per page).

export const SITE_URL = 'https://wwtico.com';
export const SITE_NAME = 'WELTWISSEN';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/weltwissen/weltwissen-mark.png`;

export interface SeoEntry {
  path: string; // route path, '' = home
  title: string;
  description: string;
}

export const seoEntries: SeoEntry[] = [
  {
    path: '',
    title: 'WELTWISSEN | Industrial Construction, Heavy Equipment & Project Logistics | Saudi Arabia',
    description:
      'WELTWISSEN delivers industrial construction, heavy equipment rental and project logistics for demanding sites across Saudi Arabia. Get a quote today.',
  },
  {
    path: 'services',
    title: 'Services | Industrial Construction & Project Logistics | WELTWISSEN',
    description:
      'Explore WELTWISSEN\u2019s industrial construction, engineering and project logistics services delivered across Saudi Arabia by an experienced field team.',
  },
  {
    path: 'fleet',
    title: 'Equipment Fleet & Heavy Machinery Rental | WELTWISSEN',
    description:
      'Browse WELTWISSEN\u2019s heavy equipment and machinery fleet available for rental in Saudi Arabia, from earthmoving to transport equipment.',
  },
  {
    path: 'industries',
    title: 'Industries We Serve | WELTWISSEN Saudi Arabia',
    description:
      'WELTWISSEN supports construction, energy, infrastructure and industrial sectors across Saudi Arabia with equipment, manpower and logistics.',
  },
  {
    path: 'about',
    title: 'About Us | WELTWISSEN',
    description:
      'Learn about WELTWISSEN\u2019s mission, vision and track record delivering industrial construction and logistics projects in Saudi Arabia.',
  },
  {
    path: 'contact',
    title: 'Contact Us | Request a Quote | WELTWISSEN',
    description:
      'Get in touch with WELTWISSEN for a project quote, equipment rental enquiry or general question. Our Al Khobar team responds quickly.',
  },
];

export function getSeoForPath(pathname: string): SeoEntry {
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  return seoEntries.find((e) => e.path === clean) || seoEntries[0];
}
