"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const situations = [
  {
    id: "unsure",
    number: "01",
    label: "STILL UNSURE",
    question: "I have studied, but I do not know whether I am truly ready.",
    title: "Stop guessing. Make your current level visible.",
    text: "Eine Simulation zeigt Ihnen, was unter prüfungsnahen Bedingungen bereits funktioniert – und wo Sprache, Struktur oder Reaktion noch unsicher werden.",
    next: "Simulieren → Feedback bekommen → gezielter weiterlernen",
  },
  {
    id: "pressure",
    number: "02",
    label: "UNDER PRESSURE",
    question: "It works while studying, but under time pressure I suddenly lose confidence.",
    title: "The exam requires access to knowledge, not knowledge alone.",
    text: "Wenn mehrere Aufgaben gleichzeitig zusammenkommen, verändert sich die Situation. Genau diesen Wechsel vom Wissen zur Anwendung sollte man vor dem echten Prüfungstag erleben.",
    next: "Prüfungsdruck erleben → Reaktion analysieren → Routinen festigen",
  },
  {
    id: "final",
    number: "03",
    label: "FINAL CHECK",
    question: "My exam is soon and I do not want to spend my remaining time on the wrong things.",
    title: "Your preparation should now become more precise.",
    text: "Kurz vor der Prüfung ist allgemeines Weiterlernen oft weniger wertvoll als zu wissen, welche zwei oder drei Punkte tatsächlich noch Aufmerksamkeit brauchen.",
    next: "Realistisch testen → Schwachstellen priorisieren → letzte Phase fokussieren",
  },
];

const faq = [
  [
    "What if the simulation goes worse than expected?",
    "Dann hat sie einen wichtigen Zweck erfüllt: Sie haben die Unsicherheit vor der echten Prüfung entdeckt. Das Feedback hilft anschließend dabei, Ihre verbleibende Lernzeit konkreter einzusetzen.",
  ],
  [
    "Is one simulation enough?",
    "Das hängt von Ihrem Stand ab. Eine Simulation kann einen sehr guten ersten Realitätscheck geben. Wenn sich mehrere Unsicherheiten zeigen oder Sie Abläufe wiederholt unter Druck trainieren möchten, können mehrere Simulationen sinnvoll sein.",
  ],
  [
    "Do I still need simulations if I have already taken an intensive course?",
    "Ein Kurs und eine Simulation erfüllen unterschiedliche Aufgaben. Im Kurs bauen und trainieren Sie Fähigkeiten. In der Simulation überprüfen Sie, wie zuverlässig diese Fähigkeiten in einer zusammenhängenden Prüfungssituation abrufbar sind.",
  ],
  [
    "I am afraid of embarrassing myself during the simulation.",
    "Die Simulation ist genau der Ort, an dem Fehler passieren dürfen. Sie dient nicht dazu, Sie zu bewerten wie am echten Prüfungstag, sondern Unsicherheiten sichtbar zu machen, solange noch Zeit besteht, daran zu arbeiten.",
  ],
  [
    "What happens if I message you on WhatsApp now?",
    "Sie nennen uns Ihre Prüfung und ungefähr, wo Sie in der Vorbereitung stehen. Danach können freie Termine und die passende Simulationsoption besprochen werden. Sie müssen vorher noch nichts endgültig auswählen.",
  ],
];

export default function SimulationConversion() {
  const [selected, setSelected] = useState("pressure");
  const [open, setOpen] = useState<number | null>(0);

  const current =
    situations.find((item) => item.id === selected) ?? situations[1];

  return (
    <>
      <section className="bg-[#17131c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              WHY DO YOU WANT TO SIMULATE?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              A simulation is not just practice. It is a reality check.
            </h2>
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
                        : "border-white/10 bg-white/[.06] text-white"
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
                        <div className="text-[10px] font-bold tracking-[.15em] text-[#17666a]">
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
                WHAT THE SIMULATION GIVES YOU
              </div>

              <h3 className="mt-5 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">
                {current.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-black/55">
                {current.text}
              </p>

              <div className="mt-8 rounded-[1.6rem] bg-white p-6">
                <div className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                  NEXT STEP
                </div>
                <p className="mt-3 font-medium leading-7">{current.next}</p>
              </div>

              <a
                href={whatsappLink(
                  `Hallo, ich interessiere mich für eine Prüfungssimulation. Meine Situation: ${current.question} Quelle: SIM-DECISION`
                )}
                className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3.5 text-center text-sm font-semibold text-white"
              >
                Choose the right simulation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              BEFORE BOOKING
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              The more important question is not: "How much does a simulation cost?"
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              What matters is whether it gives you the information you still need before the real exam.
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

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#31175B] text-white transition-transform ${
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
