import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vucore Tech | Software Developer",
  description:
    "Full-stack developer based in Kenya, building modern web applications with React, Next.js, PHP, and MySQL. Available for full-time roles and freelance projects.",
  keywords: ["software developer", "full stack", "React", "Next.js", "PHP", "MySQL", "Kenya", "Vucore Tech"],
  authors: [{ name: "Vucore Tech" }],
  openGraph: {
    title: "Vucore Tech | Software Developer",
    description: "Building modern web applications and business systems.",
    type: "website",
  },
   icons: {
  icon: "/images/Logo.svg",
  apple: "/images/Logo.svg",
  shortcut: "/images/Logo.svg",
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Fonts loaded via link tag so they work in all environments */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090d0c] text-[#e0ede8] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
