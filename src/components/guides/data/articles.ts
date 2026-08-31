import type { GuideArticle } from './types';
import { articleCareerFit } from './article-career-fit';
import { articleEarlyAction } from './article-early-action';
import { articleFinancialAid } from './article-financial-aid';
import { articleThirtyDay } from './article-thirty-day';
import { articleJuniorYear } from './article-junior-year';

export const ARTICLES: GuideArticle[] = [
  articleCareerFit,
  articleThirtyDay,
  articleJuniorYear,
  articleEarlyAction,
  articleFinancialAid,
];

export function findArticle(slug: string | undefined): GuideArticle | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}
