// Minimal progress bar primitive. The inner div is the indicator, so
// callers can restyle it with the `[&>div]:` Tailwind variant.

export function Progress({ value = 0, className = '', ...props }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped)}
      className={`relative w-full overflow-hidden rounded-full ${className}`}
      {...props}
    >
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
