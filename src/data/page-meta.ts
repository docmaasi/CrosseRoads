/**
 * Every public page's title, description and social-card metadata, in one
 * place.
 *
 * Two consumers read this file, and they must never disagree:
 *
 *   1. the running app, through `applySeoHead`, which rewrites the <head> as a
 *      visitor moves between routes, and
 *   2. `scripts/prerender.mjs`, which bakes the same tags into a real HTML file
 *      per route at build time.
 *
 * The second exists because social crawlers — Facebook, LinkedIn, iMessage,
 * Slack, WhatsApp — fetch a URL and read the markup without ever running
 * JavaScript. Before prerendering, every shared link on this site previewed as
 * the homepage, whichever page had actually been shared. Baking the tags in is
 * the only thing those crawlers can see.
 *
 * The build script imports this module rather than restating the copy, so the
 * two views of a page cannot drift apart. Keep it free of imports from the
 * content data files: the pages are code-split, and pulling the guide or
 * worksheet data in here would drag all of it into every entry chunk. Counts
 * come in as arguments instead, from whichever side already holds the data.
 */

import { BRAND } from '../components/career-pathfinder/branding';
import type { GuideArticle } from '../components/guides/data/types';
import type { Worksheet } from '../components/worksheets/data/types';

/**
 * The canonical origin. Live since the 2026-09-10 DNS cutover; the
 * `crosse-roads.vercel.app` deployment URL still answers, but every absolute
 * URL the site publishes about itself should name this one, or search engines
 * and share cards end up split across two origins.
 */
export const SITE_ORIGIN = 'https://crosseroads.com';

/** The 1200x630 share card. Absolute URLs are required by Open Graph. */
export const OG_IMAGE_PATH = '/og-card.jpg';
export const OG_IMAGE_URL = `${SITE_ORIGIN}${OG_IMAGE_PATH}`;

export const SITE_NAME = BRAND.platformName;
export const AUTHOR_NAME = 'Dr. Kisa Crosse';

export interface PageMeta {
  title: string;
  description: string;
  /** Open Graph object type. Articles get `article`; everything else is a page. */
  type?: 'website' | 'article';
  keywords?: string[];
  publishedTime?: string;
  author?: string;
  section?: string;
}

/**
 * Routes whose copy is fixed. The three routes whose description quotes a
 * count of things live in the functions below.
 */
export const PAGES: Record<string, PageMeta> = {
  '/': {
    title: `${BRAND.platformName} — ${BRAND.platformTagline}`,
    description: BRAND.mission,
  },
  '/CareerPathfinder': {
    title: `Free Career Assessment — ${BRAND.productName} by ${BRAND.platformName}`,
    description:
      'Discover the careers that fit who you are. A free 10-minute assessment ' +
      'matching your talents, interests, personality, and lifestyle to your top ' +
      '10 careers — with education paths, reality checks, and next steps.',
  },
  '/CollegePlanner': {
    title: `Free College Admissions Planner & Checklist — by ${BRAND.platformName}`,
    description:
      'A free interactive college admissions checklist for parents and students — ' +
      'junior-year foundations, month-by-month senior year deadlines, financial aid, ' +
      'and everything after acceptance through move-in day.',
  },
  '/ParentRoadmap': {
    title: `First-Time College Parent Roadmap — ${BRAND.platformName}`,
    description:
      'A guided package for first-time college families: the interactive admissions ' +
      'planner, a financial-aid award comparison worksheet, an editable college-list ' +
      'tracker, monthly deadline reminders, and a private parent consultation with ' +
      'Dr. Kisa Crosse — from junior year through move-in day.',
  },
  '/Wellness': {
    title: `Wellness Transformation for Midlife Women — ${BRAND.platformName}`,
    description:
      'A free, gentle wellness companion for midlife women: realistic starting ' +
      'plans, a simple habit tracker, daily energy and mood check-ins, trend ' +
      'charts, and a reflection journal. Private — everything stays on your device.',
  },
  '/WorkWithMe': {
    title: `College Consulting Packages — Work with Dr. Kisa Crosse | ${BRAND.platformName}`,
    description:
      'One-on-one college admissions consulting from Dr. Kisa Crosse: the College ' +
      'Kickstart ($500), the CrosseRoads College Plan ($1,250 Founding Family Rate), ' +
      'the VIP Experience ($2,000), and a $150 Power Hour. Every package is backed ' +
      'by the free CrosseRoads planning tools.',
  },
  '/About': {
    title: `Our mission — ${BRAND.platformName}`,
    description:
      'Why CrosseRoads exists, what it believes, and the physician and mother behind it. Guidance, support and opportunity for every household.',
  },
  '/Search': {
    title: `Search — ${BRAND.platformName}`,
    description:
      'Search every CrosseRoads worksheet, guide and vetted free resource. Runs entirely in your browser.',
  },
  '/Privacy': {
    title: `Privacy Policy — ${BRAND.platformName}`,
    description:
      'CrosseRoads privacy policy: no accounts, no tracking cookies, and everything you enter stays in your own browser.',
  },
  '/Terms': {
    title: `Terms of Use — ${BRAND.platformName}`,
    description:
      'CrosseRoads terms of use: free self-guided educational tools, acceptable use, and disclaimers in plain English.',
  },
};

/** The homepage card, and the fallback whenever a route is not recognised. */
export const DEFAULT_META = PAGES['/'];

export function guidesIndexMeta(articleCount: number): PageMeta {
  return {
    title: `Career & College Guides — ${BRAND.platformName}`,
    description:
      `${articleCount} free, practical guides from Dr. Kisa Crosse — family physician, ` +
      'educator and mother — on choosing a career, college admissions timelines, ' +
      'paying for college, supporting your student, and getting through it all intact.',
  };
}

export function worksheetsIndexMeta(worksheetCount: number): PageMeta {
  return {
    title: `Free College Planning Worksheets — ${BRAND.platformName}`,
    description:
      `${worksheetCount} free printable worksheets for families going from high school to ` +
      'college: college list trackers, financial aid comparison charts, deadline ' +
      'checklists, essay brainstorms and parent conversation guides. Openly licensed.',
  };
}

export function resourcesMeta(resourceCount: number): PageMeta {
  return {
    title: `Free resources — ${BRAND.platformName}`,
    description:
      `${resourceCount} free, vetted resources from governments, universities and established nonprofits in 20 countries, plus the career library. No account, no cost.`,
  };
}

export function guideMeta(article: GuideArticle): PageMeta {
  return {
    title: `${article.title} — ${BRAND.platformName}`,
    description: article.description,
    type: 'article',
    keywords: article.keywords,
    publishedTime: article.datePublished,
    author: AUTHOR_NAME,
    section: article.category,
  };
}

export function worksheetMeta(worksheet: Worksheet): PageMeta {
  return {
    title: `${worksheet.title} — free printable worksheet — ${BRAND.platformName}`,
    description: worksheet.purpose,
  };
}
