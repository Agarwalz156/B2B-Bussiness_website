'use client';

import React from "react";
import Link from 'next/link';
import { AnimatedCard, FadeIn } from '@/components/AnimatedCard';
import { TextHighlighter } from '@/components/TextHighlighter';
import { BorderBeam } from '@/components/BorderBeam';
import { HexagonBackground } from '@/components/HexagonPattern';
import { ShimmerButton } from '@/components/ShimmerButton';
import { RainbowButton } from '@/components/RainbowButton';

export default function AboutPage() {
  return (
    <section className="section-container space-y-16 py-16">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
        <FadeIn direction="left" className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold animate-pulse">About Four Way Engineers</p>
          <h1 className="text-5xl font-bold text-primary leading-tight">
            Industrial <TextHighlighter>fire safety</TextHighlighter>, gas manifold and fabrication engineering from <TextHighlighter>Haridwar</TextHighlighter>
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Four Way Engineers is a Haridwar-based industrial engineering firm providing fire safety systems, LPG and industrial gas pipelines, fabrication, ventilation and welding service support. Our offices are located at Office L-9, Shivalik Nagar, BHEL, Haridwar and Shop B-14 Shopping Complex, Shivalik Nagar.
          </p>
          <p className="max-w-3xl text-sm leading-7 text-slate-700">
            We deliver turnkey civil and mechanical projects, manufacture gas manifolds, and provide AMC contracts for fire safety systems, hydrant lines and gas manifold installations.
          </p>
          <div className="flex gap-4 pt-4">
            <ShimmerButton href="/contact">
              Get In Touch
            </ShimmerButton>
            <RainbowButton href="/services">
              Our Services
            </RainbowButton>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={200}>
          <BorderBeam className="rounded-xl bg-white p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Regional capability</p>
                <h2 className="mt-4 text-3xl font-bold text-primary">Haridwar headquarters with North India industrial reach</h2>
                <p className="mt-4 text-sm leading-7 text-neutral">
                  We serve manufacturing, pharmaceutical, warehousing and automotive clients across Uttarakhand, UP, Delhi NCR, Haryana and Punjab with responsive local engineering and execution.
                </p>
              </div>

              <div className="space-y-3 text-sm text-neutral">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <p>250+ industrial clients, including BHEL, Air Liquide, Honeywell, Suzuki and Mahindra</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <p>Fire safety, gas piping and fabrication capability under one roof</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <p>AMC delivery, inspection reporting and compliance documentation</p>
                </div>
              </div>
            </div>
          </BorderBeam>
        </FadeIn>
      </div>

      <HexagonBackground className="rounded-2xl p-12">
        <div className="grid gap-8 lg:grid-cols-3 relative z-10">
          <FadeIn delay={100}>
            <AnimatedCard className="h-full hover:border-accent transition-all duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-xl font-bold">🏗️</span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Company foundation</h2>
                <p className="text-sm leading-7 text-neutral">
                  Our growth is driven by three priorities: quality, service and safety. Our team includes trained engineers and welders capable of handling varied industrial installation and fabrication work.
                </p>
              </div>
            </AnimatedCard>
          </FadeIn>

          <FadeIn delay={200}>
            <AnimatedCard className="h-full hover:border-accent transition-all duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-xl font-bold">🔧</span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Manufacturing and fabrication</h2>
                <p className="text-sm leading-7 text-neutral">
                  We produce gas equipment, LPG manifolds, MS/SS receivers and custom fabricated components for process piping, exhaust systems and ventilation ducts.
                </p>
              </div>
            </AnimatedCard>
          </FadeIn>

          <FadeIn delay={300}>
            <AnimatedCard className="h-full hover:border-accent transition-all duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-green-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-xl font-bold">🛡️</span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Annual maintenance contracts</h2>
                <p className="text-sm leading-7 text-neutral">
                  Our AMC plans cover fire safety systems, hydrant lines, gas manifolds and allied equipment with scheduled inspections, testing and service reporting.
                </p>
              </div>
            </AnimatedCard>
          </FadeIn>
        </div>
      </HexagonBackground>

      {/* Experience Timeline */}
      <div className="space-y-8">
        <FadeIn>
          <h2 className="text-4xl font-bold text-primary text-center">25+ Years of Industrial Excellence</h2>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn direction="left" delay={100}>
            <AnimatedCard>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">1999 - Foundation</h3>
                <p className="text-neutral mb-4">Established in Haridwar with focus on industrial fire safety and gas pipeline engineering.</p>
                <div className="w-full bg-surface rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full animate-pulse" style={{width: '25%'}} />
                </div>
              </div>
            </AnimatedCard>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <AnimatedCard>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">2010 - Expansion</h3>
                <p className="text-neutral mb-4">Expanded fabrication capabilities and AMC services across North India.</p>
                <div className="w-full bg-surface rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full animate-pulse" style={{width: '50%'}} />
                </div>
              </div>
            </AnimatedCard>
          </FadeIn>

          <FadeIn direction="left" delay={300}>
            <AnimatedCard>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">2020 - Digital Transformation</h3>
                <p className="text-neutral mb-4">Implemented modern engineering practices and digital documentation systems.</p>
                <div className="w-full bg-surface rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full animate-pulse" style={{width: '75%'}} />
                </div>
              </div>
            </AnimatedCard>
          </FadeIn>

          <FadeIn direction="right" delay={400}>
            <AnimatedCard>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">2024 - Innovation</h3>
                <p className="text-neutral mb-4">Leading industrial safety solutions with cutting-edge technology and expertise.</p>
                <div className="w-full bg-surface rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full animate-pulse" style={{width: '100%'}} />
                </div>
              </div>
            </AnimatedCard>
          </FadeIn>
        </div>
      </div>

      {/* Call to Action */}
      <FadeIn delay={500}>
        <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner with Four Way Engineers?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your industrial safety and engineering requirements. Our team is ready to provide expert consultation and solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <ShimmerButton href="/contact">
              Contact Us Today
            </ShimmerButton>
            <Link href="/request-quote" className="rounded-lg border-2 border-white px-7 py-4 text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Request Quote
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
