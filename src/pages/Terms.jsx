import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import { LegalPage } from '@/components/legal/legal-page';
import {
  TERMS_EFFECTIVE,
  TERMS_SECTIONS,
} from '@/components/legal/data/terms';
import '@/components/career-pathfinder/pathfinder.css';

/** Terms of Use — free educational tools, plain-English terms. */
export default function Terms() {
  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader />
      <div className="flex-1">
        <LegalPage
          title="Terms of Use"
          effective={TERMS_EFFECTIVE}
          sections={TERMS_SECTIONS}
          path="/Terms"
          description="CrosseRoads terms of use: free self-guided educational tools, acceptable use, and disclaimers in plain English."
        />
      </div>
      <SiteFooter />
    </div>
  );
}
