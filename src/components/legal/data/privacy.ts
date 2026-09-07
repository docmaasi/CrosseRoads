// Privacy Policy content. Every statement here reflects how the site
// actually works: no accounts, no databases, all tool data in the
// visitor's browser — with ONE exception, the inquiry form on the Work
// With Me page, which sends what you type to Dr. Crosse by email.
// Update the effective date whenever any of this changes.

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export const PRIVACY_EFFECTIVE = 'September 8, 2026';

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'overview',
    heading: 'The short version',
    paragraphs: [
      'CrosseRoads provides free, self-guided tools for career discovery, college planning, and wellness, and offers paid one-on-one college consulting with Dr. Kisa Crosse. The tools are built so that everything you type stays with you: there are no accounts, no sign-ups, no advertising, and no tracking cookies. What you enter into a tool is saved only in your own browser, on your own device — it is never sent to us.',
      'The one place the site does collect information is the inquiry form on the Work With Me page. When you send an inquiry, we receive what you typed so that Dr. Crosse can reply. That is described in full below.',
    ],
  },
  {
    id: 'what-you-enter',
    heading: 'What you enter into the free tools',
    paragraphs: [
      'Assessment answers, checklists, worksheets, journal entries, and similar tool data are stored in your browser’s local storage on your device. This information is never transmitted to CrosseRoads or to any server. We cannot see it, access it, or recover it for you.',
      'You can erase it at any time using the reset controls inside each tool, or by clearing your browser’s site data. If you clear it, it is gone permanently — there is no copy anywhere else.',
    ],
  },
  {
    id: 'inquiry-form',
    heading: 'The inquiry form',
    paragraphs: [
      'The Work With Me page has a form for asking about consulting. When you submit it, we collect:',
    ],
    bullets: [
      'your name and email address, so Dr. Crosse can reply to you,',
      'the student’s grade level and the package you are interested in, if you choose to give them,',
      'the message you write,',
      'basic technical details of the request — such as your IP address and browser — which our hosting provider processes to deliver the form and which we use only to block spam and abuse.',
    ],
  },
  {
    id: 'inquiry-use',
    heading: 'How inquiry information is used and kept',
    paragraphs: [
      'Your inquiry is delivered as an email to hello@crosseroads.com through Resend, our email delivery provider, whose privacy policy is at resend.com/legal/privacy-policy. The website itself keeps no copy: nothing is stored in a database, and there is no account created for you.',
      'Dr. Crosse uses your inquiry only to respond to you, to understand your family’s situation, and — if you go on to book — to provide the consulting services. Your message and any follow-up correspondence are kept in her email for as long as needed for that purpose and for reasonable record-keeping.',
      'We do not sell, rent, or share inquiry information with anyone for marketing. We do not add you to a mailing list. Information is shared only with service providers needed to deliver the site and the email (Vercel and Resend), or if required by law.',
    ],
  },
  {
    id: 'consulting-records',
    heading: 'Information shared during consulting',
    paragraphs: [
      'If your family books a package, you may share transcripts, essays, activity lists, financial-aid details, and similar information with Dr. Crosse so she can advise you. That information is used only to provide the services, is treated as confidential, and is kept only as long as needed to deliver the package and maintain reasonable records. You may ask for it to be deleted when your package is complete.',
    ],
  },
  {
    id: 'hosting',
    heading: 'Hosting and server logs',
    paragraphs: [
      'This site is hosted by Vercel Inc. Like virtually every website host, Vercel processes basic technical data — such as your IP address, browser type, and the pages requested — in order to deliver the site to you reliably and securely, and to run the inquiry form. That processing is described in Vercel’s own privacy policy at vercel.com/legal/privacy-policy.',
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
      'CrosseRoads is designed for families, including teens exploring careers and college. The free tools collect no personal information from anyone, of any age. The inquiry form and consulting services are intended for parents and legal guardians; we ask that children under 13 not submit the form. If you believe a child under 13 has sent us personal information, contact us and we will delete it.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your privacy rights',
    paragraphs: [
      'Privacy laws such as the GDPR (Europe) and CCPA (California) give you rights to access, correct, export, and delete personal data an organization holds about you. For the free tools, CrosseRoads holds no personal data — your tool data exists only on your device, fully under your control. For inquiries and consulting correspondence, email hello@crosseroads.com and we will provide, correct, or delete what we hold about you.',
    ],
  },
  {
    id: 'security',
    heading: 'Security',
    paragraphs: [
      'The site is served only over HTTPS, and the inquiry form is protected against automated abuse. No system is perfectly secure, and email in particular is not an encrypted channel — please do not send Social Security numbers, full financial account details, or other highly sensitive information through the form. Dr. Crosse will tell you if and how any such information is needed for a package.',
    ],
  },
  {
    id: 'external-links',
    heading: 'Links to other sites',
    paragraphs: [
      'Our tools link to official government, education, and health resources, and to ExamPilot, a separate study platform. Once you follow a link, that organization’s own privacy practices apply — we encourage you to review them.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    paragraphs: [
      'If we change how the site handles information — for example, if we ever add accounts, analytics, or online payment — we will update this policy and its effective date before the change takes effect.',
    ],
  },
  {
    id: 'contact',
    heading: 'Contact',
    paragraphs: ['Questions about this policy: hello@crosseroads.com.'],
  },
];
