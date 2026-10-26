"use client";

import { HACKATHON_DATA } from "@/lib/data";
import { Award, MapPin, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-br from-emerald-950/80 via-slate-900 to-cyan-950/80 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/60 text-center">
          {/* Subtle Decorative Aura */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 uppercase mb-6">
            <Award className="w-4 h-4 text-emerald-400" />
            24 Hours Non-Stop • ₹25,000 Prize Pool
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-tight mb-6">
            Ready to Architect the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 text-glow-emerald">
              Smart Agriculture?
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            {HACKATHON_DATA.about.paragraphs[1]}
          </p>

          {/* Event Dates Info Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 mb-8">
            <span className="text-emerald-300 font-medium flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-400" />
              Event Dates: <strong>{HACKATHON_DATA.datesDisplay}</strong> at {HACKATHON_DATA.venueName}
            </span>
          </div>

          {/* Button CTA - View Venue */}
          <div className="flex justify-center">
            <a
              href="#venue"
              className="py-4 px-10 rounded-2xl font-display font-extrabold text-base sm:text-lg bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-emerald-500/30 flex items-center gap-2.5 group"
            >
              <MapPin className="w-5 h-5 text-slate-950" />
              <span>View Venue &amp; Location</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
