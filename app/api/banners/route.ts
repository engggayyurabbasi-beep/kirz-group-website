import { NextResponse } from "next/server";
import { getHomeBanners } from "@/lib/server-store";
export const runtime = "nodejs";
export async function GET() {
  const banners = (await getHomeBanners()).filter((item) => item.active).sort((a,b) => a.order-b.order);
  return NextResponse.json({ banners }, { headers: { "Cache-Control": "no-store, max-age=0" } });
}
