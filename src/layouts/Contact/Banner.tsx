import Image from "next/image";
import contactBanner from "@/assets/backgrounds/bg-contact-banner.jpg";

export default function Banner() {
  return (
    <div className="w-full h-40 md:w-1/2 md:h-[650px]">
      <Image
        src={contactBanner}
        alt="Tangan memegang ponsel pintar"
        placeholder="blur"
        className="brightness-50 rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}
