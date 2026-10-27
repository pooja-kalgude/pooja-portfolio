import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_0_1px_var(--primary),0_8px_30px_-8px_var(--primary)]",
  secondary: "border border-border bg-secondary/60 text-foreground hover:bg-secondary hover:border-foreground/20",
  ghost: "text-muted-foreground hover:text-foreground",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

// Renders an <a> when href is provided, otherwise a disabled placeholder button.
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
  download = false,
  disabledLabel,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (!href) {
    return (
      <button
        type="button"
        disabled
        title={disabledLabel}
        className={cn(classes, "cursor-not-allowed opacity-50 shadow-none")}
      >
        {children}
      </button>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...(download && { download: true })}
      {...props}
    >
      {children}
    </a>
  )
}
