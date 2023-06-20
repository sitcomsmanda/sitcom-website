import Content from "./Content";
import Banner from "./Banner";

export default function Member() {
  return (
    <div className="p-4 flex flex-col-reverse gap-10 md:flex-row md:gap-5 sm:pt-4 sm:p-8 md:items-center lg:gap-10 xl:p-16 2xl:gap-20">
      <Content />
      <Banner />
    </div>
  );
}
