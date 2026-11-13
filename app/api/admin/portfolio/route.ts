import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { getPortfolio, savePortfolio } from "@/lib/server-store";
export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ items: await getPortfolio() });
}
export async function PUT(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json();
    if (!Array.isArray(body.items) || body.items.length > 200) return NextResponse.json({ error: "Invalid portfolio data." }, { status: 400 });
    const items = body.items;
    const slugs = new Set<string>();
    for (const item of items) {
      if (!item || typeof item.id !== "string" || typeof item.slug !== "string" || typeof item.name !== "string" || !item.name.trim() || !/^[a-z0-9-]+$/.test(item.slug)) {
        return NextResponse.json({ error: "हर item में सही नाम और URL slug जरूरी है।" }, { status: 400 });
      }
      if (slugs.has(item.slug)) return NextResponse.json({ error: "Duplicate URL slug: " + item.slug }, { status: 400 });
      slugs.add(item.slug);
    }
    await savePortfolio(items);
    return NextResponse.json({ ok: true, count: items.length });
  } catch {
    return NextResponse.json({ error: "Could not save portfolio." }, { status: 400 });
  }
}
