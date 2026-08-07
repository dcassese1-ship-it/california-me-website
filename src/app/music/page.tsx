const streamingLinks = [
  { label: "Spotify", href: "https://open.spotify.com" },
  { label: "Apple Music", href: "https://music.apple.com" },
  { label: "YouTube", href: "https://youtube.com/@californiameproject" },
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
          src="https://open.spotify.com/embed/artist/"
          title="California Me — Latest EP"
          allow="encrypted-media"
        />
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
