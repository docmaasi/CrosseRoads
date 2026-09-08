// One search index across everything on the site a family might be looking for.
//
// MiniSearch (MIT) runs entirely in the browser against data already in the
// bundle. Nothing is fetched and nothing is sent anywhere — which is both a
// privacy property worth having on a site used by people in difficulty, and a
// hard requirement: the Content Security Policy allows no third-party script
// and no cross-origin connection, so a hosted search service was never an
// option here.
//
// The index is built lazily on first search, not at module load, so the cost
// is paid by people who use search rather than by everyone who opens the page.

import MiniSearch from 'minisearch';
import { WORKSHEETS } from '../worksheets/data/worksheets';
import { DIRECTORY } from '@/data/resource-directory';
import { ARTICLES } from '../guides/data/articles';

export type SearchKind = 'worksheet' | 'resource' | 'guide';

export interface SearchDoc {
  id: string;
  kind: SearchKind;
  title: string;
  summary: string;
  /** Extra words that should match but are not shown. */
  keywords: string;
  /** Where to send the reader. External for resources. */
  href: string;
  external: boolean;
  /** Small line under the result: category, provider, country. */
  meta: string;
}

export const KIND_LABELS: Record<SearchKind, string> = {
  worksheet: 'Worksheet',
  resource: 'Resource',
  guide: 'Guide',
};

function buildDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];

  for (const sheet of WORKSHEETS) {
    docs.push({
      id: `worksheet:${sheet.slug}`,
      kind: 'worksheet',
      title: sheet.title,
      summary: sheet.purpose,
      keywords: [
        sheet.category,
        sheet.audience,
        sheet.when ?? '',
        ...(sheet.tips ?? []),
        ...sheet.sections.map((section) => section.heading ?? ''),
      ].join(' '),
      href: `/Worksheets/${sheet.slug}`,
      external: false,
      meta: 'Printable worksheet',
    });
  }

  for (const resource of DIRECTORY) {
    docs.push({
      id: `resource:${resource.id}`,
      kind: 'resource',
      title: resource.name,
      summary: resource.description,
      keywords: [
        resource.provider,
        resource.category,
        resource.country,
        resource.caveat ?? '',
        ...(resource.tags ?? []),
      ].join(' '),
      href: resource.url,
      external: true,
      meta: resource.provider,
    });
  }

  for (const article of ARTICLES) {
    docs.push({
      id: `guide:${article.slug}`,
      kind: 'guide',
      title: article.title,
      summary: article.description,
      keywords: article.category ?? '',
      href: `/Guides/${article.slug}`,
      external: false,
      meta: 'Guide',
    });
  }

  return docs;
}

let docs: SearchDoc[] | null = null;
let index: MiniSearch<SearchDoc> | null = null;

function ensureIndex() {
  if (index && docs) return { index, docs };
  docs = buildDocs();
  index = new MiniSearch<SearchDoc>({
    fields: ['title', 'summary', 'keywords'],
    storeFields: ['id'],
    searchOptions: {
      // A parent typing "finantial aid" or "scholarshp" should still find it.
      fuzzy: 0.2,
      prefix: true,
      boost: { title: 3, summary: 1.5 },
    },
  });
  index.addAll(docs);
  return { index, docs };
}

/** How many things are searchable. Safe to call before any search. */
export function searchCorpusSize(): number {
  return WORKSHEETS.length + DIRECTORY.length + ARTICLES.length;
}

export function search(query: string, limit = 40): SearchDoc[] {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];
  const { index: mini, docs: all } = ensureIndex();
  const byId = new Map(all.map((doc) => [doc.id, doc]));
  return mini
    .search(trimmed)
    .slice(0, limit)
    .map((hit) => byId.get(String(hit.id)))
    .filter((doc): doc is SearchDoc => Boolean(doc));
}

/** Results split by kind, in the order they are most likely to be wanted. */
export function groupResults(results: SearchDoc[]): {
  kind: SearchKind;
  label: string;
  items: SearchDoc[];
}[] {
  const order: SearchKind[] = ['worksheet', 'guide', 'resource'];
  return order
    .map((kind) => ({
      kind,
      label: KIND_LABELS[kind],
      items: results.filter((doc) => doc.kind === kind),
    }))
    .filter((group) => group.items.length > 0);
}
