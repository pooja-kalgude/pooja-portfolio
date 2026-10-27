import { cn } from "@/lib/utils"

export function Section({ id, children, className }) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-24 md:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  )
}
