"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type ParamedicShellProps = PropsWithChildren<{
  title: string;
  subtitle: string;
}>;

const NAV_ITEMS = [
  { href: "/paramedic", label: "Patient HUD", icon: "monitor_heart" },
  { href: "/paramedic/map", label: "Map", icon: "explore" },
  { href: "/paramedic#comms", label: "Comms", icon: "hub" },
  { href: "/paramedic/inventory", label: "Inventory", icon: "medical_services" },
];

export function ParamedicShell({ title, subtitle, children }: ParamedicShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-clinical-bg text-slate-900">
      <header className="sticky top-0 z-40 border-b border-clinical-border bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-clinical-primary text-white">
              <span className="material-symbols-outlined text-xl">ambulance</span>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-500">
                Project Amber
              </p>
              <h1 className="font-display text-lg font-black leading-none">{title}</h1>
            </div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              {subtitle}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1500px] gap-6 px-4 py-6 md:px-6">
        <aside className="hidden w-60 shrink-0 rounded-2xl border border-clinical-border bg-white p-4 shadow-clinical md:flex md:flex-col md:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
              Unit Amb-08
            </p>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => {
                const active =
                  item.href === "/paramedic#comms"
                    ? pathname === "/paramedic"
                    : pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-xs font-black uppercase tracking-[0.14em] transition ${
                      active
                        ? "bg-clinical-primary-soft text-clinical-primary"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="space-y-2 border-t border-clinical-border pt-4">
            <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600 hover:bg-slate-100">
              <span className="material-symbols-outlined text-base">settings</span>
              Settings
            </button>
            <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600 hover:bg-slate-100">
              <span className="material-symbols-outlined text-base">logout</span>
              Logout
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
