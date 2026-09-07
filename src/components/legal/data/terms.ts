// Terms of Use content. Written to match what the site actually offers:
// free self-guided educational tools with no accounts, PLUS paid
// one-on-one consulting services arranged through the inquiry form and
// invoiced directly by Dr. Crosse. The consulting sections are the ones
// that matter legally once money changes hands — keep them accurate.

import type { LegalSection } from './privacy';

export const TERMS_EFFECTIVE = 'September 8, 2026';

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: 'acceptance',
    heading: 'Agreeing to these terms',
    paragraphs: [
      'By using the CrosseRoads website, its tools, or its consulting services, you agree to these Terms of Use. If you do not agree, please do not use the site or the services.',
    ],
  },
  {
    id: 'services',
    heading: 'What CrosseRoads provides',
    paragraphs: [
      'CrosseRoads offers two things. First, free, self-guided educational tools and articles: a career assessment, a college admissions planner, a first-time college parent roadmap, a wellness companion, and written guides. The tools run in your browser and require no account or payment, and they will remain free.',
      'Second, paid one-on-one college consulting services provided by Dr. Kisa Crosse: the College Kickstart, the CrosseRoads College Plan, the CrosseRoads VIP Experience, the Power Hour, and individual Power Mom College Consulting services. These are described on the Work With Me page and are governed by the "Consulting services" sections below.',
    ],
  },
  {
    id: 'consulting-booking',
    heading: 'Consulting services — booking and payment',
    paragraphs: [
      'Consulting services are requested through the inquiry form on the Work With Me page. Sending an inquiry does not create a booking or an obligation on either side. A booking exists only when Dr. Crosse confirms it in writing and you have paid the invoice.',
      'Prices are listed on the Work With Me page in U.S. dollars and may change; the price confirmed in your invoice is the price that applies to you. Payment is made directly to CrosseRoads by the method stated on the invoice. This website does not process payments and never asks for card details.',
      'The "Founding Family Rate" is offered to a limited number of families at Dr. Crosse’s discretion. Families who book at that rate keep it for the full duration of their package.',
      'A Power Hour fee is credited toward a comprehensive package if that package is booked and paid within 7 days of the Power Hour session.',
    ],
  },
  {
    id: 'consulting-scope',
    heading: 'Consulting services — scope and what is not promised',
    paragraphs: [
      'Each package includes the sessions, reviews, and support listed for it on the Work With Me page at the time of booking. Work beyond that scope is available as an additional service and is quoted separately.',
      'Consulting is guidance. It is not a guarantee. CrosseRoads and Dr. Crosse do not promise admission to any college, any scholarship or financial-aid outcome, any test score, or any particular result. Admissions decisions are made solely by the institutions involved.',
      'Essay guidance means feedback on structure, clarity, and strategy. The student writes their own essays; CrosseRoads does not write, ghost-write, or submit application materials on a student’s behalf, and will not assist with any misrepresentation to a college.',
    ],
  },
  {
    id: 'consulting-responsibilities',
    heading: 'Consulting services — your responsibilities',
    paragraphs: ['To get value from the services, you agree to:'],
    bullets: [
      'provide accurate information about the student’s record, activities, and goals,',
      'attend scheduled sessions, or reschedule with at least 48 hours’ notice,',
      'meet the application, testing, and financial-aid deadlines that apply to your family — CrosseRoads helps you plan for them but cannot meet them for you,',
      'ensure a parent or legal guardian is the contracting party and is present or available for sessions involving a student under 18.',
    ],
  },
  {
    id: 'consulting-cancellation',
    heading: 'Consulting services — rescheduling, cancellation, and refunds',
    paragraphs: [
      'Sessions may be rescheduled without charge with at least 48 hours’ notice. A session missed without notice, or cancelled with less than 48 hours’ notice, counts as used.',
      'A package may be cancelled in writing before the first session for a full refund. After the first session, fees for sessions and reviews already delivered are not refundable; any refund for the remainder of a package is at Dr. Crosse’s discretion and will be confirmed in writing.',
      'Power Hour fees are not refundable once the session has taken place.',
      'Nothing in these terms limits any refund right you have under applicable consumer-protection law.',
    ],
  },
  {
    id: 'confidentiality',
    heading: 'Confidentiality',
    paragraphs: [
      'Information you share for consulting — transcripts, essays, financial-aid details, family circumstances — is used only to provide the services and is not shared with third parties except as needed to deliver them (for example, our email provider) or as required by law. Dr. Crosse may draw on general, anonymized lessons from her work with families; she will not identify you or your student.',
    ],
  },
  {
    id: 'educational-only',
    heading: 'Educational use only — not professional advice',
    paragraphs: [
      'Everything on this site, including consulting, is educational guidance. It is not, and does not replace, professional advice:',
    ],
    bullets: [
      'The career assessment is a self-discovery aid. It does not guarantee employment, income, or admission outcomes.',
      'The college planning tools and consulting summarize publicly available guidance and Dr. Crosse’s experience. Always confirm dates, requirements, and costs with each school and official source.',
      'The wellness tools are not medical advice, diagnosis, or treatment, and using them does not create a doctor–patient relationship. Dr. Crosse is a physician, but CrosseRoads is not a medical practice and no part of the site or the consulting is medical care. Talk with your own clinician before changing exercise, eating, or medications.',
      'Financial-aid worksheets and cost discussions are organizational aids, not financial, tax, or legal advice.',
    ],
  },
  {
    id: 'your-data',
    heading: 'Your tool data stays on your device',
    paragraphs: [
      'What you enter into the free tools is saved only in your browser’s local storage (see our Privacy Policy). You are responsible for your own device and backups; clearing your browser data permanently erases your progress, and we have no copy to restore. The inquiry form is the one exception: what you type there is sent to us so we can reply.',
    ],
  },
  {
    id: 'acceptable-use',
    heading: 'Acceptable use',
    paragraphs: ['When using the site, you agree not to:'],
    bullets: [
      'break the law or infringe the rights of others,',
      'interfere with the operation or security of the site, or send automated, bulk, or abusive submissions through the inquiry form,',
      'scrape, copy at scale, or republish the site’s content or tools as your own,',
      'misrepresent your affiliation with CrosseRoads.',
    ],
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual property',
    paragraphs: [
      'The CrosseRoads name, logo, content, tools, and materials provided during consulting are the property of CrosseRoads and are protected by copyright and trademark law. You may use the site and any consulting materials for your own family’s personal, non-commercial purposes. Third-party names, marks, and linked resources belong to their respective owners.',
    ],
  },
  {
    id: 'third-party',
    heading: 'Third-party links',
    paragraphs: [
      'The site links to official government, education, and health resources, and to ExamPilot, a separate study platform, for your convenience. We do not control those sites and are not responsible for their content, availability, or policies. A link is not an endorsement.',
    ],
  },
  {
    id: 'disclaimer',
    heading: 'Disclaimer of warranties',
    paragraphs: [
      'The site and its free tools are provided "as is" and "as available", without warranties of any kind, express or implied — including accuracy, completeness, fitness for a particular purpose, or uninterrupted availability. Consulting services will be provided with reasonable care and skill; beyond that, no warranty is given as to any outcome.',
    ],
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, CrosseRoads and Dr. Crosse will not be liable for any indirect, incidental, consequential, or special damages arising from your use of the site or the services, including any admissions, scholarship, or financial-aid outcome.',
      'For the free tools, our total liability for any claim is limited to the amount you paid to use them, which is nothing. For consulting services, our total liability for all claims relating to a package or session is limited to the fees you actually paid for that package or session.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to these terms',
    paragraphs: [
      'We may update these terms from time to time. The effective date above reflects the latest version, and continued use of the site after a change means you accept the updated terms. A consulting booking is governed by the terms in effect on the date it was confirmed.',
    ],
  },
  {
    id: 'law',
    heading: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of the United States and of the State of Maryland, without regard to conflict-of-law rules.',
    ],
  },
  {
    id: 'contact',
    heading: 'Contact',
    paragraphs: ['Questions about these terms: hello@crosseroads.com.'],
  },
];
