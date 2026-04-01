"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "./portfolio-data";

type LangContextType = {
  lang: Lang;
  toggle: () => void;
};

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "pt" : "en"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
