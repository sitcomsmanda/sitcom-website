import Video from "./Video";
import Content from "./Content";
import { fslc } from "@/modules/utils";

const twStyle = fslc(`
  relative w-full flex flex-col items-center
  p-4 sm:p-8 xl:p-16
  sm:flex-row-reverse sm:flex-row sm:justify-center sm:items-center
  gap-10 sm:gap-5 lg:gap-10 2xl:gap-20 
`);

export default function Documentation() {
  return (
    <div className={twStyle}>
      <Video />
      <Content />
    </div>
  );
}
