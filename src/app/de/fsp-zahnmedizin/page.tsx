import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FSP & FaMed Zahnmedizin Intensivkurs | Libelle Academy",
  description:
    "8 Wochen intensive Vorbereitung auf zahnmedizinische Fachsprache, Patientengespräch, Dokumentation, Patientenvorstellung und prüfungsorientiertes Training.",
};

const mainMessage =
  "Hallo, ich interessiere mich für den FSP & FaMed Zahnmedizin Intensivkurs für 950 €. Bitte senden Sie mir Informationen zur nächsten Gruppe und zu freien Plätzen. Quelle: FSP-FAMED-ZAHNMEDIZIN-LANDING";

const consultationMessage =
  "Hallo, ich interessiere mich für die Zahnmedizin-Vorbereitung und möchte wissen, ob der Intensivkurs zu meinem aktuellen Stand passt. Quelle: ZAHNMEDIZIN-BERATUNG";

const outcomes = [
  {
    number: "01",
    title: "Zahnmedizinische Fachsprache sicherer einsetzen",
    text: "Prüfungsrelevante zahnmedizinische Begriffe und Formulierungen aktiv in Gesprächen anwenden.",
  },
  {
    number: "02",
    title: "Patientengespräche strukturiert führen",
    text: "Anamnese und Patientengespräch sprachlich klar, nachvollziehbar und prüfungsorientiert trainieren.",
  },
  {
    number: "03",
    title: "Dokumentation gezielt üben",
    text: "Informationen aus dem Gespräch geordnet erfassen und für die schriftliche Dokumentation aufbereiten.",
  },
  {
    number: "04",
    title: "Patientenvorstellung überzeugend aufbauen",
    text: "Fälle strukturiert präsentieren und medizinische Zusammenhänge sprachlich sicherer vermitteln.",
  },
];

const program = [
  "Zahnmedizinische Fachsprache",
  "Patientengespräch",
  "Anamnese",
  "Dokumentation",
  "Patientenvorstellung",
  "Prüfungstraining",
];

const steps = [
  {
    number: "01",
    eyebrow: "AUFBAUEN",
    title: "Sprache und Struktur festigen",
    text: "Zahnmedizinische Fachsprache und typische Prüfungssituationen werden systematisch aufgebaut.",
  },
  {
    number: "02",
    eyebrow: "ANWENDEN",
    title: "Kommunikation praktisch trainieren",
    text: "Patientengespräch, Anamnese, Dokumentation und Vorstellung werden miteinander verbunden.",
  },
  {
    number: "03",
    eyebrow: "SIMULIEREN",
    title: "Unter Prüfungsbedingungen testen",
    text: "Simulationen und Feedback helfen Ihnen, Sprache, Struktur und Sicherheit gezielt weiterzuentwickeln.",
  },
];

const faqs = [
  {
    q: "Wie lange dauert der Zahnmedizin Intensivkurs?",
    a: "Der aktuell hinterlegte Kursumfang beträgt 8 Wochen.",
  },
  {
    q: "Was kostet der Kurs?",
    a: "Der aktuell hinterlegte Preis beträgt 950 €.",
  },
  {
    q: "Für welche Prüfungen ist der Kurs gedacht?",
    a: "Der Kurs ist auf die sprachliche und prüfungsorientierte Vorbereitung für Zahnärztinnen und Zahnärzte ausgerichtet und verbindet FSP- und FaMed-relevante Kommunikationsbereiche.",
  },
  {
    q: "Sind Simulationen enthalten?",
    a: "Ja. Simulationen und individuelles Feedback sind Bestandteil der Vorbereitung.",
  },
  {
    q: "Wie erfahre ich die nächste Gruppe und freie Plätze?",
    a: "Schreiben Sie uns über WhatsApp. Wir senden Ihnen die aktuellen Informationen zur nächsten verfügbaren Gruppe.",
  },
];

