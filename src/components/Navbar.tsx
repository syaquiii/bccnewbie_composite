"use client";
import { navlist } from "@/data/navlist";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import logo from "@/assets/img/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (pathname.includes("login") || pathname.includes("register")) {
    return null;
  }

  return (
    <nav
      className={`mycontainer my-6 transition-transform duration-300 py-4 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 z-50`}
    >
      <div className="bg-light min-h-[4rem] p-5 rounded-3xl shadow-lg font-semibold justify-between items-center text-xl hidden lg:flex">
        <Image alt="composite" src={logo} width={120} height={120} />
        <ul className="flex gap-14 text-ourblack">
          {navlist.map((item) => (
            <Link href={item.path} key={item.id}>
              <li
                className={`transition-colors hover:text-normal ${
                  pathname === item.path
                    ? "text-normal font-bold animate-pulse "
                    : "text-ourblack"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <Button size={"normal"}>Masuk</Button>
      </div>
    </nav>
  );
};

export default Navbar;
