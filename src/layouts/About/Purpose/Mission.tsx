import { H2, H3 } from "@/components/typography";

export default function Mission() {
  return (
    <div className="flex flex-col gap-5 w-full lg:gap-10">
      <H2>Misi SITCOM</H2>

      <H3>
        <ol className="ms-4 list-decimal list-outside">
          <li>
            Meningkatkan pemahaman dan penguasaan siswa terhadap teknologi
            informasi dan komputer.
          </li>
          <li>
            Mengembangkan keterampilan teknis siswa dalam pemrograman, desain
            web, dan pengembangan aplikasi.
          </li>
          <li>
            Mendorong kolaborasi dan tim kerja dalam mengatasi tantangan di
            bidang IT.
          </li>
          <li>
            Menginspirasi siswa untuk berinovasi dan menciptakan solusi
            teknologi yang kreatif.
          </li>
          <li>
            Menyediakan lingkungan yang mendukung untuk eksplorasi dan
            eksperimen di bidang IT.
          </li>
          <li>
            Membangun keterampilan komunikasi dan presentasi siswa agar dapat
            mengomunikasikan ide dan proyek mereka dengan efektif.
          </li>
          <li>
            Mendorong partisipasi aktif siswa dalam kompetisi dan kegiatan
            eksternal di bidang IT.
          </li>
        </ol>
      </H3>
    </div>
  );
}
