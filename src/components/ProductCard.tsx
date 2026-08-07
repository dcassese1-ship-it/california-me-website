import Link from "next/link";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block overflow-hidden rounded-lg border border-dusk-navy/10 bg-paper-cream transition hover:shadow-md"
    >
      <div className="aspect-square w-full bg-faded-clay/30" />
      <div className="p-4">
        <p className="font-headline text-lg text-dusk-navy">
          &ldquo;{product.lyricLine}&rdquo;
        </p>
        <p className="mt-1 text-sm text-dusk-navy/60">{product.name}</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-ocean-teal">{product.capsule}</span>
          <span className="font-medium text-dusk-navy">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
