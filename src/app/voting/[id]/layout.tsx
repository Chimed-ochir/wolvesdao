"use client";
import { useAuth } from "@/Components/Account";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/voting");
  }

  return <>{children}</>;
}
