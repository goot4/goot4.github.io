"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline"

const links = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Work", href: "/work" },
];
export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();

  const openSidebarClickHandler = (evt) =>{
    evt.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  }
  const closeSidebarClickHandler = (evt) =>{
    evt.stopPropagation();
    setSidebarOpen(false);
  }

  useEffect(()=>{
    const globalClickHandler = ({ target }) => {
      const sidebar = document.getElementById("sidebar");
      const openSidebarButton = document.getElementById('open-sidebar');
      if(!sidebar.contains(target) && !openSidebarButton.contains(target)){
        setSidebarOpen(false);
      }
    }
    document.addEventListener('click', globalClickHandler);
    return ()=> {document.removeEventListener("click", globalClickHandler);};
  })
  return (
    <nav className="border-gray-200 bg-white">
      {/* Sidebar */}
      <div className={clsx("absolute bg-gray-800 text-white w-64 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300",
        {
          '-translate-x-full': sidebarOpen === false,
        })} id="sidebar">
        <div className="px-8 pt-4 text-right">
          <h1 className="text-3xl font-semibold">导航</h1>
          <ul className="mt-4">
            {links.map((link) => (
              <li key={link.name} className="mb-4">
                <Link href={link.href}
                      className="block text-xl hover:text-indigo-400"
                      onClick={closeSidebarClickHandler}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Header elements */}
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            👋😎😺 Zeeebra G
          </span>
        </Link>
        <button
          id="open-sidebar"
          onClick={openSidebarClickHandler}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    "block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700",
                    {
                      "md:text-blue-700": pathName === link.href,
                    },
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
