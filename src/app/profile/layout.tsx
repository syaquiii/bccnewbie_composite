"use client";

import Header from "./_components/Header";
import ProfileNav from "./_components/ProfileNav";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="">
      <Header />
      <ProfileNav />
      <div className="mycontainer mt-4 ">{children}</div>
    </section>
  );
}
