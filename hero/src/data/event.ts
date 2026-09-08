export const EVENT = {
  brand: "EMERGE",
  name: "Creator Day Kochi",
  tagline: "1-Day Bootcamp for New Creators",
  hook: "Stop watching tutorials. Start creating — live, with creators who've done it.",
  date: new Date("2026-09-19T09:30:00+05:30"),
  dateLabel: "19 September 2026",
  dateShort: "19-09-2026",
  dayLabel: "Saturday · 9:30 AM – 6:00 PM",
  venue: "Kerala Startup Mission",
  address:
    "Kerala Technology Innovation Zone, Kinfra Hi-Tech Park Main Rd, HMT Colony P.O., Kalamassery, Kochi, Kerala 683503",
  addressShort: "KTIZ, Kalamassery, Kochi",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Kerala+Startup+Mission+Kalamassery+Kochi",
  price: 999,
  bonusLabel: "Free E-book worth ₹499",
  bonusValue: 499,
  totalSeats: 60,
  seatsLeft: 23,
  paymentUrl: "#payment-gateway",
  ctaLabel: "Reserve My Seat",
};

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
