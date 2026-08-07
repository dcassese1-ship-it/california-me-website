import Link from "next/link";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/story", label: "The Story" },
  { href: "/journal", label: "Journal" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-dusk-navy/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dusk-navy text-[0.6rem] font-headline uppercase leading-tight text-dusk-navy">
            Cali
            <br />
            Me
          </span>
          <span className="font-headline text-lg tracking-wide">
            California Me
          </span>
        </Link>
        <nav className="flex gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dusk-navy/80 transition hover:text-coral-sunset"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
