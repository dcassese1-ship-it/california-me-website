"use client";

import { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import { products, type Capsule } from "@/lib/data";

const capsules: (Capsule | "All")[] = ["All", "Golden Hour", "Hidden Angels"];

export default function ShopPage() {
  const [filter, setFilter] = useState<Capsule | "All">("All");

  const filtered =
    filter === "All" ? products : products.filter((p) => p.capsule === filter);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-headline text-4xl text-dusk-navy">Shop</h1>
      <p className="mt-2 max-w-xl text-sm text-dusk-navy/70">
        Every piece ties back to a lyric line or a video moment. Ride the
        wave or let it go.
      </p>

      <div className="mt-8 flex gap-2">
        {capsules.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === c
                ? "border-coral-sunset bg-coral-sunset text-paper-cream"
                : "border-dusk-navy/20 text-dusk-navy/70 hover:border-coral-sunset"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
