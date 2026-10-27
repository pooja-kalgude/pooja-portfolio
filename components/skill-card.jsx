import { Icon } from "@/components/icon"

export function SkillCard({ title, icon, skills }) {
  return (
    <article className="group h-full rounded-2xl border border-border bg-card/60 p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-card">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
          <Icon name={icon} className="size-5" />
        </span>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-border bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
