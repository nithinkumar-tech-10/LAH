"use client";

import { useState } from "react";
import { HACKATHON_DATA } from "@/lib/data";
import {
  Calendar,
  Clock,
  Utensils,
  Code2,
  Trophy,
  Sparkles,
  ClipboardCheck,
  Search,
} from "lucide-react";

export default function Timeline() {
  const [selectedDay, setSelectedDay] = useState<"day1" | "day2">("day1");

  const getItemIcon = (type: string) => {
    switch (type) {
      case "registration":
        return <ClipboardCheck className="w-4 h-4 text-cyan-400" />;
      case "ceremony":
        return <Sparkles className="w-4 h-4 text-yellow-400" />;
      case "round":
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case "break":
        return <Utensils className="w-4 h-4 text-amber-400" />;
      case "review":
        return <Search className="w-4 h-4 text-purple-400" />;
      case "conclude":
        return <Trophy className="w-4 h-4 text-yellow-300" />;
      default:
        return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getItemBadge = (type: string) => {
    switch (type) {
      case "registration":
        return { label: "Check-in", color: "bg-cyan-950/60 text-cyan-300 border-cyan-500/30" };
      case "ceremony":
        return { label: "Ceremony", color: "bg-yellow-950/60 text-yellow-300 border-yellow-500/30" };
      case "round":
        return { label: "Hackathon Stage", color: "bg-emerald-950/60 text-emerald-300 border-emerald-500/30" };
      case "break":
        return { label: "Meal & Break", color: "bg-amber-950/60 text-amber-300 border-amber-500/30" };
      case "review":
        return { label: "Mentorship Review", color: "bg-purple-950/60 text-purple-300 border-purple-500/30" };
      case "conclude":
        return { label: "Grand Finale", color: "bg-yellow-950/80 text-yellow-200 border-yellow-400/40" };
      default:
        return { label: "Session", color: "bg-slate-900 text-slate-300 border-slate-700" };
    }
  };

  const currentSchedule =
    selectedDay === "day1"
      ? HACKATHON_DATA.timeline.day1
      : HACKATHON_DATA.timeline.day2;

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 uppercase">
            Schedule of Events
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Event Timeline
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A precisely synchronized 24-hour sprint flow spanning 2–3 November 2026.
          </p>

          {/* Day 1 / Day 2 Interactive Toggle */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 mt-8 shadow-xl">
            <button
              onClick={() => setSelectedDay("day1")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-display font-bold transition-all flex items-center gap-2 ${
                selectedDay === "day1"
                  ? "bg-gradient-to-r from-emerald-500 to-lime-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Day 1 • 2 Nov 2026</span>
            </button>

            <button
              onClick={() => setSelectedDay("day2")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-display font-bold transition-all flex items-center gap-2 ${
                selectedDay === "day2"
                  ? "bg-gradient-to-r from-emerald-500 to-lime-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Day 2 • 3 Nov 2026</span>
            </button>
          </div>
        </div>

        {/* Timeline Vertical Track */}
        <div className="relative mt-12 pl-6 sm:pl-10">
          {/* Glowing Vertical Line */}
          <div className="absolute left-[19px] sm:left-[31px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-500 via-cyan-400 to-yellow-400 opacity-60 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />

          <div className="space-y-6">
            {currentSchedule.schedule.map((item, index) => {
              const badge = getItemBadge(item.type);

              return (
                <div key={index} className="relative flex items-start gap-4 sm:gap-6 group">
                  {/* Glowing Node Marker on the Line */}
                  <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:border-lime-300 transition-all">
                    {getItemIcon(item.type)}
                  </div>

                  {/* Timeline Card */}
                  <div className="glass-card flex-1 p-5 sm:p-6 rounded-2xl border-slate-800 group-hover:border-emerald-500/30 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs sm:text-sm font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/20 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${badge.color}`}
                        >
                          {badge.label}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-display font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h4>

                    {item.description && (
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
