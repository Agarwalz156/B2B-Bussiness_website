import Link from 'next/link';

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg md:hidden">
      <div className="flex items-center justify-around p-4">
        <Link
          href="tel:+919837476323"
          className="flex flex-col items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors"
        >
          <span className="text-2xl">📞</span>
          Call
        </Link>
        <Link
          href="https://wa.me/919837476323"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors"
        >
          <span className="text-2xl">💬</span>
          WhatsApp
        </Link>
        <Link
          href="/request-quote"
          className="flex flex-col items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors"
        >
          <span className="text-2xl">📋</span>
          Quote
        </Link>
      </div>
    </div>
  );
}