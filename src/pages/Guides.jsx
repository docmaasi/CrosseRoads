import { useParams } from 'react-router-dom';
import { findArticle } from '@/components/guides/data/articles';
import { useGuideSeo } from '@/components/guides/use-guide-seo';
import { GuidesIndex } from '@/components/guides/guides-index';
import { ArticleView } from '@/components/guides/article-view';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import '@/components/career-pathfinder/pathfinder.css';

/**
 * CrosseRoads Guides — public articles on career discovery and college
 * admissions. An unknown slug falls back to the guides index.
 */
export default function Guides() {
  const { slug } = useParams();
  const article = findArticle(slug);
  useGuideSeo(article);

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader />

      <main className="flex-1">
        {article ? <ArticleView article={article} /> : <GuidesIndex />}
      </main>

      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
