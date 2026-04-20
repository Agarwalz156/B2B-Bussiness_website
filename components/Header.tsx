import Link from 'next/link';
import { ShimmerButton } from './ShimmerButton';
import { InteractiveHoverButton } from './InteractiveHoverButton';

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
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="section-container flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="font-semibold text-2xl text-primary hover:text-accent transition-colors duration-300 animate-fade-in">
          Four Way Engineers
        </Link>
        <nav className="hidden items-center gap-6 lg:flex text-sm font-medium text-neutral">
          {navLinks.map((item, index) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="transition-colors hover:text-accent relative group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <InteractiveHoverButton
            href="tel:+919837476323"
            baseColor="#FFFFFF"
            hoverColor="#E5E7EB"
          >
            <span className="text-primary">Call Now</span>
          </InteractiveHoverButton>
          <ShimmerButton
            href="https://wa.me/919837476323?text=Requesting%20site%20inspection%20for%20industrial%20fire%20safety"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </ShimmerButton>
        </div>
      </div>
    </header>
  );
}
