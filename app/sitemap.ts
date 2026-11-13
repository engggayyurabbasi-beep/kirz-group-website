import type { MetadataRoute } from "next";
import { brands } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
 const base="https://kirzgroup.com";
 const pages=["","/about","/businesses","/brands","/partnership","/contact","/privacy","/terms"];
 return [...pages.map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:path===""?1:0.7})),...brands.map(b=>({url:`${base}/brands/${b.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:0.65}))];
}
