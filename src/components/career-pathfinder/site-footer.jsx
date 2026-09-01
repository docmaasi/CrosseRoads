import { Mail } from 'lucide-react';
import { BRAND } from './branding';
import { CrosseRoadsWordmark, PathfinderMark } from './pathfinder-logo';
import { RESOURCE_LIBRARY } from './data/resources';

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

/** Industry-standard site footer for the Career Pathfinder pages. */
export function SiteFooter() {
  return (
    <footer className="bg-[#33184f] text-stone-300">
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
          <li><a className={footerLink} href="#resources">Free resources</a></li>
          <li><a className={footerLink} href="#faq">Frequently asked questions</a></li>
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

        <FooterColumn title="Contact">
          <li>
            <a
              className={`${footerLink} inline-flex items-center gap-1.5`}
              href={`mailto:${BRAND.contactEmail}`}
            >
              <Mail className="h-3.5 w-3.5" />
              {BRAND.contactEmail}
            </a>
          </li>
          <li className="text-stone-400">Privacy Policy — coming soon</li>
          <li className="text-stone-400">Terms of Use — coming soon</li>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-5xl space-y-2 px-6 py-5 text-xs text-stone-400">
          <p>
            {BRAND.productName} is a self-discovery tool for educational
            purposes. It does not guarantee employment outcomes and is not a
            substitute for professional career, academic, or financial advice.
            Salary and outlook context reflects publicly available U.S. data.
          </p>
          <p>
            © {new Date().getFullYear()} {BRAND.platformName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
