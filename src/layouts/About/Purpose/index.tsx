import Link from "next/link";
import { PATH_MEMBER } from "@/data/pageNavigation";
import { Button } from "@/components/interactivity";
import Banner from "./Banner";
import Vision from "./Vision";
import Mission from "./Mission";

export default function Purpose() {
  return (
    <div className="p-4 flex flex-col items-center gap-10 sm:gap-5 sm:p-8 sm:flex-row lg:gap-10 xl:p-16 2xl:gap-20">
      <Banner />
      <div className="flex flex-col gap-5 sm:w-1/2 lg:gap-10 2xl:gap-20">
        <Vision />
        <Mission />

        <Link href={PATH_MEMBER} tabIndex={-1} className="w-full">
          <Button secondary>Lihat Anggota</Button>
        </Link>
      </div>
    </div>
  );
}
