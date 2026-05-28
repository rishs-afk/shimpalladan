import { Link } from 'react-router-dom'
import SectionLabel from '../components/ui/SectionLabel'
import AnimatedHeading from '../components/ui/AnimatedHeading'
import FadeIn from '../components/ui/FadeIn'
import StatCounter from '../components/ui/StatCounter'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Opening statement */}
      <section className="px-6 lg:px-12 py-20 lg:py-32 border-b border-white/[0.05]">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <SectionLabel number="About" label="Shim Palladan" />
          </motion.div>
          <AnimatedHeading
            className="font-display font-light text-tp tracking-[-0.015em] leading-[1.28] max-w-5xl"
            style={{ fontSize: 'clamp(26px, 3.5vw, 50px)' } as React.CSSProperties}
            as="h1">
            I design the systems behind the things that matter — from the architecture of autonomous defence infrastructure to the logic of how people make better decisions about their own lives.
          </AnimatedHeading>
        </div>
      </section>

      {/* Biography */}
      <section className="px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3"><SectionLabel number="01" label="Biography" /></div>
          <div className="lg:col-span-9 space-y-7">
            {[
              "I design and build things that make life safer and better. Today that ranges from autonomous airspace systems to tools for professional and personal growth.",
              "Most of my work circles one idea: how can technology help people live more intentional lives? So I follow that question — across industries, disciplines, and scales — wherever it goes.",
              "The range is not distraction. Every problem I've worked on — whether it's the visual language of a defence system, the network architecture of an expert marketplace, or the packaging of a product someone picks up in a store — has been a version of the same problem: what does the system need to communicate, and to whom, and why does that matter? That question does not change by industry. The context does.",
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">{p}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="px-6 lg:px-12 py-20 lg:py-32 border-y border-white/[0.05]" style={{ background: 'rgba(13,13,20,0.4)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3"><SectionLabel number="02" label="How I Work" /></div>
          <div className="lg:col-span-9">
            <AnimatedHeading
              className="font-display font-light text-tp tracking-[-0.01em] leading-[1.2] mb-10"
              style={{ fontSize: 'clamp(26px, 3.2vw, 44px)' } as React.CSSProperties}
              as="h2">
              How I work
            </AnimatedHeading>
            <div className="space-y-7">
              {[
                "I work selectively and at depth. Most engagements are either advisory — where I come in at the strategy level and help a team think through a product or brand problem before they build — or collaborative, where I am embedded as a design and product partner across the life of a project. I do not take on executional-only work.",
                "What I bring to a project is not a process. It is a way of asking questions that most design engagements skip. Before anything is designed, I want to understand what the thing is for, who it is for, and what success looks like at a level of specificity that makes the design decisions obvious rather than arbitrary.",
                "The engagements I find most useful are with founders and product leaders who are working on something genuinely hard — where the design challenge and the strategic challenge are the same challenge. If you already know exactly what you need built and just need someone to build it, I am probably not the right fit.",
              ].map((p, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">{p}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <FadeIn className="grid grid-cols-3 gap-8 pb-16 mb-16 border-b border-white/[0.05]">
            <StatCounter value="20+" label="Years Building" sub="Products" />
            <StatCounter value="450+" label="Projects at UXD" sub="Since 2012" />
            <StatCounter value="∞" label="In Pursuit of" sub="a Better Life" />
          </FadeIn>

          {/* Testimonials placeholder */}
          <FadeIn className="border border-white/[0.06] p-8 lg:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-tt mb-5">Testimonials</p>
            <p className="font-display italic font-light text-[24px] text-ts leading-[1.5]">
              "Coming soon — sourcing from clients and collaborators across Indrajaal, UXD, and ExpertlyYours."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.05]" style={{ background: 'rgba(13,13,20,0.4)' }}>
        <div className="max-w-screen-xl mx-auto">
          <FadeIn><p className="font-sans font-light text-[17px] text-ts mb-8">If this sounds like the kind of partnership you're looking for:</p></FadeIn>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.12em] bg-gold text-bg-primary px-8 py-4 hover:bg-gold/85 transition-colors duration-300">
              Start a conversation →
            </Link>
            <Link to="/work/indrajaal" className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ts border border-white/[0.1] hover:border-gold/25 hover:text-gold px-8 py-4 transition-all duration-300">
              Or see the work first →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import React from 'react'
