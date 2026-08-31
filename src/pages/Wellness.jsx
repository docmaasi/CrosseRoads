import { useWellness } from '@/components/wellness/use-wellness';
import { useWellnessSeo } from '@/components/wellness/use-wellness-seo';
import { WellnessHero } from '@/components/wellness/wellness-hero';
import { StartPlan } from '@/components/wellness/start-plan';
import { HabitTracker } from '@/components/wellness/habit-tracker';
import { DailyCheckin } from '@/components/wellness/daily-checkin';
import { TrendCharts } from '@/components/wellness/trend-charts';
import { WellnessJournal } from '@/components/wellness/wellness-journal';
import {
  WellnessFaq,
  WellnessResources,
} from '@/components/wellness/wellness-extras';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import '@/components/career-pathfinder/pathfinder.css';

/**
 * Wellness Transformation — a standalone, public wellness companion.
 * Educational only (see the in-page disclaimer); every entry stays in
 * localStorage on the visitor's device, nothing reaches the backend.
 */
export default function Wellness() {
  useWellnessSeo();
  const {
    level,
    focus,
    habits,
    checks,
    entries,
    weekDone,
    setProfile,
    toggleHabit,
    toggleCheck,
    saveEntry,
  } = useWellness();

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#faf3e8] via-[#fffcf5] to-[#f7eee0]">
      <CrosseRoadsHeader />

      <main className="flex-1">
        <WellnessHero />
        <div className="mx-auto max-w-2xl space-y-12 px-4 py-10">
          <StartPlan level={level} focus={focus} setProfile={setProfile} />
          <HabitTracker
            habits={habits}
            checks={checks}
            weekDone={weekDone}
            toggleHabit={toggleHabit}
            toggleCheck={toggleCheck}
          />
          <DailyCheckin entries={entries} saveEntry={saveEntry} />
          <TrendCharts entries={entries} />
          <WellnessJournal entries={entries} />
          <WellnessResources />
          <WellnessFaq />
        </div>
      </main>

      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
