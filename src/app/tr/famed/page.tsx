import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import FacultyTrustSection from "@/components/FacultyTrustSection";
import EditorialStorySection from "@/components/EditorialStorySection";
import FamedConversion from "@/components/tr/FamedConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FaMed Yoğun Kursu | Libelle Academy",
  description:
    "6 haftalık FaMed hazırlığı: 54 ders saati, Pelexa üzerinden Blended Learning, küçük gruplar ve 6 sınav simülasyonu.",
};

const mainMessage =
  "Merhaba, 600 €'luk FaMed Yoğun Kursu ile ilgileniyorum. Yeni grup ve mevcut kontenjan hakkında bilgi alabilir miyim? Kaynak: FAMED-LANDING";

const consultationMessage =
  "Merhaba, FaMed sınavına hazırlanıyorum. Yoğun kursun mevcut seviyeme uygun olup olmadığını öğrenmek istiyorum. Kaynak: FAMED-BERATUNG";

const outcomes = [
  {
    number: "01",
    title: "Anamnezi yapılandırılmış şekilde yürütün",
    text: "Medikal bilgileri sistematik şekilde sorgulayın ve hasta görüşmesini dil açısından daha güvenli yürütün.",
  },
  {
    number: "02",
    title: "Hastayı anlaşılır şekilde bilgilendirin",
    text: "Medikal durumları açık, yapılandırılmış ve hastanın anlayabileceği şekilde açıklayın.",
  },
  {
    number: "03",
    title: "Dokümantasyonu hedefli çalışın",
    text: "Görüşmedeki önemli bilgileri düzenli şekilde kaydedin ve yazılı dokümantasyona aktarın.",
  },
  {
    number: "04",
    title: "Hasta vakalarını güvenle sunun",
    text: "Vakaları yapılandırılmış şekilde sunun ve medikal bağlantıları anlaşılır biçimde aktarın.",
  },
];

const program = [
  "FaMed sınav formatı",
  "Anamnez",
  "Hasta bilgilendirmesi",
  "Hasta sunumu",
  "Dokümantasyon",
  "sınav simülasyonları",
];

const phases = [
  {
    number: "01",
    eyebrow: "1–4. HAFTALAR",
    title: "Dil ve sınav yapısını geliştirin",
    text: "Haftada iki online canlı ders günü, Pelexa üzerinden Blended Learning ve bireysel simülasyon çalışmalarıyla desteklenir.",
  },
  {
    number: "02",
    eyebrow: "5–6. HAFTALAR",
    title: "Sınav koşullarında simülasyon yapın",
    text: "Son aşamada yoğun FaMed sınav simülasyonlarına odaklanılır.",
  },
  {
    number: "03",
    eyebrow: "DERS SONRASI",
    title: "Materyallere erişmeye devam edin",
    text: "Bu kayıtlara parkur boyunca ve parkur bitiminden sonra bir ay daha Pelexa üzerinden erişebilirsiniz.",
  },
];

const faqs = [
  ["FaMed Yoğun Kursu ne kadar sürüyor?", "Kurs 6 hafta sürer."],
  [
    "Kurs toplam kaç ders saatinden oluşuyor?",
    "Program toplam 54 ders saati içerir.",
  ],
  [
    "Gruplar kaç kişilik?",
    "Kurslar 6–8 kişilik küçük gruplarda yürütülür.",
  ],
  [
    "Sınav simülasyonları dahil mi?",
    "Evet. Programda toplam 6 FaMed sınav simülasyonu bulunmaktadır.",
  ],
  [
    "Hangi dil seviyesine ihtiyacım var?",
    "FaMed sınavı için medikal iletişim, sınav formatı ve gerçekçi simülasyonları birlikte çalışın.",
  ],
  [
    "Ders kayıtlarını daha sonra izleyebilir miyim?",
    "Evet. Bu kayıtlara parkur boyunca ve parkur bitiminden sonra bir ay daha Pelexa üzerinden erişebilirsiniz.",
  ],
];

