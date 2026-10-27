import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <Section id="projects" className="border-y border-border/60 bg-card/20">
      <SectionHeading
        index="04"
        eyebrow="Featured projects"
        title="Selected work across real-time, data and product."
        description="Full stack applications I've designed and built — each one covering the database, API and interface."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1} className="h-full">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
