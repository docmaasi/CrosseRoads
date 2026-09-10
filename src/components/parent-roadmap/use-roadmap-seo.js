import { useEffect } from 'react';
import { BRAND } from '../career-pathfinder/branding';
import {
  applySeoHead,
  injectJsonLd,
  removeJsonLd,
  resetSeoHead,
} from '../career-pathfinder/seo-head';
import { PAGES } from '@/data/page-meta';
import { ROADMAP_FAQ } from './data/package';

const { title: TITLE, description: DESCRIPTION } = PAGES['/ParentRoadmap'];
const JSONLD_ID = 'parent-roadmap-jsonld';

export function useRoadmapSeo() {
  useEffect(() => {
    const canonical = `${window.location.origin}/ParentRoadmap`;
    applySeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: '/ParentRoadmap',
      siteName: BRAND.platformName,
    });
    injectJsonLd(JSONLD_ID, {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'First-Time College Parent Roadmap',
          serviceType: 'College admissions planning for parents',
          url: canonical,
          description: DESCRIPTION,
          provider: {
            '@type': 'Person',
            name: 'Dr. Kisa Crosse',
            jobTitle: 'Physician, Educator, and Founder',
          },
          brand: { '@type': 'Organization', name: BRAND.platformName },
        },
        {
          '@type': 'FAQPage',
          mainEntity: ROADMAP_FAQ.map((item) => ({
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
