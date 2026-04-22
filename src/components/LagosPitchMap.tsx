"use client";

import { motion } from "framer-motion";

export default function LagosPitchMap() {
  return (
    <div className="relative w-full h-[300px] bg-slate-900 rounded-3xl overflow-hidden border border-white/5">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[grid_16px_16px] [mask-image:radial-gradient(white,transparent)]" />
      
      <svg className="w-full h-full p-8" viewBox="0 0 400 200">
        {/* Simplified Lagos Outline */}
        <path 
          d="M50,150 Q100,160 150,140 T250,120 T350,100" 
          fill="none" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="20" 
          strokeLinecap="round"
        />
        
        {/* Hospital Points */}
        <motion.circle 
          initial={{ r: 4, opacity: 0.5 }}
          animate={{ r: [4, 8, 4], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          cx="150" cy="140" fill="#EF4444" 
        />
        <text x="140" y="160" className="text-[8px] fill-slate-500 font-bold">LUTH</text>

        <motion.circle 
          initial={{ r: 4, opacity: 0.5 }}
          animate={{ r: [4, 8, 4], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          cx="280" cy="115" fill="#3B82F6" 
        />
        <text x="270" y="135" className="text-[8px] fill-slate-500 font-bold">Reddington</text>

        {/* Moving Ambulances */}
        <motion.g
          animate={{ 
            x: [0, 50, 100], 
            y: [0, -10, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="150" r="3" fill="#FFF" className="shadow-lg shadow-white/50" />
          <text x="55" y="145" className="text-[6px] fill-white/50 font-mono">AMB-09</text>
        </motion.g>

        <motion.g
          animate={{ 
            x: [0, -40, -80], 
            y: [0, 15, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="350" cy="100" r="3" fill="#F59E0B" />
          <text x="355" y="95" className="text-[6px] fill-amber-500/50 font-mono">AMB-21</text>
        </motion.g>
      </svg>

      {/* Live Label */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Fleet: Lagos</span>
      </div>
    </div>
  );
}
