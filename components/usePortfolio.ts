"use client";
import { useEffect, useState } from "react";
import { defaultPortfolio, type PortfolioItem } from "@/lib/portfolio";
export function usePortfolio(){
 const [items,setItems]=useState<PortfolioItem[]>(defaultPortfolio);
 const [ready,setReady]=useState(false);
 useEffect(()=>{
  let live=true;
  fetch("/api/portfolio",{cache:"no-store"}).then(async r=>{if(!r.ok)throw new Error("Portfolio unavailable");const d=await r.json();if(live&&Array.isArray(d.items))setItems(d.items);}).catch(()=>{}).finally(()=>{if(live)setReady(true);});
  return ()=>{live=false;};
 },[]);
 async function save(next:PortfolioItem[]){
  const response=await fetch("/api/admin/portfolio",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:next})});
  if(!response.ok){const d=await response.json().catch(()=>({}));throw new Error(d.error||"Save failed");}
  setItems(next);
 }
 return {items,save,ready};
}
