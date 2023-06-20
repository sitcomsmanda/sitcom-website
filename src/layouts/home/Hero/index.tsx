import { fslc } from "@/modules/utils";
import Banner from "./Banner";
import Content from "./Content";

const contentTwStyle = fslc(`
  relative z-10 min-h-screen p-4
  bg-gradient-to-r from-[#00000075] to-[#00000075]
  flex flex-col justify-center items-center
  sm:from-[#000000db] sm:to-[#00000000]
  sm:flex-row sm:gap-5 sm:p-8
  lg:gap-10 lg:justify-start
  xl:p-16 2xl:gap-20
`);

export default function Hero() {
  return (
    <div className="relative min-h-screen text-white md:mt-12">
      <div className="absolute inset-0">
        <Banner />
      </div>
      <div className={contentTwStyle}>
        <Content />
      </div>
    </div>
  );
}
