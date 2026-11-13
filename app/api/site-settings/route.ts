import { NextResponse } from "next/server";
import { getSettings } from "@/lib/server-store";
export const runtime = "nodejs";
export async function GET() {
 return NextResponse.json({ settings: await getSettings() }, { headers: { "Cache-Control": "no-store, max-age=0" } });
}
