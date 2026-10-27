import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { aboutFacts, aboutParagraphs } from "@/lib/portfolio-data"

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <SectionHeading index="01" eyebrow="About" title="Building products people rely on, end to end." />
          <div className="space-y-6">
            {aboutParagraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="lg:pt-24">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {aboutFacts.map((fact) => (
              <div key={fact.label} className="bg-card p-6">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</dt>
                <dd className="mt-2 text-lg font-medium text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
