"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../lib/data";
import Image from "next/image";

const filters = [
  { label: "All Work", value: "all" },
  { label: "Web Applications", value: "fullstack" },
  { label: "Websites", value: "frontend" },
  { label: "Client Work", value: "freelance" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = projects.filter((p) => active === "all" || p.category === active);

  return (
    <section id="projects" className="py-28 bg-[#0d1210]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#cc1000]">03 / Projects</span>
          <h2 className="font-syne font-black text-[clamp(2rem,4vw,2.8rem)] tracking-tight text-[#e0ede8] mt-2">
            What I&apos;ve Built
          </h2>
          <p className="text-[15px] text-[#9ab5aa] mt-2">
            A look at the websites and digital tools I&apos;ve built for real businesses and their customers.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div {...fadeUp(0.1)} className="flex gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`font-mono text-[11px] tracking-wider uppercase px-4 py-2 rounded-full border transition-all ${
                active === f.value
                  ? "bg-[#cc1000]/10 border-[#cc1000]/35 text-[#cc1000]"
                  : "border-white/08 bg-[#111815] text-[#9ab5aa] hover:border-white/15 hover:text-[#e0ede8]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group bg-[#111815] border border-white/06 rounded-2xl overflow-hidden hover:border-[#00ff87]/22 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,255,135,0.06)] transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] bg-[#161f1c] overflow-hidden">
            
                  
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={["jobtrack", "wellness", "realestate", "freelance"].includes(project.id) ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#090d0c]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#cc1000] text-black font-mono font-bold text-[11px] tracking-wider uppercase px-4 py-2 rounded-lg hover:bg-[#a80d00] transition-all"
                      >
                        <ExternalLink size={12} /> Visit Website
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#e0ede8] border border-white/20 bg-[#111815] font-mono text-[11px] tracking-wider uppercase px-4 py-2 rounded-lg hover:bg-[#161f1c] transition-all"
                      >
                        <FaGithub size={12} /> Source Code
                      </a>
                    )}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#cc1000] text-black font-mono font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                      <Star size={10} fill="black" /> Featured
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-syne font-bold text-[1.1rem] text-[#e0ede8] mb-1 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-[#5a7a70] mb-3">
                    {project.subtitle}
                  </p>

                  <div className="mb-4 space-y-2 flex-1">
                    <div className="text-[12px] leading-relaxed">
                      <span className="font-semibold text-[#cc1000]">The need: </span>
                      <span className="text-[#9ab5aa]">{project.problem}</span>
                    </div>
                    <div className="text-[12px] leading-relaxed">
                      <span className="font-semibold text-[#cc1000]">What I built: </span>
                      <span className="text-[#9ab5aa]">{project.solution}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-white/06">
                    {project.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={11} className="text-[#cc1000] shrink-0" />
                        <span className="text-[11px] text-[#9ab5aa]">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/06">
                    <p className="font-mono text-[10px] tracking-wider uppercase text-[#5a7a70] mb-2">
                      Built with
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] tracking-wider uppercase text-[#cc1000] bg-[#cc1000]/06 border border-[#cc1000]/15 px-2 py-[2px] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
