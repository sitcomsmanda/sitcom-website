import Video from "./Video";
import Description from "./Description";

export default function About() {
  return (
    <div className="overflow-hidden relative p-4 flex flex-col items-center gap-10 sm:gap-5 sm:p-8 sm:flex-row-reverse lg:gap-10 xl:p-16 2xl:gap-20">
      <Video />
      <Description />
    </div>
  );
}
