"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Banner = { id: string; imageUrl: string; alt: string; url: string; active: boolean; order: number };

export default function HomeBannerSlider() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let live = true;
    fetch("/api/banners", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        if (live && Array.isArray(data.banners)) {
          setBanners(data.banners.filter((banner: Banner) => banner.active).sort((a: Banner, b: Banner) => a.order - b.order));
        }
      })
      .catch(() => undefined)
      .finally(() => { if (live) setLoaded(true); });
    return () => { live = false; };
  }, []);

  useEffect(() => {
    if (banners.length < 2) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % banners.length), 5000);
    return () => window.clearInterval(timer);
  }, [banners.length]);

  // Keep the 320:100 banner area visible even before the administrator uploads banners.
  if (!loaded || banners.length === 0) {
    return (
      <section className="home-banner-section" aria-label="KIRZ Group banner area">
        <div className="container home-banner-wrap">
          <div className="home-banner-link home-banner-placeholder">
            <img className="home-banner-image" src="/images/kirz-group-banner-placeholder.svg" alt="KIRZ Group — Building Businesses. Creating Opportunities." />
          </div>
        </div>
      </section>
    );
  }

  const current = banners[index % banners.length];
  const visual = <img className="home-banner-image" src={current.imageUrl} alt={current.alt || "KIRZ Group banner"} />;

  return (
    <section className="home-banner-section" aria-label="KIRZ Group promotions">
      <div className="container home-banner-wrap">
        {current.url ? <Link href={current.url} className="home-banner-link">{visual}</Link> : <div className="home-banner-link">{visual}</div>}
        {banners.length > 1 && (
          <div className="home-banner-controls" aria-label="Banner navigation">
            <button type="button" aria-label="Previous banner" onClick={() => setIndex((i) => (i - 1 + banners.length) % banners.length)}>‹</button>
            <div className="home-banner-dots">
              {banners.map((banner, i) => <button type="button" key={banner.id} aria-label={`Show banner ${i + 1}`} aria-current={i === index} className={i === index ? "active" : ""} onClick={() => setIndex(i)} />)}
            </div>
            <button type="button" aria-label="Next banner" onClick={() => setIndex((i) => (i + 1) % banners.length)}>›</button>
          </div>
        )}
      </div>
    </section>
  );
}
