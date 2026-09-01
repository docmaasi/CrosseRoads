import { BRAND } from './branding';

/** The CrosseRoads emblem — the family-and-path art from the logo. */
export function PathfinderMark({ size = 40 }) {
  return (
    <img
      src="/crosseroads-emblem.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="shrink-0 object-contain"
    />
  );
}

/**
 * CrosseRoads platform wordmark. The gold middle "e" makes the
 * distinctive spelling part of the brand instead of a typo risk.
 */
export function CrosseRoadsWordmark({ className = '' }) {
  return (
    <span className={`font-serif font-bold ${className}`}>
      Cross<span className="text-[#e8a33d]">e</span>Roads
    </span>
  );
}

/** Full logo lockup: mark + product wordmark + platform byline. */
export function PathfinderLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <PathfinderMark size={compact ? 34 : 44} />
      <div>
        <div
          className={`font-serif font-bold leading-tight text-[#4a2373] ${
            compact ? 'text-lg' : 'text-2xl'
          }`}
        >
          {BRAND.productName}
        </div>
        {!compact && (
          <div className="text-xs uppercase tracking-[0.2em] text-[#17808d]">
            {BRAND.tagline}
          </div>
        )}
      </div>
    </div>
  );
}
