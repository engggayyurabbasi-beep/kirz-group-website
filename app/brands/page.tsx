"use client";
import PageIntro from "@/components/PageIntro";
import PortfolioCard from "@/components/PortfolioCard";
import { usePortfolio } from "@/components/usePortfolio";
import { useLanguage } from "@/components/LanguageProvider";
export default function BrandsPage(){
 const {locale}=useLanguage();const hi=locale==="hi";const {items,ready}=usePortfolio();const active=items.filter(x=>x.active);
 return <><PageIntro eyebrow={hi?"हमारे ब्रांड्स और प्रोडक्ट्स":"OUR BRANDS & INITIATIVES"} title={hi?"एक समूह। कई ब्रांड और डिजिटल पहल।":"One group. A portfolio of brands and digital initiatives."} description={hi?"KIRZ Group के सभी ब्रांड्स, ऐप्स, सेवाओं और बिजनेस अवसरों की जानकारी यहां देखें।":"Explore the brands, apps, services and business opportunities within KIRZ Group."}/>
 <section className="container portfolio-directory"><div className="portfolio-directory-head"><div><div className="eyebrow dark">{hi?"पोर्टफोलियो डायरेक्टरी":"PORTFOLIO DIRECTORY"}</div><h2>{hi?"हर ब्रांड की पूरी जानकारी एक जगह।":"Explore each business in detail."}</h2></div><div className="portfolio-count"><strong>{String(active.length).padStart(2,"0")}</strong><span>{hi?"ब्रांड एवं पहल":"BRANDS & INITIATIVES"}</span></div></div>
 {!ready?<div className="portfolio-loading">{hi?"पोर्टफोलियो लोड हो रहा है...":"Loading portfolio..."}</div>:<div className="portfolio-cards-grid">{active.map(item=><PortfolioCard key={item.id} item={item}/>)}</div>}
 <div className="portfolio-add-note"><span>✳</span><p>{hi?"नए ब्रांड, ऐप या सेवाएं समय-समय पर इस पोर्टफोलियो में जोड़ी जा सकती हैं।":"New brands, apps and services can be added to this portfolio as the group grows."}</p></div>
 </section></>;
}
