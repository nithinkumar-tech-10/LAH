"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HACKATHON_DATA } from "@/lib/data";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Ticket,
  Clock,
  ArrowDown,
  Sprout,
} from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const targetEvent = new Date(HACKATHON_DATA.eventStartISO).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetEvent - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLive: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isLive: false,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-between">
      {/* 1. Deep Midnight Blue-to-Green Ambient Background */}
      <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-30" />

      {/* 2. Soft Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* 3. Subtle Agrarian Leaf & Circuit Watermark Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <svg
          viewBox="0 0 800 800"
          className="w-[700px] h-[700px] text-emerald-400 stroke-current"
          fill="none"
          strokeWidth="1.5"
        >
          <circle cx="400" cy="400" r="320" strokeDasharray="6 6" />
          <circle cx="400" cy="400" r="260" strokeDasharray="4 8" />
          <circle cx="400" cy="400" r="180" />
          <path d="M400 160 C 330 250 330 360 400 450 C 470 360 470 250 400 160 Z" />
          <path d="M400 230 L 400 420" />
          <path d="M400 280 L 370 260" />
          <path d="M400 320 L 430 300" />
          <path d="M400 360 L 370 340" />
          <line x1="80" y1="400" x2="720" y2="400" strokeDasharray="3 6" />
          <line x1="400" y1="80" x2="400" y2="720" strokeDasharray="3 6" />
        </svg>
      </div>

      {/* 4. Slow-Floating CSS Bio-Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[18%] left-[12%] w-2 h-2 rounded-full bg-emerald-400/50 blur-[1px] animate-particle-1" />
        <div className="absolute top-[28%] right-[15%] w-2.5 h-2.5 rounded-full bg-cyan-400/40 blur-[1px] animate-particle-2" />
        <div className="absolute top-[55%] left-[8%] w-1.5 h-1.5 rounded-full bg-lime-400/40 blur-[1px] animate-particle-3" />
        <div className="absolute top-[68%] right-[12%] w-2 h-2 rounded-full bg-emerald-300/40 blur-[1px] animate-particle-1" />
        <div className="absolute top-[42%] left-[22%] w-1.5 h-1.5 rounded-full bg-teal-400/40 blur-[1px] animate-particle-2" />
        <div className="absolute top-[35%] right-[25%] w-2 h-2 rounded-full bg-emerald-400/45 blur-[1px] animate-particle-3" />
        <div className="absolute top-[75%] left-[30%] w-1.5 h-1.5 rounded-full bg-cyan-300/35 blur-[1px] animate-particle-1" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Neat Logo Strip at the top of Hero (Centered) */}
        <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-emerald-500/30 backdrop-blur-md mb-10 max-w-3xl mx-auto shadow-xl shadow-black/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* College: GMIT */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white border border-emerald-500/30 flex items-center justify-center p-1.5 shadow-md shrink-0">
                <Image
                  src={HACKATHON_DATA.logos.college}
                  alt="G. Madegowda Institute of Technology"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Organized by GMIT
                </span>
                <span className="font-display font-extrabold text-xs sm:text-sm text-white tracking-tight leading-snug">
                  {HACKATHON_DATA.college.name}
                </span>
                <span className="text-[10px] text-slate-400">
                  Bharathinagara, Mandya
                </span>
              </div>
            </div>

            {/* Desktop Separator */}
            <div className="hidden md:block w-px h-10 bg-slate-800" />

            {/* In Association with KITS & IT&BT */}
            <div className="flex items-center gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800/80 w-full md:w-auto justify-start">
              <div className="flex items-center gap-2 shrink-0">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white border border-cyan-500/30 flex items-center justify-center p-1.5 shadow-md shrink-0">
                  <Image
                    src={HACKATHON_DATA.logos.ktech}
                    alt="Karnataka Innovation and Technology Society"
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white border border-yellow-500/30 flex items-center justify-center p-1.5 shadow-md shrink-0">
                  <Image
                    src={HACKATHON_DATA.logos.itbt}
                    alt="Department of Electronics, IT & BT, Government of Karnataka"
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  In association with KITS, Dept. of Electronics, IT &amp; BT, Government of Karnataka
                </span>
                <span className="font-display font-semibold text-xs sm:text-sm text-slate-200 tracking-tight leading-snug">
                  KITS &amp; Govt. of Karnataka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero Typography (Centered) */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          {/* Prominent Hackathon Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-28 sm:w-60 sm:h-36 md:w-72 md:h-44 rounded-2xl overflow-hidden bg-slate-950/80 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.25)] flex items-center justify-center p-2 group hover:border-emerald-400/50 transition-all">
              <Image
                src={HACKATHON_DATA.logos.hackathon}
                alt="LEAP Agritech Hackathon 2026 logo"
                width={288}
                height={176}
                className="object-contain w-full h-full drop-shadow-md"
                priority
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 uppercase mb-4">
            <Sprout className="w-3.5 h-3.5" />
            24H Agritech Innovation Sprint
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 text-glow-emerald">
              24 HOURS LEAP
            </span>
            <span className="block text-white mt-1">
              AGRITECH HACKATHON 2026
            </span>
          </h1>

          <p className="text-base sm:text-xl font-light text-slate-200 tracking-wide leading-relaxed max-w-2xl mx-auto">
            {HACKATHON_DATA.tagline}
          </p>
        </div>

        {/* Quick-Info Chips Grid (Centered) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10 max-w-4xl mx-auto">
          <div className="glass-card p-3 rounded-xl border border-emerald-500/20 text-center">
            <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Theme</span>
            <p className="text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1.5">
              <span className="text-emerald-400">🌱</span> Agriculture
            </p>
          </div>

          <div className="glass-card p-3 rounded-xl border border-yellow-500/30 bg-yellow-950/20 text-center">
            <span className="text-[10px] font-mono uppercase text-yellow-400 block mb-1">Prize Pool</span>
            <p className="text-xs sm:text-sm font-bold text-yellow-300 flex items-center justify-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" /> ₹25,000
            </p>
          </div>

          <div className="glass-card p-3 rounded-xl border border-emerald-500/20 text-center">
            <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Entry Fee</span>
            <p className="text-xs sm:text-sm font-bold text-emerald-300 flex items-center justify-center gap-1.5">
              <Ticket className="w-3.5 h-3.5" /> Free
            </p>
          </div>

          <div className="glass-card p-3 rounded-xl border border-emerald-500/20 text-center">
            <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Team Size</span>
            <p className="text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" /> 1–3 Members
            </p>
          </div>

          <div className="glass-card p-3 rounded-xl border border-emerald-500/20 text-center">
            <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Event Dates</span>
            <p className="text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" /> 2–3 Nov 2026
            </p>
          </div>

          <div className="glass-card p-3 rounded-xl border border-emerald-500/20 col-span-2 sm:col-span-1 text-center">
            <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Venue</span>
            <p className="text-[11px] sm:text-xs font-bold text-slate-200 line-clamp-1 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" /> Kuvempu Sabhangana, GMIT
            </p>
          </div>
        </div>

        {/* Live Countdown & Event Status Card (Centered) */}
        <div className="glass-panel p-5 sm:p-6 rounded-2xl max-w-2xl mx-auto border border-emerald-500/30 mb-10 shadow-2xl shadow-black/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 animate-pulse" />
                Event Countdown
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Target: 2 November 2026, 9:30 AM IST (Asia/Kolkata)
              </p>
            </div>

            {/* Event Status Chip */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700">
              {timeLeft.isLive ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Hackathon is live</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-emerald-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Event Starts: <strong>2 November 2026, 9:30 AM</strong></span>
                </div>
              )}
            </div>
          </div>

          {/* Countdown Clock Display or Hackathon is live banner */}
          {timeLeft.isLive ? (
            <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-cyan-950/80 border border-emerald-500/40 text-center">
              <span className="text-xl sm:text-2xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-300 to-cyan-400">
                🚀 Hackathon is live!
              </span>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                24 hours of non-stop innovation underway at Kuvempu Sabhangana, GMIT Mandya.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div className="bg-slate-950/80 p-3 sm:p-4 rounded-xl border border-emerald-500/20 shadow-inner">
                <span className="block font-display font-black text-2xl sm:text-4xl text-white">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-400">Days</span>
              </div>
              <div className="bg-slate-950/80 p-3 sm:p-4 rounded-xl border border-emerald-500/20 shadow-inner">
                <span className="block font-display font-black text-2xl sm:text-4xl text-white">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-400">Hours</span>
              </div>
              <div className="bg-slate-950/80 p-3 sm:p-4 rounded-xl border border-emerald-500/20 shadow-inner">
                <span className="block font-display font-black text-2xl sm:text-4xl text-white">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-400">Mins</span>
              </div>
              <div className="bg-slate-950/80 p-3 sm:p-4 rounded-xl border border-emerald-500/20 shadow-inner">
                <span className="block font-display font-black text-2xl sm:text-4xl text-emerald-400">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-400">Secs</span>
              </div>
            </div>
          )}
        </div>

        {/* Hero CTA - View Timeline (Centered) */}
        <div className="flex justify-center max-w-xs mx-auto">
          <a
            href="#timeline"
            className="w-full sm:w-auto py-4 px-10 rounded-xl font-display font-bold text-base bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400 text-slate-950 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 text-center"
          >
            <span>View Timeline</span>
            <ArrowDown className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator (Centered) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 flex items-center justify-center">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <span className="w-6 h-10 rounded-full border border-slate-600 flex items-start justify-center p-1">
            <span className="w-1.5 h-2 rounded-full bg-emerald-400 animate-bounce" />
          </span>
          <span>Explore Hackathon Details</span>
        </a>
      </div>
    </section>
  );
}
