import Banner from "./Banner";
import Content from "./Content";

export default function Hero() {
  return (
    <div className="relative h-screen text-white">
      <div className="absolute inset-0">
        <Banner />
      </div>
      <section className="relative z-10 p-4 h-full bg-black bg-opacity-50 flex items-center">
        <div className="flex flex-col gap-5">
          <Content />
        </div>
      </section>
    </div>
  );
}
