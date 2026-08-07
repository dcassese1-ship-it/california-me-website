export type Capsule = "Golden Hour" | "Hidden Angels";

export type Product = {
  slug: string;
  name: string;
  lyricLine: string;
  price: number;
  capsule: Capsule;
  sourceVideo?: string;
  trackLink?: { label: string; href: string };
  image: string;
  imageFit?: "contain" | "cover";
  buyUrl: string;
};

export const taglines = [
  "ride the wave or let it go",
  "no rush, just us",
  "same ocean, different flow",
];

export const products: Product[] = [
  {
    slug: "longing-california-tee",
    name: "Longing California Tee",
    lyricLine: "top down, radio low, still chasing that feeling.",
    price: 38,
    capsule: "Golden Hour",
    trackLink: { label: "Longing California", href: "/music#longing-california" },
    image: "/Image/products/longing-california-tee-shirt.png",
    imageFit: "cover",
    buyUrl:
      "https://californiame.printful.me/product/unisex-classic-tee-longing-california",
  },
  {
    slug: "same-ocean-different-flow-tee",
    name: "Same Ocean Different Flow Tee",
    lyricLine: "same ocean, different flow",
    price: 38,
    capsule: "Golden Hour",
    trackLink: {
      label: "Same Ocean, Different Flow",
      href: "/music#same-ocean-different-flow",
    },
    image: "/Image/products/same-ocean-different-flow-tee-shirt.png",
    imageFit: "cover",
    buyUrl:
      "https://californiame.printful.me/product/unisex-classic-tee-same-ocean-different-flow",
  },
  {
    slug: "california-me-bucket-hat",
    name: "California Me Bucket Hat",
    lyricLine: "ride the wave or let it go",
    price: 28,
    capsule: "Golden Hour",
    image: "/Image/products/california-me-bucket-hat-art.png",
    imageFit: "cover",
    buyUrl: "https://californiame.printful.me/product/organic-bucket-hat",
  },
];

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  songLinks?: { label: string; href: string }[];
};

export function formatJournalDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const journalPosts: JournalPost[] = [
  {
    slug: "longing-california",
    title: "longing california",
    excerpt: "top down, radio low, still chasing that feeling.",
    date: "2026-07-28",
    image: "/Image/journal/journal-03.png",
    songLinks: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/0griEc8qSSxlgbunWn7jEd?si=KqmDjYqxSKW3UU8y2GkLCw",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/longing-california-single/1893024336",
      },
    ],
  },
  {
    slug: "same-ocean-different-flow",
    title: "same ocean, different flow",
    excerpt:
      "some days the tide brings the same water back around. postcard from the PCH, golden hour.",
    date: "2026-06-14",
    image: "/Image/journal/journal-02.png",
  },
  {
    slug: "no-rush-just-us",
    title: "no rush, just us",
    excerpt:
      "no plans past sundown. just the two of us and whatever the coast wants to give us tonight.",
    date: "2026-05-02",
    image: "/Image/journal/journal-01-pch-sunset.png",
  },
];
