// Data model for CrosseRoads Guides (blog articles). All article
// content derives from Dr. Kisa Crosse's own materials — the Career
// Pathfinder spec and the College Admissions Planner document.

export interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface ArticleSource {
  name: string;
  url: string;
}

/**
 * A question and a direct answer.
 *
 * These exist for the machines as much as the readers. Answer engines and AI
 * summarisers lift a short, self-contained answer to a plainly-worded question
 * far more readily than they lift a paragraph of build-up, and the same block
 * becomes FAQPage structured data. Keep answers under about 60 words and make
 * each one true on its own, out of context — that is the whole trick.
 */
export interface ArticleFaq {
  question: string;
  answer: string;
}

export type ArticleCategory =
  | 'career'
  | 'college'
  | 'money'
  | 'parents'
  | 'wellbeing'
  | 'access';

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  readMinutes: number;
  /** ISO date the article was first published on the site. */
  datePublished: string;
  /**
   * The answer to the article's own question, in one or two sentences, printed
   * before anything else. Readers in a hurry get what they came for; so do the
   * engines that quote a single line.
   */
  keyTakeaway?: string;
  /** Search terms this piece should honestly rank for. Not stuffing — labels. */
  keywords?: string[];
  sections: ArticleSection[];
  /** Questions worth answering directly, for readers and for answer engines. */
  faq?: ArticleFaq[];
  /** Internal tool the article points readers to. */
  cta: { label: string; text: string; href: string };
  /** Official external sources cited at the end (vetted domains only). */
  sources: ArticleSource[];
}

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  career: 'Career',
  college: 'College',
  money: 'Paying for it',
  parents: 'For parents',
  wellbeing: 'Wellbeing',
  access: 'Access',
};
