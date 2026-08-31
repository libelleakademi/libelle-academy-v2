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
    text: "Tıbbi açıdan tam olarak ne söylemek istediğinizi bilseniz de dilsel açıdan bocalayabilirsiniz. O zaman hazırlık, uzmanlık bilgisini tekrarlamamalı, aksine bunu Almanca'da daha güvenli bir şekilde ifade etmenize yardımcı olmalıdır.",
    next: "Teknik dili pekiştirin → tipik konuşma yapılarını eğitin → bunları aktif olarak uygulayın",
  },
  {
    id: "communication",
    number: "02",
    label: "HASTA GÖRÜŞMESİ",
    question: "Hasta görüşmesinde yapıyı kaybediyor veya kendimden emin olamıyorum.",
    title: "İyi bir görüşme yalnızca doğru terimlerden oluşmaz.",
    text: "Anamnez, anlaşılır anlatım ve yapılandırılmış iletişimin aynı anda çalışması gerekir. Bu tam olarak dile gerçek konuşma koşulları altında gerçekten erişilip erişilemeyeceğinin netleştiği yerdir.",
    next: "Konuşmayı yapılandırma → aktif olarak formüle etme → dokümantasyon ile sunumu birleştirme",
  },
  {
    id: "exam",
    number: "03",
    label: "SINAVA YAKINLIK",
    question: "FSP veya FaMed sınavım yaklaşıyor ve hazır olup olmadığımı bilmek istiyorum.",
    title: "Sınav yaklaştıkça uygulama, yeni materyalden daha önemli hale gelir.",
    text: "Artık önemli olan sadece ne kadar öğrendiğiniz değil. Belirleyici faktör, zaman baskısı altında yapılandırılmış bir şekilde konuşup konuşamayacağınız, ilgili bilgileri tanıyıp tanıyamayacağınız ve uygun şekilde tepki verip veremeyeceğinizdir.",
    next: "Sınava yakın eğitim alın → geri bildirim alın → kalan belirsizlikler üzerinde hedefe yönelik bir şekilde çalışın",
  },
];

const questions = [
  {
    q: "Bir diş hekimi olarak mesleki açıdan kendime güveniyorum. Neden hala özel sınav hazırlığına ihtiyacım var?",
    a: "Çünkü zorluk yalnızca diş hekimliği uzmanlığınız değil. Bu bilgiyi yabancı dilde açıklamalı, sorgulamalı, belgelemeli ve yapılandırılmış bir şekilde sunmalısınız. Eğitimli olan tam olarak bu bağlantıdır.",
  },
  {
    q: "FSP veya FaMed hazırlığına ihtiyacım olup olmadığını nasıl anlarım?",
    a: "Bu, özel sınavınıza ve mevcut durumunuza bağlıdır. Diş hekimliği kursu ilgili dilsel iletişim alanlarını birleştirir. Bize sınav durumunuzu anlatırsanız öncelikle hangi odağın sizin için önemli olduğunu netleştirebiliriz.",
  },
  {
    q: "Hastaları iyi anlıyorum ama cevap verirken sürekli kelime arıyorum. Bu bir sorun mu?",
    a: "Bu, aktif eğitimin önem kazandığı tipik bir noktadır. Anlamak ve kendiliğinden formüle etmek farklı becerilerdir. Bu nedenle amaç sadece daha fazla kelime dağarcığı değil, aynı zamanda dile daha hızlı ve yapılandırılmış erişimdir.",
  },
  {
    q: "Bir simülasyon sırasında çok fazla hata yaparsam ne olur?",
    a: "O zaman simülasyon tam olarak amacını yerine getirir. Gerçek sınavdan önce yapılan hatalar, daha sonra ne üzerinde çalışmanız gerektiğini görünür kılıyorsa değerlidir. Simülasyon eğitim ve teşhistir; nihai bir karar değildir.",
  },
  {
    q: "Kendi başıma çok şey öğrendim. Gerçekten başka bir yoğun kursa ihtiyacım var mı?",
    a: "Gerçekçi sınav simülasyonu ve hedefli geri bildirim.",
  },
  {
    q: "Libelle ile şimdi WhatsApp aracılığıyla iletişime geçersem ne olur?",
    a: "Henüz rezervasyon yaptırmanıza gerek yok. Hangi sınava hazırlandığınız, mevcut dil seviyenizin ne olduğu ve nelerden emin olmadığınızı kısaca yazın. Uygun bir sonraki adım daha sonra ilk olarak sınıflandırılabilir.",
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
                    `Merhaba diş hekimliği alanında hazırlanıyorum. Şu anki durumum: ${current.question} Lütfen sonraki adımın hangisinin anlamlı olduğunu değerlendirmeme yardım edin. Kaynak: ZAHN-DECISION`
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
              Bilmeniz gereken ders budur.
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
