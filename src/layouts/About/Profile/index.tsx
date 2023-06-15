import Video from "./Video";
import Content from "./Content";

export default function Profile() {
  return (
    <div className="relative p-4 sm:p-8 xl:p-16 flex flex-col sm:flex-row gap-10 sm:gap-5">
      <Video />
      <Content />
    </div>
  );
}
