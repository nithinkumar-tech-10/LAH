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
  Check,
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
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

        {/* ===== TRACKS SYSTEM SECTION ===== */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 uppercase">
              6 Hackathon Tracks
            </span>
            <h3 className="mt-3 text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              Problem Statements by Track
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              Teams choose ONE problem statement from ONE track only. Browse the 6 tracks below to explore all official challenges.
            </p>
          </div>

          {/* Track Navigation Buttons / Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-6">
            {tracks.map((track) => {
              const isSelected = activeTrack === track.slug;
              return (
                <button
                  key={track.slug}
                  type="button"
                  onClick={() => setActiveTrack(track.slug)}
                  className={`p-3.5 sm:p-4 rounded-xl text-center transition-all cursor-pointer border flex flex-col items-center justify-center min-h-[95px] sm:min-h-[110px] ${
                    isSelected
                      ? "bg-emerald-950/70 border-emerald-400/80 shadow-lg shadow-emerald-950/50 scale-[1.02]"
                      : "glass-card border-slate-800/90 hover:border-emerald-500/40 hover:bg-slate-900/60"
                  }`}
                >
                  <span className="text-2xl sm:text-3xl block mb-1.5">{track.icon}</span>
                  <span
                    className={`text-xs sm:text-sm font-display font-bold block leading-tight ${
                      isSelected ? "text-emerald-300" : "text-slate-200"
                    }`}
                  >
                    {track.shortName}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">
                    {track.hasPdf && track.problemTitles.length > 0
                      ? `${track.problemTitles.length} Problems`
                      : "Soon"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Track Card */}
          {activeTrackData && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30 shadow-2xl shadow-black/50">
              {/* Track Header & Actions */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
                <div className="flex items-start sm:items-center gap-3.5">
                  <span className="text-3xl sm:text-4xl p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 shrink-0">
                    {activeTrackData.icon}
                  </span>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                      {activeTrackData.name}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                      {activeTrackData.intro}
                    </p>
                  </div>
                </div>

                {/* PDF Action Buttons */}
                {activeTrackData.hasPdf && activeTrackData.viewUrl && activeTrackData.downloadUrl && (
                  <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto pt-2 md:pt-0">
                    <a
                      href={activeTrackData.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 hover:bg-cyan-900/50 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Eye className="w-4 h-4" />
                      View PDF
                    </a>
                    <a
                      href={activeTrackData.downloadUrl}
                      download={activeTrackData.filename}
                      className="flex-1 md:flex-none py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold text-emerald-300 bg-emerald-950/50 border border-emerald-500/40 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                )}
              </div>

              {/* Problem Titles List */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Problem Statements in this Track
                  </span>
                  {activeTrackData.problemTitles.length > 0 && (
                    <span className="text-xs font-mono text-slate-400">
                      {activeTrackData.problemTitles.length} challenge{activeTrackData.problemTitles.length !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>

                {!activeTrackData.hasPdf || activeTrackData.problemTitles.length === 0 ? (
                  <div className="p-8 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <FileText className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                    <p className="text-base text-slate-300 font-medium">
                      Problem statements will be released soon.
                    </p>
                    <span className="text-xs text-slate-500 mt-1 block">
                      The official problem statements PDF for this track will appear here upon release.
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {activeTrackData.problemTitles.map((title, idx) => (
                      <div
                        key={`${activeTrackData.slug}-${idx}`}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-emerald-500/40 hover:bg-slate-900/40 transition-all group"
                      >
                        <div className="flex items-start sm:items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-xs font-mono font-bold text-emerald-400 shrink-0 mt-0.5 sm:mt-0">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="text-sm sm:text-base font-display font-semibold text-white group-hover:text-emerald-300 transition-colors">
                              {title}
                            </span>
                          </div>
                        </div>

                        {activeTrackData.viewUrl && (
                          <a
                            href={activeTrackData.viewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex text-xs font-mono text-cyan-400 hover:text-cyan-300 items-center gap-1 shrink-0 ml-auto transition-colors"
                          >
                            Read Details <Eye className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ===== "HOW IT WORKS" BLOCK (under the tracks) ===== */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30 mb-14 shadow-xl shadow-black/40">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              Process
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
              How It Works
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "1", text: "Pick one track." },
              { num: "2", text: "Choose one problem statement from that track only." },
              { num: "3", text: "Prepare your idea for it." },
              {
                num: "4",
                text: "Present your idea in Round 1. The top 4 teams from each track move forward.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-slate-950/60 border border-slate-800/90 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-950/80 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 font-display font-black text-base mb-3 shadow-md">
                  {step.num}
                </div>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Participation Note Card */}
        <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-amber-500/30 bg-amber-950/15 mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
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

        {/* Mandatory PPT Template Section */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-amber-400 bg-amber-950/50 border border-amber-500/30 uppercase mb-4">
                <Presentation className="w-3.5 h-3.5" />
                Mandatory for Round 1
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3">
                Official PPT Template
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {forParticipants.pptNotice.mandatory}
              </p>

              {/* Slide list summary */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-3">
                  Slide Structure (7 Slides Total):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                  {slideTitles.map((slide, idx) => (
                    <div key={slide} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-[10px] font-mono text-emerald-400 shrink-0">
                        {idx + 1}
                      </span>
                      <span className={idx === 1 ? "text-emerald-300 font-semibold" : ""}>{slide}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center">
              <a
                href={forParticipants.pptNotice.downloadUrl}
                download={forParticipants.pptNotice.filename}
                className="btn-primary py-4 px-8 rounded-xl font-display font-bold text-base flex items-center gap-3 shadow-lg shadow-emerald-950/50 group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                Download Official PPT Template (.pptx)
              </a>
              <span className="text-[11px] font-mono text-slate-400 mt-2 flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" />
                Microsoft PowerPoint Format (.pptx)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
