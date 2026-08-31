import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import ZahnConversion from "@/components/tr/ZahnConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FSP & FaMed Diş Hekimliği Yoğun Kursu | Libelle Academy",
  description:
    "8 haftalık yoğun program: diş hekimliği mesleki dili, hasta görüşmesi, dokümantasyon, hasta sunumu ve sınav odaklı çalışma.",
};

const mainMessage =
  "Merhaba, 950 €'luk FSP & FaMed Diş Hekimliği Yoğun Kursu ile ilgileniyorum. Yeni grup ve kontenjan hakkında bilgi alabilir miyim? Kaynak: FSP-FAMED-DİŞ HEKİMLİĞİ-LANDING";

const consultationMessage =
  "Merhaba, Diş Hekimliği sınav hazırlığıyla ilgileniyorum. Yoğun kursun mevcut seviyeme uygun olup olmadığını öğrenmek istiyorum. Kaynak: DİŞ HEKİMLİĞİ-BERATUNG";

const outcomes = [
  {
    number: "01",
    title: "Diş hekimliği mesleki dilini daha güvenli kullanın",
    text: "Sınavla ilgili diş hekimliği terimlerini ve ifadelerini konuşmalarda aktif olarak kullanın.",
  },
  {
    number: "02",
    title: "Hasta görüşmelerini yapılandırılmış şekilde yürütün",
    text: "Anamnez ve hasta görüşmelerini açık, anlaşılır ve sınav odaklı şekilde çalışın.",
  },
  {
    number: "03",
    title: "Dokümantasyonu hedefli çalışın",
    text: "Görüşmedeki bilgileri düzenli şekilde kaydedin ve yazılı dokümantasyona aktarın.",
  },
  {
    number: "04",
    title: "Hasta sunumunu etkili şekilde yapılandırın",
    text: "Vakaları yapılandırılmış biçimde sunun ve medikal bilgileri dil açısından daha güvenli aktarın.",
  },
];

const program = [
  "Diş hekimliği mesleki dili",
  "Hasta görüşmesi",
  "Anamnez",
  "Dokümantasyon",
  "Hasta sunumu",
  "Sınav hazırlığı",
];

const steps = [
  {
    number: "01",
    eyebrow: "GELİŞTİR",
    title: "Dil ve yapıyı güçlendirin",
    text: "Diş hekimliği meslek dili ve tipik sınav durumları sistematik olarak yapılandırılmıştır.",
  },
  {
    number: "02",
    eyebrow: "UYGULA",
    title: "İletişimi pratik olarak çalışın",
    text: "Hasta görüşmesi, anamnez, dokümantasyon ve hasta sunumu birlikte çalışılır.",
  },
  {
    number: "03",
    eyebrow: "SİMÜLE ET",
    title: "Sınav koşullarında test edin",
    text: "Simülasyonlar ve geri bildirim, dilinizi, yapınızı ve iletişim güvenliğinizi hedefli şekilde geliştirmenize yardımcı olur.",
  },
];

const faqs = [
  {
    q: "Diş Hekimliği Yoğun Kursu ne kadar sürüyor?",
    a: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
  },
  {
    q: "Kursun fiyatı nedir?",
    a: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
  },
  {
    q: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
    a: "Ders, hekimlerin dil ve sınav odaklı hazırlığı için tasarlanmış ve FSP ile FaMed açısından önemli iletişim işlemlerini birlikte çalıştırır.",
  },
  {
    q: "Simülasyonlar dahil mi?",
    a: "Evet. Simülasyonlar ve kişisel geri bildirim hazırlığın bir parçasıdır.",
  },
  {
    q: "Yeni grup ve boş kontenjanları nasıl öğrenebilirim?",
    a: "Bize WhatsApp üzerinden yazın. Bir sonraki grup ve mevcut kontenjan bilgilerini size iletelim.",
  },
];

