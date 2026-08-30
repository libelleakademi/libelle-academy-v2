import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import HomeConversion from "@/components/HomeConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Libelle Academy | Deutsch & medizinische Prüfungsvorbereitung",
  description:
    "Deutsch A1–B2, FSP, FaMed, Zahnmedizin und realistische Prüfungssimulationen.",
};

const problems = [
  {
    number: "01",
    title: "Viel lernen. Trotzdem keine klare Richtung.",
    text: "Mehr Material hilft nicht automatisch, wenn unklar bleibt, was Sie als Nächstes wirklich trainieren müssen.",
  },
  {
    number: "02",
    title: "Im Kopf funktioniert es. Im Gespräch nicht immer.",
    text: "Sprache muss abrufbar sein, während Sie zuhören, reagieren, strukturieren und gleichzeitig fachlich korrekt bleiben.",
  },
  {
    number: "03",
    title: "Je näher die Prüfung kommt, desto größer wird die Unsicherheit.",
    text: "Kurz vor der Prüfung zählt nicht nur Wissen. Entscheidend ist, ob Sie es unter realistischen Bedingungen anwenden können.",
  },
];

const medical = [
  {
    label: "FSP MEDIZIN",
    title: "FSP Medizin",
    text: "Medizinische Kommunikation, Anamnese, Dokumentation und Patientenvorstellung gezielt trainieren.",
    info: "8 Wochen · 950 €",
    href: "/de/fsp-medizin",
  },
  {
    label: "FAMED",
    title: "FaMed",
    text: "Medizinische Kommunikation auf das FaMed-Prüfungsformat ausrichten und praktisch anwenden.",
    info: "6 Wochen · 600 €",
    href: "/de/famed",
  },
  {
    label: "ZAHNMEDIZIN",
    title: "FSP & FaMed Zahnmedizin",
    text: "Prüfungsorientierte Vorbereitung speziell für Zahnärztinnen und Zahnärzte.",
    info: "8 Wochen · 950 €",
    href: "/de/fsp-zahnmedizin",
  },
  {
    label: "REALITÄTSCHECK",
    title: "Prüfungssimulationen",
    text: "Unter realistischen Bedingungen testen, individuelles Feedback erhalten und gezielt nachschärfen.",
    info: "ab 75 €",
    href: "/de/simulationen",
  },
];

