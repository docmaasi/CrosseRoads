import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { ARTICLES } from './data/articles';
import { BRAND } from '../career-pathfinder/branding';

const CATEGORY_LABELS = { career: 'Career', college: 'College' };

/** Guides landing page: hero + article cards. */
export function GuidesIndex() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#17808d]">
          {BRAND.platformName} Guides
        </p>
        <h1 className="mt-1 font-serif text-4xl font-bold text-[#4a2373]">
          Guidance you can act on
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-lg text-stone-600">
          Practical, no-fluff guides on careers and college admissions —
          {' '}{BRAND.byline.replace(/^From/, 'from')}.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {ARTICLES.map((article) => (
          <Link
            key={article.slug}
            to={`/Guides/${article.slug}`}
            className="block rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7a3e9d]">
              {CATEGORY_LABELS[article.category]}
            </p>
            <h2 className="mt-1 font-serif text-xl font-bold leading-snug text-[#4a2373]">
              {article.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
              {article.description}
            </p>
            <p className="mt-3 flex items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1 text-stone-400">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readMinutes} min
              </span>
              <span className="inline-flex items-center gap-1 font-medium text-[#17808d]">
                Read the guide <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
