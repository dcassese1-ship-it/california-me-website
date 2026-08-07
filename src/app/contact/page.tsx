export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-headline text-4xl text-dusk-navy">
        Contact / Wholesale
      </h1>
      <p className="mt-2 text-sm text-dusk-navy/70">
        Markets, pop-ups, wholesale, and press inquiries.
      </p>

      <form className="mt-8 flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-dusk-navy">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-dusk-navy/20 bg-transparent px-3 py-2 text-sm focus:border-coral-sunset focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-dusk-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-dusk-navy/20 bg-transparent px-3 py-2 text-sm focus:border-coral-sunset focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="inquiry" className="text-sm font-medium text-dusk-navy">
            Inquiry type
          </label>
          <select
            id="inquiry"
            name="inquiry"
            className="mt-1 w-full rounded-md border border-dusk-navy/20 bg-transparent px-3 py-2 text-sm focus:border-coral-sunset focus:outline-none"
          >
            <option>Wholesale</option>
            <option>Market / Pop-up</option>
            <option>Press</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-dusk-navy">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-md border border-dusk-navy/20 bg-transparent px-3 py-2 text-sm focus:border-coral-sunset focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-coral-sunset px-8 py-3 text-sm font-medium text-paper-cream transition hover:bg-burnt-rust"
        >
          Send
        </button>
      </form>
    </div>
  );
}
