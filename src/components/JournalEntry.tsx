import Image from "next/image";
import Link from "next/link";
import type { JournalPost } from "@/lib/data";

export default function JournalEntry({ post }: { post: JournalPost }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group block overflow-hidden rounded-lg border border-dusk-navy/10 bg-paper-cream transition hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full bg-ocean-teal/20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-dusk-navy/50">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="mt-1 font-headline text-xl text-dusk-navy">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-dusk-navy/70">{post.excerpt}</p>
      </div>
    </Link>
  );
}
