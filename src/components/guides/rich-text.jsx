import { Link } from 'react-router-dom';
import { splitInlineLinks } from './data/inline-links';

const LINK_CLASS =
  'font-medium text-[#4a2373] underline decoration-[#17808d]/40 underline-offset-2 hover:text-[#17808d]';

/**
 * Article text with optional inline links, written as [label](href).
 *
 * Paths starting with "/" stay inside the app through the router; anything else
 * opens in a new tab, the same way the sources list at the foot of a guide does.
 */
export function RichText({ text }) {
  return splitInlineLinks(text).map((part, index) => {
    if (typeof part === 'string') return part;
    const key = `${index}-${part.href}`;
    return part.href.startsWith('/') ? (
      <Link key={key} to={part.href} className={LINK_CLASS}>
        {part.label}
      </Link>
    ) : (
      <a key={key} href={part.href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
        {part.label}
      </a>
    );
  });
}
