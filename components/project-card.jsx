"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"
import { GithubIcon as Github } from "@/components/brand-icons"
import { Icon } from "@/components/icon"
import { Tag } from "@/components/tag"

export function ProjectCard({ project, index }) {
  const { title, category, description, features, stack, icon, links } = project
  const hasLinks = links.live || links.source

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-7 transition-colors duration-300 hover:border-primary/40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/15"
      />

      <div className="relative mb-8 flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
          <Icon name={icon} className="size-6" />
        </span>
        <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <p className="relative font-mono text-xs uppercase tracking-wider text-primary">{category}</p>
      <h3 className="relative mt-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="relative mt-4 leading-relaxed text-muted-foreground">{description}</p>

      <ul className="relative mt-6 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/85">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto pt-8">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {hasLinks && (
          <div className="mt-6 flex items-center gap-4 border-t border-border pt-5 text-sm">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
              >
                Live demo <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only">{`for ${title}`}</span>
              </a>
            )}
            {links.source && (
              <a
                href={links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <Github className="size-4" aria-hidden="true" /> Source
                <span className="sr-only">{`code for ${title}`}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}
