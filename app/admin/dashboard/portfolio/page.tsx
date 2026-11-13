"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AdminGuard from "@/components/AdminGuard";
import AdminLogout from "@/components/AdminLogout";
import type { PortfolioItem } from "@/lib/portfolio";
const empty:PortfolioItem={id:"",slug:"",name:"",category:"",categoryHi:"",shortDescription:"",shortDescriptionHi:"",description:"",descriptionHi:"",productsText:"",productsTextHi:"",manufacturingText:"",manufacturingTextHi:"",partnerText:"",partnerTextHi:"",wholesaleText:"",wholesaleTextHi:"",retailText:"",retailTextHi:"",businessInfo:"",businessInfoHi:"",logoUrl:"",coverUrl:"",appDownloadUrl:"",websiteUrl:"",actions:[],active:true};
function PortfolioEditor(){
 const [items,setItems]=useState<PortfolioItem[]>([]),[form,setForm]=useState<PortfolioItem>(empty),[selected,setSelected]=useState(""),[busy,setBusy]=useState(false),[message,setMessage]=useState("");
 const [actionDraft,setActionDraft]=useState({label:"",url:"/partnership"});
 useEffect(()=>{fetch("/api/admin/portfolio").then(async r=>{if(!r.ok)throw new Error("Session expired");const d=await r.json();setItems(d.items);}).catch(e=>setMessage(e.message));},[]);
 const editing=!!selected;
 function change<K extends keyof PortfolioItem>(key:K,value:PortfolioItem[K]){setForm(v=>({...v,[key]:value}));}
 function fresh(){setSelected("");setForm({...empty,id:`custom-${Date.now()}`,actions:[]});setMessage("");}
 function edit(item:PortfolioItem){setSelected(item.id);setForm(JSON.parse(JSON.stringify(item)));setMessage("");}
 async function save(e:React.FormEvent){e.preventDefault();setBusy(true);setMessage("");const slug=form.slug.trim().toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-|-$/g,"");const next={...form,slug,id:form.id||`custom-${Date.now()}`};if(!next.name.trim()||!slug){setMessage("Display name और URL slug जरूरी हैं।");setBusy(false);return;}const all=editing?items.map(x=>x.id===selected?next:x):[...items,next];try{const r=await fetch("/api/admin/portfolio",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:all})});const d=await r.json();if(!r.ok)throw new Error(d.error);setItems(all);setSelected(next.id);setForm(next);setMessage("Saved successfully. Public website content is updated.");}catch(e){setMessage(e instanceof Error?e.message:"Save failed");}finally{setBusy(false);}}
 async function remove(){if(!selected||!confirm("इस ब्रांड/ऐप को हटाना है?"))return;const all=items.filter(x=>x.id!==selected);const r=await fetch("/api/admin/portfolio",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:all})});if(r.ok){setItems(all);fresh();setMessage("Item deleted.");}else setMessage("Delete failed.");}
 async function uploadImage(field:"logoUrl"|"coverUrl",file?:File){if(!file)return;setMessage("Uploading image…");const fd=new FormData();fd.append("file",file);try{const r=await fetch("/api/admin/upload",{method:"POST",body:fd});const d=await r.json();if(!r.ok)throw new Error(d.error);change(field,d.url);setMessage("Image uploaded. Save the profile to publish it.");}catch(e){setMessage(e instanceof Error?e.message:"Upload failed");}}
 function addAction(){if(!actionDraft.label.trim()||!actionDraft.url.trim())return;change("actions",[...form.actions,{label:actionDraft.label.trim(),url:actionDraft.url.trim(),kind:"custom"}]);setActionDraft({label:"",url:"/partnership"});}
 function updateAction(i:number,k:"label"|"url",v:string){change("actions",form.actions.map((a,n)=>n===i?{...a,[k]:v}:a));}
 return <section className="container admin-shell">
  <div className="admin-topbar"><div><div className="eyebrow dark">CONTENT MANAGEMENT</div><h1>Brands, Apps & Services</h1><p>Manage every public portfolio profile in Hindi and English.</p></div><div className="admin-top-actions"><Link href="/admin/dashboard" className="back-link">← Dashboard</Link><AdminLogout/></div></div>
  <div className="admin-editor-layout">
   <aside className="admin-item-sidebar"><div className="admin-sidebar-head"><strong>Portfolio ({items.length})</strong><button className="button button-gold" onClick={fresh}>+ Add New</button></div>{items.map(item=><button className={`admin-brand-row ${selected===item.id?"active":""}`} key={item.id} onClick={()=>edit(item)}><span className={item.active?"status-live":"status-hidden"}>●</span><span><b>{item.name}</b><small>/{item.slug}</small></span></button>)}</aside>
   <form className="admin-editor-form" onSubmit={save}>
    <div className="admin-editor-heading"><div><span className="eyebrow dark">{editing?"EDIT PROFILE":"NEW PROFILE"}</span><h2>{form.name||"New brand / app"}</h2></div><label className="admin-publish"><input type="checkbox" checked={form.active} onChange={e=>change("active",e.target.checked)}/> Published</label></div>
    <div className="admin-form-grid">
     <label>Business / App Name<input value={form.name} onChange={e=>change("name",e.target.value)} required/></label>
     <label>URL Slug<input value={form.slug} onChange={e=>change("slug",e.target.value)} required placeholder="brand-name"/></label>
     <label>Category (English)<input value={form.category} onChange={e=>change("category",e.target.value)}/></label>
     <label>Category (Hindi)<input value={form.categoryHi} onChange={e=>change("categoryHi",e.target.value)}/></label>
     <label className="full">Subtitle (English)<textarea rows={2} value={form.shortDescription} onChange={e=>change("shortDescription",e.target.value)}/></label>
     <label className="full">Subtitle (Hindi)<textarea rows={2} value={form.shortDescriptionHi} onChange={e=>change("shortDescriptionHi",e.target.value)}/></label>
     <label className="full">Full Profile (English)<textarea rows={4} value={form.description} onChange={e=>change("description",e.target.value)}/></label>
     <label className="full">पूरा परिचय (Hindi)<textarea rows={4} value={form.descriptionHi} onChange={e=>change("descriptionHi",e.target.value)}/></label>
     <label>Logo Image URL<input value={form.logoUrl} onChange={e=>change("logoUrl",e.target.value)} placeholder="/images/logo.svg"/><input type="file" accept="image/png,image/jpeg,image/webp" onChange={e=>uploadImage("logoUrl",e.target.files?.[0])}/></label>
     <label>Cover Image URL<input value={form.coverUrl} onChange={e=>change("coverUrl",e.target.value)} placeholder="/images/cover.jpg"/><input type="file" accept="image/png,image/jpeg,image/webp" onChange={e=>uploadImage("coverUrl",e.target.files?.[0])}/></label>
     <label>App Download URL<input value={form.appDownloadUrl} onChange={e=>change("appDownloadUrl",e.target.value)} placeholder="https://..."/></label>
     <label>Official Website URL<input value={form.websiteUrl} onChange={e=>change("websiteUrl",e.target.value)} placeholder="https://..."/></label>
     <label className="full">Products & Services (English)<textarea rows={3} value={form.productsText} onChange={e=>change("productsText",e.target.value)}/></label>
     <label className="full">Products & Services (Hindi)<textarea rows={3} value={form.productsTextHi} onChange={e=>change("productsTextHi",e.target.value)}/></label>
     <label className="full">Third-Party Manufacturing (English)<textarea rows={3} value={form.manufacturingText} onChange={e=>change("manufacturingText",e.target.value)}/></label>
     <label className="full">Third-Party Manufacturing (Hindi)<textarea rows={3} value={form.manufacturingTextHi} onChange={e=>change("manufacturingTextHi",e.target.value)}/></label>
     <label className="full">Business Partners (English)<textarea rows={3} value={form.partnerText} onChange={e=>change("partnerText",e.target.value)}/></label>
     <label className="full">Business Partners (Hindi)<textarea rows={3} value={form.partnerTextHi} onChange={e=>change("partnerTextHi",e.target.value)}/></label>
     <label>Wholesaler Information (EN)<textarea rows={3} value={form.wholesaleText} onChange={e=>change("wholesaleText",e.target.value)}/></label>
     <label>Wholesaler Information (HI)<textarea rows={3} value={form.wholesaleTextHi} onChange={e=>change("wholesaleTextHi",e.target.value)}/></label>
     <label>Retailer Information (EN)<textarea rows={3} value={form.retailText} onChange={e=>change("retailText",e.target.value)}/></label>
     <label>Retailer Information (HI)<textarea rows={3} value={form.retailTextHi} onChange={e=>change("retailTextHi",e.target.value)}/></label>
     <label className="full">Additional Business Information (EN)<textarea rows={3} value={form.businessInfo} onChange={e=>change("businessInfo",e.target.value)}/></label>
     <label className="full">अन्य व्यवसाय जानकारी (HI)<textarea rows={3} value={form.businessInfoHi} onChange={e=>change("businessInfoHi",e.target.value)}/></label>
    </div>
    <div className="admin-actions-builder"><h3>Profile Buttons / Links</h3><p>यहां बनाए गए बटन Full Profile पर दिखाई देंगे।</p>{form.actions.map((a,i)=><div className="admin-action-edit" key={i}><input aria-label="Button label" value={a.label} onChange={e=>updateAction(i,"label",e.target.value)}/><input aria-label="Button URL" value={a.url} onChange={e=>updateAction(i,"url",e.target.value)}/><button type="button" onClick={()=>change("actions",form.actions.filter((_,n)=>n!==i))}>×</button></div>)}<div className="admin-action-edit"><input placeholder="New button name" value={actionDraft.label} onChange={e=>setActionDraft(v=>({...v,label:e.target.value}))}/><input placeholder="/partnership or https://..." value={actionDraft.url} onChange={e=>setActionDraft(v=>({...v,url:e.target.value}))}/><button type="button" onClick={addAction}>+</button></div></div>
    <div className="admin-save-row"><button className="button button-gold" disabled={busy}>{busy?"Saving…":"Save Profile"}</button>{editing&&<button className="button admin-delete" type="button" onClick={remove}>Delete</button>}{message&&<span>{message}</span>}</div>
   </form>
  </div>
 </section>;
}
export default function PortfolioAdminPage(){return <AdminGuard><PortfolioEditor/></AdminGuard>}
