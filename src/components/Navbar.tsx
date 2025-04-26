"use client";
import { navlist } from "@/data/navlist";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import logo from "@/assets/img/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Hamburger from "hamburger-react";
import { checkAuth } from "@/utils/checkAuth";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  console.log(userEmail, "ayam");
  useEffect(() => {
    const { isAuthenticated: authStatus, payload } = checkAuth();
    setIsAuthenticated(authStatus);
    if (authStatus && payload) {
      setUserEmail(payload.email || "");
    }
  }, []);
  console.log(isAuthenticated);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setNavbarVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    setIsAuthenticated(false);
    router.push("/login");
  };

  if (pathname.includes("login") || pathname.includes("register")) {
    return null;
  }

  const MobileNavbar = () => (
    <div
      className={`fixed inset-0 z-40 w-full h-screen bg-black/40 transition-all duration-300 ${
        isOpen
          ? "opacity-100 backdrop-blur-sm"
          : "opacity-0 backdrop-blur-none pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`fixed top-0 left-0 z-50 flex flex-col items-start h-screen w-2/3 bg-light transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-10 py-32 w-full">
          <ul className="flex gap-6 font-bold text-xl flex-col">
            {navlist.map((item) => (
              <li key={item.id} className="overflow-hidden">
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-all duration-300 hover:pl-4 hover:text-normal ${
                    pathname === item.path || pathname.startsWith(item.path)
                      ? "text-normal font-bold border-l-4 border-normal pl-4"
                      : "text-black pl-0 border-l-0"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {isAuthenticated ? (
            <div className="mt-8 flex flex-col gap-4">
              <span className="text-normal font-bold">{userEmail}</span>
              <Button onClick={handleLogout} variant="normal" size="normal">
                Logout
              </Button>
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-block mt-8"
              onClick={() => setIsOpen(false)}
            >
              <Button
                className="transition-transform hover:scale-105 active:scale-95"
                variant="normal"
                size="normal"
              >
                Masuk
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={`mycontainer transition-transform duration-300 py-8 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      } sticky lg:-mb-[10.8rem] -mb-32 top-0 z-50`}
    >
      <MobileNavbar />

      <div className="bg-light min-h-[4rem] p-5 rounded-3xl shadow-lg font-semibold justify-between items-center text-xl hidden lg:flex">
        <Image alt="composite" src={logo} width={120} height={120} />
        <ul className="flex gap-14 text-ourblack">
          {navlist.map((item) => (
            <Link href={item.path} key={item.id}>
              <li
                className={`transition-colors hover:text-normal ${
                  pathname === item.path
                    ? "text-normal font-bold animate-pulse"
                    : "text-ourblack"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>

        {isAuthenticated ? (
          <div className="relative group">
            <button className="flex items-center gap-2">
              <span className="font-bold text-normal">{userEmail}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="absolute hidden group-hover:block right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2">
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Button
            className="cursor-pointer"
            onClick={() => router.push("/login")}
            size="normal"
          >
            Masuk
          </Button>
        )}
      </div>

      <div className="lg:hidden w-fit bg-normal z-50 relative text-white p-1 rounded-lg">
        <Hamburger toggle={setIsOpen} toggled={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
