import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ExternalLink, Search as SearchIcon } from 'lucide-react';
import { groupResults, search, searchCorpusSize } from './search-index';

const EXAMPLES = [
  'scholarships',
  'financial aid',
  'deadlines',
  'essay',
  'food',
  'crisis',
];

function ResultItem({ doc }) {
  const body = (
    <>
      <span className="font-medium text-[#4a2373] group-hover:text-[#17808d]">
        {doc.title}
      </span>
      {doc.external && (
        <ExternalLink
          className="ml-1 inline h-3 w-3 align-baseline opacity-50"
          aria-hidden="true"
        />
      )}
    </>
  );

  return (
    <li className="border-t border-stone-100 pt-3 first:border-0 first:pt-0">
      {doc.external ? (
        <a
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group underline-offset-2 hover:underline"
        >
          {body}
        </a>
      ) : (
        <Link to={doc.href} className="group underline-offset-2 hover:underline">
          {body}
        </Link>
      )}
      <p className="mt-0.5 text-sm leading-relaxed text-stone-600">{doc.summary}</p>
      <p className="mt-0.5 text-[11px] text-stone-500">{doc.meta}</p>
    </li>
  );
}

/** Site-wide search. Runs entirely in the browser; nothing is sent anywhere. */
export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const initial = params.get('q') ?? '';
  const [query, setQuery] = useState(initial);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Keep the URL in step so a search can be shared or bookmarked, without
  // pushing a history entry per keystroke.
  useEffect(() => {
    const id = setTimeout(() => {
      setParams(query.trim() ? { q: query.trim() } : {}, { replace: true });
    }, 250);
    return () => clearTimeout(id);
  }, [query, setParams]);

  const results = useMemo(() => search(query), [query]);
  const groups = useMemo(() => groupResults(results), [results]);
  const ready = query.trim().length >= 2;

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text font-serif text-3xl font-bold text-transparent">
        Search CrosseRoads
      </h1>
      <p className="mt-2 text-stone-600">
        {searchCorpusSize()} worksheets, guides and vetted resources. Everything
        is searched on your own device — nothing you type here is sent anywhere.
      </p>

      <div className="relative mt-5">
        <SearchIcon
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-500"
          aria-hidden="true"
        />
        <label htmlFor="site-search" className="sr-only">
          Search worksheets, guides and resources
        </label>
        <input
          id="site-search"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “scholarships”, “deadlines”, “food”…"
          className="w-full rounded-full border border-stone-300 bg-white py-3 pl-12 pr-4 text-base text-stone-800 shadow-sm focus:border-[#4a2373] focus:outline-none focus:ring-2 focus:ring-[#4a2373]/30"
        />
      </div>

      {!ready && (
        <div className="mt-5">
          <p className="text-sm text-stone-500">Or start with one of these:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {EXAMPLES.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => setQuery(example)}
                className="rounded-full border border-stone-300 px-3.5 py-1.5 text-sm text-stone-600 transition-colors hover:border-[#17808d] hover:text-[#4a2373]"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}

      <p aria-live="polite" className="mt-5 text-sm text-stone-500">
        {ready
          ? `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${query.trim()}”`
          : ''}
      </p>

      {ready && results.length === 0 && (
        <div className="mt-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-600 shadow-sm">
          <p>
            Nothing matched that. Try a plainer word — “money” rather than
            “tuition remission”, or “housing” rather than a programme name.
          </p>
          <p className="mt-2">
            If you are looking for help right now and cannot find it, dial{' '}
            <span className="font-semibold text-[#4a2373]">2-1-1</span> in the US
            and a real person will help you find it locally.
          </p>
        </div>
      )}

      <div className="mt-4 space-y-5">
        {groups.map((group) => (
          <section
            key={group.kind}
            aria-labelledby={`results-${group.kind}`}
            className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <h2
              id={`results-${group.kind}`}
              className="text-xs font-semibold uppercase tracking-wide text-[#17808d]"
            >
              {group.label}
              <span className="ml-1.5 font-normal normal-case tracking-normal text-stone-500">
                {group.items.length}
              </span>
            </h2>
            <ul className="mt-3 space-y-3">
              {group.items.map((doc) => (
                <ResultItem key={doc.id} doc={doc} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
