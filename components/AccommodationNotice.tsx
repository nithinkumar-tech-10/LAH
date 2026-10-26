"use client";

import { HACKATHON_DATA } from "@/lib/data";
import { AlertTriangle, Clock, MapPin } from "lucide-react";

export default function AccommodationNotice() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-950/70 via-slate-900 to-amber-950/70 border-2 border-amber-500/40 shadow-2xl shadow-amber-950/30 overflow-hidden">
          {/* Subtle amber pulsing ambient backlight */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Warning Icon Box */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/15 border-2 border-amber-500/50 flex items-center justify-center shrink-0 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] animate-bounce [animation-duration:3s]">
              <AlertTriangle className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>

            {/* Notice Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Critical Travel Advisory
                </span>
                <span className="text-xs font-mono text-amber-400/90 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Applies to 1 November 2026 Arrivals
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-black text-amber-200 tracking-tight mb-2">
                {HACKATHON_DATA.accommodationNotice.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {HACKATHON_DATA.accommodationNotice.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
