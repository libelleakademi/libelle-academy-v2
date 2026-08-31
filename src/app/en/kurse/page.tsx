import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Deutschkurse & Medizinische Deutschkurse | Libelle Academy",
  description:
    "Deutsch A1 bis B2 sowie medizinische Deutsch- und Prüfungsvorbereitungskurse bei Libelle Academy.",
};

const consultationMessage =
  "Hallo, ich interessiere mich für einen Kurs bei Libelle Academy und möchte wissen, welcher Kurs zu meinem aktuellen Niveau und Ziel passt. Quelle: COURSES-HUB";

const germanCourses = [
  {
    level: "A1",
    title: "Deutsch A1",
    text: "Der Einstieg in die deutsche Sprache: Grundlagen für erste Alltagssituationen und einfache Kommunikation.",
    meta: "8 weeks · 165 €",
    href: "/en/deutsch/a1",
  },
  {
    level: "A2",
    title: "Deutsch A2",
    text: "Grundkenntnisse erweitern und mehr Sicherheit in typischen Alltagssituationen entwickeln.",
    meta: "8 weeks · 165 €",
    href: "/en/deutsch/a2",
  },
  {
    level: "B1",
    title: "Deutsch B1",
    text: "Selbstständiger kommunizieren, komplexere Alltagssituationen bewältigen und den sprachlichen Ausdruck erweitern.",
    meta: "12 weeks · 250 €",
    href: "/en/deutsch/b1",
  },
  {
    level: "B2",
    title: "Deutsch B2",
    text: "Kommunikation auf fortgeschrittenem Niveau mit mehr sprachlicher Sicherheit für Alltag und Beruf.",
    meta: "12 weeks · 399 €",
    href: "/en/deutsch/b2",
  },
];

const medicalCourses = [
  {
    label: "FSP MEDIZIN",
    title: "FSP Medizin Intensivkurs",
    text: "Medizinische Fachsprache, Anamnese, Dokumentation, Patientenvorstellung und realistische Prüfungssimulationen.",
    meta: "8 weeks · 950 €",
    href: "/en/fsp-medizin",
  },
  {
    label: "FAMED",
    title: "FaMed Intensivkurs",
    text: "Strukturierte Vorbereitung auf medizinische Kommunikation und das FaMed-Prüfungsformat.",
    meta: "6 weeks · 600 €",
    href: "/en/famed",
  },
  {
    label: "ZAHNMEDIZIN",
    title: "FSP & FaMed Dentistry",
    text: "Prüfungsorientierte Vorbereitung speziell für Zahnärztinnen und Zahnärzte.",
    meta: "8 weeks · 950 €",
    href: "/en/fsp-zahnmedizin",
  },
  {
    label: "FLEXIBEL",
    title: "FaMed Offline",
    text: "Neun Module, Dokumentationen und Übungen für eine flexible FaMed-Vorbereitung im eigenen Tempo.",
    meta: "from €200",
    href: "/en/famed-offline",
  },
  {
    label: "SIMULATION",
    title: "Prüfungssimulationen",
    text: "Realistische Prüfungssituationen mit individuellem Feedback und gezielter Fehleranalyse.",
    meta: "from €75",
    href: "/en/simulationen",
  },
];

