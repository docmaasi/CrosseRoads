import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Compass,
  ExternalLink,
  GraduationCap,
  HandHeart,
  Heart,
  HeartPulse,
  Map,
  Sparkles,
  Users,
} from 'lucide-react';
import { BRAND } from './branding';
import { PhotoBanner } from './photo-banner';
import { DIRECTORY } from '@/data/resource-directory';

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
  { value: `${DIRECTORY.length}+`, label: 'vetted resources' },
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

/**
 * The mission statement.
 *
 * "Our mission" in the menu used to land on a screen-reader-only heading, a
 * one-line quote and then a list of tools — a link that arrived nowhere. This
 * is what it arrives at now.
 */
const MISSION = {
  eyebrow: 'Our mission',
  heading: 'Every family deserves to know what is possible',
  paragraphs: [
    'The road from high school to college is not equally lit for everyone. Some families inherit the map. They know which questions to ask, which deadlines actually matter, and who to call when something goes wrong. Other families are handed the same eighteen months, the same forms and the same stakes, and are expected to work it out alone.',
    'Dr. Kisa Crosse has spent more than two decades as a family physician, sitting with families through the years that shape everything after them. She has also been the mother at the kitchen table late at night, with a deadline in the morning and nobody to ask. CrosseRoads is what she wished had been there then.',
    'So the work here is easy to describe and hard to do: take a process that quietly rewards insider knowledge, and make it plain. Give a parent enough to feel steady. Give a student enough to take the wheel. And treat this year as what it actually is — not a competition to be won, but a family working out, together, what comes next.',
  ],
  beliefs: [
    'This should be a partnership. Not a parent taking it over, and not a seventeen-year-old left alone with it.',
    'Getting in was never the goal. The right fit, and a student ready to thrive once they arrive, is.',
    'Families deserve straight answers — about the money, about the odds, about what genuinely matters and what does not.',
    'Nobody should have to already know somebody in order to find out how any of this works.',
  ],
};

function MissionStatement() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-12 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#116a75]">
        {MISSION.eyebrow}
      </p>
      <h3 className="mt-3 bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text font-serif text-3xl font-bold leading-tight text-transparent">
        {MISSION.heading}
      </h3>

      <div className="mt-5 space-y-4 text-left">
        {MISSION.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="leading-relaxed text-stone-700">
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="mt-8 space-y-3 text-left">
        {MISSION.beliefs.map((belief) => (
          <li
            key={belief.slice(0, 40)}
            className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
          >
            <span aria-hidden="true" className="mt-0.5 text-[#e8a33d]">
              ✦
            </span>
            <span className="leading-relaxed text-stone-700">{belief}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 font-serif text-lg italic text-[#4a2373]">
        Guidance, support, and opportunity — for every household, whatever it looks like.
      </p>
    </div>
  );
}

function MissionBand() {
  return (
    <div className="relative overflow-hidden bg-[#33184f] px-4 py-12 text-center">
      <img
        src="/images/mission-band-1600.webp"
        srcSet="/images/mission-band-800.webp 800w, /images/mission-band-1600.webp 1600w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        width="1600"
        height="688"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#33184f]/80 via-[#4a2373]/66 to-[#17546b]/74"
      />
      <div className="relative">
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

      <MissionStatement />

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

        {/* The consulting practice sits apart from the five free tools —
            it is the one thing on the site with a price, so it gets its
            own tile rather than joining the free-tool count above. */}
        <a
          href="/WorkWithMe"
          className="group mt-4 flex items-start gap-3 rounded-xl border-2 border-[#4a2373]/30 bg-gradient-to-r from-[#4a2373]/[0.06] via-white to-[#17808d]/[0.06] p-4 text-left shadow-md transition-all hover:-translate-y-0.5 hover:border-[#4a2373] hover:shadow-lg"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4a2373] to-[#17808d]">
            <Heart className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1 font-medium text-[#4a2373] group-hover:text-[#17808d]">
              Work with Dr. Crosse one-on-one
              <ArrowRight
                className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </span>
            <p className="mt-0.5 text-sm text-stone-600">
              Consulting packages from $500, a $150 Power Hour, and à la carte
              help — for families who want a guide beside them, not just a map.
            </p>
          </span>
        </a>

        <a
          href="https://exampilot.help/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-2 mt-3 flex items-start gap-3 rounded-xl border border-[#e8a33d]/40 bg-gradient-to-r from-[#e8a33d]/10 to-[#17808d]/10 p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e8a33d] to-[#b07514]">
            <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#4a2373] group-hover:text-[#17808d]">
              ExamPilot — AI-powered exam prep
              <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            </span>
            <p className="mt-0.5 text-sm text-stone-600">
              Studying for a class or a big test? Our AI study partner offers
              119+ courses with practice questions, flashcards, and timed
              tests — free to start at ExamPilot.help.
            </p>
          </span>
        </a>
      </div>
    </section>
  );
}
