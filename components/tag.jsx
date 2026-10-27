export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  )
}
