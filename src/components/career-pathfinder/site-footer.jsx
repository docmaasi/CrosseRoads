import { Mail, ShieldAlert } from 'lucide-react';
import { BrandRibbon } from './brand-decor';
import { BRAND } from './branding';
import { CrosseRoadsWordmark, PathfinderMark } from './pathfinder-logo';
import { RESOURCE_LIBRARY } from './data/resources';
import {
  ACCESSIBILITY_NOTICE,
  CRISIS_NOTICE,
  DISCLAIMERS,
} from './data/disclaimers';

const exploreLinks = RESOURCE_LIBRARY[0].links.slice(0, 4);

function FooterColumn({ title, children }) {
  return (
    <nav aria-label={title}>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-[#e8a33d]">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm">{children}</ul>
    </nav>
  );
}

const footerLink =
  'text-stone-300 transition-colors hover:text-white hover:underline underline-offset-2';

/**
 * Site-wide footer.
 *
 * The disclaimers are deliberately platform-wide rather than page-specific:
 * this footer renders on the Wellness page too, so a notice that only mentioned
 * the career assessment would not cover the page it was printed on.
 *
 * In-page anchors are written as absolute paths (/CareerPathfinder#faq) because
 * a bare "#faq" silently does nothing on the four pages that have no such
 * section.
 */
export function SiteFooter() {
  return (
    <footer className="bg-[#33184f] text-stone-300">
      <BrandRibbon />
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <PathfinderMark size={34} />
            <CrosseRoadsWordmark className="text-lg text-white" />
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#e8a33d]">
            {BRAND.platformTagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {BRAND.mission} {BRAND.byline.replace(/^From/, 'From')},
            physician, educator, and mom.
          </p>
        </div>

        <FooterColumn title="Platform">
          <li><a className={footerLink} href="/CareerPathfinder">Career assessment</a></li>
          <li><a className={footerLink} href="/CollegePlanner">College admissions planner</a></li>
          <li><a className={footerLink} href="/ParentRoadmap">Parent roadmap package</a></li>
          <li><a className={footerLink} href="/Wellness">Wellness transformation</a></li>
          <li><a className={footerLink} href="/Guides">Guides</a></li>
          <li><a className={footerLink} href="/CareerPathfinder#resources">Free resources</a></li>
          <li><a className={footerLink} href="/CareerPathfinder#faq">Frequently asked questions</a></li>
        </FooterColumn>

        <FooterColumn title="Career data sources">
          {exploreLinks.map((link) => (
            <li key={link.url}>
              <a
                className={footerLink}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact & legal">
          <li>
            <a
              className={`${footerLink} inline-flex items-center gap-1.5`}
              href={`mailto:${BRAND.contactEmail}`}
            >
              <Mail className="h-3.5 w-3.5" />
              {BRAND.contactEmail}
            </a>
          </li>
          <li><a className={footerLink} href="/Privacy">Privacy Policy</a></li>
          <li><a className={footerLink} href="/Terms">Terms of Use</a></li>
          <li><a className={footerLink} href="/Terms#educational-only">Disclaimers</a></li>
          <li><a className={footerLink} href="/Privacy#children">Children&apos;s privacy</a></li>
        </FooterColumn>
      </div>

      {/* Crisis notice sits above the legal small print on purpose: it is the
          one thing in this footer that might matter in the next five minutes. */}
      <div className="border-t border-white/10 bg-[#2a1240]">
        <div className="mx-auto flex max-w-5xl items-start gap-2.5 px-6 py-4">
          <ShieldAlert
            className="mt-0.5 h-4 w-4 shrink-0 text-[#e8a33d]"
            aria-hidden="true"
          />
          <p className="text-xs leading-relaxed text-stone-300">
            {CRISIS_NOTICE.lead}{' '}
            <span className="font-semibold text-white">{CRISIS_NOTICE.emergency}</span>
            {CRISIS_NOTICE.middle}{' '}
            <a
              href={CRISIS_NOTICE.lifelineHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline underline-offset-2 hover:text-[#e8a33d]"
            >
              {CRISIS_NOTICE.lifeline}
            </a>
            {CRISIS_NOTICE.tail}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[#e8a33d]">
            Important disclaimers
          </h2>
          <dl className="mt-3 space-y-2">
            {DISCLAIMERS.map((item) => (
              <div key={item.id} className="text-xs leading-relaxed text-stone-400">
                <dt className="inline font-semibold text-stone-300">
                  {item.label}.{' '}
                </dt>
                <dd className="inline">{item.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs leading-relaxed text-stone-400">
            <span className="font-semibold text-stone-300">Accessibility. </span>
            {ACCESSIBILITY_NOTICE}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-stone-400">
            Career, wage, and outlook context is drawn from publicly available
            U.S. Department of Labor data and other official sources, and may lag
            current conditions. Full terms are in the{' '}
            <a
              className="text-stone-300 underline underline-offset-2 hover:text-white"
              href="/Terms"
            >
              Terms of Use
            </a>{' '}
            and{' '}
            <a
              className="text-stone-300 underline underline-offset-2 hover:text-white"
              href="/Privacy"
            >
              Privacy Policy
            </a>
            , which govern if anything here is unclear.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-5 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {BRAND.platformName}. All rights
            reserved. Site created and maintained by{' '}
            <a
              className="text-stone-300 underline underline-offset-2 transition-colors hover:text-white"
              href="https://smithappstudio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              SmithAppStudio LLC
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
