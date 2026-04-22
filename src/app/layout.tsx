import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amber | Uber for Ambulances",
  description: "AI-powered emergency hospital matching and ambulance dispatch platform in Lagos.",
  manifest: "/manifest.json",
  themeColor: "#EF4444",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Amber",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen bg-background text-foreground flex flex-col font-body`}
      >
        <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                A
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                AMBER
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="/" className="hover:text-white transition-colors">How it works</a>
              <a href="/hospital" className="hover:text-white transition-colors">Hospitals</a>
              <a href="/login" className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-lg transition-all">Login</a>
              <button className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-xl transition-all font-semibold shadow-lg shadow-accent/20">
                Emergency Call
              </button>
            </nav>
          </div>
        </header>
        <main className="flex-grow pt-20">
          {children}
        </main>
        <footer className="py-12 border-t border-white/5 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
            © 2026 Amber Technology. All rights reserved. Saving lives in Lagos.
          </div>
        </footer>
      </body>
    </html>
  );
}
