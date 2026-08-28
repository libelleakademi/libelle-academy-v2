import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/de" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#31175B]/15 bg-[#31175B]/5">
            <span className="text-lg font-semibold text-[#31175B]">L</span>
          </div>
          <div>
            <div className="text-sm font-bold tracking-[0.22em] text-[#31175B]">
              LIBELLE
            </div>
            <div className="text-[10px] tracking-[0.18em] text-black/45">
              AKADEMIE
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-black/65 lg:flex">
          <a href="#kurse" className="transition hover:text-[#31175B]">Kurse</a>
          <a href="#pruefungen" className="transition hover:text-[#31175B]">Prüfungsvorbereitung</a>
          <a href="#libelle" className="transition hover:text-[#31175B]">Über Libelle</a>
          <a href="#tutoren" className="transition hover:text-[#31175B]">Tutoren</a>
          <a href="#ressourcen" className="transition hover:text-[#31175B]">Ressourcen</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/almancahedefim/"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-black/55 transition hover:text-[#31175B] sm:block"
          >
            Instagram
          </a>

          <div className="hidden items-center gap-1 text-xs font-semibold text-black/45 md:flex">
            <Link href="/de" className="text-[#31175B]">DE</Link>
            <span>/</span>
            <Link href="/tr">TR</Link>
            <span>/</span>
            <Link href="/en">EN</Link>
          </div>

          <a
            href={whatsappLink(
              "Hallo, ich interessiere mich für die Kurse der Libelle Akademie. Quelle: WEBSITE-HEADER"
            )}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#31175B] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#4B238B] sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
