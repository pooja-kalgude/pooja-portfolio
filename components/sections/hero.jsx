"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { ResumeButton } from "@/components/resume-button"
import { HeroTerminal } from "@/components/hero-terminal"
import { siteConfig } from "@/lib/site-config"
import { stats } from "@/lib/portfolio-data"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {siteConfig.availability}
          </motion.p>

          <motion.p variants={item} className="mb-3 font-mono text-sm text-primary">
            {"Hi, I'm"}
          </motion.p>
          <motion.h1
            variants={item}
            className="text-balance text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-4 text-balance text-2xl font-medium tracking-tight text-muted-foreground md:text-3xl"
          >
            {siteConfig.role} <span className="text-foreground/40">·</span>{" "}
            <span className="whitespace-nowrap text-foreground">{siteConfig.yearsOfExperience} years</span> building for the web
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" size="lg">
              View my work
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" size="lg">
              Get in touch
            </ButtonLink>
            <ResumeButton variant="ghost" size="lg" />
          </motion.div>

          <motion.div variants={item} className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            {siteConfig.location}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <HeroTerminal />
          <dl className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card/60 p-4">
                <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
