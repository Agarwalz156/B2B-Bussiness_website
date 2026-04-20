'use client';

import { useState } from 'react';

interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  hoverColor?: string;
  baseColor?: string;
}

export function InteractiveHoverButton({ 
  children, 
  onClick, 
  href, 
  target, 
  rel,
  hoverColor = '#D62828',
  baseColor = '#0B1F3A',
}: InteractiveHoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = 'relative inline-flex rounded-lg px-7 py-4 text-sm font-semibold text-white overflow-hidden transition-all duration-300 group';

  const content = (
    <>
      {/* Main background */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          backgroundColor: isHovered ? hoverColor : baseColor,
        }}
      />
      
      {/* Hover effect particles */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${isHovered ? '50% 50%' : '0% 0%'}, rgba(255,255,255,0.2), transparent 70%)`,
        }}
      />
      
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
}
