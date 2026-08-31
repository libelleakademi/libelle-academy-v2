import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import SimulationConversion from "@/components/tr/SimulationConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sınav Simülasyonları | Libelle Academy",
  description:
    "FSP ve FaMed hazırlığı için kişisel geri bildirim içeren gerçekçi sınav simülasyonları.",
};

const mainMessage =
  "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.";

const consultationMessage =
  "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.";

const outcomes = [
  {
    number: "01",
    title: "Sınav ortamını gerçekçi şekilde deneyimleyin",
    text: "Yalnızca tek tek görevleri değil, bütünlüklü bir sınav durumunu çalışın.",
  },
  {
    number: "02",
    title: "Eksiklerinizi net şekilde görün",
    text: "İletişim, yapı ve dil güvenliğinizde hangi noktaların geliştirilmesi gerektiğini görün.",
  },
  {
    number: "03",
    title: "Kişisel geri bildirim alın",
    text: "Simülasyon sonrasında performansınız ve sonraki çalışma adımlarınız hakkında hedefli geri bildirim alın.",
  },
  {
    number: "04",
    title: "Hedefli şekilde çalışmaya devam edin",
    text: "Genel çalışmaya devam etmek yerine hâlâ geliştirilmesi gereken alanlara odaklanın.",
  },
];

const process = [
  {
    number: "01",
    eyebrow: "SİMÜLE ET",
    title: "Sınav durumunu uygulayın",
    text: "Gerçek sınava yakın bir durum üzerinde çalışın ve medikal iletişim becerilerinizi uygulayın.",
  },
  {
    number: "02",
    eyebrow: "FSP · FAMED · DİŞ HEKİMLİĞİ",
    title: "Performansı birlikte değerlendirin",
    text: "İletişim, yapı, anlaşılabilirlik ve dil güvenliği hedefli şekilde değerlendirilir.",
  },
  {
    number: "03",
    eyebrow: "GELİŞTİR",
    title: "Sonraki çalışma adımlarını belirleyin",
    text: "Geri bildirim sayesinde sonraki sınav hazırlığınız için net bir çalışma odağı belirlenir.",
  },
];

const faqs = [
  [
    "Tek bir simülasyon satın alabilir miyim?",
    "Evet. Sınav simülasyonları tek tek satın alınabilir.",
  ],
  [
    "Birden fazla simülasyon içeren paket var mı?",
    "Evet. Tekli simülasyonların yanında paket seçenekleri de bulunmaktadır. Güncel seçenekleri WhatsApp üzerinden öğrenebilirsiniz.",
  ],
  [
    "Bir simülasyonun fiyatı nedir?",
    "Güncel simülasyon fiyatları 75 €'dan başlamaktadır.",
  ],
  [
    "Simülasyon sonrasında geri bildirim alıyor muyum?",
    "Evet. Kişisel geri bildirim simülasyonun temel bir parçasıdır.",
  ],
  [
    "Simülasyon ne zaman faydalıdır?",
    "Mevcut sınav seviyenizi gerçekçi şekilde test etmek ve sınavdan önce eksiklerinizi görmek istiyorsanız özellikle faydalıdır.",
  ],
  [
    "Uygun tarihleri nasıl öğrenebilirim?",
    "Bize WhatsApp üzerinden yazın. Size güncel uygun tarihleri ve seçenekleri iletelim.",
  ],
];

