export type Capsule = "Golden Hour" | "Hidden Angels";

export type Product = {
  slug: string;
  name: string;
  lyricLine: string;
  price: number;
  capsule: Capsule;
  sourceVideo: string;
  image: string;
};

export const taglines = [
  "ride the wave or let it go",
  "no rush, just us",
  "same ocean, different flow",
];

export const products: Product[] = [
  {
    slug: "ride-the-wave-tee",
    name: "Ride The Wave Tee",
    lyricLine: "ride the wave or let it go",
    price: 38,
    capsule: "Golden Hour",
    sourceVideo: "same ocean, different flow (short)",
    image: "/placeholder/product-1.jpg",
  },
  {
    slug: "no-rush-just-us-hoodie",
    name: "No Rush Just Us Hoodie",
    lyricLine: "no rush, just us",
    price: 68,
    capsule: "Hidden Angels",
    sourceVideo: "no rush just us (short)",
    image: "/placeholder/product-2.jpg",
  },
  {
    slug: "same-ocean-cap",
    name: "Same Ocean Cap",
    lyricLine: "same ocean, different flow",
    price: 32,
    capsule: "Golden Hour",
    sourceVideo: "same ocean, different flow (short)",
    image: "/placeholder/product-3.jpg",
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