export default function FspZahnmedizinPage() {
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
              FSP & FAMED ZAHNMEDIZIN · INTENSIVKURS
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Zahnmedizinisch kommunizieren. Prüfungsorientiert trainieren.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Intensive Vorbereitung auf zahnmedizinische Fachsprache,
              Patientengespräch, Anamnese, Dokumentation, Patientenvorstellung
              und realistische Prüfungssituationen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "8 Wochen",
                "950 €",
                "Simulationen + Feedback",
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
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#4B238B]"
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

          <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.18)] sm:p-7">
            <div className="rounded-[2.2rem] bg-[#f3eff7] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                    IHR INTENSIVKURS
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    Zahnmedizin
                  </div>
                </div>

                <span className="rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold">
                  8 Wochen
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    PREIS
                  </div>
                  <div className="mt-2 text-3xl font-semibold">950 €</div>
                </div>

                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    FOKUS
                  </div>
                  <div className="mt-2 text-2xl font-semibold">FSP + FaMed</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  "Zahnmedizinische Fachsprache",
                  "Prüfungsorientiertes Training",
                  "Simulationen und Feedback",
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
                  ZIEL
                </div>
                <p className="mt-2 leading-7 text-white/75">
                  Zahnmedizinische Kommunikation strukturiert trainieren und
                  das Gelernte anschließend in prüfungsnahen Situationen
                  anwenden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kurs" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            WAS SIE TRAINIEREN
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Nicht nur Fachbegriffe kennen. Zahnmedizinisch kommunizieren.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Die Vorbereitung verbindet Fachsprache mit den kommunikativen
            Aufgaben, die in FSP- und FaMed-relevanten Prüfungssituationen
            zusammenkommen.
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

              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-7 text-black/55">{item.text}</p>
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
              Die zentralen Bereiche Ihrer Zahnmedizin-Vorbereitung.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Vom Patientengespräch bis zur Dokumentation und strukturierten
              Patientenvorstellung greifen die einzelnen Bereiche ineinander.
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

                <span className="text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            VOM LERNEN ZUR PRÜFUNG
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Erst aufbauen. Dann anwenden. Schließlich simulieren.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[2.2rem] border border-black/5 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,.04)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#31175B]">
                  {step.number}
                </span>

                <span className="text-xs font-bold tracking-[.15em] text-[#17666a]">
                  {step.eyebrow}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold leading-8">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-black/55">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                INTENSIVE VORBEREITUNG
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
                Theorie allein reicht für eine Kommunikationsprüfung nicht.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Deshalb verbindet der Intensivkurs Fachsprache,
                kommunikatives Training, Prüfungssituationen und Feedback in
                einem zusammenhängenden Vorbereitungsweg.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "8 Wochen Intensivvorbereitung",
                  "Ein klarer Zeitraum für den strukturierten Aufbau Ihrer Prüfungskommunikation.",
                ],
                [
                  "Zahnmedizinische Fachsprache",
                  "Prüfungsrelevante Sprache wird aktiv in typischen Situationen angewendet.",
                ],
                [
                  "Prüfungsorientiertes Training",
                  "Die Vorbereitung richtet sich gezielt auf typische kommunikative Anforderungen aus.",
                ],
                [
                  "Simulationen und Feedback",
                  "Das Gelernte wird praktisch getestet und gezielt weiterentwickelt.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[2rem] bg-white/10 p-7"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-7 text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2.2rem] bg-white p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              FÜR WEN?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Für Zahnärztinnen und Zahnärzte auf dem Weg zur Prüfung.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Für Teilnehmende, die zahnmedizinische Fachsprache,
              Patientengespräche und prüfungsrelevante Kommunikation
              strukturiert trainieren möchten.
            </p>
          </div>

          <div className="rounded-[2.2rem] bg-[#D2ECFF]/60 p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              UNSICHER?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Prüfen Sie zuerst, ob der Kurs zu Ihrem Stand passt.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Schreiben Sie uns kurz, wo Sie aktuell in Ihrer Vorbereitung
              stehen. Wir helfen Ihnen bei der Auswahl.
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

      <section className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            HÄUFIGE FRAGEN
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Vor der Anmeldung wissen, was Sie erwartet.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-[1.8rem] bg-[#f7f9fb] p-7">
              <h3 className="text-xl font-semibold">{q}</h3>
              <p className="mt-4 leading-7 text-black/50">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.6rem] bg-[#17131c] p-8 text-white md:grid-cols-[1fr_auto] md:items-center sm:p-12">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              IHR NÄCHSTER SCHRITT
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Bereiten Sie sich strukturiert auf Ihre Zahnmedizin-Prüfung vor.
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
            Zahnmedizin anfragen
          </a>
        </div>
      </section>
    </main>
  );
}
