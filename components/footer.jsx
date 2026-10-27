import { ArrowUp } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          {"© "}
          {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Tailwind CSS.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-foreground">
          Back to top <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
