"use client";

import Header from "./_components/Header";
import ProfileNav from "./_components/ProfileNav";
import { usePathname } from "next/navigation";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isUpdatePage = pathname === "/profile/update";

  return (
    <section className="">
      <Header />
      {!isUpdatePage && <ProfileNav />}
      <div className="mycontainer mt-4">{children}</div>
    </section>
  );
}
