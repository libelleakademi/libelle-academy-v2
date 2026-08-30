import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import GermanPathConversion from "@/components/GermanPathConversion";
import { germanCourses } from "@/lib/german-courses";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Deutsch A1–B2 Lernweg | Libelle Academy",
  description: "Ein durchgehender Deutsch-Lernweg von A1 bis B2 mit klarer Progression und persönlicher Beratung.",
};

const levels = ["a1", "a2", "b1", "b2"] as const;
const message =
  "Hallo, ich interessiere mich für den kompletten Deutsch A1–B2 Lernweg. Bitte senden Sie mir die aktuellen Paketkonditionen und Informationen zur passenden Einstufung. Quelle: BUNDLE-DEUTSCH-A1-B2";

const benefits = [
  ["01", "Ein System statt vier Neustarts", "Jede Stufe baut auf der vorherigen auf. Wortschatz, Grammatik und Kommunikation werden systematisch weiterentwickelt."],
  ["02", "Ein klarer Weg bis B2", "Sie wissen von Anfang an, welcher Schritt als Nächstes kommt und können Ihre Sprachentwicklung langfristig planen."],
  ["03", "Alltag, Beruf und Spezialisierung", "Von ersten Alltagssituationen bis zu sicherer Kommunikation auf B2 – mit Anschluss an weitere Libelle-Programme."],
  ["04", "Passende Einstufung", "Mit Vorkenntnissen müssen Sie nicht bei A1 starten. Wir helfen Ihnen vor der Buchung beim richtigen Einstieg."],
];

const faqs = [
  ["Muss ich bei A1 starten?", "Nein. Mit Vorkenntnissen können Sie direkt in eine passende Stufe einsteigen."],
  ["Kann ich die Stufen einzeln buchen?", "Ja. A1, A2, B1 und B2 sind auch einzeln verfügbar."],
  ["Wie lange dauert der komplette Lernweg?", "Die aktuell hinterlegten Kursdauern ergeben zusammen 40 Wochen."],
  ["Was kostet der Gesamtlernweg?", "Die aktuellen Einzelpreise ergeben zusammen 979 €. Die verfügbaren Paketkonditionen teilen wir Ihnen über WhatsApp mit."],
];

