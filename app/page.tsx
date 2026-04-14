import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { ServiceCard } from '@/components/ServiceCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const services = [
  {
    title: 'Fire Safety Systems',
    description: 'Hydrant, sprinkler and fire alarm systems engineered for process plants, warehouses and manufacturing floors.',
  },
  {
    title: 'Fire Extinguisher Sales & Refilling',
    description: 'Supply, inspection and refilling of industrial extinguishers with documentation for audit readiness.',
  },
  {
    title: 'Gas Pipeline & Manifold Systems',
    description: 'LPG and industrial gas pipeline systems built for leak control, pressure stability and safe distribution.',
  },
  {
    title: 'Annual Maintenance Contracts',
    description: 'AMC programs that keep fire protection, gas piping and fabricated systems operating reliably year-round.',
  },
  {
    title: 'Fabrication & Ventilation Systems',
    description: 'Industrial ductwork, ventilation fabrication and structural supports for high-demand production environments.',
  },
  {
    title: 'Welding Equipment & Consumables',
    description: 'Welding consumables and equipment support for fabrication teams during installation and repair work.',
  },
];

const proofItems = [
  {
    label: 'Years of industry experience',
    value: '25+',
  },
  {
    label: 'Industrial clients served',
    value: '250+',
  },
  {
    label: 'Regional project reach',
    value: 'Haridwar & North India',
  },
];

const testimonials = [
  {
    quote: 'Four Way Engineers completed our hydrant network upgrade on schedule and provided all test records required by the local fire authority.',
    name: 'Plant Manager, Pharmaceutical Manufacturer',
  },
  {
    quote: 'The LPG manifold installation met our process flow requirements and reduced manual intervention through automatic changeover.',
    name: 'Factory Owner, Automotive Components',
  },
  {
    quote: 'Their AMC program for fire extinguishers and safety systems has kept our factory inspection readiness consistent across shifts.',
    name: 'Operations Manager, FMCG Manufacturing',
  },
  {
    quote: 'We received accurate as-built drawings and PESO-compliant pipeline documentation for the chemical plant revamp.',
    name: 'Maintenance Head, Chemical Plant',
  },
];

const certifications = [
  'ISO 9001 quality management',
  'PESO safety compliance',
  'Fire department inspection readiness',
  'Industrial AMC procedure certification',
];

export default function Home() {
  return (
    <>
      <section className="bg-surface">
        <div className="section-container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-lg bg-surface px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              25+ years industrial engineering
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-primary sm:text-6xl">
              Fire safety and gas pipeline solutions for Haridwar and North India industrial sites
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral">
              Four Way Engineers supports factory managers, safety officers and procurement teams with engineered fire protection, LPG/industrial gas distribution and AMC delivery for process plants and heavy industry.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary">
                25+ Years Experience
              </div>
              <div className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-primary">
                250+ Industrial Clients
              </div>
              <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-neutral">
                Free Site Inspection in Haridwar & Nearby Areas
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/request-quote" className="inline-flex rounded-lg bg-accent px-7 py-4 text-sm font-semibold text-white">
                Request Site Inspection
              </Link>
              <Link href="tel:+919837476323" className="inline-flex rounded-lg border border-border bg-white px-7 py-4 text-sm font-semibold text-primary">
                Call +91 98374 76323
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-white p-10 shadow-card">
            <div className="grid gap-6">
              <div className="rounded-lg bg-surface p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral">Inspection-ready service</p>
                <h2 className="mt-4 text-2xl font-semibold text-primary">Schedule an industrial site review today</h2>
                <p className="mt-3 text-sm leading-7 text-neutral">
                  Our engineers verify risk, compliance and installation scope so you can approve work with confidence.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {proofItems.slice(0, 2).map((item) => (
                  <div key={item.label} className="rounded-xl bg-surface p-5">
                    <p className="text-3xl font-semibold text-primary">{item.value}</p>
                    <p className="mt-2 text-sm text-neutral">{item.label}</p>
                  </div>
                ))}
                <div className="rounded-xl bg-surface p-5 sm:col-span-2">
                  <p className="text-3xl font-semibold text-primary">{proofItems[2].value}</p>
                  <p className="mt-2 text-sm text-neutral">{proofItems[2].label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="rounded-xl bg-white p-8 shadow-card border border-border">
          <h2 className="text-xl font-semibold text-primary">Trusted by 250+ industrial operations</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-lg border border-border bg-surface px-5 py-4 text-center text-sm font-semibold text-neutral">BHEL Haridwar</div>
            <div className="rounded-lg border border-border bg-surface px-5 py-4 text-center text-sm font-semibold text-neutral">Air Liquide</div>
            <div className="rounded-lg border border-border bg-surface px-5 py-4 text-center text-sm font-semibold text-neutral">Suzuki Motorcycle</div>
            <div className="rounded-lg border border-border bg-surface px-5 py-4 text-center text-sm font-semibold text-neutral">Honeywell</div>
            <div className="rounded-lg border border-border bg-surface px-5 py-4 text-center text-sm font-semibold text-neutral">Mahindra & Mahindra</div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral">Core services</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary">A single partner for fire safety, gas pipeline systems and industrial maintenance</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral">
              Every service is built for decision-makers who need dependable systems, clear compliance and responsive execution across Haridwar and North India.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-surface rounded-xl p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-700">Why Four Way Engineers</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary">Proven industrial execution with compliance-first delivery</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700">
              We combine technical discipline, local delivery and documentation support so plant leaders can onboard a partner with confidence.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl bg-white p-6 shadow-card">
              <p className="font-semibold text-primary">25+ years of engineering practice</p>
              <p className="mt-2 text-sm leading-7 text-neutral">Consistent delivery for fire systems, pipeline projects and maintenance contracts since 1999.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-card">
              <p className="font-semibold text-primary">Single-source responsibility</p>
              <p className="mt-2 text-sm leading-7 text-neutral">Design, installation, commissioning and handover from one experienced team.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-card">
              <p className="font-semibold text-primary">Regional safety expertise</p>
              <p className="mt-2 text-sm leading-7 text-neutral">Haridwar-based execution with knowledge of Uttarakhand and North India industrial standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-xl bg-white p-10 shadow-card">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral">Project verification</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary">Industrial case study and results</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral">
              We help plant operators reduce failure points, meet audits, and keep production on schedule through practical engineering and disciplined delivery.
            </p>
          </div>
          <div className="grid gap-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-xl border border-border bg-surface p-6">
                <p className="text-sm leading-7 text-slate-700">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-primary">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-surface rounded-xl p-10 shadow-card">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral">Certifications & compliance</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary">Documentation and standards for industrial audits</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral">
              Our delivery includes compliance documentation for fire and gas systems, and structured maintenance records for annual safety reviews.
            </p>
          </div>
          <div className="grid gap-4">
            {certifications.map((item) => (
              <div key={item} className="rounded-xl bg-white p-6 shadow-card">
                <p className="font-semibold text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-white py-16">
        <div className="rounded-xl border border-border bg-surface p-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral">Ready to move</p>
          <h2 className="mt-4 text-4xl font-semibold text-primary">Start with a site inspection from Haridwar’s trusted engineering partner.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral">
            Get a structured, compliance-first review for your plant and begin the path to safer operations and longer asset life.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/request-quote" className="inline-flex rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#e05b00]">
              Book Inspection
            </Link>
            <Link href="tel:+919837476323" className="inline-flex rounded-lg border border-border bg-white px-8 py-4 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary">
              Call +91 98374 76323
            </Link>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}
