'use client';

interface BorderBeamProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({ 
  children, 
  className = '', 
  size = 100, 
  duration = 10, 
  delay = 0,
  colorFrom = '#D62828',
  colorTo = '#FF6B6B',
}: BorderBeamProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {/* Beam animation */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `linear-gradient(90deg, transparent, ${colorFrom}, transparent)`,
          animation: `border-beam ${duration}s infinite`,
          animationDelay: `${delay}ms`,
          pointerEvents: 'none',
        }}
      />
      
      {/* Border effect */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, ${colorFrom}, ${colorTo}, transparent)`,
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      />
      
      {children}
    </div>
  );
}
