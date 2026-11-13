"use client";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { useLanguage } from "@/components/LanguageProvider";
export default function BusinessesPage() {
 const {locale}=useLanguage(); const hi=locale==="hi";
 const items = hi ? [
 ["01","स्वास्थ्य एवं वेलनेस","आयुर्वेदिक, यूनानी और हर्बल उत्पादों के माध्यम से वेलनेस श्रेणी में कार्य।","AL-HIND DAWAKHANA"],
 ["02","कंज्यूमर उत्पाद","घरेलू उपयोग और रोजमर्रा की जरूरतों के लिए क्लीनिंग उत्पाद।","SWEETHEART"],
 ["03","प्रिंटिंग एवं पब्लिशिंग","प्रिंटिंग, पब्लिशिंग और क्रिएटिव कम्युनिकेशन से जुड़ी सेवाएं।","SOFT PRINT"],
 ["04","टेक्नोलॉजी एवं डिजिटल","डिजिटल टूल्स, ऑनलाइन प्लेटफॉर्म और मीडिया से जुड़ी पहल।","POSTOKIRZ • KIRZ NEWS • KIRZ STORE"]
 ] : [
 ["01","Healthcare & Wellness","Ayurvedic, Unani and herbal product initiatives focused on wellness categories.","AL-HIND DAWAKHANA"],
 ["02","Consumer Products","Cleaning and household care products designed around everyday needs.","SWEETHEART"],
 ["03","Printing & Publishing","Print production, publishing and creative communication solutions.","SOFT PRINT"],
 ["04","Technology & Digital","Digital tools, online platforms and media-led business initiatives.","POSTOKIRZ • KIRZ NEWS • KIRZ STORE"]
 ];
 return <>
  <PageIntro eyebrow={hi?"हमारे व्यवसाय":"BUSINESS VERTICALS"} title={hi?"विविध व्यवसाय। साझा संकल्प।":"Different sectors. One shared ambition."} description={hi?"KIRZ Group अलग-अलग क्षेत्रों में ब्रांड्स और व्यवसायिक अवसर विकसित करता है।":"KIRZ Group brings together focused businesses across multiple sectors, connected by a shared commitment to quality and progress."}/>
  <section className="container business-page-content"><div className="business-page-heading"><div><div className="eyebrow dark">{hi?"हमारी विशेषज्ञता":"WHERE WE OPERATE"}</div><h2>{hi?"चार प्रमुख व्यवसाय क्षेत्र":"Four business verticals. A growing portfolio."}</h2></div><p>{hi?"हर क्षेत्र में अलग ब्रांड पहचान और स्पष्ट व्यवसायिक फोकस।":"Each vertical has a distinct brand identity and a clear business focus."}</p></div>
   <div className="business-detail-grid">{items.map(([n,title,desc,brands],i)=><article className={`business-detail-card business-detail-${i+1}`} key={n}><div className="business-detail-top"><span>{n} / KIRZ GROUP</span><span className="business-detail-icon">{["✳","◇","▤","⌘"][i]}</span></div><div className="business-detail-bottom"><h2>{title}</h2><p>{desc}</p><div className="business-detail-brands">{brands}</div><Link href="/brands" className="business-detail-link">{hi?"संबंधित ब्रांड देखें":"Explore related brands"} ↗</Link></div></article>)}</div>
  </section>
 </>;
}
