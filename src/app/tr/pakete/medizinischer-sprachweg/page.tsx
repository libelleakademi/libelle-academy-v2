import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Medikal Dil Yolu | Libelle Academy",
  description:
    "Medikal dil gelişiminden FSP veya FaMed hazırlığına ve gerçekçi sınav simülasyonlarına uzanan esnek bir öğrenme yolu.",
};

const mainMessage =
  "Merhaba, Medikal Dil Yolu ile ilgileniyorum. Mevcut seviyeme hangi başlangıç noktasının ve hangi hazırlık kombinasyonunun uygun olduğunu öğrenmek istiyorum. Kaynak: BUNDLE-MEDICAL-PATH";

const path = [
  {
    number: "01",
    eyebrow: "DİLİ GÜÇLENDİR",
    title: "İleri Seviye / İnce Ayar",
    text: "Sınav hazırlığına geçmeden önce medikal Almancanızı daha güvenli hale getirmeniz gerekiyorsa ilk olarak bu alana odaklanın.",
  },
  {
    number: "02",
    eyebrow: "SINAVA HAZIRLAN",
    title: "FSP veya FaMed",
    text: "Ardından medikal iletişimi ve hazırlandığınız sınavın gerekliliklerini hedefli şekilde çalışın.",
  },
  {
    number: "03",
    eyebrow: "GERÇEKÇİ TEST ET",
    title: "Simülasyonlar",
    text: "Öğrendiklerinizi gerçekçi sınav koşullarında uygulayın ve performansınız hakkında geri bildirim alın.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Size uygun başlangıç noktası",
    text: "Başlangıç noktanız, mevcut dil seviyenize ve sınav hazırlığınızın hangi aşamasında olduğunuza göre belirlenir.",
  },
  {
    number: "02",
    title: "Net bir sonraki adım",
    text: "Dil gelişimi, sınav hazırlığı ve simülasyonların birbirini nasıl tamamladığını net şekilde görün.",
  },
  {
    number: "03",
    title: "Doğru sınav yolunu seçin",
    text: "Sınav yolu herkese aynı şekilde belirlenmez. Önemli olan gerçekten hangi sınav formatına hazırlandığınızdır.",
  },
  {
    number: "04",
    title: "Yalnızca ihtiyacınız olanı alın",
    text: "Öğrenme yolu esnektir. Yeterli altyapınız varsa doğrudan daha ileri bir aşamadan başlayabilirsiniz.",
  },
];

const faqs = [
  [
    "İleri Seviye / İnce Ayar ile başlamak zorunda mıyım?",
    "Hayır. Medikal Dil Yolu esnektir. Dil altyapınız yeterliyse doğrudan size uygun sınav hazırlığına başlayabilirsiniz.",
  ],
  [
    "FSP mi yoksa FaMed mi seçmeliyim?",
    "Bu, gireceğiniz sınava bağlıdır. Hangi sınava hazırlandığınızı bize yazın; size uygun yolu gösterelim.",
  ],
  [
    "Doğrudan simülasyon satın alabilir miyim?",
    "Evet. Hazırlığınız yeterliyse ve özellikle sınav durumlarını çalışmak istiyorsanız simülasyonları ayrı bir hazırlık adımı olarak da kullanabilirsiniz.",
  ],
  [
    "Öğrenme yolunun sabit bir toplam fiyatı var mı?",
    "İhtiyacınız olan kombinasyon mevcut seviyenize ve hedefinize bağlıdır. Güncel paket seçeneklerini WhatsApp üzerinden öğrenebilirsiniz.",
  ],
  [
    "Benim için hangi başlangıç noktası uygun?",
    "Mevcut dil seviyenizi, hazırlandığınız sınavı ve biliyorsanız sınav tarihinizi bize gönderin. En uygun başlangıç noktasını birlikte belirleyelim.",
  ],
];

