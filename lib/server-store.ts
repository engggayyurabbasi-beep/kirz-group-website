import { promises as fs } from "node:fs";
import path from "node:path";
import { defaultPortfolio, type PortfolioItem } from "@/lib/portfolio";

const dataDir = path.join(process.cwd(), "data");
async function ensureDir() { await fs.mkdir(dataDir, { recursive: true }); }
async function readJson<T>(file: string, fallback: T): Promise<T> {
  await ensureDir();
  try { return JSON.parse(await fs.readFile(path.join(dataDir, file), "utf8")) as T; }
  catch { return fallback; }
}
async function writeJson<T>(file: string, value: T) {
  await ensureDir();
  const target = path.join(dataDir, file);
  const temp = `${target}.${Date.now()}.tmp`;
  await fs.writeFile(temp, JSON.stringify(value, null, 2), "utf8");
  await fs.rename(temp, target);
}
export async function getPortfolio(): Promise<PortfolioItem[]> {
  return readJson<PortfolioItem[]>("portfolio.json", defaultPortfolio);
}
export async function savePortfolio(items: PortfolioItem[]) {
  await writeJson("portfolio.json", items);
}
export type Enquiry = {
  id: string; name: string; phone: string; email: string;
  interest: string; message: string; createdAt: string; status: "new" | "contacted" | "closed";
};
export async function getEnquiries() { return readJson<Enquiry[]>("enquiries.json", []); }
export async function saveEnquiries(items: Enquiry[]) { await writeJson("enquiries.json", items); }
export type SiteSettings = {
  phone: string; email: string; location: string; tagline: string;
  homeTitleEn: string; homeTitleHi: string; homeIntroEn: string; homeIntroHi: string;
};
export const defaultSettings: SiteSettings = {
  phone: "+91-7300700809",
  email: "info@kirzgroup.com",
  location: "Kandhla, Shamli, Uttar Pradesh, India",
  tagline: "Building Businesses. Creating Opportunities.",
  homeTitleEn: "Building Businesses. Creating Opportunities.",
  homeTitleHi: "व्यवसायों का निर्माण। नए अवसरों का सृजन।",
  homeIntroEn: "A group of growing businesses united by a commitment to quality, trust and meaningful progress.",
  homeIntroHi: "गुणवत्ता, विश्वास और सार्थक प्रगति के संकल्प के साथ आगे बढ़ते व्यवसायों का समूह।"
};
export async function getSettings() { return readJson<SiteSettings>("settings.json", defaultSettings); }
export async function saveSettings(value: SiteSettings) { await writeJson("settings.json", value); }

export type HomeBanner = { id: string; imageUrl: string; alt: string; url: string; active: boolean; order: number };
export async function getHomeBanners(): Promise<HomeBanner[]> {
  return readJson<HomeBanner[]>("home-banners.json", []);
}
export async function saveHomeBanners(items: HomeBanner[]) {
  await writeJson("home-banners.json", items);
}
