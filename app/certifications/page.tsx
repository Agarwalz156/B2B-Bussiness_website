export default function CertificationsPage() {
  return (
    <section className="section-container space-y-12">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-neutral">Certifications & Compliance</p>
        <h1 className="mt-4 text-4xl font-semibold text-primary">Built around industrial safety and regulatory confidence</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Four Way Engineers follows strict quality and safety standards on every fire safety and pipeline project, ensuring your facility meets inspection readiness and regulatory requirements.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {[
          { title: 'Fire safety compliance', detail: 'Hydrant, sprinkler, and alarm system installations designed to satisfy local fire code requirements.' },
          { title: 'Gas pipeline standards', detail: 'LPG and industrial gas systems engineered with leak prevention and pressure control best practices.' },
          { title: 'Maintenance assurance', detail: 'Annual maintenance contracts with documented testing, reporting, and corrective actions.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl bg-white p-8 shadow-card border border-border">
            <h2 className="text-2xl font-semibold text-primary">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-neutral">{item.detail}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-surface p-10 shadow-card">
        <h2 className="text-3xl font-semibold text-primary">Compliance is not optional</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral">
          We support every project with documentation, audit preparation, and inspection-ready handover so your safety team can operate without regulatory risk.
        </p>
      </div>
    </section>
  );
}
