import React from 'react'
import WorkLayout from '../components/layout/WorkLayout'
import FadeIn from '../components/ui/FadeIn'

export default function RomanchePage() {
  return (
    <WorkLayout
      title="Creating Make-Up That Heals @ Romanché"
      subtitle="Traditional makeup prioritises appearance at the expense of skin health. Romanché explores a different idea: cosmetics formulated with active ingredients that nourish, repair, and strengthen the skin while being worn."
      status="In Development"
      role="Founder & Brand Designer"
      period="2023–Present"
      contextBody="Traditional makeup often prioritises appearance at the expense of skin health. Over time, many products damage or degrade the skin they are meant to enhance. Romanché explores a different idea: cosmetics formulated with active ingredients that nourish, repair, and strengthen the skin while being worn. The goal is simple — makeup that leaves your skin better than it found it."
      roleBody={
        <div className="space-y-7">
          {[
            "The brief was a genuine positioning challenge: the clean beauty market is crowded with brands that communicate health through minimalism and muted palettes. Romanché wanted to be in that space but not look like that space — it needed to feel luxurious, specific, and emotionally resonant without losing credibility as an efficacy-led product.",
            "The design work spanned brand identity, naming, visual language, and packaging — building a system that could hold the tension between luxury aesthetics and active-ingredient credibility. Every decision was tested against one question: does this feel like something a dermatologist and a luxury buyer could both trust?",
            "The pivotal design decision was to own a specific colour territory — one that felt warm, skin-adjacent, and premium rather than the cool neutrals that dominate clean beauty. This single choice created separation in a category where most brands look the same.",
          ].map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">{p}</p>
            </FadeIn>
          ))}
        </div>
      }
      outcomesBody="Brand identity and design system established. Product development underway, with a planned launch into curated retail and DTC channels."
      ctaLine="Working on a brand where the product story and the visual story need to be the same thing? Let's talk."
      nextHref="/work/uxd"
      nextLabel="UXD"
    />
  )
}
