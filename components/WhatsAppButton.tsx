"use client";
import { useSiteSettings } from "./useSiteSettings";
export default function WhatsAppButton() {
 const {phone}=useSiteSettings();const digits=phone.replace(/\D/g,"");
 return <a className="whatsapp-float" href={`https://wa.me/${digits}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with KIRZ Group on WhatsApp"><span className="wa-icon">◉</span><span>WhatsApp</span></a>;
}
