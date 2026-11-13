import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: { default: "KIRZ Group | Building Businesses. Creating Opportunities.", template: "%s | KIRZ Group" },
  description: "KIRZ Group is a diversified business group based in Kandhla, Shamli, Uttar Pradesh. Explore our brands, businesses and partnership opportunities.",
  metadataBase: new URL("https://kirzgroup.com"),
  alternates: { canonical: "/" },
  openGraph: { title: "KIRZ Group | Building Businesses. Creating Opportunities.", description: "Explore KIRZ Group brands, businesses and partnership opportunities.", url: "https://kirzgroup.com", siteName: "KIRZ Group", type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><LanguageProvider><ScrollAnimations /><Header /><main>{children}</main><WhatsAppButton /><Footer /></LanguageProvider></body></html>;
}
