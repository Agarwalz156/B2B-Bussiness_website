'use client';

interface PulsatingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'accent';
}

export function PulsatingButton({ children, onClick, href, target, rel, variant = 'accent' }: PulsatingButtonProps) {
  const bgColor = variant === 'accent' ? 'bg-accent' : 'bg-primary';
  const baseClasses = `relative inline-flex rounded-lg ${bgColor} px-7 py-4 text-sm font-semibold text-white transition-all duration-300`;
  
  const pulsatingEffect = (
    <>
      <span className="absolute inset-0 rounded-lg bg-white opacity-0 animate-pulse" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {pulsatingEffect}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {pulsatingEffect}
    </button>
  );
}
