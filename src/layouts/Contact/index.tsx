import Content from "./Content";
import Banner from "./Banner";

export default function Contact() {
  return (
    <div className="p-4 flex flex-col-reverse gap-10 sm:flex-row sm:gap-5 sm:p-8 sm:items-center lg:gap-10 xl:p-16 2xl:gap-20">
      <Content />
      <Banner />
    </div>
  );
}
