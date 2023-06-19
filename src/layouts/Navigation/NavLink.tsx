import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { lato } from "@/services/fonts";

export default function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: Url;
}) {
  return (
    <Link
      href={href}
      className={`transition-all duration-150 ease-in-out text-slate-700 py-1 px-2 w-full text-center rounded-full hover:bg-green-200 hover:text-green-800 active:bg-green-100 active:text-green-700`}
    >
      <h5
        className={`${lato.className} font-bold text-2xl md:text-base md:font-normal lg:text-lg`}
      >
        {children}
      </h5>
    </Link>
  );
}