export default function MedizinischerSprachwegPage() {
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
              MEDİKAL DİL YOLU
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Sadece kursları tamamlamayın. Sınava kadar uzanan bir yol oluşturun.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Medikal profesyoneller için esnek bir öğrenme yolu: önce dil altyapınızı güçlendirin, ardından FSP veya FaMed'e hedefli şekilde hazırlanın ve son olarak öğrendiklerinizi gerçekçi sınav durumlarında uygulayın.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "İleri Seviye / İnce Ayar",
                "FSP veya FaMed",
                "Simülasyonlar",
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
                Kişisel öğrenme yolumu belirle
              </a>

              <a
                href="#lernweg"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Öğrenme yolunu incele
              </a>
            </div>
          </div>

          <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.18)] sm:p-7">
            <div className="rounded-[2.2rem] bg-[#f3eff7] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                    LIBELLE ÖĞRENME YOLU
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    Medikal Dil Yolu
                  </div>
                </div>

                <span className="rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold">
                  ESNEK
                </span>
              </div>

              <div className="mt-8 space-y-3">
                {path.map((item) => (
                  <div
                    key={item.number}
                    className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4"
                  >
                    <span className="text-xs font-bold text-[#31175B]">
                      {item.number}
                    </span>
                    <span className="text-sm font-semibold">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-[#31175B] p-5 text-white">
                <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                  BAŞLANGIÇ NOKTANIZ
                </div>
                <p className="mt-2 leading-7 text-white/75">
                  Mutlaka 1. adımdan başlamak zorunda değilsiniz. Doğru başlangıç noktası mevcut seviyenize ve hazırlandığınız sınava göre belirlenir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO-STORY-MEDPATH */}
      <EditorialStorySection
        eyebrow="MESLEKİ BİLGİDEN İLETİŞİME"
        title="Medikal Almanca, mesleki bilginizi anlaşılır iletişimle birleştirir."
        text="Medikal Almancayı yalnızca terminoloji olarak değil; hasta iletişimi, dokümantasyon ve mesleki anlatım içinde güvenle kullanabilmek önemlidir."
        image="/images/medical-path-doctor-explanation.jpg"
        alt="Doktorun medikal görüşme sırasında açıklama yapması"
        chip="DİL → SINAV → SİMÜLASYON"
        reverse
      />

      {/* PATH */}
      <section id="lernweg" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            SINAVA GİDEN YOLUNUZ
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Önce dil güvenliğini oluşturun. Sonra hedefli hazırlanın. Ardından simüle edin.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Bu öğrenme yolu farklı hazırlık adımlarını anlaşılır bir süreçte birleştirir. Herkesin aynı noktadan başlaması gerekmez.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {path.map((item) => (
            <article
              key={item.number}
              className="rounded-[2.2rem] border border-black/5 bg-[#f7f9fb] p-7 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-[#31175B]">
                  {item.number}
                </span>

                <span className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                  {item.eyebrow}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-7 text-black/55">{item.text}</p>

              {item.number === "02" && (
                <div className="mt-7 flex flex-wrap gap-2">
                  <Link
                    href="/tr/fsp-medizin"
                    className="rounded-full bg-[#31175B] px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    FSP Tıp
                  </Link>
                  <Link
                    href="/tr/famed"
                    className="rounded-full border border-[#31175B]/15 px-5 py-2.5 text-sm font-semibold text-[#31175B]"
                  >
                    FaMed
                  </Link>
                </div>
              )}

              {item.number === "03" && (
                <Link
                  href="/tr/simulationen"
                  className="mt-7 inline-block text-sm font-semibold text-[#31175B]"
                >
                  Simülasyonları incele →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              NEDEN BİR ÖĞRENME YOLU?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Hazırlığınız bugün bulunduğunuz noktadan başlamalıdır.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Herkes aynı kurslara aynı sırayla ihtiyaç duymaz. Bu nedenle dil seviyenizi, sınavınızı ve mevcut hazırlık durumunuzu birlikte değerlendiriyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] bg-white/10 p-7 sm:p-8"
              >
                <div className="text-xs font-bold text-[#58ECF1]">
                  {item.number}
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DECISION */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2.5rem] bg-[#D2ECFF]/60 p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              DİL KONUSUNDA HÂLÂ EMİN DEĞİL MİSİNİZ?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              O zaman hazırlığınızın doğrudan bir sınav simülasyonuyla başlaması gerekmez.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Önce medikal dil becerilerinizi hedefli şekilde güçlendirebilirsiniz. Ardından gerçek sınav hazırlığına geçebilirsiniz.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-[#f7f5f9] p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              DAHA İLERİ BİR SEVİYEDE MİSİNİZ?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              O halde doğrudan gerçekten desteğe ihtiyaç duyduğunuz aşamadan başlayın.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Dil altyapınız yeterliyse bir sonraki adım doğrudan FSP, FaMed veya hedefli simülasyon çalışması olabilir.
            </p>

            <a
              href={whatsappLink(mainMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Başlangıç noktamı belirle
            </a>
          </div>
        </div>
      </section>

      {/* COURSE OPTIONS */}
      <section className="bg-[#f7f5f9]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              SINAV HAZIRLIĞI
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Sizin için sıradaki sınav hazırlığı adımı hangisi?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <Link
              href="/tr/fsp-medizin"
              className="rounded-[2rem] bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                FSP TIP
              </div>
              <h3 className="mt-5 text-2xl font-semibold">
                FSP'ye hedefli hazırlanın
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Mesleki dil, anamnez, dokümantasyon, hasta sunumu ve gerçekçi sınav durumları.
              </p>
              <div className="mt-7 text-sm font-semibold text-[#31175B]">
                FSP Tıp'ı incele →
              </div>
            </Link>

            <Link
              href="/tr/famed"
              className="rounded-[2rem] bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                FAMED
              </div>
              <h3 className="mt-5 text-2xl font-semibold">
                FaMed'e hedefli hazırlanın
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Medikal iletişim, anamnez, hasta bilgilendirmesi, dokümantasyon ve hasta sunumu.
              </p>
              <div className="mt-7 text-sm font-semibold text-[#31175B]">
                FaMed'i incele →
              </div>
            </Link>

            <Link
              href="/tr/simulationen"
              className="rounded-[2rem] bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                SİMÜLASYONLAR
              </div>
              <h3 className="mt-5 text-2xl font-semibold">
                Sınav durumlarını çalışın
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Öğrendiklerinizi gerçekçi koşullarda uygulayın ve hedefli geri bildirim alın.
              </p>
              <div className="mt-7 text-sm font-semibold text-[#31175B]">
                Simülasyonları incele →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            SIK SORULAN SORULAR
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Karar vermeden önce hangi yolun sizin için uygun olduğunu bilin.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map(([question, answer]) => (
            <div
              key={question}
              className="rounded-[2rem] bg-[#f7f9fb] p-7 sm:p-8"
            >
              <h3 className="text-xl font-semibold">{question}</h3>
              <p className="mt-4 leading-7 text-black/55">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                SONRAKİ ADIMINIZ
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
                Bize şu anda hangi aşamada olduğunuzu söyleyin. Sizin için uygun sonraki adımı birlikte belirleyelim.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/55">
                Mevcut dil seviyenizi, hazırlandığınız sınavı ve biliyorsanız sınav tarihinizi bize gönderin.
              </p>
            </div>

            <a
              href={whatsappLink(mainMessage)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
            >
              Öğrenme yolumu WhatsApp'tan belirle
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
