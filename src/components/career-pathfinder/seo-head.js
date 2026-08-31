// Shared <head> mutation helpers for the public CrosseRoads pages
// (Career Pathfinder, College Planner). One implementation keeps the
// apply/reset behavior identical across pages.

const DEFAULT_TITLE = 'CoParent.Help';
const DEFAULT_DESC =
  'CoParent.Help - Manage your co-parenting communication, schedules, and expenses.';

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

/** Set title, description, canonical, Open Graph and Twitter tags. */
export function applySeoHead({ title, description, path, siteName }) {
  const canonical = `${window.location.origin}${path}`;
  document.title = title;
  setMeta('description', description);
  setCanonical(canonical);
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:url', canonical, 'property');
  setMeta('og:type', 'website', 'property');
  setMeta('og:site_name', siteName, 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
}

/**
 * Restore the head to the index.html defaults: title and description
 * are reset; canonical, og:* and twitter:* tags (which index.html does
 * not define) are removed entirely.
 */
export function resetSeoHead() {
  document.title = DEFAULT_TITLE;
  setMeta('description', DEFAULT_DESC);
  const managed = [
    'link[rel="canonical"]',
    'meta[property^="og:"]',
    'meta[name^="twitter:"]',
  ];
  for (const selector of managed) {
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
