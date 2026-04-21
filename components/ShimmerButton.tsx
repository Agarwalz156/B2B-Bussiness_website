'use client';

interface ShimmerButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export function ShimmerButton({ children, onClick, href, target, rel, className }: ShimmerButtonProps) {
  const baseClasses = `relative inline-flex rounded-lg bg-accent px-7 py-4 text-sm font-semibold text-white overflow-hidden group transition-all duration-300 hover:shadow-lg ${className || ''}`;
  
  const shimmerEffect = (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 animate-shimmer" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {shimmerEffect}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {shimmerEffect}
    </button>
  );
}
