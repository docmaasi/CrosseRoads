import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { careerResourceLinks } from '../data/resources';
import { RealityCheck } from './reality-check';
import { ScoreRing } from './score-ring';

function Detail({ label, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
        {label}
      </p>
      <p className="mt-0.5 text-sm text-stone-700">{children}</p>
    </div>
  );
}

/** One career in the Top 10 list, expandable to the full breakdown. */
export function MatchCard({ rank, match, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { career } = match;

  return (
    <div className="rounded-xl border border-stone-200 bg-white shadow-sm">
      <button
        type="button"
        className="flex w-full items-center gap-3 p-4 text-left"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e4d5c] text-sm font-bold text-white">
          {rank}
        </span>
        <span className="flex-1">
          <span className="block font-semibold text-stone-800">
            {career.name}
            {rank === 1 && (
              <span className="ml-2 rounded-full bg-[#e8a33d]/15 px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wide text-[#b07514]">
                Top match
              </span>
            )}
          </span>
          <span className="block text-xs text-stone-500">{career.education}</span>
        </span>
        <ScoreRing value={match.fit} />
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-stone-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-stone-400" />
        )}
      </button>

      {isOpen && (
        <div className="space-y-4 border-t border-stone-100 p-4">
          <Detail label="Why it fits you">{match.whyItFits}</Detail>
          <Detail label="Typical path">{career.path}</Detail>
          <Detail label="Your strongest match">
            This career lines up most with {match.strongestMatch}.
          </Detail>
          <Detail label="Potential challenge">{match.challenge}</Detail>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
              Reality check
            </p>
            <RealityCheck dimensions={match.dimensions} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
              Three things you can do now
            </p>
            <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm text-stone-700">
              {career.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ol>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
              Dig deeper (free)
            </p>
            <ul className="mt-1 space-y-1">
              {careerResourceLinks(career.name).map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#1e4d5c] underline-offset-2 hover:text-[#2e7d8c] hover:underline"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                  <span className="ml-1 text-xs text-stone-500">
                    — {link.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
