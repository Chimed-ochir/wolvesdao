"use client";
// import { useAuth } from "@/Components/Account";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { admin } = useAuth();
  const router = useRouter();

  // if (!admin) {
  //   router.push("/");
  // }

  return <>{children}</>;
}
