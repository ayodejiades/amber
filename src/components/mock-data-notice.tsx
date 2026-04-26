"use client";

export function MockDataNotice() {
  return (
    <div className="bg-primary/10 border-y border-primary/20 py-2 px-4 flex items-center justify-center gap-3">
      <span className="material-symbols-outlined text-primary text-sm heartbeat">info</span>
      <p className="text-[10px] md:text-xs font-caps font-bold tracking-[0.2em] text-primary uppercase">
        Tactical Mode: Currently displaying mock simulation data. Real-time live connection coming soon.
      </p>
    </div>
  );
}
