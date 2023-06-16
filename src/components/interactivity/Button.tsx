import { fslc } from "@/modules/utils";
import { lato } from "@/services/fonts";
import { ButtonHTMLAttributes, MouseEventHandler } from "react";

type buttonArgs = {
  children: React.ReactNode;
  primary?: Boolean;
  secondary?: Boolean;
  onClick?: MouseEventHandler;
  type?: "button" | "submit" | "reset";
};

const twBaseStyle = fslc(`
  ${lato.className} font-semibold 
  text-sm lg:text-base xl:text-lg 
  py-2.5 w-full h-fit rounded-full
  transition-all duration-250 ease-in
`);

const twDefaultStyle = fslc(`
  text-slate-950 bg-slate-300
  hover:bg-slate-400 active:bg-slate-200
`);

const twPrimaryStyle = fslc(`
  text-green-950 bg-green-400
  hover:bg-green-500 active:bg-green-300
`);

const twSecondaryStyle = fslc(`
  text-slate-500 border border-offset-0 border-2 border-slate-500
  hover:border-x-8 hover:text-slate-600 hover:border-slate-600
  active:text-slate-400 active:border-slate-400
`);

export default function Button({
  children,
  primary,
  secondary,
  onClick,
  type = "button",
}: buttonArgs) {
  const currentStyle = [
    twBaseStyle,
    primary ? twPrimaryStyle : secondary ? twSecondaryStyle : twDefaultStyle,
  ].join(" ");

  return (
    <button type={type} className={currentStyle} onClick={onClick}>
      {children}
    </button>
  );
}
