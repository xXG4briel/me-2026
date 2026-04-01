export type Lang = "en" | "pt";
export type Bilingual<T> = { en: T; pt: T };

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: "Gabriel Nicodemus",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/xXG4briel",
    linkedin: "https://www.linkedin.com/in/gabriel-nicodemus",
    twitter: "https://x.com",
  },
};

// ─── UI Strings ───────────────────────────────────────────────────────────────
export const ui: Bilingual<{
  role: string;
  tagline: string;
  navLabel: string;
  openMenu: string;
  closeMenu: string;
  viewResume: string;
  footer: string;
  langToggle: string;
}> = {
  en: {
    role: "Full Stack Developer",
    tagline:
      "I build interfaces and systems for the web, focused on experience and performance.",
    navLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    viewResume: "View full resume",
    footer: "Built with Next.js, Tailwind CSS and SCSS.",
    langToggle: "PT",
  },
  pt: {
    role: "Desenvolvedor Full Stack",
    tagline:
      "Construo interfaces e sistemas para a web, com foco em experiência e performance.",
    navLabel: "Navegação principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    viewResume: "Ver currículo completo",
    footer: "Desenvolvido com Next.js, Tailwind CSS e SCSS.",
    langToggle: "EN",
  },
};

// ─── About ────────────────────────────────────────────────────────────────────
export type Paragraph = {
  before?: string;
  highlight?: string;
  after?: string;
};

export const about: Bilingual<Paragraph[]> = {
  en: [
    {
      before: "I'm a full stack developer focused on building ",
      highlight: "fast and accessible digital experiences",
      after:
        " for the web. I work with the modern JavaScript ecosystem, always seeking the balance between clean code and real user impact.",
    },
    {
      before: "Currently building products at ",
      highlight: "BTG Pactual",
      after:
        "",
    },
    {
      before: "Outside of work, I contribute to ",
      highlight: "open source projects",
      after:
        ", write about web development, and explore tools that can improve engineering team workflows.",
    },
  ],
  pt: [
    {
      before: "Sou um desenvolvedor full stack com foco em criar ",
      highlight: "experiências digitais rápidas e acessíveis",
      after:
        " para a web. Trabalho com o ecossistema JavaScript moderno, sempre buscando o equilíbrio entre código limpo e impacto real para o usuário.",
    },
    {
      before: "Atualmente construo produtos na ",
      highlight: "BTG Pactual",
      after:
        "",
    },
    {
      before: "Fora do trabalho, contribuo para ",
      highlight: "projetos open source",
      after:
        ", escrevo sobre desenvolvimento web e exploro ferramentas que possam melhorar o fluxo de trabalho de times de engenharia.",
    },
  ],
};

// ─── Experience ───────────────────────────────────────────────────────────────
export type Experience = {
  period: Bilingual<string>;
  role: Bilingual<string>;
  company: string;
  companyUrl?: string;
  description: Bilingual<string>;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    period: { en: "2024 — Present", pt: "2024 — Atual" },
    role: { en: "Full Stack Engineer", pt: "Engenheiro Full Stack" },
    company: "BTG Pactual",
    companyUrl: "https://www.btgpactual.com",
    description: {
      en: "Software Engineer at BTG Pactual building critical financial systems — including auction automation, payment portals, and asset disbursement features ",
      pt: "Engenheiro de Software no BTG Pactual desenvolvendo sistemas financeiros críticos — incluindo automação de leilões, portal de pagamentos e funcionalidades de desembolso de ativos",
    },
    tags: [".NET", "C#", "Docker", "Kubernetes", "Rancher", "Azure Devops", "React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    period: { en: "2023 — 2024", pt: "2023 — 2024" },
    role: { en: "Developer", pt: "Desenvolvedor" },
    company: "Grupo SKill",
    companyUrl: "http://gruposkill.com.br/",
    description: {
      en: "Software Engineer at Grupo Skill building web platforms and financial integrations — including MFA implementation, end-to-end banking integrations with major Brazilian banks, and ERP synchronization via SAP B1",
      pt: "Engenheiro de Software no Grupo Skill desenvolvendo plataformas web e integrações financeiras — incluindo implementação de MFA, integrações bancárias completas com grandes bancos brasileiros e sincronização com ERP via SAP B1",
    },
    tags: ["React", "Nest.js", "Node.js", "Docker", "PostgreSQL", "Kubernetes", "GitLab"],
  },
  {
    period: { en: "2021 — 2023", pt: "2021 — 2023" },
    role: { en: "Developer", pt: "Desenvolvedor" },
    company: "App Project",
    companyUrl: "http://www.keybest.com.br/",
    description: {
      en: "Software Developer at Appproject building diverse platforms across mobile, web, and cloud — including a mental health app for Itaú Bank contractors, a DPVAT insurance platform for delivery workers, a local business advertising system across São Paulo, and a fiscal/accounting management system used by accountants today",
      pt: "Desenvolvedor de Software na Appproject construindo plataformas diversas em mobile, web e cloud — incluindo um app de saúde mental para terceirizados do Itaú, uma plataforma de seguro DPVAT para motoboys, um sistema de anúncios para comércios locais em São Paulo e um sistema fiscal/contábil utilizado por contadores até hoje",
    },
    tags: ["Angular", "Ionic", "Node.js", ".NET", ".NET Framework", "C#", "ISS", "FTP", "Cordova", "Android Studio"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  number: string;
  title: string;
  description: Bilingual<string>;
  tags: string[];
  url?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Acesso fácil",
    description: {
      en: "A user access management system for enterprises featuring facial recognition and OTP authentication, enabling administrators to manage, monitor, and control user access across the organization.",
      pt: "Um sistema de gestão de acesso de usuários para empresas com autenticação por reconhecimento facial e OTP, permitindo que administradores gerenciem, monitorem e controlem os acessos dos usuários na organização.",
    },
    tags: ["Angular", "Docker", "Prisma", "NestJs", "Flask", "OpenCV"],
    url: "https://github.com/xXG4briel/acesso-facil",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #252525 50%, #1e1e1e 100%)",
  },
];
