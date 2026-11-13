"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AdminGuard from "@/components/AdminGuard";
import AdminLogout from "@/components/AdminLogout";
export default function DashboardPage(){
 const [stats,setStats]=useState({brands:0,enquiries:0,newEnquiries:0});
 useEffect(()=>{Promise.all([fetch("/api/admin/portfolio"),fetch("/api/admin/enquiries")]).then(async ([a,b])=>{if(a.ok&&b.ok){const x=await a.json(),y=await b.json();setStats({brands:x.items.length,enquiries:y.items.length,newEnquiries:y.items.filter((i:any)=>i.status==="new").length});}}).catch(()=>{});},[]);
 return <AdminGuard><section className="container admin-shell">
  <div className="admin-topbar"><div><div className="eyebrow dark">KIRZ GROUP / CONTROL CENTRE</div><h1>Admin Dashboard</h1><p>Manage your company website from one place.</p></div><AdminLogout/></div>
  <div className="admin-stat-grid">
   <article><span>Portfolio entries</span><strong>{stats.brands}</strong><small>Brands, apps & services</small></article>
   <article><span>Total enquiries</span><strong>{stats.enquiries}</strong><small>Business partnership leads</small></article>
   <article><span>New enquiries</span><strong>{stats.newEnquiries}</strong><small>Awaiting follow-up</small></article>
  </div>
  <div className="admin-section-title"><h2>Website Management</h2><p>Choose a section to manage.</p></div>
  <div className="admin-module-grid">
   <Link href="/admin/dashboard/portfolio" className="admin-module"><b>01</b><span>▦</span><h3>Brands, Apps & Services</h3><p>Add, edit, publish, hide and delete portfolio profiles. Manage Hindi/English content, logos, covers, links and profile buttons.</p><em>Manage portfolio ↗</em></Link>
   <Link href="/admin/dashboard/banners" className="admin-module"><b>02</b><span>▧</span><h3>Homepage Banner Slider</h3><p>Add and manage up to 50 promotional banners, links, display order and visibility.</p><em>Manage banners ↗</em></Link>
   <Link href="/admin/dashboard/enquiries" className="admin-module"><b>03</b><span>✉</span><h3>Business Enquiries</h3><p>View partnership, wholesale, reseller and collaboration enquiries. Update follow-up status.</p><em>View enquiries ↗</em></Link>
   <Link href="/admin/dashboard/settings" className="admin-module"><b>04</b><span>⚙</span><h3>Website Settings</h3><p>Edit company contact details, location, tagline and homepage introduction text.</p><em>Edit settings ↗</em></Link>
   <Link href="/" target="_blank" className="admin-module"><b>05</b><span>↗</span><h3>View Live Website</h3><p>Open the public KIRZ Group website in a new tab.</p><em>Open website ↗</em></Link>
  </div>
  <p className="admin-footnote">Security: administrator session is protected by an HTTP-only signed cookie. Sign out when finished.</p>
 </section></AdminGuard>;
}
