import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MatVerse CUBE",
  description: "Workspace de experiência para o MatVerse Field Kernel.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
