"use client";
import Link from "next/link";
import type { Brand } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export default function BrandCard({ brand }: { brand: Brand }) {
  const { locale } = useLanguage();
  const hi = locale === "hi";
  return <Link href={`/brands/${brand.slug}`} className="brand-card brand-card-compact" aria-label={`${brand.name} — ${hi ? brand.descriptionHi : brand.description}`}>
    <div className="brand-card-image brand-card-image-compact"><img src={`/images/${brand.slug}-logo.svg`} alt={`${brand.name} logo`} /></div>
    <div className="brand-card-content brand-card-content-compact"><h3>{brand.name}</h3><p>{hi ? brand.descriptionHi : brand.description}</p></div>
  </Link>;
}
