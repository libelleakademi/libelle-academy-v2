import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Prüfungsvorbereitung Medizin | Libelle Academy",
  description:
    "FSP, FaMed, Dentistry, Simulations und flexible medizinische Prüfungsvorbereitung bei Libelle Academy.",
};

const consultationMessage =
  "Hallo, ich möchte mich auf eine medizinische Prüfung vorbereiten und bin noch unsicher, welcher Kurs oder Lernweg zu mir passt. Bitte beraten Sie mich. Quelle: PRUEFUNGSVORBEREITUNG-HUB";

const mainCourses = [
  {
    label: "FSP MEDIZIN",
    title: "FSP Medizin Intensivkurs",
    text: "Medizinische Fachsprache, Anamnese, Dokumentation, Patientenvorstellung und realistische Prüfungssimulationen.",
    href: "/en/fsp-medizin",
    meta: "8 weeks · 950 €",
  },
  {
    label: "FAMED",
    title: "FaMed Intensivkurs",
    text: "Strukturierte Vorbereitung auf medizinische Kommunikation und die Anforderungen des FaMed-Prüfungsformats.",
    href: "/en/famed",
    meta: "6 weeks · 600 €",
  },
  {
    label: "ZAHNMEDIZIN",
    title: "FSP & FaMed Dentistry",
    text: "Prüfungsvorbereitung speziell für Zahnärztinnen und Zahnärzte mit intensiven Simulations und individuellem Feedback.",
    href: "/en/fsp-zahnmedizin",
    meta: "8 weeks · 950 €",
  },
  {
    label: "PRÜFUNGSTRAINING",
    title: "Prüfungssimulationen",
    text: "Wenn Sie bereits vorbereitet sind und Ihre Leistung vor der echten Prüfung realistisch testen möchten.",
    href: "/en/simulationen",
    meta: "from €75",
  },
];

const decisions = [
  {
    number: "01",
    title: "Which exam are you preparing for?",
    text: "FSP, FaMed oder Dentistry bestimmen, welcher Vorbereitungsschwerpunkt für Sie sinnvoll ist.",
  },
  {
    number: "02",
    title: "How confident is your medical German?",
    text: "Wenn die sprachliche Grundlage noch nicht stabil genug ist, kann ein vorbereitender medizinischer Sprachschritt sinnvoll sein.",
  },
  {
    number: "03",
    title: "How close is your exam date?",
    text: "Je näher die Prüfung kommt, desto wichtiger werden gezieltes Formattraining und realistische Simulations.",
  },
  {
    number: "04",
    title: "Do you need live lessons or flexibility?",
    text: "Neben Intensivkursen gibt es auch flexible Selbstlern- und Kombinationsmöglichkeiten.",
  },
];

