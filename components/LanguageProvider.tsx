"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { copy, type Locale } from "@/lib/data";
type Ctx = { locale: Locale; setLocale: (v: Locale) => void; t: typeof copy.en | typeof copy.hi };
const LanguageContext = createContext<Ctx | null>(null);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => { const saved = localStorage.getItem("kirz-locale"); if (saved === "hi" || saved === "en") setLocale(saved); }, []);
  function change(v: Locale) { setLocale(v); localStorage.setItem("kirz-locale", v); }
  return <LanguageContext.Provider value={{ locale, setLocale: change, t: copy[locale] }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
