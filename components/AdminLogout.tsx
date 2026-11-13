"use client";
import { useRouter } from "next/navigation";
export default function AdminLogout() {
 const router=useRouter();
 async function logout(){await fetch("/api/admin/logout",{method:"POST"});router.replace("/admin/login");router.refresh();}
 return <button className="button button-outline admin-logout" onClick={logout}>Log out ↗</button>;
}
