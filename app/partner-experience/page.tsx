"use client";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { useLanguage } from "@/components/LanguageProvider";
export default function PartnerExperiencePage(){
 const {locale}=useLanguage();const hi=locale==="hi";
 return <>
  <PageIntro eyebrow={hi?"पार्टनर अनुभव":"PARTNER EXPERIENCE"} title={hi?"विश्वास से बनते हैं मजबूत संबंध।":"Strong relationships start with trust."} description={hi?"हम गुणवत्ता, स्पष्ट संवाद और दीर्घकालिक व्यावसायिक संबंधों को महत्व देते हैं।":"We value quality, clear communication and long-term business relationships."}/>
  <section className="container partner-experience-page">
   <div className="partner-experience-card"><span className="partner-experience-quote">“</span><div><h2>{hi?"आपकी राय हमारे लिए महत्वपूर्ण है।":"Your experience matters to us."}</h2><p>{hi?"KIRZ Group के साथ काम करने का अपना अनुभव साझा करें। आपकी अनुमति से सत्यापित फीडबैक हमारी वेबसाइट पर प्रकाशित किया जा सकता है।":"Share your experience of working with KIRZ Group. Verified partner feedback may be featured on our website with your permission."}</p><Link className="button button-gold" href="/contact">{hi?"अपना अनुभव साझा करें":"Share your feedback"} ↗</Link></div></div>
  </section>
 </>;
}
