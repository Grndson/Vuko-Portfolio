"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { siteConfig, heroRoles } from "../lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = heroRoles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % heroRoles.length);
        }
      }
    }, speed);

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-[68px] overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00ff87]/04 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — Text */}
        <div>
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-6">
            <span
              className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse"
              style={{ animation: "badge-pulse 2s infinite" }}
            />
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9ab5aa] border border-[#00ff87]/15 px-3 py-1 rounded-full bg-[#0d1210]">
              Open to work and projects
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p {...fadeUp(0.15)} className="font-mono text-[13px] tracking-wider text-[#5a7a70] mb-2">
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-syne font-black text-[clamp(3rem,7vw,5rem)] leading-none tracking-tight text-[#e0ede8] mb-4"
          >
            Edmund<span className="text-[#cc0000]"> Vuko</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            {...fadeUp(0.25)}
            className="font-mono text-[clamp(14px,2vw,18px)] text-[#9ab5aa] mb-5 flex items-center gap-1 min-h-[28px]"
          >
            <span className="text-[#cc0000]">{displayText}</span>
            <span className="cursor-blink text-[#cc0000] ml-[2px]">|</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-[15px] text-[#9ab5aa] leading-relaxed max-w-[500px] mb-8 border-l-2 border-[#cc0000]/30 pl-4"
          >
            I build websites and digital tools that help businesses reach customers
            and get work done. I also bring hands-on experience with React, PHP,
            and MySQL to engineering teams.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 bg-[#cc0000] text-white font-mono font-bold text-[12px] tracking-wider uppercase px-6 py-3 rounded-lg hover:bg-[#a50000] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(204,0,0,0.25)] transition-all"
            >
              See My Work
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-wider uppercase text-[#cc0000] border border-[#cc0000]/25 px-6 py-3 rounded-lg hover:bg-[#cc0000]/08 hover:border-[#cc0000]/50 hover:-translate-y-[2px] transition-all"
            >
              <MessageCircle size={14} /> Start a Conversation
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-6 lg:items-end"
        >
          {/* Terminal card */}
          <div className="w-full max-w-[360px] rounded-xl overflow-hidden border border-white/10 bg-[#0d1210] shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161f1c] border-b border-white/06">
              <span className="w-3 h-3 rounded-full bg-[#0048e1]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#cc1000]" />
              <span className="font-mono text-[11px] text-[#5a7a70] ml-2">vucore@dev ~ </span>
            </div>
            <div className="p-4 font-mono text-[13px] leading-[1.9]">
              <p><span className="text-[#cc0000]">$</span><span className="text-[#9ab5aa] ml-2">what I build</span></p>
              <p className="text-[#5a7a70] pl-4">Websites & useful business tools</p>
              <p className="mt-1"><span className="text-[#cc0000]">$</span><span className="text-[#9ab5aa] ml-2">location</span></p>
              <p className="text-[#5a7a70] pl-4">Kenya, East Africa 🌍</p>
              <p className="mt-1"><span className="text-[#cc0000]">$</span><span className="text-[#9ab5aa] ml-2">how I work</span></p>
              <p className="text-[#cc0000] pl-4">● Clear, collaborative, reliable</p>
              <p className="mt-1">
                <span className="text-[#cc0000]">$</span>
                <span className="cursor-blink text-[#cc0000] ml-1">_</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
        className="absolute bottom-8 left-1/2 text-[#5a7a70] hover:text-[#cc0000] transition-colors"
        style={{ animation: "bounce-y 2s ease-in-out infinite" }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
