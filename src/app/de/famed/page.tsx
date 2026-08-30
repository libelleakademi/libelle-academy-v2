import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import FamedConversion from "@/components/FamedConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FaMed Intensivkurs | Libelle Academy",
  description:
    "6 Wochen FaMed-Vorbereitung mit 54 Unterrichtsstunden, Blended Learning über Pelexa, kleinen Gruppen und 6 Prüfungssimulationen.",
};

const mainMessage =
  "Hallo, ich interessiere mich für den FaMed Intensivkurs für 600 €. Bitte senden Sie mir Informationen zur nächsten Gruppe und zu freien Plätzen. Quelle: FAMED-LANDING";

const consultationMessage =
  "Hallo, ich bereite mich auf die FaMed-Prüfung vor und möchte wissen, ob der Intensivkurs zu meinem aktuellen Stand passt. Quelle: FAMED-BERATUNG";

const outcomes = [
  {
    number: "01",
    title: "Anamnese strukturiert führen",
    text: "Medizinische Informationen systematisch erfragen und das Patientengespräch sprachlich sicherer gestalten.",
  },
  {
    number: "02",
    title: "Patienten verständlich aufklären",
    text: "Medizinische Sachverhalte klar, strukturiert und adressatengerecht erklären.",
  },
  {
    number: "03",
    title: "Dokumentation gezielt trainieren",
    text: "Relevante Informationen aus dem Gespräch geordnet erfassen und schriftlich aufbereiten.",
  },
  {
    number: "04",
    title: "Patientenfälle sicher vorstellen",
    text: "Fälle strukturiert präsentieren und medizinische Zusammenhänge nachvollziehbar vermitteln.",
  },
];

const program = [
  "FaMed-Prüfungsformat",
  "Anamnese",
  "Patientenaufklärung",
  "Patientenvorstellung",
  "Dokumentation",
  "Prüfungssimulationen",
];

const phases = [
  {
    number: "01",
    eyebrow: "WOCHEN 1–4",
    title: "Sprache und Prüfungsstruktur aufbauen",
    text: "Zwei Online-Live-Kurstage pro Woche werden durch einen Blended-Learning- und Self-Simulation-Tag über Pelexa ergänzt.",
  },
  {
    number: "02",
    eyebrow: "WOCHEN 5–6",
    title: "Unter Prüfungsbedingungen simulieren",
    text: "In der Schlussphase liegt der Schwerpunkt auf intensiven FaMed-Prüfungssimulationen.",
  },
  {
    number: "03",
    eyebrow: "NACH DEM KURS",
    title: "Weiter auf Materialien zugreifen",
    text: "Die Kursaufzeichnungen stehen während des Kurses und noch einen Monat nach Kursende über Pelexa zur Verfügung.",
  },
];

const faqs = [
  ["Wie lange dauert der FaMed Intensivkurs?", "Der Kurs dauert 6 Wochen."],
  [
    "Wie umfangreich ist der Unterricht?",
    "Der Kurs umfasst 54 Unterrichtsstunden. Eine Unterrichtsstunde entspricht 40 Minuten.",
  ],
  [
    "Wie groß sind die Gruppen?",
    "Der Kurs wird in kleinen Gruppen mit 6–8 Teilnehmenden durchgeführt.",
  ],
  [
    "Sind Prüfungssimulationen enthalten?",
    "Ja. Insgesamt sind 6 FaMed-Prüfungssimulationen vorgesehen.",
  ],
  [
    "Welche Sprachkenntnisse brauche ich?",
    "Der Kurs richtet sich an Ärztinnen und Ärzte in der FaMed-Vorbereitung. Voraussetzung ist mindestens ein B2-Sprachzertifikat.",
  ],
  [
    "Kann ich die Aufzeichnungen später ansehen?",
    "Ja. Die Aufzeichnungen stehen während des Kurses und noch einen Monat nach Kursende über Pelexa zur Verfügung.",
  ],
];

