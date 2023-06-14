import { lato } from "@/services/fonts";

const twStyle = `${lato.className} font-bold text-2xl lg:text-3xl xl:text-4xl`;

export default function H2({ children }: { children: React.ReactNode }) {
  return <h2 className={twStyle}>{children}</h2>;
}
