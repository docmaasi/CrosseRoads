import { useEffect } from 'react';
import { BRAND } from '../career-pathfinder/branding';
import {
  applySeoHead,
  injectJsonLd,
  removeJsonLd,
  resetSeoHead,
} from '../career-pathfinder/seo-head';

// Per-route SEO for /CollegePlanner (shared seo-head helpers), with
// WebApplication + FAQPage JSON-LD.

const TITLE = `Free College Admissions Planner & Checklist — by ${BRAND.platformName}`;
const DESCRIPTION =
  'A free interactive college admissions checklist for parents and students — ' +
  'junior-year foundations, month-by-month senior year deadlines, financial aid, ' +
  'and everything after acceptance through move-in day.';
const JSONLD_ID = 'college-planner-jsonld';

export const PLANNER_FAQ = [
  {
    question: 'What is the College Admissions Planner?',
    answer:
      'A free interactive checklist that walks families through the entire college ' +
      'admissions journey: junior-year preparation, month-by-month senior-year ' +
      'application milestones, financial aid steps, and everything between ' +
      'acceptance and move-in day. Check items off and your progress saves on your device.',
  },
  {
    question: 'When should college planning start?',
    answer:
      'Junior year. The work completed during junior year — community service, ' +
      'leadership, SAT/ACT preparation, campus visits, and a balanced college list — ' +
      'lays the groundwork for a successful senior year.',
  },
  {
    question: 'Why apply Early Action?',
    answer:
      'Applying early often results in earlier admission decisions and increased ' +
      'scholarship opportunities, and school counselors can complete paperwork while ' +
      'they are already focused on Early Action applicants. Families who stay ahead ' +
      'of deadlines often receive decisions and offers by December.',
  },
  {
    question: 'Is this planner free?',
    answer:
      'Yes — completely free, with no account or sign-up. Every external link points ' +
      'to an official source such as the Common Application, Federal Student Aid ' +
      '(FAFSA), or the College Board.',
  },
];

function buildJsonLd(canonical) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'College Admissions Planner',
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
        mainEntity: PLANNER_FAQ.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };
}

export function usePlannerSeo() {
  useEffect(() => {
    applySeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: '/CollegePlanner',
      siteName: BRAND.platformName,
    });
    injectJsonLd(JSONLD_ID, buildJsonLd(`${window.location.origin}/CollegePlanner`));

    return () => {
      resetSeoHead();
      removeJsonLd(JSONLD_ID);
    };
  }, []);
}