export default function KursePage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[650px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              COURSES
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              From your first German sentence to your medical exam.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Allgemeines Deutsch von A1 bis B2 und spezialisierte
              medizinische Prüfungsvorbereitung – mit klaren Lernwegen für
              unterschiedliche Ausgangspunkte und Ziele.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#deutsch"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Explore all courses
              </a>

              <a
                href={whatsappLink(consultationMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Course guidance
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                A1 → B2
              </div>
              <div className="mt-1 text-sm font-semibold">
                Build your German systematically
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                MEDICAL
              </div>
              <div className="mt-1 text-sm font-semibold">
                FSP · FaMed · Simulations
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-6 shadow-[0_30px_90px_rgba(49,23,91,.16)]">
              <div className="rounded-[2.1rem] bg-[#f3eff7] p-7 sm:p-9">
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                TWO LEARNING WORLDS
              </div>

              <div className="mt-7 space-y-4">
                <a
                  href="#deutsch"
                  className="block rounded-[1.6rem] bg-white p-6"
                >
                  <div className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                    GENERAL GERMAN
                  </div>
                  <div className="mt-3 text-2xl font-semibold">A1 → B2</div>
                  <p className="mt-3 text-sm leading-6 text-black/50">
                    Ein strukturierter Sprachweg vom Einstieg bis zum
                    fortgeschrittenen Niveau.
                  </p>
                </a>

                <a
                  href="#medizin"
                  className="block rounded-[1.6rem] bg-[#31175B] p-6 text-white"
                >
                  <div className="text-xs font-bold tracking-[.14em] text-[#58ECF1]">
                    MEDICAL GERMAN
                  </div>
                  <div className="mt-3 text-2xl font-semibold">
                    FSP · FaMed · Dentistry
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Fachsprache, Prüfungsvorbereitung und realistische
                    Simulations.
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                A1 → B2
              </div>
              <div className="mt-1 text-xs font-semibold">
                Build your German systematically
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                MEDICAL
              </div>
              <div className="mt-1 text-xs font-semibold">
                FSP · FaMed · Simulations
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-COURSES */}
      <EditorialStorySection
        eyebrow="TWO LEARNING WORLDS"
        title="Learn German — and use it where it matters to you."
        text="Für manche beginnt der Weg mit A1. Für andere mit medizinischer Fachsprache oder einer konkreten Prüfung. Entscheidend ist nicht, wo andere starten, sondern welcher nächste Schritt zu Ihrem Ziel passt."
        image="/images/home-general-german-learning.jpg"
        alt="Erwachsene Person beim Deutschlernen"
        secondaryImage="/images/home-medical-german-learning.jpg"
        secondaryAlt="Medizinisches Deutsch digital lernen"
        chip="GENERAL GERMAN + MEDICAL GERMAN"
      />

      {/* GERMAN */}
      <section
        id="deutsch"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              GENERAL GERMAN
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              A clear path from A1 to B2.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Starten Sie auf dem Niveau, das zu Ihren aktuellen Kenntnissen
              passt, und entwickeln Sie Ihre Deutschkenntnisse Schritt für
              Schritt weiter.
            </p>

            <Link
              href="/en/pakete/deutsch-a1-b2"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3 text-sm font-semibold text-white"
            >
              Kompletten A1–B2 Explore learning path
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {germanCourses.map((course) => (
              <Link
                key={course.level}
                href={course.href}
                className="rounded-[2rem] border border-black/5 bg-[#f7f9fb] p-7 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#31175B] text-sm font-bold text-white">
                    {course.level}
                  </span>

                  <span className="text-xs font-semibold text-black/45">
                    {course.meta}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {course.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {course.text}
                </p>

                <div className="mt-7 text-sm font-semibold text-[#31175B]">
                  Explore course →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* A1-B2 VALUE */}
      <section className="bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              DEUTSCH A1–B2
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Four levels. One continuous learning path.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Wenn Ihr Ziel bereits B2 ist, können Sie den gesamten Weg von
              Anfang an als zusammenhängende Entwicklung betrachten.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {[
              ["A1", "8 weeks"],
              ["A2", "8 weeks"],
              ["B1", "12 weeks"],
              ["B2", "12 weeks"],
            ].map(([level, duration]) => (
              <div
                key={level}
                className="rounded-[1.7rem] bg-white p-6 text-center"
              >
                <div className="text-3xl font-semibold text-[#31175B]">
                  {level}
                </div>
                <div className="mt-3 text-sm text-black/45">{duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL */}
      <section
        id="medizin"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            MEDICAL GERMAN
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Train medical German specifically for work and exams.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Von medizinischer Fachsprache bis zur konkreten
            Prüfungssituation: Wählen Sie den Kurs, der zu Ihrem Prüfungsweg
            und aktuellen Stand passt.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {medicalCourses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="flex min-h-[330px] flex-col justify-between rounded-[2.2rem] bg-[#f7f9fb] p-8 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(49,23,91,.07)]"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs font-bold tracking-[.15em] text-[#17666a]">
                    {course.label}
                  </div>

                  <div className="rounded-full bg-white px-3 py-2 text-xs font-semibold">
                    {course.meta}
                  </div>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {course.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {course.text}
                </p>
              </div>

              <div className="mt-8 text-sm font-semibold text-[#31175B]">
                Mehr erfahren →
              </div>
            </Link>
          ))}

          <Link
            href="/en/pakete/medizinischer-sprachweg"
            className="flex min-h-[330px] flex-col justify-between rounded-[2.2rem] bg-[#31175B] p-8 text-white transition hover:-translate-y-1"
          >
            <div>
              <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                LERNWEG
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Medizinischer Sprachweg
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Wenn Sie mehrere Vorbereitungsschritte sinnvoll miteinander
                verbinden möchten.
              </p>
            </div>

            <div className="mt-8 text-sm font-semibold text-[#58ECF1]">
              Explore learning path →
            </div>
          </Link>
        </div>
      </section>

      {/* DECISION */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              WELCHER KURS PASST?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Das Ziel bestimmt den Kurs – nicht umgekehrt.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Deutsch von Grund auf",
                "Starten Sie mit A1 oder dem passenden Niveau nach Ihren Vorkenntnissen.",
              ],
              [
                "02",
                "B2 als Sprachziel",
                "Nutzen Sie den strukturierten allgemeinen Deutschweg bis B2.",
              ],
              [
                "03",
                "Medizinische Prüfung",
                "Wählen Sie FSP, FaMed oder Dentistry entsprechend Ihrem Prüfungsformat.",
              ],
              [
                "04",
                "Fast prüfungsbereit",
                "Testen Sie Ihre Leistung mit realistischen Prüfungssimulationen.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-[2rem] bg-white/10 p-7"
              >
                <div className="text-xs font-bold text-[#58ECF1]">
                  {number}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CROSSROADS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Link
            href="/en/pakete/deutsch-a1-b2"
            className="rounded-[2.5rem] bg-[#D2ECFF]/60 p-9 sm:p-11"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#17666a]">
              SPRACHWEG
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Sie möchten bis B2 lernen?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Sehen Sie den vollständigen Lernweg von A1 bis B2 mit allen
              Stufen auf einer Seite.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Deutsch A1–B2 ansehen →
            </div>
          </Link>

          <Link
            href="/en/pruefungsvorbereitung"
            className="rounded-[2.5rem] bg-[#f7f5f9] p-9 sm:p-11"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
              MEDICALE PRÜFUNG
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Sie bereiten sich auf FSP oder FaMed vor?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Vergleichen Sie die unterschiedlichen Prüfungswege und finden
              Sie die passende Vorbereitung.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Prüfungsvorbereitung ansehen →
            </div>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              STILL NOT SURE?
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Sagen Sie uns Ihr Niveau und Ihr Ziel.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Wir helfen Ihnen herauszufinden, welcher Kurs oder Lernweg für
              Ihren nächsten Schritt sinnvoll ist.
            </p>
          </div>

          <a
            href={whatsappLink(consultationMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            Course guidance über WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
