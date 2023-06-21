import Content from "./Content";
import Banner from "./Banner";
import { fslc } from "@/modules/utils";

const twStyle = fslc(`
  w-full flex flex-col
  p-4 sm:p-8 xl:p-16
  sm:flex-row sm:justify-center sm:items-center
  gap-10 sm:gap-5 lg:gap-10 2xl:gap-20
`);

export default function Contact() {
  return (
    <div className={twStyle}>
      <Content />
      <Banner />
    </div>
  );
}
