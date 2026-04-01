"use client";

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
}

export default function NavLink({ href, label, active }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={`#${href}`}
      onClick={handleClick}
      aria-current={active ? "true" : undefined}
      className={`nav-link text-xs uppercase tracking-widest transition-colors duration-200 cursor-none ${
        active ? "active text-primary" : "text-secondary hover:text-primary"
      }`}
    >
      {label}
    </a>
  );
}
