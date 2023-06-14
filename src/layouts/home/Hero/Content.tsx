import { H1, H3 } from "@/components/typography";
import Actions from "./Actions";

export default function Content() {
  return (
    <>
      <H1>
        Ekspresikan
        <br />
        <strong className="font-bold text-green-400">Kreativitas </strong>
        IT Kamu
      </H1>

      <H3>
        Bergabunglah dengan komunitas anak SMA Negeri 2 Bandung yang terdiri
        dari siswa-siswa berbakat dan berminat di bidang Teknologi Informasi.
      </H3>

      <div className="flex flex-col gap-4">
        <Actions />
      </div>
    </>
  );
}
