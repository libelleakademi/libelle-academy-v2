"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

const situations = [
  {
    id: "language",
    number: "01",
    label: "SPRACHLICHE BASIS",
    question: "Mein Deutsch fühlt sich für die FSP noch nicht sicher genug an.",
    title: "Nicht zu früh nur die Prüfung trainieren.",
    text: "Wenn Sie im medizinischen Gespräch noch stark nach Wörtern oder Strukturen suchen müssen, kann zuerst die sprachliche Grundlage entscheidend sein. Prüfungsstrategien helfen wenig, wenn die Kommunikation selbst noch zu viel mentale Energie kostet.",
    next: "Sprachstand ehrlich einschätzen → Lücken erkennen → gezielt auf die FSP hinarbeiten",
  },
  {
    id: "application",
    number: "02",
    label: "ANWENDUNG",
    question: "Ich kenne viel Theorie, aber im Gespräch blockiere ich.",
    title: "Wissen muss unter Gesprächsdruck abrufbar werden.",
    text: "Viele Unsicherheiten zeigen sich erst, wenn gleichzeitig zugehört, strukturiert, formuliert und medizinisch reagiert werden muss. Genau deshalb sollte Vorbereitung nicht beim Lesen und Auswendiglernen enden.",
    next: "Strukturen festigen → aktiv sprechen → Anamnese, Dokumentation und Vorstellung verbinden",
  },
  {
    id: "exam",
    number: "03",
    label: "PRÜFUNGSNÄHE",
    question: "Meine Prüfung rückt näher und ich weiß nicht, ob ich bereit bin.",
    title: "Jetzt zählt nicht mehr nur: Was weiß ich?",
    text: "Kurz vor der Prüfung wird wichtiger, wie zuverlässig Sie Ihr Wissen in einer realistischen Situation abrufen können. Simulationen machen sichtbar, wo bereits Sicherheit besteht und was noch gezielt nachgeschärft werden sollte.",
    next: "Prüfungsnah anwenden → Feedback erhalten → verbleibende Schwächen gezielt trainieren",
  },
];

const questions = [
  {
    q: "Muss ich schon sehr sicher medizinisch sprechen können, bevor ich mit dem Intensivkurs beginne?",
    a: "Der Kurs dient gerade dazu, medizinische Kommunikation systematisch zu trainieren. Entscheidend ist jedoch, dass Ihr allgemeines Deutschniveau eine sinnvolle Mitarbeit ermöglicht. Wenn Sie unsicher sind, können Sie uns Ihren aktuellen Stand vorab schildern.",
  },
  {
    q: "Ich habe bereits einen FSP-Kurs gemacht. Macht ein weiterer Kurs überhaupt Sinn?",
    a: "Das hängt weniger von der Anzahl Ihrer bisherigen Kurse ab als davon, was heute noch unsicher ist. Wenn Sie Inhalte bereits kennen, aber Anamnese, Dokumentation oder Patientenvorstellung unter Gesprächsdruck noch nicht zuverlässig funktionieren, kann gezieltes Anwendungstraining weiterhin sinnvoll sein.",
  },
  {
    q: "Was, wenn ich in einer Simulation schlecht abschneide?",
    a: "Eine Simulation ist kein finales Urteil über Ihre Prüfungschancen. Ihr Nutzen liegt gerade darin, Unsicherheiten vor der echten Prüfung sichtbar zu machen. Feedback hilft anschließend dabei, die Vorbereitung konkreter auszurichten.",
  },
  {
    q: "Woher weiß ich, ob ich den Intensivkurs brauche oder nur Simulationen?",
    a: "Wenn grundlegende sprachliche oder strukturelle Unsicherheiten bestehen, ist ein vollständiger Vorbereitungskurs meist näher an Ihrer Situation. Wenn die Inhalte bereits sitzen und Sie vor allem Ihre Leistung unter Prüfungsbedingungen testen möchten, können Simulationen der passendere nächste Schritt sein.",
  },
  {
    q: "Ich habe Angst, in der Prüfung plötzlich nichts mehr sagen zu können. Kann man das überhaupt trainieren?",
    a: "Prüfungsstress lässt sich nicht vollständig eliminieren. Sie können die Situation aber weniger fremd machen. Wiederholte Anwendung, klare Gesprächsstrukturen und realistische Simulationen helfen dabei, Antworten nicht nur theoretisch zu kennen, sondern schneller abrufen zu können.",
  },
  {
    q: "Was passiert, wenn ich jetzt über WhatsApp schreibe?",
    a: "Sie müssen noch keine Buchungsentscheidung getroffen haben. Schreiben Sie kurz Ihren aktuellen Stand, ob bereits ein Prüfungstermin feststeht und wobei Sie sich noch unsicher fühlen. Danach kann zuerst geklärt werden, welcher nächste Schritt zu Ihrer Situation passt.",
  },
];

