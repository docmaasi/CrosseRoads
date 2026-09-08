import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { BRAND } from '../career-pathfinder/branding';
import { CATEGORY_LABELS, relatedArticles } from './data/articles';
import { ArticleShare, AuthorBio } from './article-share';

/** Full article page: header, sections, tool CTA, and official sources. */
export function ArticleView({ article }) {
  return (
    <article className="mx-auto max-w-2xl px-4 py-10">
      <Link
        to="/Guides"
        className="inline-flex items-center gap-1 text-sm text-[#17808d] hover:underline"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All guides
      </Link>

      <header className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7a3e9d]">
          {CATEGORY_LABELS[article.category]} guide
        </p>
        <h1 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#4a2373]">
          {article.title}
        </h1>
        <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone-500">
          {BRAND.byline}
          <span aria-hidden="true">·</span>
          <time dateTime={article.datePublished}>
            {new Date(`${article.datePublished}T12:00:00Z`).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })}
          </time>
          <span aria-hidden="true">·</span>
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {article.readMinutes} min read
        </p>
      </header>

      {article.keyTakeaway && (
        <div className="mt-6 rounded-2xl border-l-4 border-[#17808d] bg-[#17808d]/5 py-4 pl-5 pr-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#116a75]">
            The short answer
          </p>
          <p className="mt-1 leading-relaxed text-stone-700">{article.keyTakeaway}</p>
        </div>
      )}

      <div className="mt-6 space-y-6">
        {article.sections.map((section, index) => (
          <section key={section.heading ?? index}>
            {section.heading && (
              <h2 className="mb-2 font-serif text-xl font-bold text-[#4a2373]">
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
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#4a2373] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[#17808d]"
        >
          {article.cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </aside>

      <footer className="mt-8 border-t border-stone-200 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#17808d]">
          Official sources
        </p>
        <ul className="mt-2 space-y-1">
          {article.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#4a2373] underline-offset-2 hover:text-[#17808d] hover:underline"
              >
                {source.name}
                <ExternalLink className="h-3 w-3 opacity-50" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </footer>

      {article.faq && article.faq.length > 0 && (
        <section aria-labelledby="faq-heading" className="mt-8">
          <h2
            id="faq-heading"
            className="font-serif text-xl font-bold text-[#4a2373]"
          >
            Common questions
          </h2>
          <dl className="mt-3 space-y-4">
            {article.faq.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
              >
                <dt className="font-semibold text-[#4a2373]">{item.question}</dt>
                <dd className="mt-1 leading-relaxed text-stone-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <ArticleShare title={article.title} path={`/Guides/${article.slug}`} />

      <AuthorBio />

      <section aria-labelledby="related-heading" className="cp-no-print mt-8">
        <h2
          id="related-heading"
          className="text-xs font-semibold uppercase tracking-wide text-[#116a75]"
        >
          Keep reading
        </h2>
        <ul className="mt-3 space-y-2">
          {relatedArticles(article).map((related) => (
            <li key={related.slug}>
              <Link
                to={`/Guides/${related.slug}`}
                className="font-medium text-[#4a2373] underline-offset-2 hover:text-[#17808d] hover:underline"
              >
                {related.title}
              </Link>
              <p className="text-sm text-stone-600">{related.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
