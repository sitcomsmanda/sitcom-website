import Image from "next/image";
import documentationBanner from "@/assets/backgrounds/bg-documentation-banner.jpg";

export default function Banner() {
  return (
    <div className="w-full h-40 md:w-1/2 md:h-[50vh]">
      <Image
        src={documentationBanner}
        alt="kamera yang sedang memotret"
        placeholder="blur"
        className="brightness-50 rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}
