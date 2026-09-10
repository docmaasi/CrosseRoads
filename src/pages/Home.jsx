import { useEffect } from 'react';
import { HomeScreen } from '@/components/home/home-screen';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import { BRAND } from '@/components/career-pathfinder/branding';
import { PAGES } from '@/data/page-meta';
import {
  applySeoHead,
  injectJsonLd,
  removeJsonLd,
  resetSeoHead,
} from '@/components/career-pathfinder/seo-head';
import '@/components/career-pathfinder/pathfinder.css';

const JSONLD_ID = 'home-jsonld';

/** The landing page. "/" used to redirect into the assessment. */
export default function Home() {
  useEffect(() => {
    applySeoHead({
      ...PAGES['/'],
      path: '/',
      siteName: BRAND.platformName,
    });
    injectJsonLd(JSONLD_ID, {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: BRAND.platformName,
      url: window.location.origin,
      description: BRAND.mission,
      inLanguage: 'en-US',
      publisher: {
        '@type': 'Organization',
        name: BRAND.platformName,
        founder: {
          '@type': 'Person',
          name: 'Dr. Kisa Crosse',
          honorificSuffix: 'M.D.',
          jobTitle: 'Family Physician and Founder',
        },
      },
    });
    return () => {
      resetSeoHead();
      removeJsonLd(JSONLD_ID);
    };
  }, []);

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <HomeScreen />
      </main>
      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
