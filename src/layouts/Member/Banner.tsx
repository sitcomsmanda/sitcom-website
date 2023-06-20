import Image from "next/image";
import memberBanner from "@/assets/backgrounds/bg-member-banner.jpg";

export default function Banner() {
  return (
    <div className="w-full h-40 md:w-1/2 md:h-[50vh]">
      <Image
        src={memberBanner}
        alt="Tangan memegang ponsel pintar"
        placeholder="blur"
        className="brightness-50 rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}
