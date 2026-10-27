import { siteConfig } from "@/lib/site-config"

const lines = [
  { key: "role", value: `"${siteConfig.role}"` },
  { key: "experience", value: `"${siteConfig.yearsOfExperience} years"` },
  { key: "frontend", value: '["React", "Next.js", "Tailwind"]' },
  { key: "backend", value: '["Node.js", "Express", "NestJS"]' },
  { key: "data", value: '["MySQL", "Prisma", "TypeORM"]' },
  { key: "realtime", value: '"WebSockets"' },
]

export function HeroTerminal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/80 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-foreground/15" aria-hidden="true" />
        <span className="size-3 rounded-full bg-foreground/15" aria-hidden="true" />
        <span className="size-3 rounded-full bg-foreground/15" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">developer.js</span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-sm leading-7" aria-label="Developer profile summary">
        <code>
          <span className="text-muted-foreground">{"const "}</span>
          <span className="text-primary">developer</span>
          <span className="text-muted-foreground">{" = {"}</span>
          {"\n"}
          {lines.map((line) => (
            <span key={line.key}>
              {"  "}
              <span className="text-foreground">{line.key}</span>
              <span className="text-muted-foreground">{": "}</span>
              <span className="text-primary/80">{line.value}</span>
              <span className="text-muted-foreground">{","}</span>
              {"\n"}
            </span>
          ))}
          <span className="text-muted-foreground">{"}"}</span>
          <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" aria-hidden="true" />
        </code>
      </pre>
    </div>
  )
}
