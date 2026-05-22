import { Info, AlertTriangle, Lightbulb } from "lucide-react";

const styles = {
  info: {
    border: "border-brand-gold/50",
    bg: "bg-brand-cream",
    icon: Info,
    iconColor: "text-brand-gold-dark",
  },
  warning: {
    border: "border-amber-400/60",
    bg: "bg-amber-50",
    icon: AlertTriangle,
    iconColor: "text-amber-600",
  },
  tip: {
    border: "border-emerald-400/60",
    bg: "bg-emerald-50",
    icon: Lightbulb,
    iconColor: "text-emerald-600",
  },
} as const;

export function Callout({
  type = "info",
  children,
}: {
  type?: keyof typeof styles;
  children: React.ReactNode;
}) {
  const s = styles[type];
  const Icon = s.icon;

  return (
    <div className={`my-6 flex gap-3 rounded-lg border-l-4 ${s.border} ${s.bg} p-4`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${s.iconColor}`} />
      <div className="text-neutral-800 [&>p]:mb-0">{children}</div>
    </div>
  );
}
