import React from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../components/ui/SectionLabel'
import AnimatedHeading from '../components/ui/AnimatedHeading'
import FadeIn from '../components/ui/FadeIn'
import { Link } from 'react-router-dom'

const placeholderAideas = [
  { n: '01', tag: 'Health', title: 'Coming soon', desc: 'Shim is curating the first set of Aideas for this section.' },
  { n: '02', tag: 'Money', title: 'Coming soon', desc: 'Practical AI applications for sharper financial thinking.' },
  { n: '03', tag: 'Decisions', title: 'Coming soon', desc: 'Tools that make the logic behind hard decisions visible.' },
  { n: '04', tag: 'Relationships', title: 'Coming soon', desc: 'Ways to put AI to work on the people-shaped problems.' },
]

export default function ToolkitPage() {
  return (
    <main className="pt-24">
      <section className="px-6 lg:px-12 py-20 lg:py-32 border-b border-white/[0.05]">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <SectionLabel number="04" label="Aideas You Could Use" />
          </motion.div>
          <AnimatedHeading
            className="font-display font-light text-tp tracking-[-0.02em] leading-[1.08] mb-8 max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' } as React.CSSProperties}
            as="h1">
            A small toolkit for a more deliberate life
          </AnimatedHeading>
          <FadeIn delay={0.3} className="max-w-2xl">
            <p className="font-sans font-light text-[17px] leading-[1.9] text-ts mb-3">
              Practical ways to put AI to work on the things that actually move the needle — health, money, relationships, decisions.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-tt italic">
              Note: 'Aideas' is an intentional portmanteau — AI + ideas.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {placeholderAideas.map((a, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border border-white/[0.07] border-dashed p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-[11px] tracking-[0.12em] text-gold/50">{a.n}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-tt border border-white/[0.06] px-2 py-0.5">{a.tag}</span>
                  </div>
                  <h3 className="font-display font-light text-[22px] text-ts mb-2">{a.title}</h3>
                  <p className="font-sans font-light text-[15px] leading-[1.8] text-tt">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Call to action for Shim to fill in */}
          <FadeIn className="border border-gold/15 p-8 lg:p-12 max-w-2xl" style={{ background: 'rgba(200,165,102,0.03)' }}>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold/60 mb-4">In progress</p>
            <p className="font-display italic font-light text-[22px] text-ts leading-[1.5] mb-6">
              Shim is building out this section with specific Aideas — practical, tested applications of AI that have made a measurable difference in how he thinks, decides, and lives.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-gold hover:text-gold/70 transition-colors">
              Want early access? Start a conversation →
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
