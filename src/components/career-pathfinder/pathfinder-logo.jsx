import { BRAND } from './branding';

/** Compass-and-path mark for the Career Pathfinder brand. */
export function PathfinderMark({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="53" stroke="#4a2373" strokeWidth="7" />
      <path
        d="M32 84 C 60 94, 76 74, 58 62 C 40 50, 52 34, 74 34"
        stroke="#e8a33d"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeDasharray="0.1 12"
      />
      <circle cx="32" cy="84" r="6.5" fill="#4a2373" />
      <circle cx="58" cy="62" r="4.5" fill="#17808d" />
      <path
        d="M84 21 l4.6 9.4 10.4 1.5 -7.5 7.3 1.8 10.3 -9.3 -4.9 -9.3 4.9 1.8 -10.3 -7.5 -7.3 10.4 -1.5 z"
        fill="#e8a33d"
      />
    </svg>
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
