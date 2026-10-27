import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { SkillCard } from "@/components/skill-card"
import { Reveal } from "@/components/reveal"
import { skillGroups } from "@/lib/portfolio-data"

export function Skills() {
  return (
    <Section id="skills" className="border-y border-border/60 bg-card/20">
      <SectionHeading
        index="02"
        eyebrow="Technical skills"
        title="A full stack toolkit, chosen for reliability."
        description="The technologies I use daily to design, build and ship production applications."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <SkillCard {...group} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
