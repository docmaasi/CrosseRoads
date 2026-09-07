import { usePackagesSeo } from '@/components/packages/use-packages-seo';
import {
  NoteFromKisa,
  PackagesFaq,
  PackagesHero,
  PowerHourCard,
  PowerMomSection,
  TierGrid,
} from '@/components/packages/packages-sections';
import { InquiryForm } from '@/components/packages/inquiry-form';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import '@/components/career-pathfinder/pathfinder.css';

/**
 * Work With Dr. Crosse — the consulting packages page. Prices are shown;
 * families inquire through the form and Dr. Crosse invoices directly.
 * This is the only page that sends anything to a server (the inquiry).
 */
export default function WorkWithMe() {
  usePackagesSeo();

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader />

      <main className="flex-1">
        <PackagesHero />
        <div className="mx-auto max-w-5xl space-y-16 px-4 py-12">
          <TierGrid />
          <div className="mx-auto max-w-2xl space-y-16">
            <PowerHourCard />
            <PowerMomSection />
            <NoteFromKisa />
            <InquiryForm />
            <PackagesFaq />
          </div>
        </div>
      </main>

      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
