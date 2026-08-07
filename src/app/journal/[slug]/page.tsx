import Image from "next/image";
import { notFound } from "next/navigation";
import { formatJournalDate, journalPosts } from "@/lib/data";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs uppercase tracking-wide text-dusk-navy/50">
        {formatJournalDate(post.date)}
      </p>
      <h1 className="mt-2 font-headline text-4xl text-dusk-navy">
        {post.title}
      </h1>
      <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg bg-ocean-teal/20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 640px) 42rem, 100vw"
          className="object-cover"
        />
      </div>
      <p className="mt-6 text-dusk-navy/80">{post.excerpt}</p>
      {post.songLinks && post.songLinks.length > 0 && (
        <div className="mt-6">
          <p className="text-xs uppercase tracking-wide text-dusk-navy/50">
            Listen to the song
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {post.songLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-dusk-navy bg-paper-cream px-6 py-2.5 font-headline text-sm uppercase tracking-wide text-dusk-navy transition hover:border-coral-sunset hover:bg-coral-sunset hover:text-paper-cream"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
