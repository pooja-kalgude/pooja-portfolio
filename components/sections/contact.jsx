import { ArrowUpRight, Mail, Phone } from "lucide-react"
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/brand-icons"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { ButtonLink } from "@/components/button-link"
import { ResumeButton } from "@/components/resume-button"
import { siteConfig } from "@/lib/site-config"

const { email, phone, linkedin, github } = siteConfig.contact

const channels = [
  { label: "Email", value: email, href: email ? `mailto:${email}` : "", icon: Mail, external: false },
  { label: "Phone", value: phone, href: phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : "", icon: Phone, external: false },
  { label: "LinkedIn", value: linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: linkedin, icon: Linkedin, external: true },
  { label: "GitHub", value: github.replace(/^https?:\/\/(www\.)?/, ""), href: github, icon: Github, external: true },
]

function ContactCard({ label, value, href, icon: IconComponent, external }) {
  const content = (
    <>
      <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
        <IconComponent className="size-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-muted-foreground">{label}</span>
        <span className="block truncate font-medium text-foreground">{value || "Coming soon"}</span>
      </span>
      {href && (
        <ArrowUpRight
          className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          aria-hidden="true"
        />
      )}
    </>
  )

  const classes = "group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5"

  if (!href) {
    return <div className={`${classes} opacity-60`}>{content}</div>
  }

  return (
    <a
      href={href}
      className={`${classes} transition-colors hover:border-primary/40 hover:bg-card`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {content}
    </a>
  )
}

export function Contact() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 md:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]"
        />
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span>06</span>
              <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
              <span>Contact</span>
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              {"Let's build something great together."}
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              {"I'm open to full-time roles and interesting projects. Reach out and I'll get back to you soon."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={email ? `mailto:${email}` : ""} size="lg" disabledLabel="Email coming soon">
                <Mail className="size-4" aria-hidden="true" />
                Say hello
              </ButtonLink>
              <ResumeButton size="lg" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <ContactCard {...channel} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
