import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vucore Tech | Software Developer",
  description:
    "Edmund Vuko builds websites and digital tools for businesses. Kenya-based, available for freelance projects and software development roles. Experienced with React, Next.js, PHP, and MySQL.",
  keywords: ["software developer", "full stack", "React", "Next.js", "PHP", "MySQL", "Kenya", "Vucore Tech"],
  authors: [{ name: "Vucore Tech" }],
  openGraph: {
    title: "Vucore Tech | Software Developer",
    description: "Websites and digital tools that help businesses serve customers and get work done.",
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
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V27PLDH6WH');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V27PLDH6WH"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
