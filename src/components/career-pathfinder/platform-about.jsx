import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Compass,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Map,
  Users,
} from 'lucide-react';
import { BRAND } from './branding';

const PILLARS = [
  { icon: Users, title: 'Parent Support', caption: "You're not alone." },
  { icon: GraduationCap, title: 'College Planning', caption: 'Step by step.' },
  { icon: HandHeart, title: 'Scholarships', caption: 'More possibilities.' },
  { icon: BookOpen, title: 'Resources', caption: 'Real help. Real impact.' },
];

const STATS = [
  { value: '5', label: 'free tools' },
  { value: '36', label: 'assessment questions' },
  { value: '37', label: 'careers matched' },
  { value: '50+', label: 'vetted resources' },
];

const TOOLS = [
  {
    icon: Compass,
    href: '/CareerPathfinder',
    title: 'Career Pathfinder',
    text: 'A free 7-factor assessment that matches who you are to real careers.',
    tile: 'bg-[#4a2373]',
  },
  {
    icon: ClipboardCheck,
    href: '/CollegePlanner',
    title: 'College Planner',
    text: 'Every admissions milestone from junior year to move-in day.',
    tile: 'bg-[#17808d]',
  },
  {
    icon: Map,
    href: '/ParentRoadmap',
    title: 'Parent Roadmap',
    text: 'Award comparisons, college lists, and first-time college parent support.',
    tile: 'bg-[#7a3e9d]',
  },
  {
    icon: HeartPulse,
    href: '/Wellness',
    title: 'Wellness',
    text: 'A gentle habit and check-in companion, so you can pour from a full cup.',
    tile: 'bg-[#b07514]',
  },
  {
    icon: BookOpen,
    href: '/Guides',
    title: 'Guides',
    text: 'Practical articles on career discovery and college admissions.',
    tile: 'bg-[#17808d]',
  },
];

function MissionBand() {
  return (
    <div className="bg-gradient-to-br from-[#33184f] via-[#4a2373] to-[#17546b] px-4 py-12 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8a33d]">
        {BRAND.platformTagline}
      </p>
      <blockquote className="mx-auto mt-5 max-w-2xl font-serif text-2xl leading-relaxed text-white sm:text-3xl">
        “{BRAND.mission}”
        <footer className="mt-4 text-sm font-semibold uppercase tracking-widest text-[#8fd3dd]">
          — Dr. Kisa Crosse, physician, educator &amp; mom
        </footer>
      </blockquote>
      <div className="mx-auto mt-9 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
        {PILLARS.map(({ icon: Icon, title, caption }) => (
          <div
            key={title}
            className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur"
          >
            <Icon className="mx-auto h-6 w-6 text-[#e8a33d]" aria-hidden="true" />
            <p className="mt-2 text-sm font-semibold text-white">{title}</p>
            <p className="text-xs text-white/70">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Platform mission band + stats + tool overview for the landing page. */
export function PlatformAbout() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-10 scroll-mt-16">
      <h2 id="about-heading" className="sr-only">
        About CrosseRoads
      </h2>
      <MissionBand />

      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="grid grid-cols-2 gap-3 py-10 sm:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="font-serif text-4xl font-bold bg-gradient-to-r from-[#4a2373] to-[#17808d] bg-clip-text text-transparent">
                {value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-stone-500">
                {label}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-serif text-3xl font-bold text-[#4a2373]">
          One platform, five free tools
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-stone-600">
          Everything runs in your browser — no accounts, no cost, and what you
          enter stays on your device.
        </p>
        <div className="mt-6 grid gap-3 pb-2 text-left sm:grid-cols-2">
          {TOOLS.map(({ icon: Icon, href, title, text, tile }) => (
            <a
              key={href}
              href={href}
              className="group flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tile}`}
              >
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-1 font-medium text-[#4a2373] group-hover:text-[#17808d]">
                  {title}
                  <ArrowRight
                    className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
                <p className="mt-0.5 text-sm text-stone-600">{text}</p>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
