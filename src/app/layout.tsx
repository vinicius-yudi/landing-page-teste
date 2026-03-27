import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRISSMA - Gestão Inteligente de Obras e Reformas",
  description:
    "Gerencie etapas, equipes e orçamentos de obras e reformas em um único lugar. Mais previsibilidade, menos surpresas. Plataforma SaaS para engenheiros, arquitetos e mestres de obra.",
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
    title: "PRISSMA - Gestão Inteligente de Obras e Reformas",
    description:
      "Gerencie etapas, equipes e orçamentos de obras e reformas em um único lugar.",
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
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
