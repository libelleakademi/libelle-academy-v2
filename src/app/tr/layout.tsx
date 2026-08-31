import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Libelle Academy | Almanca & Medikal Almanca",
    template: "%s | Libelle Academy",
  },
  description:
    "Almanca A1–B2, medikal Almanca, FSP, FaMed ve sınav hazırlığı için yapılandırılmış eğitim programları.",
};

export default function TurkishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
