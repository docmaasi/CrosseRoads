import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, Printer } from 'lucide-react';
import {
  AUDIENCE_LABELS,
  CATEGORY_BLURBS,
  LIBRARY_LICENCE,
  WORKSHEETS,
  worksheetPdfPath,
  worksheetsByCategory,
} from './data/worksheets';

const AUDIENCE_FILTERS = [
  { value: 'all', label: 'Everyone' },
  { value: 'student', label: 'Student' },
  { value: 'parent', label: 'Parent' },
  { value: 'family', label: 'Together' },
];

function audienceBadgeClass(audience) {
  if (audience === 'student') return 'bg-[#17808d]/10 text-[#116a75]';
  if (audience === 'parent') return 'bg-[#7a3e9d]/10 text-[#7a3e9d]';
  return 'bg-[#e8a33d]/15 text-[#8a5a0a]';
}

function WorksheetCard({ worksheet }) {
  return (
    <li className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <Link
          to={`/Worksheets/${worksheet.slug}`}
          className="font-serif text-base font-bold leading-snug text-[#4a2373] underline-offset-2 hover:text-[#17808d] hover:underline"
        >
          {worksheet.title}
        </Link>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${audienceBadgeClass(
            worksheet.audience,
          )}`}
        >
          {AUDIENCE_LABELS[worksheet.audience].replace(/^For the /, '')}
        </span>
      </div>

      <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{worksheet.purpose}</p>

      {worksheet.when && (
        <p className="mt-1.5 text-xs text-stone-500">
          <span className="font-semibold">When:</span> {worksheet.when}
        </p>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
        <Link
          to={`/Worksheets/${worksheet.slug}`}
          className="inline-flex items-center gap-1 font-medium text-[#4a2373] hover:text-[#17808d]"
        >
          Open & print
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        <a
          href={worksheetPdfPath(worksheet.slug)}
          download
          className="inline-flex items-center gap-1 text-stone-500 hover:text-[#4a2373]"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          PDF
        </a>
      </div>
    </li>
  );
}

export function WorksheetsIndex() {
  const [audience, setAudience] = useState('all');

  const groups = useMemo(() => {
    const all = worksheetsByCategory();
    if (audience === 'all') return all;
    return all
      .map((group) => ({
        ...group,
        items: group.items.filter((sheet) => sheet.audience === audience),
      }))
      .filter((group) => group.items.length > 0);
  }, [audience]);

  const shown = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#17808d]/25 bg-white/80 px-4 py-1.5 text-sm text-[#4a2373] shadow-sm">
          <FileText className="h-4 w-4 text-[#17808d]" aria-hidden="true" />
          Free worksheet library
        </span>
        <h1 className="mt-5 bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text font-serif text-4xl font-bold leading-tight text-transparent">
          {WORKSHEETS.length} worksheets you can print today
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-stone-600">
          Trackers, comparison charts, checklists and conversation guides for the
          whole road from ninth grade to move-in day. Free, no account, and yours
          to copy — including for your school, church or nonprofit.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-[#e8a33d]/40 bg-gradient-to-r from-[#e8a33d]/10 to-[#17808d]/10 px-5 py-4 text-sm text-stone-700">
        <p>
          <span className="font-semibold">Open and licensed for reuse. </span>
          {LIBRARY_LICENCE.summary}{' '}
          <a
            href={LIBRARY_LICENCE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#4a2373] underline underline-offset-2 hover:text-[#17808d]"
          >
            {LIBRARY_LICENCE.name}
          </a>
        </p>
      </div>

      <div className="mt-7">
        <div
          role="group"
          aria-label="Filter worksheets by who fills them in"
          className="flex flex-wrap gap-2"
        >
          {AUDIENCE_FILTERS.map((filter) => {
            const active = audience === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={active}
                onClick={() => setAudience(filter.value)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active
                    ? 'bg-[#4a2373] font-medium text-white'
                    : 'border border-stone-300 text-stone-600 hover:border-[#17808d] hover:text-[#4a2373]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="mt-2 text-xs text-stone-500">
          Showing {shown} of {WORKSHEETS.length} worksheets.
        </p>
      </div>

      <div className="mt-8 space-y-9">
        {groups.map((group) => (
          <section key={group.category} id={group.category} className="scroll-mt-16">
            <h2 className="font-serif text-2xl font-bold text-[#4a2373]">{group.label}</h2>
            <p className="mt-0.5 text-sm text-stone-500">
              {CATEGORY_BLURBS[group.category]}
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {group.items.map((worksheet) => (
                <WorksheetCard key={worksheet.slug} worksheet={worksheet} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-600 shadow-sm">
        <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#4a2373]">
          <Printer className="h-4 w-4 text-[#17808d]" aria-hidden="true" />
          Printing these
        </h2>
        <p className="mt-2">
          Every sheet is built for US Letter, black and white, single sided. Open
          one and press print, or download the PDF if you would rather send it to
          someone. They are designed to be photocopied — no colour is needed to
          read them.
        </p>
        <p className="mt-2">
          Counsellors, teachers and community organisations are welcome to print
          class sets. Keep the credit line at the foot of the page and you are
          within the licence.
        </p>
      </div>
    </div>
  );
}
