import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const hasArt = !product.image.startsWith("/placeholder/");

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block overflow-hidden rounded-lg border border-dusk-navy/10 bg-paper-cream transition hover:shadow-md"
    >
      {hasArt ? (
        <div className="relative aspect-square w-full bg-paper-cream">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      ) : (
        <div className="aspect-square w-full bg-faded-clay/30" />
      )}
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
