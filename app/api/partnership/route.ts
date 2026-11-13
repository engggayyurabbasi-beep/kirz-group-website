import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { getEnquiries, saveEnquiries } from "@/lib/server-store";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim().slice(0, 120);
    const phone = String(body.phone || "").trim().slice(0, 40);
    const email = String(body.email || "").trim().slice(0, 160);
    const interest = String(body.interest || "").trim().slice(0, 120);
    const message = String(body.message || "").trim().slice(0, 3000);
    if (name.length < 2 || phone.replace(/\D/g, "").length < 10 || !interest) {
      return NextResponse.json({ error: "कृपया नाम, सही मोबाइल नंबर और रुचि चुनें।" }, { status: 400 });
    }
    const items = await getEnquiries();
    items.unshift({ id: randomUUID(), name, phone, email, interest, message, createdAt: new Date().toISOString(), status: "new" });
    await saveEnquiries(items.slice(0, 5000));
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "फॉर्म जमा नहीं हो सका। कृपया दोबारा प्रयास करें।" }, { status: 400 }); }
}
