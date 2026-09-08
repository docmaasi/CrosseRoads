# Source photographs

The files in this folder are the originals. `npm run images` turns them into the
responsive WebP and AVIF variants in `public/images/`, which are what the site
actually serves. Replace a file here, re-run that command, commit both.

Everything must stay self-hosted: the site's CSP sets `img-src 'self' data: blob:`,
so a CDN URL or a hotlink renders nothing at all.

## How these were made

Generated with FLUX 2 Max via Magica on 2026-09-07. Every prompt ends with the
same suffix, which is what keeps text out of the frame and the look photographic
rather than illustrative:

> Photorealistic documentary photograph, warm natural light, rich opaque colour,
> shallow depth of field, 50mm lens, candid and unposed. No text, no lettering,
> no signage, no watermark, no logo, no brand marks.

| File | Role | Prompt (before the suffix) |
|---|---|---|
| `hero-career.jpg` | CareerPathfinder hero | A Black single mother in her mid-forties sits on the front steps of a modest suburban home beside her sixteen-year-old daughter. They lean over an open spiral notebook together, mid-conversation, the daughter smiling. Late-afternoon golden sunlight. |
| `mission-band.jpg` | CareerPathfinder mission band | A Latina mother in her forties walks along a tree-lined neighbourhood pavement with her teenage son and younger daughter, all three talking, seen from a respectful distance. Soft golden-hour backlight through the trees, autumn leaves. |
| `hero-college.jpg` | CollegePlanner hero | A family of three around a kitchen table at night: a South Asian father and his seventeen-year-old son study an open laptop while the mother writes on a printed page beside them. Papers and a mug on the table. Warm pool of lamplight, dark blue evening window behind. |
| `hero-parents.jpg` | ParentRoadmap hero | A single father in his late forties and his teenage daughter sit together on a wooden porch swing, talking quietly, both holding mugs. Early morning light, soft mist in the garden behind them. |
| `hero-wellness.jpg` | Wellness hero | A mixed-race woman in her mid-forties with warm brown skin and loosely curled dark hair sits alone in an armchair by a large window, an open journal on her lap and a pen in hand, looking out thoughtfully. A mug rests on the windowsill. Calm soft morning light, muted warm interior, houseplants. |
| `hero-guides.jpg` | Guides header | A college student wearing a backpack walks away from the camera along a tree-lined campus path towards old brick buildings. Autumn, low sun flaring through the branches, other students blurred in the distance. |
| `acceptance-letter.jpg` | CollegePlanner mid-page | A mother in her forties and her eighteen-year-old daughter sit close together on a living-room sofa, both looking down at an opened white envelope and a single sheet of paper the daughter is holding. The mother's hand is on her daughter's shoulder, both faces lit with disbelief and joy. Warm afternoon light through a window. |
| `graduation.jpg` | ParentRoadmap mid-page | A young graduate in a dark cap and gown embraces their mother tightly outdoors after a ceremony, both smiling, eyes closed. Other families blurred far behind. Bright warm late-morning sunlight, green trees. |

## `dr-crosse.jpg` — the one real photograph

Not generated, and never to be: a synthetic face presented as a real person is a
lie about a real doctor.

This is Dr. Crosse's own professional headshot, supplied by her. The source was a
400x400 LinkedIn export carrying the green #OPENTOWORK frame. Processing was
deliberately conservative:

1. Cropped to the largest region containing no part of the green frame, found by
   scanning for green pixels rather than by eye — 295x295 from the upper right.
2. Upscaled 2x with Lanczos, then a restrained unsharp mask and a slight lift in
   contrast and saturation.

No AI upscaler and no face enhancement. Those reconstruct facial detail, and on a
real person's professional headshot that means quietly changing what she looks
like. Sharpening is honest; invention is not.

The embroidery on her coat reading "Kisa S. Crosse, M.D. — Family Medicine" is
part of the photograph and stays. Only the LinkedIn frame was removed.

To replace it: drop a new `dr-crosse.jpg` here and run `npm run images`. Prefer a
higher-resolution original if she has one — 590px is the ceiling of what this
source honestly supports.

## Adding a photograph

1. Put the original in this folder, roughly 1600x900 for a hero or 1200x800 for
   a supporting image.
2. Add its name to `ROLES` in `scripts/build-images.mjs`.
3. `npm run images` — it enforces the budgets (hero 220 KB, supporting 120 KB)
   and fails rather than shipping something heavier.
4. Use it with `<PhotoBanner name="..." alt="..." />` and write alt text that
   describes the people and what they are doing.
