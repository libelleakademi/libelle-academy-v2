import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import FspConversion from "@/components/tr/FspConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FSP sınavına yönelik yapılandırılmış hazırlık.",
  description:
    "68 farklı dersin yanı sıra harmanlanmış öğrenme, 6 sınav simülasyonları, küçük gruplar ve dijital öğrenme materyalleri içeren 8 haftalık yoğun FSP ilaç hazırlığı.",
};

const mainMessage =
  "FSP sınavına yönelik yapılandırılmış hazırlık.";

const consultationMessage =
  "FSP sınavına yönelik yapılandırılmış hazırlık.";

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
  "Tıbbi terminoloji",
  "Tıbbi geçmiş ve doktor-hasta iletişimi",
  "Dokümantasyon",
  "Hasta sunumu",
  "sınav simülasyonları",
];

const steps = [
  {
    number: "01",
    eyebrow: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
    title: "Dili ve yapıyı geliştirin",
    text: "Tıbbi terminoloji, konuşma yönetimi ve muayeneyle ilgili yapılar sistematik olarak geliştirilmektedir.",
  },
  {
    number: "02",
    eyebrow: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
    title: "Özellikle iletişimi eğitin",
    text: "Anamnez, dokümantasyon ve hasta sunumu tek başına öğrenilmez, pratik olarak birbirine bağlanır.",
  },
  {
    number: "03",
    eyebrow: "SIMULIEREN",
    title: "Test koşulları altında test edin",
    text: "Altı sınav simülasyonunda öğrendiklerinizi gerçekçi durumlarda uygulayacaksınız.",
  },
];

const faqs = [
  {
    q: "FSP Tıp yoğun kursu ne kadar sürer?",
    a: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
  },
  {
    q: "Dersler ne kadar kapsamlı?",
    a: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
  },
  {
    q: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
    a: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
  },
  {
    q: "Dijital öğrenme materyalleri var mı?",
    a: "Evet. Dijital öğrenme materyalleri Pelexa öğrenme alanı aracılığıyla sağlanır.",
  },
  {
    q: "Bir sonraki grubu ve uygun yerleri nasıl öğrenebilirim?",
    a: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
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
              FSP İPUCU · YOĞUN KURSU
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
                "6 sınav simülasyonları",
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
                    Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
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
                  Tıbbi iletişimi yapılandırılmış bir şekilde eğitmek ve
                  Daha sonra gerçekçi sınav durumlarında neler öğrenildi?
                  uygulayın.
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
        eyebrow="Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı."
        title="Tıp dili konuşmada somutlaşır."
        text="FSP'te anamnez, tıbbi yapı ve dilsel tepkinin aynı anda çalışması gerekir. Bu nedenle sadece teknik terimleri bilmek yeterli değildir; bunların konuşma sırasında ulaşılabilir olması gerekir."
        image="/images/fsp-doctor-patient-consultation.jpg"
        alt="Kadın doktor bir hastayla konuşuyor"
        chip="Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı."
      />

      {/* OUTCOMES */}
      <section id="Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı." className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Sadece tıbbi kelimeleri öğrenmek değil. Tıbbi olarak iletişim kurun.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
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
              KURSINHALTE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              FSP sınavına yönelik yapılandırılmış hazırlık.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
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
            Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
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
                Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
                Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "68 ders saati",
                  "Sınavla ilgili dil alanlarının yoğun ortak gelişimi.",
                ],
                [
                  "Blended Learning",
                  "Dersler ve dijital öğrenme aşamaları birbirini tamamlar.",
                ],
                [
                  "Küçük gruplar",
                  "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
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
              Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
            </div>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Ders dışında da öğrenme materyalleri.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/55">
              Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-[#17131c] p-6 sm:p-8">
            <div className="rounded-[2rem] bg-[#f3eff7] p-7">
              <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
                PELEXA · LIBELLE DIGITAL LEARNING
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
              </div>

              <div className="mt-7 space-y-3">
                {[
                  "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
                  "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
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
                FSP sınavına yönelik yapılandırılmış hazırlık.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Tıbbi terminolojiyi kullanan katılımcılar için ve
                Sınav iletişimini yapılandırılmış bir şekilde eğitin ve
                Hazırlığı gerçekçi simülasyonlarla birleştirmek istiyorsunuz.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-[#D2ECFF]/55 p-8 sm:p-10">
              <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
                UNSICHER?
              </div>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Öncelikle yoğun kursun seviyenize uygun olup olmadığını kontrol edin.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
              </p>

              <a
                href={whatsappLink(consultationMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
              >
                Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
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
                FSP sınavına yönelik yapılandırılmış hazırlık.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
                Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
              </p>
            </div>

            <a
              href={whatsappLink(mainMessage)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#31175B]"
            >
              FSP sınavına yönelik yapılandırılmış hazırlık.
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
