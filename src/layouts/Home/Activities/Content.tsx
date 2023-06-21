import Link from "next/link";
import { PATH_ACTIVITIES } from "@/data/pageNavigation";
import { H2 } from "@/components/typography";
import { Button } from "@/components/interactivity";
import Cards from "./Cards";
import { fslc } from "@/modules/utils";

const twStyle = fslc(`
  w-full flex flex-col
  p-4 sm:p-8 xl:p-16
  sm:justify-center sm:items-center
  gap-10 2xl:gap-20
`);

export default function Content() {
  return (
    <div className={twStyle}>
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
