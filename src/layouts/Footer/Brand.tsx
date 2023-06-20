import brandDark from "@/assets/brands/sitcom-dark.svg";
import Image from "next/image";

export default function Brand() {
  return <Image src={brandDark} alt="SITCOM Brand Logo" className="w-32" />;
}
