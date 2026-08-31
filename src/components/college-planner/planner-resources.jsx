import { ExternalLink } from 'lucide-react';
import { PLANNER_RESOURCES } from './data/resources';

/** Official application, testing, aid, and service links. */
export function PlannerResources() {
  return (
    <section id="resources" aria-labelledby="planner-resources-heading">
      <h2
        id="planner-resources-heading"
        className="font-serif text-2xl font-bold text-[#1e4d5c]"
      >
        The official links you&apos;ll need
      </h2>
      <p className="mt-1 text-sm text-stone-600">
        Applications, testing, financial aid, and service hours — straight to
        the official sources, no middlemen.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {PLANNER_RESOURCES.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="inline-flex items-center gap-1.5 font-medium text-[#1e4d5c] group-hover:text-[#2e7d8c]">
              {resource.name}
              <ExternalLink
                className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100"
                aria-hidden="true"
              />
            </span>
            <p className="mt-0.5 text-xs text-stone-500">{resource.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
