import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Almanca kursları ve tıbbi Almanca kursları | Libelle Academy",
  description:
    "Almanca A1'ten B2'e ve Libelle Academy'te tıbbi Almanca ve sınava hazırlık kurslarına katılabilirsiniz.",
};

const consultationMessage =
  "Merhaba, Libelle Academy'teki bir kursla ilgileniyorum ve hangi kursun mevcut seviyeme ve hedeflerime uygun olduğunu bilmek istiyorum. Kaynak: KURSLAR-HUB";

const germanCourses = [
  {
    level: "A1",
    title: "Almanca A1",
    text: "Almanca'ya başlarken: İlk günlük durumlar ve basit iletişim için temel bilgiler.",
    meta: "8 hafta · 165 €",
    href: "/tr/deutsch/a1",
  },
  {
    level: "A2",
    title: "Almanca A2",
    text: "Temel bilgileri genişletin ve tipik günlük durumlarda daha fazla güvenlik geliştirin.",
    meta: "8 hafta · 165 €",
    href: "/tr/deutsch/a2",
  },
  {
    level: "B1",
    title: "Almanca B1",
    text: "Daha bağımsız iletişim kurun, daha karmaşık günlük durumlarla başa çıkın ve dilsel ifadeyi genişletin.",
    meta: "12 hafta · 250 €",
    href: "/tr/deutsch/b1",
  },
  {
    level: "B2",
    title: "Almanca B2",
    text: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
    meta: "12 hafta · 399 €",
    href: "/tr/deutsch/b2",
  },
];

const medicalCourses = [
  {
    label: "FSP TIP",
    title: "FSP Yoğun ipucu kursu",
    text: "Tıbbi terminoloji, anamnez, dokümantasyon, hasta sunumu ve gerçekçi simülasyonları.",
    meta: "8 hafta · 950 €",
    href: "/tr/fsp-medizin",
  },
  {
    label: "FAMED",
    title: "FaMed Yoğun Kursu",
    text: "Tıbbi iletişim ve FaMed sınav formatı için yapılandırılmış hazırlık.",
    meta: "6 hafta · 600 €",
    href: "/tr/famed",
  },
  {
    label: "DİŞ HEKİMLİĞİ",
    title: "FSP & FaMed Diş Hekimliği",
    text: "Özellikle diş hekimleri için sınav odaklı hazırlık.",
    meta: "8 hafta · 950 €",
    href: "/tr/fsp-zahnmedizin",
  },
  {
    label: "ESNEK",
    title: "FaMed Offline",
    text: "FaMed sınavına yönelik yapılandırılmış hazırlık.",
    meta: "200 €'dan başlayan fiyatlarla",
    href: "/tr/famed-offline",
  },
  {
    label: "SIMULATION",
    title: "Sınav simülasyonları",
    text: "Bireysel geri bildirim ve hedefe yönelik hata analizi ile gerçekçi test durumları.",
    meta: "75 €'dan başlayan fiyatlarla",
    href: "/tr/simulationen",
  },
];

