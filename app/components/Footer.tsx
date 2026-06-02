import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { siteConfig } from "../lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#090d0c] border-t border-white/06">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo — matches navbar exactly */}
            <a href="#hero" className="flex items-center gap-2 group mb-4 w-fit">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/Logo.svg"
                  alt="Vucore Tech"
                  width={35}
                  height={35}
                  className="rounded-lg object-contain"
                />
              </div>
              <span className="font-syne font-bold text-base text-[#e0ede8]">
                Vucore<span className="text-[#cc0000]">Tech</span>
              </span>
            </a>

            <p className="text-[14px] text-[#5a7a70] leading-relaxed max-w-xs">
              Full-stack web developer building modern, production-ready
              applications. Based in Kenya, working globally.
            </p>

            <div className="flex gap-3 mt-5">
              {[
                { icon: FaGithub, href: siteConfig.socials.github, label: "GitHub" },
                { icon: FaLinkedinIn, href: siteConfig.socials.linkedin, label: "LinkedIn" },
                { icon: FaInstagram, href: siteConfig.socials.instagram, label: "Instagram" },
                { icon: MessageCircle, href: siteConfig.whatsapp, label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/08 flex items-center justify-center text-[#5a7a70] hover:text-[#cc1000] hover:border-[#cc1000]/20 hover:bg-[#cc1000]/06 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#5a7a70] mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#9ab5aa] hover:text-[#cc1000] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#5a7a70] mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[13px] text-[#9ab5aa] hover:text-[#cc1000] transition-colors flex items-center gap-2"
                >
                  <Mail size={12} /> {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#9ab5aa] hover:text-[#cc1000] transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={12} /> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.cv}
                  download
                  className="text-[13px] text-[#9ab5aa] hover:text-[#cc1000] transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/06 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[11px] text-[#5a7a70]">
            © {year} Vucore Tech. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-[#5a7a70]">
            Built by <span className="text-[#cc1000]">VucoreTech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}