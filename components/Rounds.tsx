"use client";

import { useState } from "react";
import { HACKATHON_DATA } from "@/lib/data";
import { Lightbulb, Wrench, Trophy, CheckCircle2, ChevronRight, Clock, Download } from "lucide-react";

export default function Rounds() {
  const [activeRound, setActiveRound] = useState(1);

  const getRoundIcon = (num: number) => {
    switch (num) {
      case 1:
        return <Lightbulb className="w-7 h-7 text-yellow-400" />;
      case 2:
        return <Wrench className="w-7 h-7 text-emerald-400" />;
      case 3:
        return <Trophy className="w-7 h-7 text-cyan-400" />;
      default:
        return <Lightbulb className="w-7 h-7 text-emerald-400" />;
    }
  };

  const getBadgeStyle = (num: number) => {
    switch (num) {
      case 1:
        return "bg-yellow-950/60 text-yellow-300 border-yellow-500/30";
      case 2:
        return "bg-emerald-950/60 text-emerald-300 border-emerald-500/30";
      case 3:
        return "bg-cyan-950/60 text-cyan-300 border-cyan-500/30";
      default:
        return "bg-slate-900 text-slate-300 border-slate-700";
    }
  };

  return (
    <section id="rounds" className="py-24 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 uppercase">
            Competition Structure
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Hackathon Rounds
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A three-tier evolutionary sprint designed to separate abstract concepts from battle-tested, practical agrarian solutions.
          </p>
        </div>

        {/* 3 Large Interactive Cards with Glowing Connectors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-stretch">
          {HACKATHON_DATA.rounds.map((round) => {
            const isCurrent = activeRound === round.number;

            return (
              <div
                key={round.number}
                onClick={() => setActiveRound(round.number)}
                className={`glass-card rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative group ${
                  isCurrent
                    ? "border-emerald-400/60 shadow-2xl shadow-emerald-950/60 scale-[1.02]"
                    : "border-slate-800 hover:border-slate-700 hover:scale-[1.01]"
                }`}
              >
                {/* Glowing Top Number Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border ${getBadgeStyle(
                        round.number
                      )}`}
                    >
                      {round.badge}
                    </span>

                    <span className="font-display font-black text-4xl text-slate-700 group-hover:text-slate-600 transition-colors">
                      0{round.number}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      {getRoundIcon(round.number)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        Round {round.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                        {round.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {round.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                    {round.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Prominent Download PPT Template Button for Round 1 */}
                  {round.number === 1 && (
                    <div className="mb-6">
                      <a
                        href={HACKATHON_DATA.pptTemplate.url}
                        download={HACKATHON_DATA.pptTemplate.filename}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-3 px-4 rounded-xl font-display font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400 text-slate-950 hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 group/btn"
                      >
                        <Download className="w-4 h-4 text-slate-950 group-hover/btn:translate-y-0.5 transition-transform" />
                        <span>Download PPT Template</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Footer Time window */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-emerald-400/90">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {round.duration}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
