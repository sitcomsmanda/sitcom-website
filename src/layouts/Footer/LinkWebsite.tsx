import Link from "next/link";
import {
  PATH_HOME,
  PATH_ABOUT,
  PATH_ACTIVITIES,
  PATH_CONTACT,
  PATH_DOCUMENTATION,
  PATH_MEMBER,
} from "@/data/pageNavigation";
import { H3, Text } from "@/components/typography";

export default function LinkWebsite() {
  return (
    <div className="flex flex-col gap-2">
      <H3>
        <Link href={PATH_HOME}>SITCOM</Link>
      </H3>
      <ul className="flex flex-col gap-1">
        <Text>
          <Link href={PATH_ABOUT}>Tentang</Link>
        </Text>
        <Text>
          <Link href={PATH_MEMBER}>Anggota</Link>
        </Text>
        <Text>
          <Link href={PATH_DOCUMENTATION}>Dokumentasi</Link>
        </Text>
        <Text>
          <Link href={PATH_ACTIVITIES}>Aktivitas</Link>
        </Text>
        <Text>
          <Link href={PATH_CONTACT}>Kontak</Link>
        </Text>
      </ul>
    </div>
  );
}
