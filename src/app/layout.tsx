import "./globals.css";
import { karla } from "@/services/fonts";

export const metadata = {
  title: {
    template: "%s | SITCOM",
    default: "SITCOM",
  },
  description:
    "Ekspresikan kreativitas IT kamu dengan bergabung bersama komunitas SMA Negeri 2 Bandung yang terdiri dari siswa-siswa berbakat dan berminat di bidang Teknologi Informasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
