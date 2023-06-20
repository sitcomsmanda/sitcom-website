import brandDark from "@/assets/brands/sitcom-dark.svg";
import brandLight from "@/assets/brands/sitcom-light.svg";
import Image from "next/image";

export default function NavBrand() {
  return (
    <div className="z-20 absolute left-0 right-0 top-0 flex justify-center items-center pt-8 md:static md:pt-0">
      <Image
        src={brandDark}
        alt="SITCOM Brand Logo"
        className="w-32 md:hidden"
      />
      <Image
        src={brandLight}
        alt="SITCOM Brand Logo"
        className="w-32 hidden md:block"
      />
    </div>
  );
}
