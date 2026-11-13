"use client";
import { ReactNode } from "react";
export default function PageIntro({ eyebrow, title, description, children }: {
  eyebrow: string; title: string; description?: string; children?: ReactNode;
}) {
 return <section className="page-intro"><div className="container page-intro-inner">
  <div className="page-intro-copy"><div className="eyebrow"><span/> {eyebrow}</div><h1>{title}</h1>{description&&<p>{description}</p>}{children}</div>
  <div className="page-intro-art" aria-hidden="true"><span className="art-ring art-ring-one"/><span className="art-ring art-ring-two"/><span className="art-monogram">K</span><span className="art-caption">KIRZ / GROUP</span></div>
 </div></section>;
}
