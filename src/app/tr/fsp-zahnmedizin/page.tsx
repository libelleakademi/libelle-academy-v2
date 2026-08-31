import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import ZahnConversion from "@/components/tr/ZahnConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FSP & FaMed Diş Hekimliği Yoğun Kursu | Libelle Academy",
  description:
    "8 hafta intensive Vorbereitung auf zahnmedizinische Fachsprache, Hasta görüşmesi, Dokumentation, Hasta sunumu und prüfungsorientiertes Training.",
};

const mainMessage =
  "Hallo, ich interessiere mich für den FSP & FaMed Diş Hekimliği Intensivkurs für 950 €. Bitte senden Sie mir Informationen zur nächsten Gruppe und zu freien Plätzen. Quelle: FSP-FAMED-ZAHNMEDIZIN-LANDING";

const consultationMessage =
  "Hallo, ich interessiere mich für die Diş Hekimliği-Vorbereitung und möchte wissen, ob der Intensivkurs zu meinem aktuellen Stand passt. Quelle: ZAHNMEDIZIN-BERATUNG";

const outcomes = [
  {
    number: "01",
    title: "Diş Hekimliğiische Fachsprache sicherer einsetzen",
    text: "Sınavla ilgili diş hekimliği terimlerini ve ifadelerini konuşmalarda aktif olarak kullanın.",
  },
  {
    number: "02",
    title: "Hasta görüşmelerini yapılandırılmış şekilde yürütün",
    text: "Anamnez ve hasta görüşmelerini açık, anlaşılır ve sınav odaklı şekilde çalışın.",
  },
  {
    number: "03",
    title: "Dokümantasyonu hedefli çalışın",
    text: "Informationen aus dem Gespräch geordnet erfassen und für die schriftliche Dokumentation aufbereiten.",
  },
  {
    number: "04",
    title: "Hasta sunumunu etkili şekilde yapılandırın",
    text: "Fälle strukturiert präsentieren und medizinische Zusammenhänge sprachlich sicherer vermitteln.",
  },
];

const program = [
  "Diş Hekimliğiische Fachsprache",
  "Hasta görüşmesi",
  "Anamnese",
  "Dokumentation",
  "Hasta sunumu",
  "Sınav hazırlığı",
];

const steps = [
  {
    number: "01",
    eyebrow: "GELİŞTİR",
    title: "Sprache und Struktur festigen",
    text: "Diş Hekimliğiische Fachsprache und typische Prüfungssituationen werden systematisch aufgebaut.",
  },
  {
    number: "02",
    eyebrow: "UYGULA",
    title: "Kommunikation praktisch trainieren",
    text: "Hasta görüşmesi, Anamnese, Dokumentation und Vorstellung werden miteinander verbunden.",
  },
  {
    number: "03",
    eyebrow: "SİMÜLE ET",
    title: "Unter Prüfungsbedingungen testen",
    text: "Simülasyonlar und Feedback helfen Ihnen, Sprache, Struktur und Sicherheit gezielt weiterzuentwickeln.",
  },
];

const faqs = [
  {
    q: "Wie lange dauert der Diş Hekimliği Intensivkurs?",
    a: "Der aktuell hinterlegte Kursumfang beträgt 8 hafta.",
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
    q: "Sind Simülasyonlar enthalten?",
    a: "Ja. Simülasyonlar und individuelles Feedback sind Bestandteil der Vorbereitung.",
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
              href="/tr/pruefungsvorbereitung"
              className="text-sm font-semibold text-[#17666a]"
            >
              ← Sınav Hazırlığı
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[.18em] text-[#17666a]">
              FSP & FAMED ZAHNMEDIZIN · YOĞUN KURS
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Diş Hekimliğiisch kommunizieren. Prüfungsorientiert trainieren.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Diş hekimliği mesleki dili, hasta görüşmesi, anamnez, dokümantasyon, hasta sunumu ve gerçekçi sınav durumlarına yoğun hazırlık.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "8 hafta",
                "950 €",
                "Simülasyonlar + Feedback",
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

            <div className="home-orbit absolute right-12 -top-12 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                FSP + FAMED
              </div>
              <div className="mt-1 text-sm font-semibold">
                Diş Hekimliğiisch vorbereitet
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-48px] left-12 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                SINAVA YAKIN
              </div>
              <div className="mt-1 text-sm font-semibold">
                Sadece öğrenmeyin, uygulayın
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
                    Diş Hekimliği
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
                    ODAK
                  </div>
                  <div className="mt-2 text-2xl font-semibold">FSP + FaMed</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  "Diş Hekimliğiische Fachsprache",
                  "Sınav odaklı hazırlık",
                  "Simülasyonlar und Feedback",
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
                  Diş Hekimliğiische Kommunikation strukturiert trainieren und
                  das Gelernte anschließend in prüfungsnahen Situationen
                  anwenden.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                FSP + FAMED
              </div>
              <div className="mt-1 text-xs font-semibold">
                Diş Hekimliğiisch vorbereitet
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                SINAVA YAKIN
              </div>
              <div className="mt-1 text-xs font-semibold">
                Sadece öğrenmeyin, uygulayın
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-ZAHN */}
      <EditorialStorySection
        eyebrow="DİŞ HEKİMLİĞİ İLETİŞİMİ"
        title="Mesleki dil, hasta anlayabildiğinde gerçek değerini kazanır."
        text="Anamnese, Aufklärung, Dokumentation und Vorstellung verbinden zahnmedizinisches Fachwissen mit klarer deutscher Kommunikation – genau dort, wo Prüfung und Berufsalltag zusammenkommen."
        image="/images/zahnmedizin-dentist-patient.jpg"
        alt="Zahnärztliche Beratung mit Patientin"
        secondaryImage="/images/zahnmedizin-patient-conversation.jpg"
        secondaryAlt="Diş Hekimliğiisches Hasta görüşmesi"
        chip="FSP + FAMED ZAHNMEDIZIN"
      />

      <section id="kurs" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            NELERİ ÇALIŞACAKSINIZ?
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Nicht nur Fachbegriffe kennen. Diş Hekimliğiisch kommunizieren.
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
              KURS İÇERİĞİ
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Die zentralen Bereiche Ihrer Diş Hekimliği-Vorbereitung.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Vom Hasta görüşmesi bis zur Dokumentation und strukturierten
              Hasta sunumu greifen die einzelnen Bereiche ineinander.
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
                  "8 hafta Intensivvorbereitung",
                  "Ein klarer Zeitraum für den strukturierten Aufbau Ihrer Prüfungskommunikation.",
                ],
                [
                  "Diş Hekimliğiische Fachsprache",
                  "Prüfungsrelevante Sprache wird aktiv in typischen Situationen angewendet.",
                ],
                [
                  "Sınav odaklı hazırlık",
                  "Die Vorbereitung richtet sich gezielt auf typische kommunikative Anforderungen aus.",
                ],
                [
                  "Simülasyonlar und Feedback",
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
              Hasta görüşmesie und prüfungsrelevante Kommunikation
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
              Bereiten Sie sich strukturiert auf Ihre Diş Hekimliği-Prüfung vor.
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
            Diş Hekimliği anfragen
          </a>
        </div>
      </section>
    </main>
  );
}
