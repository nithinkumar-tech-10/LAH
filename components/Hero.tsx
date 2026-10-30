"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HACKATHON_DATA, HACKATHON_LOGO, GOOGLE_FORM_URL } from "@/lib/data";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Ticket,
  Clock,
  ArrowDown,
  Sprout,
  ExternalLink,
  Download,
} from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

const associationLineClass = "font-display font-bold text-xs sm:text-sm md:text-base text-white tracking-tight leading-snug text-center";

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
        {/* Organiser & Association Section */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30 backdrop-blur-md mb-10 max-w-5xl mx-auto shadow-xl shadow-black/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* LEFT CORNER: Sri G. Madegowda (Stacked at top on mobile) */}
            <div className="order-1 flex flex-col items-center text-center shrink-0 w-36 sm:w-40">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-lg shadow-emerald-950/40 mb-2.5">
                <Image
                  src={HACKATHON_DATA.chairmen.left.image}
                  alt={HACKATHON_DATA.chairmen.left.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <span className="font-display font-bold text-sm sm:text-base text-white leading-tight">
                {HACKATHON_DATA.chairmen.left.name}
              </span>
              <span className="text-xs text-emerald-400 font-mono mt-0.5">
                {HACKATHON_DATA.chairmen.left.title}
              </span>
            </div>

            {/* Mobile Divider 1 */}
            <div className="order-2 w-full h-px bg-slate-800 md:hidden" />

            {/* CENTRE: College Logo + Name, In Association With, KITS/IT&BT/GoK with logos */}
            <div className="order-3 md:order-2 flex-1 flex flex-col items-center text-center max-w-2xl px-2">
              {/* 1. College logo & text (no "Organized by GMIT", no location) */}
              <div className="flex flex-col items-center justify-center mb-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white border border-emerald-500/30 flex items-center justify-center p-1.5 shadow-md mb-2 shrink-0">
                  <Image
                    src={HACKATHON_DATA.logos.college}
                    alt={HACKATHON_DATA.college.name}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                <h3 className="font-display font-extrabold text-base sm:text-lg md:text-xl text-white tracking-wide text-center">
                  {HACKATHON_DATA.college.name}
                </h3>
              </div>

              {/* 2. "In Association With" */}
              <span className="text-[11px] sm:text-xs md:text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2.5 text-center">
                In Association With
              </span>

              {/* 3, 4, 5. KITS, Dept of IT&BT, GoK with K-tech & GoK logos beside them */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full">
                {/* K-tech Logo */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-white border border-cyan-500/30 flex items-center justify-center p-1 sm:p-1.5 shadow-md shrink-0">
                  <Image
                    src={HACKATHON_DATA.logos.ktech}
                    alt="Karnataka Innovation and Technology Society"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>

                {/* Association Text Block */}
                <div className="flex flex-col items-center text-center px-1">
                  <span className={associationLineClass}>
                    Karnataka Innovation and Technology Society (KITS)
                  </span>
                  <span className={associationLineClass}>
                    Department of Electronics, IT &amp; BT
                  </span>
                  <span className={associationLineClass}>
                    Government of Karnataka
                  </span>
                </div>

                {/* GoK Logo */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-white border border-yellow-500/30 flex items-center justify-center p-1 sm:p-1.5 shadow-md shrink-0">
                  <Image
                    src={HACKATHON_DATA.logos.itbt}
                    alt="Government of Karnataka"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Mobile Divider 2 */}
            <div className="order-4 w-full h-px bg-slate-800 md:hidden" />

            {/* RIGHT CORNER: Sri Madhu G Madegowda (Stacked at bottom on mobile) */}
            <div className="order-5 md:order-3 flex flex-col items-center text-center shrink-0 w-36 sm:w-40">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-950/40 mb-2.5">
                <Image
                  src={HACKATHON_DATA.chairmen.right.image}
                  alt={HACKATHON_DATA.chairmen.right.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <span className="font-display font-bold text-sm sm:text-base text-white leading-tight">
                {HACKATHON_DATA.chairmen.right.name}
              </span>
              <span className="text-xs text-cyan-400 font-mono mt-0.5">
                {HACKATHON_DATA.chairmen.right.title}
              </span>
            </div>
          </div>
        </div>




        {/* Main Hero Typography (Centered) */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          {/* Prominent Hackathon Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-28 sm:w-60 sm:h-36 md:w-72 md:h-44 rounded-2xl overflow-hidden bg-white border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.25)] flex items-center justify-center p-2.5 sm:p-3 group hover:border-emerald-400/50 transition-all">
              <Image
                src={HACKATHON_LOGO}
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

        {/* Important Dates Mini-Bar in Hero */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="glass-card p-3.5 rounded-xl border border-emerald-500/20 text-center">
              <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-0.5 font-bold">
                31 October 2026
              </span>
              <p className="text-xs font-display font-bold text-white">
                Problem Statements Released
              </p>
            </div>

            <div className="glass-card p-3.5 rounded-xl border border-amber-500/40 bg-amber-950/20 text-center shadow-md shadow-amber-950/30">
              <span className="text-[10px] font-mono uppercase text-amber-300 block mb-0.5 font-bold">
                1 Nov 2026 • 5:00 PM IST
              </span>
              <p className="text-xs font-display font-bold text-amber-200">
                PPT Submission (Compulsory)
              </p>
            </div>

            <div className="glass-card p-3.5 rounded-xl border border-emerald-500/20 text-center">
              <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-0.5 font-bold">
                2 Nov 2026 • 9:30 AM IST
              </span>
              <p className="text-xs font-display font-bold text-white">
                Hackathon Sprint Begins
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons: Submit PPT, Download Template & View Timeline */}
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-7 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400 text-slate-950 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group/btn text-center"
            >
              <span>Submit PPT</span>
              <ExternalLink className="w-4 h-4 text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={HACKATHON_DATA.pptTemplate.url}
              download={HACKATHON_DATA.pptTemplate.filename}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-display font-bold text-xs sm:text-sm bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/50 hover:text-white active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download PPT Template</span>
            </a>

            <a
              href="#timeline"
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-display font-medium text-xs sm:text-sm text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>Timeline</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <p className="text-[11px] font-mono text-amber-300/90 text-center mt-3">
            Deadline: 1 November 2026, 5:00 PM IST. Submission is compulsory for every team.
          </p>
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
