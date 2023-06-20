import Image from "next/image";
import homeBanner from "@/assets/backgrounds/bg-home-banner.jpg";

export default function Banner() {
  return (
    <Image
      src={homeBanner}
      alt="Kumpulan remaja sedang berdiskusi"
      placeholder="blur"
      fill
      className="animate-bannerLeftRight md:animate-none object-cover"
    />
  );
}
