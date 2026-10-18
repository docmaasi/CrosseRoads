// Inline links inside guide text, written as [label](href).
//
// Kept to that one Markdown shape on purpose: it reads naturally in the data
// files, and anything that only ever needs plain text (word counts, the search
// index) can strip it back to the label with one regex.

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export interface InlineLink {
  label: string;
  href: string;
}

/** Splits text into plain strings and links, in reading order. */
export function splitInlineLinks(text: string): Array<string | InlineLink> {
  const parts: Array<string | InlineLink> = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push({ label: match[1], href: match[2] });
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** The text a reader actually sees, with link syntax removed. */
export function stripInlineLinks(text: string): string {
  return text.replace(LINK, '$1');
}

/** Every link target in a piece of text. */
export function inlineLinkHrefs(text: string): string[] {
  return [...text.matchAll(LINK)].map((match) => match[2]);
}