export default function FamedPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[720px] lg:grid-cols-[1.03fr_.97fr] lg:px-8">

          <div>
            <Link
              href="/de/pruefungsvorbereitung"
              className="text-sm font-semibold text-[#17666a]"
            >
              ← Prüfungsvorbereitung
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[.18em] text-[#17666a]">
              FAMED · INTENSIVKURS
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              FaMed nicht nur kennen. Unter Prüfungsbedingungen anwenden.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Strukturierte Vorbereitung auf medizinische Kommunikation,
              Anamnese, Patientenaufklärung, Dokumentation,
              Patientenvorstellung und das FaMed-Prüfungsformat.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "6 Wochen",
                "54 Unterrichtsstunden",
                "6 FaMed-Simulationen",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#58ECF1] bg-white px-5 py-3 text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(mainMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Platz & nächste Gruppe anfragen
              </a>

              <a
                href="#kurs"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Kurs ansehen
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-12 -top-12 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                6 SIMULATIONEN
              </div>
              <div className="mt-1 text-sm font-semibold">
                Vom Lernen ins Prüfungsgespräch
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-48px] left-12 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                LIVE + DIGITAL
              </div>
              <div className="mt-1 text-sm font-semibold">
                Pelexa zwischen den Terminen
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.18)] sm:p-7">
              <div className="rounded-[2.2rem] bg-[#f3eff7] p-6 sm:p-8">

              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                    IHR INTENSIVKURS
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    FaMed
                  </div>
                </div>

                <span className="rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold">
                  6 Wochen
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    PREIS
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    600 €
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    SIMULATIONEN
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    6
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  "54 Unterrichtsstunden",
                  "Kleine Gruppen mit 6–8 Teilnehmenden",
                  "Blended Learning über Pelexa",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-5 py-4 text-sm font-medium"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-[#31175B] p-5 text-white">
                <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                  VORAUSSETZUNG
                </div>

                <p className="mt-2 leading-7 text-white/75">
                  Für Ärztinnen und Ärzte in der FaMed-Vorbereitung mit
                  mindestens B2-Sprachzertifikat.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                6 SIMULATIONEN
              </div>
              <div className="mt-1 text-xs font-semibold">
                Vom Lernen ins Prüfungsgespräch
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                LIVE + DIGITAL
              </div>
              <div className="mt-1 text-xs font-semibold">
                Pelexa zwischen den Terminen
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-FAMED */}
      <EditorialStorySection
        eyebrow="FAMED IN DER ANWENDUNG"
        title="Wenn medizinisches Wissen auch sprachlich funktionieren muss."
        text="FaMed verlangt nicht nur medizinisches Verständnis. Entscheidend ist, wie sicher Informationen erklärt, strukturiert und in professioneller Kommunikation angewendet werden."
        image="/images/famed-medical-communication.jpg"
        alt="Medizinisches Gespräch zwischen Fachkraft und Patient"
        chip="FAMED · KOMMUNIKATION · ANWENDUNG"
        reverse
      />

      <section id="kurs" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            WAS SIE TRAINIEREN
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Nicht einzelne Aufgaben auswendig lernen. Medizinisch reagieren.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Die Vorbereitung verbindet die zentralen Kommunikationsaufgaben
            der FaMed-Prüfung zu einem zusammenhängenden Trainingsweg.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {outcomes.map((item) => (
            <article
              key={item.number}
              className="rounded-[2rem] border border-black/5 bg-[#f7f9fb] p-7 sm:p-8"
            >
              <div className="text-xs font-bold text-[#17666a]">
                {item.number}
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.78fr_1.22fr] lg:px-8">

          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              KURSINHALTE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Die zentralen Bereiche Ihrer FaMed-Vorbereitung.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Vom Prüfungsformat bis zur Simulation: Die einzelnen Bereiche
              werden gezielt miteinander verbunden.
            </p>
          </div>

          <div className="space-y-3">
            {program.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 rounded-[1.7rem] bg-white p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#31175B] text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-lg font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            6 WOCHEN · KLARER AUFBAU
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Erst vorbereiten. Dann unter Prüfungsbedingungen anwenden.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="rounded-[2.2rem] border border-black/5 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,.04)]"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-sm font-bold text-[#31175B]">
                  {phase.number}
                </span>

                <span className="text-xs font-bold tracking-[.15em] text-[#17666a]">
                  {phase.eyebrow}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold leading-8">
                {phase.title}
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                {phase.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#31175B] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8">

          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              MEHR ALS LIVE-UNTERRICHT
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Der Kurs endet nicht, wenn der Live-Unterricht vorbei ist.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Live-Unterricht, Pelexa-Lernphasen, Self-Simulation und
              Prüfungssimulationen greifen ineinander.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "54 Unterrichtsstunden",
                "Strukturierter Aufbau der prüfungsrelevanten Kommunikationsbereiche.",
              ],
              [
                "Pelexa",
                "Digitale Lernphasen und Self-Simulation ergänzen den Live-Unterricht.",
              ],
              [
                "6–8 Personen",
                "Kleine Gruppen schaffen mehr Raum für aktives sprachliches Training.",
              ],
              [
                "6 Simulationen",
                "Die Schlussphase richtet den Fokus auf die praktische Prüfungssituation.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.8rem] bg-white/10 p-6"
              >
                <h3 className="text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-24 md:grid-cols-2 lg:px-8">

          <div className="rounded-[2.3rem] bg-white p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              FÜR WEN?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Für Ärztinnen und Ärzte auf dem Weg zur FaMed-Prüfung.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Der Kurs ist für medizinische Fachkräfte konzipiert, die ihre
              FaMed-Vorbereitung strukturiert aufbauen und in Deutschland als
              Ärztin oder Arzt arbeiten möchten.
            </p>
          </div>

          <div className="rounded-[2.3rem] bg-[#D2ECFF]/55 p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              VORAUSSETZUNG
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Mindestens B2 – und ein Kurs, der zu Ihrem Stand passen soll.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Voraussetzung ist mindestens ein B2-Sprachzertifikat. Wenn Sie
              unsicher sind, ob der Intensivkurs der richtige nächste Schritt
              ist, klären wir das vor der Anmeldung mit Ihnen.
            </p>

            <a
              href={whatsappLink(consultationMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Persönlich beraten lassen
            </a>
          </div>

        </div>
      </section>

      <section className="bg-[#31175B] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
            EMPFOHLENER LERNWEG
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Exzellenz / Feinschliff",
              "FaMed Intensivkurs",
              "Simulationen",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-[1.6rem] bg-white/10 p-6"
              >
                <div className="text-xs text-white/35">
                  SCHRITT {index + 1}
                </div>

                <div className="mt-3 text-xl font-semibold">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8">

          <div className="text-center">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              HÄUFIGE FRAGEN
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Vor der Anmeldung wissen, was Sie erwartet.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map(([question, answer]) => (
              <div
                key={question}
                className="rounded-[1.8rem] bg-white p-7"
              >
                <h3 className="text-xl font-semibold">
                  {question}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-8 text-white md:grid-cols-[1fr_auto] md:items-center sm:p-12">

          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              IHR NÄCHSTER SCHRITT
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Bereiten Sie sich strukturiert auf Ihre FaMed-Prüfung vor.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Fragen Sie über WhatsApp nach der nächsten Gruppe, freien
              Plätzen und den aktuellen Kursinformationen.
            </p>
          </div>

          <a
            href={whatsappLink(mainMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            FaMed Intensivkurs anfragen
          </a>

        </div>
      </section>

    </main>
  );
}
