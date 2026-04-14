import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Four Way Engineers',
  description: 'Fire safety, gas pipeline, AMC, fabrication and welding services for industrial clients in Haridwar and North India.',
};

const serviceDetails = [
  {
    title: 'Fire Safety Systems',
    summary: 'Wet riser hydrant systems, sprinklers, gas-based extinguishers and fire alarm installations designed for industrial sites.',
    problems: ['Aging hydrant networks with low pressure.', 'Uncoordinated alarm zones in production areas.', 'Incomplete fire safety documentation for audits.'],
    technical: ['Wet riser layouts', 'Hydrant valve assemblies', 'Sprinkler system zoning', 'Automatic gas extinguisher systems'],
    compliance: ['National Building Code fire protection standards', 'State fire department inspection criteria', 'IS 2189 and IS 15105 sprinkler norms'],
    industries: ['Manufacturing', 'Pharma', 'Warehousing', 'Automotive'],
  },
  {
    title: 'Fire Extinguisher Sales & Refilling',
    summary: 'Supply, inspection and refilling of portable extinguishers with audit-ready tagging and certification.',
    problems: ['Expired service labels.', 'Wrong extinguisher class for the hazard.', 'No documented maintenance records.'],
    technical: ['ABC dry powder extinguishers', 'CO2 extinguishers', 'Pressure testing and sealing', 'Inspection tag records'],
    compliance: ['IS 2190 and local fire department norms', 'Audit-ready service reporting', 'Safety tagging and traceability'],
    industries: ['Pharma', 'Manufacturing', 'Warehousing', 'Hospitality'],
  },
  {
    title: 'Gas Pipeline & Manifold Systems',
    summary: 'Design and installation of gas piping for Ar, CO2, He, N2, O2, H2, D.A. and LPG including manifolds, receivers and control systems.',
    problems: ['Unstable pressure in gas supply lines.', 'Unsafe manifold installations.', 'Lack of automatic shut-off and leak detection.'],
    technical: ['LPG manifold headers', 'MS/SS receivers', 'Regulators and control valves', 'Line flow meters and sensors'],
    compliance: ['PESO-aligned gas installation standards', 'CGD and LPG pipeline norms', 'Leak test and safety inspection protocols'],
    industries: ['Manufacturing', 'Pharma', 'Automotive', 'Chemical'],
  },
  {
    title: 'Annual Maintenance Contracts',
    summary: 'Structured AMC plans for fire systems, gas manifolds and fabricated installations to reduce downtime and keep systems compliant.',
    problems: ['Inconsistent maintenance schedules.', 'Slow response for repairs.', 'No structured audit documentation.'],
    technical: ['Periodic system testing', 'Preventive replacement planning', 'Spare parts coordination', 'Maintenance reporting'],
    compliance: ['Annual fire safety audit support', 'Gas system inspection schedules', 'AMC documentation for regulatory review'],
    industries: ['Manufacturing', 'Pharma', 'Warehousing', 'Power plants'],
  },
  {
    title: 'Fabrication & Ventilation Systems',
    summary: 'MS/SS fabrication, air and water piping, exhaust systems, ductwork and evaporative cooling systems for industrial facilities.',
    problems: ['Poor process ventilation.', 'Non-standard fabricated components.', 'Heat and fume build-up in production areas.'],
    technical: ['Custom MS/SS tanks and receivers', 'Centrifugal blowers and filters', 'Exhaust and ventilation ductwork', 'Evaporative cooling systems'],
    compliance: ['Factory Act ventilation requirements', 'Industrial safety and emission norms', 'Design quality assurance'],
    industries: ['Manufacturing', 'Pharma', 'Warehousing', 'Power plants'],
  },
  {
    title: 'Welding Equipment & Consumables',
    summary: 'Welding machines, electrodes, wire, gas-shielded supplies and consumables from trusted industrial brands.',
    problems: ['Low-quality welding consumables.', 'Interrupted fabrication due to missing supplies.', 'Poor welding performance on critical joints.'],
    technical: ['Welding electrodes', 'Welding wires', 'Gas-shielded welding supplies', 'On-site technical support'],
    compliance: ['Welding quality control documentation', 'Material traceability requirements', 'Industrial welding safety protocols'],
    industries: ['Fabrication shops', 'Manufacturing', 'Construction support', 'Industrial repair'],
  },
];

export default function ServicesPage() {
  return (
    <section className="section-container space-y-12">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-primary">Industrial service capability for fire safety, gas distribution and maintenance</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral">
            Four Way Engineers delivers technical services for plant owners, safety managers and procurement teams that require compliant installations, robust maintenance and local execution across Haridwar and North India.
          </p>
        </div>
        <div className="rounded-xl bg-accent p-8 text-white shadow-card">
          <h2 className="text-2xl font-semibold">Need a site inspection?</h2>
          <p className="mt-4 text-sm leading-7 text-white/85">
            Start with a professional review of your fire safety and gas systems so our engineers can identify risk, scope and compliance gaps.
          </p>
          <Link href="/request-quote" className="mt-6 inline-flex rounded-lg bg-white px-7 py-3 text-sm font-semibold text-accent">
            Request Site Inspection
          </Link>
        </div>
      </div>

      <div className="space-y-10">
        {serviceDetails.map((service) => (
          <section key={service.title} className="rounded-xl border border-border bg-white p-8 shadow-card">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold text-primary">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral">{service.summary}</p>
              </div>
              <Link href="/request-quote" className="inline-flex h-min rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e05b00]">
                Request Site Inspection
              </Link>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Problems solved</h3>
                <ul className="space-y-3 text-sm text-neutral">
                  {service.problems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Technical components</h3>
                <ul className="space-y-3 text-sm text-neutral">
                  {service.technical.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="rounded-lg bg-surface p-6">
                <h3 className="text-xl font-semibold text-primary">Compliance standards</h3>
                <ul className="mt-4 space-y-3 text-sm text-neutral">
                  {service.compliance.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-surface p-6">
                <h3 className="text-xl font-semibold text-primary">Industries served</h3>
                <ul className="mt-4 space-y-3 text-sm text-neutral">
                  {service.industries.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="rounded-xl bg-surface p-10 shadow-card">
        <h2 className="text-3xl font-semibold text-primary">Industrial service delivery for plant managers and safety officers</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral">
          We reduce risk with project-stage inspection, technical detail, compliance documentation and maintenance support so stakeholders can approve work and move forward with confidence.
        </p>
        <div className="mt-6">
          <Link href="/request-quote" className="inline-flex rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white">
            Request Site Inspection
          </Link>
        </div>
      </div>
    </section>
  );
}
