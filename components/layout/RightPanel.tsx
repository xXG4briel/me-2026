"use client";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/portfolio-data";

export default function RightPanel() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <div className="lg:w-3/5 pb-16 lg:py-24 flex flex-col gap-28 lg:gap-36">
      <About />
      <Experience />
      <Projects />
      <footer className="text-xs text-secondary/60 pb-4">{t.footer}</footer>
    </div>
  );
}
