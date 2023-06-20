import Link from "next/link";
import { PATH_DOCUMENTATION } from "@/data/pageNavigation";
import { Button } from "@/components/interactivity";
import { H2 } from "@/components/typography";
import CardList from "./CardList";

export default function Content() {
  return (
    <div className="flex flex-col gap-10 items-center text-center sm:w-1/2 2xl:gap-20">
      <H2>Susunan Pengurus SITCOM</H2>

      <CardList />

      <Link href={PATH_DOCUMENTATION} tabIndex={-1} className="w-full">
        <Button secondary>Lihat Dokumentasi</Button>
      </Link>
    </div>
  );
}
