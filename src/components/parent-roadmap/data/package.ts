// The First-Time College Parent Roadmap — transcribed from Dr. Kisa
// Crosse's planning document. The free tools live here; the priced
// consulting packages and the à la carte service menu live in
// src/components/packages/data/packages.ts and on /WorkWithMe.

export interface PackageItem {
  title: string;
  description: string;
  /** Internal link when the item is live software; null = delivered by Dr. Crosse. */
  href: string | null;
}

export const PACKAGE_ITEMS: PackageItem[] = [
  {
    title: 'The College Admissions Planner',
    description:
      'Every milestone from junior year through move-in day, as an interactive checklist your family works through together.',
    href: '/CollegePlanner',
  },
  {
    title: 'Financial-aid award comparison worksheet',
    description:
      'Compare offers side by side: total cost of attendance, gift aid, and the real net price at each college — right on this page.',
    href: '#compare',
  },
  {
    title: 'Editable college-list tracker',
    description:
      'Your Likely / Target / Reach list with deadline types and application status, saved as you go — right on this page.',
    href: '#college-list',
  },
  {
    title: 'Accepted-student checklist',
    description:
      'Everything between the acceptance letter and move-in day: deposits, housing, health forms, budgeting, and the documents families forget.',
    href: '/CollegePlanner#accepted',
  },
  {
    title: 'One parent consultation',
    description:
      'A private 60–90 minute Parent College Planning Consultation with Dr. Crosse to map your family’s plan.',
    href: null,
  },
  {
    title: 'Monthly deadline reminders',
    description:
      'Month-by-month senior-year reminders so nothing slips — the early bird gets the admission offers, and the money.',
    href: null,
  },
];

export const ROADMAP_FAQ = [
  {
    question: 'What is the First-Time College Parent Roadmap?',
    answer:
      'A guided package for families going through college admissions for the ' +
      'first time. It combines the interactive College Admissions Planner, an ' +
      'editable college-list tracker, a financial-aid award comparison worksheet, ' +
      'the accepted-student checklist, monthly deadline reminders, and a private ' +
      'parent consultation with Dr. Kisa Crosse — guidance for the entire journey, ' +
      'from junior year through college move-in, not just essays and applications.',
  },
  {
    question: 'How is this different from an essay-coaching service?',
    answer:
      'Most services focus only on essays and applications. This roadmap guides ' +
      'the parent through the entire journey: junior-year foundations, testing ' +
      'strategy, the college list, month-by-month senior-year deadlines, financial ' +
      'aid and scholarships, comparing offers, and everything between acceptance ' +
      'and move-in day.',
  },
  {
    question: 'How does the award comparison worksheet work?',
    answer:
      'Enter each college’s cost of attendance (tuition, housing, books, travel, ' +
      'personal expenses) and the aid offered. The worksheet separates gift aid — ' +
      'grants and scholarships you never repay — from loans, and shows the real ' +
      'net price at each school so your family can compare offers on equal terms. ' +
      'Numbers stay on your device.',
  },
  {
    question: 'How do I book the consultation or another service?',
    answer:
      'The tools on this page are free to use. Consultations, workshops, and ' +
      'full college-planning packages with Dr. Crosse are described on the Work ' +
      'With Me page, where you can send an inquiry and she will reply personally ' +
      'to schedule a time.',
  },
];
