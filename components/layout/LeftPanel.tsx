"use client";

import NavLink from "@/components/ui/NavLink";
import SocialLinks from "@/components/ui/SocialLinks";
import { useLanguage } from "@/lib/i18n";
import { personal, ui } from "@/lib/portfolio-data";

const navItems = [
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
];

interface LeftPanelProps {
  activeSection: string;
}

export default function LeftPanel({ activeSection }: LeftPanelProps) {
  const { lang, toggle } = useLanguage();
  const t = ui[lang];

  return (
    <aside className="lg:w-2/5 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between pt-16 pb-8 lg:py-24">
      <div>
        <div className="animate-fade-up anim-delay-1">
          <h1 className="font-display text-4xl lg:text-5xl text-primary leading-tight mb-2">
            {personal.name}
          </h1>
          <p className="text-xs uppercase tracking-widest text-secondary mb-5">
            {t.role}
          </p>
          <p className="text-sm text-secondary leading-relaxed max-w-xs">
            {t.tagline}
          </p>
        </div>

        <nav
          className="hidden lg:flex flex-col gap-5 mt-14 animate-fade-up anim-delay-2"
          aria-label={t.navLabel}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={activeSection === item.href}
            />
          ))}
        </nav>
      </div>

      <div className="hidden lg:flex lg:flex-col lg:gap-6 animate-fade-up anim-delay-3">
        <SocialLinks />
        <button
          onClick={toggle}
          className="self-start text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200 cursor-none"
          aria-label={`Switch to ${t.langToggle}`}
        >
          {t.langToggle}
        </button>
      </div>
    </aside>
  );
}
