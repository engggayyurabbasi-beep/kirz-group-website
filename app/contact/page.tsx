"use client";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { useLanguage } from "@/components/LanguageProvider";
export default function ContactPage() {
 const {t,locale}=useLanguage(); const hi=locale==="hi";
 return <>
  <PageIntro eyebrow={hi?"संपर्क करें":"GET IN TOUCH"} title={t.contactTitle} description={t.contactText}/>
  <section className="container contact-page-content"><div className="contact-page-heading"><div className="eyebrow dark">{hi?"हमसे जुड़ें":"CONTACT KIRZ GROUP"}</div><h2>{hi?"हम आपकी बात सुनना चाहेंगे।":"We'd be glad to hear from you."}</h2><p>{hi?"व्यवसाय, ब्रांड, पार्टनरशिप या सामान्य जानकारी के लिए संपर्क करें।":"Reach out for business, brand, partnership or general enquiries."}</p></div>
   <div className="contact-grid">
    <a className="contact-card" href="tel:+917300700809"><span className="contact-icon">↗</span><span className="contact-label">{hi?"फोन / व्हाट्सऐप":"PHONE / WHATSAPP"}</span><strong>+91-7300700809</strong><span>{hi?"कॉल करने के लिए टैप करें":"Tap to call our team"}</span></a>
    <a className="contact-card" href="mailto:info@kirzgroup.com"><span className="contact-icon">@</span><span className="contact-label">{hi?"ईमेल":"EMAIL"}</span><strong>info@kirzgroup.com</strong><span>{hi?"ईमेल भेजने के लिए टैप करें":"Send us an email"}</span></a>
    <div className="contact-card"><span className="contact-icon">⌖</span><span className="contact-label">{hi?"कार्यालय / स्थान":"LOCATION"}</span><strong>{hi?"कांधला, शामली":"Kandhla, Shamli"}</strong><span>{hi?"उत्तर प्रदेश, भारत":"Uttar Pradesh, India"}</span></div>
   </div>
   <div className="contact-action-band"><div><div className="eyebrow">{hi?"व्यवसायिक सहयोग":"BUSINESS ENQUIRIES"}</div><h2>{hi?"क्या आप हमारे साथ काम करना चाहते हैं?":"Looking to work with KIRZ Group?"}</h2><p>{hi?"डिस्ट्रीब्यूशन, रीसेलिंग, होलसेल या सहयोग के लिए अपनी जानकारी भेजें।":"Tell us about your distribution, reseller, wholesale or collaboration plans."}</p></div><Link className="button button-gold" href="/partnership">{t.sendEnquiry} ↗</Link></div>
  </section>
 </>;
}
