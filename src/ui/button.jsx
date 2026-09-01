// Minimal button primitive (replaces the previous shared UI package).
// Variants: default (solid) and outline; sizes: default, sm, lg.

const VARIANTS = {
  default: 'bg-[#4a2373] text-white hover:bg-[#33184f]',
  outline: 'border border-stone-300 bg-white text-stone-700 hover:bg-stone-50',
};

const SIZES = {
  default: 'h-10 px-4 py-2 text-sm',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-11 px-8 text-base',
};

export function Button({
  variant = 'default',
  size = 'default',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17808d]/60 disabled:pointer-events-none disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    />
  );
}
