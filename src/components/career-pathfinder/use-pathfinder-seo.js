import { useEffect } from 'react';
import { BRAND } from './branding';
import { FAQ_ITEMS } from './faq-section';
import { applySeoHead, injectJsonLd, removeJsonLd, resetSeoHead } from './seo-head';
import { PAGES } from '@/data/page-meta';

// Per-route SEO for /CareerPathfinder: meta tags via the shared
// seo-head helpers, plus WebApplication + FAQPage JSON-LD so search
// engines, answer engines, and AI assistants can understand the page.

const { title: TITLE, description: DESCRIPTION } = PAGES['/CareerPathfinder'];
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
