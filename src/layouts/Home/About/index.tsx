import { fslc } from "@/modules/utils";
import Video from "../../About/Video";
import Content from "./Content";

const aboutHomeTwStyle = fslc(`
  relative flex items-center
  flex-col sm:flex-row 
  gap-10 sm:gap-5 lg:gap-10 2xl:gap-20
  p-4 sm:p-8 xl:p-16
`);

export default function About() {
  return (
    <div className={aboutHomeTwStyle}>
      <Video />
      <Content />
    </div>
  );
}
