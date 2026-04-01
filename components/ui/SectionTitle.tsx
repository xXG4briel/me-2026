interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-xs uppercase tracking-widest text-secondary font-mono whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-subtle" aria-hidden="true" />
    </div>
  );
}
