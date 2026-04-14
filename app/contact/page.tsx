import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';

export default function ContactPage() {
  return (
    <section className="section-container space-y-12">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_0.6fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-primary">Get in touch for inspection, AMC, or large installation work</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Our engineering team is ready to support fire safety and gas pipeline requirements for Haridwar and the northern industrial belt. Call, WhatsApp, or use the form below for fast response.
          </p>
          <div className="mt-10 grid gap-4 rounded-xl bg-white p-8 shadow-card">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral">Phone</p>
              <Link href="tel:+919837476323" className="mt-2 block text-lg font-semibold text-primary">
                +91 98374 76323
              </Link>
              <Link href="tel:+919917149144" className="mt-2 block text-sm text-neutral">
                +91 99171 49144
              </Link>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral">Email</p>
              <Link href="mailto:fourwayengineers@gmail.com" className="mt-2 block text-lg font-semibold text-primary">
                fourwayengineers@gmail.com
              </Link>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral">Office</p>
              <p className="mt-2 text-lg font-semibold text-primary">Office L-9, Shivalik Nagar, BHEL, Haridwar</p>
            </div>
          </div>
        </div>
        <LeadForm defaultHeading="Contact our engineering team" />
      </div>
      <div className="rounded-xl bg-accent p-10 text-white shadow-card">
        <h2 className="text-3xl font-semibold">Need urgent site support?</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90">
          Use the WhatsApp link to speak immediately with a technician about inspection scheduling or emergency industrial safety support.
        </p>
      </div>
    </section>
  );
}