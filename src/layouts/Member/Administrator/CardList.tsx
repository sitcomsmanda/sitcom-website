import Card from "@/layouts/Card";
import { Key } from "react";

type administratorType = {
  id: Key;
  title: String;
  name: String;
};

const administrator = [
  {
    id: 1,
    title: "Pembina",
    name: "Azis Suryaman, S.Pd., Gr.",
  },
  {
    id: 2,
    title: "Ketua",
    name: "Muhammad Farrel Putra Rifanni",
  },
  {
    id: 3,
    title: "Wakil Ketua",
    name: "Kettin",
  },
  {
    id: 4,
    title: "Sekretaris",
    name: "Abdillah Haq Mulyadjati",
  },
  {
    id: 5,
    title: "Bendahara",
    name: "Zemima Nasywa Hilabi",
  },
];

function generateCardList(data: administratorType[]) {
  return data.map((x) => <Card title={x.title} text={x.name} />);
}

export default function CardList() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full">
      {generateCardList(administrator)}
    </div>
  );
}
