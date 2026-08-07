"use client";

import { useEffect, useState } from "react";
import { taglines } from "@/lib/data";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % taglines.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-golden-peach/30 px-6 py-24 text-center">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <span className="flex h-20 w-20 rotate-[-6deg] items-center justify-center rounded-full border-2 border-dusk-navy text-[0.65rem] font-headline uppercase tracking-wide">
          RTE 1
        </span>
        <h1 className="font-headline text-4xl leading-tight text-dusk-navy sm:text-6xl">
          {taglines[index]}
        </h1>
        <p className="max-w-md text-sm text-dusk-navy/70">
          A small West Coast lifestyle label that happens to make music.
          Postcards, wave lines, and salt air &mdash; not a band merch table.
        </p>
        <a
          href="/shop"
          className="mt-2 rounded-full bg-coral-sunset px-8 py-3 text-sm font-medium text-paper-cream transition hover:bg-burnt-rust"
        >
          Shop the drop
        </a>
      </div>
    </section>
  );
}
