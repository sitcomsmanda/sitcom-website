import bgWebProgramming from "@/assets/backgrounds/bg-web-programming.jpg";
import bgSoftwareOffice from "@/assets/backgrounds/bg-software-office.jpg";
import Card from "@/layouts/Card";
import { Key } from "react";
import Image, { StaticImageData } from "next/image";

export type activitiesType = {
  id: Key;
  image: StaticImageData;
  title: String;
  blurb: String;
  description: String;
};

export const activities = [
  {
    id: 1,
    title: `Pengembangan Website`,
    image: bgWebProgramming,
    blurb: `Pembuatan website melalui HTML, CSS, dan JavaScript.`,
    description: `Mengembangkan keterampilan dalam membuat website menggunakan HTML, CSS, dan JavaScript.`,
  },
  {
    id: 2,
    title: `Penggunaan Software Office`,
    image: bgSoftwareOffice,
    blurb: `Microsoft Word, Excel, dan Software Office Lainnya`,
    description: `Memperluas pemahaman penggunaan Software Office untuk produktivitas yang lebih tinggi`,
  },
];

export function GenerateImage(src: StaticImageData, alt: string) {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      className="object-cover h-20 w-full brightness-75"
    />
  );
}

function GenerateCards(data: activitiesType[]) {
  return data.map((x) => (
    <Card
      key={x.id}
      thumbnail={GenerateImage(x.image, x.title.toString())}
      title={x.title}
      text={x.description}
      className="md:w-64 lg:w-96 lg:h-64"
    />
  ));
}

export default function ProgramList() {
  return (
    <div className="flex flex-col gap-10 justify-center items-start sm:flex-row  2xl:gap-20">
      {GenerateCards(activities)}
    </div>
  );
}
