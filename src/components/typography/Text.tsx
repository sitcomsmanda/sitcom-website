const twStyle = `font-normal text-xs lg:text-sm xl:text-base`;

export default function Text({ children }: { children: React.ReactNode }) {
  return <p className={twStyle}>{children}</p>;
}
