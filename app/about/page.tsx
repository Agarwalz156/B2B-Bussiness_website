import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="section-container space-y-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral">About Four Way Engineers</p>
          <h1 className="mt-4 text-4xl font-semibold text-primary">Industrial fire safety, gas manifold and fabrication engineering from Haridwar</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Four Way Engineers is a Haridwar-based industrial engineering firm providing fire safety systems, LPG and industrial gas pipelines, fabrication, ventilation and welding service support. Our offices are located at Office L-9, Shivalik Nagar, BHEL, Haridwar and Shop B-14 Shopping Complex, Shivalik Nagar.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
            We deliver turnkey civil and mechanical projects, manufacture gas manifolds, and provide AMC contracts for fire safety systems, hydrant lines and gas manifold installations.
          </p>
        </div>
        <div className="rounded-xl bg-white p-8 shadow-card">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral">Regional capability</p>
          <h2 className="mt-4 text-2xl font-semibold text-primary">Haridwar headquarters with North India industrial reach</h2>
          <p className="mt-4 text-sm leading-7 text-neutral">
            We serve manufacturing, pharmaceutical, warehousing and automotive clients across Uttarakhand, UP, Delhi NCR, Haryana and Punjab with responsive local engineering and execution.
          </p>
          <div className="mt-6 space-y-3 text-sm text-neutral">
            <p>• 250+ industrial clients, including BHEL, Air Liquide, Honeywell, Suzuki and Mahindra</p>
            <p>• Fire safety, gas piping and fabrication capability under one roof</p>
            <p>• AMC delivery, inspection reporting and compliance documentation</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-8 shadow-card">
          <h2 className="text-xl font-semibold text-primary">Company foundation</h2>
          <p className="mt-4 text-sm leading-7 text-neutral">
            Our growth is driven by three priorities: quality, service and safety. Our team includes trained engineers and welders capable of handling varied industrial installation and fabrication work.
          </p>
        </div>
        <div className="rounded-xl bg-white p-8 shadow-card">
          <h2 className="text-xl font-semibold text-primary">Manufacturing and fabrication</h2>
          <p className="mt-4 text-sm leading-7 text-neutral">
            We produce gas equipment, LPG manifolds, MS/SS receivers and custom fabricated components for process piping, exhaust systems and ventilation ducts.
          </p>
        </div>
        <div className="rounded-xl bg-white p-8 shadow-card">
          <h2 className="text-xl font-semibold text-primary">Annual maintenance contracts</h2>
          <p className="mt-4 text-sm leading-7 text-neutral">
            Our AMC plans cover fire safety systems, hydrant lines, gas manifolds and allied equipment with scheduled inspections, testing and service reporting.
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-surface p-10 shadow-card">
        <h2 className="text-3xl font-semibold text-primary">Practical industrial engineering for decision-makers</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral">
          Plant managers and safety officers choose Four Way Engineers for technically sound proposals, documented inspection outcomes, and field-level execution that aligns with local regulations.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-6">
            <p className="font-semibold text-primary">Gas piping and manifolds</p>
            <p className="mt-2 text-sm leading-7 text-neutral">Systems for Ar, CO2, He, N2, O2, H2, D.A. and LPG distribution with automated control and leak-safe manifold design.</p>
          </div>
          <div className="rounded-xl bg-white p-6">
            <p className="font-semibold text-primary">Fire systems and extinguishers</p>
            <p className="mt-2 text-sm leading-7 text-neutral">Wet risers, hydrants, sprinklers, gas extinguisher systems and fire detection installations with audit-ready reporting.</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-10 shadow-card">
        <h2 className="text-3xl font-semibold text-primary">Need a technical inspection?</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral">
          Use our contact page to schedule a Haridwar-based engineering audit or request a quote for a fire safety, gas manifold, fabrication or welding support project.
        </p>
        <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#e05b00]">
          Contact our team
        </Link>
      </div>
    </section>
  );
}
