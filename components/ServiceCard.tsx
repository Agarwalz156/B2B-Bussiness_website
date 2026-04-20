'use client';

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ title, description, delay = 0 }: ServiceCardProps) {
  return (
    <div 
      className="rounded-xl border border-border bg-white p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-orange-600 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        <span className="text-xl font-semibold animate-glow-pulse">✓</span>
      </div>
      <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral">{description}</p>
      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-accent to-orange-600 transition-all duration-300 group-hover:w-12 rounded-full" />
    </div>
  );
}
