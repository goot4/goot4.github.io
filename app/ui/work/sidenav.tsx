'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from "next/navigation";

const links = [
  { name: '🪧Introduction', href: '/work'},
  { name: '📜Resume', href: '/work/resume'},
  { name: '🗂Projects', href: '/work/projects'},
  { name: '📔Trinkets', href: '/work/trinkets'},
]

export default function SideNav(){
  const pathName = usePathname();
  return (
    <div className="flex h-full flex-col space-y-2 bg-sky-100 p-3">
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