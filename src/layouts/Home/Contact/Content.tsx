import { H2, H3 } from "@/components/typography";
import Form from "../../Contact/Form";

export default function Content() {
  return (
    <div className="flex flex-col gap-10 w-full sm:w-1/2">
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
