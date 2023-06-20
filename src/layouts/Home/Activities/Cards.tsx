import Card from "@/layouts/Card";
import {
  activitiesType,
  activities,
  GenerateImage,
} from "@/layouts/Activities/Program/ProgramList";

function GenerateCards(data: activitiesType[]) {
  return data.map((x) => (
    <Card
      key={x.id}
      thumbnail={GenerateImage(x.image, x.title.toString())}
      title={x.title}
      text={x.blurb}
    />
  ));
}

export default function Cards() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center sm:flex-row lg:w-2/3 2xl:w-1/2">
      {GenerateCards(activities)}
    </div>
  );
}