export default function FspConversion() {
  const [selected, setSelected] = useState("application");
  const [open, setOpen] = useState<number | null>(0);

  const current =
    situations.find((item) => item.id === selected) ?? situations[1];

  return (
    <>
      <section className="bg-[#17131c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              WO STEHEN SIE HEUTE?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Nicht jeder FSP-Kandidat braucht als Nächstes dasselbe.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
              Entscheidend ist nicht nur, wann Ihre Prüfung stattfindet.
              Entscheidend ist, wo Ihre Unsicherheit heute tatsächlich liegt.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[.92fr_1.08fr]">
            <div className="space-y-3">
              {situations.map((item) => {
                const active = selected === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-[1.8rem] border p-6 text-left transition-all duration-500 ${
                      active
                        ? "border-[#58ECF1]/40 bg-white text-[#17131c]"
                        : "border-white/10 bg-white/[.06] text-white hover:bg-white/[.1]"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          active
                            ? "bg-[#31175B] text-white"
                            : "bg-white/10 text-[#58ECF1]"
                        }`}
                      >
                        {item.number}
                      </span>

                      <div>
                        <div
                          className={`text-[10px] font-bold tracking-[.15em] ${
                            active ? "text-[#17666a]" : "text-[#58ECF1]"
                          }`}
                        >
                          {item.label}
                        </div>

                        <div className="mt-2 font-semibold leading-6">
                          {item.question}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div
              key={current.id}
              className="relative overflow-hidden rounded-[2.5rem] bg-[#f3eff7] p-8 text-[#17131c] shadow-[0_35px_90px_rgba(0,0,0,.2)] sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#58ECF1]/20 blur-3xl" />

              <div className="relative">
                <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                  WAS JETZT WICHTIG WIRD
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">
                  {current.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-black/55">
                  {current.text}
                </p>

                <div className="mt-8 rounded-[1.6rem] bg-white p-6">
                  <div className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                    SINNVOLLE RICHTUNG
                  </div>

                  <p className="mt-3 font-medium leading-7">
                    {current.next}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLink(
                      `Hallo, ich bereite mich auf die FSP Medizin vor. Meine aktuelle Situation: ${current.question} Bitte helfen Sie mir einzuschätzen, welcher nächste Schritt sinnvoll ist. Quelle: FSP-DECISION`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#31175B] px-6 py-3.5 text-center text-sm font-semibold text-white"
                  >
                    Meine Situation besprechen
                  </a>

                  <Link
                    href="/de/simulationen"
                    className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-center text-sm font-semibold"
                  >
                    Simulationen ansehen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              VOR DER ENTSCHEIDUNG
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Die wichtigsten Fragen stehen selten im Stundenplan.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Vor einer Anmeldung geht es häufig nicht um die Zahl der
              Unterrichtsstunden. Es geht um die Frage, ob dieser Weg gerade
              wirklich zu Ihrer Situation passt.
            </p>
          </div>

          <div className="space-y-3">
            {questions.map((item, index) => {
              const active = open === index;

              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-[1.7rem] border transition-all duration-500 ${
                    active
                      ? "border-[#31175B]/15 bg-[#f7f5f9] shadow-[0_18px_50px_rgba(49,23,91,.06)]"
                      : "border-black/5 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(active ? null : index)}
                    className="flex w-full items-start justify-between gap-6 p-6 text-left sm:p-7"
                  >
                    <span className="text-lg font-semibold leading-7">
                      {item.q}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                        active
                          ? "rotate-45 bg-[#31175B] text-white"
                          : "bg-[#f3eff7] text-[#31175B]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      active
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-7 leading-8 text-black/55 sm:px-7">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
