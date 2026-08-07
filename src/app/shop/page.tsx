import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-headline text-4xl text-dusk-navy">Shop</h1>
      <p className="mt-2 max-w-xl text-sm text-dusk-navy/70">
        Every piece ties back to a lyric line or a video moment. Ride the
        wave or let it go.
      </p>

      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
