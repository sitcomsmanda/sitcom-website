import Link from "next/link";
import { PATH_DOCUMENTATION } from "@/data/pageNavigation";
import { Button } from "@/components/interactivity";
import { H2 } from "@/components/typography";
import ProgramList from "./ProgramList";

export default function Program() {
  return (
    <div className="p-4 flex flex-col items-center gap-10 sm:p-8 xl:p-16 2xl:gap-20">
      <H2>Fokus Kegiatan</H2>

      <ProgramList />

      <Link href={PATH_DOCUMENTATION} tabIndex={-1} className="w-full sm:w-96">
        <Button secondary>Lihat Dokumentasi</Button>
      </Link>
    </div>
  );
}
