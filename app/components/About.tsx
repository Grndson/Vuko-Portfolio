"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GraduationCap, MapPin, Briefcase, Mail, Download, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0d1210]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#cc0000]">01 / About</span>
          <h2 className="font-syne font-black text-[clamp(2rem,4vw,2.8rem)] tracking-tight text-[#e0ede8] mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-14 items-start">
          {/* LEFT — Photo + socials */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-5">
            {/* Photo */}
            <div className="w-full aspect-square max-w-[300px] rounded-2xl border border-white/10 bg-[#111815] overflow-hidden relative flex items-center justify-center">
              
              
              <Image src="/images/profile.png" alt="Vucore Tech" fill className="object-cover" />
              
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: siteConfig.socials.github, label: "GitHub" },
                { icon: FaLinkedinIn, href: siteConfig.socials.linkedin, label: "LinkedIn" },
                { icon: FaInstagram, href: siteConfig.socials.instagram, label: "FaInstagram" },
                { icon: MessageCircle, href: siteConfig.whatsapp, label: "WhatsApp", red: true },
              ].map(({ icon: Icon, href, label, red }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all hover:-translate-y-[2px] ${
                    red
                      ? "text-[#cc0000] border-[#cc0000]/20 bg-[#111815] hover:bg-[#cc0000]/08 hover:border-[#cc0000]/40"
                      : "text-[#9ab5aa] border-white/10 bg-[#111815] hover:text-[#cc1000] hover:bg-[#00ff87]/06 hover:border-[#00ff87]/20"
                  }`}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <div>
            <motion.p {...fadeUp(0.1)} className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#cc1000] mb-3">
              Full-Stack Developer
            </motion.p>

            {[
              "I'm a passionate web developer based in Kenya with a Bachelor's degree in Business Information Technology. I specialise in building clean, fast, and scalable web applications — from intuitive front-end interfaces to robust back-end systems.",
              "Currently working in IT while actively growing my development skills and freelance portfolio. I love solving real-world problems through code and delivering digital solutions that make a genuine impact.",
              "My approach combines technical precision with business understanding — I don't just build software, I build tools that serve real user needs and drive results.",
            ].map((text, i) => (
              <motion.p
                key={i}
                {...fadeUp(0.15 + i * 0.08)}
                className="text-[15px] text-[#9ab5aa] leading-[1.85] mb-4"
              >
                {text}
              </motion.p>
            ))}

            {/* Details grid */}
            <motion.div
              {...fadeUp(0.35)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-7"
            >
              {[
                { icon: GraduationCap, label: "Degree", value: "BBIT — Business Information Technology" },
                { icon: MapPin, label: "Location", value: "Kenya, East Africa" },
                { icon: Briefcase, label: "Availability", value: "Full-time & Freelance" },
                { icon: Mail, label: "Email", value: siteConfig.email },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 rounded-xl border border-white/06 bg-[#111815]"
                >
                  <Icon size={15} className="text-[#cc1000] mt-[3px] shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#5a7a70]">{label}</div>
                    <div className="text-[13px] text-[#e0ede8] mt-[2px]">{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.a
              {...fadeUp(0.45)}
              href={siteConfig.cv}
              download
              className="inline-flex items-center gap-2 bg-[#cc1000] text-black font-mono font-bold text-[12px] tracking-wider uppercase px-6 py-3 rounded-lg hover:bg-[#b30d00] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(204,16,0,0.2)] transition-all"
            >
              <Download size={14} /> Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
