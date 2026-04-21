import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Four Way Engineers | Industrial Fire Safety & Gas Pipeline Solutions',
  description: 'Four Way Engineers provides fire safety systems, gas pipeline engineering, AMC services, and industrial fabrication across Haridwar and North India.',
};

import Link from 'next/link';

import { LeadForm } from '@/components/LeadForm';
import { ServiceCard } from '@/components/ServiceCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ShimmerButton } from '@/components/ShimmerButton';
import { RainbowButton } from '@/components/RainbowButton';
import { PulsatingButton } from '@/components/PulsatingButton';
import { TextHighlighter, HighlightedText } from '@/components/TextHighlighter';
import { AnimatedCard, FadeIn } from '@/components/AnimatedCard';
import { AnimatedCircularBar } from '@/components/AnimatedCircularBar';
import { HexagonBackground } from '@/components/HexagonPattern';
import { BorderBeam } from '@/components/BorderBeam';
import { StickyCTA } from '@/components/StickyCTA';

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
      {/* Hero Section */}
      <section className="bg-surface relative overflow-hidden">
        <div className="section-container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center py-16">
          <FadeIn className="max-w-2xl" direction="left">
            <p className="mb-4 inline-flex rounded-lg bg-white border border-border px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent hover:shadow-md transition-all duration-300 animate-bounce-slow">
              25+ years industrial engineering
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-primary sm:text-5xl lg:text-6xl">
              <TextHighlighter color="#D62828">Fire safety</TextHighlighter> and 
              <TextHighlighter color="#D62828"> gas pipeline </TextHighlighter>solutions for Haridwar and North India industrial sites
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral">
              Four Way Engineers supports factory managers, safety officers and procurement teams with engineered fire protection, LPG/industrial gas distribution and AMC delivery for process plants and heavy industry.
            </p>
            
            {/* Stats Cards with Animations */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AnimatedCard className="hover:border-accent" delay={100}>
                <div className="p-4">
                  <p className="text-sm font-semibold text-accent">25+ Years</p>
                  <p className="text-lg font-bold text-primary">Experience</p>
                </div>
              </AnimatedCard>
              <AnimatedCard className="hover:border-accent" delay={200}>
                <div className="p-4">
                  <p className="text-sm font-semibold text-accent">250+ Clients</p>
                  <p className="text-lg font-bold text-primary">Served</p>
                </div>
              </AnimatedCard>
              <AnimatedCard className="hover:border-accent" delay={300}>
                <div className="p-4">
                  <p className="text-sm font-semibold text-accent">Free Inspection</p>
                  <p className="text-xs font-bold text-primary">Haridwar & Nearby</p>
                </div>
              </AnimatedCard>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <ShimmerButton href="/request-quote">
                Request Site Inspection
              </ShimmerButton>
              <PulsatingButton href="tel:+919837476323" variant="primary">
                📞 Call +91 98374 76323
              </PulsatingButton>
            </div>
          </FadeIn>

          {/* Right Side Card with Border Beam */}
          <FadeIn direction="right" delay={200}>
            <BorderBeam className="rounded-xl bg-white p-10 shadow-lg">
              <div className="grid gap-6">
                <div className="rounded-lg bg-gradient-to-br from-surface to-white p-6 hover:shadow-md transition-all duration-300">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Inspection-ready service</p>
                  <h2 className="mt-4 text-2xl font-semibold text-primary">Schedule an industrial site review today</h2>
                  <p className="mt-3 text-sm leading-7 text-neutral">
                    Our engineers verify risk, compliance and installation scope so you can approve work with confidence.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {proofItems.slice(0, 2).map((item, idx) => (
                    <AnimatedCard key={item.label} delay={300 + idx * 100}>
                      <div className="p-5">
                        <p className="text-3xl font-bold text-accent">{item.value}</p>
                        <p className="mt-2 text-sm text-neutral">{item.label}</p>
                      </div>
                    </AnimatedCard>
                  ))}
                  <AnimatedCard delay={500} className="sm:col-span-2">
                    <div className="p-5">
                      <p className="text-3xl font-bold text-accent">{proofItems[2].value}</p>
                      <p className="mt-2 text-sm text-neutral">{proofItems[2].label}</p>
                    </div>
                  </AnimatedCard>
                </div>
              </div>
            </BorderBeam>
          </FadeIn>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="section-container py-10">
        <AnimatedCard className="border-accent/20">
          <div className="p-8">
            <h2 className="text-xl font-semibold text-primary">Trusted by 250+ industrial operations</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {['BHEL Haridwar', 'Air Liquide', 'Suzuki Motorcycle', 'Honeywell', 'Mahindra & Mahindra'].map((client, idx) => (
                <div 
                  key={client} 
                  className="rounded-lg border border-border bg-gradient-to-br from-white to-surface px-5 py-4 text-center text-sm font-semibold text-primary hover:border-accent hover:shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>
      </section>

      {/* Services Section */}
      <section className="section-container py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeIn direction="left">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Core services</p>
            <h2 className="mt-4 text-3xl font-bold text-primary">
              A single partner for <TextHighlighter>fire safety</TextHighlighter>, gas pipeline systems and industrial maintenance
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral">
              Every service is built for decision-makers who need dependable systems, clear compliance and responsive execution across Haridwar and North India.
            </p>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, idx) => (
              <ServiceCard 
                key={service.title} 
                title={service.title} 
                description={service.description}
                delay={idx * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA After Services */}
      <section className="section-container py-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl">
        <div className="text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary mb-4">Ready for a professional site inspection?</h2>
            <p className="text-neutral mb-8 max-w-2xl mx-auto leading-7">
              Get expert analysis of your fire safety and gas pipeline needs with no obligation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <ShimmerButton href="/request-quote">
                Schedule Inspection
              </ShimmerButton>
              <PulsatingButton href="tel:+919837476323" variant="primary">
                Call Now
              </PulsatingButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Us Section */}
      <HexagonBackground className="section-container bg-gradient-to-br from-surface via-white to-surface rounded-2xl py-16 px-8 my-16">
        <div className="grid gap-10 lg:grid-cols-2 relative z-10">
          <FadeIn direction="left">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Why Four Way Engineers</p>
            <h2 className="mt-4 text-3xl font-bold text-primary">Proven industrial execution with <TextHighlighter>compliance-first</TextHighlighter> delivery</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral">
              We combine technical discipline, local delivery and documentation support so plant leaders can onboard a partner with confidence.
            </p>
          </FadeIn>
          <div className="grid gap-4">
            {[
              { title: '25+ years of engineering practice', desc: 'Consistent delivery for fire systems, pipeline projects and maintenance contracts since 1999.' },
              { title: 'Single-source responsibility', desc: 'Design, installation, commissioning and handover from one experienced team.' },
              { title: 'Regional safety expertise', desc: 'Haridwar-based execution with knowledge of Uttarakhand and North India industrial standards.' },
            ].map((item, idx) => (
              <AnimatedCard key={item.title} delay={idx * 150}>
                <div className="p-6 hover:bg-accent/5 transition-colors duration-300">
                  <p className="font-semibold text-primary hover:text-accent transition-colors">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-neutral">{item.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </HexagonBackground>

      {/* Testimonials Section */}
      <section className="section-container py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <FadeIn direction="left">
            <AnimatedCard>
              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Project verification</p>
                <h2 className="mt-4 text-2xl font-bold text-primary">Industrial case study and results</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral">
                  We help plant operators reduce failure points, meet audits, and keep production on schedule through practical engineering and disciplined delivery.
                </p>
              </div>
            </AnimatedCard>
          </FadeIn>
          <div className="grid gap-4">
            {testimonials.map((testimonial, idx) => (
              <AnimatedCard key={testimonial.name} delay={idx * 100}>
                <div className="p-6 hover:bg-accent/5 transition-colors duration-300">
                  <p className="text-sm leading-7 text-slate-700 italic">"{testimonial.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-accent">{testimonial.name}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="section-container py-16">
        <BorderBeam className="bg-gradient-to-br from-white to-surface p-10 rounded-xl shadow-lg">
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-primary mb-4">Don't wait for an emergency</h2>
              <p className="text-neutral mb-8 max-w-2xl mx-auto leading-7">
                Proactive industrial safety planning prevents costly downtime and ensures compliance.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <RainbowButton href="/request-quote">
                  Get Safety Assessment
                </RainbowButton>
                <ShimmerButton href="https://wa.me/919837476323" target="_blank" rel="noreferrer">
                  WhatsApp Us
                </ShimmerButton>
              </div>
            </FadeIn>
          </div>
        </BorderBeam>
      </section>

      {/* Certifications Section */}
      <section className="section-container py-16">
        <HexagonBackground className="bg-white rounded-2xl p-10 shadow-lg">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center relative z-10">
            <FadeIn direction="left">
              <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Certifications & compliance</p>
              <h2 className="mt-4 text-2xl font-bold text-primary">Documentation and standards for <TextHighlighter>industrial audits</TextHighlighter></h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral">
                Our delivery includes compliance documentation for fire and gas systems, and structured maintenance records for annual safety reviews.
              </p>
            </FadeIn>
            <div className="grid gap-4">
              {certifications.map((item, idx) => (
                <AnimatedCard key={item} delay={idx * 100}>
                  <div className="p-6 hover:border-accent transition-all duration-300">
                    <p className="font-semibold text-primary group-hover:text-accent">{item}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </HexagonBackground>
      </section>

      {/* FAQ Section */}
      <section className="section-container py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn direction="left">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Frequently asked questions</p>
            <h2 className="mt-4 text-3xl font-bold text-primary">Common questions about our industrial services</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral">
              Get answers to the most common questions about our fire safety, gas pipeline, and maintenance services.
            </p>
          </FadeIn>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly can you respond to an emergency?',
                a: 'We provide 24-hour emergency response for critical fire safety and gas system issues across Haridwar and North India.'
              },
              {
                q: 'Do you provide AMC contracts?',
                a: 'Yes, we offer comprehensive Annual Maintenance Contracts for fire systems, gas manifolds, and industrial equipment.'
              },
              {
                q: 'What certifications do you hold?',
                a: 'We maintain ISO 9001 quality certification, PESO compliance, and fire department inspection readiness standards.'
              },
              {
                q: 'Do you serve areas outside Haridwar?',
                a: 'Yes, we serve industrial clients across Uttarakhand, UP, Delhi NCR, Haryana, and Punjab with local engineering support.'
              }
            ].map((faq, idx) => (
              <AnimatedCard key={faq.q} delay={idx * 100}>
                <div className="p-6 hover:bg-accent/5 transition-colors duration-300">
                  <p className="font-semibold text-primary">{faq.q}</p>
                  <p className="mt-2 text-sm leading-7 text-neutral">{faq.a}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section-container py-16 bg-gradient-to-br from-surface to-white rounded-2xl">
        <div className="text-center">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Industry insights</p>
            <h2 className="mt-4 text-3xl font-bold text-primary">Latest updates on industrial safety and engineering</h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-neutral mb-8">
              Stay informed with our latest articles on fire safety regulations, gas pipeline best practices, and industrial maintenance tips.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  title: 'Fire Safety Compliance for 2024',
                  excerpt: 'Understanding the latest regulations and audit requirements for industrial fire systems.',
                  date: 'March 2024'
                },
                {
                  title: 'Gas Pipeline Safety Standards',
                  excerpt: 'Best practices for LPG and industrial gas distribution systems in manufacturing facilities.',
                  date: 'February 2024'
                },
                {
                  title: 'Preventive Maintenance Benefits',
                  excerpt: 'How regular AMC contracts reduce downtime and ensure operational continuity.',
                  date: 'January 2024'
                }
              ].map((post, idx) => (
                <AnimatedCard key={post.title} delay={idx * 100}>
                  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs text-accent font-semibold">{post.date}</p>
                    <h3 className="mt-2 text-lg font-semibold text-primary">{post.title}</h3>
                    <p className="mt-2 text-sm text-neutral">{post.excerpt}</p>
                    <Link href="/blog" className="mt-4 inline-block text-accent hover:underline text-sm font-semibold">
                      Read more →
                    </Link>
                  </div>
                </AnimatedCard>
              ))}
            </div>
            <div className="mt-8">
              <ShimmerButton href="/blog">
                View All Articles
              </ShimmerButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="left">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Request inspection</p>
            <h2 className="mt-4 text-3xl font-bold text-primary">
              Get a <TextHighlighter>site inspection</TextHighlighter> from our engineering team
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral">
              Share your requirement and our engineer will contact you within 24 hours.
            </p>
            <div className="mt-6 flex gap-4">
              <RainbowButton href="/request-quote">
                📋 Request Inspection
              </RainbowButton>
              <ShimmerButton href="https://wa.me/919837476323" target="_blank" rel="noreferrer">
                💬 Message on WhatsApp
              </ShimmerButton>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={200}>
            <BorderBeam className="bg-gradient-to-br from-surface to-white p-10 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <p className="font-semibold text-primary">Fast response within 24 hours</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <p className="font-semibold text-primary">Expert site analysis included</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <p className="font-semibold text-primary">Complimentary quote generation</p>
                </div>
              </div>
            </BorderBeam>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container py-16 bg-gradient-to-r from-primary via-primary to-accent rounded-2xl text-white text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">Ready to improve your industrial safety?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-7">
            Connect with Four Way Engineers today for a complimentary site inspection and tailored safety solution.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <RainbowButton href="/request-quote">
              Start Your Inspection
            </RainbowButton>
            <button className="rounded-lg border-2 border-white px-7 py-4 text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Call +91 98374 76323
            </button>
          </div>
        </FadeIn>
      </section>

      <StickyCTA />
    </>
  );
}
