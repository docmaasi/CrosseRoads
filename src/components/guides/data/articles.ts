import type { ArticleCategory, GuideArticle } from './types';
import { articleCareerFit } from './article-career-fit';
import { articleEarlyAction } from './article-early-action';
import { articleFinancialAid } from './article-financial-aid';
import { articleThirtyDay } from './article-thirty-day';
import { articleJuniorYear } from './article-junior-year';
import { COLLEGE_ARTICLES } from './articles-college';
import { MONEY_ARTICLES } from './articles-money';
import { CAREER_ARTICLES } from './articles-career';
import { PARENT_ARTICLES } from './articles-parents';
import { WELLBEING_ARTICLES } from './articles-wellbeing';
import { ACCESS_ARTICLES } from './articles-access';

export * from './types';

const ALL = [
  articleCareerFit,
  articleThirtyDay,
  articleJuniorYear,
  articleEarlyAction,
  articleFinancialAid,
  ...COLLEGE_ARTICLES,
  ...MONEY_ARTICLES,
  ...CAREER_ARTICLES,
  ...PARENT_ARTICLES,
  ...WELLBEING_ARTICLES,
  ...ACCESS_ARTICLES,
];

/** Newest first — a guides index that opens on last February reads as abandoned. */
export const ARTICLES: GuideArticle[] = [...ALL].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

export function findArticle(slug: string | undefined): GuideArticle | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

/** Display order for the index: the questions families ask soonest, first. */
export const ARTICLE_CATEGORY_ORDER: ArticleCategory[] = [
  'college',
  'money',
  'career',
  'parents',
  'wellbeing',
  'access',
];

export function articlesByCategory(
  category: ArticleCategory | 'all',
): GuideArticle[] {
  if (category === 'all') return ARTICLES;
  return ARTICLES.filter((article) => article.category === category);
}

/** Up to `limit` other articles, preferring the same category. */
export function relatedArticles(article: GuideArticle, limit = 3): GuideArticle[] {
  const others = ARTICLES.filter((candidate) => candidate.slug !== article.slug);
  const sameCategory = others.filter(
    (candidate) => candidate.category === article.category,
  );
  const rest = others.filter((candidate) => candidate.category !== article.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
