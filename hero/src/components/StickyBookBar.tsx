import { useEffect, useState } from "react";
import { EVENT, inr } from "../data/event";
import { cn } from "../utils/cn";

export default function StickyBookBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="border-t border-navy-900/10 bg-white/90 px-4 py-3 backdrop-blur-md sm:py-4">
        <div className="mx-auto flex w-full max-w-2xl items-center justify-between gap-3">
        
          <div className="hidden flex-col sm:flex">
            <span className="flex items-center gap-1.5 text-xs font-bold text-navy-900/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sun-500" />
              Only{" "}
              <span className="font-extrabold text-navy-900">{EVENT.seatsLeft}</span>{" "}
              seats left
            </span>
            <span className="text-[11px] text-navy-900/50">
              🎁 Free E-book worth {inr(EVENT.bonusValue)} included
            </span>
          </div>

          <div className="flex flex-col sm:hidden">
            <span className="flex items-center gap-1.5 text-xs font-bold text-navy-900">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sun-500" />
              {EVENT.seatsLeft} seats left
            </span>
            <span className="text-[10px] text-navy-900/50">🎁 Free E-book inside</span>
          </div>

          <a
            href={EVENT.paymentUrl}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sun-500 to-sun-400 px-6 py-3.5 font-display text-base font-extrabold text-navy-950 shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-[0_0_60px_-10px_rgba(255,176,32,0.9)] focus:outline-none focus-visible:ring-4 focus-visible:ring-sun-400/50 sm:px-8 sm:text-lg"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Book My Free Slot</span>
            <span className="relative rounded-full bg-navy-950 px-1 py-0.5 text-xs font-bold text-sun-400 sm:text-sm">
              {inr(EVENT.price)}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
