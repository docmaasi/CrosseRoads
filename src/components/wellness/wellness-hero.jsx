import { HeartPulse, ShieldAlert } from 'lucide-react';
import { BRAND } from '../career-pathfinder/branding';
import { HeroLaurels } from '../career-pathfinder/brand-decor';

/** Hero + the medical disclaimer that frames the whole page. */
export function WellnessHero() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[-10%] h-64 w-64 rounded-full bg-[#e8a33d]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 left-[-12%] h-72 w-72 rounded-full bg-[#17808d]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-[30%] h-64 w-64 rounded-full bg-[#7a3e9d]/10 blur-3xl"
      />
      <HeroLaurels />
      <div className="relative mx-auto max-w-2xl px-4 pb-2 pt-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#17808d]/25 bg-white/80 px-4 py-1.5 text-sm text-[#4a2373] shadow-sm">
          <HeartPulse className="h-4 w-4 text-[#7a3e9d]" aria-hidden="true" />
          Wellness Transformation
        </span>
        <h1 className="mt-5 font-serif text-4xl font-bold leading-tight bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text text-transparent">
          Reclaim your energy, one steady week at a time
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-stone-600">
          Not a restrictive diet. Not another fitness app. A gentle system for
          midlife women: pick a starting point, track a few habits, check in
          with yourself daily, and watch your energy trend up.
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-400">
          {BRAND.byline} — primary care physician
        </p>

        <div className="mx-auto mt-7 flex max-w-xl gap-2.5 rounded-xl border border-stone-300 bg-white p-4 text-left">
          <ShieldAlert
            className="mt-0.5 h-4 w-4 shrink-0 text-stone-400"
            aria-hidden="true"
          />
          <p className="text-xs leading-relaxed text-stone-500">
            This page is for education and self-reflection only. It is not
            medical advice, diagnosis, or treatment, and it does not create a
            doctor–patient relationship. Talk with your own clinician before
            changing your exercise, eating, or medications — especially if you
            have a health condition. Everything you enter stays on your device.
          </p>
        </div>
      </div>
    </div>
  );
}
