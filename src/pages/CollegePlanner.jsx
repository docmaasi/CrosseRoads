import { Printer, RotateCcw } from 'lucide-react';
import { Button } from '@/ui/button';
import { Progress } from '@/ui/progress';
import { usePlanner } from '@/components/college-planner/use-planner';
import { usePlannerSeo } from '@/components/college-planner/use-planner-seo';
import { PlannerHero } from '@/components/college-planner/planner-hero';
import { PhaseSection } from '@/components/college-planner/phase-section';
import { PlannerResources } from '@/components/college-planner/planner-resources';
import { PlannerFaq } from '@/components/college-planner/planner-faq';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import { PHASES } from '@/components/college-planner/data/phases';
import '@/components/career-pathfinder/pathfinder.css';

/**
 * College Admissions Planner — a standalone, public checklist covering
 * junior year through move-in day. Progress lives in localStorage;
 * nothing is sent to the backend.
 */
export default function CollegePlanner() {
  usePlannerSeo();
  const { checked, toggle, reset, phaseProgress, totalDone, totalItems } =
    usePlanner();

  const handleReset = () => {
    if (window.confirm('Clear all checked items and start fresh?')) reset();
  };

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader
        right={
          <div className="flex w-32 items-center gap-2 sm:w-44">
            <Progress
              value={(totalDone / totalItems) * 100}
              className="h-2 bg-stone-100 [&>div]:bg-gradient-to-r [&>div]:from-[#4a2373] [&>div]:to-[#17808d]"
            />
            <span className="shrink-0 text-xs text-stone-500">
              {totalDone}/{totalItems}
            </span>
          </div>
        }
      />

      <main className="flex-1">
        <PlannerHero
          phaseProgress={phaseProgress}
          totalDone={totalDone}
          totalItems={totalItems}
        />

        <div className="mx-auto max-w-3xl space-y-12 px-4 py-10">
          {PHASES.map((phase, index) => (
            <PhaseSection
              key={phase.id}
              phase={phase}
              index={index}
              progress={phaseProgress[index]}
              checked={checked}
              onToggle={toggle}
            />
          ))}

          <div className="cp-no-print flex flex-wrap justify-center gap-3">
            <Button variant="outline" onClick={() => window.print()}>
              <Printer className="mr-1.5 h-4 w-4" />
              Print my checklist
            </Button>
            <Button
              variant="outline"
              className="text-stone-500"
              onClick={handleReset}
            >
              <RotateCcw className="mr-1.5 h-4 w-4" />
              Reset progress
            </Button>
          </div>

          <PlannerResources />
          <PlannerFaq />
        </div>
      </main>

      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
