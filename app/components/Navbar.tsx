"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "../lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) {
          current = s.getAttribute("id") || "";
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300 ${
        scrolled
          ? "bg-[#090d0c]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
          <a href="#hero" onClick={() => handleNav("#hero")} className="flex items-center gap-2 group">
          <div className="relative w-10 h-10">
            <Image
              src="/images/Logo.svg"
              alt="Vucore Tech"
              width={35}
              height={35}
              className="rounded-lg object-contain"
              loading="eager"
            />
          </div>
          <span className="font-syne font-bold text-base text-[#e0ede8]">
            Vucore<span className="text-[#cc0000]">Tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`font-mono text-[12px] tracking-wider uppercase px-3 py-2 rounded-lg transition-all duration-200 ${
                active === link.href.slice(1)
                  ? "text-[#cc0000] bg-[#cc0000]/08"
                  : "text-[#9ab5aa] hover:text-[#cc0000] hover:bg-[#00ff87]/06"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={siteConfig.cv}
            download
            className="ml-3 flex items-center gap-2 font-mono text-[12px] tracking-wider uppercase text-[#cc0000] border border-[#cc0000]/25 px-4 py-2 rounded-lg hover:bg-[#00ff87]/08 hover:border-[#cc0000]/50 transition-all"
          >
            <Download size={13} /> CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#9ab5aa] hover:text-[#00ff87] transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#090d0c]/98 backdrop-blur-xl border-b border-white/08 px-6 py-4 flex flex-col gap-1"
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="font-mono text-[13px] tracking-wider uppercase text-[#9ab5aa] hover:text-[#00ff87] px-3 py-3 rounded-lg text-left hover:bg-[#00ff87]/06 transition-all"
              >
                {link.label}
              </button>
            ))}
            <a
              href={siteConfig.cv}
              download
              className="mt-2 flex items-center gap-2 font-mono text-[13px] tracking-wider uppercase text-[#00ff87] border border-[#00ff87]/25 px-4 py-3 rounded-lg hover:bg-[#00ff87]/08 transition-all w-full justify-center"
            >
              <Download size={14} /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
