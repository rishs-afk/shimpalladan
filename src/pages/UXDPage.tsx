import React from 'react'
import WorkLayout from '../components/layout/WorkLayout'
import FadeIn from '../components/ui/FadeIn'

const services = [
  { title: 'Design & Development', desc: 'End-to-end product and UX/UI design for enterprise SaaS, mobile apps, and digital platforms.' },
  { title: 'Strategy & Consulting', desc: 'Defining product-market fit, value propositions, and AI-first product opportunities.' },
  { title: 'Audit & Advisory', desc: 'Deep UX audits of complex systems with actionable recommendations to improve usability and performance.' },
]

export default function UXDPage() {
  return (
    <WorkLayout
      title="Product & Business Design @ UXD"
      subtitle="UX Design Labs (uxdesignlabs.com) is an AI-first product design and development studio that has delivered 450+ projects since 2012 — from enterprise SaaS to mobile apps, web platforms, and autonomous systems."
      status="Active"
      role="Founder & Principal Designer"
      period="2012–Present"
      contextBody={
        <div className="space-y-8">
          <FadeIn>
            <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">
              UXD works at the intersection of product strategy, design, and execution — helping companies go from vague ideas to scalable, market-ready products. The core philosophy: traditional design is no longer enough. UXD integrates AI, product thinking, and systems-level design to help businesses move faster, make better decisions, and build products that actually scale.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6" style={{ background: '#09090E' }}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold/60 mb-3">0{i + 1}</p>
                  <h3 className="font-display font-light text-[20px] text-tp mb-2">{s.title}</h3>
                  <p className="font-sans font-light text-[14px] leading-[1.8] text-ts">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      }
      roleBody={
        <div className="space-y-7">
          {[
            "I founded UXD in 2012 and have led the studio as principal designer and strategic director since. Over that time the studio has delivered more than 450 projects across enterprise SaaS, mobile, defence, consumer tech, and B2B platforms.",
            "Most engagements begin with a strategy problem that has been framed as a design problem. A client comes with a product that is not converting, or an interface that is not adopted, or a system that has grown too complex for users to navigate. My job is to find the underlying logic that is missing — not to make the surface more attractive, but to redesign the decision that produced the surface.",
            "The studio now operates AI-first — not as a feature, but as a lens. Every engagement begins with the question: where can intelligent automation change what this product can be?",
          ].map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">{p}</p>
            </FadeIn>
          ))}
        </div>
      }
      outcomesBody="Over fourteen years, the work has produced measurable outcomes across the full stack of product design — from interfaces that reduced support ticket volume to systems that enabled new product categories to design decisions that changed the way a company thought about its own users. 450+ projects. Enterprise SaaS · Defence Technology · Consumer Mobile · B2B Platforms."
      ctaLine="Looking for a design partner with the experience to work at this level? Let's talk about what you're building."
      nextHref="/about"
      nextLabel="About Shim"
    />
  )
}
