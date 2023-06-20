import Link from "next/link";
import { PATH_ACTIVITIES } from "@/data/pageNavigation";
import { H2 } from "@/components/typography";
import { Button } from "@/components/interactivity";
import Cards from "./Cards";

export default function Content() {
  return (
    <div className="p-4 w-full flex flex-col gap-10 sm:p-8 sm:justify-center sm:items-center xl:p-16 2xl:gap-20">
      <H2>Fokus Kegiatan</H2>

      <Cards />

      <Link
        href={PATH_ACTIVITIES}
        tabIndex={-1}
        className="w-full sm:w-1/2 md:w-1/3"
      >
        <Button secondary>Selengkapnya</Button>
      </Link>
    </div>
  );
}
