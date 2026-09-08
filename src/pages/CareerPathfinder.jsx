import { AnimatePresence, motion } from 'framer-motion';
import { Progress } from '@/ui/progress';
import { useAssessment } from '@/components/career-pathfinder/use-assessment';
import { usePathfinderSeo } from '@/components/career-pathfinder/use-pathfinder-seo';
import { IntroScreen } from '@/components/career-pathfinder/intro-screen';
import { SectionScreen } from '@/components/career-pathfinder/section-screen';
import { ResultsScreen } from '@/components/career-pathfinder/results/results-screen';
import { CrosseRoadsHeader } from '@/components/career-pathfinder/crosseroads-header';
import { FaqSection } from '@/components/career-pathfinder/faq-section';
import { PlatformAbout } from '@/components/career-pathfinder/platform-about';
import { ResourceLibrary } from '@/components/career-pathfinder/results/resource-library';
import { WorldwideDirectory } from '@/components/career-pathfinder/results/worldwide-directory';
import { SiteFooter } from '@/components/career-pathfinder/site-footer';
import { TOTAL_QUESTIONS } from '@/components/career-pathfinder/data/sections';
import '@/components/career-pathfinder/pathfinder.css';

/**
 * Career Pathfinder — a standalone, public self-assessment. All scoring
 * runs in the browser; progress is kept in localStorage, and nothing is
 * sent to the backend.
 */
export default function CareerPathfinder() {
  usePathfinderSeo();
  const {
    screen,
    answers,
    optimize,
    answeredCount,
    setAnswer,
    setScreen,
    setOptimize,
    restart,
  } = useAssessment();

  const isTakingAssessment = typeof screen === 'number';

  return (
    <div className="cp-root flex min-h-screen flex-col bg-gradient-to-b from-[#f6f0fa] via-[#fefcff] to-[#efe8f6]">
      <CrosseRoadsHeader
        right={
          isTakingAssessment ? (
            <div className="flex items-center gap-2 sm:w-44">
              <Progress
                value={(answeredCount / TOTAL_QUESTIONS) * 100}
                aria-label={`Assessment progress: ${answeredCount} of ${TOTAL_QUESTIONS} questions answered`}
                className="hidden h-2 bg-stone-100 sm:block [&>div]:bg-gradient-to-r [&>div]:from-[#4a2373] [&>div]:to-[#17808d]"
              />
              <span className="shrink-0 text-xs text-stone-500">
                {answeredCount}/{TOTAL_QUESTIONS}
              </span>
            </div>
          ) : null
        }
      />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={String(screen)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {screen === 'intro' && (
              <>
                <IntroScreen
                  onStart={() => setScreen(0)}
                  hasProgress={answeredCount > 0}
                />
                <PlatformAbout />
                <FaqSection />
                <div className="mx-auto max-w-2xl space-y-10 px-4 pb-14">
                  <ResourceLibrary />
                  <WorldwideDirectory />
                </div>
              </>
            )}
            {isTakingAssessment && (
              <SectionScreen
                sectionIndex={screen}
                answers={answers}
                setAnswer={setAnswer}
                setScreen={setScreen}
              />
            )}
            {screen === 'results' && (
              <ResultsScreen
                answers={answers}
                optimize={optimize}
                setOptimize={setOptimize}
                restart={restart}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="cp-no-print">
        <SiteFooter />
      </div>
    </div>
  );
}
