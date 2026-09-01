import { Check } from 'lucide-react';

/** One checkable planner item with optional expanded guidance. */
export function ChecklistItemRow({ item, isChecked, onToggle }) {
  return (
    <li>
      <button
        type="button"
        aria-pressed={isChecked}
        onClick={() => onToggle(item.id)}
        className="flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-[#17808d]/5"
      >
        <span
          aria-hidden="true"
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
            isChecked
              ? 'border-[#17808d] bg-[#17808d] text-white'
              : 'border-stone-300 bg-white'
          }`}
        >
          {isChecked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
        </span>
        <span className="flex-1">
          <span
            className={`block text-sm ${
              isChecked ? 'text-stone-400 line-through' : 'text-stone-800'
            }`}
          >
            {item.text}
          </span>
          {item.detail && !isChecked && (
            <span className="mt-0.5 block text-xs leading-relaxed text-stone-500">
              {item.detail}
            </span>
          )}
        </span>
      </button>
    </li>
  );
}
