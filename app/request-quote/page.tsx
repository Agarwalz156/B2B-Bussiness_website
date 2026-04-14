import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';

export default function QuotePage() {
  return (
    <section className="section-container space-y-12">
      <div className="rounded-xl bg-white p-10 shadow-card">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral">Request a quote</p>
        <h1 className="mt-4 text-4xl font-semibold text-primary">Request a site inspection or project quote</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral">
          Complete this simple form to receive a prioritized inspection proposal for AMC, installation, or pipeline engineering support.
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-start">
        <LeadForm defaultHeading="Request a quote" />
        <div className="space-y-8 rounded-xl bg-surface p-10 shadow-card">
          <div>
            <h2 className="text-3xl font-semibold text-primary">Why request a quote?</h2>
            <p className="mt-4 text-sm leading-7 text-neutral">
              A quote request begins with a site inspection so our team can assess scope, safety risk, and precise costs before committing to installation or maintenance work.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-card">
            <h3 className="font-semibold text-primary">High-value requests</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral">
              <li>Large installation projects</li>
              <li>Annual maintenance contracts</li>
              <li>Gas manifold and pipeline installations</li>
            </ul>
          </div>
          <div>
            <Link href="/contact" className="inline-flex rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#e05b00]">
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
