import { useEffect } from 'react';
import { BRAND } from '../career-pathfinder/branding';
import {
  applySeoHead,
  injectJsonLd,
  removeJsonLd,
  resetSeoHead,
} from '../career-pathfinder/seo-head';
import { LIBRARY_LICENCE, WORKSHEETS } from './data/worksheets';
import { worksheetMeta, worksheetsIndexMeta } from '@/data/page-meta';

const JSONLD_ID = 'worksheets-jsonld';

const { title: INDEX_TITLE, description: INDEX_DESC } = worksheetsIndexMeta(
  WORKSHEETS.length,
);

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
      ...(worksheet
        ? worksheetMeta(worksheet)
        : { title: INDEX_TITLE, description: INDEX_DESC }),
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
