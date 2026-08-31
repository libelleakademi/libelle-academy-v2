import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kaynaklar | Libelle Academy",
  description:
    "Lernmaterialien, Prüfungstipps, digitale Inhalte und weitere Ressourcen für Deutsch A1–B2 sowie medizinische Prüfungsvorbereitung.",
};

const consultationMessage =
  "Hallo, ich suche Lernmaterialien oder Ressourcen bei Libelle Academy und möchte wissen, was zu meinem aktuellen Ziel passt. Quelle: KAYNAKLAR-SEITE";

const resourceGroups = [
  {
    label: "GENEL ALMANCA",
    title: "Deutsch A1–B2",
    text: "Grammatik, Wortschatz und Lernhilfen für den allgemeinen Deutschweg vom Einstieg bis B2.",
    href: "/tr/pakete/deutsch-a1-b2",
  },
  {
    label: "MEDICAL GERMAN",
    title: "FSP & FaMed",
    text: "Lerninhalte und Prüfungstipps rund um medizinische Fachsprache, Kommunikation und Prüfungsvorbereitung.",
    href: "/tr/pruefungsvorbereitung",
  },
  {
    label: "PRÜFUNGSTRAINING",
    title: "Simulationen",
    text: "Prüfungsnahe Anwendung, Feedback und gezieltes Training vor dem echten Prüfungstermin.",
    href: "/tr/simulationen",
  },
];

const digitalFeatures = [
  {
    number: "01",
    title: "Ders kayıtları",
    text: "Kursinhalte können je nach Kurs über den digitalen Lernbereich erneut angesehen werden.",
  },
  {
    number: "02",
    title: "Dijital materyaller",
    text: "Zusätzliche Inhalte ergänzen den Canlı dersler und helfen bei der Vertiefung.",
  },
  {
    number: "03",
    title: "Bağımsız öğrenme",
    text: "Zwischen den Unterrichtsterminen können Inhalte eigenständig wiederholt und trainiert werden.",
  },
  {
    number: "04",
    title: "Sınav odaklı içerikler",
    text: "Im medizinischen Bereich werden digitale Materialien mit der jeweiligen Prüfungsvorbereitung verbunden.",
  },
];

