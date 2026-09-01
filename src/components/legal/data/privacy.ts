// Privacy Policy content. Every statement here reflects how the site
// actually works: no accounts, no databases, all tool data in the
// visitor's browser. Update the effective date when this changes.

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export const PRIVACY_EFFECTIVE = 'September 1, 2026';

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'overview',
    heading: 'The short version',
    paragraphs: [
      'CrosseRoads provides free, self-guided tools for career discovery, college planning, and wellness. The site is built so that everything you type stays with you: there are no accounts, no sign-ups, no advertising, and no tracking cookies. What you enter into our tools is saved only in your own browser, on your own device — it is never sent to us.',
    ],
  },
  {
    id: 'what-you-enter',
    heading: 'What you enter into the tools',
    paragraphs: [
      'Assessment answers, checklists, worksheets, journal entries, and similar tool data are stored in your browser’s local storage on your device. This information is never transmitted to CrosseRoads or to any server. We cannot see it, access it, or recover it for you.',
      'You can erase it at any time using the reset controls inside each tool, or by clearing your browser’s site data. If you clear it, it is gone permanently — there is no copy anywhere else.',
    ],
  },
  {
    id: 'what-we-receive',
    heading: 'What we receive from you',
    paragraphs: [
      'We do not ask for your name, email address, or any account information to use this site. If you choose to email us, we receive your email address and the contents of your message, and we use them only to respond to you.',
    ],
  },
  {
    id: 'hosting',
    heading: 'Hosting and server logs',
    paragraphs: [
      'This site is hosted by Vercel Inc. Like virtually every website host, Vercel processes basic technical data — such as your IP address, browser type, and the pages requested — in order to deliver the site to you reliably and securely. That processing is described in Vercel’s own privacy policy at vercel.com/legal/privacy-policy.',
    ],
  },
  {
    id: 'fonts',
    heading: 'Web fonts',
    paragraphs: [
      'The site’s typefaces are loaded from Google Fonts. When a page loads, your browser requests the font files from Google’s servers, which means Google receives your IP address as part of that request. Google’s privacy policy is available at policies.google.com/privacy.',
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies and local storage',
    paragraphs: [
      'We do not set advertising, analytics, or tracking cookies, and we do not use third-party trackers. The only browser storage this site uses is functional local storage, which:',
    ],
    bullets: [
      'saves your progress in each tool so it is still there when you come back,',
      'lives entirely on your device and is never transmitted anywhere,',
      'can be deleted at any time through your browser’s "clear browsing data" settings or each tool’s reset control.',
    ],
  },
  {
    id: 'children',
    heading: 'Children’s privacy',
    paragraphs: [
      'CrosseRoads is designed for families, including teens exploring careers and college. Because the site does not collect personal information from anyone, we do not knowingly collect personal information from children under 13. If you believe a child has emailed us personal information, contact us and we will delete it.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your privacy rights',
    paragraphs: [
      'Privacy laws such as the GDPR (Europe) and CCPA (California) give you rights to access, correct, export, and delete personal data an organization holds about you. CrosseRoads does not hold personal data about visitors — your tool data exists only on your device, fully under your control. If you have emailed us and would like that correspondence deleted, ask and we will honor it.',
    ],
  },
  {
    id: 'external-links',
    heading: 'Links to other sites',
    paragraphs: [
      'Our tools link to official government, education, and health resources. Once you follow a link, that organization’s own privacy practices apply — we encourage you to review them.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    paragraphs: [
      'If we change how the site handles information — for example, if we ever add accounts or analytics — we will update this policy and its effective date before the change takes effect.',
    ],
  },
  {
    id: 'contact',
    heading: 'Contact',
    paragraphs: [
      'Questions about this policy: hello@crosseroads.com.',
    ],
  },
];
