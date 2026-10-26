"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HACKATHON_DATA } from "@/lib/data";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/80 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white border border-emerald-500/30 flex items-center justify-center p-1 shadow-sm group-hover:border-emerald-400 transition-colors shrink-0">
              <Image
                src={HACKATHON_DATA.logos.college}
                alt="G. Madegowda Institute of Technology"
                width={40}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                LEAP AGRITECH <span className="text-emerald-400">2026</span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  GMIT
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                24H NATIONAL HACKATHON
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {HACKATHON_DATA.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-emerald-950/30 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HACKATHON_DATA.coordinators.faculty[0].phone}`}
              className="px-3.5 py-2 text-xs font-mono font-medium text-slate-300 hover:text-emerald-300 flex items-center gap-1.5 border border-slate-700/60 rounded-xl hover:border-emerald-500/40 bg-slate-900/40 transition-colors"
              title="Call Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Helpline</span>
            </a>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${HACKATHON_DATA.coordinators.faculty[0].phone}`}
              aria-label="Call Helpline"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:text-white"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 bg-[#030712]/95 backdrop-blur-2xl border-b border-emerald-500/20 p-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 px-3 py-1">
              Navigation Menu
            </p>
            {HACKATHON_DATA.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-emerald-950/40 border border-transparent hover:border-emerald-500/20 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <a
              href={`tel:${HACKATHON_DATA.coordinators.faculty[0].phone}`}
              className="w-full py-3.5 px-4 rounded-xl text-center font-medium text-xs text-slate-300 bg-slate-900/80 border border-slate-700 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Helpline: {HACKATHON_DATA.coordinators.faculty[0].formattedPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
