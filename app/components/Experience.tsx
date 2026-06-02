"use client";
import { motion } from "framer-motion";
import { experience } from "../lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#090d0c]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#cc1000]">04 / Experience</span>
          <h2 className="font-syne font-black text-[clamp(2rem,4vw,2.8rem)] tracking-tight text-[#e0ede8] mt-2">
            My Journey
          </h2>
        </motion.div>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#cc1000] via-[#cc1000]/30 to-transparent" />

          {experience.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.15)}
              className={`relative ${i < experience.length - 1 ? "mb-10" : ""}`}
            >
              {/* Dot */}
              <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-[#cc1000] border-2 border-[#090d0c] shadow-[0_0_10px_rgba(204,16,0,0.5)]" />

              <div className="bg-[#0d1210] border border-white/06 rounded-2xl p-7 hover:border-[#cc1000]/18 transition-all duration-300">
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#cc1000] mb-2">
                  {item.period}
                </div>
                <h3 className="font-syne font-bold text-[1.2rem] text-[#e0ede8] mb-1">{item.role}</h3>
                <p className="font-mono text-[12px] text-[#5a7a70] mb-4">{item.company}</p>
                <p className="text-[14px] text-[#9ab5aa] leading-relaxed mb-5">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-[#5a7a70] border border-white/08 bg-[#111815] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
