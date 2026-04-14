interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-border bg-white p-8 shadow-card">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-surface text-primary">
        <span className="text-xl font-semibold">•</span>
      </div>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral">{description}</p>
    </div>
  );
}
