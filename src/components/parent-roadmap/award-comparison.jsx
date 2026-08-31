import { Plus, X } from 'lucide-react';
import { Button } from '@/ui/button';
import { AID_FIELDS, COST_FIELDS, schoolTotals } from './use-roadmap';

const money = (value) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function MoneyInput({ id, label, value, onChange }) {
  return (
    <label htmlFor={id} className="flex items-center justify-between gap-2 text-sm">
      <span className="text-stone-600">{label}</span>
      <input
        id={id}
        inputMode="decimal"
        value={value}
        placeholder="0"
        onChange={(event) => onChange(event.target.value)}
        className="w-24 rounded-md border border-stone-200 px-2 py-1 text-right text-sm focus:border-[#2e7d8c] focus:outline-none"
      />
    </label>
  );
}

function SchoolCard({ school, canRemove, isBestNet, updateSchool, removeSchool }) {
  const totals = schoolTotals(school);
  return (
    <div
      className={`rounded-2xl border bg-white p-4 shadow-sm ${
        isBestNet ? 'border-[#2e7d8c]' : 'border-stone-200'
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          value={school.name}
          placeholder="College name"
          aria-label="College name"
          onChange={(event) => updateSchool(school.id, { name: event.target.value })}
          className="min-w-0 flex-1 rounded-md border border-stone-200 px-2 py-1.5 font-medium focus:border-[#2e7d8c] focus:outline-none"
        />
        {canRemove && (
          <button
            type="button"
            aria-label={`Remove ${school.name || 'college'}`}
            className="text-stone-400 hover:text-stone-600"
            onClick={() => removeSchool(school.id)}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#c2703e]">
        Cost of attendance (per year)
      </p>
      <div className="mt-1 space-y-1.5">
        {COST_FIELDS.map((field) => (
          <MoneyInput
            key={field.key}
            id={`${school.id}-${field.key}`}
            label={field.label}
            value={school[field.key]}
            onChange={(value) => updateSchool(school.id, { [field.key]: value })}
          />
        ))}
      </div>

      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
        Aid offered
      </p>
      <div className="mt-1 space-y-1.5">
        {AID_FIELDS.map((field) => (
          <MoneyInput
            key={field.key}
            id={`${school.id}-${field.key}`}
            label={field.label}
            value={school[field.key]}
            onChange={(value) => updateSchool(school.id, { [field.key]: value })}
          />
        ))}
      </div>

      <dl className="mt-4 space-y-1 border-t border-stone-100 pt-3 text-sm">
        <div className="flex justify-between text-stone-600">
          <dt>Total cost</dt>
          <dd>{money(totals.totalCost)}</dd>
        </div>
        <div className="flex justify-between text-stone-600">
          <dt>Gift aid (never repaid)</dt>
          <dd>−{money(totals.giftAid)}</dd>
        </div>
        <div className="flex justify-between font-bold text-[#1e4d5c]">
          <dt>Net price</dt>
          <dd>{money(totals.netPrice)}</dd>
        </div>
        <div className="flex justify-between text-xs text-stone-500">
          <dt>Left after loans & work-study</dt>
          <dd>{money(totals.afterLoans)}</dd>
        </div>
      </dl>
      {isBestNet && (
        <p className="mt-2 rounded-full bg-[#2e7d8c]/10 px-3 py-1 text-center text-xs font-semibold text-[#1e4d5c]">
          Lowest net price
        </p>
      )}
    </div>
  );
}

/** Side-by-side financial-aid award comparison (up to 4 colleges). */
export function AwardComparison({ schools, updateSchool, addSchool, removeSchool }) {
  const nets = schools.map((s) => schoolTotals(s));
  const filled = nets.filter((t) => t.totalCost > 0);
  const bestNet = filled.length >= 2 ? Math.min(...filled.map((t) => t.netPrice)) : null;

  return (
    <section id="compare" aria-labelledby="compare-heading" className="scroll-mt-16">
      <h2 id="compare-heading" className="font-serif text-2xl font-bold text-[#1e4d5c]">
        Compare your financial-aid awards
      </h2>
      <p className="mt-1 text-sm text-stone-600">
        Enter each offer and see the real net price — gift aid is money you never
        repay; loans are not. Compare the total cost of attendance, not just the
        scholarship headline. Your numbers stay on this device.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {schools.map((school) => {
          const totals = schoolTotals(school);
          return (
            <SchoolCard
              key={school.id}
              school={school}
              canRemove={schools.length > 1}
              isBestNet={bestNet !== null && totals.totalCost > 0 && totals.netPrice === bestNet}
              updateSchool={updateSchool}
              removeSchool={removeSchool}
            />
          );
        })}
      </div>
      {schools.length < 4 && (
        <Button variant="outline" className="mt-3" onClick={addSchool}>
          <Plus className="mr-1.5 h-4 w-4" /> Add another college
        </Button>
      )}
    </section>
  );
}