export default function KursePage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[650px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              KURSLAR
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              İlk Almanca cümlenizden medikal sınava kadar.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              A1'ten B2'e kadar genel Almanca ve özel olanlar
              Tıbbi sınav hazırlığı – açık öğrenme yolları ile
              Farklı başlangıç noktaları ve hedefler.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#deutsch"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Tüm kursları incele
              </a>

              <a
                href={whatsappLink(consultationMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Ders yönlendirmesi
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                A1 → B2
              </div>
              <div className="mt-1 text-sm font-semibold">
                Almancayı sistemli geliştirin
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                MEDİKAL
              </div>
              <div className="mt-1 text-sm font-semibold">
                FSP · FaMed · Simülasyonlar
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-6 shadow-[0_30px_90px_rgba(49,23,91,.16)]">
              <div className="rounded-[2.1rem] bg-[#f3eff7] p-7 sm:p-9">
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                İKİ ÖĞRENME ALANI
              </div>

              <div className="mt-7 space-y-4">
                <a
                  href="#deutsch"
                  className="block rounded-[1.6rem] bg-white p-6"
                >
                  <div className="text-xs font-bold tracking-[.14em] text-[#17666a]">
                    GENEL ALMANCA
                  </div>
                  <div className="mt-3 text-2xl font-semibold">A1 → B2</div>
                  <p className="mt-3 text-sm leading-6 text-black/50">
                    Girişten girişe kadar yapılandırılmış bir dil yolu
                    ileri seviye.
                  </p>
                </a>

                <a
                  href="#medizin"
                  className="block rounded-[1.6rem] bg-[#31175B] p-6 text-white"
                >
                  <div className="text-xs font-bold tracking-[.14em] text-[#58ECF1]">
                    MEDİKAL ALMANCA
                  </div>
                  <div className="mt-3 text-2xl font-semibold">
                    FSP · FaMed · Diş Hekimliği
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Teknik dil, sınav hazırlığı ve gerçekçi
                    Simülasyonlar.
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                A1 → B2
              </div>
              <div className="mt-1 text-xs font-semibold">
                Almancayı sistemli geliştirin
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                MEDİKAL
              </div>
              <div className="mt-1 text-xs font-semibold">
                FSP · FaMed · Simülasyonlar
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-KURSLAR */}
      <EditorialStorySection
        eyebrow="İKİ ÖĞRENME ALANI"
        title="Almancayı öğrenin ve sizin için gerçekten önemli olduğu yerde kullanın."
        text="Bazıları için yolculuk A1 ile başlıyor. Tıbbi terminolojiye veya belirli bir sınava sahip olanlar için. Önemli olan başkalarının nereden başladığı değil, hangi sonraki adımın hedefinize uygun olduğudur."
        image="/images/home-general-german-learning.jpg"
        alt="Almanca öğrenen yetişkin"
        secondaryImage="/images/home-medical-german-learning.jpg"
        secondaryAlt="Tıbbi Almancayı dijital olarak öğrenin"
        chip="GENEL ALMANCA + MEDİKAL ALMANCA"
      />

      {/* GERMAN */}
      <section
        id="Almanca"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              GENEL ALMANCA
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Almanca seviyenize uygun yapılandırılmış öğrenme adımı.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Mevcut bilginize uygun seviyeden başlayın
              uyuyor ve Almanca becerilerinizi adım adım geliştirin
              Daha ileri adım atın.
            </p>

            <Link
              href="/tr/pakete/deutsch-a1-b2"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3 text-sm font-semibold text-white"
            >
              Kompletten A1–B2 Öğrenme yolunu incele
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {germanCourses.map((course) => (
              <Link
                key={course.level}
                href={course.href}
                className="rounded-[2rem] border border-black/5 bg-[#f7f9fb] p-7 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#31175B] text-sm font-bold text-white">
                    {course.level}
                  </span>

                  <span className="text-xs font-semibold text-black/45">
                    {course.meta}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {course.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {course.text}
                </p>

                <div className="mt-7 text-sm font-semibold text-[#31175B]">
                  Kursu incele →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* A1-B2 VALUE */}
      <section className="bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              Almanca seviyenize uygun yapılandırılmış öğrenme adımı.
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Dört seviye. Tek bir öğrenme yolu.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Hedefiniz zaten B2 ise, sonuna kadar gidebilirsiniz.
              Bunu başlangıçtan itibaren tutarlı bir gelişme olarak görün.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {[
              ["A1", "8 hafta"],
              ["A2", "8 hafta"],
              ["B1", "12 hafta"],
              ["B2", "12 hafta"],
            ].map(([level, duration]) => (
              <div
                key={level}
                className="rounded-[1.7rem] bg-white p-6 text-center"
              >
                <div className="text-3xl font-semibold text-[#31175B]">
                  {level}
                </div>
                <div className="mt-3 text-sm text-black/45">{duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL */}
      <section
        id="Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı."
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            MEDİKAL ALMANCA
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Medikal Almancayı meslek ve sınav için hedefli geliştirin.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Tıbbi jargondan özele
            Sınav durumu: Sınav yolunuza uygun kursu seçin
            ve mevcut durum uyuyor.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {medicalCourses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="flex min-h-[330px] flex-col justify-between rounded-[2.2rem] bg-[#f7f9fb] p-8 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(49,23,91,.07)]"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs font-bold tracking-[.15em] text-[#17666a]">
                    {course.label}
                  </div>

                  <div className="rounded-full bg-white px-3 py-2 text-xs font-semibold">
                    {course.meta}
                  </div>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {course.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {course.text}
                </p>
              </div>

              <div className="mt-8 text-sm font-semibold text-[#31175B]">
                Daha fazlasını öğrenin →
              </div>
            </Link>
          ))}

          <Link
            href="/tr/pakete/medizinischer-sprachweg"
            className="flex min-h-[330px] flex-col justify-between rounded-[2.2rem] bg-[#31175B] p-8 text-white transition hover:-translate-y-1"
          >
            <div>
              <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Tıbbi dil yolu
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Birkaç hazırlık adımını anlamlı bir şekilde birleştirirseniz
                bağlanmak istiyorum.
              </p>
            </div>

            <div className="mt-8 text-sm font-semibold text-[#58ECF1]">
              Öğrenme yolunu incele →
            </div>
          </Link>
        </div>
      </section>

      {/* DECISION */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Hedef rotayı belirler, tersi değil.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
                "A1 ile veya önceki bilgilerinize göre uygun seviyeyle başlayın.",
              ],
              [
                "02",
                "Ses hedefi olarak B2",
                "B2'e giden yapılandırılmış genel Almanya rotasını kullanın.",
              ],
              [
                "03",
                "Tıbbi muayene",
                "Sınav formatınıza göre FSP, FaMed veya Diş Hekimliği seçeneğini seçiniz.",
              ],
              [
                "04",
                "Sınava neredeyse hazırız",
                "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-[2rem] bg-white/10 p-7"
              >
                <div className="text-xs font-bold text-[#58ECF1]">
                  {number}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CROSSROADS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Link
            href="/tr/pakete/deutsch-a1-b2"
            className="rounded-[2.5rem] bg-[#D2ECFF]/60 p-9 sm:p-11"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#17666a]">
              SPRACHWEG
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              B2'e kadar bilgi edinmek ister misiniz?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Herkesle birlikte A1'ten B2'e kadar öğrenme yolunun tamamını görün
              Bir tarafta adımlar.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Almanca A1–B2'i görüntüleyin →
            </div>
          </Link>

          <Link
            href="/tr/pruefungsvorbereitung"
            className="rounded-[2.5rem] bg-[#f7f5f9] p-9 sm:p-11"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
              TIBBİ MUAYENE
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              FSP veya FaMed'e mi hazırlanıyorsunuz?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Farklı sınav yollarını karşılaştırın ve bulun
              uygun hazırlık.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Sınav hazırlığını görüntüleyin →
            </div>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              HÂLÂ EMİN DEĞİL MİSİNİZ?
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Bize seviyenizi ve hedefinizi söyleyin.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Hangi kursun veya öğrenme yolunun sizin için uygun olduğunu bulmanıza yardımcı olacağız.
              Bir sonraki adımınız mantıklı.
            </p>
          </div>

          <a
            href={whatsappLink(consultationMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
          </a>
        </div>
      </section>
    </main>
  );
}
