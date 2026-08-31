"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

const situations = [
  {
    id: "language",
    number: "01",
    label: "MESLEKİ DİL",
    question: "Diş hekimliğini biliyorum ancak Almancada doğru ifadeleri bulmakta zorlanıyorum.",
    title: "Mesleki bilgi ile mesleki dil aynı şey değildir.",
    text: "Sie können medizinisch genau wissen, was Sie sagen möchten, und trotzdem sprachlich ins Stocken geraten. Dann sollte die Vorbereitung Fachwissen nicht wiederholen, sondern dabei helfen, es auf Deutsch sicherer auszudrücken.",
    next: "Fachsprache festigen → typische Gesprächsstrukturen trainieren → aktiv anwenden",
  },
  {
    id: "communication",
    number: "02",
    label: "HASTA GÖRÜŞMESİ",
    question: "Hasta görüşmesinde yapıyı kaybediyor veya kendimden emin olamıyorum.",
    title: "İyi bir görüşme yalnızca doğru terimlerden oluşmaz.",
    text: "Anamnese, verständliche Erklärung und strukturierte Kommunikation müssen gleichzeitig funktionieren. Genau dort zeigt sich, ob Sprache unter realen Gesprächsbedingungen wirklich abrufbar ist.",
    next: "Gespräch strukturieren → aktiv formulieren → Dokumentation und Vorstellung verbinden",
  },
  {
    id: "exam",
    number: "03",
    label: "SINAVA YAKINLIK",
    question: "FSP veya FaMed sınavım yaklaşıyor ve hazır olup olmadığımı bilmek istiyorum.",
    title: "Sınav yaklaştıkça uygulama, yeni materyalden daha önemli hale gelir.",
    text: "Jetzt zählt nicht nur, wie viel Sie gelernt haben. Entscheidend wird, ob Sie unter Zeitdruck strukturiert sprechen, relevante Informationen erkennen und angemessen reagieren können.",
    next: "Prüfungsnah trainieren → Feedback bekommen → letzte Unsicherheiten gezielt bearbeiten",
  },
];

const questions = [
  {
    q: "Ich bin fachlich sicher als Zahnärztin oder Zahnarzt. Warum brauche ich trotzdem spezielle Prüfungsvorbereitung?",
    a: "Weil die Herausforderung nicht Ihr zahnmedizinisches Fachwissen allein ist. Sie müssen dieses Wissen in einer fremden Sprache strukturiert erklären, erfragen, dokumentieren und präsentieren. Genau diese Verbindung wird trainiert.",
  },
  {
    q: "Woher weiß ich, ob ich eher FSP- oder FaMed-Vorbereitung brauche?",
    a: "Das hängt von Ihrer konkreten Prüfung und Ihrem aktuellen Stand ab. Der Zahnmedizin-Kurs verbindet relevante sprachliche Kommunikationsbereiche. Wenn Sie uns Ihre Prüfungssituation nennen, kann zuerst geklärt werden, welcher Schwerpunkt für Sie wichtig ist.",
  },
  {
    q: "Ich verstehe Patienten gut, aber beim Antworten suche ich ständig nach Wörtern. Ist das ein Problem?",
    a: "Das ist ein typischer Punkt, an dem aktives Training wichtig wird. Verstehen und spontan formulieren sind unterschiedliche Fähigkeiten. Ziel ist deshalb nicht nur mehr Wortschatz, sondern schnellerer und strukturierter Zugriff auf die Sprache.",
  },
  {
    q: "Was, wenn ich während einer Simulation viele Fehler mache?",
    a: "Dann erfüllt die Simulation genau ihren Zweck. Fehler vor der echten Prüfung sind wertvoll, wenn sie sichtbar machen, woran Sie anschließend gezielt arbeiten sollten. Eine Simulation ist Training und Diagnose – kein finales Urteil.",
  },
  {
    q: "Ich habe schon viel alleine gelernt. Brauche ich wirklich noch einen Intensivkurs?",
    a: "Nicht automatisch. Entscheidend ist, was heute noch fehlt. Wenn Inhalte bereits sitzen und Sie hauptsächlich realistische Prüfungspraxis benötigen, können Simulationen ausreichen. Wenn Kommunikation, Struktur oder Fachsprache noch instabil sind, kann der Intensivkurs sinnvoller sein.",
  },
  {
    q: "Was passiert, wenn ich Libelle jetzt über WhatsApp kontaktiere?",
    a: "Sie müssen noch nichts buchen. Schreiben Sie kurz, welche Prüfung Sie vorbereiten, wie Ihr aktueller Sprachstand ist und wobei Sie sich unsicher fühlen. Danach kann zuerst der passende nächste Schritt eingeordnet werden.",
  },
];

export default function ZahnConversion() {
  const [selected, setSelected] = useState("communication");
  const [open, setOpen] = useState<number | null>(0);

  const current =
    situations.find((item) => item.id === selected) ?? situations[1];

  return (
    <>
      <section className="bg-[#17131c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              EN ÇOK NEREDE ZORLANIYORSUNUZ?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Mesleki olarak hazır olmak, dil açısından da sınava hazır olduğunuz anlamına gelmez.
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
                        : "border-white/10 bg-white/[.06] text-white hover:bg-white/[.10]"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        active
                          ? "bg-[#31175B] text-white"
                          : "bg-white/10 text-[#58ECF1]"
                      }`}>
                        {item.number}
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
                ŞİMDİ NE ÖNEMLİ?
              </div>

              <h3 className="mt-5 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">
                {current.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-black/55">
                {current.text}
              </p>

              <div className="mt-8 rounded-[1.6rem] bg-white p-6">
                <div className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                  MANTIKLI YOL
                </div>

                <p className="mt-3 font-medium leading-7">
                  {current.next}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(
                    `Hallo, ich bereite mich im Bereich Zahnmedizin vor. Meine aktuelle Situation: ${current.question} Bitte helfen Sie mir einzuschätzen, welcher nächste Schritt sinnvoll ist. Quelle: ZAHN-DECISION`
                  )}
                  className="rounded-full bg-[#31175B] px-6 py-3.5 text-center text-sm font-semibold text-white"
                >
                  Durumumu değerlendirelim
                </a>

                <Link
                  href="/tr/simulationen"
                  className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-center text-sm font-semibold"
                >
                  Simülasyonları incele
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              KARAR VERMEDEN ÖNCE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              En önemli sorular kurs açıklamasında yazmaz.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Asıl önemli olan hangi alanlarda kendinize güvendiğiniz ve konuşma ya da sınav baskısı altında hangi noktaların hâlâ çalışmadığıdır.
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
                      ? "border-[#31175B]/15 bg-[#f7f5f9]"
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

                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                      active
                        ? "rotate-45 bg-[#31175B] text-white"
                        : "bg-[#f3eff7] text-[#31175B]"
                    }`}>
                      +
                    </span>
                  </button>

                  <div className={`grid transition-all duration-500 ${
                    active
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}>
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
