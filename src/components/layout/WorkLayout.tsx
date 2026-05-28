import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import AnimatedHeading from '../ui/AnimatedHeading'
import FadeIn from '../ui/FadeIn'

interface WorkLayoutProps {
  title: string
  subtitle: string
  status: string
  role: string
  period: string
  contextBody: string | React.ReactNode
  roleBody: React.ReactNode
  outcomesBody: string | React.ReactNode
  extraSection?: React.ReactNode
  nextHref: string
  nextLabel: string
  ctaLine: string
}

import React from 'react'

export default function WorkLayout({
  title, subtitle, status, role, period,
  contextBody, roleBody, outcomesBody, extraSection,
  nextHref, nextLabel, ctaLine,
}: WorkLayoutProps) {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="px-6 lg:px-12 py-20 lg:py-32 border-b border-white/[0.05]">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2.5 mb-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-tt border border-white/[0.07] px-3 py-1.5">{status}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold/65 border border-gold/20 px-3 py-1.5">{role}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-tt border border-white/[0.07] px-3 py-1.5">{period}</span>
          </motion.div>
          <AnimatedHeading
            className="font-display font-light text-tp tracking-[-0.02em] leading-[1.08] mb-8 max-w-5xl"
            style={{ fontSize: 'clamp(34px, 5vw, 68px)' } as React.CSSProperties}
            as="h1">
            {title}
          </AnimatedHeading>
          <FadeIn delay={0.3} className="max-w-3xl">
            <p className="font-display italic font-light text-ts leading-[1.55]" style={{ fontSize: 'clamp(17px, 2vw, 26px)' }}>
              {subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Context */}
      <section className="px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3"><SectionLabel number="Context" /></div>
          <div className="lg:col-span-9">
            <FadeIn>
              {typeof contextBody === 'string'
                ? <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">{contextBody}</p>
                : contextBody}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="px-6 lg:px-12 py-20 lg:py-28 border-y border-white/[0.05]" style={{ background: 'rgba(13,13,20,0.4)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3"><SectionLabel number="My Role" /></div>
          <div className="lg:col-span-9">{roleBody}</div>
        </div>
      </section>

      {extraSection}

      {/* Outcomes */}
      <section className="px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3"><SectionLabel number="Outcomes" /></div>
          <div className="lg:col-span-9">
            <FadeIn>
              {typeof outcomesBody === 'string'
                ? <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">{outcomesBody}</p>
                : outcomesBody}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="px-6 lg:px-12 py-16 border-t border-white/[0.05]" style={{ background: 'rgba(13,13,20,0.4)' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <FadeIn><p className="font-sans font-light text-[16px] text-ts mb-5">{ctaLine}</p></FadeIn>
            <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.12em] bg-gold text-bg-primary px-8 py-4 hover:bg-gold/85 transition-colors duration-300">
              Start a conversation →
            </Link>
          </div>
          <Link to={nextHref} className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ts hover:text-gold transition-colors duration-300">
            Next: {nextLabel}
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
