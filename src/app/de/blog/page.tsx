import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Blog | Libelle Academy",
  description:
    "Deutsch, medizinisches Deutsch, Prüfungsvorbereitung und Leben in Deutschland.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="bg-[#D2ECFF]/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            LIBELLE JOURNAL
          </div>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-.045em] sm:text-6xl">
            Blog
          </h1>
        </div>
      </section>
    </main>
  );
}