export default function DeutschA1B2BundlePage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[690px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <Link href="/de/kurse" className="text-sm font-semibold text-[#17666a]">← Alle Deutschkurse</Link>
            <div className="mt-10 text-xs font-bold tracking-[.18em] text-[#17666a]">DEUTSCH A1–B2 · GESAMTLERNWEG</div>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Vier Niveaus. Ein durchgehender Weg bis B2.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Deutsch nicht als vier getrennte Kurse, sondern als klare Entwicklung von den ersten Grundlagen bis zu sicherer, differenzierter Kommunikation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["A1 → A2 → B1 → B2", "40 Wochen Gesamtumfang", "979 € Einzelwert"].map((item) => (
                <span key={item} className="rounded-full border border-[#58ECF1] bg-white px-5 py-3 text-sm font-semibold">{item}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white">
                Paketkonditionen über WhatsApp anfragen
              </a>
              <a href="#lernweg" className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold">Lernweg ansehen</a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">KLARER WEG</div>
              <div className="mt-1 text-sm font-semibold">A1 → A2 → B1 → B2</div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">VORKENNTNISSE?</div>
              <div className="mt-1 text-sm font-semibold">Beim richtigen Niveau starten</div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.16)] sm:p-7">
              <div className="rounded-[2.2rem] bg-[#f3eff7] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">LIBELLE LERNWEG</div>
                  <div className="mt-2 text-3xl font-semibold">Deutsch A1–B2</div>
                </div>
                <span className="rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold">4 Stufen</span>
              </div>
              <div className="mt-7 space-y-3">
                {levels.map((level, i) => {
                  const course = germanCourses[level];
                  return (
                    <div key={level} className="flex items-center justify-between rounded-2xl bg-white px-5 py-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-[#31175B]">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-semibold">{course.level}</span>
                      </div>
                      <span className="text-sm text-black/45">{course.duration}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 rounded-[1.6rem] bg-[#31175B] p-5 text-white">
                <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">AKTUELLER EINZELWERT</div>
                <div className="mt-2 text-4xl font-semibold">979 €</div>
                <p className="mt-2 text-sm leading-6 text-white/65">Aktuelle Paketkonditionen erhalten Sie persönlich über WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">KLARER WEG</div>
              <div className="mt-1 text-xs font-semibold">A1 → A2 → B1 → B2</div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">VORKENNTNISSE?</div>
              <div className="mt-1 text-xs font-semibold">Richtig einsteigen</div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* PHOTO-STORY-A1B2 */}
      <EditorialStorySection
        eyebrow="DER WEG HINTER DEN NIVEAUS"
        title="Vier Niveaus. Aber ein größeres Ziel: selbstständig kommunizieren."
        text="A1, A2, B1 und B2 sind keine isolierten Etappen. Jede Stufe erweitert, was Sie im Alltag, im Beruf und in Deutschland selbstständig verstehen und ausdrücken können."
        image="/images/a1-b2-life-in-germany.jpg"
        alt="Alltag und Leben in Deutschland"
        chip="A1 → A2 → B1 → B2"
      />

      <section id="lernweg" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">IHR WEG BIS B2</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Jede Stufe bereitet den nächsten Schritt vor.</h2>
          <p className="mt-5 text-lg leading-8 text-black/55">Von den ersten Sätzen bis zu differenzierter Kommunikation: Sie sehen jederzeit, was Sie aufbauen und wohin Sie als Nächstes gehen.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {levels.map((level) => {
            const course = germanCourses[level];
            return (
              <article key={level} className="rounded-[2.2rem] border border-black/5 bg-[#f7f9fb] p-7 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-xs font-bold tracking-[.15em] text-[#17666a]">{course.eyebrow}</div>
                    <h3 className="mt-3 text-4xl font-semibold">{course.level}</h3>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-semibold">{course.duration}</div>
                    <div className="mt-1 text-black/45">{course.price}</div>
                  </div>
                </div>
                <h4 className="mt-7 text-2xl font-semibold leading-8">{course.tagline}</h4>
                <p className="mt-4 leading-7 text-black/55">{course.description}</p>
                <div className="mt-6 space-y-2">
                  {course.outcomes.slice(0, 3).map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-black/65"><span className="font-bold text-[#17666a]">✓</span><span>{item}</span></div>
                  ))}
                </div>
                <Link href={`/de/deutsch/${level}`} className="mt-7 inline-flex text-sm font-semibold text-[#31175B]">{course.title} im Detail ansehen →</Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">WARUM EIN GESAMTLERNWEG?</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Fortschritt wird leichter, wenn der nächste Schritt schon vorbereitet ist.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map(([n, title, text]) => (
              <div key={n} className="rounded-[1.8rem] bg-white/10 p-7">
                <div className="text-xs font-bold text-[#58ECF1]">{n}</div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2.5rem] bg-[#D2ECFF]/55 p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">FÜR WEN?</div>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Für Menschen, die Deutsch langfristig für Deutschland aufbauen möchten.</h2>
            <div className="mt-7 space-y-4 text-black/60">
              <p>✓ Klarer Plan von A1 bis B2</p>
              <p>✓ Deutsch für Alltag, Beruf oder Studium</p>
              <p>✓ Kontinuierlicher Lernweg statt wechselnder Systeme</p>
              <p>✓ Anschluss an medizinisches Deutsch nach B2 möglich</p>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-[#f7f5f9] p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">BEREITS VORKENNTNISSE?</div>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Sie müssen nicht automatisch bei A1 anfangen.</h2>
            <p className="mt-5 text-lg leading-8 text-black/55">Wir helfen Ihnen vor der Buchung beim sinnvollsten Einstieg, damit Sie keine Stufe buchen, die Sie nicht brauchen.</p>
            <a href={whatsappLink("Hallo, ich interessiere mich für den A1–B2 Lernweg und habe bereits Vorkenntnisse. Können Sie mir bei der passenden Einstufung helfen? Quelle: BUNDLE-DEUTSCH-A1-B2-EINSTUFUNG")} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white">Einstufung besprechen</a>
          </div>
        </div>
      </section>

      <GermanPathConversion />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">IHR NÄCHSTER SCHRITT</div>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">Starten Sie mit dem richtigen Niveau – und einem Plan bis B2.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">Schreiben Sie uns kurz Ihre Vorkenntnisse und Ihr Ziel. Wir helfen Ihnen beim sinnvollsten Einstieg.</p>
            </div>
            <a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#31175B]">A1–B2 Lernweg anfragen</a>
          </div>
        </div>
      </section>
    </main>
  );
}
