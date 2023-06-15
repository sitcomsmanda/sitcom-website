import Link from "next/link";
import { PATH_DOCUMENTATION } from "@/data/pageNavigation";
import { H2, H3 } from "@/components/typography";
import { Button } from "@/components/interactivity";

export default function Content() {
  return (
    <div className="flex flex-col gap-5 w-full sm:w-1/2 lg:gap-10">
      <H2>Dokumentasi Kegiatan</H2>

      <H3>
        Salah satu pertemuan SITCOM mengenai bahasa pemrograman C++ dengan
        membuat aplikasi terminal kalkulator BMR.
      </H3>

      <Link href={PATH_DOCUMENTATION} tabIndex={-1} className="w-full">
        <Button secondary>Kegiatan Lainnya</Button>
      </Link>
    </div>
  );
}
