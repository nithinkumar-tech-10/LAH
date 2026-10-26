"use client";

import { HACKATHON_DATA } from "@/lib/data";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Bus,
  Train,
  Plane,
  Building,
  Info,
} from "lucide-react";

export default function Venue() {
  const getTravelIcon = (mode: string) => {
    if (mode.includes("Bus")) return <Bus className="w-4 h-4 text-emerald-400" />;
    if (mode.includes("Train")) return <Train className="w-4 h-4 text-cyan-400" />;
    return <Plane className="w-4 h-4 text-yellow-400" />;
  };

  return (
    <section id="venue" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 uppercase">
            Location &amp; Logistics
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Venue &amp; Location
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            {HACKATHON_DATA.venue.hall}, G. Madegowda Institute of Technology, Mandya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Venue Info Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border-emerald-500/25">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider block">
                    Auditorium Hall
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white">
                    {HACKATHON_DATA.venue.hall}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm text-slate-300">
                <p className="font-semibold text-white">
                  {HACKATHON_DATA.venue.institution}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{HACKATHON_DATA.venueAddress}</span>
                </p>
              </div>

              {/* Mandatory Note */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/20 flex items-start gap-2.5 text-xs text-slate-300 mb-6">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {HACKATHON_DATA.venue.note}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={HACKATHON_DATA.venue.openMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-500 to-lime-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 text-center"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    HACKATHON_DATA.mapsEmbedQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/40 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Travel Transit Tips */}
            <div className="glass-card p-6 rounded-2xl border-slate-800">
              <h4 className="text-sm font-display font-bold text-white mb-3 uppercase tracking-wider text-slate-300">
                How to Reach the Venue
              </h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                {HACKATHON_DATA.venue.howToReach.map((item) => (
                  <div key={item.mode} className="flex items-start gap-2.5">
                    <span className="p-1 rounded bg-slate-900 border border-slate-800 mt-0.5">
                      {getTravelIcon(item.mode)}
                    </span>
                    <div>
                      <strong className="text-slate-100">{item.mode}: </strong>
                      <span className="text-slate-400">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Google Map with Dark Mode Frame (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-card rounded-3xl p-3 border-emerald-500/25 h-full min-h-[420px] sm:min-h-[480px] flex flex-col overflow-hidden relative shadow-2xl shadow-black/80">
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 text-xs text-emerald-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>GMIT Campus Coordinates</span>
              </div>

              {/* Iframe with dark theme styling */}
              <iframe
                title="Google Maps GMIT Mandya"
                src={HACKATHON_DATA.venue.embedMapUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "1.25rem",
                  filter: "invert(90%) hue-rotate(180deg) contrast(110%) brightness(95%)",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px] flex-1 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
