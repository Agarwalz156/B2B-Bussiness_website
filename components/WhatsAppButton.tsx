import Link from 'next/link';

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden md:block">
      <Link
        href="https://wa.me/919837476323?text=Hi%2C%20I%20need%20a%20site%20inspection%20for%20industrial%20fire%20safety%20and%20gas%20pipeline%20solutions"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-lg bg-[#25d366] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#1ebe57]"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#25d366]">W</span>
        WhatsApp Support
      </Link>
    </div>
  );
}
