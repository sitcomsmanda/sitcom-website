import Banner from "./Banner";
import Content from "./Content";

export default function Hero() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0">
        <Banner />
      </div>
      <div className="relative z-10 p-4 min-h-screen bg-black bg-opacity-50 flex items-center sm:p-8 xl:p-16">
        <Content />
      </div>
    </div>
  );
}
