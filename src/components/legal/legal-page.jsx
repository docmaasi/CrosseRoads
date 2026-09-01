import { useEffect } from 'react';
import {
  applySeoHead,
  resetSeoHead,
} from '../career-pathfinder/seo-head';
import { BRAND } from '../career-pathfinder/branding';

/** Shared renderer for the Privacy Policy and Terms of Use pages. */
export function LegalPage({ title, effective, sections, path, description }) {
  useEffect(() => {
    applySeoHead({
      title: `${title} — ${BRAND.platformName}`,
      description,
      path,
      siteName: BRAND.platformName,
    });
    return resetSeoHead;
  }, [title, description, path]);

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-serif text-4xl font-bold bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="mt-2 text-sm text-stone-500">Effective {effective}</p>

      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="font-serif text-xl font-bold text-[#4a2373]">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-2 leading-relaxed text-stone-700"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-stone-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 40)}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
