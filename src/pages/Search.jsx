import { useEffect } from 'react';
import { SearchPage } from '@/components/search/search-page';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import { BRAND } from '@/components/career-pathfinder/branding';
import { applySeoHead, resetSeoHead } from '@/components/career-pathfinder/seo-head';
import '@/components/career-pathfinder/pathfinder.css';

/** Site-wide search. Deliberately not in the sitemap — it has no content of
 *  its own, and an indexed empty search page helps nobody. */
export default function Search() {
  useEffect(() => {
    applySeoHead({
      title: `Search — ${BRAND.platformName}`,
      description:
        'Search every CrosseRoads worksheet, guide and vetted free resource. Runs entirely in your browser.',
      path: '/Search',
      siteName: BRAND.platformName,
    });
    return resetSeoHead;
  }, []);

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <SearchPage />
      </main>
      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
