"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";
import { useLanguage } from "@/lib/i18n";
import { personal, ui } from "@/lib/portfolio-data";

const navItems = [
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
];

interface MobileHeaderProps {
  activeSection: string;
}

export default function MobileHeader({ activeSection }: MobileHeaderProps) {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = ui[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-subtle">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-display text-lg text-primary">{personal.name}</span>
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors cursor-none"
            aria-label={`Switch to ${t.langToggle}`}
          >
            {t.langToggle}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? t.closeMenu : t.openMenu}
            className="text-secondary hover:text-primary transition-colors cursor-none"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-subtle bg-bg px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`text-left text-sm uppercase tracking-widest transition-colors duration-200 cursor-none ${
                activeSection === item.href ? "text-primary" : "text-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-subtle">
            <SocialLinks />
          </div>
        </nav>
      )}
    </header>
  );
}
