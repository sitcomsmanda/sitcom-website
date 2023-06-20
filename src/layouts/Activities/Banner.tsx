import Image from "next/image";
import activitiesBanner from "@/assets/backgrounds/bg-activities-banner.jpg";

export default function Banner() {
  return (
    <div className="w-full h-40 md:w-1/2 md:h-[50vh]">
      <Image
        src={activitiesBanner}
        alt="sekumpulan tangan menunjuk ke laptop"
        placeholder="blur"
        className="brightness-50 rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}
