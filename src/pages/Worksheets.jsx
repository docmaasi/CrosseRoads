import { useParams } from 'react-router-dom';
import { worksheetBySlug } from '@/components/worksheets/data/worksheets';
import { useWorksheetSeo } from '@/components/worksheets/use-worksheet-seo';
import { WorksheetsIndex } from '@/components/worksheets/worksheets-index';
import { WorksheetView } from '@/components/worksheets/worksheet-view';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import '@/components/career-pathfinder/pathfinder.css';
import '@/components/worksheets/worksheets.css';

/**
 * The free worksheet library — printable trackers, charts and checklists.
 * An unknown slug falls back to the index rather than a dead end.
 */
export default function Worksheets() {
  const { slug } = useParams();
  const worksheet = worksheetBySlug(slug);
  useWorksheetSeo(worksheet);

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <div className="cp-no-print">
        <CrosseRoadsHeader />
      </div>

      <main className="flex-1">
        {worksheet ? <WorksheetView worksheet={worksheet} /> : <WorksheetsIndex />}
      </main>

      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
