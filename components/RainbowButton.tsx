'use client';

interface RainbowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function RainbowButton({ children, onClick, href, target, rel }: RainbowButtonProps) {
  const baseClasses = 'relative inline-flex rounded-lg px-7 py-4 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105';
  
  const rainbowEffect = (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-rainbow" />
      <div className="absolute inset-[2px] bg-accent rounded-lg" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {rainbowEffect}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {rainbowEffect}
    </button>
  );
}
