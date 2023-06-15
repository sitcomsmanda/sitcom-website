import Video from "./Video";
import Content from "./Content";

export default function Highlight() {
  return (
    <div className="relative p-4 flex flex-col items-center gap-10 sm:gap-5 sm:p-8 sm:flex-row-reverse lg:gap-10 xl:p-16 2xl:gap-20">
      <Video />
      <Content />
    </div>
  );
}
