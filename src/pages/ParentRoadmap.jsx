import { Printer } from 'lucide-react';
import { Button } from '@/ui/button';
import { useRoadmap } from '@/components/parent-roadmap/use-roadmap';
import { useRoadmapSeo } from '@/components/parent-roadmap/use-roadmap-seo';
import {
  PackageContents,
  RoadmapFaq,
  RoadmapHero,
  ServicesMenu,
} from '@/components/parent-roadmap/roadmap-sections';
import { AwardComparison } from '@/components/parent-roadmap/award-comparison';
import { CollegeListTracker } from '@/components/parent-roadmap/college-list-tracker';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import '@/components/career-pathfinder/pathfinder.css';

/**
 * First-Time College Parent Roadmap — the CrosseRoads package page.
 * The worksheet and tracker run entirely in the browser (localStorage);
 * consultations are booked by email. No prices are shown or implied.
 */
export default function ParentRoadmap() {
  useRoadmapSeo();
  const {
    schools,
    list,
    updateSchool,
    addSchool,
    removeSchool,
    updateEntry,
    addEntry,
    removeEntry,
  } = useRoadmap();

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader />

      <main className="flex-1">
        <RoadmapHero />
        <div className="mx-auto max-w-2xl space-y-12 px-4 py-10">
          <PackageContents />
          <AwardComparison
            schools={schools}
            updateSchool={updateSchool}
            addSchool={addSchool}
            removeSchool={removeSchool}
          />
          <CollegeListTracker
            list={list}
            updateEntry={updateEntry}
            addEntry={addEntry}
            removeEntry={removeEntry}
          />
          <div className="cp-no-print flex justify-center">
            <Button variant="outline" onClick={() => window.print()}>
              <Printer className="mr-1.5 h-4 w-4" />
              Print my comparison & list
            </Button>
          </div>
          <ServicesMenu />
          <RoadmapFaq />
        </div>
      </main>

      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
