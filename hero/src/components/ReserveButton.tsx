import { EVENT, inr } from "../data/event";
import { cn } from "../utils/cn";

type Props = { variant?: "orange" | "navy" | "white"; size?: "md" | "lg"; className?: string; showBonus?: boolean };

export default function ReserveButton({ variant = "orange", size = "lg", className, showBonus = true }: Props) {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)}>
      <a
        href={EVENT.paymentUrl}
        className={cn(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-full font-display font-bold transition-all duration-300",
          "focus:outline-none focus-visible:ring-4 focus-visible:ring-sun-400/50",
          size === "lg" ? "px-7 py-4 text-base sm:text-lg" : "px-5 py-3 text-sm",
          variant === "orange" &&
            "bg-gradient-to-r from-sun-500 to-sun-400 text-navy-950 shadow-glow hover:-translate-y-0.5 hover:shadow-[0_0_80px_-10px_rgba(255,176,32,0.8)]",
          variant === "navy" &&
            "bg-navy-900 text-white shadow-card hover:-translate-y-0.5 hover:bg-navy-800",
          variant === "white" && "bg-white text-navy-900 shadow-card hover:-translate-y-0.5",
        )}
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative">{EVENT.ctaLabel}</span>
        <span
          className={cn(
            "relative rounded-full px-2.5 py-0.5 text-xs font-bold sm:text-sm",
            variant === "orange" ? "bg-navy-950 text-sun-400" : "bg-sun-400 text-navy-950",
          )}
        >
          {inr(EVENT.price)}
        </span>
        <svg className="relative h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
      {showBonus && (
        <p className={cn("flex items-center gap-1.5 pl-2 text-xs font-medium sm:text-sm", variant === "orange" ? "text-white/70" : "text-navy-900/70")}>
          <span className="text-base leading-none">🎁</span>
          Register now &amp; get a <span className={cn("font-bold", variant === "orange" ? "text-sun-400" : "text-sun-600")}>{EVENT.bonusLabel}</span>
        </p>
      )}
    </div>
  );
}
