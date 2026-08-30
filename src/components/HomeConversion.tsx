"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

const paths = [
  {
    id: "german",
    label: "DEUTSCH AUFBAUEN",
    question: "Ich möchte mein Deutsch bis B2 entwickeln.",
    title: "Deutsch A1–B2",
    text: "Wenn B2 Ihr Ziel ist, brauchen Sie nicht vier zufällige Kurse, sondern einen klaren Sprachweg, bei dem jede Stufe auf der vorherigen aufbaut.",
    next: "Aktuelles Niveau → passende Stufe → Schritt für Schritt bis B2",
    href: "/de/pakete/deutsch-a1-b2",
    cta: "A1–B2 Lernweg ansehen",
  },
  {
    id: "exam",
    label: "PRÜFUNG VORBEREITEN",
    question: "Ich bereite mich auf FSP, FaMed oder Zahnmedizin vor.",
    title: "Medizinische Prüfungsvorbereitung",
    text: "Hier reicht es nicht, medizinische Wörter zu kennen. Sprache muss in Anamnese, Gespräch, Dokumentation und Prüfungssituation abrufbar werden.",
    next: "Prüfung bestimmen → gezielt vorbereiten → realistisch simulieren",
    href: "/de/pruefungsvorbereitung",
    cta: "Prüfungsweg finden",
  },
  {
    id: "simulation",
    label: "FAST PRÜFUNGSBEREIT",
    question: "Ich habe schon gelernt und möchte mich realistisch testen.",
    title: "Prüfungssimulationen",
    text: "Kurz vor der Prüfung ist mehr Theorie nicht immer die Lösung. Jetzt wird entscheidend, was unter Zeitdruck tatsächlich abrufbar ist.",
    next: "Simulation → individuelles Feedback → gezielt nachschärfen",
    href: "/de/simulationen",
    cta: "Simulationen ansehen",
  },
];

const faq = [
  [
    "Ich weiß noch gar nicht, welcher Kurs zu mir passt.",
    "Das müssen Sie vor der Kontaktaufnahme nicht wissen. Schreiben Sie uns Ihr aktuelles Niveau, Ihr Ziel und – falls vorhanden – Ihre Prüfung. Der erste Schritt ist Orientierung, nicht sofort eine Buchung.",
  ],
  [
    "Was, wenn mein Deutsch für die medizinische Vorbereitung noch nicht reicht?",
    "Dann kann es sinnvoller sein, zuerst die sprachliche Grundlage zu stabilisieren. Zu früh nur Prüfungsabläufe zu trainieren schafft häufig zusätzliche Unsicherheit statt Sicherheit.",
  ],
  [
    "Ich habe schon sehr viel gelernt. Warum fühle ich mich trotzdem nicht bereit?",
    "Mehr Material bedeutet nicht automatisch mehr Sicherheit. Entscheidend ist, ob Sie Sprache aktiv anwenden, Rückmeldung bekommen und genau wissen, welcher Schwachpunkt als Nächstes trainiert werden sollte.",
  ],
  [
    "Was, wenn ich in der echten Prüfung plötzlich blockiere?",
    "Genau deshalb gehören realistische Anwendung und Simulationen zur Vorbereitung. Wissen muss nicht nur vorhanden sein – es muss auch unter Druck abrufbar werden.",
  ],
  [
    "Was passiert, wenn ich Libelle auf WhatsApp schreibe?",
    "Sie schildern kurz Ihre Situation. Danach schauen wir gemeinsam, welcher nächste Schritt sinnvoll ist. Sie müssen nicht schon entschieden haben, welchen Kurs Sie buchen möchten.",
  ],
];

export default function HomeConversion() {
  const [selected, setSelected] = useState("exam");
  const [open, setOpen] = useState<number | null>(0);

  const current = paths.find((p) => p.id === selected) ?? paths[1];

  return (
    <>
      <section className="bg-[#17131c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              WAS IST IHR ZIEL?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Beginnen Sie nicht mit einem Kurs. Beginnen Sie mit Ihrem Ziel.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
              Der sinnvollste Kurs hängt davon ab, wo Sie heute stehen und
              was Sie als Nächstes erreichen möchten.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
            <div className="space-y-3">
              {paths.map((path, i) => {
                const active = selected === path.id;

                return (
                  <button
                    key={path.id}
                    onClick={() => setSelected(path.id)}
                    className={`w-full rounded-[1.8rem] border p-6 text-left transition-all duration-500 ${
                      active
                        ? "border-[#58ECF1]/40 bg-white text-[#17131c]"
                        : "border-white/10 bg-white/[.06] text-white"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          active
                            ? "bg-[#31175B] text-white"
                            : "bg-white/10 text-[#58ECF1]"
                        }`}
                      >
                        0{i + 1}
                      </span>

                      <div>
                        <div className="text-[10px] font-bold tracking-[.15em] text-[#17666a]">
                          {path.label}
                        </div>
                        <div className="mt-2 font-semibold">
                          {path.question}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div
              key={current.id}
              className="rounded-[2.4rem] bg-[#f3eff7] p-8 text-[#17131c] shadow-[0_30px_90px_rgba(0,0,0,.18)] sm:p-10"
            >
              <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                IHRE RICHTUNG
              </div>

              <h3 className="mt-5 text-3xl font-semibold">
                {current.title}
              </h3>

              <p className="mt-5 leading-8 text-black/55">
                {current.text}
              </p>

              <div className="mt-7 rounded-[1.5rem] bg-white p-5">
                <div className="text-xs font-bold text-[#17666a]">
                  SINNVOLLER NÄCHSTER SCHRITT
                </div>
                <p className="mt-3 font-medium">{current.next}</p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={current.href}
                  className="rounded-full bg-[#31175B] px-6 py-3 text-center text-sm font-semibold text-white"
                >
                  {current.cta}
                </Link>

                <a
                  href={whatsappLink(
                    `Hallo, ich brauche Hilfe bei meinem Lernweg. Mein Ziel: ${current.question} Quelle: HOME-PATH`
                  )}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-semibold"
                >
                  Kurz beraten lassen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              VOR DER ENTSCHEIDUNG
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Vielleicht ist der Preis gar nicht Ihre größte Frage.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Oft geht es zuerst um etwas anderes: Bin ich bereit? Reicht mein
              Deutsch? Was, wenn ich wieder Zeit verliere?
            </p>
          </div>

          <div className="space-y-3">
            {faq.map(([question, answer], index) => {
              const active = open === index;

              return (
                <div
                  key={question}
                  className="overflow-hidden rounded-[1.7rem] border border-black/5 bg-[#f7f5f9]"
                >
                  <button
                    onClick={() => setOpen(active ? null : index)}
                    className="flex w-full items-start justify-between gap-5 p-6 text-left"
                  >
                    <span className="text-lg font-semibold">
                      {question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#31175B] text-white transition-transform ${
                        active ? "rotate-45" : ""
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
                      <p className="px-6 pb-6 leading-8 text-black/55">
                        {answer}
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
