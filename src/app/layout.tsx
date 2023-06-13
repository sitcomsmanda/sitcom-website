import "./globals.css";
import { karla } from "@/services/fonts";

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
