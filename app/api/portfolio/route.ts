import { NextResponse } from "next/server";
import { getPortfolio } from "@/lib/server-store";
export const runtime = "nodejs";
export async function GET() {
  const items = await getPortfolio();
  return NextResponse.json({ items: items.filter(item => item.active) }, {
    headers: { "Cache-Control": "no-store, max-age=0" }
  });
}
