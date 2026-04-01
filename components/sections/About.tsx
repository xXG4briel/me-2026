"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/lib/i18n";
import { about } from "@/lib/portfolio-data";

export default function About() {
  const { lang } = useLanguage();
  const paragraphs = about[lang];

  return (
    <section id="about" data-section="about" className="animate-fade-up anim-delay-1">
      <SectionTitle>About</SectionTitle>
      <div className="space-y-4 text-sm text-secondary leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>
            {p.before}
            {p.highlight && (
              <span className="text-primary font-medium">{p.highlight}</span>
            )}
            {p.after}
          </p>
        ))}
      </div>
    </section>
  );
}
