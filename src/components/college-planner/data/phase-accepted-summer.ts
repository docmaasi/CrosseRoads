import type { PhaseGroup } from './types';

// "Accepted — now what?" June through August: preparing for college life.
export const acceptedSummerGroups: PhaseGroup[] = [
  {
    id: 'ac-transition',
    title: 'June–August — Graduation & transition',
    items: [
      { id: 'ac-celebrate', text: "Celebrate graduation and your student's accomplishments." },
      {
        id: 'ac-orient-schedule',
        text: 'Review the orientation schedule and attend available parent sessions.',
      },
      {
        id: 'ac-movein',
        text: 'Confirm housing assignment, roommate information, and move-in date.',
      },
      {
        id: 'ac-tuition',
        text: 'Review tuition bills, payment-plan options, and payment deadlines.',
      },
      {
        id: 'ac-expectations',
        text: 'Discuss family expectations for academics, communication, safety, finances, and visits home.',
      },
    ],
  },
  {
    id: 'ac-dorm',
    title: 'Dorm-room shopping',
    intro:
      "Build the supply list from the college's housing guidelines and the assigned room's dimensions.",
    tip: "Before purchasing appliances, furniture, or wall-hanging products, review the college's prohibited-items list.",
    items: [
      { id: 'ac-bedding', text: 'Bedding and mattress protector.' },
      { id: 'ac-towels', text: 'Towels and personal-care items.' },
      { id: 'ac-laundry', text: 'Laundry supplies and storage.' },
      { id: 'ac-lamp', text: 'Desk lamp and approved electrical accessories.' },
      { id: 'ac-clothing', text: 'Weather-appropriate clothing.' },
      { id: 'ac-cleaning', text: 'Basic cleaning supplies.' },
      {
        id: 'ac-firstaid',
        text: 'First-aid kit and permitted over-the-counter medications.',
      },
      { id: 'ac-documents', text: 'Important documents and insurance cards.' },
    ],
  },
  {
    id: 'ac-tech',
    title: 'Technology & school supplies',
    items: [
      {
        id: 'ac-laptop',
        text: "Purchase a laptop that meets the requirements for the student's major.",
        detail:
          'Check whether Windows or Mac is recommended, confirm compatibility with required software and testing platforms, review recommended specs (memory, storage, processing, graphics), and ask about student discounts.',
      },
      {
        id: 'ac-printer',
        text: 'Decide whether a personal printer is necessary — many colleges provide campus printing.',
      },
      {
        id: 'ac-accessories',
        text: 'Purchase chargers, headphones, a surge protector (if permitted), external storage, and basic school supplies.',
      },
      {
        id: 'ac-cell',
        text: "Confirm the student's cell-phone plan provides adequate coverage on campus.",
      },
    ],
  },
  {
    id: 'ac-banking',
    title: 'Banking & monthly budgeting',
    items: [
      {
        id: 'ac-checking',
        text: 'Open a student checking account with convenient ATM access and minimal fees.',
      },
      { id: 'ac-savings', text: 'Consider a savings account for emergencies.' },
      {
        id: 'ac-credit',
        text: 'Decide whether the student should have a low-limit credit card or authorized-user card for emergencies and credit-building.',
      },
      {
        id: 'ac-budget',
        text: 'Establish a realistic monthly budget — and agree on who pays for each category.',
        detail:
          'Plan for food delivery and takeout, rideshare and transportation, entertainment, personal-care items, laundry, gas and parking if applicable, books and supplies, and emergency expenses — and how frequently money will be transferred.',
      },
    ],
  },
  {
    id: 'ac-medical',
    title: 'Medical preparation',
    items: [
      { id: 'ac-exams', text: 'Schedule dental and vision exams before school begins.' },
      { id: 'ac-physical', text: 'Complete an annual physical if needed.' },
      {
        id: 'ac-cards',
        text: 'Obtain copies of health-insurance and prescription cards.',
      },
      {
        id: 'ac-meds',
        text: 'Refill chronic medications and plan how prescriptions will be filled while away.',
      },
      {
        id: 'ac-pharmacy',
        text: 'Identify a nearby pharmacy and learn what the campus health center provides.',
      },
      {
        id: 'ac-medlist',
        text: 'Prepare a list of medical conditions, allergies, medications, and emergency contacts.',
      },
      {
        id: 'ac-specialists',
        text: 'Arrange continued care with specialists or mental-health providers, if applicable.',
      },
      {
        id: 'ac-when',
        text: 'Discuss when to use the campus health center, urgent care, or emergency services.',
      },
    ],
  },
  {
    id: 'ac-legal',
    title: 'Important documents for students 18+',
    intro:
      'Once a student turns 18, parents may no longer automatically have access to educational, medical, or financial information — even if the parent pays tuition or provides health insurance. Families may wish to discuss these with a qualified attorney.',
    tip: "These documents do not remove the student's independence — they allow a trusted parent or designated adult to assist during an emergency, subject to each document's terms and applicable law.",
    items: [
      {
        id: 'ac-ferpa',
        text: 'FERPA authorization for designated access to educational or financial information.',
      },
      {
        id: 'ac-hipaa',
        text: 'HIPAA authorization allowing healthcare providers to share permitted medical information.',
      },
      { id: 'ac-proxy', text: 'Healthcare proxy or medical power of attorney.' },
      { id: 'ac-poa', text: 'Durable financial power of attorney.' },
      {
        id: 'ac-copies',
        text: "Securely stored copies of the student's ID, insurance information, and important legal documents.",
      },
    ],
  },
];