export default function SimülasyonlarPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
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
              SINAV HAZIRLIĞI · SİMÜLASYONLAR
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Gerçek sınavdan önce sınavı deneyimleyin.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Gerçekçi sınav durumları ve kişisel geri bildirim sayesinde eksiklerinizi sınav günü değil, önceden görün.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "75 €'dan başlayan fiyatlarla",
                "Tekli veya paket olarak",
                "Kişisel geri bildirim",
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
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#4B238B]"
              >
                Uygun simülasyon tarihini sor
              </a>

              <a
                href="#ablauf"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Süreci incele
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-12 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                GERÇEKÇİ TEST
              </div>
              <div className="mt-1 text-sm font-semibold">
                Bilginizi baskı altında test edin
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-48px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                GERİ BİLDİRİM
              </div>
              <div className="mt-1 text-sm font-semibold">
                Bir sonraki odağı netleştirin
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.18)] sm:p-7">
              <div className="rounded-[2.2rem] bg-[#f3eff7] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                    SINAV HAZIRLIĞINIZ
                  </div>

                  <div className="mt-2 text-3xl font-semibold">
                    Sınav Simülasyonu
                  </div>
                </div>

                <span className="rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold">
                  GERÇEKÇİ
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    FİYAT
                  </div>

                  <div className="mt-2 text-3xl font-semibold">
                    75 €'dan başlayan fiyatlarla
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    REZERVASYON
                  </div>

                  <div className="mt-2 text-xl font-semibold">
                    Tekli / Paket
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  "Gerçekçi sınav ortamı",
                  "Kişisel geri bildirim",
                  "Hedefli hata analizi",
                  "Net çalışma odağı",
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
                  HEDEF
                </div>

                <p className="mt-2 leading-7 text-white/75">
                  Gerçek sınavdan önce hangi alanlarda hazır olduğunuzu ve hangi noktaların hâlâ geliştirilmesi gerektiğini görün.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                GERÇEKÇİ TEST
              </div>
              <div className="mt-1 text-xs font-semibold">
                Bilginizi baskı altında test edin
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                GERİ BİLDİRİM
              </div>
              <div className="mt-1 text-xs font-semibold">
                Bir sonraki odağı netleştirin
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            NEDEN SİMÜLASYON?
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Hazır olup olmadığınızı tahmin etmeyin. Test edin.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Bir simülasyon, medikal iletişiminizi gerçek sınava yakın koşullarda ne kadar güvenli kullanabildiğinizi gösterir.
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

      {/* VALUE */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              SINAVA YAKIN HAZIRLIK
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Bilgi tek başına baskı altında nasıl iletişim kuracağınızı göstermez.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Ancak bütünlüklü bir simülasyonda dil, yapı, medikal iletişim ve tepki verme becerilerinin birlikte nasıl çalıştığını görebilirsiniz.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Gerçekçi sınav durumu",
                "Tek tek görevler değil, gerçek sınava yakın bütünlüklü bir durum.",
              ],
              [
                "Kişisel geri bildirim",
                "Hangi alanların iyi çalıştığını ve hangi noktalarda hâlâ eksik olduğunuzu net şekilde görün.",
              ],
              [
                "Hedefli çalışma odağı",
                "Sonraki hazırlığınızı gerçekten geliştirilmesi gereken alanlara yönlendirebilirsiniz.",
              ],
              [
                "Tekrarlanabilir",
                "İhtiyacınıza göre tekli veya birden fazla simülasyonu bir araya getirebilirsiniz.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.8rem] bg-white/10 p-7"
              >
                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="mt-4 leading-7 text-white/55">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO-STORY-SIMULATION */}
      <EditorialStorySection
        eyebrow="TESTTEN SONRAKİ ADIMA"
        title="İyi bir simülasyon son cümleyle bitmez."
        text="Önemli olan sonrasında neyin görünür hale geldiğidir: Yapıyı nerede kaybedersiniz? Baskı altında hangi formülasyonlar eksik? Ve gerçek testten önce özellikle neyi geliştirmelisiniz?"
        image="/images/medical-path-doctor-explanation.jpg"
        alt="Medikal notlar ve geri bildirim"
        chip="SİMÜLE ET → ANALİZ ET → GELİŞTİR"
        reverse
        dark
      />

      {/* PROCESS */}
      <section
        id="ablauf"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            SÜREÇ NASIL İLERLİYOR?
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Benzetmek. Analiz edin. Hedefli şekilde çalışmaya devam edin.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {process.map((step) => (
            <article
              key={step.number}
              className="rounded-[2.2rem] border border-black/5 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,.04)]"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-sm font-bold text-[#31175B]">
                  {step.number}
                </span>

                <span className="text-xs font-bold tracking-[.15em] text-[#17666a]">
                  {step.eyebrow}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold leading-8">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* WHO */}
      <section className="bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-24 md:grid-cols-2 lg:px-8">
          <div className="rounded-[2.5rem] bg-[#D2ECFF]/55 p-9 sm:p-11">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              BESONDERS SINNVOLL
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Sınav yaklaştığında.
            </h2>

            <div className="mt-7 space-y-4 text-black/60">
              <p>✓ Mevcut seviyenizi gerçekçi şekilde test etmek istiyorsanız</p>
              <p>✓ Çalışmanıza rağmen hâlâ eksikler hissediyorsanız</p>
              <p>✓ Daha fazla değil, daha hedefli çalışmak istiyorsanız</p>
              <p>✓ Sınav iletişimini pratik olarak çalışmak istiyorsanız</p>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-9 sm:p-11">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              HALA UNSICHER MI?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Hazırlığınıza hangi simülasyon uygun?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Hangi sınava hazırlandığınız hakkında bize kısaca yazın
              ve şu anda nerede durduğunuz. Seçmenize yardımcı olacağız.
            </p>

            <a
              href={whatsappLink(consultationMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
            >
              FSP · FAMED · DİŞ HEKİMLİĞİ
            </a>
          </div>
        </div>
      </section>

      <SimulationConversion />

      {/* FINAL CTA */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-8 text-white sm:p-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              SONRAKİ ADIMINIZ
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Gerçek sınavdan önce hangi noktaların eksik olduğunu görün.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Bir sonraki ücretsiz simülasyon tarihi ve saatini sorun
              şu anda mevcut rezervasyon seçenekleri.
            </p>
          </div>

          <a
            href={whatsappLink(mainMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            Simülasyon hakkında bilgi al
          </a>
        </div>
      </section>
    </main>
  );
}
