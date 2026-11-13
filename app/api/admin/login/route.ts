import { NextRequest, NextResponse } from "next/server";
import { createAdminToken, adminCookieName, adminCookieMaxAge } from "@/lib/admin-auth";
import { timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";
function safeEqual(a: string, b: string) {
  const x = Buffer.from(a); const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    const expectedEmail = String(process.env.ADMIN_EMAIL || "").trim().toLowerCase();
    const expectedPassword = String(process.env.ADMIN_PASSWORD || "");
    if (!expectedEmail || !expectedPassword || !process.env.ADMIN_SESSION_SECRET) {
      return NextResponse.json({ error: "Admin environment is not configured." }, { status: 503 });
    }
    if (!safeEqual(email, expectedEmail) || !safeEqual(password, expectedPassword)) {
      return NextResponse.json({ error: "Login ID या password सही नहीं है।" }, { status: 401 });
    }
    const response = NextResponse.json({ ok: true });
    response.cookies.set(adminCookieName, createAdminToken(), {
      httpOnly: true, secure: process.env.NODE_ENV === "production",
      sameSite: "strict", path: "/", maxAge: adminCookieMaxAge
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
