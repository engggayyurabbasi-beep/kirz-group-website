"use client";
import Link from "next/link";
import type { PortfolioItem } from "@/lib/portfolio";
import { useLanguage } from "./LanguageProvider";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const { locale } = useLanguage();
  const hi = locale === "hi";
  const title = item.name;
  const subtitle = hi ? item.shortDescriptionHi : item.shortDescription;

  return (
    <Link
      href={`/brands/${item.slug}`}
      className="portfolio-card portfolio-card-compact"
      aria-label={`${title} — ${subtitle}`}
    >
      <div
        className="portfolio-card-cover portfolio-card-cover-compact"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,10,10,.18),rgba(10,10,10,.58)),url("${item.coverUrl || item.logoUrl || "/images/kirz-group-logo.svg"}")`,
        }}
      >
        <img className="portfolio-card-logo-thumb" src={item.logoUrl || "/images/kirz-group-logo.svg"} alt={`${title} logo`} />
      </div>
      <div className="portfolio-card-compact-body">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
}
