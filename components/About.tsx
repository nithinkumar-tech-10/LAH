"use client";

import { useEffect, useRef, useState } from "react";
import { HACKATHON_DATA } from "@/lib/data";
import {
  Trophy,
  Clock,
  Users,
  Target,
  Layers,
  Sprout,
  Cpu,
  Plane,
  Eye,
  TrendingUp,
} from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 uppercase mb-3">
            <Sprout className="w-3.5 h-3.5" />
            Hackathon Vision &amp; Theme
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Smart Farming Meets Technology
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {HACKATHON_DATA.about.paragraphs[0]}
          </p>
        </div>

        {/* Animated Stat Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {/* Stat 1: 24 Hours */}
          <div className="glass-card p-6 rounded-2xl text-center border-emerald-500/20 group hover:border-emerald-400/40 transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <span className="block font-display font-black text-3xl sm:text-4xl text-white">
              24 <span className="text-emerald-400 text-2xl font-mono">Hours</span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 block">
              Non-Stop Hackathon
            </span>
          </div>

          {/* Stat 2: ₹25,000 Prize Pool */}
          <div className="glass-card p-6 rounded-2xl text-center border-yellow-500/30 bg-yellow-950/10 group hover:border-yellow-400/50 transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="block font-display font-black text-3xl sm:text-4xl text-yellow-300">
              ₹25,000
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-yellow-400/80 mt-1 block">
              Total Cash Prize Pool
            </span>
          </div>

          {/* Stat 3: Top 25 Teams Advance to Round 2 */}
          <div className="glass-card p-6 rounded-2xl text-center border-emerald-500/20 group hover:border-emerald-400/40 transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <span className="block font-display font-black text-3xl sm:text-4xl text-white">
              Top 25
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 block">
              Teams to Round 2
            </span>
          </div>

          {/* Stat 4: 1–3 Team Size */}
          <div className="glass-card p-6 rounded-2xl text-center border-cyan-500/20 group hover:border-cyan-400/40 transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <span className="block font-display font-black text-3xl sm:text-4xl text-cyan-300">
              1–3
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 block">
              Members Per Team
            </span>
          </div>

          {/* Stat 5: 3 Rounds */}
          <div className="glass-card p-6 rounded-2xl text-center border-emerald-500/20 col-span-2 md:col-span-1 group hover:border-emerald-400/40 transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <span className="block font-display font-black text-3xl sm:text-4xl text-white">
              3 Rounds
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 block">
              Evaluation Stages
            </span>
          </div>
        </div>

        {/* 4 Smart Farming Innovation Pillars */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-400" />
              Key Agritech Focus Sectors
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Hardware • IoT • AI • Software
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HACKATHON_DATA.about.focusAreas.map((area, idx) => {
              const icons = [Cpu, Plane, Eye, TrendingUp];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={area.title}
                  className="glass-card p-6 rounded-2xl border-emerald-500/15 relative overflow-hidden group hover:border-emerald-400/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-display font-bold text-white mb-2">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Official Closing Callout Card (Exact wording requested) */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/60 border border-emerald-500/30 shadow-2xl shadow-emerald-950/50">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-lime-400 bg-lime-950/50 border border-lime-500/30 uppercase mb-4">
              Call to Innovators &amp; Student Builders
            </span>
            <p className="text-lg sm:text-2xl font-display font-medium text-slate-100 leading-relaxed italic">
              &ldquo;{HACKATHON_DATA.about.paragraphs[1]}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
