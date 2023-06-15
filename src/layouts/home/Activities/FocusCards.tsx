import Card from "@/layouts/Card";
import { Key } from "react";

type activitiesType = {
  id: Key;
  title: String;
  blurb: String;
  description: String;
};

const activities = [
  {
    id: 1,
    title: `Pengembangan Website`,
    blurb: `Pembuatan website melalui HTML, CSS, dan JavaScript.`,
    description: `Mengembangkan keterampilan dalam membuat website menggunakan HTML, CSS, dan JavaScript.`,
  },
  {
    id: 2,
    title: `Penggunaan Software Office`,
    blurb: `Microsoft Word, Excel, dan Software Office Lainnya`,
    description: `Memperluas pemahaman penggunaan Software Office untuk produktivitas yang lebih tinggi`,
  },
];

function GenerateCards(data: activitiesType[]) {
  return data.map((x) => (
    <Card key={x.id} title={x.title} text={x.description} />
  ));
}

export default function BlurbCards() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center sm:flex-row lg:w-2/3 2xl:w-1/2">
      {GenerateCards(activities)}
    </div>
  );
}
