import { useEffect, useState } from 'react';

/** Animated circular match-score gauge. Gold ring at 85%+ (best match). */
export function ScoreRing({ value, size = 48 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setProgress(value));
    return () => cancelAnimationFrame(frame);
  }, [value]);

  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  return (
    <svg
      width={size}
      height={size}
      className="shrink-0"
      role="img"
      aria-label={`${value}% match`}
    >
      <defs>
        <linearGradient id="cr-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a2373" />
          <stop offset="100%" stopColor="#17808d" />
        </linearGradient>
      </defs>
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#ece5f4"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={value >= 85 ? '#e8a33d' : 'url(#cr-ring-grad)'}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - (circumference * progress) / 100}
        transform={`rotate(-90 ${center} ${center})`}
        style={{ transition: 'stroke-dashoffset 900ms ease-out' }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="#4a2373"
        fontSize={size * 0.27}
        fontWeight="700"
      >
        {value}%
      </text>
    </svg>
  );
}
