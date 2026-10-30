"use client";

import Image from "next/image";
import { HACKATHON_DATA } from "@/lib/data";
import { Award, UserCheck, Shield, Sparkles } from "lucide-react";

export default function OrganizingCommittee() {
  const getBadgeIcon = (title: string) => {
    if (title.includes("Chief Patron")) return <Shield className="w-4 h-4 text-yellow-400" />;
    if (title.includes("Patron")) return <Award className="w-4 h-4 text-emerald-400" />;
    if (title.includes("Convenor") && !title.includes("Co-"))
      return <UserCheck className="w-4 h-4 text-cyan-400" />;
    return <Sparkles className="w-4 h-4 text-lime-400" />;
  };

  const getGradient = (index: number) => {
    const gradients = [
      "from-yellow-500/20 via-amber-500/10 to-transparent border-yellow-500/30",
      "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30",
      "from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/30",
      "from-lime-500/20 via-emerald-500/10 to-transparent border-lime-500/30",
    ];
    return gradients[index % gradients.length];
  };

  const getAvatarGradient = (index: number) => {
    const avatarGradients = [
      "from-yellow-400 to-amber-600 text-slate-950",
      "from-emerald-400 to-teal-600 text-slate-950",
      "from-cyan-400 to-blue-600 text-slate-950",
      "from-lime-400 to-emerald-600 text-slate-950",
    ];
    return avatarGradients[index % avatarGradients.length];
  };

  return (
    <section id="committee" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 uppercase">
            Leadership &amp; Governance
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Organizing Committee
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Visionary academic leadership driving experiential innovation at GMIT Mandya.
          </p>
        </div>

        {/* 4 Cards Grid - equal row height and aligned top edge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch auto-rows-fr">
          {HACKATHON_DATA.committee.map((member, idx) => (
            <div
              key={member.name}
              className={`glass-card rounded-2xl p-6 flex flex-col items-center text-center relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/50 h-full bg-gradient-to-b ${getGradient(
                idx
              )}`}
            >
              {/* 1. Role Badge - Fixed height container so cards line up */}
              <div className="h-7 mb-6 flex items-center justify-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-slate-900/90 border border-slate-700/80 shadow-sm whitespace-nowrap">
                  {getBadgeIcon(member.title)}
                  <span className="text-slate-200">{member.title}</span>
                </div>
              </div>

              {/* 2. Photo or Initials Fallback - Identical 96x96 frame */}
              <div className="w-24 h-24 mb-6 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center">
                {member.image ? (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-lg shadow-emerald-950/40 group-hover:scale-105 transition-transform">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg shadow-emerald-950/40 group-hover:scale-105 transition-transform"
                    aria-label={`Photo placeholder for ${member.name}`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 blur-md group-hover:blur-lg transition-all" />
                    <div
                      className={`relative w-full h-full rounded-2xl bg-gradient-to-tr ${getAvatarGradient(
                        idx
                      )} flex items-center justify-center font-display font-black text-2xl tracking-wider shadow-inner border-2 border-white/20`}
                    >
                      {member.avatarText || member.name.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Name - Fixed height container so baseline is aligned */}
              <div className="h-7 mb-2 flex items-center justify-center">
                <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                  {member.name}
                </h3>
              </div>

              {/* 4. Designation / Title Block - Aligned and balanced */}
              <div className="flex-1 min-h-[3rem] flex flex-col items-center justify-start text-center">
                {member.designationLines && member.designationLines.length > 0 ? (
                  member.designationLines.map((line, lIdx) => (
                    <span
                      key={lIdx}
                      className="text-xs text-slate-400 leading-snug font-medium block"
                    >
                      {line}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-400 leading-snug font-medium block">
                    {member.designation}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
