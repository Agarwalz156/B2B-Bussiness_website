'use client';

interface HexagonPatternProps {
  className?: string;
  color?: string;
  size?: number;
}

export function HexagonPattern({ className = '', color = '#D62828', size = 40 }: HexagonPatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full opacity-5 animate-hex-rotate ${className}`}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hexagon-grid" x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <polygon
            points={`${size / 2},0 ${size},${size / 4} ${size},${(3 * size) / 4} ${size / 2},${size} 0,${(3 * size) / 4} 0,${size / 4}`}
            fill="none"
            stroke={color}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="1000" height="1000" fill="url(#hexagon-grid)" />
    </svg>
  );
}

interface HexagonBackgroundProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function HexagonBackground({ children, className = '', color = '#D62828' }: HexagonBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <HexagonPattern color={color} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
