"use client";

import Link from "next/link";
import Image from "next/image";
import { HACKATHON_DATA } from "@/lib/data";
import { ArrowUp, Phone, MapPin, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#02050c] text-slate-300 border-t border-emerald-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand & Official Logos (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-emerald-500/30 p-1 flex items-center justify-center shadow-sm shrink-0">
                <Image
                  src={HACKATHON_DATA.logos.college}
                  alt={HACKATHON_DATA.college.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-cyan-500/30 p-1 flex items-center justify-center shadow-sm shrink-0">
                <Image
                  src={HACKATHON_DATA.logos.ktech}
                  alt={HACKATHON_DATA.association.organization}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-yellow-500/30 p-1 flex items-center justify-center shadow-sm shrink-0">
                <Image
                  src={HACKATHON_DATA.logos.itbt}
                  alt={HACKATHON_DATA.association.department}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <div>
              <span className="font-display font-black text-white text-base block tracking-tight">
                LEAP AGRITECH 2026
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                GMIT MANDYA • 24H NATIONAL HACKATHON
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Organized by <strong>{HACKATHON_DATA.college.name}</strong>, Bharathinagara, Mandya. {HACKATHON_DATA.college.affiliation}.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-emerald-400">
                In Association With:
              </p>
              <p className="text-slate-200">{HACKATHON_DATA.association.organization}</p>
              <p className="text-slate-400">{HACKATHON_DATA.association.department}</p>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {HACKATHON_DATA.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>→</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coordinators & Helpdesk (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">
              Direct Helpline
            </h4>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-0.5">
                  Faculty Lead
                </span>
                <p className="font-semibold text-white">
                  {HACKATHON_DATA.coordinators.faculty[0].name}
                </p>
                <a
                  href={`tel:${HACKATHON_DATA.coordinators.faculty[0].phone}`}
                  className="text-emerald-400 hover:underline flex items-center gap-1 mt-1 font-mono"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {HACKATHON_DATA.coordinators.faculty[0].formattedPhone}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-0.5">
                  Student Lead
                </span>
                <p className="font-semibold text-white">
                  {HACKATHON_DATA.coordinators.students[0].name}
                </p>
                <a
                  href={`tel:${HACKATHON_DATA.coordinators.students[0].phone}`}
                  className="text-cyan-400 hover:underline flex items-center gap-1 mt-1 font-mono"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {HACKATHON_DATA.coordinators.students[0].formattedPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-mono text-center sm:text-left">
            © 2026 GMIT, Mandya. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1 text-xs"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
