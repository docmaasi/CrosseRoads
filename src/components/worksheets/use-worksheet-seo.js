import { useEffect } from 'react';
import { BRAND } from '../career-pathfinder/branding';
import {
  applySeoHead,
  injectJsonLd,
  removeJsonLd,
  resetSeoHead,
} from '../career-pathfinder/seo-head';
import { LIBRARY_LICENCE, WORKSHEETS } from './data/worksheets';

const JSONLD_ID = 'worksheets-jsonld';

const INDEX_TITLE = `Free College Planning Worksheets — ${BRAND.platformName}`;
const INDEX_DESC =
  `${WORKSHEETS.length} free printable worksheets for families going from high school to ` +
  'college: college list trackers, financial aid comparison charts, deadline ' +
  'checklists, essay brainstorms and parent conversation guides. Openly licensed.';

/** Marked up as a dataset so the library is discoverable as open educational data. */
function indexJsonLd(canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'CrosseRoads Worksheet Library',
    description: INDEX_DESC,
    url: canonical,
    license: LIBRARY_LICENCE.url,
    isAccessibleForFree: true,
    educationalUse: 'assignment',
    creator: { '@type': 'Person', name: 'Dr. Kisa Crosse' },
    publisher: { '@type': 'Organization', name: BRAND.platformName },
  };
}

function sheetJsonLd(worksheet, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: worksheet.title,
    description: worksheet.purpose,
    url: canonical,
    license: LIBRARY_LICENCE.url,
    isAccessibleForFree: true,
    learningResourceType: 'worksheet',
    author: { '@type': 'Person', name: 'Dr. Kisa Crosse' },
    publisher: { '@type': 'Organization', name: BRAND.platformName },
  };
}

/** Head tags + JSON-LD for the worksheet index, or one worksheet. */
export function useWorksheetSeo(worksheet) {
  useEffect(() => {
    const path = worksheet ? `/Worksheets/${worksheet.slug}` : '/Worksheets';
    const canonical = `${window.location.origin}${path}`;
    applySeoHead({
      title: worksheet
        ? `${worksheet.title} — free printable worksheet — ${BRAND.platformName}`
        : INDEX_TITLE,
      description: worksheet ? worksheet.purpose : INDEX_DESC,
      path,
      siteName: BRAND.platformName,
    });
    injectJsonLd(
      JSONLD_ID,
      worksheet ? sheetJsonLd(worksheet, canonical) : indexJsonLd(canonical),
    );

    return () => {
      resetSeoHead();
      removeJsonLd(JSONLD_ID);
    };
  }, [worksheet]);
}
