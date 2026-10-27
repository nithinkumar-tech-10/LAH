"use client";

import { HACKATHON_DATA } from "@/lib/data";
import {
  IdCard,
  ShieldAlert,
  Ban,
  Laptop,
  Cpu,
  Zap,
  Presentation,
  AlertTriangle,
} from "lucide-react";

export default function Rules() {
  const getRuleIcon = (id: number) => {
    switch (id) {
      case 1:
        return <IdCard className="w-6 h-6 text-cyan-400" />;
      case 2:
        return <ShieldAlert className="w-6 h-6 text-emerald-400" />;
      case 3:
        return <Ban className="w-6 h-6 text-red-400" />;
      case 4:
        return <Laptop className="w-6 h-6 text-yellow-400" />;
      case 5:
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 6:
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 7:
        return <Presentation className="w-6 h-6 text-emerald-400" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-emerald-400" />;
    }
  };

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-950/60 text-red-300 border-red-500/40";
      case "mandatory":
        return "bg-emerald-950/60 text-emerald-300 border-emerald-500/40";
      case "high":
        return "bg-amber-950/60 text-amber-300 border-amber-500/40";
      default:
        return "bg-slate-900 text-slate-300 border-slate-700";
    }
  };

  return (
    <section id="rules" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 uppercase">
            Guidelines &amp; Compliance
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Rules &amp; Regulations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Please adhere strictly to the hackathon code of conduct to ensure fair evaluation and a disciplined campus environment.
          </p>
        </div>

        {/* 6 Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHON_DATA.rules.map((rule) => {
            const isCritical = rule.severity === "critical";

            return (
              <div
                key={rule.id}
                className={`glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border-slate-800 relative group hover:border-emerald-500/40 transition-all ${
                  isCritical ? "border-red-500/30 bg-red-950/10" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border ${getSeverityStyle(
                        rule.severity
                      )}`}
                    >
                      {rule.tag}
                    </span>

                    <span className="font-display font-black text-2xl text-slate-700 group-hover:text-slate-500 transition-colors">
                      #{rule.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getRuleIcon(rule.id)}
                    </div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {rule.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Rule Ref: 0{rule.id}</span>
                  <span
                    className={
                      isCritical ? "text-red-400 font-semibold" : "text-emerald-400"
                    }
                  >
                    {isCritical ? "Disqualification Risk" : "Mandatory"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
