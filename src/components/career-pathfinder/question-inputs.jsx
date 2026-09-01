import { toast } from 'sonner';

const baseOption =
  'w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17808d]/60';
const idleOption =
  'border-stone-200 bg-white text-stone-700 hover:border-[#17808d] hover:shadow-sm';
const activeOption =
  'border-[#17808d] bg-[#17808d]/10 text-[#4a2373] font-medium shadow-sm';

/** Single-choice question rendered as a list of selectable buttons. */
export function SingleChoice({ question, value, onChange }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2" role="radiogroup" aria-label={question.title}>
      {question.options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="radio"
          aria-checked={value === option.id}
          className={`${baseOption} ${value === option.id ? activeOption : idleOption}`}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

/** Multi-choice question with an optional max or exact pick count. */
export function MultiChoice({ question, value = [], onChange }) {
  const limit = question.exact ?? question.max;

  const toggle = (optionId) => {
    if (value.includes(optionId)) {
      onChange(value.filter((id) => id !== optionId));
      return;
    }
    if (limit && value.length >= limit) {
      toast.message(`Pick up to ${limit} — deselect one to add another.`);
      return;
    }
    onChange([...value, optionId]);
  };

  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2" role="group" aria-label={question.title}>
        {question.options.map((option) => {
          const selected = value.includes(option.id);
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              className={`${baseOption} ${selected ? activeOption : idleOption}`}
              onClick={() => toggle(option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      {limit ? (
        <p className="mt-2 text-xs text-stone-500">
          {question.exact
            ? `Choose exactly ${limit} (${value.length}/${limit} selected).`
            : `Choose up to ${limit} (${value.length}/${limit} selected).`}
        </p>
      ) : (
        <p className="mt-2 text-xs text-stone-500">Select all that apply.</p>
      )}
    </div>
  );
}

/** 1-5 rating scale row for likert questions. */
export function LikertScale({ question, value, onChange, scale }) {
  return (
    <div>
      <div className="flex gap-2" role="radiogroup" aria-label={question.title}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            role="radio"
            aria-checked={value === rating}
            aria-label={`${rating} out of 5`}
            className={`h-11 flex-1 rounded-lg border text-sm font-medium transition-colors ${
              value === rating ? activeOption : idleOption
            }`}
            onClick={() => onChange(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
      {scale && (
        <div className="mt-1 flex justify-between text-xs text-stone-500">
          <span>{scale.low}</span>
          <span>{scale.high}</span>
        </div>
      )}
    </div>
  );
}
