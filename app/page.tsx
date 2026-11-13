"use client";
import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";
import HomeBannerSlider from "@/components/HomeBannerSlider";
import { usePortfolio } from "@/components/usePortfolio";
import { useLanguage } from "@/components/LanguageProvider";
import { useSiteSettings } from "@/components/useSiteSettings";

export default function HomePage() {
  const { t, locale } = useLanguage();
  const hi = locale === "hi";
  const { items, ready } = usePortfolio();
  const site = useSiteSettings();
  const featured = items.filter((item) => item.active);

  return <>
    <section className="hero home-hero">
      <div className="container hero-inner">
        <div className="eyebrow"><span /> {t.heroEyebrow}</div>
        <h1>{hi ? site.homeTitleHi : site.homeTitleEn}</h1>
        <p className="hero-copy">{hi ? site.homeIntroHi : site.homeIntroEn}</p>
        <div className="hero-actions">
          <Link className="button button-gold" href="/brands">{t.explore} <span aria-hidden="true">↗</span></Link>
          <Link className="button button-outline" href="/partnership">{t.partner}</Link>
        </div>
        <div className="hero-note"><span className="gold-line" /> {hi ? "एक समूह। अनेक व्यवसाय। साझा उद्देश्य।" : "One Group. Multiple Businesses. Shared Ambition."}</div>
        <div className="hero-index">KIRZ <span>／</span> GROUP</div>
      </div>
    </section>

    <section className="home-about section">
      <div className="container home-about-inner">
        <div><div className="eyebrow dark">{t.aboutEyebrow}</div><h2>{t.aboutTitle}</h2></div>
        <div className="home-about-copy"><p>{t.aboutText}</p><Link className="text-link" href="/about">{t.learnMore} <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>

    <HomeBannerSlider />

    <section className="home-portfolio section section-soft">
      <div className="container">
        <div className="section-heading home-section-heading">
          <div><div className="eyebrow dark">{t.portfolio}</div><h2>{t.portfolioTitle}</h2></div>
          <Link className="text-link" href="/brands">{t.viewAll} <span aria-hidden="true">↗</span></Link>
        </div>
        {!ready ? <div className="portfolio-loading">{hi ? "पोर्टफोलियो लोड हो रहा है..." : "Loading portfolio..."}</div> :
          <div className="portfolio-cards-grid home-portfolio-grid">{featured.map((item) => <PortfolioCard key={item.id} item={item} />)}</div>}
      </div>
    </section>
  </>;
}
