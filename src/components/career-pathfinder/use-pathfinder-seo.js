import { useEffect } from 'react';
import { BRAND } from './branding';
import { FAQ_ITEMS } from './faq-section';
import { applySeoHead, injectJsonLd, removeJsonLd, resetSeoHead } from './seo-head';

// Per-route SEO for /CareerPathfinder: meta tags via the shared
// seo-head helpers, plus WebApplication + FAQPage JSON-LD so search
// engines, answer engines, and AI assistants can understand the page.

const TITLE = `Free Career Assessment — ${BRAND.productName} by ${BRAND.platformName}`;
const DESCRIPTION =
  'Discover the careers that fit who you are. A free 10-minute assessment ' +
  'matching your talents, interests, personality, and lifestyle to your top ' +
  '10 careers — with education paths, reality checks, and next steps.';
const JSONLD_ID = 'career-pathfinder-jsonld';

function buildJsonLd(canonical) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: BRAND.productName,
        url: canonical,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        description: DESCRIPTION,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        creator: { '@type': 'Person', name: 'Dr. Kisa Crosse' },
        publisher: { '@type': 'Organization', name: BRAND.platformName },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };
}

export function usePathfinderSeo() {
  useEffect(() => {
    applySeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: '/CareerPathfinder',
      siteName: BRAND.platformName,
    });
    injectJsonLd(JSONLD_ID, buildJsonLd(`${window.location.origin}/CareerPathfinder`));

    return () => {
      resetSeoHead();
      removeJsonLd(JSONLD_ID);
    };
  }, []);
}
