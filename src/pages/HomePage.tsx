import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionLabel from '../components/ui/SectionLabel'
import AnimatedHeading from '../components/ui/AnimatedHeading'
import FadeIn from '../components/ui/FadeIn'
import StatCounter from '../components/ui/StatCounter'
import ScrollingTicker from '../components/ui/ScrollingTicker'
import shimPortrait from '../shim-portrait.png'

const TICKER = ['Autonomous Airspace', 'Intentional Living', 'Expert Networks', 'Make-Up That Heals', 'Product & Business Design']

/* ── Hero ── */
function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0.05, 0.6], [1, 0])
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">

      {/* ── Wordmark + inline nav — behind portrait ── */}
      <motion.div
        style={{ opacity }}
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        {/* SHIM — full viewport width, no padding */}
        <motion.h1
          className="font-sans text-tp leading-none tracking-[-0.04em] whitespace-nowrap w-full text-center select-none"
          style={{ fontSize: '38.5vw', fontWeight: 900, lineHeight: 0.88 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
          SHIM
        </motion.h1>

        {/* Nav row — tight to heading */}
        <motion.div
          className="flex items-center justify-between px-[2.2vw] mt-[-0.6vw] pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}>
          <Link to="/" className="font-sans font-bold text-[30px] uppercase tracking-[0.06em] text-tp hover:text-gold transition-colors duration-300">
            Shim Palladan
          </Link>
          <div className="flex items-center gap-10">
            {[
              { href: '/about', label: 'About' },
              { href: '/work/indrajaal', label: 'Work' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} to={l.href}
                className="font-sans font-bold text-[30px] uppercase tracking-[0.06em] text-tp hover:text-gold transition-colors duration-300">
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Portrait — dead centre, in front of wordmark ── */}
      <motion.div
        style={{ y: imgY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.35 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-20">
        <div className="relative" style={{ width: 'clamp(380px, 52vw, 740px)' }}>
          <img
            src={shimPortrait}
            alt="Shim Palladan"
            className="w-full object-contain"
          />
          {/* Bottom fade only */}
          <div className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
            style={{ background: 'linear-gradient(to top, #09090E 0%, transparent 100%)' }} />
        </div>
      </motion.div>

      {/* ── Bottom metadata — aligned to nav container ── */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-0 left-0 right-0 pb-10 z-30">
        <div className="px-[2.2vw] flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center shrink-0">
            {['Systems Designer', 'AI Product Architect', 'Entrepreneur'].map((tag, i) => (
              <span key={tag} className="flex items-center">
                {i > 0 && <span className="mx-5 text-tt font-light text-[18px]">|</span>}
                <span className="font-sans font-bold text-[13px] uppercase tracking-[0.06em] text-ts whitespace-nowrap">
                  {tag}
                </span>
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex items-center gap-3 shrink-0 mr-[0.7vw]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40 shrink-0" />
            <span className="font-sans font-bold text-[13px] uppercase tracking-[0.06em] text-ts whitespace-nowrap">Bangalore · India</span>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator — centred ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-ts to-transparent" />
      </motion.div>

    </section>
  )
}

/* ── About Intro ── */
function AboutIntro() {
  return (
    <section className="px-6 lg:px-12 py-28 lg:py-40">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <SectionLabel number="01" label="About" />
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-tt">Shim Palladan · 2026</span>
          </div>
          <div className="lg:col-span-10">
            <AnimatedHeading
              className="font-display font-light text-tp tracking-[-0.01em] mb-10 leading-[1.2]"
              style={{ fontSize: 'clamp(30px, 4vw, 52px)' } as React.CSSProperties}
              as="h2">
              I follow a single question wherever it leads.
            </AnimatedHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              <FadeIn delay={0.1}>
                <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">
                  I design and build things that make life safer and better. Today that ranges from autonomous airspace systems to tools for professional and personal growth.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">
                  Most of my work circles one idea: how can technology help people live more intentional lives? So I follow that question — across industries, disciplines, and scales — wherever it goes.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.3} className="border-l-2 border-gold/25 pl-8 py-1">
              <blockquote className="font-display italic font-light text-tp leading-[1.4]"
                style={{ fontSize: 'clamp(20px, 2.8vw, 34px)' }}>
                "The best systems disappear. What's left is a person, thinking more clearly."
              </blockquote>
            </FadeIn>
          </div>
        </div>

        {/* Stats */}
        <FadeIn className="grid grid-cols-3 gap-8 border-t border-white/[0.05] pt-14">
          <StatCounter value="20+" label="Years Building" sub="Products" />
          <StatCounter value="450+" label="Projects at UXD" sub="Since 2012" />
          <StatCounter value="∞" label="In Pursuit of" sub="a Better Life" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ── Current Pursuits ── */
const pursuits = [
  { n: '01', title: 'Defining Airspace Infrastructure', at: 'Indrajaal', desc: "Designing the UX and brand architecture for India's first autonomous drone defence system.", href: '/work/indrajaal' },
  { n: '02', title: 'Building Expert Networks', at: 'ExpertlyYours', desc: 'Execution is getting easier. Judgment is the new bottleneck. ExpertlyYours is designed for that gap.', href: '/work/expertlyyours' },
  { n: '03', title: 'Creating Make-Up That Heals', at: 'Romanché', desc: 'A clean beauty brand built on the premise that makeup should improve the skin it touches.', href: '/work/romanche' },
  { n: '04', title: 'Product & Business Design', at: 'UXD', desc: "450+ products designed. The studio I've run since 2012. Now AI-first.", href: '/work/uxd' },
]

function CurrentPursuits() {
  return (
    <section className="px-6 lg:px-12 py-28 lg:py-40" style={{ background: 'rgba(13,13,20,0.5)' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <div className="lg:w-56 shrink-0">
            <SectionLabel number="02" label="Current Pursuits" />
          </div>
          <div className="flex-1">
            <AnimatedHeading className="font-display font-light text-tp tracking-[-0.02em] mb-6 leading-[1.08]"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)' } as React.CSSProperties} as="h2">
              This is what I do
            </AnimatedHeading>
            <FadeIn>
              <p className="font-sans font-light text-[17px] leading-[1.9] text-ts max-w-xl">
                Four bodies of work that hold most of my time and mind space — each building something that didn't exist before.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {pursuits.map((p, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <Link to={p.href}
                className="group flex flex-col h-full p-8 lg:p-10 transition-all duration-300"
                style={{ background: '#09090E' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#101018'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,165,102,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#09090E' }}>
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-gold/50">{p.n}</span>
                  <span className="font-mono text-[11px] text-tt opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-0.5">→</span>
                </div>
                <div className="mb-4 flex-1">
                  <p className="font-display font-light text-tp leading-[1.2] mb-2" style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}>
                    {p.title}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold/60">@ {p.at}</p>
                </div>
                <p className="font-sans font-light text-[15px] leading-[1.8] text-ts">{p.desc}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Explorations Preview ── */
const explorations = [
  { num: 'EXP / 01', cats: ['AI', 'Clarity'], title: 'True North', sub: 'Organizing Thought, Not Tasks', status: 'In development' },
  { num: 'EXP / 02', cats: ['Identity', 'Behavior'], title: 'Switch', sub: 'Your Identity', status: 'Concept stage' },
  { num: 'EXP / 03', cats: ['Experimental'], title: 'D.R.E.A.M', sub: 'The Science of Manifestation', status: 'Early exploration' },
  { num: 'EXP / 04', cats: ['Productivity'], title: 'Xcout', sub: 'For a Better Life', status: 'Concept stage' },
  { num: 'EXP / 05', cats: ['Vision', 'Growth'], title: 'The Future Self Project', sub: '', status: 'Concept stage' },
]

function ExplorationsPreview() {
  return (
    <section className="px-6 lg:px-12 py-28 lg:py-40">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-2">
            <SectionLabel number="03" label="Explorations" />
          </div>
          <div className="lg:col-span-10">
            <FadeIn>
              <p className="font-sans font-light text-[17px] leading-[1.9] text-ts max-w-3xl">
                The pursuits above take most of my time. But I'm endlessly curious about how AI and new technology reshape the way we think, build, and decide. From time to time I chase small ideas and experiments — sometimes alone, sometimes with other founders. A few may become ventures. Most remain explorations under The Better Life Company.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {explorations.map((e, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Link to="/explorations"
                className="block border border-white/[0.06] p-6 h-full group transition-all duration-300 hover:border-gold/20"
                style={{ background: 'transparent' }}
                onMouseEnter={ev => (ev.currentTarget as HTMLElement).style.background = '#101018'}
                onMouseLeave={ev => (ev.currentTarget as HTMLElement).style.background = 'transparent'}>
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-tt">{e.num}</span>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {e.cats.map(c => (
                      <span key={c} className="font-mono text-[9px] uppercase tracking-[0.08em] text-gold/45 border border-gold/15 px-1.5 py-0.5">{c}</span>
                    ))}
                  </div>
                </div>
                <h3 className="font-display font-light text-[22px] text-tp mb-1">{e.title}</h3>
                {e.sub && <p className="font-sans text-[13px] text-ts mb-3">— {e.sub}</p>}
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-tt">{e.status}</span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="flex justify-center">
          <Link to="/explorations"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-ts hover:text-gold border border-white/[0.08] hover:border-gold/25 px-8 py-3 transition-all duration-300">
            View all explorations
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

/* ── Thesis ── */
function Thesis() {
  return (
    <section className="relative px-6 lg:px-12 py-28 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(200,165,102,0.03) 0%, transparent 60%)' }} />
      <div className="max-w-screen-xl mx-auto relative z-10">
        <FadeIn className="mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-gold/50">Thinking</span>
        </FadeIn>
        <AnimatedHeading
          className="font-display font-light text-tp tracking-[-0.02em] leading-[1.0] mb-4 max-w-5xl"
          style={{ fontSize: 'clamp(44px, 7.5vw, 100px)' } as React.CSSProperties}
          as="h2">
          Technology is no longer the moat.
        </AnimatedHeading>
        <AnimatedHeading
          className="font-display italic font-light text-gold tracking-[-0.02em] leading-[1.0] mb-14 max-w-5xl"
          style={{ fontSize: 'clamp(44px, 7.5vw, 100px)' } as React.CSSProperties}
          delay={0.18}
          as="p">
          Thinking is.
        </AnimatedHeading>
        <div className="max-w-2xl space-y-5">
          <FadeIn delay={0.3}>
            <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">
              Building systems that help people think better, decide better, and live more intentionally.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="font-sans font-light text-[16px] leading-[1.9] text-tt">
              For most of the last thirty years, competitive advantage in technology meant building something others could not build. Speed, scale, infrastructure, talent. The moat was technical. That moat is closing.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="font-sans font-light text-[16px] leading-[1.9] text-tt">
              What is not equally distributed is the quality of the thinking behind them — the clarity of the problem being solved, the precision of the system being designed, the judgment about what to build and what to leave out.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ── Contact CTA ── */
function ContactCTA() {
  return (
    <section className="px-6 lg:px-12 py-28 lg:py-40 border-t border-white/[0.05]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-2">
            <SectionLabel number="05" label="Contact" />
          </div>
          <div className="lg:col-span-10">
            <AnimatedHeading
              className="font-display font-light text-tp tracking-[-0.02em] leading-[1.08] mb-10 max-w-3xl"
              style={{ fontSize: 'clamp(38px, 5.5vw, 80px)' } as React.CSSProperties}
              as="h2">
              Let's build something intentional.
            </AnimatedHeading>
            <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.12em] bg-gold text-bg-primary px-8 py-4 hover:bg-gold/85 transition-colors duration-300">
                Start a conversation
                <span>→</span>
              </Link>
              <a href="mailto:shim@shimpalladan.com"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-gold border border-gold/30 px-8 py-4 hover:bg-gold/[0.07] transition-all duration-300">
                shim@shimpalladan.com
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Page ── */
import React from 'react'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ScrollingTicker items={TICKER} speed={32} />
      <AboutIntro />
      <ScrollingTicker items={TICKER} speed={38} />
      <CurrentPursuits />
      <ExplorationsPreview />
      <Thesis />
      <ContactCTA />
    </main>
  )
}
