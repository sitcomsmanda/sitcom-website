import Link from "next/link";
import { URL_JOIN } from "@/data/pageNavigation";
import { TextField, TextArea } from "@/components/form";
import { Button } from "@/components/interactivity";

export default function Form() {
  return (
    <form className="w-full flex flex-col gap-5 sm:w-1/2 lg:gap-10">
      <TextField type="email" label="Email" id="email" name="email" />
      <TextField type="text" label="Nama Lengkap" id="nama" name="nama" />
      <TextArea label="Pesan" id="pesan" name="pesan" />

      <div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-8">
        <Button primary>Kirim</Button>

        <Link
          href={URL_JOIN}
          tabIndex={-1}
          className="w-full sm:w-1/2 md:w-1/3"
        >
          <Button secondary>Bergabung Sekarang</Button>
        </Link>
      </div>
    </form>
  );
}
