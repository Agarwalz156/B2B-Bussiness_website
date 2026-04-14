import Link from 'next/link';

export const metadata = {
  title: 'Projects | Four Way Engineers',
  description: 'Industrial case studies for fire safety upgrades, LPG pipeline manifolds, fabrication, and AMC delivery across Haridwar and North India.',
};

const caseStudies = [
  {
    industry: 'Pharma',
    title: 'Pharma plant fire hydrant network upgrade',
    problem: 'The production block had low wet riser pressure and incomplete hydrant coverage, exposing the facility to audit risk during the fire department inspection.',
    solution: 'Reconfigured the wet riser network, replaced damaged hydrant valves, and installed pressure gauges with a central monitoring panel.',
    result: 'Delivered compliant hydrant pressure across all floors and supported a successful audit with documented test records.',
  },
  {
    industry: 'Manufacturing',
    title: 'Automotive supplier LPG manifold installation',
    problem: 'The welding unit experienced LPG pressure fluctuations and manual changeover that caused production stoppages and unsafe handling.',
    solution: 'Engineered a stainless-steel LPG manifold with auto switch-over regulators, leak-proof joints and safety interlocks.',
    result: 'Stabilized gas pressure, reduced unscheduled downtime, and improved operator safety during fuel changeover.',
  },
  {
    industry: 'Warehouse',
    title: 'Cold storage warehouse fire protection retrofit',
    problem: 'Existing fire detection did not cover high-rack cold storage zones, leaving stored goods exposed to delayed response.',
    solution: 'Installed addressable smoke detection, additional extinguishers and remote annunciation linked to the control room.',
    result: 'Reduced detection time, improved zone coverage and met local fire department requirements for warehouse storage.',
  },
  {
    industry: 'Chemical',
    title: 'Chemical packaging unit gas pipeline replacement',
    problem: 'Corroded gas lines and poorly documented routing created leak risk and complicated maintenance activities.',
    solution: 'Replaced the pipeline with coated carbon steel and stainless steel runs, installed shut-off valves and produced full as-built documentation.',
    result: 'Improved pipeline integrity, simplified maintenance access and provided a clean record for PESO compliance.',
  },
  {
    industry: 'Manufacturing',
    title: 'FMCG factory extinguisher AMC rollout',
    problem: 'The factory had inconsistent extinguisher servicing and no centralized tracking for refilling or inspection dates.',
    solution: 'Implemented an AMC plan with scheduled extinguisher checks, refilling services, tagging and a digital service log.',
    result: 'Created a reliable maintenance cycle, reduced non-compliance incidents, and ensured readiness for audits.',
  },
];

export default function ProjectsPage() {
  return (
    <section className="section-container space-y-12">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-neutral">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold text-primary">Industrial case studies with measurable safety and operational outcomes</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Our field experience is anchored in real plant installations, gas pipeline projects and maintenance programs for Haridwar and North India facilities.
        </p>
      </div>
      <div className="grid gap-8">
        {caseStudies.map((project) => (
          <div key={project.title} className="rounded-xl border border-border bg-white p-8 shadow-card">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="rounded-lg bg-surface px-4 py-2 text-sm font-semibold text-primary">{project.industry}</span>
              <h2 className="text-2xl font-semibold text-primary">{project.title}</h2>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-primary">Problem</h3>
                <p className="mt-3 text-sm leading-7 text-neutral">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Solution</h3>
                <p className="mt-3 text-sm leading-7 text-neutral">{project.solution}</p>
              </div>
            </div>
            <div className="mt-6 rounded-xl bg-surface p-6">
              <h3 className="text-lg font-semibold text-primary">Result</h3>
              <p className="mt-3 text-sm leading-7 text-neutral">{project.result}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-accent p-10 text-white shadow-card">
        <h2 className="text-3xl font-semibold">Need the same level of execution for your site?</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90">
          Request a site inspection and our engineers will assess your plant, identify compliance and operational risks, and recommend a precise execution plan.
        </p>
        <Link href="/request-quote" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 text-sm font-semibold text-accent transition hover:bg-slate-100">
          Book inspection
        </Link>
      </div>
    </section>
  );
}