export default function FspZahnmedizinPage() {
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
              FSP sınavına yönelik yapılandırılmış hazırlık.
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Diş hekimliği Almancasını aktif kullanın. Sınava hedefli hazırlanın.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Diş hekimliği mesleki dili, hasta görüşmesi, anamnez, dokümantasyon, hasta sunumu ve gerçekçi sınav durumlarına yoğun hazırlık.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "8 hafta",
                "950 €",
                "Simülasyonlar + Geri bildirim",
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
                FSP + FAMED
              </div>
              <div className="mt-1 text-sm font-semibold">
                Diş hekimliğine özel hazırlık
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-48px] left-12 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                SINAVA YAKIN
              </div>
              <div className="mt-1 text-sm font-semibold">
                Sadece öğrenmeyin, uygulayın
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
                    Diş Hekimliği
                  </div>
                </div>

                <span className="rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold">
                  8 hafta
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    FİYAT
                  </div>
                  <div className="mt-2 text-3xl font-semibold">950 €</div>
                </div>

                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="text-xs font-bold tracking-[.13em] text-black/40">
                    ODAK
                  </div>
                  <div className="mt-2 text-2xl font-semibold">FSP + FaMed</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  "Diş hekimliği mesleki dili",
                  "Sınav odaklı hazırlık",
                  "Simülasyonlar ve geri bildirim",
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
                  Diş hekimliği iletişimini yapılandırılmış şekilde çalışın ve öğrendiklerinizi gerçek sınava yakın durumlarda uygulayın.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                FSP + FAMED
              </div>
              <div className="mt-1 text-xs font-semibold">
                Diş hekimliğine özel hazırlık
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                SINAVA YAKIN
              </div>
              <div className="mt-1 text-xs font-semibold">
                Sadece öğrenmeyin, uygulayın
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-ZAHN */}
      <EditorialStorySection
        eyebrow="DİŞ HEKİMLİĞİ İLETİŞİMİ"
        title="Mesleki dil, hasta anlayabildiğinde gerçek değerini kazanır."
        text="Anamnez, bilgi, dokümantasyon ve sunum, diş hekimliği uzmanlığını net Almanca iletişimi ile birleştirir - tam da muayene ve günlük profesyonel yaşamın bir araya geldiği yer."
        image="/images/zahnmedizin-dentist-patient.jpg"
        alt="Diş hekimi ve hasta görüşmesi"
        secondaryImage="/images/zahnmedizin-patient-conversation.jpg"
        secondaryAlt="Diş hekimliği hasta görüşmesi"
        chip="FSP + FAMED DİŞ HEKİMLİĞİ"
      />

      <section id="Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı." className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            NELERİ ÇALIŞACAKSINIZ?
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Yalnızca mesleki terimleri bilmeyin. Diş hekimliği Almancasını aktif kullanın.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Hazırlık programı, mesleki dili FSP ve FaMed sınavlarında karşılaşabileceğiniz iletişim görevleriyle birleştirir.
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

              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-7 text-black/55">{item.text}</p>
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
              Diş hekimliği sınav hazırlığınızın temel alanları.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Hasta görüşmesinden dokümantasyona ve yapılandırılmış hasta sunumuna kadar tüm alanlar birbiriyle bağlantılı şekilde çalışılır.
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

                <span className="text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            ÖĞRENMEDEN SINAVA
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Önce geliştirin. Sonra uygulayın. Ardından simüle edin.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[2.2rem] border border-black/5 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,.04)]"
            >
              <div className="flex items-center justify-between">
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

              <p className="mt-4 leading-7 text-black/55">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                YOĞUN HAZIRLIK
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
                İletişim odaklı bir sınav için yalnızca teori yeterli değildir.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "8 haftalık yoğun hazırlık",
                  "Sınav iletişiminizi yapılandırılmış şekilde geliştirmek için net bir çalışma süreci.",
                ],
                [
                  "Diş hekimliği mesleki dili",
                  "Sınavda gerekli olan dil, tipik durumlarda aktif şekilde uygulanır.",
                ],
                [
                  "Sınav odaklı hazırlık",
                  "Hazırlık, sınavdaki tipik iletişim gerekliliklerine hedefli şekilde odaklanır.",
                ],
                [
                  "Simülasyonlar ve geri bildirim",
                  "Öğrendikleriniz uygulamada test edilir ve hedefli şekilde geliştirilir.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[2rem] bg-white/10 p-7"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-7 text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2.2rem] bg-white p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              KİMLER İÇİN?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Diş hekimliği sınavına hazırlananlar için.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Diş hekimliği mesleki dilini, hasta görüşmesini ve sınavda gerekli iletişim becerilerini yapılandırılmış şekilde geliştirmek isteyen katılımcılar için.
            </p>
          </div>

          <div className="rounded-[2.2rem] bg-[#D2ECFF]/60 p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              EMİN DEĞİL MİSİNİZ?
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Önce kursun mevcut seviyenize uygun olup olmadığını belirleyin.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Hazırlığınızın hangi aşamasında olduğunuzu bize kısaca yazın. Size uygun seçeneği belirlemenize yardımcı olalım.
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

      <section className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            SIK SORULAN SORULAR
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Kayıt öncesinde sizi nelerin beklediğini bilin.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-[1.8rem] bg-[#f7f9fb] p-7">
              <h3 className="text-xl font-semibold">{q}</h3>
              <p className="mt-4 leading-7 text-black/50">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.6rem] bg-[#17131c] p-8 text-white md:grid-cols-[1fr_auto] md:items-center sm:p-12">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              SONRAKİ ADIMINIZ
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Diş hekimliği sınavınıza yapılandırılmış şekilde hazırlanın.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Yeni grup, mevcut kontojan ve güncel dersi WhatsApp üzerinden öğrenin.
            </p>
          </div>

          <a
            href={whatsappLink(mainMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            Diş Hekimliği kursu hakkında bilgi al
          </a>
        </div>
      </section>
    </main>
  );
}
