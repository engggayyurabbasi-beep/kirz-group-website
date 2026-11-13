"use client";
import PartnershipForm from "@/components/PartnershipForm";
import PageIntro from "@/components/PageIntro";
import { useLanguage } from "@/components/LanguageProvider";
export default function PartnershipPage(){
 const {t,locale}=useLanguage(); const hi=locale==="hi";
 const options=hi?[["01","डिस्ट्रीब्यूशन पार्टनर","अपने क्षेत्र में KIRZ Group के ब्रांड्स के वितरण के अवसर।","⇄"],["02","रीसेलर पार्टनर","अपने नेटवर्क और ग्राहकों के माध्यम से उत्पादों की बिक्री।","▣"],["03","होलसेल एवं बल्क ऑर्डर","थोक खरीद और बड़े ऑर्डर के लिए व्यावसायिक संपर्क।","▤"],["04","बिजनेस सहयोग","सेवाओं, टेक्नोलॉजी, मार्केटिंग या अन्य व्यावसायिक सहयोग पर चर्चा।","✳"]]:[["01","Distribution Partner","Explore opportunities to distribute KIRZ Group brands in your territory.","⇄"],["02","Reseller Partner","Offer products to customers through your own business and network.","▣"],["03","Wholesale & Bulk Orders","Discuss wholesale purchasing and larger-volume requirements.","▤"],["04","Business Collaboration","Discuss service, technology, marketing or other business collaborations.","✳"]];
 return <>
  <PageIntro eyebrow={hi?"बिजनेस पार्टनरशिप":"PARTNER WITH KIRZ GROUP"} title={t.partnershipTitle} description={t.partnershipText}/>
  <section className="container partnership-page-content"><div className="partnership-heading"><div><div className="eyebrow dark">{hi?"सहयोग के अवसर":"WAYS TO WORK TOGETHER"}</div><h2>{hi?"अपनी जरूरत के अनुसार साझेदारी चुनें।":"Find the right way to grow with us."}</h2></div><p>{hi?"हम अलग-अलग प्रकार के व्यावसायिक सहयोग के प्रस्तावों का स्वागत करते हैं।":"We welcome enquiries from businesses and individuals interested in building long-term working relationships."}</p></div>
   <div className="partnership-options">{options.map(([n,title,desc,icon])=><article className="partnership-option" key={n}><div className="partnership-option-top"><span>{n} / KIRZ</span><b>{icon}</b></div><h2>{title}</h2><p>{desc}</p><span className="partnership-option-foot">{hi?"सहयोग का अवसर":"PARTNERSHIP OPPORTUNITY"} ↗</span></article>)}</div>
   <div className="partnership-form-wrap"><div className="partnership-form-aside"><div className="eyebrow">{hi?"अगला कदम":"NEXT STEP"}</div><h2>{hi?"आइए बातचीत शुरू करें।":"Let's start a conversation."}</h2><p>{hi?"अपनी जानकारी और जरूरत साझा करें। हमारी टीम आपसे संपर्क करेगी।":"Share your details and what you are looking for. Our team can follow up to discuss the opportunity."}<br/><br/>+91-7300700809<br/>info@kirzgroup.com</p></div><div className="partnership-form-main"><div className="eyebrow dark">{hi?"अपनी जानकारी भेजें":"SEND AN ENQUIRY"}</div><h2>{hi?"पार्टनरशिप पूछताछ फॉर्म":"Partnership Enquiry Form"}</h2><PartnershipForm/></div></div>
  </section>
 </>;
}
