import { useMemo, useState } from 'react';
import { ExternalLink, Globe, Info, UserRound } from 'lucide-react';
import {
  DIRECTORY,
  countryName,
  directoryCountries,
  filterByCountry,
  groupByCategory,
} from '@/data/resource-directory';

/**
 * The worldwide open resource directory — 120 free, vetted resources from
 * github.com/docmaasi/crosseroads-resources, vendored into the bundle at build
 * time (the CSP blocks runtime fetches to other origins).
 *
 * Separate from RESOURCE_LIBRARY above it on purpose: that list is hand-written
 * and curated for the career report, this one is the open dataset. Both stay.
 */

const COUNTRIES = directoryCountries();

function CountryFilter({ value, onChange }) {
  return (
    <div className="mt-4">
      <label
        htmlFor="directory-country"
        className="block text-xs font-semibold uppercase tracking-wide text-[#17808d]"
      >
        Show resources for
      </label>
      <div className="mt-1.5 flex items-center gap-2">
        <Globe className="h-4 w-4 shrink-0 text-[#7a3e9d]" aria-hidden="true" />
        <select
          id="directory-country"
          value={value ?? ''}
          onChange={(event) => onChange(event.target.value || null)}
          className="w-full max-w-xs rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 focus:border-[#4a2373] focus:outline-none focus:ring-2 focus:ring-[#4a2373]/30"
        >
          <option value="">Everywhere ({DIRECTORY.length})</option>
          {COUNTRIES.map((country) => (
            <option key={country.code} value={country.code}>
              {country.label} ({country.count})
            </option>
          ))}
        </select>
      </div>
      {value && value !== 'Global' && (
        <p className="mt-1.5 text-xs text-stone-500">
          Showing {countryName(value)} plus everything that works worldwide.
        </p>
      )}
    </div>
  );
}

function ResourceItem({ resource }) {
  return (
    <li className="border-t border-stone-100 pt-3 first:border-0 first:pt-0">
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-start gap-1 text-sm font-semibold text-[#4a2373] underline-offset-2 hover:text-[#17808d] hover:underline"
      >
        {resource.name}
        <ExternalLink
          className="mt-0.5 h-3 w-3 shrink-0 opacity-50 group-hover:opacity-100"
          aria-hidden="true"
        />
      </a>

      <p className="mt-0.5 text-xs text-stone-600">{resource.description}</p>

      <p className="mt-1 text-[11px] text-stone-500">
        {resource.provider} · {countryName(resource.country)}
      </p>

      {resource.requiresAccount && (
        <p className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#7a3e9d]/10 px-2 py-0.5 text-[11px] font-medium text-[#7a3e9d]">
          <UserRound className="h-3 w-3" aria-hidden="true" />
          Free account required
        </p>
      )}

      {resource.caveat && (
        <p className="mt-1.5 flex items-start gap-1.5 rounded-lg bg-[#e8a33d]/10 px-2.5 py-1.5 text-[11px] leading-relaxed text-stone-700">
          <Info
            className="mt-0.5 h-3 w-3 shrink-0 text-[#e8a33d]"
            aria-hidden="true"
          />
          <span>
            <span className="sr-only">Good to know: </span>
            {resource.caveat}
          </span>
        </p>
      )}
    </li>
  );
}

export function WorldwideDirectory() {
  const [country, setCountry] = useState(null);

  const groups = useMemo(
    () => groupByCategory(filterByCountry(country)),
    [country],
  );
  const total = useMemo(
    () => groups.reduce((sum, group) => sum + group.items.length, 0),
    [groups],
  );

  return (
    <section id="worldwide-resources" aria-labelledby="worldwide-resources-heading">
      <h3
        id="worldwide-resources-heading"
        className="font-serif text-xl font-bold text-[#4a2373]"
      >
        Worldwide resource directory
      </h3>
      <p className="mt-1 text-sm text-stone-600">
        {DIRECTORY.length} free resources from governments, universities and
        established nonprofits in {COUNTRIES.length - 1} countries. Every link was
        opened and checked by hand. Nothing here asks for a credit card.
      </p>

      <CountryFilter value={country} onChange={setCountry} />

      <p aria-live="polite" className="sr-only">
        {total} resources shown.
      </p>

      <div className="mt-5 space-y-4">
        {groups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <h4 className="text-xs font-semibold uppercase tracking-wide text-[#17808d]">
              {group.label}
              <span className="ml-1.5 font-normal normal-case tracking-normal text-stone-500">
                {group.items.length}
              </span>
            </h4>
            <p className="mt-0.5 text-xs text-stone-500">{group.blurb}</p>
            <ul className="mt-3 space-y-3">
              {group.items.map((resource) => (
                <ResourceItem key={resource.id} resource={resource} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-stone-500">
        This directory is open data, licensed CC BY 4.0. Found a broken link or
        know a resource that belongs here?{' '}
        <a
          href="https://github.com/docmaasi/crosseroads-resources"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#4a2373] underline-offset-2 hover:text-[#17808d] hover:underline"
        >
          Tell us on GitHub
        </a>
        .
      </p>
    </section>
  );
}
