"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/whatsapp";

export default function SiteFooter() {
  const pathname = usePathname();

  const isGerman = pathname.startsWith("/de");
  const isTurkish = pathname.startsWith("/tr");
  const isEnglish = pathname.startsWith("/en");

  const base = isTurkish ? "/tr" : isEnglish ? "/en" : "/de";

  const labels = isTurkish
    ? {
        courses: "Kurslar",
        exams: "Sınav Hazırlığı",
        about: "Libelle Hakkında",
        tutors: "Eğitmenler",
        resources: "Kaynaklar",
        learning: "Öğrenme",
        academy: "Libelle Academy",
        text: "Canlı dersleri, dijital öğrenme materyallerini ve yapılandırılmış öğrenme yollarını bir araya getiriyoruz.",
        contact: "İletişim",
        whatsapp: "WhatsApp ile iletişime geç",
      }
    : isEnglish
    ? {
        courses: "Courses",
        exams: "Exam Preparation",
        about: "About Libelle",
        tutors: "Tutors",
        resources: "Resources",
        learning: "Learning",
        academy: "Libelle Academy",
        text: "Live teaching, digital learning materials and structured learning paths in one academy.",
        contact: "Contact",
        whatsapp: "Contact via WhatsApp",
      }
    : {
        courses: "Kurse",
        exams: "Prüfungsvorbereitung",
        about: "Über Libelle",
        tutors: "Tutoren",
        resources: "Ressourcen",
        learning: "Lernen",
        academy: "Libelle Academy",
        text: "Live-Unterricht, digitale Lernmaterialien und klar strukturierte Lernwege unter einem Dach.",
        contact: "Kontakt",
        whatsapp: "Über WhatsApp kontaktieren",
      };

  return (
    <footer className="border-t border-black/5 bg-[#f7f5f9]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_.9fr]">
          <div>
            <Link href={base}>
              <img
                src="/libelle-logo.png"
                alt="Libelle Academy"
                className="h-14 w-auto max-w-[155px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-black/50">
              {labels.text}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/almancahedefim/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-[#31175B]/30 hover:text-[#31175B]"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
              {labels.learning.toUpperCase()}
            </div>

            <div className="mt-5 space-y-3 text-sm text-black/55">
              <Link
                href={`${base}/kurse`}
                className="block transition hover:text-[#31175B]"
              >
                {labels.courses}
              </Link>

              <Link
                href={`${base}/pruefungsvorbereitung`}
                className="block transition hover:text-[#31175B]"
              >
                {labels.exams}
              </Link>

              {isGerman && (
                <Link
                  href="/de/pakete/deutsch-a1-b2"
                  className="block transition hover:text-[#31175B]"
                >
                  Deutsch A1–B2
                </Link>
              )}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
              {labels.academy.toUpperCase()}
            </div>

            <div className="mt-5 space-y-3 text-sm text-black/55">
              <Link
                href={`${base}/ueber-libelle`}
                className="block transition hover:text-[#31175B]"
              >
                {labels.about}
              </Link>

              <Link
                href={`${base}/tutoren`}
                className="block transition hover:text-[#31175B]"
              >
                {labels.tutors}
              </Link>

              <Link
                href={`${base}/ressourcen`}
                className="block transition hover:text-[#31175B]"
              >
                {labels.resources}
              </Link>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
              {labels.contact.toUpperCase()}
            </div>

            <p className="mt-5 text-sm leading-6 text-black/50">
              {isGerman
                ? "Fragen zu Kursen, Einstufung oder Prüfungsvorbereitung?"
                : isTurkish
                ? "Kurslar, seviye veya sınav hazırlığı hakkında sorularınız mı var?"
                : "Questions about courses, level or exam preparation?"}
            </p>

            <a
              href={whatsappLink(
                isGerman
                  ? "Hallo, ich habe eine Frage zu Libelle Academy. Quelle: WEBSITE-FOOTER"
                  : isTurkish
                  ? "Merhaba, Libelle Academy hakkında bir sorum var. Kaynak: WEBSITE-FOOTER"
                  : "Hello, I have a question about Libelle Academy. Source: WEBSITE-FOOTER"
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full bg-[#31175B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4B238B]"
            >
              {labels.whatsapp}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-black/8 pt-7 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Libelle Academy
          </div>

          <div className="flex items-center gap-3 font-semibold">
            <Link
              href="/de"
              className={isGerman ? "text-[#31175B]" : "hover:text-[#31175B]"}
            >
              DE
            </Link>

            <span>/</span>

            <Link
              href="/tr"
              className={isTurkish ? "text-[#31175B]" : "hover:text-[#31175B]"}
            >
              TR
            </Link>

            <span>/</span>

            <Link
              href="/en"
              className={isEnglish ? "text-[#31175B]" : "hover:text-[#31175B]"}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
