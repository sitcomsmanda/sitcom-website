import { fslc } from "@/modules/utils";
import {
  PATH_HOME,
  PATH_ABOUT,
  PATH_ACTIVITIES,
  PATH_CONTACT,
  PATH_DOCUMENTATION,
  PATH_MEMBER,
} from "@/data/pageNavigation";
import NavLink from "./NavLink";
import CloseButton from "./CloseButton";

const twStyle = fslc(`
  z-50 min-h-screen px-4 py-5
  rounded-lg bg-slate-100
  flex flex-col items-center gap-5
  fixed left-0 right-0 -bottom-full
  md:flex-row md:top-0
  md:px-2 md:py-2 md:min-h-fit
  md:rounded-none md:bg-transparent
`);

export default function NavLinks() {
  return (
    <div id="navLinks" className={`${twStyle}`}>
      <NavLink href={PATH_HOME}>Beranda</NavLink>
      <NavLink href={PATH_ABOUT}>Tentang</NavLink>
      <NavLink href={PATH_MEMBER}>Anggota</NavLink>
      <NavLink href={PATH_DOCUMENTATION}>Dokumentasi</NavLink>
      <NavLink href={PATH_ACTIVITIES}>Aktivitas</NavLink>
      <NavLink href={PATH_CONTACT}>Kontak</NavLink>
      <CloseButton />
    </div>
  );
}
