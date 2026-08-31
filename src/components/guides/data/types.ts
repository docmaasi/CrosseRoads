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

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: 'career' | 'college';
  readMinutes: number;
  /** ISO date the article was first published on the site. */
  datePublished: string;
  sections: ArticleSection[];
  /** Internal tool the article points readers to. */
  cta: { label: string; text: string; href: string };
  /** Official external sources cited at the end (vetted domains only). */
  sources: ArticleSource[];
}
