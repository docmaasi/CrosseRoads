import { ExternalLink } from 'lucide-react';
import { RESOURCE_LIBRARY } from '../data/resources';

/**
 * Curated free-resource library shown at the bottom of the report.
 * Every link is a free, reputable government, nonprofit, or education
 * resource — no paywalls required to get value.
 */
export function ResourceLibrary() {
  return (
    <section id="resources" aria-labelledby="resources-heading">
      <h3
        id="resources-heading"
        className="font-serif text-xl font-bold text-[#1e4d5c]"
      >
        Free tools to keep exploring
      </h3>
      <p className="mt-1 text-sm text-stone-600">
        Everything below is completely free — official government career data,
        world-class courses, and ways to get real experience.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {RESOURCE_LIBRARY.map((group) => (
          <div
            key={group.id}
            className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <h4 className="text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
              {group.title}
            </h4>
            <ul className="mt-2 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-[#1e4d5c] underline-offset-2 hover:text-[#2e7d8c] hover:underline"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100" />
                  </a>
                  <p className="text-xs text-stone-500">{link.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
