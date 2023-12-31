import Link from "next/link";
import { PATH_ABOUT } from "@/data/pageNavigation";
import { H2, H3 } from "@/components/typography";
import { Button } from "@/components/interactivity";
import { fslc } from "@/modules/utils";

const contentAboutHomeTwStyle = fslc(`
  flex flex-col
  gap-5 lg:gap-10
  w-full sm:w-1/2
`);

export default function Content() {
  return (
    <div className={contentAboutHomeTwStyle}>
      <H2>Mengenal Ekskul IT Kami</H2>

      <H3>
        SITCOM adalah sebuah ekstrakurikuler yang berdedikasi di SMA Negeri 2
        Bandung dalam bidang Informasi Teknologi.
      </H3>

      <Link href={PATH_ABOUT} tabIndex={-1} className="w-full">
        <Button secondary>Selengkapnya</Button>
      </Link>
    </div>
  );
}
