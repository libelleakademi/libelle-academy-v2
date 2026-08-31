import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import FspConversion from "@/components/tr/FspConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FSP Tıp Yoğun Kursu | Libelle Academy",
  description:
    "8 haftalık FSP Tıp hazırlığı: 68 ders saati + Blended Learning, 6 sınav simülasyonu, küçük gruplar ve dijital öğrenme materyalleri.",
};

const mainMessage =
  "Merhaba, 950 €'luk FSP Tıp Yoğun Kursu ile ilgileniyorum. Yeni grup ve kontenjan hakkında bilgi alabilir miyim? Kaynak: FSP-MEDIZIN-LANDING";

const consultationMessage =
  "Merhaba, FSP Tıp sınavına hazırlanıyorum. Yoğun kursun mevcut seviyeme uygun olup olmadığını öğrenmek istiyorum. Kaynak: FSP-MEDIZIN-BERATUNG";

const outcomes = [
  {
    number: "01",
    title: "Anamnezi güvenle yürütün",
    text: "Medikal bilgileri yapılandırılmış şekilde alın ve hasta görüşmesini dil açısından daha güvenli yürütün.",
  },
  {
    number: "02",
    title: "Medikal mesleki dili kullanın",
    text: "Sınavla ilgili medikal dili yalnızca anlamakla kalmayın, iletişimde aktif olarak kullanın.",
  },
  {
    number: "03",
    title: "Dokümantasyon çalışın",
    text: "Hasta görüşmesinden bilgileri yapılandırılmış bir şekilde toplayın ve yazılı dokümantasyona hazırlayın.",
  },
  {
    number: "04",
    title: "Hasta sunumu yapın",
    text: "Tıbbi vakaları düzenli ve dil açısından anlaşılır bir şekilde sunun.",
  },
];

const program = [
  "Medikal mesleki dil",
  "Anamnez ve doktor-hasta iletişimi",
  "Dokümantasyon",
  "Hasta sunumu",
  "Sınav simülasyonları",
];

const steps = [
  {
    number: "01",
    eyebrow: "GELİŞTİR",
    title: "Dili ve yapıyı geliştirin",
    text: "Tıbbi terminoloji, konuşma yönetimi ve muayeneyle ilgili yapılar sistematik olarak geliştirilmektedir.",
  },
  {
    number: "02",
    eyebrow: "GELİŞTİR",
    title: "İletişimi hedefli çalışın",
    text: "Anamnez, dokümantasyon ve hasta sunumu tek başına öğrenilmez, pratik olarak birbirine bağlanır.",
  },
  {
    number: "03",
    eyebrow: "SİMÜLE ET",
    title: "Sınav koşullarında test edin",
    text: "Altı sınav simülasyonunda öğrendiklerinizi gerçekçi durumlarda uygulayacaksınız.",
  },
];

const faqs = [
  {
    q: "FSP Tıp yoğun kursu ne kadar sürer?",
    a: "Kurs 8 hafta sürer.",
  },
  {
    q: "Dersler ne kadar kapsamlı?",
    a: "Kurs 68 ders saati + Blended Learning içerir.",
  },
  {
    q: "Sınav simülasyonları kursa dahil mi?",
    a: "Evet. Kurs kapsamında 6 sınav simülasyonu bulunur.",
  },
  {
    q: "Dijital öğrenme materyalleri var mı?",
    a: "Evet. Dijital öğrenme materyalleri Pelexa öğrenme alanı aracılığıyla sağlanır.",
  },
  {
    q: "Bir sonraki grubu ve uygun yerleri nasıl öğrenebilirim?",
    a: "Bize WhatsApp üzerinden yazın. Size yeni grup ve güncel kontenjan bilgilerini iletelim.",
  },
];

