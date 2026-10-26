"use client";

import { useState } from "react";
import { HACKATHON_DATA, Coordinator } from "@/lib/data";
import { Phone, Copy, Check, MessageSquare, GraduationCap, Users } from "lucide-react";

export default function Coordinators() {
  const [activeTab, setActiveTab] = useState<"all" | "faculty" | "student">("all");
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopy = (phone: string, cleanPhone: string) => {
    navigator.clipboard.writeText(cleanPhone);
    setCopiedPhone(cleanPhone);
    setTimeout(() => {
      setCopiedPhone(null);
    }, 2500);
  };

  const renderCard = (coord: Coordinator, type: "faculty" | "student") => {
    const isCopied = copiedPhone === coord.phone || copiedPhone === coord.formattedPhone;
    const cleanDigits = coord.phone.replace(/\D/g, "");

    return (
      <div
        key={coord.name}
        className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between border-slate-800 hover:border-emerald-500/40 transition-all group"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider font-semibold ${
                type === "faculty"
                  ? "bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
                  : "bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
              }`}
            >
              {type === "faculty" ? (
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Users className="w-3.5 h-3.5 text-cyan-400" />
              )}
              {coord.role || (type === "faculty" ? "Faculty" : "Student Coordinator")}
            </span>

            <span className="text-[11px] font-mono text-slate-500">
              {type === "faculty" ? "GMIT Faculty" : "Student Lead"}
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
            {coord.name}
          </h4>

          <p className="text-xs sm:text-sm font-mono text-emerald-400/90 tracking-wider mb-6">
            {coord.formattedPhone}
          </p>
        </div>

        {/* Action Buttons: Tap to call & Copy Phone & WhatsApp */}
        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800/80">
          <a
            href={`tel:${coord.phone}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-semibold text-xs border border-emerald-500/30 hover:border-emerald-400 transition-all active:scale-95"
            title={`Call ${coord.name}`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Tap to Call</span>
          </a>

          <button
            onClick={() => handleCopy(coord.formattedPhone, coord.formattedPhone)}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-semibold text-xs border transition-all active:scale-95 ${
              isCopied
                ? "bg-lime-500 text-slate-950 border-lime-400 shadow-sm"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700"
            }`}
            title="Copy Number"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="coordinators" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 uppercase">
            Direct Helpdesk
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Event Coordinators
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Have questions about the event, logistics, or project guidelines? Reach out directly to our dedicated coordinators.
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-emerald-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Coordinators
            </button>
            <button
              onClick={() => setActiveTab("faculty")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "faculty"
                  ? "bg-emerald-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Faculty Coordinators
            </button>
            <button
              onClick={() => setActiveTab("student")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "student"
                  ? "bg-emerald-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Student Coordinators
            </button>
          </div>
        </div>

        {/* Coordinator Cards Grid */}
        <div className="space-y-12">
          {/* Faculty Section */}
          {(activeTab === "all" || activeTab === "faculty") && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Faculty Coordinators
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {HACKATHON_DATA.coordinators.faculty.map((coord) =>
                  renderCard(coord, "faculty")
                )}
              </div>
            </div>
          )}

          {/* Student Section */}
          {(activeTab === "all" || activeTab === "student") && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Student Coordinators
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {HACKATHON_DATA.coordinators.students.map((coord) =>
                  renderCard(coord, "student")
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
