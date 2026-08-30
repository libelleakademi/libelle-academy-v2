"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const situations = [
  {
    id: "beginner",
    label: "ICH STARTE NEU",
    question: "Ich kann kaum Deutsch und möchte von Anfang an richtig aufbauen.",
    title: "Dann ist ein klarer Lernweg wichtiger als möglichst viel Material.",
    text: "Wenn die Grundlagen sauber aufgebaut werden, müssen Sie später weniger Lücken reparieren. A1 ist dann nicht nur der erste Kurs, sondern das Fundament für die nächsten Stufen.",
    next: "A1 aufbauen → A2 festigen → B1 erweitern → B2 sicher anwenden",
  },
  {
    id: "existing",
    label: "ICH HABE VORKENNTNISSE",
    question: "Ich habe schon Deutsch gelernt, weiß aber nicht, wo ich einsteigen soll.",
    title: "Sie sollten nicht automatisch wieder bei A1 anfangen.",
    text: "Zu niedrig einzusteigen kostet Zeit. Zu hoch einzusteigen erzeugt neue Lücken. Deshalb ist die richtige Einstufung wichtiger als die Frage, welcher Kurs zuerst beworben wird.",
    next: "Stand einschätzen → richtige Stufe wählen → von dort konsequent weitergehen",
  },
  {
    id: "stuck",
    label: "ICH KOMME NICHT WEITER",
    question: "Ich lerne immer wieder, aber mein Deutsch entwickelt sich nicht konstant.",
    title: "Das Problem kann der fehlende Lernweg sein – nicht Ihre Motivation.",
    text: "Wenn Methoden, Kurse und Materialien ständig wechseln, beginnt man gedanklich immer wieder neu. Ein zusammenhängender Weg reduziert diese Neustarts und macht Fortschritt leichter nachvollziehbar.",
    next: "Lücken erkennen → klare Reihenfolge → kontinuierlich bis zum nächsten Niveau",
  },
];

const faq = [
  [
    "Was, wenn ich schon einmal Deutsch gelernt und vieles wieder vergessen habe?",
    "Dann ist nicht automatisch ein kompletter Neustart nötig. Entscheidend ist, welche Grundlagen noch stabil sind. Eine sinnvolle Einstufung verhindert, dass Sie unnötig Zeit mit bereits sicheren Inhalten verbringen.",
  ],
  [
    "Muss ich mich heute schon für den kompletten Weg bis B2 entscheiden?",
    "Nein. Sie können auch einzelne Stufen buchen. Der Vorteil des Gesamtlernwegs liegt darin, dass Sie schon wissen, wie Ihre nächsten Schritte aussehen können.",
  ],
  [
    "Ich habe schon mehrere Kurse angefangen und wieder aufgehört. Was wäre diesmal anders?",
    "Ein klarer Lernweg nimmt Ihnen nicht die Arbeit ab. Er reduziert aber Entscheidungen und Neustarts: Sie wissen, wo Sie stehen, welches Niveau folgt und worauf jede Stufe vorbereitet.",
  ],
  [
    "Wie weiß ich, ob ich wirklich bereit für die nächste Stufe bin?",
    "Nicht allein daran, dass ein Kurs beendet ist. Wichtig ist, ob zentrale Inhalte aktiv verstanden und angewendet werden können. Bei Unsicherheit kann vor dem nächsten Einstieg der aktuelle Stand besprochen werden.",
  ],
  [
    "Was passiert, wenn ich Libelle über WhatsApp schreibe?",
    "Sie können einfach Ihre bisherigen Deutschkenntnisse und Ihr Ziel nennen. Danach kann zuerst geklärt werden, welche Stufe sinnvoll ist. Sie müssen vorher noch keine endgültige Buchungsentscheidung treffen.",
  ],
];

export default function GermanPathConversion() {
  const [selected, setSelected] = useState("existing");
  const [open, setOpen] = useState<number | null>(0);

  const current =
    situations.find((item) => item.id === selected) ?? situations[1];

  return (
    <>
      <section className="bg-[#17131c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              WO STARTEN SIE?
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Nicht jeder braucht A1. Aber jeder braucht den richtigen nächsten Schritt.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[.92fr_1.08fr]">
            <div className="space-y-3">
              {situations.map((item, index) => {
                const active = selected === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-[1.8rem] border p-6 text-left transition-all duration-500 ${
                      active
                        ? "border-[#58ECF1]/40 bg-white text-[#17131c]"
                        : "border-white/10 bg-white/[.06] text-white"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        active ? "bg-[#31175B] text-white" : "bg-white/10 text-[#58ECF1]"
                      }`}>
                        0{index + 1}
                      </span>
                      <div>
                        <div className={`text-[10px] font-bold tracking-[.15em] ${
                          active ? "text-[#17666a]" : "text-[#58ECF1]"
                        }`}>
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
              className="rounded-[2.5rem] bg-[#f3eff7] p-8 text-[#17131c] shadow-[0_35px_90px_rgba(0,0,0,.2)] sm:p-10"
            >
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                EMPFOHLENE RICHTUNG
              </div>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">
                {current.title}
              </h3>
              <p className="mt-6 text-lg leading-8 text-black/55">
                {current.text}
              </p>

              <div className="mt-8 rounded-[1.6rem] bg-white p-6">
                <div className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                  IHR LERNWEG
                </div>
                <p className="mt-3 font-medium leading-7">{current.next}</p>
              </div>

              <a
                href={whatsappLink(
                  `Hallo, ich interessiere mich für den Deutsch-Lernweg. Meine Situation: ${current.question} Können Sie mir beim richtigen Einstieg helfen? Quelle: A1-B2-DECISION`
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3.5 text-center text-sm font-semibold text-white"
              >
                Richtigen Einstieg finden
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              VOR DEM START
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Die wichtigste Entscheidung ist nicht, wie schnell Sie starten.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/55">
              Sondern ob Sie auf dem richtigen Niveau starten und danach einen
              Weg haben, den Sie tatsächlich weiterführen können.
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
                    type="button"
                    onClick={() => setOpen(active ? null : index)}
                    className="flex w-full items-start justify-between gap-5 p-6 text-left"
                  >
                    <span className="text-lg font-semibold leading-7">
                      {question}
                    </span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#31175B] text-white transition-transform ${
                      active ? "rotate-45" : ""
                    }`}>
                      +
                    </span>
                  </button>

                  <div className={`grid transition-all duration-500 ${
                    active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-7 leading-8 text-black/55">
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
