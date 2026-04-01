"use client";

import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { useLanguage } from "@/lib/i18n";
import { experiences, personal, ui } from "@/lib/portfolio-data";

export default function Experience() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <section id="experience" data-section="experience" className="animate-fade-up anim-delay-2">
      <SectionTitle>Experience</SectionTitle>
      <div className="flex flex-col gap-1">
        {experiences.map((exp) => (
          <ExperienceCard
            key={`${exp.company}-${exp.period.en}`}
            period={exp.period[lang]}
            role={exp.role[lang]}
            company={exp.company}
            companyUrl={exp.companyUrl}
            description={exp.description[lang]}
            tags={exp.tags}
          />
        ))}
      </div>
      <div className="mt-8">
        <a
          href={personal.resumeUrl}
          className="inline-flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors duration-200 group cursor-none"
        >
          {t.viewResume}
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
