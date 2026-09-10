// Shared <head> mutation helpers for the public CrosseRoads pages
// (Career Pathfinder, College Planner). One implementation keeps the
// apply/reset behavior identical across pages.

import { DEFAULT_META, OG_IMAGE_URL, SITE_NAME, SITE_ORIGIN } from '@/data/page-meta';

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Set title, description, canonical, Open Graph and Twitter tags.
 *
 * The optional arguments carry article metadata: keywords, the Open Graph
 * article type, publication date, author and section.
 *
 * These are set from JavaScript, which social crawlers do not run — so what
 * they actually read is the markup `scripts/prerender.mjs` bakes into a static
 * file per route at build time. Both sides take their copy from
 * src/data/page-meta.ts so the two always agree; this function is what keeps
 * the head correct as a visitor moves between routes without a page load.
 */
export function applySeoHead({
  title,
  description,
  path,
  siteName,
  keywords,
  type = 'website',
  publishedTime,
  author,
  section,
}) {
  const canonical = `${SITE_ORIGIN}${path}`;
  document.title = title;
  setMeta('description', description);
  setCanonical(canonical);
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:url', canonical, 'property');
  setMeta('og:type', type, 'property');
  if (keywords?.length) setMeta('keywords', keywords.join(', '));
  if (publishedTime) setMeta('article:published_time', publishedTime, 'property');
  if (author) {
    setMeta('article:author', author, 'property');
    setMeta('author', author);
  }
  if (section) setMeta('article:section', section, 'property');
  setMeta('og:site_name', siteName, 'property');
  setMeta('og:image', OG_IMAGE_URL, 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', OG_IMAGE_URL);
}

/**
 * Restore the head to the site defaults as a page unmounts.
 *
 * This used to delete the og:* and twitter:* tags outright, on the belief that
 * index.html did not define any. It does — and every prerendered page now
 * defines a full set — so deleting them left whichever page came next briefly
 * describing nothing at all. Restoring the homepage set instead means the head
 * is always answerable, whatever order the routes are visited in.
 *
 * The article-only tags have no default and are still removed.
 */
export function resetSeoHead() {
  applySeoHead({
    title: DEFAULT_META.title,
    description: DEFAULT_META.description,
    path: '/',
    siteName: SITE_NAME,
  });
  for (const selector of [
    'meta[property^="article:"]',
    'meta[name="keywords"]',
    'meta[name="author"]',
  ]) {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  }
}

/** Inject (or replace) a JSON-LD structured-data block by element id. */
export function injectJsonLd(id, data) {
  document.getElementById(id)?.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function removeJsonLd(id) {
  document.getElementById(id)?.remove();
}
