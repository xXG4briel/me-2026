interface TechTagProps {
  children: React.ReactNode;
}

export default function TechTag({ children }: TechTagProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-mono text-secondary bg-surface border border-subtle rounded">
      {children}
    </span>
  );
}
