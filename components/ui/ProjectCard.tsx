import { ArrowUpRight } from "lucide-react";
import TechTag from "./TechTag";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  gradient: string;
}

export default function ProjectCard({
  number,
  title,
  description,
  tags,
  url,
  gradient,
}: ProjectCardProps) {
  return (
    <article className="group border border-subtle rounded-md overflow-hidden hover:border-secondary hover:scale-[1.01] transition-all duration-200">
      <div
        className="aspect-video w-full"
        style={{ background: gradient }}
        aria-hidden="true"
      />
      <div className="p-5">
        <span className="text-xs text-secondary/60 font-mono mb-2 block">
          {number}
        </span>
        <h3 className="text-sm font-medium text-primary mb-2">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors duration-200 cursor-none"
            >
              {title}
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-hidden="true"
              />
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-sm text-secondary leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechTag key={tag}>{tag}</TechTag>
          ))}
        </div>
      </div>
    </article>
  );
}
