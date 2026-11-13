"use client";
import Link from "next/link";
import { notFound,useParams } from "next/navigation";
import { usePortfolio } from "@/components/usePortfolio";
import { useLanguage } from "@/components/LanguageProvider";
export default function BrandProfile(){
 const params=useParams<{slug:string}>();const {items,ready}=usePortfolio();const {locale}=useLanguage();const hi=locale==="hi";
 if(!ready)return <div className="container portfolio-loading">Loading profile...</div>;
 const item=items.find(x=>x.slug===params.slug&&x.active);if(!item)return notFound();
 const blocks=[
  [hi?"उत्पाद एवं सेवाएं":"PRODUCTS & SERVICES",hi?item.productsTextHi:item.productsText],
  [hi?"थर्ड-पार्टी मैन्युफैक्चरिंग":"THIRD-PARTY MANUFACTURING",hi?item.manufacturingTextHi:item.manufacturingText],
  [hi?"बिजनेस पार्टनर":"BUSINESS PARTNERS",hi?item.partnerTextHi:item.partnerText],
  [hi?"होलसेलर":"WHOLESALERS",hi?item.wholesaleTextHi:item.wholesaleText],
  [hi?"रिटेलर":"RETAILERS",hi?item.retailTextHi:item.retailText],
  [hi?"व्यवसाय की जानकारी":"BUSINESS INFORMATION",hi?item.businessInfoHi:item.businessInfo]
 ];
 const actions=item.actions.filter(a=>a.url);
 return <section className="portfolio-profile">
  <div className="portfolio-profile-cover" style={{backgroundImage:`linear-gradient(90deg,rgba(8,8,8,.96),rgba(8,8,8,.48)),url("${item.coverUrl}")`}}>
   <div className="container portfolio-profile-cover-inner"><Link href="/brands" className="portfolio-back">← {hi?"सभी ब्रांड":"All Brands"}</Link><img src={item.logoUrl} alt={`${item.name} logo`}/><div className="eyebrow">{hi?item.categoryHi:item.category}</div><h1>{item.name}</h1><p>{hi?item.shortDescriptionHi:item.shortDescription}</p></div>
  </div>
  <div className="container portfolio-profile-content"><div className="portfolio-profile-intro"><div><div className="eyebrow dark">{hi?"ब्रांड परिचय":"ABOUT THIS BRAND"}</div><h2>{hi?`${item.name} के बारे में`:`About ${item.name}`}</h2><p>{hi?item.descriptionHi:item.description}</p></div><div className="portfolio-profile-contact"><span>{hi?"व्यवसायिक पूछताछ":"BUSINESS ENQUIRIES"}</span><strong>+91-7300700809</strong><a href="mailto:info@kirzgroup.com">info@kirzgroup.com</a></div></div>
   <div className="portfolio-profile-actions">{actions.map((a,i)=>a.url.startsWith("http")?<a key={i} className={`portfolio-action ${i===0?"portfolio-action-primary":""}`} href={a.url} target="_blank" rel="noopener noreferrer">{a.label} ↗</a>:<Link key={i} className={`portfolio-action ${i===0?"portfolio-action-primary":""}`} href={a.url}>{a.label} ↗</Link>)}{item.appDownloadUrl&&<a className="portfolio-action portfolio-action-download" href={item.appDownloadUrl} target="_blank" rel="noopener noreferrer">{hi?"ऐप डाउनलोड करें":"Download App"} ↓</a>}</div>
   <div className="portfolio-detail-grid">{blocks.map(([heading,body],i)=><article id={["products-services","manufacturing","partners","wholesalers","retailers","business-information"][i]} className="portfolio-detail-panel" key={i}><span>0{i+1} / KIRZ GROUP</span><h2>{heading}</h2><p>{body}</p></article>)}</div>
   <div className="portfolio-profile-cta"><div><div className="eyebrow">{hi?"हमारे साथ जुड़ें":"GROW WITH KIRZ GROUP"}</div><h2>{hi?"बिजनेस पार्टनरशिप के लिए संपर्क करें।":"Interested in working with this business?"}</h2><p>{hi?"होलसेल, रिटेल, मैन्युफैक्चरिंग या बिजनेस सहयोग के लिए पूछताछ भेजें।":"Send an enquiry about wholesale, retail, manufacturing or business collaboration."}</p></div><Link className="button button-gold" href="/partnership">{hi?"पार्टनरशिप पूछताछ":"Business Enquiry"} ↗</Link></div>
  </div>
 </section>;
}
