"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle, Download, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const res = await fetch("https://formspree.io/f/xdkdwvwv", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#111815] border border-white/08 rounded-xl text-[#e0ede8] font-mono text-[13px] px-4 py-3 placeholder:text-[#5a7a70] focus:outline-none focus:border-[#00ff87]/35 focus:bg-[#161f1c] transition-all";

  return (
    <section id="contact" className="py-28 bg-[#0d1210]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#cc1000]">05 / Contact</span>
          <h2 className="font-syne font-black text-[clamp(2rem,4vw,2.8rem)] tracking-tight text-[#e0ede8] mt-2">
            Let&apos;s Work Together
          </h2>
          <p className="text-[15px] text-[#9ab5aa] mt-2">
            Have a project in mind or want to hire me? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 items-start">

          {/* LEFT — Info */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-6">
            <h3 className="font-syne font-bold text-[1.3rem] text-[#e0ede8]">Get In Touch</h3>

            {/* Contact items */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: siteConfig.phone,
                  href: siteConfig.whatsapp,
                  red: true,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: siteConfig.location,
                  href: undefined,
                },
              ].map(({ icon: Icon, label, value, href, red }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${
                      red
                        ? "bg-[#25d366]/08 border-[#cc1000]/20 text-[#cc1000]"
                        : "bg-[#cc1000]/06 border-[#cc1000]/15 text-[#cc1000]"
                    }`}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#5a7a70]">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[14px] text-[#e0ede8] hover:text-[#cc1000] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-[14px] text-[#e0ede8]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#5a7a70] mb-3">Follow me</p>
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
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center hover:-translate-y-[2px] transition-all ${
                      red
                        ? "text-[#cc1000] border-[#cc1000]/20 bg-[#111815] hover:bg-[#cc1000]/08"
                        : "text-[#9ab5aa] border-white/10 bg-[#111815] hover:text-[#cc1000] hover:bg-[#cc1000]/06 hover:border-[#cc1000]/20"
                    }`}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <a
              href={siteConfig.cv}
              download
              className="inline-flex items-center gap-2 bg-[#cc1000] text-black font-mono font-bold text-[12px] tracking-wider uppercase px-6 py-3 rounded-lg hover:bg-[#b30d00] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(204,16,0,0.2)] transition-all w-full justify-center"
            >
              <Download size={14} /> Download CV
            </a>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            {...fadeUp(0.2)}
            className="bg-[#111815] border border-white/06 rounded-2xl p-8"
          >
            

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] tracking-wider uppercase text-[#9ab5aa] block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] tracking-wider uppercase text-[#9ab5aa] block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-[#9ab5aa] block mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-[#9ab5aa] block mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-[#9ab5aa] block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-[#cc1000] text-black font-mono font-bold text-[12px] tracking-wider uppercase px-6 py-3 rounded-xl hover:bg-[#b30d00] disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(204,16,0,0.2)] transition-all"
              >
                {status === "loading" ? (
                  <><Loader2 size={14} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={14} /> Send Message</>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-[#cc1000]/08 border border-[#cc1000]/20 rounded-xl text-[#cc1000] font-mono text-[12px]"
                >
                  <CheckCircle2 size={15} />
                  Message sent! I&apos;ll get back to you within 24 hours.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-[#cc1000]/08 border border-[#cc1000]/20 rounded-xl text-[#cc1000] font-mono text-[12px]"
                >
                  <AlertCircle size={15} />
                  Something went wrong. Try WhatsApp or email directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
