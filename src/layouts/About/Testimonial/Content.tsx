import Link from "next/link";
import { PATH_MEMBER } from "@/data/pageNavigation";
import { H2 } from "@/components/typography";
import { Button } from "@/components/interactivity";
import BlurbCards from "./BlurbCards";

export default function Content() {
  return (
    <div className="flex flex-col gap-10 w-full sm:w-1/2 lg:gap-10">
      <H2>Cerita Alumni</H2>

      <BlurbCards />

      <Link href={PATH_MEMBER} tabIndex={-1} className="w-full">
        <Button secondary>Anggota Lainnya</Button>
      </Link>
    </div>
  );
}
