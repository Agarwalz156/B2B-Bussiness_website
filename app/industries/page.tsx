import Link from 'next/link';

const industries = [
  'Manufacturing',
  'Pharmaceutical',
  'Warehousing',
  'Hospitality',
  'Oil & Gas',
  'FMCG',
  'Heavy Engineering',
  'Power Plants',
];

export default function IndustriesPage() {
  return (
    <section className="section-container space-y-12">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-neutral">Industries served</p>
        <h1 className="mt-4 text-4xl font-semibold text-primary">Engineering services for every industrial sector</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Four Way Engineers provides safety and pipeline solutions for high-risk environments and production-driven facilities across the northern industrial belt.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <div key={industry} className="rounded-xl border border-border bg-white p-8 text-center shadow-card">
            <h2 className="text-xl font-semibold text-primary">{industry}</h2>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-surface p-10 shadow-card text-center">
        <h2 className="text-3xl font-semibold text-primary">Focused on industrial scale, not general services</h2>
        <p className="mt-4 max-w-3xl mx-auto text-sm leading-7 text-neutral">
          From factory fire protection to pipeline manifolds and preventive maintenance, our expertise is built around systems that run industrial operations safely and reliably.
        </p>
        <Link href="/request-quote" className="mt-8 inline-flex rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#e05b00]">
          Schedule inspection
        </Link>
      </div>
    </section>
  );
}
