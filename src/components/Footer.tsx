import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-dusk-navy/10 bg-dusk-navy text-paper-cream">
      <div className="perforated-edge -mt-[1px]" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper-cream text-[0.6rem] font-headline uppercase leading-tight">
            Cali
            <br />
            Me
          </span>
          <p className="mt-3 max-w-xs text-sm text-paper-cream/70">
            RTE 1 &middot; same ocean, different flow
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper-cream/80">
          <Link href="/shop" className="hover:text-coral-sunset">
            Shop
          </Link>
          <Link href="/story" className="hover:text-coral-sunset">
            The Story
          </Link>
          <Link href="/journal" className="hover:text-coral-sunset">
            Journal
          </Link>
          <Link href="/music" className="hover:text-coral-sunset">
            Music
          </Link>
          <Link href="/contact" className="hover:text-coral-sunset">
            Contact / Wholesale
          </Link>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-6 text-xs text-paper-cream/50">
        &copy; {new Date().getFullYear()} California Me
      </div>
    </footer>
  );
}
