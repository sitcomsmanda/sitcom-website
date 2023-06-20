import { lato } from "@/services/fonts";

const twStyle = `${lato.className} font-bold text-4xl lg:text-5xl xl:text-6xl`;

export default function H1({ children }: { children: React.ReactNode }) {
  return <h1 className={twStyle}>{children}</h1>;
}
