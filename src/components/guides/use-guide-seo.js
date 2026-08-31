import { useEffect } from 'react';
import { BRAND } from '../career-pathfinder/branding';
import {
  applySeoHead,
  injectJsonLd,
  removeJsonLd,
  resetSeoHead,
} from '../career-pathfinder/seo-head';

const JSONLD_ID = 'guides-jsonld';

const INDEX_TITLE = `Career & College Guides — ${BRAND.platformName}`;
const INDEX_DESC =
  'Free, practical guides from Dr. Kisa Crosse on choosing a career that fits, ' +
  'college admissions timelines, Early Action strategy, and financial aid.';

function articleJsonLd(article, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    mainEntityOfPage: canonical,
    author: { '@type': 'Person', name: 'Dr. Kisa Crosse' },
    publisher: { '@type': 'Organization', name: BRAND.platformName },
  };
}

function indexJsonLd(canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: INDEX_TITLE,
    description: INDEX_DESC,
    url: canonical,
    publisher: { '@type': 'Organization', name: BRAND.platformName },
  };
}

/** Head tags + JSON-LD for the guides index (no article) or an article. */
export function useGuideSeo(article) {
  useEffect(() => {
    const path = article ? `/Guides/${article.slug}` : '/Guides';
    const canonical = `${window.location.origin}${path}`;
    applySeoHead({
      title: article ? `${article.title} — ${BRAND.platformName}` : INDEX_TITLE,
      description: article ? article.description : INDEX_DESC,
      path,
      siteName: BRAND.platformName,
    });
    injectJsonLd(
      JSONLD_ID,
      article ? articleJsonLd(article, canonical) : indexJsonLd(canonical),
    );

    return () => {
      resetSeoHead();
      removeJsonLd(JSONLD_ID);
    };
  }, [article]);
}
