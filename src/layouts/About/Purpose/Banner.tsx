import Image from "next/image";
import purposeBanner from "@/assets/backgrounds/bg-about-section-1.jpg";

export default function Banner() {
  return (
    <div className="hidden sm:block sm:w-1/2 sm:h-[650px]">
      <Image
        src={purposeBanner}
        alt="meja kerja"
        placeholder="blur"
        className="brightness-50 rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}
