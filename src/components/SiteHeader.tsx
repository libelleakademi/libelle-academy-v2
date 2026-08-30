import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href="/de" className="flex shrink-0 items-center" aria-label="Libelle Academy Startseite">
          <img
            src="/libelle-logo.png"
            alt="Libelle Academy"
            className="h-12 w-auto max-w-[132px] object-contain sm:h-14 sm:max-w-[150px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-black/65 lg:flex">
          <Link href="/de/kurse" className="transition hover:text-[#31175B]">
            Kurse
          </Link>
          <Link href="/de/pruefungsvorbereitung" className="transition hover:text-[#31175B]">
            Prüfungsvorbereitung
          </Link>
          <Link href="/de/ueber-libelle" className="transition hover:text-[#31175B]">
            Über Libelle
          </Link>
          <Link href="/de/tutoren" className="transition hover:text-[#31175B]">
            Tutoren
          </Link>
          <Link href="/de/ressourcen" className="transition hover:text-[#31175B]">
            Ressourcen
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.instagram.com/almancahedefim/"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-black/55 transition hover:text-[#31175B] xl:block"
          >
            Instagram
          </a>

          <div className="hidden items-center gap-1 text-xs font-semibold text-black/45 md:flex">
            <Link href="/de" className="text-[#31175B]">
              DE
            </Link>
            <span>/</span>
            <Link href="/tr" className="transition hover:text-[#31175B]">
              TR
            </Link>
            <span>/</span>
            <Link href="/en" className="transition hover:text-[#31175B]">
              EN
            </Link>
          </div>

          <a
            href={whatsappLink(
              "Hallo, ich interessiere mich für die Kurse der Libelle Akademie. Quelle: WEBSITE-HEADER"
            )}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#31175B] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#4B238B] sm:px-5 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
