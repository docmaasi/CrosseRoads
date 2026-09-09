import { useEffect } from 'react';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { PlatformAbout } from '@/components/career-pathfinder/platform-about';
import { FaqSection } from '@/components/career-pathfinder/faq-section';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import { BRAND } from '@/components/career-pathfinder/branding';
import { applySeoHead, resetSeoHead } from '@/components/career-pathfinder/seo-head';
import '@/components/career-pathfinder/pathfinder.css';

/**
 * The mission and the FAQs, on a page of their own.
 *
 * These used to live only on the Career Pathfinder intro screen, which meant
 * they vanished the moment a visitor started the assessment — and the menu
 * links pointing at them silently stopped working for every returning visitor.
 * A page that does not depend on assessment state cannot do that.
 */
export default function About() {
  useEffect(() => {
    applySeoHead({
      title: `Our mission — ${BRAND.platformName}`,
      description:
        'Why CrosseRoads exists, what it believes, and the physician and mother behind it. Guidance, support and opportunity for every household.',
      path: '/About',
      siteName: BRAND.platformName,
    });
    return resetSeoHead;
  }, []);

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 pb-6">
        <PlatformAbout />
        <FaqSection />
      </main>
      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
