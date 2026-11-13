"use client";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
export default function PartnershipForm() {
 const {t}=useLanguage();const [sent,setSent]=useState(false),[error,setError]=useState(""),[busy,setBusy]=useState(false);
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();setError("");setSent(false);setBusy(true);
  const form=e.currentTarget;const data=new FormData(form);
  const payload=Object.fromEntries(["name","phone","email","interest","message"].map(k=>[k,String(data.get(k)||"")]));
  try{const r=await fetch("/api/partnership",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const d=await r.json();if(!r.ok)throw new Error(d.error||"Submission failed");setSent(true);form.reset();}
  catch(err){setError(err instanceof Error?err.message:"फॉर्म जमा नहीं हो सका।");}
  finally{setBusy(false);}
 }
 return <form className="form-card" onSubmit={submit}>
  <label>{t.name}<input required name="name" minLength={2} placeholder={t.name}/></label>
  <label>{t.phone}<input required name="phone" inputMode="tel" placeholder="+91"/></label>
  <label>{t.email}<input type="email" name="email" placeholder="you@example.com"/></label>
  <label>{t.interest}<select name="interest" defaultValue="" required><option value="" disabled>{t.select}</option><option>{t.distribution}</option><option>{t.reselling}</option><option>{t.wholesale}</option><option>{t.collaboration}</option><option>{t.other}</option></select></label>
  <label className="form-full">{t.message}<textarea name="message" placeholder={t.message}/></label>
  <div className="form-full"><button className="button button-gold" disabled={busy}>{busy?"Submitting…":t.sendEnquiry+" ↗"}</button>
   {sent&&<p className="form-success">आपकी पूछताछ सफलतापूर्वक जमा हो गई है। हमारी टीम संपर्क करेगी।</p>}
   {error&&<p className="form-error">{error}</p>}<p className="form-note">{t.formNote}</p>
  </div>
 </form>;
}
