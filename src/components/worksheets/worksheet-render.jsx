import { AUDIENCE_LABELS, LIBRARY_LICENCE } from './data/worksheets';

/**
 * Draws any worksheet spec — on screen and on paper.
 *
 * Print is the primary medium here, not an afterthought: families fill these in
 * with a pen at a kitchen table. So everything is sized in millimetres of ink
 * rather than screen pixels, borders stay visible when a browser strips
 * backgrounds, and nothing relies on colour to be readable in black and white.
 */

function Lines({ label, count }) {
  return (
    <div className="mt-2">
      {label && <p className="mb-1 text-sm font-medium text-stone-700">{label}</p>}
      <div className="space-y-[1.15rem]">
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className="border-b border-stone-400" />
        ))}
      </div>
    </div>
  );
}

function Table({ columns, rows, widths }) {
  return (
    <div className="mt-2 overflow-x-auto">
      <table className="w-full table-fixed border-collapse text-xs">
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th
                key={column + i}
                style={widths ? { width: `${widths[i]}%` } : undefined}
                className="border border-stone-400 bg-stone-100 px-1.5 py-1 text-left font-semibold text-stone-700"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, r) => (
            <tr key={r}>
              {columns.map((column, c) => (
                <td key={c} className="h-7 border border-stone-400 px-1.5 align-top" />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Checklist({ items }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
          <span
            aria-hidden="true"
            className="mt-[3px] h-3.5 w-3.5 shrink-0 rounded-[3px] border border-stone-500"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Boxes({ items, lines = 2 }) {
  return (
    <div className="mt-2 space-y-3">
      {items.map((item) => (
        <div key={item}>
          <p className="text-sm font-medium text-stone-700">{item}</p>
          <div className="mt-1.5 space-y-[1.15rem]">
            {Array.from({ length: lines }, (_, i) => (
              <div key={i} className="border-b border-stone-400" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Grid({ columns, rows }) {
  return (
    <div className="mt-2 overflow-x-auto">
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr>
            <th className="w-[34%] border border-stone-400 bg-stone-100 px-1.5 py-1 text-left font-semibold text-stone-700" />
            {columns.map((column, i) => (
              <th
                key={column + i}
                className="border border-stone-400 bg-stone-100 px-1.5 py-1 text-left font-semibold text-stone-700"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={row + r}>
              <th
                scope="row"
                className="border border-stone-400 px-1.5 py-1 text-left align-top text-xs font-normal text-stone-700"
              >
                {/* An empty row label is a blank the family fills in themselves. */}
                {row || <span className="text-stone-300">&nbsp;</span>}
              </th>
              {columns.map((_, c) => (
                <td key={c} className="h-7 border border-stone-400 px-1.5" />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Scale({ label, low, high, points }) {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
      <p className="min-w-[11rem] flex-1 text-sm text-stone-700">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-wide text-stone-500">{low}</span>
        {Array.from({ length: points }, (_, i) => (
          <span
            key={i}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-stone-400 text-[10px] text-stone-500"
          >
            {i + 1}
          </span>
        ))}
        <span className="text-[10px] uppercase tracking-wide text-stone-500">{high}</span>
      </div>
    </div>
  );
}

function Note({ text }) {
  return (
    <p className="mt-2 rounded-lg border border-[#e8a33d]/50 bg-[#e8a33d]/10 px-3 py-2 text-xs leading-relaxed text-stone-700">
      {text}
    </p>
  );
}

function Field({ field }) {
  switch (field.kind) {
    case 'lines':
      return <Lines label={field.label} count={field.count} />;
    case 'table':
      return <Table columns={field.columns} rows={field.rows} widths={field.widths} />;
    case 'checklist':
      return <Checklist items={field.items} />;
    case 'boxes':
      return <Boxes items={field.items} lines={field.lines} />;
    case 'grid':
      return <Grid columns={field.columns} rows={field.rows} />;
    case 'scale':
      return (
        <Scale label={field.label} low={field.low} high={field.high} points={field.points} />
      );
    case 'note':
      return <Note text={field.text} />;
    default:
      return null;
  }
}

/** The sheet itself. `standalone` renders the print header and footer. */
export function WorksheetSheet({ worksheet, standalone = true }) {
  return (
    <article className="cr-sheet">
      <header className="border-b-2 border-[#4a2373] pb-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h1 className="font-serif text-2xl font-bold text-[#4a2373]">
            {worksheet.title}
          </h1>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#17808d]">
            {AUDIENCE_LABELS[worksheet.audience]}
          </p>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{worksheet.purpose}</p>
        {worksheet.when && (
          <p className="mt-1 text-xs text-stone-500">
            <span className="font-semibold">When: </span>
            {worksheet.when}
          </p>
        )}
      </header>

      <div className="mt-4 space-y-5">
        {worksheet.sections.map((section, i) => (
          <section key={section.heading ?? i} className="cr-sheet-section">
            {section.heading && (
              <h2 className="font-serif text-base font-bold text-[#33184f]">
                {section.heading}
              </h2>
            )}
            {section.hint && (
              <p className="mt-0.5 text-xs italic text-stone-500">{section.hint}</p>
            )}
            {section.fields.map((field, f) => (
              <Field key={f} field={field} />
            ))}
          </section>
        ))}
      </div>

      {worksheet.tips && worksheet.tips.length > 0 && (
        <section className="cr-sheet-section mt-5 rounded-xl border border-[#17808d]/40 bg-[#17808d]/5 p-3">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#116a75]">
            Worth knowing
          </h2>
          <ul className="mt-1.5 space-y-1">
            {worksheet.tips.map((tip) => (
              <li key={tip} className="flex gap-2 text-xs leading-relaxed text-stone-700">
                <span aria-hidden="true" className="text-[#e8a33d]">
                  ◆
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {standalone && (
        <footer className="mt-5 border-t border-stone-300 pt-2 text-[10px] leading-relaxed text-stone-500">
          <p>
            {LIBRARY_LICENCE.attribution} · Free to print, copy and share under{' '}
            {LIBRARY_LICENCE.name}. Educational use only — not professional
            financial, legal or medical advice.
          </p>
        </footer>
      )}
    </article>
  );
}
