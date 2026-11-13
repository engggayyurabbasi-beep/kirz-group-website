import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { getHomeBanners, saveHomeBanners, type HomeBanner } from "@/lib/server-store";
export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ banners: await getHomeBanners() });
}
export async function PUT(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json();
    if (!Array.isArray(body.banners) || body.banners.length > 50) return NextResponse.json({ error: "अधिकतम 50 बैनर जोड़े जा सकते हैं।" }, { status: 400 });
    const banners: HomeBanner[] = body.banners.map((b: any, i: number) => ({
      id: String(b.id || `banner-${i+1}`).slice(0,80),
      imageUrl: String(b.imageUrl || "").slice(0,500),
      alt: String(b.alt || "KIRZ Group promotional banner").slice(0,160),
      url: String(b.url || "").slice(0,500),
      active: Boolean(b.active),
      order: Number.isFinite(Number(b.order)) ? Number(b.order) : i
    }));
    if (banners.some(b => !b.imageUrl)) return NextResponse.json({ error: "हर बैनर के लिए इमेज जरूरी है।" }, { status: 400 });
    await saveHomeBanners(banners);
    return NextResponse.json({ ok: true, count: banners.length });
  } catch { return NextResponse.json({ error: "बैनर सेव नहीं हो सके।" }, { status: 400 }); }
}
