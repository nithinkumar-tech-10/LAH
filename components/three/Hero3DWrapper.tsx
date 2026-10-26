"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { Sprout } from "lucide-react";

// Client-only lazy load for 3D Canvas
const Hero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Animated glowing hexagonal grid and sprout placeholder */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-spin [animation-duration:20s]" />
        <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/20 animate-spin [animation-duration:15s] [animation-direction:reverse]" />
        <div className="w-24 h-24 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.25)]">
          <Sprout className="w-12 h-12 text-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

const emptySubscribe = () => () => {};

export default function Hero3DWrapper() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const prefersReduced = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      media.addEventListener("change", callback);
      return () => media.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  if (!isMounted || prefersReduced) return <SceneFallback />;

  return (
    <div className="w-full h-full relative">
      <Hero3DScene />
    </div>
  );
}
