import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { getEnquiries, saveEnquiries } from "@/lib/server-store";
export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ items: await getEnquiries() });
}
export async function PATCH(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { id, status } = await request.json();
    if (!["new", "contacted", "closed"].includes(status)) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    const items = await getEnquiries();
    const next = items.map(item => item.id === id ? { ...item, status } : item);
    await saveEnquiries(next);
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Update failed" }, { status: 400 }); }
}
