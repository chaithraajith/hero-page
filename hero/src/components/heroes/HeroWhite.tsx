import { EVENT, inr } from "../../data/event";
import Navbar from "../Navbar";
import Countdown from "../Countdown";
import SeatMeter from "../SeatMeter";
import ReserveButton from "../ReserveButton";

export default function HeroWhite() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-navy-900">

      <div className="dot-grid-navy absolute inset-0 opacity-40" />

      <div
        aria-hidden
        className="burst-spin pointer-events-none absolute -right-56 -top-56 h-[820px] w-[820px] opacity-30"
        style={{
          background:
            "conic-gradient(from 0deg, #ffb020, #fff4d6, #ffb020, #e8890c, #fffaf2, #ffb020, #ffc65c, #fff4d6, #ffb020)",
          borderRadius: "50%",
          filter: "blur(48px)",
        }}
      />

      <div
        aria-hidden
        className="burst-spin-rev pointer-events-none absolute -right-24 -top-24 h-[540px] w-[540px] opacity-50"
        style={{
          background:
            "conic-gradient(from 60deg, transparent 0deg, #ffb020 30deg, transparent 60deg, #ffc65c 120deg, transparent 150deg, #e8890c 210deg, transparent 240deg, #ffb020 300deg, transparent 330deg, #ffb020 360deg)",
          borderRadius: "50%",
          filter: "blur(28px)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full opacity-[0.07]"
        style={{ background: "#0b1f3a", filter: "blur(60px)" }}
      />
      
      <Navbar tone="light" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-10 sm:px-8 lg:pb-32 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-navy-900 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
                {EVENT.tagline}
              </span>
              <span className="rounded-full bg-sun-100 px-4 py-1.5 text-xs font-bold text-sun-600 ring-1 ring-sun-400/40">
                🔥 Only {EVENT.seatsLeft} seats left
              </span>
            </div>

            <h1 className="mt-7 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.5rem]">
  
              <span className="text-navy-900">{EVENT.brand}</span>

              <br />

              <span className="text-shimmer-light">Creator Day</span>

              {" "}

              <span className="text-sun-500">Kochi</span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-navy-900/70">
              Stop watching tutorials.{" "}
              <span className="font-bold text-navy-900">Start creating</span> — live, with
              creators who've done it.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <ReserveButton variant="navy" />
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-navy-900/10 bg-white/80 p-7 shadow-card backdrop-blur">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy-900/50">Event details</p>
                  <p className="mt-2 font-display text-3xl font-extrabold">{inr(EVENT.price)}</p>
                  <p className="text-sm text-navy-900/60">per seat · incl. {EVENT.bonusLabel}</p>
                </div>
                <div className="rounded-2xl bg-sun-400 px-4 py-3 text-center text-navy-950">
                  <p className="font-display text-3xl font-extrabold leading-none">19</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider">Sep 2026</p>
                </div>
              </div>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="text-lg">📅</span>
                  <div>
                    <p className="font-bold">{EVENT.dateLabel}</p>
                    <p className="text-navy-900/60">{EVENT.dayLabel}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg">📍</span>
                  <div>
                    <p className="font-bold">{EVENT.venue}</p>
                    <p className="text-navy-900/60">{EVENT.address}</p>
                    <a
                      href={EVENT.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-xs font-bold text-sun-600 underline-offset-2 hover:underline"
                    >
                      Open in Maps →
                    </a>
                  </div>
                </li>
              </ul>

              <SeatMeter tone="light" className="mt-6" compact />

              <div className="mt-6 border-t border-dashed border-navy-900/15 pt-5">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-navy-900/50">Starts in</p>
                <Countdown target={EVENT.date} tone="light" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-navy-900/10 pt-8 sm:grid-cols-4">
          {[
            ["1 Day", "Intensive bootcamp"],
            ["100%", "Hands-on sessions"],
            ["Live", "Shoot · Edit · Post"],
            [inr(EVENT.bonusValue), "E-book — free"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-3xl font-extrabold text-navy-900">{v}</p>
              <p className="text-sm text-navy-900/60">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
