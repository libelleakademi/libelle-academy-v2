import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Medizinischer Sprachweg | Libelle Academy",
  description:
    "Ein kombinierbarer Lernweg von der medizinischen Sprachentwicklung über FSP oder FaMed bis zur realistischen Prüfungssimulation.",
};

const mainMessage =
  "Hallo, ich interessiere mich für den Medizinischen Sprachweg. Ich möchte wissen, welcher Einstieg und welche Kombination zu meinem aktuellen Stand passt. Quelle: BUNDLE-MEDICAL-PATH";

const path = [
  {
    number: "01",
    eyebrow: "DİLİ GÜÇLENDİR",
    title: "Exzellenz / Feinschliff",
    text: "Stärken Sie zunächst Ihre medizinische Sprachkompetenz, wenn Sie vor der eigentlichen Prüfungsvorbereitung noch mehr sprachliche Sicherheit aufbauen möchten.",
  },
  {
    number: "02",
    eyebrow: "SINAVA HAZIRLAN",
    title: "FSP oder FaMed",
    text: "Trainieren Sie anschließend gezielt die medizinische Kommunikation und die Anforderungen Ihrer jeweiligen Prüfung.",
  },
  {
    number: "03",
    eyebrow: "GERÇEKÇİ TEST ET",
    title: "Simülasyonlar",
    text: "Wenden Sie das Gelernte anschließend unter realistischen Prüfungsbedingungen an und erhalten Sie Feedback zu Ihrer Leistung.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Rastgele bir kurs seçmeyin",
    text: "Der Einstieg orientiert sich daran, wo Sie sprachlich und in Ihrer Prüfungsvorbereitung aktuell stehen.",
  },
  {
    number: "02",
    title: "Net bir sonraki adım",
    text: "Sie sehen, wie Sprachentwicklung, Prüfungsvorbereitung und Simulation sinnvoll aufeinander aufbauen können.",
  },
  {
    number: "03",
    title: "Doğru sınav yolunu seçin",
    text: "Der Prüfungsweg wird nicht pauschal festgelegt. Entscheidend ist, auf welches Format Sie sich tatsächlich vorbereiten.",
  },
  {
    number: "04",
    title: "Yalnızca ihtiyacınız olanı alın",
    text: "Der Lernweg ist kombinierbar. Mit passenden Vorkenntnissen können Sie direkt in einen späteren Schritt einsteigen.",
  },
];

const faqs = [
  [
    "Muss ich mit Exzellenz / Feinschliff beginnen?",
    "Nein. Der Medizinische Sprachweg ist kombinierbar. Wenn Ihre sprachliche Grundlage bereits passend ist, können Sie direkt mit der geeigneten Prüfungsvorbereitung starten.",
  ],
  [
    "Woher weiß ich, ob FSP oder FaMed zu mir gehört?",
    "Das richtet sich nach Ihrer vorgesehenen Prüfung. Schreiben Sie uns kurz, auf welche Prüfung Sie sich vorbereiten, und wir zeigen Ihnen den passenden Weg.",
  ],
  [
    "Kann ich auch direkt Simülasyonlar buchen?",
    "Ja. Prüfungssimulationen sind auch als eigener Vorbereitungsschritt verfügbar, wenn Sie bereits ausreichend vorbereitet sind und gezielt Prüfungssituationen trainieren möchten.",
  ],
  [
    "Gibt es einen festen Gesamtpreis für den Lernweg?",
    "Die benötigte Kombination hängt von Ihrem aktuellen Stand und Ihrem Ziel ab. Die aktuell verfügbaren Paketkonditionen erhalten Sie persönlich über WhatsApp.",
  ],
  [
    "Welcher Einstieg ist für mich sinnvoll?",
    "Senden Sie uns Ihr aktuelles Sprachniveau, Ihre geplante Prüfung und – wenn bekannt – Ihren Prüfungstermin. Wir helfen Ihnen, den sinnvollsten Einstieg auszuwählen.",
  ],
];

