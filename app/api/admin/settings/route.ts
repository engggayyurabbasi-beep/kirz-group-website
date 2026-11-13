import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { getSettings, saveSettings } from "@/lib/server-store";
export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ settings: await getSettings() });
}
export async function PUT(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json();
    const settings = {
      phone: String(body.phone || "").slice(0, 40),
      email: String(body.email || "").slice(0, 160),
      location: String(body.location || "").slice(0, 200),
      tagline: String(body.tagline || "").slice(0, 200),
      homeTitleEn: String(body.homeTitleEn || "").slice(0, 200),
      homeTitleHi: String(body.homeTitleHi || "").slice(0, 200),
      homeIntroEn: String(body.homeIntroEn || "").slice(0, 500),
      homeIntroHi: String(body.homeIntroHi || "").slice(0, 500)
    };
    await saveSettings(settings);
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Could not save settings." }, { status: 400 }); }
}
