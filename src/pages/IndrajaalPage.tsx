import React from 'react'
import WorkLayout from '../components/layout/WorkLayout'
import FadeIn from '../components/ui/FadeIn'

export default function IndrajaalPage() {
  return (
    <WorkLayout
      title="Defining Airspace Infrastructure @ Indrajaal"
      subtitle="Designing the infrastructure that will manage and secure low-altitude airspace in an increasingly autonomous world."
      status="In Progress"
      role="Head of Design & Marcom"
      period="2022–Present"
      contextBody="As drones and autonomous aerial systems become more common, the skies closer to the ground will become crowded and complex. This work focuses on designing the systems that will manage that environment — enabling safe, intelligent, and secure operation of aerial technologies across defence and civilian applications. It is about building the invisible infrastructure that will allow autonomous airspace to function reliably at scale."
      roleBody={
        <div className="space-y-7">
          {[
            "When I joined Indrajaal, the category did not have a visual language. Counter-drone defence systems were either military-aesthetic — utilitarian, classified — or speculative — cinematic, unreal. Neither was right for a company that needed to speak simultaneously to government defence bodies, enterprise clients, and a public that had never thought about airspace as infrastructure.",
            "My work spanned the full design system: the brand identity and visual language, the UX architecture of the operational command interfaces, the design of public-facing product demonstrations, and the creative direction of investor and marcom materials. The challenge in each case was the same — how do you make something that has never existed before feel credible, precise, and inevitable?",
            "The key design decision was to resist both the military-utilitarian aesthetic and the sci-fi aesthetic that most defence tech defaults to. Instead, we built a visual system that felt like serious infrastructure — precise, legible, and calm under pressure. The palette, the type system, the interface density — all of it was designed to communicate that this technology works, not that it is impressive.",
          ].map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">{p}</p>
            </FadeIn>
          ))}
        </div>
      }
      outcomesBody="The design system is now deployed across Indrajaal's operational command interfaces, investor materials, and public product demonstrations — establishing a visual language for a category of technology that had none when we began."
      ctaLine="Building something in a new category? Let's talk about how to design it."
      nextHref="/work/expertlyyours"
      nextLabel="ExpertlyYours"
    />
  )
}
