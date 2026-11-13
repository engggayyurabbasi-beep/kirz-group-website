"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AdminGuard from "@/components/AdminGuard";
import AdminLogout from "@/components/AdminLogout";
type Enquiry={id:string;name:string;phone:string;email:string;interest:string;message:string;createdAt:string;status:"new"|"contacted"|"closed"};
function Enquiries(){
 const [items,setItems]=useState<Enquiry[]>([]),[filter,setFilter]=useState("all"),[error,setError]=useState("");
 async function load(){const r=await fetch("/api/admin/enquiries");if(!r.ok){setError("Enquiries load नहीं हुईं।");return;}const d=await r.json();setItems(d.items);}
 useEffect(()=>{load();},[]);
 async function update(id:string,status:Enquiry["status"]){const r=await fetch("/api/admin/enquiries",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id,status})});if(r.ok)load();else setError("Status update नहीं हुआ।");}
 const shown=items.filter(x=>filter==="all"||x.status===filter);
 return <section className="container admin-shell"><div className="admin-topbar"><div><div className="eyebrow dark">LEAD MANAGEMENT</div><h1>Business Enquiries</h1><p>Partnership, wholesale, reseller and collaboration requests.</p></div><div className="admin-top-actions"><Link href="/admin/dashboard" className="back-link">← Dashboard</Link><AdminLogout/></div></div>
  <div className="admin-filter-row">{["all","new","contacted","closed"].map(x=><button key={x} className={filter===x?"active":""} onClick={()=>setFilter(x)}>{x==="all"?"All":x[0].toUpperCase()+x.slice(1)} ({x==="all"?items.length:items.filter(i=>i.status===x).length})</button>)}</div>
  {error&&<p className="form-error">{error}</p>}
  <div className="admin-enquiry-list">{shown.map(item=><article className="admin-enquiry" key={item.id}><div className="admin-enquiry-top"><div><h3>{item.name}</h3><span>{item.interest}</span></div><select value={item.status} onChange={e=>update(item.id,e.target.value as Enquiry["status"])}><option value="new">New</option><option value="contacted">Contacted</option><option value="closed">Closed</option></select></div><p><a href={`tel:${item.phone}`}>{item.phone}</a>{item.email&&<> · <a href={`mailto:${item.email}`}>{item.email}</a></>}</p>{item.message&&<blockquote>{item.message}</blockquote>}<small>{new Date(item.createdAt).toLocaleString("en-IN")}</small></article>)}
   {!shown.length&&<div className="admin-empty">No enquiries in this view yet.</div>}
  </div>
 </section>;
}
export default function EnquiriesPage(){return <AdminGuard><Enquiries/></AdminGuard>}
