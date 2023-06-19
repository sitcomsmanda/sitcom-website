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

export default function Navigation() {
  return (
    <nav>
      <div
        id="navLinks"
        className="z-50 fixed min-h-screen flex flex-col gap-5 items-center bg-slate-100 left-0 right-0 -bottom-full py-5 rounded-lg px-4"
      >
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
