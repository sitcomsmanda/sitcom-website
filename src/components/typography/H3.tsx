import { karla } from "@/services/fonts";

const twStyle = `${karla.className} font-semibold tracking-wide text-sm lg:text-base xl:text-lg`;

export default function H3({ children }: { children: React.ReactNode }) {
  return <h3 className={twStyle}>{children}</h3>;
}