export default function MedizinischerSprachwegPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[720px] lg:grid-cols-[1.03fr_.97fr] lg:px-8">
          <div>
            <Link
              href="/tr/pruefungsvorbereitung"
              className="text-sm font-semibold text-[#17666a]"
            >
              ← Prüfungsvorbereitung
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[.18em] text-[#17666a]">
              MEDİKAL DİL YOLU
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Sadece kursları tamamlamayın. Sınava kadar uzanan bir yol oluşturun.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Ein kombinierbarer Lernweg für medizinische Fachkräfte: erst die
              sprachliche Grundlage stärken, anschließend gezielt FSP oder
              FaMed vorbereiten und das Gelernte schließlich in realistischen
              Prüfungssituationen anwenden.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Exzellenz / Feinschliff",
                "FSP oder FaMed",
                "Simülasyonlar",
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
                Kişisel öğrenme yolumu belirle
              </a>

              <a
                href="#lernweg"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Öğrenme yolunu incele
              </a>
            </div>
          </div>

          <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.18)] sm:p-7">
            <div className="rounded-[2.2rem] bg-[#f3eff7] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                    LIBELLE ÖĞRENME YOLU
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    Medizinischer Sprachweg
                  </div>
                </div>

                <span className="rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold">
                  FLEXIBEL
                </span>
              </div>

              <div className="mt-8 space-y-3">
                {path.map((item) => (
                  <div
                    key={item.number}
                    className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4"
                  >
                    <span className="text-xs font-bold text-[#31175B]">
                      {item.number}
                    </span>
                    <span className="text-sm font-semibold">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-[#31175B] p-5 text-white">
                <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                  BAŞLANGIÇ NOKTANIZ
                </div>
                <p className="mt-2 leading-7 text-white/75">
                  Sie müssen nicht automatisch bei Schritt 1 beginnen. Der
                  passende Einstieg richtet sich nach Ihrem aktuellen Stand
                  und Ihrer Prüfung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO-STORY-MEDPATH */}
      <EditorialStorySection
        eyebrow="MESLEKİ BİLGİDEN İLETİŞİME"
        title="Medikal Almanca, mesleki bilginizi anlaşılır iletişimle birleştirir."
        text="Je nach aktuellem Stand kann zuerst die medizinische Sprachkompetenz gestärkt, anschließend gezielt auf FSP oder FaMed vorbereitet und schließlich unter realistischen Bedingungen simuliert werden."
        image="/images/medical-path-doctor-explanation.jpg"
        alt="Ärztliche Erklärung im medizinischen Gespräch"
        chip="SPRACHE → PRÜFUNG → SIMULATION"
        reverse
      />

      {/* PATH */}
      <section id="lernweg" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            SINAVA GİDEN YOLUNUZ
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Erst Sicherheit aufbauen. Dann gezielt vorbereiten. Schließlich
            simulieren.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Der Lernweg verbindet mehrere Vorbereitungsschritte zu einer
            nachvollziehbaren Entwicklung – ohne dass jede Person denselben
            Ausgangspunkt haben muss.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {path.map((item) => (
            <article
              key={item.number}
              className="rounded-[2.2rem] border border-black/5 bg-[#f7f9fb] p-7 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-[#31175B]">
                  {item.number}
                </span>

                <span className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                  {item.eyebrow}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-7 text-black/55">{item.text}</p>

              {item.number === "02" && (
                <div className="mt-7 flex flex-wrap gap-2">
                  <Link
                    href="/tr/fsp-medizin"
                    className="rounded-full bg-[#31175B] px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    FSP Medizin
                  </Link>
                  <Link
                    href="/tr/famed"
                    className="rounded-full border border-[#31175B]/15 px-5 py-2.5 text-sm font-semibold text-[#31175B]"
                  >
                    FaMed
                  </Link>
                </div>
              )}

              {item.number === "03" && (
                <Link
                  href="/tr/simulationen"
                  className="mt-7 inline-block text-sm font-semibold text-[#31175B]"
                >
                  Simülasyonlar ansehen →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              NEDEN BİR ÖĞRENME YOLU?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Hazırlığınız bugün bulunduğunuz noktadan başlamalıdır.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Nicht jede Person braucht denselben Kurs in derselben Reihenfolge.
              Deshalb betrachten wir Sprachniveau, Prüfung und aktuellen
              Vorbereitungsstand gemeinsam.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] bg-white/10 p-7 sm:p-8"
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

      {/* DECISION */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2.5rem] bg-[#D2ECFF]/60 p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              NOCH SPRACHLICH UNSICHER?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Dann muss Ihre Vorbereitung nicht direkt mit einer
              Prüfungssimulation beginnen.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Zuerst kann die medizinische Sprachkompetenz gezielt gestärkt
              werden. Danach lässt sich die eigentliche Prüfungsvorbereitung
              sinnvoll anschließen.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-[#f7f5f9] p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              SCHON WEITER?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Dann steigen Sie dort ein, wo Sie tatsächlich Unterstützung
              brauchen.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Wenn Ihre sprachliche Grundlage bereits passt, kann der nächste
              Schritt direkt FSP, FaMed oder gezieltes Simulationstraining sein.
            </p>

            <a
              href={whatsappLink(mainMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Einstieg besprechen
            </a>
          </div>
        </div>
      </section>

      {/* COURSE OPTIONS */}
      <section className="bg-[#f7f5f9]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              SINAV HAZIRLIĞI
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Welcher Prüfungsschritt kommt für Sie als Nächstes?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <Link
              href="/tr/fsp-medizin"
              className="rounded-[2rem] bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                FSP MEDIZIN
              </div>
              <h3 className="mt-5 text-2xl font-semibold">
                FSP gezielt vorbereiten
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Fachsprache, Anamnese, Dokumentation, Patientenvorstellung und
                realistische Prüfungssituationen.
              </p>
              <div className="mt-7 text-sm font-semibold text-[#31175B]">
                FSP Medizin ansehen →
              </div>
            </Link>

            <Link
              href="/tr/famed"
              className="rounded-[2rem] bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                FAMED
              </div>
              <h3 className="mt-5 text-2xl font-semibold">
                FaMed gezielt vorbereiten
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Medizinische Kommunikation, Anamnese, Patientenaufklärung,
                Dokumentation und Patientenvorstellung.
              </p>
              <div className="mt-7 text-sm font-semibold text-[#31175B]">
                FaMed ansehen →
              </div>
            </Link>

            <Link
              href="/tr/simulationen"
              className="rounded-[2rem] bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                SIMULATIONEN
              </div>
              <h3 className="mt-5 text-2xl font-semibold">
                Prüfungssituationen trainieren
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Das Gelernte unter realistischen Bedingungen anwenden und
                gezieltes Feedback erhalten.
              </p>
              <div className="mt-7 text-sm font-semibold text-[#31175B]">
                Simülasyonlar ansehen →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            HÄUFIGE FRAGEN
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Vor der Entscheidung wissen, welcher Weg sinnvoll ist.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map(([question, answer]) => (
            <div
              key={question}
              className="rounded-[2rem] bg-[#f7f9fb] p-7 sm:p-8"
            >
              <h3 className="text-xl font-semibold">{question}</h3>
              <p className="mt-4 leading-7 text-black/55">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                IHR NÄCHSTER SCHRITT
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
                Sagen Sie uns, wo Sie stehen. Wir helfen Ihnen beim nächsten
                sinnvollen Schritt.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/55">
                Senden Sie uns Ihr aktuelles Sprachniveau, Ihre geplante
                Prüfung und – wenn bekannt – Ihren Prüfungstermin.
              </p>
            </div>

            <a
              href={whatsappLink(mainMessage)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
            >
              Lernweg über WhatsApp besprechen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
