import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import { WorksheetSheet } from './worksheet-render';
import { LIBRARY_LICENCE, worksheetPdfPath } from './data/worksheets';

/** One worksheet, with the controls that do not print. */
export function WorksheetView({ worksheet }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="cp-no-print flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/Worksheets"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4a2373] hover:text-[#17808d]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All worksheets
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4a2373] to-[#17808d] px-5 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.03]"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print this sheet
          </button>
          <a
            href={worksheetPdfPath(worksheet.slug)}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-5 py-2 text-sm font-medium text-stone-600 transition-colors hover:border-[#17808d] hover:text-[#4a2373]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download PDF
          </a>
        </div>
      </div>

      <div className="cr-sheet-wrap mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <WorksheetSheet worksheet={worksheet} />
      </div>

      <p className="cp-no-print mt-4 text-xs leading-relaxed text-stone-500">
        {LIBRARY_LICENCE.attribution} — free to print, copy, adapt and share under{' '}
        <a
          href={LIBRARY_LICENCE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#4a2373] underline underline-offset-2 hover:text-[#17808d]"
        >
          {LIBRARY_LICENCE.name}
        </a>
        , including by schools and nonprofits. Educational use only — this is not
        professional financial, legal or medical advice.
      </p>
    </div>
  );
}
