import {
  Activity,
  Boxes,
  Building2,
  Database,
  Gauge,
  Layers,
  LayoutTemplate,
  Server,
  Shield,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react"

const icons = {
  activity: Activity,
  boxes: Boxes,
  building: Building2,
  database: Database,
  gauge: Gauge,
  layers: Layers,
  layout: LayoutTemplate,
  server: Server,
  shield: Shield,
  target: Target,
  users: Users,
  wrench: Wrench,
  zap: Zap,
}

export function Icon({ name, ...props }) {
  const Component = icons[name] ?? Layers
  return <Component aria-hidden="true" {...props} />
}
