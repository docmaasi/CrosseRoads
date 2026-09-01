// Decorative brand elements drawn from the CrosseRoads logo: the
// purple-to-teal-to-gold flow and the laurel branches that arc around
// the mark. Purely visual — every element is aria-hidden.

/** Thin gradient bar in the three brand colors (header/footer accent). */
export function BrandRibbon() {
  return (
    <div
      aria-hidden="true"
      className="h-[3px] w-full bg-gradient-to-r from-[#4a2373] via-[#17808d] to-[#e8a33d]"
    />
  );
}

const LEAVES = [
  { x: 66, y: 205, angle: -46, color: '#4a2373' },
  { x: 44, y: 172, angle: -28, color: '#7a3e9d' },
  { x: 30, y: 138, angle: -12, color: '#4a2373' },
  { x: 24, y: 104, angle: 4, color: '#17808d' },
  { x: 26, y: 70, angle: 20, color: '#7a3e9d' },
  { x: 36, y: 38, angle: 36, color: '#17808d' },
  { x: 48, y: 14, angle: 48, color: '#e8a33d' },
];

/** One laurel branch, echoing the leafy arcs framing the logo. */
function LeafBranch({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 100 240"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        d="M84 232 C 30 190, 14 110, 44 12"
        fill="none"
        stroke="#4a2373"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {LEAVES.map((leaf) => (
        <ellipse
          key={`${leaf.x}-${leaf.y}`}
          cx={leaf.x}
          cy={leaf.y}
          rx="15"
          ry="6.5"
          fill={leaf.color}
          transform={`rotate(${leaf.angle} ${leaf.x} ${leaf.y})`}
        />
      ))}
    </svg>
  );
}

/** Mirrored laurel branches flanking a hero section (desktop only). */
export function HeroLaurels() {
  const shared =
    'pointer-events-none absolute top-8 hidden h-56 w-24 opacity-[0.14] lg:block';
  return (
    <>
      <LeafBranch className={`${shared} left-[3%]`} />
      <LeafBranch flip className={`${shared} right-[3%]`} />
    </>
  );
}

/** Gradient utility classes for hero headings (purple → teal flow). */
export const GRADIENT_HEADING =
  'bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text text-transparent';
