"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="rounded-lg bg-dusk-navy px-6 py-10 text-center text-paper-cream">
      <h2 className="font-headline text-2xl">same ocean, different flow</h2>
      <p className="mx-auto mt-2 max-w-sm text-sm text-paper-cream/70">
        Postcards from the coast, new drops, and the occasional song. No
        rush, just us.
      </p>
      {submitted ? (
        <p className="mt-6 text-coral-sunset">You&rsquo;re on the list.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-sm gap-2"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-full border border-paper-cream/30 bg-transparent px-4 py-2 text-sm text-paper-cream placeholder:text-paper-cream/40 focus:border-coral-sunset focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-coral-sunset px-5 py-2 text-sm font-medium text-paper-cream transition hover:bg-burnt-rust"
          >
            Join
          </button>
        </form>
      )}
    </section>
  );
}
