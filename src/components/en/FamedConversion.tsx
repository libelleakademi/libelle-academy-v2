"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

const situations = [
  {
    id: "language",
    number: "01",
    label: "LANGUAGE FOUNDATION",
    question: "My German does not yet feel strong enough for FaMed.",
    title: "FaMed preparation does not begin with the exam format alone.",
    text: "Wenn medizinische Kommunikation noch viel Konzentration kostet, sollten sprachliche Strukturen zuerst sicherer werden. Die FaMed verlangt nicht nur Wissen über das Format, sondern aktive Kommunikation im richtigen Moment.",
    next: "Assess your level → identify gaps → prepare strategically for FaMed",
  },
  {
    id: "application",
    number: "02",
    label: "APPLICATION",
    question: "I know a lot of theory, but I freeze during conversations.",
    title: "Knowledge must remain accessible under conversational pressure.",
    text: "Viele Unsicherheiten zeigen sich erst, wenn gleichzeitig zugehört, strukturiert, formuliert und medizinisch reagiert werden muss. Genau deshalb sollte Vorbereitung nicht beim Lesen und Auswendiglernen enden.",
    next: "Strukturen festigen → aktiv sprechen → Anamnese, Patientenaufklärung, Dokumentation und Vorstellung verbinden",
  },
  {
    id: "exam",
    number: "03",
    label: "CLOSE TO THE EXAM",
    question: "My exam is getting closer and I am not sure whether I am ready.",
    title: "It is no longer only about what you know.",
    text: "Kurz vor der Prüfung wird wichtiger, wie zuverlässig Sie Ihr Wissen in einer realistischen Situation abrufen können. Simulationen machen sichtbar, wo bereits Sicherheit besteht und was noch gezielt nachgeschärft werden sollte.",
    next: "Apply under exam conditions → receive feedback → target remaining weaknesses",
  },
];

const questions = [
  {
    q: "Do I already need to speak medical German very confidently before starting?",
    a: "Der Kurs dient gerade dazu, medizinische Kommunikation systematisch zu trainieren. Entscheidend ist jedoch, dass Ihr allgemeines Deutschniveau eine sinnvolle Mitarbeit ermöglicht. Wenn Sie unsicher sind, können Sie uns Ihren aktuellen Stand vorab schildern.",
  },
  {
    q: "I have already taken a FaMed course. Would another course still make sense?",
    a: "Das hängt weniger von der Anzahl Ihrer bisherigen Kurse ab als davon, was heute noch unsicher ist. Wenn Sie Inhalte bereits kennen, aber Anamnese, Dokumentation oder Patientenvorstellung unter Gesprächsdruck noch nicht zuverlässig funktionieren, kann gezieltes Anwendungstraining weiterhin sinnvoll sein.",
  },
  {
    q: "What if I perform poorly in a simulation?",
    a: "A simulation is not a final judgment on your exam chances. Its value is revealing weaknesses before the real exam so your remaining preparation can be more focused.",
  },
  {
    q: "How do I know whether I need the intensive course or only simulations?",
    a: "If fundamental language or structural weaknesses remain, a complete preparation course may fit better. If the content is already solid and you mainly want to test your performance under exam conditions, simulations may be the better next step.",
  },
  {
    q: "I am afraid I may suddenly be unable to speak in the exam. Can this be trained?",
    a: "Exam stress cannot be eliminated completely, but the situation can become more familiar. Repeated practice, clear conversation structures and realistic simulations help you access answers more quickly.",
  },
  {
    q: "What happens if I message you on WhatsApp now?",
    a: "You do not need to have made a booking decision. Tell us briefly about your current level, exam date if known, and where you still feel uncertain. We can then identify the most sensible next step.",
  },
];

export default function FamedConversion() {
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
              WHERE ARE YOU TODAY?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Not every FaMed candidate needs the same next step.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
              What matters is not only when your exam takes place, but where your uncertainty actually lies today.
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
                  WHAT MATTERS NOW
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">
                  {current.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-black/55">
                  {current.text}
                </p>

                <div className="mt-8 rounded-[1.6rem] bg-white p-6">
                  <div className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                    SENSIBLE DIRECTION
                  </div>

                  <p className="mt-3 font-medium leading-7">
                    {current.next}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLink(
                      `Hallo, ich bereite mich auf die FaMed vor. Meine aktuelle Situation: ${current.question} Bitte helfen Sie mir einzuschätzen, welcher nächste Schritt sinnvoll ist. Quelle: FAMED-DECISION`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#31175B] px-6 py-3.5 text-center text-sm font-semibold text-white"
                  >
                    Discuss my situation
                  </a>

                  <Link
                    href="/en/simulationen"
                    className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-center text-sm font-semibold"
                  >
                    Explore simulations
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
              BEFORE YOU DECIDE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              The most important questions are rarely found in the timetable.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Before enrolling, the real question is often not the number of lesson hours, but whether this path actually fits your current situation.
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
