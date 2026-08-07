import JournalEntry from "@/components/JournalEntry";
import { journalPosts } from "@/lib/data";

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-headline text-4xl text-dusk-navy">Journal</h1>
      <p className="mt-2 max-w-xl text-sm text-dusk-navy/70">
        Postcards and short notes from the road, paired with a photo.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {journalPosts.map((post) => (
          <JournalEntry key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
