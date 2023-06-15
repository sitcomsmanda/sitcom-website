import Link from "next/link";
import { PATH_MEMBER } from "@/data/pageNavigation";
import { H2 } from "@/components/typography";
import { Button } from "@/components/interactivity";
import BlurbCards from "./BlurbCards";

export default function Content() {
  return (
    <div className="p-4 w-full flex flex-col gap-10 sm:p-8 sm:justify-center sm:items-center xl:p-16 2xl:gap-20">
      <H2>Cerita Alumni</H2>

      <BlurbCards />

      <Link
        href={PATH_MEMBER}
        tabIndex={-1}
        className="w-full sm:w-1/2 md:w-1/3"
      >
        <Button secondary>Anggota Lainnya</Button>
      </Link>
    </div>
  );
}
