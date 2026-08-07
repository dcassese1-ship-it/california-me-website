import type { Capsule, Product } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

const capsuleCopy: Record<Capsule, string> = {
  "Golden Hour": "daytime, warm palette — coral sunset and golden peach",
  "Hidden Angels": "moodier, after-dark LA — dusk navy and ocean teal",
};

export default function CapsuleSection({
  capsule,
  products,
}: {
  capsule: Capsule;
  products: Product[];
}) {
  const capsuleProducts = products.filter((p) => p.capsule === capsule);

  return (
    <section className="py-10">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-headline text-2xl text-dusk-navy">{capsule}</h2>
        <p className="text-sm text-dusk-navy/60">{capsuleCopy[capsule]}</p>
      </div>
      <ProductGrid products={capsuleProducts} />
    </section>
  );
}
