"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

const paths = [
  {
    id: "german",
    label: "ALMANCA GELİŞTİR",
    question: "Almancamı B2 seviyesine kadar geliştirmek istiyorum.",
    title: "Almanca A1–B2",
    text: "Hedefiniz B2 ise, dört rastgele kursa değil, her seviyenin bir öncekinin üzerine inşa edildiği net bir dil yoluna ihtiyacınız vardır.",
    next: "Mevcut seviye → uygun seviye → adım adım B2'e kadar",
    href: "/tr/pakete/deutsch-a1-b2",
    cta: "A1–B2 Öğrenme yolunu görüntüle",
  },
  {
    id: "exam",
    label: "SINAVA HAZIRLAN",
    question: "FSP, FaMed veya diş hekimliği sınavına hazırlanıyorum.",
    title: "Medikal Sınav Hazırlığı",
    text: "Burada tıbbi kelimeleri bilmek yeterli değildir. Anamnez, konuşma, dokümantasyon ve muayene durumlarında dil mevcut olmalıdır.",
    next: "Testi belirleyin → özel olarak hazırlayın → gerçekçi bir şekilde simüle edin",
    href: "/tr/pruefungsvorbereitung",
    cta: "Bir sınav rotası bulun",
  },
  {
    id: "simulation",
    label: "SINAVA NEREDEYSE HAZIR",
    question: "Hazırlığımı yaptım ve kendimi gerçekçi şekilde test etmek istiyorum.",
    title: "Sınav Simülasyonları",
    text: "Sınavdan kısa bir süre önce daha fazla teori her zaman çözüm değildir. Artık zaman baskısı altında gerçekte neye erişilebileceği hayati önem taşıyor.",
    next: "Simülasyon → bireysel geri bildirim → hedeflenen yeniden keskinleştirme",
    href: "/tr/simulationen",
    cta: "Simülasyonları görüntüle",
  },
];

const faq = [
  [
    "Hangi kursun bana uygun olduğunu bile bilmiyorum.",
    "Bizimle iletişime geçmeden önce bunu bilmenize gerek yok. Mevcut seviyeniz, hedefiniz ve varsa sınavınız hakkında bize yazın. İlk adım oryantasyondur, hemen rezervasyon yapmak değil.",
  ],
  [
    "Almancam henüz tıbbi hazırlık için yeterli değilse ne olur?",
    "O halde öncelikle dilsel temeli sağlamlaştırmak daha mantıklı olabilir. Sınav prosedürlerini çok erken eğitmek genellikle güvenlik yerine ek belirsizlik yaratır.",
  ],
  [
    "Zaten çok şey öğrendim. Neden hâlâ kendimi hazır hissetmiyorum?",
    "Daha fazla malzeme otomatik olarak daha fazla güvenlik anlamına gelmez. Önemli olan dili aktif olarak kullanıp kullanmadığınız, geri bildirim alıp almadığınız ve bir sonraki adımda hangi zayıf noktanın eğitilmesi gerektiğini tam olarak bilip bilmediğinizdir.",
  ],
  [
    "Ya gerçek sınavda aniden bloke edersem?",
    "İşte tam da bu yüzden gerçekçi uygulamalar ve simülasyonlar hazırlığın bir parçası. Bilginin yalnızca mevcut olması yetmez, aynı zamanda baskı altında da erişilebilir olması gerekir.",
  ],
  [
    "WhatsApp'e yusufçuk yazarsam ne olur?",
    "Kısaca durumunuzu anlatıyorsunuz. Daha sonra hangi adımın mantıklı olacağını birlikte göreceğiz. Hangi kursa rezervasyon yapmak istediğinize önceden karar vermiş olmanıza gerek yok.",
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
              HEDEFİNİZ NEDİR?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Bir kursla değil, hedefinizle başlayın.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
              Bu gidişat, bugün hangi seviyede olacağınıza ve bundan sonra başarıya ulaşmak istediğinize bağlıdır.
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
                SİZE UYGUN YOL
              </div>

              <h3 className="mt-5 text-3xl font-semibold">
                {current.title}
              </h3>

              <p className="mt-5 leading-8 text-black/55">
                {current.text}
              </p>

              <div className="mt-7 rounded-[1.5rem] bg-white p-5">
                <div className="text-xs font-bold text-[#17666a]">
                  MANTIKLI SONRAKİ ADIM
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
                    `Merhaba, öğrenme yolculuğumda yardıma ihtiyacım var. Hedefim: ${current.question} Kaynak: HOME-PATH`
                  )}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-semibold"
                >
                  Ücretsiz yönlendirme alın
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
              KARAR VERMEDEN ÖNCE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Belki de asıl sorunuz fiyat değildir.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Çoğunlukla önce başka bir şey gelir: Hazır mıyım? Bu kadar yeter
              Alman mı? Ya yine zaman kaybedersem?
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
