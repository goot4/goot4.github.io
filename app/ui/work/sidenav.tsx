'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from "next/navigation";

const links = [
  { name: '🪧介绍', href: '/work'},
  { name: '🗂项目', href: '/work/projects'},
  { name: '🪄实验', href: '/work/experimental'},
]

export default function SideNav(){
  const pathName = usePathname();
  return (
    <div className="flex h-full flex-col space-y-2 bg-sky-100 px-3 py-6">
      {links.map((link) => {
        return (
          <Link href={link.href} key={link.name}
                className={clsx("hover:bg-sky-400",{"bg-sky-400": pathName === link.href})}>
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}