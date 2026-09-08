import { EVENT } from "../data/event";
import { cn } from "../utils/cn";

type Props = { tone?: "light" | "dark"; className?: string; compact?: boolean };

export default function SeatMeter({ tone = "dark", className, compact }: Props) {
  const taken = EVENT.totalSeats - EVENT.seatsLeft;
  const pct = Math.round((taken / EVENT.totalSeats) * 100);
  const dark = tone === "dark";

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className={cn("flex items-center gap-2 font-semibold", dark ? "text-white" : "text-navy-900")}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-sun-400" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sun-400" />
          </span>
          Only <span className="font-display text-sun-400">{EVENT.seatsLeft}</span> seats left
        </span>
        {!compact && (
          <span className={cn("text-xs", dark ? "text-white/50" : "text-navy-900/50")}>
            {pct}% filled · {EVENT.totalSeats} total
          </span>
        )}
      </div>
      <div className={cn("h-2 w-full overflow-hidden rounded-full", dark ? "bg-white/10" : "bg-navy-900/10")}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-sun-600 via-sun-400 to-sun-300 transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
