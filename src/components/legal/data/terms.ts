// Terms of Use content. Written to match what the site actually offers:
// free self-guided educational tools with no accounts or payments.

import type { LegalSection } from './privacy';

export const TERMS_EFFECTIVE = 'September 1, 2026';

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: 'acceptance',
    heading: 'Agreeing to these terms',
    paragraphs: [
      'By using the CrosseRoads website and its tools, you agree to these Terms of Use. If you do not agree, please do not use the site.',
    ],
  },
  {
    id: 'services',
    heading: 'What CrosseRoads provides',
    paragraphs: [
      'CrosseRoads offers free, self-guided educational tools and articles: a career assessment, a college admissions planner, a first-time college parent roadmap, a wellness companion, and written guides. The tools run in your browser and require no account or payment.',
      'Individual advising services described on the site are arranged separately by contacting us, and may be subject to their own written agreements.',
    ],
  },
  {
    id: 'educational-only',
    heading: 'Educational use only — not professional advice',
    paragraphs: [
      'Everything on this site is for education and self-reflection. It is not, and does not replace, professional advice:',
    ],
    bullets: [
      'The career assessment is a self-discovery aid. It does not guarantee employment, income, or admission outcomes.',
      'The college planning tools summarize publicly available guidance. Always confirm dates, requirements, and costs with each school and official source.',
      'The wellness tools are not medical advice, diagnosis, or treatment, and using them does not create a doctor–patient relationship. Talk with your own clinician before changing exercise, eating, or medications.',
      'Financial worksheets are organizational aids, not financial advice.',
    ],
  },
  {
    id: 'your-data',
    heading: 'Your data stays on your device',
    paragraphs: [
      'What you enter into the tools is saved only in your browser’s local storage (see our Privacy Policy). You are responsible for your own device and backups; clearing your browser data permanently erases your progress, and we have no copy to restore.',
    ],
  },
  {
    id: 'acceptable-use',
    heading: 'Acceptable use',
    paragraphs: ['When using the site, you agree not to:'],
    bullets: [
      'break the law or infringe the rights of others,',
      'interfere with the operation or security of the site,',
      'scrape, copy at scale, or republish the site’s content or tools as your own,',
      'misrepresent your affiliation with CrosseRoads.',
    ],
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual property',
    paragraphs: [
      'The CrosseRoads name, logo, content, and tools are the property of CrosseRoads and are protected by copyright and trademark law. You may use the site for personal, non-commercial purposes. Third-party names, marks, and linked resources belong to their respective owners.',
    ],
  },
  {
    id: 'third-party',
    heading: 'Third-party links',
    paragraphs: [
      'The site links to official government, education, and health resources for your convenience. We do not control those sites and are not responsible for their content, availability, or policies. A link is not an endorsement.',
    ],
  },
  {
    id: 'disclaimer',
    heading: 'Disclaimer of warranties',
    paragraphs: [
      'The site and its tools are provided "as is" and "as available", without warranties of any kind, express or implied — including accuracy, completeness, fitness for a particular purpose, or uninterrupted availability. Guidance, deadlines, and external resources can change without notice.',
    ],
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, CrosseRoads will not be liable for any indirect, incidental, consequential, or special damages arising from your use of the site. Because the tools are free, our total liability for any claim related to them is limited to the amount you paid to use them: zero.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to these terms',
    paragraphs: [
      'We may update these terms from time to time. The effective date above reflects the latest version, and continued use of the site after a change means you accept the updated terms.',
    ],
  },
  {
    id: 'law',
    heading: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of the United States and of the state in which CrosseRoads is established, without regard to conflict-of-law rules.',
    ],
  },
  {
    id: 'contact',
    heading: 'Contact',
    paragraphs: ['Questions about these terms: hello@crosseroads.com.'],
  },
];
