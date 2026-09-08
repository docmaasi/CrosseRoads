/**
 * A photograph rendered as a brand-tinted banner.
 *
 * Every image is self-hosted under public/images — the site's Content Security
 * Policy sets img-src to 'self' data: blob:, so a CDN or a hotlink renders
 * nothing at all. scripts/build-images.mjs produces the AVIF and WebP variants
 * from photos/.
 *
 * The overlay is a purple-to-teal gradient at ~28% so text placed on top stays
 * legible while the photograph still reads as a photograph rather than a wash.
 * Width and height are always explicit: without them the page reflows as each
 * photo arrives, which on a phone means the button someone is reaching for
 * moves out from under their thumb.
 */

const RATIOS = {
  hero: { width: 1600, height: 896, widths: [1600, 800] },
  band: { width: 1600, height: 688, widths: [1600, 800] },
  support: { width: 1200, height: 800, widths: [1200, 600] },
  portrait: { width: 560, height: 560, widths: [560, 280] },
};

export function PhotoBanner({
  name,
  alt,
  shape = 'hero',
  eager = false,
  rounded = 'rounded-3xl',
  className = '',
  overlayClassName = 'from-[#4a2373]/40 via-[#4a2373]/20 to-[#17808d]/35',
  sizes = '(min-width: 768px) 768px, 100vw',
  children = null,
}) {
  const { width, height, widths } = RATIOS[shape];
  const srcSet = (ext) =>
    widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(', ');

  return (
    <figure className={`relative overflow-hidden ${rounded} shadow-sm ${className}`}>
      <picture>
        <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
        <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
        <img
          src={`/images/${name}-${widths[0]}.webp`}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding={eager ? 'sync' : 'async'}
          className="h-full w-full object-cover"
        />
      </picture>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${overlayClassName}`}
      />

      {children && (
        <figcaption className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          {children}
        </figcaption>
      )}
    </figure>
  );
}
