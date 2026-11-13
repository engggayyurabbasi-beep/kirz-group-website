"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    let alive = true;
    fetch("/api/admin/session", { cache: "no-store" }).then(r=>r.json()).then(d=>{
      if (!alive) return;
      if (d.authenticated) setAllowed(true); else router.replace("/admin/login");
    }).catch(()=>router.replace("/admin/login"));
    return ()=>{alive=false;};
  }, [router]);
  if (!allowed) return <section className="container admin-loading"><p>Verifying secure administrator session…</p></section>;
  return <>{children}</>;
}
