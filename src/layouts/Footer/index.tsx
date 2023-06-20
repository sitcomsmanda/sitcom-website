import { fslc } from "@/modules/utils";
import Brand from "./Brand";
import Address from "./Address";
import LinkWebsite from "./LinkWebsite";
import LinkSocialMedia from "./LinkSocialMedia";
import Copyright from "./Copyright";

const twStyle = fslc(`
  bg-slate-800 text-white
  px-4 pt-4 pb-20
  flex flex-col gap-5
  md:px-8 md:pb-8
  md:pb-8
`);

export default function Footer() {
  return (
    <footer className={twStyle}>
      <Brand />

      <Address />

      <div className="flex flex-row gap-10">
        <LinkWebsite />
        <LinkSocialMedia />
      </div>

      <hr className="w-full border-slate-600" />

      <Copyright />
    </footer>
  );
}
