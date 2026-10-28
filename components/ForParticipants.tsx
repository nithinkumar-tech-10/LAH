"use client";

import { useState } from "react";
import { HACKATHON_DATA } from "@/lib/data";
import type { TrackData } from "@/lib/problemStatements";
import {
  Sparkles,
  Lightbulb,
  Hammer,
  AlertTriangle,
  Download,
  CheckCircle2,
  Presentation,
  FileText,
  Eye,
  ArrowRight,
  ChevronDown,
  Target,
} from "lucide-react";

interface ForParticipantsProps {
  tracks: TrackData[];
}

export default function ForParticipants({ tracks }: ForParticipantsProps) {
  const { forParticipants } = HACKATHON_DATA;
  const [activeTrack, setActiveTrack] = useState<string>(tracks[0]?.slug ?? "aiml");

  const cardIcons = [Target, Lightbulb, Hammer];

  const slideTitles = [
    "Title",
    "Chosen Problem Statement (track and title)",
    "Existing Solutions",
    "Our Solution",
    "Technical Approach",
    "Impact and Benefits",
    "Thank You",
  ];

  const activeTrackData = tracks.find((t) => t.slug === activeTrack);

  return (
    <section id="participants" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Glow Backdrops */}
      <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {forParticipants.badge}
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            {forParticipants.heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {forParticipants.intro}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {forParticipants.cards.map((card, idx) => {
            const IconComp = cardIcons[idx % cardIcons.length];
            return (
              <div
                key={card.title}
                className="glass-card p-7 rounded-2xl border-emerald-500/20 relative overflow-hidden group hover:border-emerald-400/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-display font-black text-3xl text-slate-700 group-hover:text-emerald-400/40 transition-colors">
                      {card.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Step {card.step}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== TRACKS SECTION ===== */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 uppercase">
              6 Tracks
            </span>
            <h3 className="mt-3 text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              Problem Statements by Track
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              Teams choose ONE problem statement from ONE track only. Click a track to view its problem statements.
            </p>
          </div>

          {/* Track Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
            {tracks.map((track) => (
              <button
                key={track.slug}
                type="button"
                onClick={() => setActiveTrack(track.slug)}
                className={`p-3 sm:p-4 rounded-xl text-center transition-all cursor-pointer border ${
                  activeTrack === track.slug
                    ? "bg-emerald-950/60 border-emerald-400/60 shadow-lg shadow-emerald-950/40"
                    : "glass-card border-slate-800 hover:border-emerald-500/30"
                }`}
              >
                <span className="text-2xl block mb-1">{track.icon}</span>
                <span className={`text-xs sm:text-sm font-display font-bold block leading-tight ${
                  activeTrack === track.slug ? "text-emerald-300" : "text-slate-200"
                }`}>
                  {track.shortName}
                </span>
                <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                  {track.problemStatements.length} PDF{track.problemStatements.length !== 1 ? "s" : ""}
                </span>
              </button>
            ))}
          </div>

          {/* Active Track Content */}
          {activeTrackData && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{activeTrackData.icon}</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-display font-extrabold text-white">
                    {activeTrackData.name}
                  </h4>
                  <span className="text-xs font-mono text-emerald-400">
                    {activeTrackData.problemStatements.length} problem statement{activeTrackData.problemStatements.length !== 1 ? "s" : ""} available
                  </span>
                </div>
                <ChevronDown className="w-5 h-5 text-emerald-400 ml-auto" />
              </div>

              {activeTrackData.problemStatements.length === 0 ? (
                <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                  <FileText className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                  <p className="text-sm text-slate-400 font-medium">
                    Problem statements will be released soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {activeTrackData.problemStatements.map((ps, idx) => (
                    <div
                      key={ps.filename}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400/70 block">
                            PS-{String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-display font-semibold text-white group-hover:text-emerald-300 transition-colors">
                            {ps.title}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
                        <a
                          href={ps.viewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none py-2 px-4 rounded-lg text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          View PDF
                        </a>
                        <a
                          href={ps.downloadUrl}
                          download={ps.filename}
                          className="flex-1 sm:flex-none py-2 px-4 rounded-lg text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* How It Works */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border-emerald-500/20 mb-12">
          <h3 className="text-lg sm:text-xl font-display font-extrabold text-white mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-emerald-400" />
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "1", text: "Pick one track from the 6 available tracks." },
              { step: "2", text: "Pick one problem statement from that track." },
              { step: "3", text: "Prepare your idea and present it in Round 1." },
              { step: "4", text: "Top 4 teams from each track move forward to build." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-display font-bold text-sm shrink-0">
                  {item.step}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Rule Note Card */}
        <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-amber-500/30 bg-amber-950/15 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-0.5">
              Important Participation Note
            </span>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {forParticipants.note}
            </p>
          </div>
        </div>

        {/* Highlighted Info Card: Mandatory Round 1 PPT Template */}
        <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-cyan-950/70 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/60">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-yellow-300 bg-yellow-950/60 border border-yellow-500/40 uppercase mb-3">
                  <Presentation className="w-3.5 h-3.5 text-yellow-400" />
                  Mandatory for Round 1
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
                  Official Round 1 Idea Presentation Template
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  {forParticipants.pptNotice.mandatory}
                </p>
              </div>

              {/* Download PPT Template Button */}
              <div className="w-full lg:w-auto shrink-0">
                <a
                  href={forParticipants.pptNotice.downloadUrl}
                  download={forParticipants.pptNotice.filename}
                  className="w-full lg:w-auto py-3.5 px-6 sm:px-8 rounded-xl font-display font-bold text-sm sm:text-base bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400 text-slate-950 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 group"
                >
                  <Download className="w-5 h-5 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download PPT Template</span>
                </a>
              </div>
            </div>

            {/* 7 Slides Structure */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                  {forParticipants.pptNotice.slides}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                {slideTitles.map((slide, idx) => (
                  <div
                    key={slide}
                    className="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/20 text-center"
                  >
                    <span className="text-[10px] font-mono text-emerald-400 block mb-0.5">
                      Slide 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 block truncate" title={slide}>
                      {slide}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
