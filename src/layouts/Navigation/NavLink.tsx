import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { H2 } from "@/components/typography";

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
      className={`transition-all duration-150 ease-in-out text-slate-700 py-1 w-full text-center rounded-full hover:bg-green-200 hover:text-green-800 active:bg-green-100 active:text-green-700`}
    >
      <H2>{children}</H2>
    </Link>
  );
}
