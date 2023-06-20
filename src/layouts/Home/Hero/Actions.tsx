import Link from "next/link";
import { Button } from "@/components/interactivity";
import { URL_JOIN, PATH_ACTIVITIES } from "@/data/pageNavigation";

export default function Actions() {
  return (
    <>
      <Link href={URL_JOIN} target="_blank" tabIndex={-1} className="w-full">
        <Button primary>Bergabung Sekarang</Button>
      </Link>
      <Link href={PATH_ACTIVITIES} tabIndex={-1} className="w-full">
        <Button secondary>Lihat Aktivitas</Button>
      </Link>
    </>
  );
}
