import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import { LegalPage } from '@/components/legal/legal-page';
import {
  PRIVACY_EFFECTIVE,
  PRIVACY_SECTIONS,
} from '@/components/legal/data/privacy';
import '@/components/career-pathfinder/pathfinder.css';

/** Privacy Policy — no accounts, no tracking, data stays on-device. */
export default function Privacy() {
  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader />
      <div className="flex-1">
        <LegalPage
          title="Privacy Policy"
          effective={PRIVACY_EFFECTIVE}
          sections={PRIVACY_SECTIONS}
          path="/Privacy"
          description="CrosseRoads privacy policy: no accounts, no tracking cookies, and everything you enter stays in your own browser."
        />
      </div>
      <SiteFooter />
    </div>
  );
}
