import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import FspConversion from "@/components/tr/FspConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FSP Medizin Intensivkurs | Libelle Academy",
  description:
    "8 hafta intensive FSP-Medizin-Vorbereitung mit 68 ders saati plus Blended Learning, 6 sınav simülasyonları, kleinen Gruppen und digitalen Lernmaterialien.",
};

const mainMessage =
  "Hallo, ich interessiere mich für den FSP Medizin Intensivkurs für 950 €. Bitte senden Sie mir Informationen zur nächsten Gruppe und zu freien Plätzen. Quelle: FSP-MEDIZIN-LANDING";

const consultationMessage =
  "Hallo, ich bereite mich auf die FSP Medizin vor und möchte wissen, ob der Intensivkurs zu meinem aktuellen Stand passt. Quelle: FSP-MEDIZIN-BERATUNG";

const outcomes = [
  {
    number: "01",
    title: "Anamnezi güvenle yürütün",
    text: "Medikal bilgileri yapılandırılmış şekilde alın ve hasta görüşmesini dil açısından daha güvenli yürütün.",
  },
  {
    number: "02",
    title: "Medikal mesleki dili kullanın",
    text: "Sınavla ilgili medikal dili yalnızca anlamakla kalmayın, iletişimde aktif olarak kullanın.",
  },
  {
    number: "03",
    title: "Dokümantasyon çalışın",
    text: "Informationen aus dem Patientengespräch strukturiert erfassen und für die schriftliche Dokumentation aufbereiten.",
  },
  {
    number: "04",
    title: "Hasta sunumu yapın",
    text: "Medizinische Fälle geordnet und sprachlich nachvollziehbar präsentieren.",
  },
];

const program = [
  "Medizinische Fachsprache",
  "Anamnese und Arzt-Patienten-Kommunikation",
  "Dokumentation",
  "Patientenvorstellung",
  "sınav simülasyonları",
];

const steps = [
  {
    number: "01",
    eyebrow: "AUFBAUEN",
    title: "Sprache und Struktur erarbeiten",
    text: "Medizinische Fachsprache, Gesprächsführung und prüfungsrelevante Strukturen werden systematisch aufgebaut.",
  },
  {
    number: "02",
    eyebrow: "ANWENDEN",
    title: "Kommunikation gezielt trainieren",
    text: "Anamnese, Dokumentation und Patientenvorstellung werden nicht isoliert gelernt, sondern praktisch miteinander verbunden.",
  },
  {
    number: "03",
    eyebrow: "SIMULIEREN",
    title: "Unter Prüfungsbedingungen testen",
    text: "In sechs sınav simülasyonları wenden Sie das Gelernte in realistischen Situationen an.",
  },
];

const faqs = [
  {
    q: "Wie lange dauert der FSP Medizin Intensivkurs?",
    a: "Der aktuell hinterlegte Kursumfang beträgt 8 hafta.",
  },
  {
    q: "Wie umfangreich ist der Unterricht?",
    a: "Der Kurs umfasst 68 ders saati plus Blended Learning.",
  },
  {
    q: "Sind sınav simülasyonları enthalten?",
    a: "Ja. Im Kurs sind 6 sınav simülasyonları vorgesehen.",
  },
  {
    q: "Gibt es digitale Lernmaterialien?",
    a: "Ja. Digitale Lernmaterialien werden über den Pelexa-Lernbereich bereitgestellt.",
  },
  {
    q: "Wie erfahre ich die nächste Gruppe und freie Plätze?",
    a: "Schreiben Sie uns über WhatsApp. Wir senden Ihnen die aktuellen Informationen zur nächsten verfügbaren Gruppe.",
  },
];

