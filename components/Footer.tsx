"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { useSiteSettings } from "./useSiteSettings";

export default function Footer() {
  const { t, locale } = useLanguage();
  const hi = locale === "hi";
  const s = useSiteSettings();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <p>{t.footerText}</p>
        </div>

        <div className="footer-nav-group">
          <h4>{t.footerExplore}</h4>
          <div className="footer-links">
            <Link href="/brands">{t.brands}</Link>
            <Link href="/businesses">{t.businesses}</Link>
            <Link href="/partnership">{hi ? "बिजनेस पार्टनरशिप" : "Business Partnership"}</Link>
            <Link href="/about">{hi ? "कंपनी प्रोफाइल" : "Company Profile"}</Link>
            <Link href="/partner-experience">{hi ? "पार्टनर अनुभव" : "Partner Experience"}</Link>
          </div>
        </div>

        <div className="footer-nav-group">
          <h4>{t.footerInfo}</h4>
          <div className="footer-links">
            <Link href="/contact">{t.contact}</Link>
            <Link href="/privacy">{t.privacy}</Link>
            <Link href="/terms">{t.terms}</Link>
            <Link href="/admin/login">{t.login}</Link>
          </div>
        </div>

        <div className="footer-bottom" aria-label="KIRZ Group copyright and tagline">
          <img src="/images/kirz-group-logo.svg" alt="KIRZ Group" className="footer-bottom-logo" />
          <div className="footer-bottom-copy">
            <span>© {new Date().getFullYear()} KIRZ Group. All rights reserved.</span>
            <span>Building Businesses. Creating Opportunities.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
