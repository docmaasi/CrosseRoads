import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import {
  ARTICLES,
  ARTICLE_CATEGORY_ORDER,
  articlesByCategory,
  CATEGORY_LABELS,
} from './data/articles';
import { BRAND } from '../career-pathfinder/branding';
import { PhotoBanner } from '../career-pathfinder/photo-banner';

/** Guides landing page: hero + article cards. */
export function GuidesIndex() {
  const [category, setCategory] = useState('all');
  const shown = useMemo(() => articlesByCategory(category), [category]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="text-center">
        <img
          src="/crosseroads-logo-clear.png"
          alt=""
          aria-hidden="true"
          className="mx-auto w-48"
          width="640"
          height="500"
        />
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#17808d]">
          {BRAND.platformName} Guides
        </p>
        <h1 className="mt-1 font-serif text-4xl font-bold bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text text-transparent">
          Guidance you can act on
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-lg text-stone-600">
          Practical, no-fluff guides on careers and college admissions —
          {' '}{BRAND.byline.replace(/^From/, 'from')}.
        </p>

        <PhotoBanner
          name="hero-guides"
          shape="hero"
          className="mt-8"
          alt="A student carrying a backpack walks away along a tree-lined campus path towards brick buildings on an autumn morning."
        />
      </div>

      <div className="mt-8">
        <div role="group" aria-label="Filter guides by topic" className="flex flex-wrap gap-2">
          {['all', ...ARTICLE_CATEGORY_ORDER].map((value) => {
            const active = category === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(value)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active
                    ? 'bg-[#4a2373] font-medium text-white'
                    : 'border border-stone-300 text-stone-600 hover:border-[#17808d] hover:text-[#4a2373]'
                }`}
              >
                {value === 'all' ? 'All guides' : CATEGORY_LABELS[value]}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="mt-2 text-xs text-stone-500">
          Showing {shown.length} of {ARTICLES.length} guides.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {shown.map((article) => (
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
              <span className="inline-flex items-center gap-1 text-stone-500">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readMinutes} min
              </span>
              <time
                dateTime={article.datePublished}
                className="text-stone-500"
              >
                {new Date(`${article.datePublished}T12:00:00Z`).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>
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
