"use client";
import { useEffect, useState } from "react";
type SiteSettings = {
 phone:string; email:string; location:string; tagline:string;
 homeTitleEn:string; homeTitleHi:string; homeIntroEn:string; homeIntroHi:string;
};
const fallback:SiteSettings={
 phone:"+91-7300700809",email:"info@kirzgroup.com",
 location:"Kandhla, Shamli, Uttar Pradesh, India",
 tagline:"Building Businesses. Creating Opportunities.",
 homeTitleEn:"Building Businesses. Creating Opportunities.",
 homeTitleHi:"व्यवसायों का निर्माण। नए अवसरों का सृजन।",
 homeIntroEn:"A group of growing businesses united by a commitment to quality, trust and meaningful progress.",
 homeIntroHi:"गुणवत्ता, विश्वास और सार्थक प्रगति के संकल्प के साथ आगे बढ़ते व्यवसायों का समूह।"
};
export function useSiteSettings(){
 const [settings,setSettings]=useState<SiteSettings>(fallback);
 useEffect(()=>{let live=true;fetch("/api/site-settings",{cache:"no-store"}).then(r=>r.json()).then(d=>{if(live&&d.settings)setSettings(d.settings);}).catch(()=>{});return()=>{live=false;};},[]);
 return settings;
}
