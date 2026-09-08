import { EVENT, inr } from "../data/event";
import { cn } from "../utils/cn";

export default function TicketCard({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full max-w-[420px]", className)}>
      <div className="absolute -inset-6 -z-10 rounded-[40px] bg-sun-400/30 blur-3xl" />

      <div className="ticket-notch overflow-hidden rounded-3xl bg-white shadow-card">
        
        <div className="relative overflow-hidden bg-navy-900 px-7 pb-7 pt-6 text-white">
          <div className="dot-grid absolute inset-0 opacity-60" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sun-400/30 blur-2xl" />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-sun-400">Admit One</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight">
                {EVENT.brand}
                <span className="block text-base font-semibold text-white/80">{EVENT.name}</span>
              </h3>
            </div>
            <div className="rounded-xl bg-white/10 px-3 py-2 text-center backdrop-blur">
              <p className="font-display text-2xl font-extrabold leading-none text-sun-400">19</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">Sep '26</p>
            </div>
          </div>

          <div className="relative mt-6 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-white/50">Venue</p>
              <p className="mt-0.5 font-semibold">{EVENT.venue}</p>
              <p className="text-white/60">{EVENT.addressShort}</p>
            </div>
            <div>
              <p className="text-white/50">Time</p>
              <p className="mt-0.5 font-semibold">9:30 AM – 6:00 PM</p>
              <p className="text-white/60">Doors open 9:00 AM</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center px-4">
          <div className="h-px w-full border-t-2 border-dashed border-navy-900/15" />
        </div>

        <div className="px-7 pb-6 pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-900/50">Ticket price</p>
              <p className="font-display text-4xl font-extrabold text-navy-900">
                {inr(EVENT.price)}
                <span className="ml-2 align-middle text-sm font-semibold text-navy-900/40 line-through">{inr(EVENT.price + EVENT.bonusValue)}</span>
              </p>
            </div>
        
            <div className="flex h-12 items-end gap-[3px]" aria-hidden>
              {[3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 4, 2].map((w, i) => (
                <span key={i} className="block bg-navy-900" style={{ width: w, height: `${60 + ((i * 37) % 40)}%` }} />
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-sun-50 px-3 py-2 text-xs font-semibold text-navy-900 ring-1 ring-sun-400/40">
            <span className="text-base">🎁</span>
            Includes {EVENT.bonusLabel} — <span className="text-sun-600">FREE</span>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-navy-900/50">
            <span>No. {String(EVENT.totalSeats - EVENT.seatsLeft + 1).padStart(3, "0")} / {String(EVENT.totalSeats).padStart(3, "0")}</span>
            <span className="flex items-center gap-1 font-bold text-sun-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sun-500" />
              {EVENT.seatsLeft} seats left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
