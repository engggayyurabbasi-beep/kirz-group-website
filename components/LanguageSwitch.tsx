"use client";
import { useLanguage } from "./LanguageProvider";
export default function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();
  return <div className="language-switch" aria-label="Choose language">
    <button className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>EN</button>
    <span />
    <button className={locale === "hi" ? "active" : ""} onClick={() => setLocale("hi")}>हिंदी</button>
  </div>;
}
