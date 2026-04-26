"use client";

export function MockDataNotice() {
  return (
    <div className="bg-primary/5 border-y border-primary/10 py-2 px-4 flex items-center justify-center gap-3 shrink-0">
      <span className="material-symbols-outlined text-primary text-sm heartbeat">info</span>
      <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase font-caps">
        Simulation Mode: Displaying mock HUD data. Real-time fleet connection pending.
      </p>
    </div>
  );
}
