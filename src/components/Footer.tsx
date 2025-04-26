"use client";
import React from "react";
import LogoFooter from "@/assets/img/footer.png";
import Image from "next/image";
import { footlist } from "@/data/footlist";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("login") || pathname.includes("register")) {
    return null;
  }
  return (
    <footer className=" bg-light rounded-4xl -mt-20">
      <div className="min-h-[20rem] mycontainer lg:flex items-center flex lg:flex-row flex-col justify-center lg:justify-between">
        <Image
          src={LogoFooter}
          alt="Composite"
          width={300}
          height={300}
          className="w-60"
        />
        <ul className="mt-8 lg:mt-0">
          {footlist.map((item) => (
            <li
              key={item.id}
              className="flex min-w-10 gap-4 justify-center lg:justify-end mb-2  text-ourblack"
            >
              <span className="">{item.title}</span> <item.icon />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
