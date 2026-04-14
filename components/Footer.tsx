import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="section-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-primary">Four Way Engineers</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-neutral">
            Haridwar-based industrial safety and gas pipeline engineering partner for North India, focused on site inspections, compliance and AMC delivery.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral">Contact</h3>
          <p className="mt-4 text-sm text-primary">Phone: +91 98374 76323</p>
          <p className="text-sm text-primary">Alt: +91 99171 49144</p>
          <p className="text-sm text-primary">Email: fourwayengineers@gmail.com</p>
          <p className="mt-4 text-sm text-primary">Office L-9, Shivalik Nagar, BHEL, Haridwar</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>
              <Link href="/services" className="transition hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="transition hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/request-quote" className="transition hover:text-primary">
                Request Quote
              </Link>
            </li>
          </ul>
          <div className="mt-6">
            <Link href="/request-quote" className="inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e05b00]">
              Book Inspection
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-surface py-6">
        <div className="section-container text-center text-sm text-neutral">
          © {new Date().getFullYear()} Four Way Engineers. Industrial fire safety and gas pipeline engineering.
        </div>
      </div>
    </footer>
  );
}
