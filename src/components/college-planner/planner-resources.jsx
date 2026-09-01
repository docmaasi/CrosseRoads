import { ExternalLink } from 'lucide-react';
import { PLANNER_RESOURCES, INTERNATIONAL_RESOURCES } from './data/resources';

function ResourceCard({ resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className="inline-flex items-center gap-1.5 font-medium text-[#4a2373] group-hover:text-[#17808d]">
        {resource.name}
        <ExternalLink
          className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100"
          aria-hidden="true"
        />
      </span>
      <p className="mt-0.5 text-xs text-stone-500">{resource.description}</p>
    </a>
  );
}

/** Official application, testing, aid, service, and international links. */
export function PlannerResources() {
  return (
    <section id="resources" aria-labelledby="planner-resources-heading">
      <h2
        id="planner-resources-heading"
        className="font-serif text-2xl font-bold text-[#4a2373]"
      >
        The official links you&apos;ll need
      </h2>
      <p className="mt-1 text-sm text-stone-600">
        Applications, testing, financial aid, and service hours — straight to
        the official sources, no middlemen.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {PLANNER_RESOURCES.map((resource) => (
          <ResourceCard key={resource.url} resource={resource} />
        ))}
      </div>

      <h3 className="mt-8 font-serif text-xl font-bold text-[#4a2373]">
        Studying beyond the U.S.
      </h3>
      <p className="mt-1 text-sm text-stone-600">
        Official government and agency databases for families exploring
        international options — every portal below is free.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {INTERNATIONAL_RESOURCES.map((resource) => (
          <ResourceCard key={resource.url} resource={resource} />
        ))}
      </div>
    </section>
  );
}
