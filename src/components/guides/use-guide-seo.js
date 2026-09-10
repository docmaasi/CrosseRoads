import { useEffect } from 'react';
import { BRAND } from '../career-pathfinder/branding';
import {
  applySeoHead,
  injectJsonLd,
  removeJsonLd,
  resetSeoHead,
} from '../career-pathfinder/seo-head';
import { ARTICLES } from './data/articles';
import { guideMeta, guidesIndexMeta } from '@/data/page-meta';

const JSONLD_ID = 'guides-jsonld';
const FAQ_JSONLD_ID = 'guides-faq-jsonld';

const { title: INDEX_TITLE, description: INDEX_DESC } = guidesIndexMeta(ARTICLES.length);

/**
 * Author block, repeated on every article.
 *
 * Named consistently and with credentials attached because that is what search
 * and answer engines use to decide whether a health-adjacent or money-adjacent
 * claim came from someone qualified to make it. It is also simply true.
 */
const AUTHOR = {
  '@type': 'Person',
  name: 'Dr. Kisa Crosse',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'M.D.',
  jobTitle: 'Family Physician and Founder, CrosseRoads',
  description:
    'Board-certified family physician in Maryland, educator, mother, and founder of CrosseRoads.',
  knowsAbout: [
    'college admissions',
    'financial aid',
    'career discovery',
    'adolescent health',
    'parent wellbeing',
  ],
};

const PUBLISHER = {
  '@type': 'Organization',
  name: BRAND.platformName,
  url: 'https://crosseroads.com',
};

function articleJsonLd(article, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    articleSection: article.category,
    keywords: (article.keywords ?? []).join(', '),
    wordCount: article.sections
      .flatMap((section) => [...(section.paragraphs ?? []), ...(section.list ?? [])])
      .join(' ')
      .split(/\s+/).length,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    author: AUTHOR,
    publisher: PUBLISHER,
  };
}

/**
 * FAQPage markup from the article's own question-and-answer block.
 *
 * This is the piece answer engines lift most readily: a plainly-worded question
 * with a short answer that is true on its own, out of context.
 */
function faqJsonLd(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

function indexJsonLd(canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: INDEX_TITLE,
    description: INDEX_DESC,
    url: canonical,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    author: AUTHOR,
    publisher: PUBLISHER,
    hasPart: ARTICLES.slice(0, 30).map((article) => ({
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.datePublished,
      url: `${canonical}/${article.slug}`,
    })),
  };
}

/** Head tags + JSON-LD for the guides index (no article) or an article. */
export function useGuideSeo(article) {
  useEffect(() => {
    const path = article ? `/Guides/${article.slug}` : '/Guides';
    const canonical = `${window.location.origin}${path}`;

    applySeoHead({
      ...(article ? guideMeta(article) : { title: INDEX_TITLE, description: INDEX_DESC }),
      path,
      siteName: BRAND.platformName,
    });

    injectJsonLd(
      JSONLD_ID,
      article ? articleJsonLd(article, canonical) : indexJsonLd(canonical),
    );

    if (article?.faq?.length) {
      injectJsonLd(FAQ_JSONLD_ID, faqJsonLd(article));
    } else {
      removeJsonLd(FAQ_JSONLD_ID);
    }

    return () => {
      resetSeoHead();
      removeJsonLd(JSONLD_ID);
      removeJsonLd(FAQ_JSONLD_ID);
    };
  }, [article]);
}
