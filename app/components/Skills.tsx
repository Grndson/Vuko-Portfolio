"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import { skills } from "../lib/data";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Server, Database, Wrench,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

function SkillBar({ name, level, inView }: { name: string; level: number; inView: boolean }) {
  return (
    <div>
      <div className="flex justify-between mb-[6px]">
        <span className="font-mono text-[12px] text-[#9ab5aa]">{name}</span>
        <span className="font-mono text-[12px] text-[#cc1000]">{level}%</span>
      </div>
      <div className="h-[3px] bg-[#161f1c] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#cc1000] to-[#ff5f57] transition-all duration-[1200ms] ease-out"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ category, icon, items, delay }: {
  category: string; icon: string; items: { name: string; level: number }[]; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = iconMap[icon] || Monitor;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#0d1210] border border-white/06 rounded-2xl p-6 hover:border-[#cc1000]/20 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/06">
        <div className="w-9 h-9 rounded-lg bg-[#cc1000]/08 border border-[#cc1000]/15 flex items-center justify-center group-hover:bg-[#cc1000]/12 transition-all">
          <Icon size={17} className="text-[#cc1000]" />
        </div>
        <h3 className="font-syne font-bold text-[1.05rem] text-[#e0ede8]">{category}</h3>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <SkillBar key={item.name} name={item.name} level={item.level} inView={inView} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#090d0c]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#cc1000]">02 / Skills</span>
          <h2 className="font-syne font-black text-[clamp(2rem,4vw,2.8rem)] tracking-tight text-[#e0ede8] mt-2">
            Tech Stack
          </h2>
          <p className="text-[15px] text-[#9ab5aa] mt-2">Tools and technologies I work with.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {skills.map((group, i) => (
            <CategoryCard
              key={group.category}
              category={group.category}
              icon={group.icon}
              items={group.items}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Tech pill cloud */}
        <motion.div {...fadeUp(0.4)} className="mt-12 pt-10 border-t border-white/06">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#5a7a70] mb-5">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {["Bootstrap", "jQuery", "cPanel", "Figma", "Postman", "XAMPP", "phpMyAdmin", "Netlify", "Vercel", "GitHub Pages"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-[#5a7a70] border border-white/06 bg-[#0d1210] px-3 py-1 rounded-full hover:text-[#9ab5aa] hover:border-white/12 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
