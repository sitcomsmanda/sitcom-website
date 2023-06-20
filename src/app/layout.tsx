import "./globals.css";
import { karla } from "@/services/fonts";
import Navigation from "@/layouts/Navigation";
import Footer from "@/layouts/Footer";

export const metadata = {
  title: {
    template: "%s | SITCOM",
    default: "SITCOM",
  },
  description:
    "Ekspresikan kreativitas IT bersama komunitas SMA Negeri 2 Bandung, SITCOM. Disini, banyak siswa berbakat di bidang Teknologi Informasi! Bergabung Sekarang!",
  keywords: ["Ekskul IT", "SITCOM", "SMA Negeri 2 Bandung"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={karla.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
