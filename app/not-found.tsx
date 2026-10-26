import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden bg-grid-cyber">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      
      <div className="relative z-10 max-w-md w-full glass-card p-8 rounded-2xl text-center border border-emerald-500/20 shadow-2xl shadow-emerald-950/40">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-pulse-subtle">
          <Compass className="w-8 h-8" />
        </div>
        
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 mb-3">
          ERROR 404 • HARVEST PATH NOT FOUND
        </span>
        
        <h1 className="text-3xl font-display font-extrabold text-white mb-2">
          Lost in the Field?
        </h1>
        
        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The agritech coordinates you followed do not exist on the sensor grid. Let&apos;s navigate back to the main hackathon hub.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-lime-500 text-slate-950 hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/25"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Hackathon Home
        </Link>
      </div>
    </div>
  );
}
