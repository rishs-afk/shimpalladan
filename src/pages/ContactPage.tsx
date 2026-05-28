import React from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../components/ui/SectionLabel'
import AnimatedHeading from '../components/ui/AnimatedHeading'
import FadeIn from '../components/ui/FadeIn'

const openTo = [
  { tick: true,  label: 'Advisory roles', desc: 'Thinking partner at the strategy level for founders building AI-native or complex products' },
  { tick: true,  label: 'Consulting engagements', desc: 'Embedded design and product strategy for specific projects or phases' },
  { tick: true,  label: 'Co-building', desc: 'Founding or co-founding ventures where design is the competitive advantage from day one' },
  { tick: true,  label: 'Speaking', desc: 'Conversations, panels, or keynotes on systems design, AI, and human intelligence' },
  { tick: false, label: 'Executional-only design work', desc: 'If you need someone to build to a spec, I am not the right fit' },
]

const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Indrajaal', href: 'https://indrajaal.com' },
  { label: 'Expertly Yours', href: '#' },
  { label: 'UXD', href: 'https://uxdesignlabs.com' },
]

export default function ContactPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="px-6 lg:px-12 py-20 lg:py-32 border-b border-white/[0.05]">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <SectionLabel number="05" label="Contact" />
          </motion.div>
          <AnimatedHeading
            className="font-display font-light text-tp tracking-[-0.02em] leading-[1.05] mb-10 max-w-4xl"
            style={{ fontSize: 'clamp(48px, 7vw, 96px)' } as React.CSSProperties}
            as="h1">
            Let's build something intentional.
          </AnimatedHeading>
          <FadeIn delay={0.3} className="max-w-2xl space-y-5">
            <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">
              I am selectively available for advisory engagements, consulting partnerships, and co-building relationships. I am not available for executional-only design work.
            </p>
            <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">
              The conversations I find most useful are with founders and product leaders working on something where the design problem and the strategy problem are the same problem. If that sounds like where you are, I'd like to hear about it.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 py-20 lg:py-32">
        {/* What I'm open to */}
        <div className="lg:col-span-7">
          <FadeIn className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-tt">What I'm open to</p>
          </FadeIn>
          <div className="space-y-4">
            {openTo.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className={`flex gap-4 p-5 border ${item.tick ? 'border-white/[0.07]' : 'border-white/[0.04] opacity-50'}`}
                  style={{ background: item.tick ? 'rgba(16,16,24,0.5)' : 'transparent' }}>
                  <span className="font-mono text-[13px] mt-0.5 shrink-0" style={{ color: item.tick ? '#C8A566' : '#7A7986' }}>
                    {item.tick ? '✓' : '✕'}
                  </span>
                  <div>
                    <p className="font-sans font-medium text-[15px] text-tp mb-1">{item.label}</p>
                    <p className="font-sans font-light text-[14px] leading-[1.7] text-ts">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Contact details */}
        <div className="lg:col-span-5">
          <div className="space-y-10">
            <FadeIn>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-tt mb-4">Email</p>
                <a href="mailto:shim@shimpalladan.com"
                  className="font-display font-light text-[22px] text-gold hover:text-gold/75 transition-colors duration-300 gold-underline">
                  shim@shimpalladan.com
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-tt mb-3">Phone</p>
                <a href="tel:+919886717530" className="font-sans font-light text-[18px] text-tp hover:text-gold transition-colors duration-300">
                  +91 98867 17530
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-tt mb-3">Location</p>
                <p className="font-sans font-light text-[17px] text-ts">Bangalore, India · Working globally</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-tt mb-4">Links</p>
                <div className="flex flex-wrap gap-4">
                  {links.map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.1em] text-ts hover:text-gold transition-colors duration-300 gold-underline">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Primary CTA */}
            <FadeIn delay={0.3} className="pt-4">
              <a href="mailto:shim@shimpalladan.com"
                className="flex items-center justify-center gap-3 font-mono text-[12px] uppercase tracking-[0.12em] bg-gold text-bg-primary px-8 py-5 hover:bg-gold/85 transition-colors duration-300 w-full text-center">
                Send a message →
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  )
}
