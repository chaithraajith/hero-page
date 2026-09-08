import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

type Props = {
  target: Date;
  tone?: "light" | "dark";
  className?: string;
};

function getDiff(target: Date) {
  const total = Math.max(0, target.getTime() - Date.now());
  const s = Math.floor(total / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

export default function Countdown({ target, tone = "dark", className }: Props) {
  const [t, setT] = useState(() => getDiff(target));

  useEffect(() => {
    const id = setInterval(() => setT(getDiff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells = [
    { v: t.days, l: "Days" },
    { v: t.hours, l: "Hrs" },
    { v: t.mins, l: "Min" },
    { v: t.secs, l: "Sec" },
  ];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {cells.map((c, i) => (
        <div key={c.l} className="flex items-center gap-2">
          <div
            className={cn(
              "flex min-w-[52px] flex-col items-center rounded-xl px-2 py-1.5",
              tone === "dark"
                ? "border border-white/10 bg-white/5 text-white"
                : "border border-navy-900/10 bg-white text-navy-900 shadow-sm",
            )}
          >
            <span className="font-display text-xl font-bold tabular-nums leading-none">
              {String(c.v).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "mt-1 text-[10px] font-semibold uppercase tracking-wider",
                tone === "dark" ? "text-white/50" : "text-navy-900/50",
              )}
            >
              {c.l}
            </span>
          </div>
          {i < cells.length - 1 && (
            <span className={cn("font-display text-lg font-bold", tone === "dark" ? "text-sun-400" : "text-sun-600")}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
