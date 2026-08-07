# California Me — Website Project Brief

## Overview

California Me is evolving from a music artist page into a coastal lifestyle brand.
The music (indie pop, coastal nostalgia) remains part of the world, but the site's
primary job is to sell apparel and lifestyle products built around the brand's
recurring mantras: "ride the wave or let it go," "no rush, just us," "same ocean,
different flow." Think small West Coast lifestyle label that happens to make music —
not a band merch table.

Reference: YouTube channel @californiameproject. Top-performing content is short,
mood-driven captions and wave/flow metaphors — not song titles. The site's tone
should follow that: unpolished, journal-like, nostalgic, not overly "produced"
marketing copy.

## Tech Stack

- Next.js (App Router) + Tailwind CSS
- Deploy path: GitHub (account `dcassese1-ship-it`) → Vercel → custom domain
- Vercel DNS: A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`
- Commerce: start with Printful/Printify + Shopify Buy Button or Snipcart
  embedded directly in Next.js pages — no separate storefront, no inventory risk
  at launch

## Design Tokens

**Colors**
- Dusk Navy
- Burnt Rust
- Coral Sunset
- Golden Peach
- Faded Clay
- Ocean Teal
- Paper Cream

**Typography**
- Headlines: Fraunces
- Body / UI: Space Grotesk

**Motif**
- Postcard / road-trip stamp mark
- "RTE 1" route-shield detail
- Wave line
- Perforated border (postcard-edge effect)

## Sitemap

1. **Home**
   - Hero: postcard/stamp mark, rotating taglines pulled from top-performing
     video captions ("ride the wave or let it go," "no rush just us")
   - Featured drop / capsule collection
   - Latest Short embed
   - Email capture

2. **Shop**
   - Product grid, filterable by capsule (e.g. Golden Hour, Hidden Angels)
   - Each product ties back to a lyric line or video moment

3. **Product Detail Page**
   - Lyric line as headline (not just product name)
   - Mood/lifestyle photography over plain product shots
   - Size/price/variant selector
   - "As seen in [video title]" — links back to the originating YouTube Short

4. **The Story** (replaces a standard "About" page)
   - California Me mythology / philosophy
   - Coastal nostalgia world-building, not a bio

5. **Journal**
   - Short posts pairing a lyric/postcard visual with a photo
   - Doubles as SEO content and a content-to-commerce bridge

6. **Music**
   - Embedded EP/singles
   - Streaming links
   - Keeps the artist thread alive without being the homepage focus

7. **Contact / Wholesale**
   - For markets, pop-ups, press inquiries

## Component List (scaffold first)

- `Hero` — postcard-style, rotating taglines
- `ProductCard` / `ProductGrid`
- `CapsuleSection` — groups products by collection
- `JournalEntry` card
- `EmailCapture`
- `Nav` + `Footer` — stamp-mark logo, perforated-border detail

## Content Guidance

- Product copy should reuse actual proven caption lines from the YouTube
  Shorts, not new marketing copy — these lines are already tested against
  real audience response.
- Keep photography and copy tone unpolished/journal-like rather than
  glossy e-commerce.
- Two emerging sub-lines to keep in mind for future capsule structure:
  - **Golden Hour** — daytime, warm palette (Coral Sunset, Golden Peach)
  - **Hidden Angels** — moodier, "after dark" LA content (Dusk Navy, Ocean Teal)

## Out of Scope for v1

- Full custom checkout / payment processing (use Buy Button or Snipcart)
- CMS integration (journal entries can be static/MDX to start)
- Inventory management beyond print-on-demand
