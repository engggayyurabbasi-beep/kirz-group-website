"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".section, .partner-band, .page-hero, .brand-cover, .brand-card, .business-tile, .info-panel, .simple-card, .partnership-option, .update-card, .testimonial-panel, .contact-card, .journey-step, .brand-enquiry-band"
    );
    if (!("IntersectionObserver" in window)) {
      targets.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });

    targets.forEach((node) => {
      node.classList.add("reveal-on-scroll");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);
  return null;
}
