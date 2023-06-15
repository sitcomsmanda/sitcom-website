import Video from "./Video";
import Content from "./Content";

export default function Profile() {
  return (
    <div className="relative p-4 flex flex-col items-center gap-10 sm:gap-5 sm:p-8 sm:flex-row lg:gap-10 xl:p-16">
      <Video />
      <Content />
    </div>
  );
}
