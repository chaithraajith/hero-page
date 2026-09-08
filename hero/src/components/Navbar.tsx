import { EVENT, inr } from "../data/event";
import { cn } from "../utils/cn";

export default function Navbar({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <a href="#" className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sun-500 to-sun-400 font-display text-lg font-extrabold text-navy-950 shadow-glow">
          E
        </span>
        <span className={cn("font-display text-lg font-extrabold tracking-tight", dark ? "text-white" : "text-navy-900")}>
          {EVENT.brand}
          <span className={cn("ml-1.5 text-xs font-semibold uppercase tracking-[0.2em]", dark ? "text-sun-400" : "text-sun-600")}>
            Creator Day
          </span>
        </span>
      </a>

      <nav className={cn("hidden items-center gap-8 text-sm font-medium md:flex", dark ? "text-white/70" : "text-navy-900/70")}>
        {["What you'll learn", "Mentors", "Schedule", "FAQ"].map((l) => (
          <a key={l} href="#" className={cn("transition-colors", dark ? "hover:text-white" : "hover:text-navy-900")}>
            {l}
          </a>
        ))}
      </nav>

      <a
        href={EVENT.paymentUrl}
        className={cn(
          "hidden rounded-full px-5 py-2.5 font-display text-sm font-bold transition-all hover:-translate-y-0.5 sm:inline-flex",
          dark ? "bg-white text-navy-900" : "bg-navy-900 text-white",
        )}
      >
        Book · {inr(EVENT.price)}
      </a>
    </header>
  );
}
