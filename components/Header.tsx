import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Industries', href: '/industries' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="section-container flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="font-semibold text-2xl text-primary">
          Four Way Engineers
        </Link>
        <nav className="hidden items-center gap-6 lg:flex text-sm font-medium text-neutral">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="tel:+919837476323"
            className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary"
          >
            Call Now
          </Link>
          <Link
            href="https://wa.me/919837476323?text=Requesting%20site%20inspection%20for%20industrial%20fire%20safety"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </header>
  );
}
