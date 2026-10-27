import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Icon } from "@/components/icon"
import { achievements } from "@/lib/portfolio-data"

export function Achievements() {
  return (
    <Section id="highlights">
      <SectionHeading
        index="05"
        eyebrow="Highlights"
        title="Achievements and technical strengths."
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, i) => (
          <Reveal key={achievement.title} delay={(i % 3) * 0.08} className="bg-background">
            <article className="group h-full p-8 transition-colors duration-300 hover:bg-card">
              <Icon
                name={achievement.icon}
                className="size-6 text-primary transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="mt-6 text-lg font-semibold text-foreground">{achievement.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{achievement.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
