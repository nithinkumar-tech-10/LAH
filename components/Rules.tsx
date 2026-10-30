"use client";

import { HACKATHON_DATA, GOOGLE_FORM_URL } from "@/lib/data";
import {
  Calendar,
  Clock,
  ExternalLink,
  Download,
  Target,
  FileText,
  Lightbulb,
  Presentation,
  Send,
  FileCheck2,
  Trophy,
  IdCard,
  ShieldAlert,
  Ban,
  Laptop,
  Cpu,
  Zap,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

export default function Rules() {
  const getRuleIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Target className="w-6 h-6 text-emerald-400" />;
      case 2:
        return <FileText className="w-6 h-6 text-cyan-400" />;
      case 3:
        return <Lightbulb className="w-6 h-6 text-yellow-400" />;
      case 4:
        return <Presentation className="w-6 h-6 text-amber-400" />;
      case 5:
        return <Send className="w-6 h-6 text-emerald-400" />;
      case 6:
        return <FileCheck2 className="w-6 h-6 text-lime-400" />;
      case 7:
        return <Trophy className="w-6 h-6 text-cyan-400" />;
      case 8:
        return <IdCard className="w-6 h-6 text-cyan-400" />;
      case 9:
        return <ShieldAlert className="w-6 h-6 text-emerald-400" />;
      case 10:
        return <Ban className="w-6 h-6 text-red-400" />;
      case 11:
        return <Laptop className="w-6 h-6 text-yellow-400" />;
      case 12:
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 13:
        return <Zap className="w-6 h-6 text-amber-400" />;
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
        {/* ===== IMPORTANT DATES SECTION ===== */}
        <div id="important-dates" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-amber-400 bg-amber-950/40 border border-amber-500/30 uppercase">
              Schedule &amp; Milestones
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              Important Dates
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Critical timeline milestones from problem statement release to Pre-Round PPT submission and the hackathon sprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Date 1: 31 October 2026 */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border-slate-800 relative group hover:border-emerald-500/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border bg-cyan-950/60 text-cyan-300 border-cyan-500/30">
                    Track Release
                  </span>
                  <span className="font-display font-black text-2xl text-slate-700 group-hover:text-slate-500 transition-colors">
                    01
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-cyan-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold block">
                      31 October 2026
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Problem Statements Released
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Six tracks and their respective problem statements are released. Each team must carefully review and select ONE problem statement.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>31 October 2026</span>
              </div>
            </div>

            {/* Date 2: 1 November 2026, 5:00 PM IST (Pre-Round Deadline) */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border-amber-500/40 bg-amber-950/15 relative group hover:border-amber-400/60 transition-all shadow-xl shadow-amber-950/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border bg-amber-950/80 text-amber-300 border-amber-500/40">
                    Pre-Round Deadline • Compulsory
                  </span>
                  <span className="font-display font-black text-2xl text-amber-500/40 group-hover:text-amber-400 transition-colors">
                    02
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-amber-500/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-amber-400">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold block">
                      1 November 2026 • 5:00 PM IST
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                      PPT Submission Deadline
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Last date to submit the PPT (Pre-Round) through the Google Form. Compulsory for every team. Only official PPT template permitted.
                </p>

                {/* Submit PPT Button & Download PPT Template Button */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl font-display font-bold text-xs bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400 text-slate-950 hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-emerald-500/25 flex items-center justify-center gap-1.5 text-center group/btn"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      <span>Submit PPT</span>
                    </a>
                    <a
                      href={HACKATHON_DATA.pptTemplate.url}
                      download={HACKATHON_DATA.pptTemplate.filename}
                      className="flex-1 py-2.5 px-3 rounded-xl font-display font-bold text-xs bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/40 hover:text-white active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 text-center"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Download PPT Template</span>
                    </a>
                  </div>
                  <p className="text-[10px] font-mono text-amber-300/90 leading-tight">
                    Deadline: 1 November 2026, 5:00 PM IST. Submission is compulsory for every team.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between text-[11px] font-mono text-amber-300/80">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  5:00 PM IST Sharp
                </span>
                <span className="text-amber-400 font-bold">Compulsory</span>
              </div>
            </div>

            {/* Date 3: 2 November 2026, 9:30 AM IST */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border-slate-800 relative group hover:border-emerald-500/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border bg-emerald-950/60 text-emerald-300 border-emerald-500/30">
                    24-Hour Sprint
                  </span>
                  <span className="font-display font-black text-2xl text-slate-700 group-hover:text-slate-500 transition-colors">
                    03
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-emerald-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold block">
                      2 November 2026 • 9:30 AM IST
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Hackathon Begins (24 Hours)
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  24-hour non-stop agritech sprint begins at GMIT Kuvempu Sabhangana, Mandya. Round 1 idea presentations followed by Round 2 prototype build.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  9:30 AM Inauguration
                </span>
                <span className="text-emerald-400">GMIT Mandya</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RULES & REGULATIONS SECTION ===== */}
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

        {/* Numbered Cards Grid */}
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
                  <span>Rule {rule.id}</span>
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
