import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Libelle Academy | Deutsch & Medical German",
  description:
    "Deutschkurse von A1 bis B2 sowie medizinische Sprach- und Prüfungsvorbereitung für FSP, FaMed und Zahnmedizin.",
  applicationName: "Libelle Academy",
  keywords: [
    "Deutsch lernen",
    "Deutsch A1",
    "Deutsch A2",
    "Deutsch B1",
    "Deutsch B2",
    "FSP Medizin",
    "FaMed",
    "medizinisches Deutsch",
    "FSP Zahnmedizin",
    "Libelle Academy",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
