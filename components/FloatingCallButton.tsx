"use client";

import { useState } from "react";
import { HACKATHON_DATA } from "@/lib/data";
import { PhoneCall, X, Phone } from "lucide-react";

export default function FloatingCallButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden fixed bottom-5 right-5 z-40">
      {/* Quick Action Dial Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center p-4">
          <div className="w-full max-w-sm glass-panel p-5 rounded-3xl border border-emerald-500/30 shadow-2xl animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4" />
                Hackathon Coordinators Helpline
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              Tap any coordinator below to start a direct call:
            </p>

            <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
              {/* Faculty primary */}
              {HACKATHON_DATA.coordinators.faculty.slice(0, 2).map((c) => (
                <a
                  key={c.name}
                  href={`tel:${c.phone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 active:bg-emerald-950/60 active:border-emerald-500/40"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block">
                      Faculty Coordinator
                    </span>
                    <strong className="text-sm text-white block">{c.name}</strong>
                    <span className="text-xs font-mono text-slate-400">{c.formattedPhone}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                </a>
              ))}

              {/* Student primary */}
              {HACKATHON_DATA.coordinators.students.slice(0, 2).map((c) => (
                <a
                  key={c.name}
                  href={`tel:${c.phone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 active:bg-cyan-950/60 active:border-cyan-500/40"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase text-cyan-400 block">
                      Student Coordinator
                    </span>
                    <strong className="text-sm text-white block">{c.name}</strong>
                    <span className="text-xs font-mono text-slate-400">{c.formattedPhone}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Call Coordinator Helpline"
        className="relative group p-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-slate-950 shadow-xl shadow-emerald-500/40 flex items-center justify-center active:scale-95 transition-all"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-75" />
        <PhoneCall className="w-6 h-6 text-slate-950 relative z-10" />
      </button>
    </div>
  );
}
