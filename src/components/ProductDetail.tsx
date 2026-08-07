"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

const sizes = ["S", "M", "L", "XL"];

export default function ProductDetail({ product }: { product: Product }) {
  const [size, setSize] = useState(sizes[1]);
  const hasArt = !product.image.startsWith("/placeholder/");

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2">
      {hasArt ? (
        <div className="relative aspect-square w-full rounded-lg bg-paper-cream">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      ) : (
        <div className="aspect-square w-full rounded-lg bg-faded-clay/30" />
      )}

      <div>
        <h1 className="font-headline text-3xl text-dusk-navy sm:text-4xl">
          &ldquo;{product.lyricLine}&rdquo;
        </h1>
        <p className="mt-1 text-sm text-dusk-navy/60">{product.name}</p>
        <p className="mt-4 text-2xl font-medium text-dusk-navy">
          ${product.price}
        </p>

        <div className="mt-6">
          <p className="text-sm font-medium text-dusk-navy">Size</p>
          <div className="mt-2 flex gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`h-10 w-10 rounded-full border text-sm transition ${
                  size === s
                    ? "border-coral-sunset bg-coral-sunset text-paper-cream"
                    : "border-dusk-navy/20 text-dusk-navy/70 hover:border-coral-sunset"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button className="mt-8 w-full rounded-full bg-coral-sunset px-8 py-3 text-sm font-medium text-paper-cream transition hover:bg-burnt-rust sm:w-auto">
          Add to cart
        </button>

        {product.sourceVideo && (
          <p className="mt-6 text-sm text-ocean-teal">
            As seen in &ldquo;{product.sourceVideo}&rdquo;
          </p>
        )}
        {product.trackLink && (
          <p className="mt-6 text-sm text-ocean-teal">
            Listen:{" "}
            <Link
              href={product.trackLink.href}
              className="underline decoration-ocean-teal/40 underline-offset-2 hover:text-coral-sunset"
            >
              {product.trackLink.label}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
