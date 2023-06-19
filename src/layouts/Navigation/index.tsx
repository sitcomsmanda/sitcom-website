import { fslc } from "@/modules/utils";
import NavLink from "./NavLink";
import NavButton from "./NavButton";
import CloseButton from "./CloseButton";
import {
  PATH_HOME,
  PATH_ABOUT,
  PATH_ACTIVITIES,
  PATH_CONTACT,
  PATH_DOCUMENTATION,
  PATH_MEMBER,
} from "@/data/pageNavigation";

const twStyle = fslc(`
  z-50 min-h-screen px-4 py-5
  rounded-lg bg-slate-100
  flex flex-col items-center gap-5
  fixed left-0 right-0 -bottom-full
  md:flex-row md:top-0
`);

export default function Navigation() {
  return (
    <nav>
      <div id="navLinks" className={`${twStyle} md:min-h-fit`}>
        <NavLink href={PATH_HOME}>Beranda</NavLink>
        <NavLink href={PATH_ABOUT}>Tentang</NavLink>
        <NavLink href={PATH_MEMBER}>Anggota</NavLink>
        <NavLink href={PATH_DOCUMENTATION}>Dokumentasi</NavLink>
        <NavLink href={PATH_ACTIVITIES}>Aktivitas</NavLink>
        <NavLink href={PATH_CONTACT}>Kontak</NavLink>
        <CloseButton />
      </div>
      <NavButton />
    </nav>
  );
}
