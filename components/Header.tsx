"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "./LanguageProvider";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { t, locale } = useLanguage();
  const hi = locale === "hi";
  const links = [[t.home, "/"], [t.businesses, "/businesses"], [t.brands, "/brands"], [t.contact, "/contact"]];
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="logo-link" onClick={() => {setOpen(false);setMoreOpen(false);}}><img src="/images/kirz-group-logo.svg" alt="KIRZ Group" className="header-logo" /></Link>
    <nav className={open ? "nav nav-open" : "nav"} aria-label="Main navigation">
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="mobile-admin-link" href="/admin/login" onClick={() => setOpen(false)}>{t.login}</Link>
    </nav>
    <div className="header-actions"><LanguageSwitch />
      <div className="more-menu-wrap">
        <button className="more-menu-button" type="button" aria-label={hi ? "अन्य विकल्प" : "More options"} aria-expanded={moreOpen} onClick={() => setMoreOpen(!moreOpen)}>⋮</button>
        {moreOpen && <div className="more-menu-panel">
          <Link href="/about" onClick={() => setMoreOpen(false)}>{hi ? "कंपनी प्रोफाइल" : "Company Profile"}</Link>
          <Link href="/partner-experience" onClick={() => setMoreOpen(false)}>{hi ? "पार्टनर अनुभव" : "Partner Experience"}</Link>
          <Link href="/partnership" onClick={() => setMoreOpen(false)}>{hi ? "बिजनेस पार्टनरशिप" : "Business Partnership"}</Link>
        </div>}
      </div>
      <Link className="header-cta" href="/admin/login">{t.login}</Link>
    </div>
    <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span className="menu-glyph">{open ? "×" : "☰"}</span></button>
  </div></header>;
}
