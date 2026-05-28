import React from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../components/ui/SectionLabel'
import AnimatedHeading from '../components/ui/AnimatedHeading'
import FadeIn from '../components/ui/FadeIn'
import { Link } from 'react-router-dom'

const cards = [
  {
    num: 'EXP / 01', cats: ['AI', 'Clarity'],
    title: 'True North',
    subtitle: 'Organizing Thought, Not Tasks',
    desc: "The problem isn't task overload — it's thought disorder. An AI that organizes your mind, so your goals can organize themselves.",
    status: 'In development',
  },
  {
    num: 'EXP / 02', cats: ['Identity', 'Behavior'],
    title: 'Switch',
    subtitle: 'Your Identity',
    desc: "Lasting change rarely comes from motivation. It comes from identity — the way people see themselves. A system to redesign that identity through structured habits, reinforcement, and reflective feedback loops.",
    status: 'Concept stage',
  },
  {
    num: 'EXP / 03', cats: ['Experimental'],
    title: 'D.R.E.A.M',
    subtitle: 'The Science of Manifestation',
    desc: "Desire isn't magic — it's the physics of attention. A tool that turns intention into energy, and energy into reality. A fun experiment.",
    status: 'Early exploration',
  },
  {
    num: 'EXP / 04', cats: ['Productivity'],
    title: 'Xcout',
    subtitle: 'For a Better Life',
    desc: "Bookmarking is broken — saved links pile up but never become action. Xcout turns scattered inspiration into structured experiences worth living.",
    status: 'Concept stage',
  },
  {
    num: 'EXP / 05', cats: ['Vision', 'Growth'],
    title: 'The Future Self Project',
    subtitle: '',
    desc: "People don't change by willpower — they change by vision. A system that lets you meet your future self, and move toward it.",
    status: 'Concept stage',
  },
]

export default function ExplorationsPage() {
  return (
    <main className="pt-24">
      <section className="px-6 lg:px-12 py-20 lg:py-32 border-b border-white/[0.05]">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <SectionLabel number="03" label="Explorations" />
          </motion.div>
          <AnimatedHeading
            className="font-display font-light text-tp tracking-[-0.02em] leading-[1.08] mb-8 max-w-3xl"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' } as React.CSSProperties}
            as="h1">
            Experiments under The Better Life Company
          </AnimatedHeading>
          <FadeIn delay={0.3} className="max-w-2xl">
            <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">
              The pursuits above take most of my time. But I'm endlessly curious about how AI and new technology reshape the way we think, build, and decide. From time to time I chase small ideas and experiments — sometimes alone, sometimes with other founders. A few may become ventures. Most remain explorations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((c, i) => (
              <FadeIn key={i} delay={i * 0.08} className="flex">
                <div className="border border-white/[0.07] p-7 flex flex-col w-full transition-all duration-300 hover:border-gold/20"
                  style={{ background: 'transparent' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#101018'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-tt">{c.num}</span>
                    <div className="flex gap-1.5 flex-wrap justify-end">
                      {c.cats.map(cat => (
                        <span key={cat} className="font-mono text-[9px] uppercase tracking-[0.08em] text-gold/45 border border-gold/15 px-1.5 py-0.5">{cat}</span>
                      ))}
                    </div>
                  </div>
                  <h2 className="font-display font-light text-[24px] text-tp mb-1">{c.title}</h2>
                  {c.subtitle && <p className="font-sans text-[13px] text-ts mb-4">— {c.subtitle}</p>}
                  <p className="font-sans font-light text-[15px] leading-[1.8] text-ts flex-1 mb-5">{c.desc}</p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-tt inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/40" />
                    {c.status}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-20 border-t border-white/[0.05]" style={{ background: 'rgba(13,13,20,0.4)' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-6 items-start">
          <div>
            <FadeIn><p className="font-sans font-light text-[17px] text-ts mb-6">Interested in collaborating on one of these? Or have an idea that belongs in this space?</p></FadeIn>
            <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.12em] bg-gold text-bg-primary px-8 py-4 hover:bg-gold/85 transition-colors duration-300">
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
