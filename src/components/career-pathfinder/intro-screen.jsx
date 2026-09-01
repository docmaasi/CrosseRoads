import { Clock, Gift, ShieldCheck } from 'lucide-react';
import { Button } from '@/ui/button';
import { PathfinderLogo } from './pathfinder-logo';
import { BRAND } from './branding';

const FACTORS = [
  'Education',
  'Talents',
  'Interests',
  'Passions',
  'Personality',
  'Work preferences',
  'Lifestyle priorities',
];

const TRUST_BADGES = [
  { icon: Gift, label: '100% free' },
  { icon: ShieldCheck, label: 'No sign-up' },
  { icon: Clock, label: 'About 10 minutes' },
];

/** Landing screen: what the assessment is and how it works. */
export function IntroScreen({ onStart, hasProgress }) {
  return (
    <div className="relative overflow-hidden">
      {/* Soft decorative glows behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[#17808d]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-[-12%] h-80 w-80 rounded-full bg-[#e8a33d]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl px-4 py-14 text-center">
        <div className="cp-float flex justify-center">
          <PathfinderLogo />
        </div>

        <h1 className="mt-9 font-serif text-4xl font-bold leading-tight text-[#4a2373] sm:text-5xl">
          Discover the careers that fit{' '}
          <span className="relative whitespace-nowrap">
            who you are
            <svg
              aria-hidden="true"
              viewBox="0 0 200 9"
              className="absolute -bottom-1.5 left-0 h-2.5 w-full text-[#e8a33d]"
              preserveAspectRatio="none"
            >
              <path
                d="M2 7 Q 50 1, 100 5 T 198 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-stone-600">
          What you&apos;re good at, what you love, and the life you want to
          build — one assessment looks at all of it, across seven factors.
        </p>

        <div className="mx-auto mt-7 flex max-w-lg flex-wrap justify-center gap-2">
          {FACTORS.map((factor, index) => (
            <span
              key={factor}
              className="rounded-full border border-[#17808d]/25 bg-white/80 px-3.5 py-1.5 text-sm text-[#4a2373] shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <span className="mr-1.5 font-semibold text-[#e8a33d]">
                {index + 1}
              </span>
              {factor}
            </span>
          ))}
        </div>

        <p className="mt-7 text-sm text-stone-500">
          There are no right or wrong answers — choose what best describes you
          today.
        </p>

        <Button
          size="lg"
          className="mt-7 h-13 rounded-full bg-[#4a2373] px-12 py-6 text-base text-white shadow-lg shadow-[#4a2373]/25 transition-all hover:scale-[1.03] hover:bg-[#17808d]"
          onClick={onStart}
        >
          {hasProgress ? 'Continue where I left off' : 'Start the free assessment'}
        </Button>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 text-sm text-stone-500"
            >
              <Icon className="h-4 w-4 text-[#17808d]" />
              {label}
            </span>
          ))}
        </div>

        <p className="mt-12 text-xs uppercase tracking-[0.2em] text-stone-400">
          {BRAND.byline} — physician, educator &amp; mom
        </p>
      </div>
    </div>
  );
}
