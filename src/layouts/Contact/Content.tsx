import { H2, H3 } from "@/components/typography";
import Form from "./Form";

export default function Content() {
  return (
    <div className="p-4 w-full flex flex-col gap-10 sm:p-8 sm:justify-center sm:items-center xl:p-16 2xl:gap-20">
      <div className="flex flex-col gap-5">
        <H2>Hubungi Kami</H2>

        <H3>
          Jika anda tertarik untuk bekerja sama, silahkan isi kolom kontak di
          bawah ini. Kami akan berusaha membalas pesan Anda dalam satu hari jam
          kerja.
        </H3>
      </div>

      <Form />
    </div>
  );
}
