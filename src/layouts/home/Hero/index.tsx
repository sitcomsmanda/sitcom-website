import Banner from "./Banner";
import Content from "./Content";

export default function Hero() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0">
        <Banner />
      </div>
      <section className="relative z-10 p-4 min-h-screen bg-black bg-opacity-50 flex items-center sm:p-8 xl:p-16">
        <div className="w-full flex flex-col gap-5 sm:w-1/2 lg:gap-10 2xl:w-1/3">
          <Content />
        </div>
      </section>
    </div>
  );
}
