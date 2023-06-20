import Image from "next/image";
import administratorBanner from "@/assets/backgrounds/bg-member-section-1.jpg";

export default function Banner() {
  return (
    <div className="hidden sm:block sm:w-1/2 sm:h-[800px]">
      <Image
        src={administratorBanner}
        alt="siluet sekumpulan orang"
        placeholder="blur"
        className="brightness-50 rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}
