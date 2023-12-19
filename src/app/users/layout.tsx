"use client";
import { useAuth } from "@/Components/Account";
import { redirect } from "next/navigation";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const { admin } = useAuth();

  if (!admin) {
    redirect("/");
  }

  return <>{children}</>;
}

export default AdminLayout;
