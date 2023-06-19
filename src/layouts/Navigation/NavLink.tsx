"use client";

import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";
import { lato } from "@/services/fonts";

export default function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: Url;
}) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${
        path === href
          ? `text-green-700 bg-green-300`
          : `text-slate-700 hover:bg-green-200 hover:text-green-800 active:bg-green-100 active:text-green-700`
      } transition-all duration-150 ease-in-out py-1 px-4 w-full text-center rounded-full `}
    >
      <h5
        className={`${lato.className} font-bold text-2xl md:text-base md:font-normal lg:text-lg`}
      >
        {children}
      </h5>
    </Link>
  );
}
