import { Download } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { siteConfig } from "@/lib/site-config"

export function ResumeButton({ variant = "secondary", size = "md", className }) {
  return (
    <ButtonLink
      href={siteConfig.resumeUrl}
      variant={variant}
      size={size}
      className={className}
      download
      disabledLabel="Resume coming soon"
    >
      <Download className="size-4" aria-hidden="true" />
      Resume
    </ButtonLink>
  )
}
