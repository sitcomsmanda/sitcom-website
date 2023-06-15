import Link from "next/link";
import { PATH_ABOUT } from "@/data/pageNavigation";
import { H2, H3 } from "@/components/typography";
import { Button } from "@/components/interactivity";

export default function Content() {
  return (
    <>
      <H2>Mengenal Ekskul IT Kami</H2>

      <H3>
        SITCOM adalah sebuah ekstrakurikuler yang berdedikasi di SMA Negeri 2
        Bandung dalam bidang Informasi Teknologi.
      </H3>

      <Link href={PATH_ABOUT} tabIndex={-1} className="w-full">
        <Button secondary>Selengkapnya</Button>
      </Link>
    </>
  );
}
