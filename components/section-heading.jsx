import { Reveal } from "@/components/reveal"

export function SectionHeading({ eyebrow, index, title, description }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  )
}
