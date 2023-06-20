import YoutubePlayer from "@/components/media/YoutubePlayer";
import Card from "@/layouts/Card";

type videoType = {
  id: string;
  title: String;
  text: String;
};

const videos = [
  {
    id: "9mPr8uZex-o",
    title: "Pertemuan ke-13",
    text: "Memanipulasi file eksternal menggunakan C++",
  },
  {
    id: "G-owMw1-Es0",
    title: "Kalkulator BMR",
    text: "Proyek pertama dengan bahasa pemrograman C++",
  },
  {
    id: "nZtG3LGEFVA",
    title: "Kalkulator Faktorial",
    text: "Implementasi dari fungsi rekursi di C++",
  },
];

function generateCard(data: videoType[]) {
  return data.map((x) => (
    <Card
      title={x.title}
      text={x.text}
      thumbnail={
        <YoutubePlayer
          className="w-full sm:h-72 md:h-40 lg:h-64"
          videoId={x.id}
        />
      }
    />
  ));
}

export default function List() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full md:flex-row md:justify-evenly">
      {generateCard(videos)}
    </div>
  );
}
