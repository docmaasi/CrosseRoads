import { useEffect, useRef } from 'react';
import { Download, Mail, Share2 } from 'lucide-react';
import { useInstallApp, shareApp } from './app-actions';
import { BRAND } from './branding';

const GROUPS = [
  {
    title: 'Tools',
    links: [
      { href: '/CareerPathfinder', label: 'Career assessment' },
      { href: '/CollegePlanner', label: 'College planner' },
      { href: '/ParentRoadmap', label: 'Parent roadmap' },
      { href: '/Wellness', label: 'Wellness' },
      { href: '/Guides', label: 'Guides & articles' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/CareerPathfinder#resources', label: 'Career resource library' },
      { href: '/CollegePlanner#resources', label: 'Official college links' },
      { href: '/ParentRoadmap#services', label: 'Advising services' },
      { href: '/Wellness#resources', label: 'Wellness resources' },
      { href: 'https://exampilot.help/', label: 'ExamPilot — AI exam prep', external: true },
    ],
  },
  {
    title: 'About',
    links: [
      { href: '/CareerPathfinder#about', label: 'Our mission' },
      { href: '/CareerPathfinder#faq', label: 'FAQs' },
      { href: '/Privacy', label: 'Privacy Policy' },
      { href: '/Terms', label: 'Terms of Use' },
    ],
  },
];

const itemClass =
  'flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm text-stone-700 hover:bg-[#17808d]/10 hover:text-[#4a2373]';

function GroupHeading({ children }) {
  return (
    <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-widest text-[#e8a33d]">
      {children}
    </p>
  );
}

/** Dropdown sitemap for the header hamburger: tools, resources, app
 *  install/share, and contact. Closes on outside click and Escape. */
export function MenuPanel({ isActive, onClose }) {
  const { install } = useInstallApp();
  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && onClose();
    // Close when clicking anywhere outside the panel (and not on the
    // hamburger button itself, which toggles the menu on its own).
    const onPointerDown = (event) => {
      if (event.target.closest('[data-menu-toggle]')) return;
      if (!panelRef.current?.contains(event.target)) onClose();
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [onClose]);

  return (
    <>
      <div
        ref={panelRef}
        className="absolute right-4 top-full z-20 mt-1 max-h-[80vh] w-72 overflow-y-auto rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
        {GROUPS.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <GroupHeading>{group.title}</GroupHeading>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`${itemClass} ${
                      isActive(link.href) ? 'font-medium text-[#4a2373]' : ''
                    }`}
                    onClick={onClose}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <GroupHeading>App</GroupHeading>
        <button
          type="button"
          className={itemClass}
          onClick={() => {
            onClose();
            install();
          }}
        >
          <Download className="h-4 w-4 text-[#17808d]" aria-hidden="true" />
          Download the app
        </button>
        <button
          type="button"
          className={itemClass}
          onClick={() => {
            onClose();
            shareApp();
          }}
        >
          <Share2 className="h-4 w-4 text-[#17808d]" aria-hidden="true" />
          Share CrosseRoads
        </button>

        <GroupHeading>Contact</GroupHeading>
        <a
          className={itemClass}
          href={`mailto:${BRAND.contactEmail}`}
          onClick={onClose}
        >
          <Mail className="h-4 w-4 text-[#17808d]" aria-hidden="true" />
          {BRAND.contactEmail}
        </a>
      </div>
    </>
  );
}
