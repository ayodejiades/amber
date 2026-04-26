import type { Metadata } from "next";
import { Lexend, Space_Grotesk } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMBER | Tactical Healthcare Mobility",
  description: "AI-powered emergency hospital matching and ambulance dispatch platform in Lagos.",
  manifest: "/manifest.json",
  themeColor: "#EF4444",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Amber Tactical",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${lexend.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-background text-foreground flex flex-col font-body selection:bg-primary/30`}
      >
        <main className="flex-grow w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
