import Link from "next/link";
import { URL_JOIN } from "@/data/pageNavigation";
import { TextField, TextArea } from "@/components/form";
import { Button } from "@/components/interactivity";

export default function Form() {
  return (
    <form
      className="w-full flex flex-col gap-5"
      acceptCharset="UTF-8"
      action="https://app.formester.com/forms/7cd5195c-db94-4131-aeed-f956094af764/submissions"
      method="POST"
    >
      <TextField required type="email" label="Email" id="email" name="email" />
      <TextField
        required
        type="text"
        label="Nama Lengkap"
        id="nama"
        name="nama"
      />
      <TextArea label="Pesan" id="pesan" name="pesan" />

      <div className="mt-5 flex flex-col gap-4 lg:flex-row-reverse lg:gap-8">
        <Button primary type="submit">
          Kirim
        </Button>

        <Link href={URL_JOIN} tabIndex={-1} className="w-full">
          <Button secondary>Bergabung Sekarang</Button>
        </Link>
      </div>
    </form>
  );
}