export default function RessourcenPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[650px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              KAYNAKLAR
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Derslerin arasında da Almanca öğrenmeye devam edin.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Dijital öğrenme materyalleri, Prüfungstipps und ergänzende Inhalte
              helfen dabei, Unterricht zu vertiefen und kontinuierlich
              weiterzulernen.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#ressourcen"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Kaynakları keşfet
              </a>

              <a
                href={whatsappLink(consultationMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Uygun içerikleri bul
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                PELEXA
              </div>
              <div className="mt-1 text-sm font-semibold">
                Canlı dersler arasında öğrenmeye devam
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                ÖĞRENMEYE DEVAM
              </div>
              <div className="mt-1 text-sm font-semibold">
                Tekrar et · pekiştir · uygula
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-6 shadow-[0_30px_90px_rgba(49,23,91,.16)]">
              <div className="rounded-[2.1rem] bg-[#f3eff7] p-7 sm:p-9">
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                DİJİTAL ÖĞRENME
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Canlı dersler ergänzen. Inhalte wiederholen. Weiterlernen.
              </div>

              <div className="mt-7 space-y-3">
                {[
                  "Pelexa Lernbereich",
                  "Ders kayıtları",
                  "Dijital öğrenme materyalleri",
                  "Sınav odaklı içerikler",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-[#31175B] p-5 text-white">
                <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                  HEDEF
                </div>

                <p className="mt-2 leading-7 text-white/70">
                  Lernen nicht auf einzelne Unterrichtstermine begrenzen,
                  sondern Inhalte regelmäßig vertiefen und anwenden.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                PELEXA
              </div>
              <div className="mt-1 text-xs font-semibold">
                Canlı dersler arasında öğrenmeye devam
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                ÖĞRENMEYE DEVAM
              </div>
              <div className="mt-1 text-xs font-semibold">
                Tekrar et · pekiştir · uygula
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-RESOURCES */}
      <EditorialStorySection
        eyebrow="DERSLER ARASINDA ÖĞRENME"
        title="Fortschritt entsteht nicht nur während des Canlı derslers."
        text="Dijital materyaller, Wiederholung und selbstständige Vertiefung helfen dabei, Inhalte zwischen den Kursterminen verfügbar zu halten und gezielt weiterzuarbeiten."
        image="/images/resources-digital-study.jpg"
        alt="Digitales Lernen mit Laptop und Lernmaterialien"
        chip="PELEXA · MATERIALIEN · WIEDERHOLEN"
      />

      {/* RESOURCE TYPES */}
      <section id="ressourcen" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            ÖĞRENME ALANLARI
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Hedefinize uygun kaynaklar.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Allgemeines Deutsch und medizinische Prüfungsvorbereitung haben
            unterschiedliche Schwerpunkte. Deshalb führen wir Sie direkt zu
            den passenden Lernbereichen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {resourceGroups.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-[2.2rem] bg-[#f7f9fb] p-8 transition hover:-translate-y-1"
            >
              <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                {item.label}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-7 text-black/50">{item.text}</p>

              <div className="mt-8 text-sm font-semibold text-[#31175B]">
                Daha fazla bilgi →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PELEXA */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              PELEXA ÖĞRENME ALANI
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Canlı dersler arasında öğrenmeye devam.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Der digitale Lernbereich ergänzt ausgewählte Kurse mit
              Ders kayıtları, Materialien und weiteren Lerninhalten.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {digitalFeatures.map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] bg-white/10 p-7"
              >
                <div className="text-xs font-bold text-[#58ECF1]">
                  {item.number}
                </div>

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-8 rounded-[2.7rem] bg-[#f3eff7] p-9 sm:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              INSTAGRAM
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Almanca ve sınav ipuçları Instagram'da da.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
              Auf @almancahedefim finden Sie Lerninhalte, Grammatik,
              Prüfungstipps und Einblicke in Libelle Academy.
            </p>
          </div>

          <a
            href="https://www.instagram.com/almancahedefim/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#31175B] px-8 py-4 text-center text-sm font-semibold text-white"
          >
            Instagram'ı aç
          </a>
        </div>
      </section>

      {/* WHERE TO GO */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            WO MÖCHTEN SIE ÖĞRENMEYE DEVAM?
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Doğrudan size uygun alana gidin.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Link
            href="/tr/kurse"
            className="rounded-[2.4rem] bg-[#D2ECFF]/60 p-9 sm:p-10"
          >
            <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
              TÜM KURSLAR
            </div>

            <h3 className="mt-5 text-3xl font-semibold">
              Almanca ve medikal kursları inceleyin.
            </h3>

            <p className="mt-5 text-lg leading-8 text-black/55">
              Alle Kursangebote von A1 bis B2 sowie medizinische
              Spezialisierungen auf einer Seite.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Kurslara git →
            </div>
          </Link>

          <Link
            href="/tr/pruefungsvorbereitung"
            className="rounded-[2.4rem] bg-[#31175B] p-9 text-white sm:p-10"
          >
            <div className="text-xs font-bold tracking-[.16em] text-[#58ECF1]">
              SINAV HAZIRLIĞI
            </div>

            <h3 className="mt-5 text-3xl font-semibold">
              FSP, FaMed oder Zahnmedizin?
            </h3>

            <p className="mt-5 text-lg leading-8 text-white/60">
              Finden Sie den passenden medizinischen Prüfungsweg und die
              entsprechende Vorbereitung.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#58ECF1]">
              Sınav hazırlığını incele →
            </div>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              SIE SUCHEN ETWAS BESTIMMTES?
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Sagen Sie uns, was Sie gerade lernen.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Schreiben Sie uns kurz Ihr Sprachniveau oder Ihre geplante
              Prüfung. Wir helfen Ihnen, die passenden Inhalte oder Kurse zu
              finden.
            </p>
          </div>

          <a
            href={whatsappLink(consultationMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            Über WhatsApp fragen
          </a>
        </div>
      </section>
    </main>
  );
}
