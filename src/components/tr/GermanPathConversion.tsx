"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const situations = [
  {
    id: "beginner",
    label: "YENİ BAŞLIYORUM",
    question: "Çok az Almanca biliyorum ve baştan sağlam bir temel oluşturmak istiyorum.",
    title: "Bu durumda çok fazla materyalden daha önemli olan net bir öğrenme yoludur.",
    text: "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
    next: "A1'i oluşturun → A2'i güçlendirin → B1'i genişletin → B2'i güvenle kullanın",
  },
  {
    id: "existing",
    label: "ÖN BİLGİM VAR",
    question: "Daha önce Almanca öğrendim ancak hangi seviyeden başlamam gerektiğini bilmiyorum.",
    title: "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
    text: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
    next: "Durumunuzu değerlendirin → doğru seviyeyi seçin → oradan tutarlı bir şekilde devam edin",
  },
  {
    id: "stuck",
    label: "İLERLEYEMİYORUM",
    question: "Sürekli çalışıyorum ama Almancam düzenli şekilde ilerlemiyor.",
    title: "Sorun motivasyonunuz değil, net bir öğrenme yolunun eksikliği olabilir.",
    text: "Yöntemler, dersler ve materyaller sürekli değiştiğinde her zaman yeniden başlarsınız. Uyumlu bir yol, bu yeniden başlatmaları azaltır ve ilerlemenin izlenmesini kolaylaştırır.",
    next: "Boşlukları tanımlayın → sırayı temizleyin → bir sonraki seviyeye kadar sürekli",
  },
];

const faq = [
  [
    "Daha önce Almanca öğrenip çoğunu unuttuysam ne olur?",
    "Daha sonra otomatik olarak tam bir yeniden başlatma gerekli değildir. Önemli olan hangi temellerin hala istikrarlı olduğudur. Mantıklı bir sınıflandırma, zaten güvenli olan içeriklere gereksiz zaman harcamanızı önler.",
  ],
  [
    "Bugün B2'ye kadar tüm öğrenme yoluna karar vermek zorunda mıyım?",
    "Hayır. Bireysel etaplara da rezervasyon yaptırabilirsiniz. Genel öğrenme yolunun avantajı, sonraki adımlarınızın nasıl görünebileceğini zaten bilmenizdir.",
  ],
  [
    "Daha önce birkaç kursa başlayıp bıraktım. Bu kez ne farklı olacak?",
    "Açık bir öğrenme yolu işi sizin yerinize yapmaz. Ancak kararları azaltır ve yeniden başlar: Nerede durduğunuzu, hangi seviyenin onu takip ettiğini ve her seviyenin sizi neye hazırladığını bilirsiniz.",
  ],
  [
    "Bir sonraki seviyeye gerçekten hazır olduğumu nasıl anlarım?",
    "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
  ],
  [
    "Libelle'ye WhatsApp'tan yazarsam ne olur?",
    "Basitçe önceki Almanca bilginizi ve hedefinizi belirtebilirsiniz. Daha sonra öncelikle hangi düzeyin anlamlı olduğunu netleştirebilirsiniz. Önceden nihai bir rezervasyon kararı vermenize gerek yoktur.",
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
              NEREDEN BAŞLIYORSUNUZ?
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Herkesin A1'e ihtiyacı yoktur. Ama herkesin doğru bir sonraki adıma ihtiyacı vardır.
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
                ÖNERİLEN YOL
              </div>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">
                {current.title}
              </h3>
              <p className="mt-6 text-lg leading-8 text-black/55">
                {current.text}
              </p>

              <div className="mt-8 rounded-[1.6rem] bg-white p-6">
                <div className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                  ÖĞRENME YOLUNUZ
                </div>
                <p className="mt-3 font-medium leading-7">{current.next}</p>
              </div>

              <a
                href={whatsappLink(
                  `Merhaba, Almanca öğrenme yolu ile ilgileniyorum. Durumum: ${current.question} Doğru şekilde başlamama yardım edebilir misin? Kaynak: A1-B2-DECISION`
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3.5 text-center text-sm font-semibold text-white"
              >
                Doğru başlangıç seviyesini bul
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              BAŞLAMADAN ÖNCE
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              En önemli karar ne kadar hızlı başladığınız değildir.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/55">
              Asıl önemli olan doğru seviyeden başlayıp sonrasında sürdürebileceğiniz net bir yolunuzun olmasıdır.
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
