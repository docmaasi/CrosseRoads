import { useEffect } from 'react';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { ResourceLibrary } from '@/components/career-pathfinder/results/resource-library';
import { WorldwideDirectory } from '@/components/career-pathfinder/results/worldwide-directory';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import { BRAND } from '@/components/career-pathfinder/branding';
import { DIRECTORY } from '@/data/resource-directory';
import { applySeoHead, resetSeoHead } from '@/components/career-pathfinder/seo-head';
import '@/components/career-pathfinder/pathfinder.css';

/**
 * The curated career library and the worldwide directory, on a page of their
 * own — for the same reason as About: they were unreachable to anyone who had
 * started the assessment.
 */
export default function Resources() {
  useEffect(() => {
    applySeoHead({
      title: `Free resources — ${BRAND.platformName}`,
      description:
        `${DIRECTORY.length} free, vetted resources from governments, universities and established nonprofits in 20 countries, plus the career library. No account, no cost.`,
      path: '/Resources',
      siteName: BRAND.platformName,
    });
    return resetSeoHead;
  }, []);

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <div className="mx-auto max-w-2xl space-y-10 px-4 py-10">
          <header>
            <h1 className="bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text font-serif text-3xl font-bold text-transparent">
              Free resources
            </h1>
            <p className="mt-2 leading-relaxed text-stone-600">
              A short, hand-picked career library, and {DIRECTORY.length} free
              resources from governments, universities and established nonprofits
              across 20 countries. Every link was opened and checked by hand.
            </p>
          </header>

          <ResourceLibrary />
          <WorldwideDirectory />
        </div>
      </main>
      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