export default function FamedPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[720px] lg:grid-cols-[1.03fr_.97fr] lg:px-8">

          <div>
            <Link
              href="/tr/pruefungsvorbereitung"
              className="text-sm font-semibold text-[#17666a]"
            >
              ← Sınav Hazırlığı
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[.18em] text-[#17666a]">
              FAMED · YOĞUN KURS
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              FaMed formatını yalnızca öğrenmeyin. Sınav koşullarında uygulayın.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Medikal iletişim, anamnez, hasta bilgilendirmesi, dokümantasyon, hasta sunumu ve FaMed sınav formatına yapılandırılmış hazırlık.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "6 hafta",
                "54 ders saati",
                "6 FaMed simülasyonu",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#58ECF1] bg-white px-5 py-3 text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(mainMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Kontenjan ve yeni grubu sor
              </a>

              <a
                href="#kurs"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Kursu incele
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-12 -top-12 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                6 SİMÜLASYON
              </div>
              <div className="mt-1 text-sm font-semibold">
                Öğrenmeden sınav görüşmesine
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-48px] left-12 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                CANLI + DİJİTAL
              </div>
              <div className="mt-1 text-sm font-semibold">
                Dersler arasında Pelexa desteği
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.18)] sm:p-7">
              <div className="rounded-[2.2rem] bg-[#f3eff7] p-6 sm:p-8">

              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                    YOĞUN KURSUNUZ
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    FaMed
                  </div>
                </div>

                <span className="rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold">
                  6 hafta
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    FİYAT
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    600 €
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    SİMÜLASYONLAR
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    6
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  "54 ders saati",
                  "6–8 kişilik küçük gruplar",
                  "Pelexa üzerinden Harmanlanmış Öğrenme",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-5 py-4 text-sm font-medium"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-[#31175B] p-5 text-white">
                <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                  ÖN KOŞUL
                </div>

                <p className="mt-2 leading-7 text-white/75">
                  FaMed sınavına hazırlanan ve en az B2 dil sertifikasına sahip doktorlar için.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                6 SİMÜLASYON
              </div>
              <div className="mt-1 text-xs font-semibold">
                Öğrenmeden sınav görüşmesine
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                CANLI + DİJİTAL
              </div>
              <div className="mt-1 text-xs font-semibold">
                Dersler arasında Pelexa desteği
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      <FacultyTrustSection lang="tr" variant="famed" />

      {/* PHOTO-STORY-FAMED */}
      <EditorialStorySection
        eyebrow="FAMED UYGULAMADA"
        title="Medikal bilginin Almanca olarak da güvenle kullanılabilmesi gerekir."
        text="FaMed yalnızca medikal bilgiyi değil, bu bilgiyi ne kadar güvenli açıkladığınızı, yapılandırdığınızı ve profesyonel iletişimde kullanabildiğinizi de değerlendirir."
        image="/images/famed-medical-communication.jpg"
        alt="Sağlık profesyoneli ve hasta arasında medikal görüşme"
        chip="FAMED · İLETİŞİM · UYGULAMA"
        reverse
      />

      <section id="kurs" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            NELERİ ÇALIŞACAKSINIZ?
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Tek tek görevleri ezberlemeyin. Medikal durumlara aktif şekilde yanıt verin.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Hazırlık, FaMed sınavındaki temel iletişim görevlerini bütünlüklü bir çalışma sürecinde bir araya getirir.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {outcomes.map((item) => (
            <article
              key={item.number}
              className="rounded-[2rem] border border-black/5 bg-[#f7f9fb] p-7 sm:p-8"
            >
              <div className="text-xs font-bold text-[#17666a]">
                {item.number}
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.78fr_1.22fr] lg:px-8">

          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              DERS İÇERİĞİ
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              FaMed hazırlığınızın temel alanları.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Sınav formatından simülasyonlara kadar tüm alanlar birbiriyle bağlantılı şekilde çalışılır.
            </p>
          </div>

          <div className="space-y-3">
            {program.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 rounded-[1.7rem] bg-white p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#31175B] text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-lg font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            6 HAFTA · NET YAPI
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Önce hazırlanın. Ardından sınav koşullarında uygulayın.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="rounded-[2.2rem] border border-black/5 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,.04)]"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-sm font-bold text-[#31175B]">
                  {phase.number}
                </span>

                <span className="text-xs font-bold tracking-[.15em] text-[#17666a]">
                  {phase.eyebrow}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold leading-8">
                {phase.title}
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                {phase.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#31175B] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8">

          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              CANLI DERSTEN DAHA FAZLASI
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Canlı ders bittiğinde öğrenme süreci sona ermez.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Canlı dersler, Pelexa öğrenme aşamaları, bireysel simülasyon çalışmaları ve sınav simülasyonları birbirini tamamlar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "54 ders saati",
                "Sınavda gerekli iletişim alanlarının yapılandırılmış şekilde geliştirilmesi.",
              ],
              [
                "Pelexa",
                "Dijital öğrenme aşamaları ve bireysel simülasyon çalışmaları canlı dersleri destekler.",
              ],
              [
                "6–8 kişi",
                "Küçük gruplar aktif dil pratiği için daha fazla alan sağlar.",
              ],
              [
                "6 simülasyon",
                "Son aşama, gerçek sınava yakın uygulamalara odaklanır.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.8rem] bg-white/10 p-6"
              >
                <h3 className="text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-24 md:grid-cols-2 lg:px-8">

          <div className="rounded-[2.3rem] bg-white p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              KİMLER İÇİN?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              FaMed sınavına hazırlanan doktorlar için.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              FaMed sınavına hazırlanan ve medikal Almancasını sınav odaklı, yapılandırılmış şekilde geliştirmek isteyen hekimler için.
            </p>
          </div>

          <div className="rounded-[2.3rem] bg-[#D2ECFF]/55 p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              ÖN KOŞUL
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              En az B2 – ve mevcut seviyenize uygun bir hazırlık.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              En az B2 dil sertifikası gereklidir. Yoğun kursun sizin için doğru sonraki adım olup olmadığından emin değilseniz kayıt öncesinde birlikte değerlendirebiliriz.
            </p>

            <a
              href={whatsappLink(consultationMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Ücretsiz yönlendirme alın
            </a>
          </div>

        </div>
      </section>

      <section className="bg-[#31175B] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
            ÖNERİLEN ÖĞRENME YOLU
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "İleri Seviye / İnce Ayar",
              "FaMed Yoğun Kursu",
              "Simülasyonlar",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-[1.6rem] bg-white/10 p-6"
              >
                <div className="text-xs text-white/35">
                  ADIM {index + 1}
                </div>

                <div className="mt-3 text-xl font-semibold">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8">

          <div className="text-center">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              SIK SORULAN SORULAR
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Kayıt öncesinde sizi nelerin beklediğini bilin.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map(([question, answer]) => (
              <div
                key={question}
                className="rounded-[1.8rem] bg-white p-7"
              >
                <h3 className="text-xl font-semibold">
                  {question}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-8 text-white md:grid-cols-[1fr_auto] md:items-center sm:p-12">

          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              SONRAKİ ADIMINIZ
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              FaMed sınavınıza yapılandırılmış şekilde hazırlanın.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Yeni grup, mevcut kontenjan ve güncel kurs bilgilerini WhatsApp üzerinden öğrenin.
            </p>
          </div>

          <a
            href={whatsappLink(mainMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            Kontenjan ve yeni grubu sor
          </a>

        </div>
      </section>

    </main>
  );
}
