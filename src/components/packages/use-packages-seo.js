import { useEffect } from 'react';
import { BRAND } from '../career-pathfinder/branding';
import {
  applySeoHead,
  injectJsonLd,
  removeJsonLd,
  resetSeoHead,
} from '../career-pathfinder/seo-head';
import { PAGES } from '@/data/page-meta';
import { CONSULTING_TIERS, PACKAGES_FAQ, POWER_HOUR } from './data/packages';

const { title: TITLE, description: DESCRIPTION } = PAGES['/WorkWithMe'];
const JSONLD_ID = 'work-with-me-jsonld';

const PROVIDER = {
  '@type': 'Person',
  name: 'Dr. Kisa Crosse',
  jobTitle: 'Physician, Educator, and College Consultant',
};

export function usePackagesSeo() {
  useEffect(() => {
    const canonical = `${window.location.origin}/WorkWithMe`;
    applySeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: '/WorkWithMe',
      siteName: BRAND.platformName,
    });

    // These are the only paid Offers on the site. The free-tool pages
    // correctly declare price "0" and must stay that way.
    const offers = [
      ...CONSULTING_TIERS.map((tier) => ({
        '@type': 'Offer',
        name: tier.name,
        description: tier.summary,
        price: String(tier.price),
        priceCurrency: 'USD',
        url: `${canonical}#${tier.slug}`,
        availability: 'https://schema.org/InStock',
      })),
      {
        '@type': 'Offer',
        name: POWER_HOUR.name,
        description: POWER_HOUR.summary,
        price: '150',
        priceCurrency: 'USD',
        url: `${canonical}#power-hour`,
        availability: 'https://schema.org/InStock',
      },
    ];

    injectJsonLd(JSONLD_ID, {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'CrosseRoads College Consulting',
          serviceType: 'College admissions consulting',
          url: canonical,
          description: DESCRIPTION,
          provider: PROVIDER,
          brand: { '@type': 'Organization', name: BRAND.platformName },
          areaServed: 'US',
          offers,
        },
        {
          '@type': 'FAQPage',
          mainEntity: PACKAGES_FAQ.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        },
      ],
    });

    return () => {
      resetSeoHead();
      removeJsonLd(JSONLD_ID);
    };
  }, []);
}
