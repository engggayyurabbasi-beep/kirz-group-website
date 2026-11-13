"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminDemoLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setError("");
    try {
      const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Login failed");
      router.replace("/admin/dashboard");
      router.refresh();
    } catch (err) { setError(err instanceof Error ? err.message : "Login नहीं हो सका।"); }
    finally { setBusy(false); }
  }
  return <form className="form-card admin-form" onSubmit={submit}>
    <label className="form-full">Admin Login ID<input required type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Admin email / login ID"/></label>
    <label className="form-full">Password<input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter admin password"/></label>
    <div className="form-full"><button className="button button-gold" type="submit" disabled={busy}>{busy?"Signing in…":"Secure Admin Login ↗"}</button>{error&&<p className="form-error">{error}</p>}</div>
    <p className="form-note form-full">केवल अधिकृत KIRZ Group administrator के लिए।</p>
  </form>;
}
