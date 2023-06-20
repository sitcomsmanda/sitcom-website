import Banner from "./Banner";
import Content from "./Content";

export default function Administrator() {
  return (
    <div className="p-4 flex flex-col items-center gap-10 sm:gap-5 sm:p-8 sm:flex-row lg:gap-10 xl:p-16 2xl:gap-20">
      <Banner />
      <Content />
    </div>
  );
}
