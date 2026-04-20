'use client';

interface AnimatedCircularBarProps {
  value: number; // 0-100
  label: string;
  color?: string;
  size?: number;
}

export function AnimatedCircularBar({ 
  value, 
  label, 
  color = '#D62828', 
  size = 120 
}: AnimatedCircularBarProps) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
          style={{ filter: 'drop-shadow(0 0 10px rgba(214, 40, 40, 0.2))' }}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r="40"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          
          {/* Progress circle with animation */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r="40"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="animate-circular-progress transition-all duration-1000"
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-primary">{value}%</span>
        </div>
      </div>
      
      <p className="text-sm font-medium text-neutral text-center">{label}</p>
    </div>
  );
}
