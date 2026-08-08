"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { taglines } from "@/lib/data";

const HERO_IMAGE = "/Image/hero/hero-wave.png";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % taglines.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9]">
      <Image
        src={HERO_IMAGE}
        alt="A surfboard planted in the sand as a wave breaks at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] sm:object-[38%_center]"
      />

      {/* Overall legibility wash, strongest over the text zone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-transparent" />

      {/* Soft vignette focused directly behind the headline */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_22%_32%,rgba(0,0,0,0.4),transparent_70%)] sm:bg-[radial-gradient(ellipse_45%_50%_at_28%_32%,rgba(0,0,0,0.35),transparent_70%)]" />

      <div className="relative z-10 flex h-full flex-col items-start justify-start px-6 pt-10 sm:pt-14">
        <span className="flex h-14 w-14 rotate-[-6deg] items-center justify-center rounded-full border-2 border-paper-cream text-[0.55rem] font-headline uppercase tracking-wide text-paper-cream sm:h-20 sm:w-20 sm:text-[0.65rem]">
          RTE 1
        </span>
        <h1 className="mt-5 max-w-[15rem] font-headline text-3xl leading-tight text-paper-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:max-w-md sm:text-6xl">
          {taglines[index]}
        </h1>
        <p className="mt-4 max-w-[15rem] text-sm text-paper-cream/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] sm:max-w-sm">
          A small West Coast lifestyle label that happens to make music.
          Postcards, wave lines, and salt air &mdash; not a band merch table.
        </p>
        <a
          href="/shop"
          className="mt-6 rounded-full bg-coral-sunset px-8 py-3 text-sm font-medium text-paper-cream shadow-md transition hover:bg-burnt-rust"
        >
          Shop the drop
        </a>
      </div>
    </section>
  );
}
