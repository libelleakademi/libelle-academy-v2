"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

const situations = [
  {
    id: "language",
    number: "01",
    label: "DİL TEMELİ",
    question: "Almancam FSP için henüz yeterince güvenli hissettirmiyor.",
    title: "Yalnızca sınav formatına çok erken odaklanmayın.",
    text: "Tıbbi bir konuşmada hâlâ kelimeleri veya yapıları aramanız gerekiyorsa, öncelikle dilsel temel çok önemli olabilir. Eğer iletişim çok fazla zihinsel enerji gerektiriyorsa, inceleme stratejilerinin pek faydası olmaz.",
    next: "Dil seviyesini değerlendir → eksikleri belirle → FSP'ye hedefli hazırlan",
  },
  {
    id: "application",
    number: "02",
    label: "UYGULAMA",
    question: "Teoriyi biliyorum ama konuşma sırasında kilitleniyorum.",
    title: "Bilginizi konuşma baskısı altında da kullanabilmelisiniz.",
    text: "Pek çok güvensizlik ancak aynı anda dinlemeniz, yapılandırmanız, formüle etmeniz ve tıbbi olarak yanıt vermeniz gerektiğinde ortaya çıkar. İşte tam da bu yüzden hazırlık okumak ve ezberlemekle bitmemeli.",
    next: "Yapıları birleştirin → aktif konuşun → anamnez, dokümantasyon ve sunumu birleştirin",
  },
  {
    id: "exam",
    number: "03",
    label: "SINAVA YAKINLIK",
    question: "Sınavım yaklaşıyor ve hazır olup olmadığımdan emin değilim.",
    title: "Artık önemli olan yalnızca ne bildiğiniz değil.",
    text: "Sınava kısa bir süre kala, gerçekçi bir durumda bilginize ne kadar güvenilir bir şekilde ulaşabileceğiniz daha da önemli hale geliyor. Simülasyonlar, güvenliğin nerede mevcut olduğunu ve neyin özel olarak iyileştirilmesi gerektiğini açıkça ortaya koyuyor.",
    next: "Sınav koşullarında uygula → geri bildirim al → kalan eksikleri hedefli geliştir",
  },
];

const questions = [
  {
    q: "Yoğun kursa başlamadan önce medikal Almancayı çok iyi konuşmam gerekiyor mu?",
    a: "Dersin amacı sistematik olarak tıbbi iletişimi öğretmektir. Ancak önemli olan, genel Almanca seviyenizin anlamlı bir katılımı mümkün kılmasıdır. Emin değilseniz, mevcut durumunuzu önceden bize bildirebilirsiniz.",
  },
  {
    q: "Daha önce FSP kursu aldım. Başka bir kursun faydası olur mu?",
    a: "Bu, şu ana kadar aldığınız ders sayısına değil, bugün hala belirsiz olan şeylere bağlıdır. İçeriği zaten biliyorsanız ancak anamnez, dokümantasyon veya hasta sunumları konuşma baskısı altında henüz güvenilir bir şekilde çalışmıyorsa, hedefe yönelik uygulama eğitimi yine de faydalı olabilir.",
  },
  {
    q: "Simülasyonda kötü performans gösterirsem ne olur?",
    a: "Simülasyon sınav şansınız hakkında nihai bir karar değildir. Amacı, gerçek sınavdan önce eksikleri görünür hale getirmektir. Geri bildirim sonraki hazırlığınızı daha hedefli yapmanızı sağlar.",
  },
  {
    q: "Yoğun kursa mı yoksa yalnızca simülasyonlara mı ihtiyacım olduğunu nasıl anlarım?",
    a: "Temel dil veya yapı sorunları varsa tam hazırlık kursu daha uygun olabilir. İçerik zaten oturduysa ve esas olarak sınav koşullarındaki performansınızı test etmek istiyorsanız simülasyonlar daha uygun olabilir.",
  },
  {
    q: "Sınavda bir anda hiçbir şey söyleyememekten korkuyorum. Bu çalışılabilir mi?",
    a: "Sınav stresi tamamen ortadan kaldırılamaz ancak sınav ortamını daha tanıdık hale getirebilirsiniz. Tekrarlanan uygulama, net konuşma yapıları ve gerçekçi simülasyonlar bilgiyi daha hızlı kullanmanıza yardımcı olur.",
  },
  {
    q: "Şimdi WhatsApp'tan yazarsam ne olur?",
    a: "Henüz kayıt kararı vermiş olmanız gerekmez. Mevcut seviyenizi, varsa sınav tarihinizi ve zorlandığınız noktaları kısaca yazın. Ardından sizin için en mantıklı sonraki adımı belirleyebiliriz.",
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
              BUGÜN HANGİ AŞAMADASINIZ?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Her FSP adayının bir sonraki ihtiyacı aynı değildir.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
              Önemli olan yalnızca sınavınızın ne zaman olduğu değil; bugün hangi noktada zorlandığınızdır.
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
                      `Merhaba FSP Tıp sınavına hazırlanıyorum. Şu anki durumum: ${current.question} Lütfen bir sonraki adımın hangisinin anlamlı olduğunu değerlendirmeme yardım edin. Kaynak: FSP-DECISION`
                    )}
                    target="_blank"
                    rel="noreferrer"
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              KARAR VERMEDEN ÖNCE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              En önemli sorular genellikle ders programında yazmaz.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Kayıt öncesinde asıl mesele çoğu zaman ders saati değildir. Önemli olan bu yolun mevcut durumunuza gerçekten uygun olup olmadığıdır.
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
