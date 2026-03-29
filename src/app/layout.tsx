import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PRISSMA | Gestão Inteligente para Construção Civil",
  description:
    "A plataforma definitiva para engenheiros e arquitetos que buscam controle total de obras. Menos planilhas, mais resultados.",
  keywords: [
    "gestão de obras",
    "gerenciamento de reformas",
    "controle de orçamento obra",
    "gestão de equipes obra",
    "software para engenheiro civil",
    "plataforma para arquitetos",
    "PRISSMA",
  ],
  openGraph: {
    title: "PRISSMA | Gestão Inteligente para Construção Civil",
    description:
      "A plataforma definitiva para engenheiros e arquitetos que buscam controle total de obras.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f9f9ff]">{children}</body>
    </html>
  );
}
