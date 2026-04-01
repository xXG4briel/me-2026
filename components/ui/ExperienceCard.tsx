import { ArrowUpRight } from "lucide-react";
import TechTag from "./TechTag";

interface ExperienceCardProps {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  tags: string[];
}

export default function ExperienceCard({
  period,
  role,
  company,
  companyUrl,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <article className="group grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-6 p-4 -mx-4 rounded-md border border-transparent hover:border-subtle hover:bg-surface transition-all duration-200">
      <span className="text-xs text-secondary font-mono pt-0.5 uppercase tracking-wide shrink-0">
        {period}
      </span>
      <div>
        <h3 className="text-sm font-medium text-primary mb-1.5">
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors duration-200 cursor-none"
            >
              {role} · {company}
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-hidden="true"
              />
            </a>
          ) : (
            `${role} · ${company}`
          )}
        </h3>
        <p className="text-sm text-secondary leading-relaxed mb-3">
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
