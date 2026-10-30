"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { HACKATHON_DATA, GOOGLE_FORM_URL } from "@/lib/data";
import type { TrackGroup, ProblemItem } from "@/lib/problemStatements";
import {
  Sparkles,
  Lightbulb,
  Hammer,
  AlertTriangle,
  Download,
  CheckCircle2,
  Presentation,
  Target,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ExternalLink,
} from "lucide-react";

interface ForParticipantsProps {
  tracks: TrackGroup[];
}

export default function ForParticipants({ tracks }: ForParticipantsProps) {
  const { forParticipants } = HACKATHON_DATA;
  const [activeTrack, setActiveTrack] = useState<string>(tracks[0]?.slug ?? "aiml");
  const [selectedProblem, setSelectedProblem] = useState<ProblemItem | null>(null);

  // Focus management
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalScrollRef = useRef<HTMLDivElement | null>(null);

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

  const activeTrackData = tracks.find((t) => t.slug === activeTrack) || tracks[0];

  const openDetails = (prob: ProblemItem, triggerEl: HTMLButtonElement) => {
    triggerRef.current = triggerEl;
    setSelectedProblem(prob);
  };

  const closeDetails = useCallback(() => {
    setSelectedProblem(null);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  }, []);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!selectedProblem) return;

    // Lock body scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDetails();
        return;
      }

      // Trap focus
      if (e.key === "Tab" && modalContentRef.current) {
        const focusableElements = modalContentRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProblem, closeDetails]);

  // Previous & Next navigation inside the same track
  const currentTrackProblems = activeTrackData?.problems || [];
  const currentProblemIndex = selectedProblem
    ? currentTrackProblems.findIndex((p) => p.id === selectedProblem.id)
    : -1;

  const hasPrev = currentProblemIndex > 0;
  const hasNext = currentProblemIndex >= 0 && currentProblemIndex < currentTrackProblems.length - 1;

  const goToPrev = () => {
    if (hasPrev) {
      setSelectedProblem(currentTrackProblems[currentProblemIndex - 1]);
      modalScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToNext = () => {
    if (hasNext) {
      setSelectedProblem(currentTrackProblems[currentProblemIndex + 1]);
      modalScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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

        {/* ===== TRACKS & PROBLEM STATEMENTS SECTION ===== */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 uppercase">
              6 Hackathon Tracks
            </span>
            <h3 className="mt-3 text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              Problem Statements by Track
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-medium">
              Problem statements are released on 31 October 2026. Choose ONE track and ONE problem statement.
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
                    {track.problems.length > 0 ? `${track.problems.length} Problems` : "Soon"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Track Card */}
          {activeTrackData && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30 shadow-2xl shadow-black/50">
              {/* Track Header */}
              <div className="flex items-start sm:items-center gap-3.5 pb-6 mb-6 border-b border-slate-800/80">
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

              {/* Problem Titles List */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Problem Statements ({activeTrackData.problems.length})
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Select a challenge to view details
                  </span>
                </div>

                {activeTrackData.problems.length === 0 ? (
                  <div className="p-8 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                    <p className="text-base text-slate-300 font-medium">
                      Problem statements will be released soon.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {activeTrackData.problems.map((prob) => (
                      <div
                        key={prob.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-emerald-500/40 hover:bg-slate-900/50 transition-all group"
                      >
                        <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                          <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-xs font-mono font-bold text-emerald-400 shrink-0 mt-0.5 sm:mt-0">
                            {String(prob.number).padStart(2, "0")}
                          </span>
                          <span className="text-sm sm:text-base font-display font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                            {prob.title}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => openDetails(prob, e.currentTarget)}
                          className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-500 hover:text-slate-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-sm"
                        >
                          Read Details
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
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
              { num: "1", text: "Choose ONE track from the six tracks." },
              { num: "2", text: "Select ONE problem statement from that track only." },
              { num: "3", text: "Pre-Round: Prepare solution and submit PPT before 1 Nov 2026, 5:00 PM IST." },
              {
                num: "4",
                text: "Present your idea in Round 1 (no prototype required). Top 4 teams build prototype in Round 2.",
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
                Pre-Round • Compulsory Submission
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3">
                Pre-Round PPT Submission &amp; Official Template
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

            <div className="shrink-0 flex flex-col items-center gap-3 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-4 px-8 rounded-xl font-display font-bold text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-950/50 group text-center"
                >
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Submit PPT</span>
                </a>
                <a
                  href={forParticipants.pptNotice.downloadUrl}
                  download={forParticipants.pptNotice.filename}
                  className="py-4 px-7 rounded-xl font-display font-bold text-sm bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/40 hover:text-white active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 text-center"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download PPT Template</span>
                </a>
              </div>
              <p className="text-xs font-mono text-amber-300 text-center max-w-sm">
                Deadline: 1 November 2026, 5:00 PM IST. Submission is compulsory for every team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PROBLEM DETAILS MODAL / DIALOG ===== */}
      {selectedProblem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="problem-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md transition-opacity duration-200 animate-in fade-in"
          onClick={closeDetails}
        >
          <div
            ref={modalContentRef}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] bg-slate-950 border border-emerald-500/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden text-left animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 p-5 sm:p-7 border-b border-slate-800/90 bg-slate-900/60 shrink-0">
              <div className="flex-1 pr-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 uppercase mb-2">
                  {selectedProblem.track} • Problem {selectedProblem.number}
                </span>
                <h3
                  id="problem-modal-title"
                  className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white leading-tight"
                >
                  {selectedProblem.title}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDetails}
                aria-label="Close dialog"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:border-emerald-400/60 hover:bg-emerald-950/40 transition-all flex items-center justify-center shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div
              ref={modalScrollRef}
              className="p-5 sm:p-8 overflow-y-auto overflow-x-hidden flex-1 space-y-7"
            >
              {/* Problem Description */}
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Problem Description
                </h4>
                <div className="space-y-3.5 text-base text-slate-200 leading-relaxed font-normal">
                  {selectedProblem.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Challenges
                </h4>
                <ol className="space-y-3">
                  {selectedProblem.challenges.map((challenge, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-base text-slate-200 leading-relaxed"
                    >
                      <span className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-300 shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="flex-1">{challenge}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Modal Footer with Previous / Next navigation */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-t border-slate-800/90 bg-slate-900/60 shrink-0">
              <button
                type="button"
                onClick={goToPrev}
                disabled={!hasPrev}
                className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-mono font-bold flex items-center gap-1.5 transition-all ${
                  hasPrev
                    ? "bg-slate-900 border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 cursor-pointer"
                    : "opacity-40 cursor-not-allowed text-slate-500 border border-slate-800"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <span className="text-xs font-mono text-slate-400">
                {currentProblemIndex >= 0
                  ? `Problem ${currentProblemIndex + 1} of ${currentTrackProblems.length}`
                  : ""}
              </span>

              <button
                type="button"
                onClick={goToNext}
                disabled={!hasNext}
                className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-mono font-bold flex items-center gap-1.5 transition-all ${
                  hasNext
                    ? "bg-slate-900 border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 cursor-pointer"
                    : "opacity-40 cursor-not-allowed text-slate-500 border border-slate-800"
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
