"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { useLanguage } from "@/lib/i18n";
import { projects } from "@/lib/portfolio-data";

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" data-section="projects" className="animate-fade-up anim-delay-3">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            number={project.number}
            title={project.title}
            description={project.description[lang]}
            tags={project.tags}
            url={project.url}
            gradient={project.gradient}
          />
        ))}
      </div>
    </section>
  );
}