export default function PruefungsvorbereitungPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[680px] lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              EXAM PREPARATION
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Do not choose just any course. Choose the right path to your exam.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              FSP, FaMed, Dentistry oder gezielte Simulations: Ihre
              Vorbereitung sollte zu Ihrer Prüfung, Ihrem aktuellen
              Sprachniveau und Ihrem Zeitplan passen.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(consultationMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Find the right preparation
              </a>

              <a
                href="#wege"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Explore exam paths
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                FSP · FAMED · ZAHN
              </div>
              <div className="mt-1 text-sm font-semibold">
                Prepare for your specific exam
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                STILL NOT SURE?
              </div>
              <div className="mt-1 text-sm font-semibold">
                Identify the right path first
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-6 shadow-[0_30px_90px_rgba(49,23,91,.16)]">
              <div className="rounded-[2.1rem] bg-[#f3eff7] p-7 sm:p-9">
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                WHICH PATH FITS?
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Your exam determines the right preparation.
              </div>

              <div className="mt-7 space-y-3">
                {[
                  ["FSP Medizin", "Fachsprache + Kommunikation"],
                  ["FaMed", "FaMed-spezifische Vorbereitung"],
                  ["Dentistry", "FSP & FaMed Dentistry"],
                  ["Simulations", "Prüfung realistisch testen"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-white px-5 py-4"
                  >
                    <div className="font-semibold">{title}</div>
                    <div className="mt-1 text-sm text-black/45">{text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-[#31175B] p-5 text-white">
                <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                  STILL NOT SURE?
                </div>
                <p className="mt-2 leading-7 text-white/70">
                  Sie müssen die Entscheidung nicht allein treffen. Wir helfen
                  Ihnen, den sinnvollsten Einstieg zu bestimmen.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                FSP · FAMED · ZAHN
              </div>
              <div className="mt-1 text-xs font-semibold">
                Prepare for your specific exam
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                STILL NOT SURE?
              </div>
              <div className="mt-1 text-xs font-semibold">
                Identify the right path first
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-PRUEFUNG */}
      <EditorialStorySection
        eyebrow="PREPARE FOR REAL EXAM CONDITIONS"
        title="The exam does not test how many pages you have read."
        text="Sie prüft, ob medizinische Kommunikation unter realistischen Bedingungen funktioniert. Deshalb sollte Vorbereitung Sprache, Struktur, Anwendung und Feedback miteinander verbinden."
        image="/images/fsp-doctor-patient-consultation.jpg"
        alt="Medizinisches Patientengespräch"
        chip="SPRACHE · STRUKTUR · ANWENDUNG"
        reverse
      />

      {/* MAIN COURSES */}
      <section id="wege" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            YOUR EXAM PATHS
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Choose according to your exam and current preparation level.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Jeder Weg hat einen anderen Schwerpunkt. Deshalb beginnt gute
            Prüfungsvorbereitung mit der richtigen Entscheidung.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {mainCourses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="group rounded-[2.2rem] border border-black/5 bg-[#f7f9fb] p-8 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(49,23,91,.08)]"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                  {course.label}
                </div>

                <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold">
                  {course.meta}
                </div>
              </div>

              <h3 className="mt-8 text-3xl font-semibold">{course.title}</h3>

              <p className="mt-4 leading-7 text-black/55">{course.text}</p>

              <div className="mt-8 text-sm font-semibold text-[#31175B]">
                Explore course →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DECISION */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              BEFORE YOU BOOK
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Four questions determine which preparation actually makes sense.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {decisions.map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] bg-white/10 p-8"
              >
                <div className="text-xs font-bold text-[#58ECF1]">
                  {item.number}
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLEXIBLE OPTIONS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
            OTHER OPTIONS
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Not every preparation path needs to look the same.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Link
            href="/en/famed-offline"
            className="rounded-[2.4rem] bg-[#f7f5f9] p-9 sm:p-10"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
              LEARN FLEXIBLY
            </div>

            <h3 className="mt-5 text-3xl font-semibold">
              FaMed Offline
            </h3>

            <p className="mt-5 text-lg leading-8 text-black/55">
              Wenn Sie Ihre FaMed-Vorbereitung flexibel in Ihrem eigenen Tempo
              aufbauen und bei Bedarf mit Live-Simulations kombinieren möchten.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              FaMed Offline ansehen →
            </div>
          </Link>

          <Link
            href="/en/pakete/medizinischer-sprachweg"
            className="rounded-[2.4rem] bg-[#D2ECFF]/60 p-9 sm:p-10"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#17666a]">
              NOCH VOR DER EXAM PREPARATION?
            </div>

            <h3 className="mt-5 text-3xl font-semibold">
              Medizinischer Sprachweg
            </h3>

            <p className="mt-5 text-lg leading-8 text-black/55">
              Wenn Sie zunächst medizinische Sprachkompetenz stärken und
              anschließend gezielt in FSP, FaMed oder Simulations wechseln
              möchten.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Medizinischen Sprachweg ansehen →
            </div>
          </Link>
        </div>
      </section>

      {/* SIMPLE DECISION PATH */}
      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              SCHNELLE ORIENTIERUNG
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Wo stehen Sie gerade?
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8">
              <div className="text-xs font-bold text-[#17666a]">01</div>
              <h3 className="mt-5 text-2xl font-semibold">
                Sprache noch unsicher
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Medizinische Sprachkompetenz zuerst gezielt stärken.
              </p>
              <Link
                href="/en/pakete/medizinischer-sprachweg"
                className="mt-7 inline-block text-sm font-semibold text-[#31175B]"
              >
                Explore learning path →
              </Link>
            </div>

            <div className="rounded-[2rem] bg-white p-8">
              <div className="text-xs font-bold text-[#17666a]">02</div>
              <h3 className="mt-5 text-2xl font-semibold">
                Prüfung gezielt vorbereiten
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Direkt mit FSP, FaMed oder Dentistry beginnen.
              </p>
              <a
                href="#wege"
                className="mt-7 inline-block text-sm font-semibold text-[#31175B]"
              >
                Kurse vergleichen →
              </a>
            </div>

            <div className="rounded-[2rem] bg-white p-8">
              <div className="text-xs font-bold text-[#17666a]">03</div>
              <h3 className="mt-5 text-2xl font-semibold">
                Fast prüfungsbereit
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Realistisch simulieren, Feedback erhalten und letzte
                Unsicherheiten erkennen.
              </p>
              <Link
                href="/en/simulationen"
                className="mt-7 inline-block text-sm font-semibold text-[#31175B]"
              >
                Simulations ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              STILL NOT SURE?
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Sagen Sie uns Prüfung, Niveau und Zeitplan.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Wir helfen Ihnen, daraus einen sinnvollen nächsten Schritt
              zusammenzustellen.
            </p>
          </div>

          <a
            href={whatsappLink(consultationMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            Über WhatsApp beraten lassen
          </a>
        </div>
      </section>
    </main>
  );
}
