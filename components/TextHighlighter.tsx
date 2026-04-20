'use client';

interface TextHighlighterProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  animate?: boolean;
}

export function TextHighlighter({ 
  children, 
  color = '#D62828', 
  className = '',
  animate = true,
}: TextHighlighterProps) {
  return (
    <span
      className={`relative inline-block ${animate ? 'animate-pulse' : ''} ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${color}20 0%, ${color}40 20%, ${color}20 40%, transparent 60%)`,
        backgroundSize: '200% 100%',
        backgroundPosition: animate ? '-200% center' : '0 center',
        animation: animate ? 'text-shine 3s infinite' : 'none',
        paddingLeft: '0.25rem',
        paddingRight: '0.25rem',
      }}
    >
      {children}
    </span>
  );
}

interface HighlightedTextProps {
  text: string;
  highlightWords?: string[];
  color?: string;
  className?: string;
}

export function HighlightedText({ 
  text, 
  highlightWords = [],
  color = '#D62828',
  className = '',
}: HighlightedTextProps) {
  const words = text.split(' ');

  return (
    <p className={className}>
      {words.map((word, index) => {
        const shouldHighlight = highlightWords.some(hw => 
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return shouldHighlight ? (
          <TextHighlighter key={index} color={color}>{word} </TextHighlighter>
        ) : (
          <span key={index} className="mr-1">{word} </span>
        );
      })}
    </p>
  );
}
