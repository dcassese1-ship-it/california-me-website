import Hero from "@/components/Hero";
import CapsuleSection from "@/components/CapsuleSection";
import EmailCapture from "@/components/EmailCapture";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <div className="mx-auto w-full max-w-6xl px-6">
        <CapsuleSection capsule="Golden Hour" products={products} />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="font-headline text-2xl text-dusk-navy">
          Latest Short
        </h2>
        <div className="mt-4 aspect-video w-full max-w-md overflow-hidden rounded-lg bg-dusk-navy/10">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed?listType=user_uploads&list=californiameproject"
            title="California Me — Latest Short"
            allowFullScreen
          />
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16">
        <EmailCapture />
      </div>
    </div>
  );
}
