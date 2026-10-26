"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, Cpu, Wifi } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(55), 350);
    const timer2 = setTimeout(() => setProgress(88), 750);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 450);
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white px-6"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_65%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* Seed to Sprout Animated Visual */}
            <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
              {/* Outer Pulsing Circuit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-dotted border-lime-400/20"
              />

              {/* Seed growing into a vibrant Sprout */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-950/80 to-slate-900 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <motion.div
                  initial={{ scale: 0.3, opacity: 0, y: 12 }}
                  animate={{ scale: [0.4, 1.1, 1], opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="text-emerald-400"
                >
                  <Sprout className="w-9 h-9 stroke-[2.2] drop-shadow-[0_0_12px_rgba(74,222,128,0.7)]" />
                </motion.div>
              </div>

              {/* Holographic Satellite Dots */}
              <motion.div
                animate={{ y: [-4, 4, -4], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 text-cyan-400"
              >
                <Wifi className="w-4 h-4" />
              </motion.div>
              <motion.div
                animate={{ y: [3, -3, 3], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute -bottom-1 -left-1 text-yellow-400"
              >
                <Cpu className="w-4 h-4" />
              </motion.div>
            </div>

            {/* Event Tag */}
            <span className="text-[10px] font-mono tracking-[0.28em] text-emerald-400/90 uppercase mb-2">
              GMIT MANDYA • AGRITECH INNOVATION LAB
            </span>

            {/* Title */}
            <h2 className="text-xl font-display font-extrabold tracking-tight text-white mb-4">
              24H LEAP AGRITECH 2026
            </h2>

            {/* Progress bar */}
            <div className="w-full bg-slate-900/90 rounded-full h-1.5 p-0.5 border border-emerald-500/20 mb-3 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-lime-400 to-yellow-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                initial={{ width: "10%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>

            {/* Status ticker */}
            <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Synchronizing Agritech Grid
              </span>
              <span className="text-emerald-400 font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
