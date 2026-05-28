import React from 'react'
import WorkLayout from '../components/layout/WorkLayout'
import FadeIn from '../components/ui/FadeIn'
import SectionLabel from '../components/ui/SectionLabel'
import AnimatedHeading from '../components/ui/AnimatedHeading'

const argument = [
  "AI is rapidly changing how companies are built. Tasks that once required teams of junior employees are increasingly automated. Founders can now move much further on their own — sometimes with just a small team and a set of powerful tools.",
  "But once the basics are handled, a different challenge appears. Execution becomes easier. Judgment becomes harder. That is where expertise matters.",
  "ExpertlyYours is designed around this shift. Instead of hiring large teams or navigating the noise of traditional professional networks, founders can access experienced specialists exactly when they need them — product leaders, growth operators, technical architects, financial strategists, and domain experts.",
  "In a world where AI amplifies execution, the real advantage will belong to those who can combine speed with experienced judgment. ExpertlyYours exists to make that possible.",
]

export default function ExpertlyYoursPage() {
  return (
    <WorkLayout
      title="Building Expert Networks @ ExpertlyYours"
      subtitle="As AI handles more of the execution, expertise becomes the new bottleneck. ExpertlyYours is a curated network where founders can connect with experienced operators for focused guidance, collaboration, and decision support."
      status="In Development"
      role="Founder & Designer"
      period="2024–Present"
      contextBody={
        <div className="space-y-5">
          {argument.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">{p}</p>
            </FadeIn>
          ))}
        </div>
      }
      roleBody={
        <div className="space-y-7">
          {[
            "I founded ExpertlyYours and designed it from the ground up — the product concept, the network architecture, the UX of how experts are matched to founder needs, and the brand system that positions it in a crowded market of professional networks and fractional hiring platforms.",
            "The core design challenge was distinguishing ExpertlyYours from two categories it is not: LinkedIn (too broad, too noisy) and traditional consulting (too expensive, too slow). The product had to feel curated without feeling exclusive, and accessible without feeling like a marketplace. The UX decisions were all made in service of that tension.",
            "The key decision was to design around the conversation, not the credential. Most expert networks foreground who the expert is. ExpertlyYours foregrounds what the founder needs to figure out. That inversion changed the entire IA and matching logic of the product.",
          ].map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="font-sans font-light text-[17px] leading-[1.9] text-ts">{p}</p>
            </FadeIn>
          ))}
        </div>
      }
      outcomesBody="Currently in development — onboarding domain experts, refining the matching model, and building toward a curated launch with founding members."
      ctaLine="Building a product where the design problem and the business problem are the same thing? That's the work I like."
      nextHref="/work/romanche"
      nextLabel="Romanché"
    />
  )
}
