// Official, free wellness resources — government health sites and the
// World Health Organization only.

export interface WellnessResource {
  name: string;
  url: string;
  description: string;
}

export const WELLNESS_RESOURCES: WellnessResource[] = [
  {
    name: 'Physical Activity Basics (CDC)',
    url: 'https://www.cdc.gov/physical-activity-basics/about/index.html',
    description: 'The official activity guidelines for adults, in plain language',
  },
  {
    name: 'MyPlate (USDA)',
    url: 'https://www.myplate.gov/',
    description: 'Free, practical healthy-eating guidance — no fad diets',
  },
  {
    name: "Office on Women's Health",
    url: 'https://womenshealth.gov/',
    description: "The U.S. government's hub for women's health information",
  },
  {
    name: 'Getting active for health (OWH)',
    url: 'https://womenshealth.gov/getting-active/how-be-active-health',
    description: 'How to be active for health, from the Office on Women’s Health',
  },
  {
    name: 'National Institute on Aging (NIH)',
    url: 'https://www.nia.nih.gov/',
    description: 'Evidence-based guidance on healthy aging, menopause, and more',
  },
  {
    name: 'MedlinePlus (NIH)',
    url: 'https://medlineplus.gov/',
    description: 'Trusted, ad-free health information on any condition',
  },
  {
    name: 'Physical activity (WHO)',
    url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
    description: "The World Health Organization's global activity guidance",
  },
  {
    name: 'Dietary Guidelines for Americans',
    url: 'https://www.dietaryguidelines.gov/',
    description: 'The official U.S. nutrition guidance behind MyPlate',
  },
];
