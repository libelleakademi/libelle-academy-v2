import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { germanCourses, GermanLevel } from "@/lib/german-courses-tr";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return Object.keys(germanCourses).map((level) => ({ level }));
}

export default async function GermanCoursePage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const course = germanCourses[level as GermanLevel];

  if (!course) notFound();

  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[680px] lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <div>
            <Link href="/tr/kurse" className="text-sm font-semibold text-[#17666a]">
              ← Tüm Almanca Kursları
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[0.18em] text-[#17666a]">
              {course.eyebrow}
            </div>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">
              {course.tagline}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-[#58ECF1] bg-white px-5 py-3 text-sm font-semibold">
                {course.level}
              </div>
              <div className="rounded-full border border-[#58ECF1] bg-white px-5 py-3 text-sm font-semibold">
                {course.duration}
              </div>
              <div className="rounded-full border border-[#58ECF1] bg-white px-5 py-3 text-sm font-semibold">
                {course.price}
              </div>
            </div>

            <a
              href={whatsappLink(
                `Merhaba, kurslar ve öğrenme yolları hakkında bilgi almak istiyorum.`
              )}
              className="mt-9 inline-block rounded-full bg-[#17666a] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Kontenjan ve güncel grubu WhatsApp'tan sor
            </a>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                {course.level} · BİR SONRAKİ ADIMINIZ
              </div>
              <div className="mt-1 text-sm font-semibold">
                Net bir ilerleme planıyla öğrenin
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                B2'YE KADAR İLERLEYİN
              </div>
              <div className="mt-1 text-sm font-semibold">
                Her seviye bir sonraki adıma hazırlar
              </div>
            </div>

            <div className="rounded-[2.8rem] border border-[#58ECF1] bg-white p-7 shadow-[0_30px_80px_rgba(49,23,91,0.08)] sm:p-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="text-xs font-bold tracking-[0.16em] text-[#17666a]">
                  KURSUNUZ
                </div>
                <div className="mt-3 text-3xl font-semibold">{course.title}</div>
              </div>
              <div className="rounded-full bg-[#58ECF1] px-4 py-2 text-sm font-bold text-[#122628]">
                {course.level}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-[1.5rem] bg-[#D2ECFF]/60 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-black/45">Süre</div>
                <div className="mt-2 text-2xl font-semibold">{course.duration}</div>
              </div>
              <div className="rounded-[1.5rem] bg-[#D2ECFF]/60 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-black/45">Fiyat</div>
                <div className="mt-2 text-2xl font-semibold">{course.price}</div>
              </div>
            </div>

            <div className="mt-5 rounded-[1.7rem] bg-[#31175B] p-6 text-white">
              <div className="text-xs font-bold tracking-[0.15em] text-[#58ECF1]">
                KİMLER İÇİN?
              </div>
              <p className="mt-3 leading-7 text-white/75">{course.forWhom}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                {course.level} · BİR SONRAKİ ADIM
              </div>
              <div className="mt-1 text-xs font-semibold">
                Klare Progression
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">Almanca seviyenize uygun yapılandırılmış öğrenme adımı.</div>
              <div className="mt-1 text-xs font-semibold">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-GERMAN-LEVEL */}
      <EditorialStorySection
        eyebrow={`${course.level} GÜNLÜK YAŞAMDA`}
        title="Bir dil seviyesi sadece gramer konularından ibaret değildir."
        text="Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı."
        image="/images/a1-b2-life-in-germany.jpg"
        alt="Almanca seviyenize uygun yapılandırılmış öğrenme adımı."
        chip={`${course.level} · BİR SONRAKİ ADIM`}
        reverse
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.18em] text-[#17666a]">
            NELERİ GELİŞTİRECEKSİNİZ?
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Günlük yaşamda fark edeceğiniz ilerleme.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {course.outcomes.map((item, index) => (
            <div key={item} className="rounded-[2rem] bg-[#f7f9fb] p-7">
              <div className="text-sm font-bold text-[#17666a]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mt-5 text-xl font-semibold leading-8">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#31175B] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-[#58ECF1]">
              NEDEN BU ÖĞRENME YOLU?
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Birbirinden kopuk konular değil. Adım adım ilerleyen tek bir yol.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
          </div>

          <div className="space-y-3">
            {course.included.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-white/10 p-5 text-lg font-medium">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-[#17666a]">
              B2'YE GİDEN YOL
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Şu an neredesiniz ve sırada ne var?
            </h2>
          </div>
          <Link
            href="/tr/pakete/deutsch-a1-b2"
            className="text-sm font-semibold text-[#31175B]"
          >
            A1–B2 öğrenme yolunu incele →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {["A1", "A2", "B1", "B2"].map((item) => (
            <Link
              key={item}
              href={`/de/deutsch/${item.toLowerCase()}`}
              className={`rounded-[2rem] border p-7 transition hover:-translate-y-1 ${
                item === course.level
                  ? "border-[#17666a] bg-[#58ECF1]"
                  : "border-[#58ECF1] bg-white"
              }`}
            >
              <div className="text-4xl font-semibold">{item}</div>
              <div className="mt-8 text-sm font-semibold">
                {item === course.level ? "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı." : "Kursu incele →"}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#D2ECFF]/55 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-[#17666a]">
                HÂLÂ EMİN DEĞİL MİSİNİZ?
              </div>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Hangi seviye size uygun? A1–B2 öğrenme yolu sizin için mantıklı mı?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-black/55">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
            </div>
            <a
              href={whatsappLink(
                `Merhaba, kurslar ve öğrenme yolları hakkında bilgi almak istiyorum.`
              )}
              className="inline-block rounded-full bg-[#31175B] px-7 py-4 text-sm font-semibold text-white"
            >
              WhatsApp'tan yönlendirme alın
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
