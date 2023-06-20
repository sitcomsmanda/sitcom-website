import Link from "next/link";
import { PATH_ACTIVITIES } from "@/data/pageNavigation";
import { Button } from "@/components/interactivity";
import { H2 } from "@/components/typography";
import List from "./List";

export default function VideoList() {
  return (
    <div className="p-4 flex flex-col items-center gap-10 sm:p-8 lg:gap-10 xl:p-16 2xl:gap-20">
      <H2>Dokumentasi 2022</H2>

      <List />

      <Link href={PATH_ACTIVITIES} tabIndex={-1} className="w-full sm:w-96">
        <Button secondary>Lihat Aktivitas</Button>
      </Link>
    </div>
  );
}
