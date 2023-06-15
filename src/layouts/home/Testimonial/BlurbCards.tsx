import Card from "@/layouts/Card";
import { Key } from "react";

type blurbType = {
  id: Key;
  author: String;
  blurb: String;
};

const blurbs = [
  {
    id: 1,
    author: `Ahmad R`,
    blurb: `"Suasana ramah dan kolaboratif di ekskul ini membuat saya semangat untuk belajar."`,
  },
  {
    id: 2,
    author: `Ajriya A`,
    blurb: `“Ekstrakurikuler Informasi Teknologi di SMA Negeri 2 Bandung ini memberikan pengalaman luar biasa bagi saya sebagai alumni.”`,
  },
  {
    id: 3,
    author: `Eka K`,
    blurb: `“Terima kasih kepada SITCOM atas dasar yang kokoh dalam ilmu komputer yang saya dapatkan.”`,
  },
];

function GenerateCards(data: blurbType[]) {
  return data.map((x) => <Card key={x.id} title={x.author} text={x.blurb} />);
}

export default function BlurbCards() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center sm:flex-row lg:w-2/3 2xl:w-1/2">
      {GenerateCards(blurbs)}
    </div>
  );
}
