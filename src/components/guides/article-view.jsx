import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { BRAND } from '../career-pathfinder/branding';

const CATEGORY_LABELS = { career: 'Career', college: 'College' };

/** Full article page: header, sections, tool CTA, and official sources. */
export function ArticleView({ article }) {
  return (
    <article className="mx-auto max-w-2xl px-4 py-10">
      <Link
        to="/Guides"
        className="inline-flex items-center gap-1 text-sm text-[#2e7d8c] hover:underline"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All guides
      </Link>

      <header className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c2703e]">
          {CATEGORY_LABELS[article.category]} guide
        </p>
        <h1 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#1e4d5c]">
          {article.title}
        </h1>
        <p className="mt-3 flex items-center gap-2 text-sm text-stone-500">
          {BRAND.byline}
          <span aria-hidden="true">·</span>
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {article.readMinutes} min read
        </p>
      </header>

      <div className="mt-6 space-y-6">
        {article.sections.map((section, index) => (
          <section key={section.heading ?? index}>
            {section.heading && (
              <h2 className="mb-2 font-serif text-xl font-bold text-[#1e4d5c]">
                {section.heading}
              </h2>
            )}
            {section.paragraphs?.map((text) => (
              <p key={text.slice(0, 40)} className="mb-3 leading-relaxed text-stone-700">
                {text}
              </p>
            ))}
            {section.list && (
              <ul className="space-y-2 pl-1">
                {section.list.map((entry) => (
                  <li key={entry.slice(0, 40)} className="flex gap-2 text-stone-700">
                    <span className="text-[#e8a33d]">✦</span>
                    <span className="leading-relaxed">{entry}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <aside className="mt-8 rounded-2xl border-2 border-[#e8a33d]/50 bg-[#e8a33d]/5 p-5">
        <p className="text-stone-700">{article.cta.text}</p>
        <Link
          to={article.cta.href}
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#1e4d5c] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[#2e7d8c]"
        >
          {article.cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </aside>

      <footer className="mt-8 border-t border-stone-200 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
          Official sources
        </p>
        <ul className="mt-2 space-y-1">
          {article.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#1e4d5c] underline-offset-2 hover:text-[#2e7d8c] hover:underline"
              >
                {source.name}
                <ExternalLink className="h-3 w-3 opacity-50" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
