"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
const sidebarMenu = [
  {
    link: "/",
    menu: "Home",
  },
  {
    link: "/about",
    menu: "About",
  },
  {
    link: "/services",
    menu: "Services",
  },
  {
    link: "/contact",
    menu: "Contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="bg-gray-950 text-gray-300 border-b border-gray-950 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-16  items-center justify-between">
            {/* LOGO */}
            <Link className="block text-primary_1 text-xl md:text-2xl font-bold" href="/">
              BarZone Tech Solution
            </Link>
          {/* NAV MANU FOR DESTOP */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm">
              {sidebarMenu.map((menu) => (
                <li
                  className={`${
                    menu.link === pathname ? "border-b border-gray-500" : ""
                  } w-fit hover:border-gray-500 py-0.5`}
                  key={menu.menu}
                >
                  <Link href={menu.link} className="">
                    {menu.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* HIGHLIGHT */}
          <div className="hidden md:flex gap-6 text-xl text-primary_1 font-bold">
            <div className="">Contact Us:</div>
            <div className="flex flex-col">
              <p>01911977375</p>
              <p>01715324158</p>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className="block lg:hidden">
            {/* MOBILE MENU BUTTON */}
            <button
              className="rounded bg-gray-950 p-2 text-gray-300 "
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <MdOutlineMenu size={24} />
            </button>
            {/* MOBILE MENU DROPDOWN */}
            <div
              className={`${
                mobileMenu ? "block" : "hidden"
              } absolute top-0 right-0 z-10 w-72 rounded-lg border bg-gray-950 text-gray-300 border-gray-800 shadow-lg pb-10`}
            >
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="self-end p-4 mr-1"
                >
                  <FaX />
                </button>
                <ul className="flex flex-col items-center text-lg">
                  {sidebarMenu.map((menu) => (
                    <li
                      className={`${
                        menu.link === pathname ? "border-y" : ""
                      } w-full py-4 flex items-center justify-center`}
                      key={menu.menu}
                    >
                      <Link href={menu.link} className="" onClick={() => setMobileMenu(!mobileMenu)}>
                        {menu.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