export default function FspMedizinPage() {
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
              FSP TIP · YOĞUN KURS
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Medikal Almancayı kullanın. Sınav koşullarında güvenle uygulayın.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Medikal mesleki dil, doktor-hasta iletişimi, dokümantasyon, hasta sunumu ve gerçekçi sınav durumlarına yoğun hazırlık.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "8 hafta",
                "68 ders saati + Blended Learning",
                "6 sınav simülasyonu",
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
            <div className="home-orbit absolute right-10 -top-7 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17131c]">
                6 SİMÜLASYONLAR
              </div>
              <div className="mt-1 text-sm font-semibold text-[#17131c]">
                Gerçek sınavdan önce deneyimleyin
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-24px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                CANLI + DİJİTAL
              </div>
              <div className="mt-1 text-sm font-semibold">
                Dersler arasında öğrenmeye devam
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
                    FSP Tıp
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
                    SİMÜLASYONLAR
                  </div>
                  <div className="mt-2 text-3xl font-semibold">6</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  "68 ders saati + Blended Learning",
                  "Küçük gruplar",
                  "Pelexa üzerinden dijital öğrenme materyalleri",
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
                  Tıbbi iletişimi yapılandırılmış şekilde çalışın ve öğrendiklerinizi gerçekçi sınav durumlarında uygulayın.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                6 SİMÜLASYONLAR
              </div>
              <div className="mt-1 text-xs font-semibold">
                Gerçek sınavdan önce deneyimleyin
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                CANLI + DİJİTAL
              </div>
              <div className="mt-1 text-xs font-semibold">
                Dersler arasında öğrenmeye devam
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* PHOTO-STORY-FSP */}
      <EditorialStorySection
        eyebrow="MEDİKAL İLETİŞİM"
        title="Tıp dili konuşmada somutlaşır."
        text="FSP'de anamnez, tıbbi yapı ve dilsel tepkinin aynı anda çalışması gerekir. Bu nedenle sadece teknik terimleri bilmek yeterli değildir; bunların konuşma sırasında ulaşılabilir olması gerekir."
        image="/images/fsp-doctor-patient-consultation.jpg"
        alt="Kadın doktor bir hastayla konuşuyor"
        chip="ANAMNEZ · DOKÜMANTASYON · HASTA SUNUMU"
      />

      {/* OUTCOMES */}
      <section id="kurs" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            NELER ÇALIŞACAKSINIZ
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Sadece tıbbi kelimeleri öğrenmek değil. Tıbbi olarak iletişim kurun.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Hazırlık; medikal mesleki dili, sınavda ihtiyaç duyulan iletişim görevleriyle birlikte geliştirir.
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

      {/* PROGRAM */}
      <section className="bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              KURS İÇERİĞİ
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              FSP Tıp için yapılandırılmış ve uygulama odaklı hazırlık.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Medikal görüşmeden dokümantasyona ve yapılandırılmış hasta sunumuna kadar tüm alanlar birbirini tamamlar.
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

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            ÖĞRENMEDEN SINAVA
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Önce geliştirin. Sonra uygulayın. Son olarak simüle edin.
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

      {/* VALUE SECTION */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                YOĞUN HAZIRLIK
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
                Teori tek başına bir iletişim sınavına hazırlamaz.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Bu nedenle yoğun kurs; canlı dersleri, dijital öğrenmeyi ve sınav simülasyonlarını tek bir hazırlık yolunda birleştirir.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "68 ders saati",
                  "Sınav açısından önemli dil alanlarını yoğun ve yapılandırılmış şekilde geliştirin.",
                ],
                [
                  "Blended Learning",
                  "Dersler ve dijital öğrenme aşamaları birbirini tamamlar.",
                ],
                [
                  "Küçük gruplar",
                  "6 SİMÜLASYON",
                ],
                [
                  "6 simülasyon",
                  "Öğrendikleriniz daha sonra gerçekçi sınav koşulları altında uygulanır.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.8rem] bg-white/10 p-7"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PELEXA */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] bg-[#D2ECFF]/55 p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              DİJİTAL ÖĞRENME
            </div>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Ders dışında da öğrenme materyalleri.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/55">
              Pelexa üzerinden kurs hazırlığı ve pekiştirme için dijital öğrenme materyallerine erişebilirsiniz.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-[#17131c] p-6 sm:p-8">
            <div className="rounded-[2rem] bg-[#f3eff7] p-7">
              <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                PELEXA · LIBELLE DİJİTAL ÖĞRENME
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Dijital öğrenme alanınız
              </div>

              <div className="mt-7 space-y-3">
                {[
                  "Dijital öğrenme materyalleri",
                  "Canlı dersleri destekleyen içerikler",
                  "Hazırlık ve derinleştirme",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-5 py-4 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2.5rem] bg-white p-8 sm:p-10">
              <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
                KİMLER İÇİN?
              </div>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                FSP sınavına hazırlanan hekimler için.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Medikal Almanca altyapısını güçlendirmek, sınav iletişimini yapılandırılmış şekilde çalışmak ve hazırlığını gerçekçi simülasyonlarla tamamlamak isteyen hekimler için.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-[#D2ECFF]/55 p-8 sm:p-10">
              <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
                EMİN DEĞİL MİSİNİZ?
              </div>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Öncelikle yoğun kursun seviyenize uygun olup olmadığını kontrol edin.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Medikal mesleki dili ve sınav iletişimini yapılandırılmış şekilde çalışmak ve hazırlığını gerçekçi simülasyonlarla birleştirmek isteyen katılımcılar için.
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
        </div>
      </section>

      <FspConversion />

      {/* FINAL CTA */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                SONRAKİ ADIMINIZ
              </div>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
                FSP Tıp için yapılandırılmış ve uygulama odaklı hazırlık.
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
              FSP Tıp için yapılandırılmış ve uygulama odaklı hazırlık.
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
