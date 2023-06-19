import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import { fslc } from "@/modules/utils";

const twStyle = fslc(`
  md:z-20 md:fixed md:top-0 md:left-0 md:right-0
  md:flex md:justify-between
  md:px-8 xl:px-16
  md:py-2
  md:shadow md:shadow-slate-700
  md:bg-slate-100
`);

export default function Navigation() {
  return (
    <nav>
      <div className={`${twStyle}`}>
        <NavBrand />
        <NavLinks />
      </div>
      <NavButton />
    </nav>
  );
}
