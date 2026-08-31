import { useEffect } from 'react';
import { BRAND } from '../career-pathfinder/branding';
import {
  applySeoHead,
  injectJsonLd,
  removeJsonLd,
  resetSeoHead,
} from '../career-pathfinder/seo-head';

const TITLE = `Wellness Transformation for Midlife Women — ${BRAND.platformName}`;
const DESCRIPTION =
  'A free, gentle wellness companion for midlife women: realistic starting ' +
  'plans, a simple habit tracker, daily energy and mood check-ins, trend ' +
  'charts, and a reflection journal. Private — everything stays on your device.';
const JSONLD_ID = 'wellness-jsonld';

export const WELLNESS_FAQ = [
  {
    question: 'What is Wellness Transformation?',
    answer:
      'A free wellness companion for midlife women, created by Dr. Kisa Crosse, ' +
      'a primary care physician. It offers a realistic starting plan based on your ' +
      'activity level, a simple habit tracker, daily energy/mood/sleep check-ins ' +
      'with trend charts, and a reflection journal. It is educational — not a diet, ' +
      'not medical advice.',
  },
  {
    question: 'Is my health information private?',
    answer:
      'Yes. Everything you enter — habits, check-ins, journal notes — is stored ' +
      'only in your own browser on your own device. Nothing is uploaded, and no ' +
      'account is required.',
  },
  {
    question: 'How much exercise do adults actually need?',
    answer:
      'The U.S. Physical Activity Guidelines recommend adults aim for at least 150 ' +
      'minutes of moderate-intensity activity per week plus muscle-strengthening ' +
      'activity on 2 or more days — and any amount of movement is better than none. ' +
      'Build toward it gradually, and talk with your clinician about what is right for you.',
  },
  {
    question: 'Is this a substitute for seeing a doctor?',
    answer:
      'No. This page is for education and self-reflection only. It is not medical ' +
      'advice, diagnosis, or treatment. Always consult your own clinician before ' +
      'changing your exercise, eating, or medications.',
  },
];

export function useWellnessSeo() {
  useEffect(() => {
    const canonical = `${window.location.origin}/Wellness`;
    applySeoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: '/Wellness',
      siteName: BRAND.platformName,
    });
    injectJsonLd(JSONLD_ID, {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          name: 'Wellness Transformation',
          url: canonical,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'Web',
          description: DESCRIPTION,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          creator: { '@type': 'Person', name: 'Dr. Kisa Crosse' },
          publisher: { '@type': 'Organization', name: BRAND.platformName },
        },
        {
          '@type': 'FAQPage',
          mainEntity: WELLNESS_FAQ.map((item) => ({
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
