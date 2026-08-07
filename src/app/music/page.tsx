const epLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/album/5cUHcBbJRRUFdLxYmk5ooZ",
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/california-me/1863377079",
  },
];

const singleLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/album/0griEc8qSSxlgbunWn7jEd?si=KqmDjYqxSKW3UU8y2GkLCw",
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/album/longing-california-single/1893024336",
  },
];

const streamingLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@californiameproject" },
];

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-headline text-4xl text-dusk-navy">Music</h1>
      <p className="mt-2 text-sm text-dusk-navy/70">
        Indie pop, coastal nostalgia. The world the brand lives in.
      </p>

      <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg bg-dusk-navy/10">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/wcObsJwFNww"
          title="California Me — Featured Video"
          allowFullScreen
        />
      </div>

      <div className="mt-10">
        <p className="font-headline text-lg text-dusk-navy">
          same ocean, different flow
        </p>
        <p className="text-sm text-dusk-navy/60">the EP</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {epLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-dusk-navy bg-paper-cream px-6 py-2.5 font-headline text-sm uppercase tracking-wide text-dusk-navy transition hover:bg-coral-sunset hover:border-coral-sunset hover:text-paper-cream"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div id="longing-california" className="mt-10">
        <p className="font-headline text-lg text-dusk-navy">
          longing california
        </p>
        <p className="text-sm text-dusk-navy/60">the single</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {singleLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-dusk-navy bg-paper-cream px-6 py-2.5 font-headline text-sm uppercase tracking-wide text-dusk-navy transition hover:bg-coral-sunset hover:border-coral-sunset hover:text-paper-cream"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {streamingLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-dusk-navy/20 px-5 py-2 text-sm text-dusk-navy/80 transition hover:border-coral-sunset hover:text-coral-sunset"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
