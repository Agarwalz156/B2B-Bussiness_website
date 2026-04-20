'use client';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  hover = true,
}: AnimatedCardProps) {
  return (
    <div
      className={`rounded-lg bg-white border border-border overflow-hidden transition-all duration-300 ${
        hover ? 'hover:shadow-lg hover:-translate-y-1' : 'shadow-card'
      } animate-fade-in ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function FadeIn({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const directionClass = {
    up: '-translate-y-4',
    down: 'translate-y-4',
    left: '-translate-x-4',
    right: 'translate-x-4',
  }[direction];

  return (
    <div
      className={`opacity-0 animate-fade-in ${directionClass} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
