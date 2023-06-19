import Banner from "./Banner";
import Content from "./Content";

export default function Hero() {
  return (
    <div className="relative min-h-screen text-white mt-12">
      <div className="absolute inset-0">
        <Banner />
      </div>
      <div className="relative p-4 sm:p-8 xl:p-16 z-10 min-h-screen bg-black bg-opacity-50 flex flex-col justify-center sm:flex-row items-center sm:gap-5 lg:gap-10 lg:justify-start 2xl:gap-20">
        <Content />
      </div>
    </div>
  );
}
