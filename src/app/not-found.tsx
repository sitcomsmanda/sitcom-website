import Link from "next/link";
import { H1, H3 } from "@/components/typography";
import { Button } from "@/components/interactivity";
import { PATH_HOME } from "@/data/pageNavigation";
import { fslc } from "@/modules/utils";

const twStyle = fslc(`
  text-center min-h-screen mx-auto
  flex flex-col justify-center items-center gap-5
  p-4 flex flex-col gap-20 
  sm:pt-4 sm:p-8 xl:p-16
  md:w-[50vw] 2xl:w-[25vw]
`);

export default function NotFound() {
  return (
    <main>
      <section className={twStyle}>
        <div className="flex flex-col gap-5">
          <H1>404: Not Found</H1>

          <H3>
            Halaman dan sumber rute yang dicari tidak dapat ditemukan. Mohon
            untuk kembali ke halaman utama.
          </H3>
        </div>

        <Link href={PATH_HOME} tabIndex={-1} className="w-full">
          <Button primary>Kembali</Button>
        </Link>
      </section>
    </main>
  );
}
