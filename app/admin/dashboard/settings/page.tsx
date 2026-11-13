"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AdminGuard from "@/components/AdminGuard";
import AdminLogout from "@/components/AdminLogout";
type Settings={phone:string;email:string;location:string;tagline:string;homeTitleEn:string;homeTitleHi:string;homeIntroEn:string;homeIntroHi:string};
const empty:Settings={phone:"",email:"",location:"",tagline:"",homeTitleEn:"",homeTitleHi:"",homeIntroEn:"",homeIntroHi:""};
function SettingsEditor(){
 const [v,setV]=useState(empty),[message,setMessage]=useState("");
 useEffect(()=>{fetch("/api/admin/settings").then(r=>r.json()).then(d=>{if(d.settings)setV(d.settings);}).catch(()=>setMessage("Settings load नहीं हुईं।"));},[]);
 function change(k:keyof Settings,value:string){setV(old=>({...old,[k]:value}));}
 async function save(e:React.FormEvent){e.preventDefault();setMessage("Saving…");const r=await fetch("/api/admin/settings",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});setMessage(r.ok?"Settings saved successfully.":"Settings save नहीं हुईं।");}
 return <section className="container admin-shell"><div className="admin-topbar"><div><div className="eyebrow dark">SITE CONFIGURATION</div><h1>Website Settings</h1><p>Manage company contact details and homepage copy.</p></div><div className="admin-top-actions"><Link href="/admin/dashboard" className="back-link">← Dashboard</Link><AdminLogout/></div></div>
  <form className="admin-settings-form" onSubmit={save}><h2>Company Details</h2><div className="admin-form-grid">
   <label>Contact / WhatsApp<input value={v.phone} onChange={e=>change("phone",e.target.value)}/></label><label>Official Email<input type="email" value={v.email} onChange={e=>change("email",e.target.value)}/></label>
   <label className="full">Office Location<input value={v.location} onChange={e=>change("location",e.target.value)}/></label><label className="full">Company Tagline<input value={v.tagline} onChange={e=>change("tagline",e.target.value)}/></label>
  </div><h2>Homepage Content</h2><div className="admin-form-grid">
   <label>Hero Title (English)<textarea rows={2} value={v.homeTitleEn} onChange={e=>change("homeTitleEn",e.target.value)}/></label><label>Hero Title (Hindi)<textarea rows={2} value={v.homeTitleHi} onChange={e=>change("homeTitleHi",e.target.value)}/></label>
   <label>Hero Intro (English)<textarea rows={3} value={v.homeIntroEn} onChange={e=>change("homeIntroEn",e.target.value)}/></label><label>Hero Intro (Hindi)<textarea rows={3} value={v.homeIntroHi} onChange={e=>change("homeIntroHi",e.target.value)}/></label>
  </div><button className="button button-gold">Save Settings</button>{message&&<p>{message}</p>}</form>
 </section>;
}
export default function SettingsPage(){return <AdminGuard><SettingsEditor/></AdminGuard>}
