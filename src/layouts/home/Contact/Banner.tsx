import Image from "next/image";
import contactBanner from "@/assets/backgrounds/bg-contact-banner.jpg";

export default function Banner() {
  return (
    <div className="hidden sm:block sm:w-1/2 sm:h-[650px]">
      <Image
        src={contactBanner}
        alt="Tangan memegang ponsel pintar"
        placeholder="blur"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}