export default function GermanHomePage() {
  return (
    <main className="bg-white text-[#17131c]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#D2ECFF]/45">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#58ECF1]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#31175B]/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-bold tracking-[.16em] text-[#31175B] shadow-sm">
              <span className="home-pulse-dot h-2 w-2 rounded-full bg-[#58ECF1]" />
              LIBELLE ACADEMY
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.01] tracking-[-.05em] sm:text-6xl lg:text-7xl">
              Ihr Deutsch sollte Sie nicht davon abhalten, den nächsten Schritt
              zu gehen.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
              Ob Sie bei A1 beginnen, B2 erreichen oder eine medizinische
              Prüfung bestehen möchten: Sie brauchen nicht einfach mehr
              Material. Sie brauchen einen klaren Lernweg und echte Anwendung.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lernweg"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Meinen Lernweg finden
              </a>

              <a
                href={whatsappLink(
                  "Hallo, ich möchte herausfinden, welcher Lernweg zu meiner Situation passt. Quelle: HOME-HERO"
                )}
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Persönlich beraten lassen
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-black/45">
              <span>✓ Live-Unterricht</span>
              <span>✓ Digitale Lerninhalte</span>
              <span>✓ Kleine Gruppen</span>
              <span>✓ Prüfungssimulationen</span>
            </div>
          </div>

          <div className="relative">
            <div className="home-orbit absolute left-8 -top-10 z-10 hidden rounded-2xl bg-white px-5 py-4 shadow-xl sm:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                LIVE + DIGITAL
              </div>
              <div className="mt-1 text-sm font-semibold">
                Lernen zwischen den Terminen
              </div>
            </div>

            <div className="home-orbit-delay absolute -right-2 -bottom-6 z-10 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-xl sm:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                PRÜFUNGSNAH
              </div>
              <div className="mt-1 text-sm font-semibold">
                Anwenden statt nur lesen
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_35px_100px_rgba(49,23,91,.20)]">
              <div className="rounded-[2.2rem] bg-[#f3eff7] p-7">
                <div className="text-[10px] font-bold tracking-[.17em] text-[#31175B]">
                  LIBELLE LEARNING PATH
                </div>

                <h2 className="mt-3 text-2xl font-semibold">
                  Was ist Ihr nächster Schritt?
                </h2>

                <div className="mt-7 space-y-3">
                  {[
                    ["01", "Deutsch aufbauen", "A1 → B2"],
                    ["02", "Medizinisch spezialisieren", "FSP · FaMed"],
                    ["03", "Realistisch testen", "Simulationen"],
                  ].map(([number, title, meta], index) => (
                    <div
                      key={number}
                      className={`flex items-center gap-4 rounded-[1.4rem] p-4 ${
                        index === 1
                          ? "bg-[#31175B] text-white"
                          : "bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${
                          index === 1
                            ? "bg-white/10 text-[#58ECF1]"
                            : "bg-[#f3eff7] text-[#31175B]"
                        }`}
                      >
                        {number}
                      </span>

                      <div>
                        <div className="font-semibold">{title}</div>
                        <div
                          className={`mt-1 text-xs ${
                            index === 1 ? "text-white/45" : "text-black/35"
                          }`}
                        >
                          {meta}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.5rem] bg-[#D2ECFF]/70 p-5">
                  <div className="text-xs font-bold text-[#17666a]">
                    NICHT SICHER?
                  </div>
                  <p className="mt-2 text-sm leading-6 text-black/55">
                    Niveau + Ziel + Prüfungstermin reichen für den ersten
                    Orientierungsschritt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-7 text-center md:grid-cols-4 lg:px-8">
          {[
            ["Live", "Persönlicher Unterricht"],
            ["Digital", "Pelexa & Materialien"],
            ["Klein", "Überschaubare Gruppen"],
            ["Realistisch", "Prüfungssimulationen"],
          ].map(([title, text]) => (
            <div key={title}>
              <div className="font-semibold text-[#31175B]">{title}</div>
              <div className="mt-1 text-xs text-black/40">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FUTURE IN GERMANY */}
      <section className="overflow-hidden bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">

          <div className="relative min-h-[570px] sm:min-h-[650px]">
            <div className="absolute left-0 top-0 h-[82%] w-[78%] overflow-hidden rounded-[2.8rem] shadow-[0_35px_90px_rgba(49,23,91,.12)]">
              <Image
                src="/images/home-germany-future.jpg"
                alt="Alltag und Leben in Deutschland"
                fill
                sizes="(max-width: 1024px) 78vw, 520px"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[46%] w-[54%] overflow-hidden rounded-[2.2rem] border-[8px] border-white shadow-[0_28px_70px_rgba(49,23,91,.18)]">
              <Image
                src="/images/home-general-german-learning.jpg"
                alt="Deutsch online lernen"
                fill
                sizes="(max-width: 1024px) 54vw, 360px"
                className="object-cover"
              />
            </div>

            <div className="home-orbit absolute right-[4%] top-[8%] z-20 rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-xl">
              <div className="text-[10px] font-bold tracking-[.14em]">
                A1 → B2
              </div>
              <div className="mt-1 max-w-[170px] text-sm font-semibold leading-5">
                Vom ersten Satz zur selbstständigen Kommunikation
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              MEHR ALS EIN SPRACHKURS
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-5xl lg:text-6xl">
              Deutsch ist nicht das eigentliche Ziel.
              <span className="block text-[#31175B]">
                Das Leben, das dadurch möglich wird, ist es.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">
              Im Alltag selbstständig kommunizieren. Im Beruf sicherer auftreten.
              Gespräche verstehen, Entscheidungen treffen und sich in Deutschland
              Schritt für Schritt zu Hause fühlen.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ["ALLTAG", "Selbstständig kommunizieren"],
                ["BERUF", "Sicherer auftreten"],
                ["ZUKUNFT", "Neue Möglichkeiten öffnen"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.6rem] bg-[#f3eff7] p-5"
                >
                  <div className="text-[10px] font-bold tracking-[.14em] text-[#31175B]">
                    {title}
                  </div>
                  <div className="mt-3 text-sm font-semibold leading-6">
                    {text}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/de/pakete/deutsch-a1-b2"
              className="mt-9 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
            >
              A1–B2 Lernweg entdecken
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              WARUM ES SICH TROTZDEM SCHWER ANFÜHLEN KANN
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Das Problem ist nicht immer, dass Sie zu wenig lernen.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Oft fehlt nicht Motivation, sondern Orientierung und echte
              Anwendung.
            </p>
          </div>

          <div className="space-y-4">
            {problems.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 rounded-[2rem] bg-[#f7f9fb] p-7 sm:grid-cols-[auto_1fr]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#31175B] text-xs font-bold text-white">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-black/50">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="lernweg">
        <HomeConversion />
      </div>


      {/* MEDICAL COURSES */}
      <section className="bg-[#f7f5f9] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              MEDIZINISCHE PRÜFUNGSVORBEREITUNG
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Nicht jede Prüfung braucht dieselbe Vorbereitung.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
              Entscheidend sind Ihr Prüfungsformat, Ihr aktueller Sprachstand
              und der Punkt, an dem Sie sich heute befinden.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[2.8rem] bg-[#31175B] lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative min-h-[340px] lg:min-h-[430px]">
              <Image
                src="/images/home-medical-german-learning.jpg"
                alt="Medizinisches Deutsch digital lernen"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="flex items-center p-8 text-white sm:p-10 lg:p-12">
              <div>
                <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                  MEDICAL GERMAN
                </div>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">
                  Medizinisches Wissen muss auch sprachlich abrufbar sein.
                </h3>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
                  Fachsprache, Patientengespräch und Prüfungssituation werden
                  dort relevant, wo allgemeines Deutsch allein nicht mehr
                  ausreicht.
                </p>

                <Link
                  href="/de/pruefungsvorbereitung"
                  className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#31175B]"
                >
                  Medizinische Lernwege ansehen
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {medical.map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className="group flex min-h-[310px] flex-col justify-between rounded-[2.2rem] bg-white p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-5">
                    <div className="text-xs font-bold tracking-[.15em] text-[#17666a]">
                      {course.label}
                    </div>

                    <div className="text-right text-sm font-semibold text-black/55">
                      {course.info}
                    </div>
                  </div>

                  <h3 className="mt-8 text-3xl font-semibold">
                    {course.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">
                    {course.text}
                  </p>
                </div>

                <div className="mt-8 text-sm font-semibold text-[#31175B]">
                  Passenden Weg ansehen →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PELEXA */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              LIVE + DIGITAL
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Lernen sollte nicht enden, wenn der Live-Unterricht endet.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Pelexa ergänzt ausgewählte Kurse mit Aufzeichnungen,
              Lernmaterialien und digitalen Inhalten. So können Sie zwischen
              den Terminen wiederholen und vertiefen.
            </p>

            <Link
              href="/de/ueber-libelle"
              className="mt-8 inline-block rounded-full border border-black/10 px-6 py-3.5 text-sm font-semibold"
            >
              Das Libelle-Lernmodell ansehen
            </Link>
          </div>

          <div className="rounded-[2.6rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.14)]">
            <div className="rounded-[2rem] bg-[#f3eff7] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold tracking-[.16em] text-[#31175B]">
                    PELEXA
                  </div>
                  <div className="mt-2 text-xl font-semibold">
                    Mein Lernbereich
                  </div>
                </div>

                <div className="rounded-full bg-[#31175B] px-3 py-1.5 text-[10px] font-bold text-white">
                  DIGITAL
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  ["Kursaufzeichnungen", "Wiederholen"],
                  ["Lernmaterialien", "Vertiefen"],
                  ["Prüfungsinhalte", "Anwenden"],
                ].map(([title, action], index) => (
                  <div key={title} className="rounded-2xl bg-white p-5">
                    <div className="flex justify-between gap-4">
                      <span className="font-medium">{title}</span>
                      <span className="text-xs font-bold text-[#17666a]">
                        {action}
                      </span>
                    </div>

                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/5">
                      <div
                        className="h-full rounded-full bg-[#31175B]"
                        style={{
                          width:
                            index === 0
                              ? "82%"
                              : index === 1
                                ? "61%"
                                : "42%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A1-B2 */}
      <section className="bg-[#D2ECFF]/45 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              DEUTSCH A1–B2
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Nicht vier einzelne Kurse. Ein Sprachweg.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Wenn B2 Ihr Ziel ist, sollten die einzelnen Stufen aufeinander
              aufbauen – statt sich wie vier getrennte Entscheidungen
              anzufühlen.
            </p>

            <Link
              href="/de/pakete/deutsch-a1-b2"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3.5 text-sm font-semibold text-white"
            >
              A1–B2 Lernweg ansehen
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["A1", "8 Wochen", "165 €"],
              ["A2", "8 Wochen", "165 €"],
              ["B1", "12 Wochen", "250 €"],
              ["B2", "12 Wochen", "399 €"],
            ].map(([level, duration, price]) => (
              <Link
                key={level}
                href={`/de/deutsch/${level.toLowerCase()}`}
                className="rounded-[2rem] border border-[#58ECF1]/50 bg-white p-6 sm:p-7"
              >
                <div className="text-4xl font-semibold text-[#31175B] sm:text-5xl">
                  {level}
                </div>

                <div className="mt-8 text-sm text-black/40">
                  {duration}
                </div>

                <div className="mt-1 font-semibold">{price}</div>

                <div className="mt-6 text-sm font-semibold text-[#17666a]">
                  Niveau ansehen →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TUTORS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              MEDIZINISCHE TUTOREN
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Medizinische Sprache braucht medizinischen Kontext.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Lernen Sie innerhalb der medizinischen Programme mit Tutorinnen
              und Tutoren, die die jeweilige Prüfungsvorbereitung begleiten.
            </p>

            <Link
              href="/de/tutoren"
              className="mt-8 inline-block rounded-full border border-black/10 px-6 py-3.5 text-sm font-semibold"
            >
              Tutoren kennenlernen
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["FM", "Firdevs Murad", "FSP Medizin"],
              ["AŞ", "Alkış Şensoy", "FaMed"],
            ].map(([initials, name, role]) => (
              <Link
                key={name}
                href="/de/tutoren"
                className="rounded-[2.2rem] bg-[#f7f5f9] p-7"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#31175B] text-xl font-semibold text-white">
                  {initials}
                </div>

                <div className="mt-7 text-2xl font-semibold">{name}</div>
                <div className="mt-2 text-sm font-semibold text-[#31175B]">
                  {role}
                </div>

                <div className="mt-8 text-sm font-semibold text-black/40">
                  Profil ansehen →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-[#31175B] p-9 text-white sm:p-14">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              DER ERSTE SCHRITT IST KLEIN
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Sie müssen heute noch keinen Kurs auswählen.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Schreiben Sie uns einfach Ihr aktuelles Niveau, Ihr Ziel und –
              falls relevant – Ihre Prüfung. Zuerst klären wir, welcher
              nächste Schritt überhaupt sinnvoll ist.
            </p>

            <a
              href={whatsappLink(
                "Hallo, ich möchte meinen nächsten Lernschritt herausfinden. Mein Niveau ist: ___. Mein Ziel / meine Prüfung ist: ___. Quelle: HOME-FINAL"
              )}
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#31175B]"
            >
              Meine Situation kurz schildern
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
