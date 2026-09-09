import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Compass,
  FileText,
  Globe,
  HeartPulse,
  Map,
} from 'lucide-react';
import { BRAND } from '../career-pathfinder/branding';
import { HeroLaurels } from '../career-pathfinder/brand-decor';
import { PhotoBanner } from '../career-pathfinder/photo-banner';
import { WORKSHEETS } from '../worksheets/data/worksheets';
import { ARTICLES } from '../guides/data/articles';
import { DIRECTORY } from '@/data/resource-directory';

/**
 * The front door.
 *
 * "/" used to redirect straight into the Career Pathfinder, which meant anyone
 * given the bare link landed inside a tool — and a returning visitor landed
 * mid-assessment, or on somebody's old results. A first-time visitor should
 * arrive somewhere that says what this is and lets them choose.
 */

const TOOLS = [
  {
    icon: Compass,
    href: '/CareerPathfinder',
    title: 'Career Pathfinder',
    text: 'A 7-factor assessment that matches who a student actually is to real careers.',
    tile: 'bg-[#4a2373]',
  },
  {
    icon: ClipboardCheck,
    href: '/CollegePlanner',
    title: 'College Planner',
    text: 'Every admissions milestone from junior year to move-in day, in one checklist.',
    tile: 'bg-[#17808d]',
  },
  {
    icon: Map,
    href: '/ParentRoadmap',
    title: 'Parent Roadmap',
    text: 'Award comparisons, college list tracking, and first-time college parent support.',
    tile: 'bg-[#7a3e9d]',
  },
  {
    icon: HeartPulse,
    href: '/Wellness',
    title: 'Wellness',
    text: 'A gentle habit and check-in companion, so you can pour from a full cup.',
    tile: 'bg-[#b07514]',
  },
];

function Library({ icon: Icon, count, label, text, href, cta }) {
  return (
    <Link
      to={href}
      className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <Icon className="h-6 w-6 text-[#17808d]" aria-hidden="true" />
      <p className="mt-3 font-serif text-3xl font-bold text-[#4a2373]">{count}</p>
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">{label}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{text}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#4a2373] group-hover:text-[#17808d]">
        {cta}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function HomeScreen() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[#17808d]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-[-12%] h-80 w-80 rounded-full bg-[#e8a33d]/10 blur-3xl"
      />
      <HeroLaurels />

      <div className="relative mx-auto max-w-2xl px-4 pb-14 pt-12 text-center">
        <div className="cp-float flex justify-center">
          <img
            src="/crosseroads-logo-clear.png"
            alt={`${BRAND.platformName} — ${BRAND.platformTagline}`}
            className="w-64 sm:w-80"
            width="640"
            height="500"
          />
        </div>

        <h1 className="mt-8 font-serif text-4xl font-bold leading-tight sm:text-5xl">
          <span className="bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text text-transparent">
            The road to college, with someone beside you
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
          {BRAND.mission}
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
          {BRAND.byline} — physician, educator &amp; mom
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/CareerPathfinder"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4a2373] to-[#17808d] px-8 py-3.5 font-medium text-white shadow-lg shadow-[#4a2373]/25 transition-transform hover:scale-[1.03]"
          >
            Start the free assessment
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/About"
            className="inline-flex items-center gap-2 rounded-full border border-[#4a2373]/30 px-7 py-3.5 font-medium text-[#4a2373] transition-colors hover:border-[#4a2373] hover:bg-white"
          >
            Read our mission
          </Link>
        </div>

        <PhotoBanner
          name="hero-career"
          shape="hero"
          eager
          className="mt-10"
          alt="A mother and her teenage daughter sit on their front steps in the late-afternoon sun, leaning over an open notebook together and smiling."
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-16">
        <h2 className="text-center font-serif text-3xl font-bold text-[#4a2373]">
          Four free tools, and nothing to sign up for
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-stone-600">
          Everything runs in your browser. Nothing you enter leaves your device.
        </p>

        <div className="mt-7 grid gap-3 text-left sm:grid-cols-2">
          {TOOLS.map(({ icon: Icon, href, title, text, tile }) => (
            <Link
              key={href}
              to={href}
              className="group flex gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tile}`}
              >
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-lg font-bold text-[#4a2373] group-hover:text-[#17808d]">
                  {title}
                </span>
                <span className="mt-0.5 block text-sm leading-relaxed text-stone-600">
                  {text}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <h2 className="mt-14 text-center font-serif text-3xl font-bold text-[#4a2373]">
          And a library that keeps growing
        </h2>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <Library
            icon={FileText}
            count={WORKSHEETS.length}
            label="Printable worksheets"
            text="Trackers, comparison charts and checklists, free to print and free to copy — including for your school or nonprofit."
            href="/Worksheets"
            cta="Browse worksheets"
          />
          <Library
            icon={BookOpen}
            count={ARTICLES.length}
            label="Practical guides"
            text="Plain answers on admissions, paying for college, careers, and getting through the year intact."
            href="/Guides"
            cta="Read the guides"
          />
          <Library
            icon={Globe}
            count={DIRECTORY.length}
            label="Vetted resources"
            text="Free, safe resources from governments, universities and established nonprofits across 20 countries."
            href="/Resources"
            cta="Explore resources"
          />
        </div>

        <div className="mt-14 rounded-3xl border border-[#e8a33d]/40 bg-gradient-to-r from-[#e8a33d]/10 to-[#17808d]/10 p-7 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#4a2373]">
            When you want somebody in it with you
          </h2>
          <p className="mx-auto mt-2 max-w-xl leading-relaxed text-stone-700">
            The tools handle the checklists and the timelines. Dr. Crosse handles
            the essays, the strategy, and the judgement calls that software
            cannot make for your family.
          </p>
          <Link
            to="/WorkWithMe"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#4a2373] px-7 py-3 font-medium text-white transition-colors hover:bg-[#17808d]"
          >
            Work with Dr. Crosse
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
