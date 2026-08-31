import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Printer } from 'lucide-react';
import { Button } from '@/ui/button';
import { OPTIMIZE_QUESTION } from '../data/sections';
import { buildReport, rerankMatches } from '../engine/report';
import { ProfileSummary } from './profile-summary';
import { MatchCard } from './match-card';
import { NextMove } from './next-move';
import { ResourceLibrary } from './resource-library';

function TierNote({ report }) {
  const best = report.bestMatches.length;
  const worth = report.worthExploring.length;
  return (
    <p className="text-sm text-stone-600">
      {best > 0 &&
        `${best} of your matches scored 85%+ — these strongly match your abilities, interests, personality and goals. `}
      {worth > 0 &&
        `${worth} scored 70-84% — several strong areas of alignment that deserve further exploration.`}
      {best === 0 && worth === 0 &&
        'No single career dominated — treat your top matches as starting points to explore.'}
    </p>
  );
}

/** The full career report, with the optimize-priority rerank control. */
export function ResultsScreen({ answers, optimize, setOptimize, restart }) {
  const report = useMemo(() => buildReport(answers), [answers]);
  const matches = useMemo(
    () => rerankMatches(report.topMatches, optimize),
    [report, optimize],
  );

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-8">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d8c]">
            Your career report
          </p>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#1e4d5c]">
            Your Career Profile
          </h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="cp-no-print shrink-0"
          onClick={() => window.print()}
        >
          <Printer className="mr-1.5 h-4 w-4" />
          Save as PDF
        </Button>
      </div>

      <ProfileSummary report={report} />

      <div>
        <h3 className="font-serif text-xl font-bold text-[#1e4d5c]">
          {OPTIMIZE_QUESTION.title}
        </h3>
        <p className="mt-1 text-sm text-stone-600">
          Your top matches re-rank around what matters most to you right now.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {OPTIMIZE_QUESTION.options.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={optimize === option.id}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                optimize === option.id
                  ? 'border-[#1e4d5c] bg-[#1e4d5c] text-white'
                  : 'border-stone-200 bg-white text-stone-700 hover:border-[#2e7d8c]'
              }`}
              onClick={() => setOptimize(optimize === option.id ? null : option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-serif text-xl font-bold text-[#1e4d5c]">
          Your top 10 career matches
        </h3>
        <TierNote report={report} />
        {matches.map((match, index) => (
          <motion.div
            key={match.career.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index * 0.06, 0.5), duration: 0.3 }}
          >
            <MatchCard rank={index + 1} match={match} defaultOpen={index === 0} />
          </motion.div>
        ))}
      </div>

      {report.hiddenGems.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-serif text-xl font-bold text-[#1e4d5c]">
            Careers you may not have considered
          </h3>
          <p className="text-sm text-stone-600">
            Your combination of abilities and personality predicts a strong fit
            here, even if these were not on your radar.
          </p>
          {report.hiddenGems.map((match, index) => (
            <MatchCard key={match.career.id} rank={index + 1} match={match} />
          ))}
        </div>
      )}

      <NextMove matches={matches} />

      <ResourceLibrary />

      <div className="flex justify-center pb-8">
        <Button variant="outline" onClick={restart}>
          Retake the assessment
        </Button>
      </div>
    </div>
  );
}
