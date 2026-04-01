"use client";

import { useState, useEffect } from "react";
import LeftPanel from "@/components/layout/LeftPanel";
import RightPanel from "@/components/layout/RightPanel";
import MobileHeader from "@/components/layout/MobileHeader";
import { LangProvider } from "@/lib/i18n";

export default function PortfolioLayout() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section");
            if (id) setActiveSection(id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <LangProvider>
      <MobileHeader activeSection={activeSection} />
      <main className="max-w-6xl mx-auto px-6 lg:flex lg:gap-16 min-h-screen">
        <LeftPanel activeSection={activeSection} />
        <RightPanel />
      </main>
    </LangProvider>
  );
}
