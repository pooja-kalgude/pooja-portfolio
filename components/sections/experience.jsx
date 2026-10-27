import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Tag } from "@/components/tag"
import { experience } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Three years of shipping production software."
      />
      <ol className="relative space-y-6 border-l border-border pl-8 md:pl-12">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.role}-${job.period}`} delay={i * 0.1} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-8 -left-[38.5px] flex size-3 items-center justify-center rounded-full bg-primary ring-4 ring-background md:-left-[54.5px]"
            />
            <article className="rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-foreground/20 md:p-8">
              <header className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {job.company} <span className="text-foreground/30">·</span> {job.location}
                  </p>
                </div>
                <p className="font-mono text-sm text-primary">{job.period}</p>
              </header>
              <p className="mt-5 leading-relaxed text-muted-foreground">{job.summary}</p>
              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-foreground/85">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary/70" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