export default function FspMedizinPage() {
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
              ← Sınav Hazırlığı
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[.18em] text-[#17666a]">
              FSP MEDIZIN · YOĞUN KURS
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Medikal Almancayı kullanın. Sınav koşullarında güvenle uygulayın.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Medikal mesleki dil, doktor-hasta iletişimi, dokümantasyon, hasta sunumu ve gerçekçi sınav durumlarına yoğun hazırlık.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "8 hafta",
                "68 ders saati + Blended Learning",
                "6 sınav simülasyonları",
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
                Kontenjan ve yeni grubu sor
              </a>

              <a
                href="#kurs"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Kursu incele
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="home-orbit absolute right-10 -top-7 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17131c]">
                6 SİMÜLASYONLAR
              </div>
              <div className="mt-1 text-sm font-semibold text-[#17131c]">
                Gerçek sınavdan önce deneyimleyin
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-24px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                LIVE + DIGITAL
              </div>
              <div className="mt-1 text-sm font-semibold">
                Dersler arasında öğrenmeye devam
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.18)] sm:p-7">
              <div className="rounded-[2.2rem] bg-[#f3eff7] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                    IHR YOĞUN KURS
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    FSP Medizin
                  </div>
                </div>

                <span className="rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold">
                  8 hafta
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    FİYAT
                  </div>
                  <div className="mt-2 text-3xl font-semibold">950 €</div>
                </div>

                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    SİMÜLASYONLAR
                  </div>
                  <div className="mt-2 text-3xl font-semibold">6</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  "68 ders saati + Blended Learning",
                  "Küçük gruplar",
                  "Pelexa üzerinden dijital öğrenme materyalleri",
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
                  HEDEF
                </div>
                <p className="mt-2 leading-7 text-white/75">
                  Medizinische Kommunikation strukturiert trainieren und das
                  Gelernte anschließend in realistischen Prüfungssituationen
                  anwenden.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                6 SİMÜLASYONLAR
              </div>
              <div className="mt-1 text-xs font-semibold">
                Gerçek sınavdan önce deneyimleyin
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                LIVE + DIGITAL
              </div>
              <div className="mt-1 text-xs font-semibold">
                Dersler arasında öğrenmeye devam
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* PHOTO-STORY-FSP */}
      <EditorialStorySection
        eyebrow="MEDIZINISCHE KOMMUNIKATION"
        title="Medizinische Sprache wird im Gespräch konkret."
        text="In der FSP müssen Anamnese, medizinische Struktur und sprachliche Reaktion gleichzeitig funktionieren. Deshalb reicht es nicht, Fachbegriffe nur zu kennen – sie müssen im Gespräch abrufbar sein."
        image="/images/fsp-doctor-patient-consultation.jpg"
        alt="Ärztin im Gespräch mit einer Patientin"
        chip="ANAMNESE · DOKUMENTATION · VORSTELLUNG"
      />

      {/* OUTCOMES */}
      <section id="kurs" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            WAS SIE TRAINIEREN
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Nicht nur medizinische Wörter lernen. Medizinisch kommunizieren.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Die Vorbereitung verbindet Fachsprache mit den kommunikativen
            Aufgaben, die im medizinischen und prüfungsbezogenen Kontext
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

      {/* PROGRAM */}
      <section className="bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              KURSINHALTE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Die zentralen Bereiche Ihrer FSP-Vorbereitung.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Die einzelnen Bereiche greifen ineinander: vom medizinischen
              Gespräch über die Dokumentation bis zur strukturierten
              Patientenvorstellung.
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

      {/* PROCESS */}
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

      {/* VALUE SECTION */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                INTENSIVE VORBEREITUNG
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
                Theorie allein bereitet nicht auf eine Kommunikationsprüfung vor.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Deshalb verbindet der Intensivkurs Unterricht, digitales Lernen
                und sınav simülasyonları in einem zusammenhängenden
                Vorbereitungsweg.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "68 ders saati",
                  "Intensiver gemeinsamer Aufbau der prüfungsrelevanten Sprachbereiche.",
                ],
                [
                  "Blended Learning",
                  "Unterricht und digitale Lernphasen ergänzen sich.",
                ],
                [
                  "Küçük gruplar",
                  "Die Kursstruktur ist auf das gemeinsame sprachliche Training in kleinen Gruppen ausgerichtet.",
                ],
                [
                  "6 Simulationen",
                  "Das Gelernte wird anschließend unter realistischen Prüfungsbedingungen angewendet.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.8rem] bg-white/10 p-7"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PELEXA */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] bg-[#D2ECFF]/55 p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              DIGITALES LERNEN
            </div>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Lernmaterialien auch außerhalb des Unterrichts.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/55">
              Über Pelexa stehen digitale Lernmaterialien für die
              Kursvorbereitung und Vertiefung zur Verfügung.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-[#17131c] p-6 sm:p-8">
            <div className="rounded-[2rem] bg-[#f3eff7] p-7">
              <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                PELEXA · LIBELLE DIGITAL LEARNING
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Ihr digitaler Lernbereich
              </div>

              <div className="mt-7 space-y-3">
                {[
                  "Digitale Lernmaterialien",
                  "Ergänzung zum Unterricht",
                  "Vorbereitung und Vertiefung",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-5 py-4 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2.5rem] bg-white p-8 sm:p-10">
              <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
                FÜR WEN?
              </div>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Für medizinische Fachkräfte auf dem Weg zur FSP.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Für Teilnehmende, die medizinische Fachsprache und
                Prüfungskommunikation strukturiert trainieren und ihre
                Vorbereitung mit realistischen Simulationen verbinden möchten.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-[#D2ECFF]/55 p-8 sm:p-10">
              <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
                UNSICHER?
              </div>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Prüfen Sie zuerst, ob der Intensivkurs zu Ihrem Stand passt.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
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
        </div>
      </section>

      <FspConversion />

      {/* FINAL CTA */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                IHR NÄCHSTER SCHRITT
              </div>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
                Bereiten Sie sich strukturiert auf Ihre FSP Medizin vor.
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
              FSP Medizin anfragen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
