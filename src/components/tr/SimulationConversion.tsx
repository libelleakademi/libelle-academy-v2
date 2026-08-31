"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const situations = [
  {
    id: "unsure",
    number: "01",
    label: "HÂLÂ EMİN DEĞİLİM",
    question: "Çalıştım ama gerçekten hazır olup olmadığımı bilmiyorum.",
    title: "Tahmin etmeyin. Mevcut seviyenizi gerçekten görün.",
    text: "Bir simülasyon size sınav benzeri koşullar altında neyin işe yaradığını ve dilin, yapının veya tepkilerin hala belirsiz olduğu yerleri gösterir.",
    next: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
  },
  {
    id: "pressure",
    number: "02",
    label: "BASKI ALTINDA",
    question: "Çalışırken yapabiliyorum ama zaman baskısında güvenimi kaybediyorum.",
    title: "Sınav yalnızca bilgi değil, bilgiyi kullanabilme becerisi ister.",
    text: "Birkaç görev aynı anda bir araya geldiğinde durum değişir. Bu tam olarak gerçek sınav gününden önce deneyimlemeniz gereken bilgiden uygulamaya geçiştir.",
    next: "Sınav baskısını deneyimleyin → tepkileri analiz edin → rutinleri pekiştirin",
  },
  {
    id: "final",
    number: "03",
    label: "SON KONTROL",
    question: "Sınavım yakında ve artık zamanımı yanlış noktaya harcamak istemiyorum.",
    title: "Artık hazırlığınız daha hedefli olmalı.",
    text: "Sınavdan kısa bir süre önce genel olarak çalışmaya devam etmek, hangi iki veya üç noktaya gerçekten dikkat edilmesi gerektiğini bilmekten genellikle daha az değerlidir.",
    next: "Gerçekçi bir şekilde test edin → güvenlik açıklarını önceliklendirin → son aşamaya odaklanın",
  },
];

const faq = [
  [
    "Simülasyon beklediğimden kötü geçerse ne olur?",
    "O zaman önemli bir amaca hizmet etti: Gerçek sınavdan önce belirsizliği keşfettiniz. Geri bildirim daha sonra kalan öğrenme sürenizi daha spesifik olarak kullanmanıza yardımcı olur.",
  ],
  [
    "Tek bir simülasyon yeterli olur mu?",
    "Bu sizin durumunuza bağlıdır. Bir simülasyon çok iyi bir ilk gerçeklik kontrolü sağlayabilir. Birkaç belirsizlik ortaya çıkarsa veya baskı altındaki süreçleri tekrar tekrar eğitmek istiyorsanız çeşitli simülasyonlar faydalı olabilir.",
  ],
  [
    "Yoğun ders aldıysam yine de simülasyona ihtiyacım var mı?",
    "Gerçekçi sınav simülasyonu ve hedefli geri bildirim.",
  ],
  [
    "Simülasyon sırasında kötü görünmekten korkuyorum.",
    "Simülasyon tam olarak hataların olmasına izin verilen yerdir. Sizi gerçek sınav gününde olduğu gibi değerlendirmek değil, henüz üzerinde çalışmak için zaman varken belirsizlikleri görünür kılmak amaçlanıyor.",
  ],
  [
    "Şimdi WhatsApp'tan yazarsam ne olur?",
    "Bize sınavınızı ve hazırlık sürecinizde yaklaşık olarak nerede olduğunuzu anlatırsınız. Serbest tarihler ve uygun simülasyon seçeneği daha sonra tartışılabilir. Önceden son bir seçim yapmanıza gerek yoktur.",
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
              NEDEN SİMÜLASYON YAPMAK İSTİYORSUNUZ?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Simülasyon yalnızca pratik değildir. Gerçekçi bir kontroldür.
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
                SİMÜLASYONUN SİZE KAZANDIRDIĞI
              </div>

              <h3 className="mt-5 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">
                {current.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-black/55">
                {current.text}
              </p>

              <div className="mt-8 rounded-[1.6rem] bg-white p-6">
                <div className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                  SONRAKİ ADIM
                </div>
                <p className="mt-3 font-medium leading-7">{current.next}</p>
              </div>

              <a
                href={whatsappLink(
                  `Merhaba, sınav simülasyonu ile ilgileniyorum. Durumum: ${current.question} Kaynak: SIM-DECISION`
                )}
                className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3.5 text-center text-sm font-semibold text-white"
              >
                Uygun simülasyonu seç
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              REZERVASYONDAN ÖNCE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Asıl soru “Bir simülasyon ne kadar?” değildir.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Asıl önemli olan, gerçek sınavdan önce bugün eksik olan bilgiyi size sağlayıp sağlamadığıdır.
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
