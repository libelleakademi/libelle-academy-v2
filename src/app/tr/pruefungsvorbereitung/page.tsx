import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tıp sınavına hazırlık | Libelle Academy",
  description:
    "FSP, FaMed, Diş Hekimliği, Simülasyonlar ve esnek tıbbi sınav hazırlığı Libelle Academy'te.",
};

const consultationMessage =
  "Merhaba, tıbbi bir sınava hazırlanmak istiyorum ancak hangi kursun veya öğrenme yolunun benim için uygun olduğundan hâlâ emin değilim. Lütfen bana tavsiyede bulunun. Kaynak: PRUEFUNGSVORBEREITUNG-HUB";

const mainCourses = [
  {
    label: "FSP TIP",
    title: "FSP Yoğun ipucu kursu",
    text: "Tıbbi terminoloji, anamnez, dokümantasyon, hasta sunumu ve gerçekçi simülasyonları.",
    href: "/tr/fsp-medizin",
    meta: "8 hafta · 950 €",
  },
  {
    label: "FAMED",
    title: "FaMed Yoğun Kursu",
    text: "Tıbbi iletişim için yapılandırılmış hazırlık ve FaMed sınav formatının gereksinimleri.",
    href: "/tr/famed",
    meta: "6 hafta · 600 €",
  },
  {
    label: "DİŞ HEKİMLİĞİ",
    title: "FSP & FaMed Diş Hekimliği",
    text: "Yoğun simülasyon ve bireysel geri bildirim ile özellikle diş hekimleri için sınav hazırlığı.",
    href: "/tr/fsp-zahnmedizin",
    meta: "8 hafta · 950 €",
  },
  {
    label: "SINAV PRATİĞİ",
    title: "Sınav simülasyonları",
    text: "Zaten hazırlandıysanız ve gerçek sınavdan önce performansınızı gerçekçi bir şekilde test etmek istiyorsanız.",
    href: "/tr/simulationen",
    meta: "75 €'dan başlayan fiyatlarla",
  },
];

const decisions = [
  {
    number: "01",
    title: "Hangi sınava hazırlanıyorsunuz?",
    text: "FSP, FaMed veya Diş Hekimliği sizin için hangi hazırlık odağının anlamlı olduğunu belirler.",
  },
  {
    number: "02",
    title: "Medikal Almancanız ne kadar güçlü?",
    text: "Dilsel temel henüz yeterince sağlam değilse, tıbbi dil hazırlığı aşaması yararlı olabilir.",
  },
  {
    number: "03",
    title: "Sınav tarihiniz ne kadar yakın?",
    text: "Sınav yaklaştıkça hedeflenen formattaki eğitim ve gerçekçi simülasyonlar da daha önemli hale geliyor.",
  },
  {
    number: "04",
    title: "Canlı derse mi, esnekliğe mi ihtiyacınız var?",
    text: "Yoğun kursların yanı sıra esnek kendi kendine öğrenme ve kombinasyon seçenekleri de mevcuttur.",
  },
];

export default function PruefungsvorbereitungPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[680px] lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              SINAV HAZIRLIĞI
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Herhangi bir kursu değil, sınavınıza giden doğru yolu seçin.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              FSP, FaMed, Diş Hekimliği veya hedeflenen simülasyonlar: sizinki
              Hazırlık şu anki sınavınız için olmalıdır
              dil seviyeniz ve programınız.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(consultationMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Uygun hazırlık yolunu bul
              </a>

              <a
                href="#wege"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Sınav yollarını incele
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
              </div>
              <div className="mt-1 text-sm font-semibold">
                Sınavınıza uygun hazırlanın
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                HÂLÂ EMİN DEĞİL MİSİNİZ?
              </div>
              <div className="mt-1 text-sm font-semibold">
                Önce doğru yolu belirleyin
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-6 shadow-[0_30px_90px_rgba(49,23,91,.16)]">
              <div className="rounded-[2.1rem] bg-[#f3eff7] p-7 sm:p-9">
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                HANGİ YOL SİZE UYGUN?
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Sınavınız, hazırlık yolunuzu belirler.
              </div>

              <div className="mt-7 space-y-3">
                {[
                  ["FSP Tıp", "Teknik dil + iletişim"],
                  ["FaMed", "FaMed'e özel hazırlık"],
                  ["Diş Hekimliği", "FSP & FaMed Diş Hekimliği"],
                  ["Simülasyonlar", "Sınavı gerçekçi bir şekilde test edin"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-white px-5 py-4"
                  >
                    <div className="font-semibold">{title}</div>
                    <div className="mt-1 text-sm text-black/45">{text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-[#31175B] p-5 text-white">
                <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                  HÂLÂ EMİN DEĞİL MİSİNİZ?
                </div>
                <p className="mt-2 leading-7 text-white/70">
                  Kararı tek başına vermek zorunda değilsin. yardım ediyoruz
                  Başlamak için en mantıklı yolu siz belirleyeceksiniz.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
              </div>
              <div className="mt-1 text-xs font-semibold">
                Sınavınıza uygun hazırlanın
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                HÂLÂ EMİN DEĞİL MİSİNİZ?
              </div>
              <div className="mt-1 text-xs font-semibold">
                Önce doğru yolu belirleyin
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-PRUEFUNG */}
      <EditorialStorySection
        eyebrow="SINAVA YAKIN HAZIRLIK"
        title="Sınav kaç sayfa okuduğunuzu ölçmez."
        text="Tıbbi iletişimin gerçekçi koşullar altında çalışıp çalışmadığını test eder. Bu nedenle hazırlık, dil, yapı, uygulama ve geri bildirimi birleştirmelidir."
        image="/images/fsp-doctor-patient-consultation.jpg"
        alt="Tıbbi hasta görüşmesi"
        chip="DİL · YAPI · UYGULAMA"
        reverse
      />

      {/* MAIN COURSES */}
      <section id="wege" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            SINAV HAZIRLIK YOLLARINIZ
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Sınavınıza ve mevcut hazırlık seviyenize göre seçim yapın.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Her yolun farklı bir odak noktası vardır. Bu yüzden iyi şeyler başlar
            Doğru kararla sınava hazırlık.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {mainCourses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="group rounded-[2.2rem] border border-black/5 bg-[#f7f9fb] p-8 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(49,23,91,.08)]"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                  {course.label}
                </div>

                <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold">
                  {course.meta}
                </div>
              </div>

              <h3 className="mt-8 text-3xl font-semibold">{course.title}</h3>

              <p className="mt-4 leading-7 text-black/55">{course.text}</p>

              <div className="mt-8 text-sm font-semibold text-[#31175B]">
                Kursu incele →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DECISION */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              KAYIT OLMADAN ÖNCE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Dört soru, hangi hazırlığın sizin için gerçekten doğru olduğunu belirler.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {decisions.map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] bg-white/10 p-8"
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

      {/* FLEXIBLE OPTIONS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
            DİĞER SEÇENEKLER
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Her hazırlık süreci aynı olmak zorunda değildir.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Link
            href="/tr/famed-offline"
            className="rounded-[2.4rem] bg-[#f7f5f9] p-9 sm:p-10"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
              ESNEK ÖĞRENME
            </div>

            <h3 className="mt-5 text-3xl font-semibold">
              FaMed Offline
            </h3>

            <p className="mt-5 text-lg leading-8 text-black/55">
              FaMed hazırlığınızın kendi temponuzda esnek olmasını istiyorsanız
              oluşturun ve gerekirse canlı simülasyonla birleştirin.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              FaMed Offline'ı incele →
            </div>
          </Link>

          <Link
            href="/tr/pakete/medizinischer-sprachweg"
            className="rounded-[2.4rem] bg-[#D2ECFF]/60 p-9 sm:p-10"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#17666a]">
              SINAV HAZIRLIĞI'NDAN ÖNCE?
            </div>

            <h3 className="mt-5 text-3xl font-semibold">
              Tıbbi dil yolu
            </h3>

            <p className="mt-5 text-lg leading-8 text-black/55">
              Öncelikle tıbbi dil becerilerinizi güçlendirirseniz ve
              daha sonra özellikle FSP, FaMed veya Simülasyonlar'a geçin
              isterim.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Tıbbi dil yolunu görüntüleyin →
            </div>
          </Link>
        </div>
      </section>

      {/* SIMPLE DECISION PATH */}
      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              SCHNELLE ORIENTIERUNG
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Şu anda neredesin?
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8">
              <div className="text-xs font-bold text-[#17666a]">01</div>
              <h3 className="mt-5 text-2xl font-semibold">
                Dil hala belirsiz
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                İlk olarak, özellikle tıbbi dil becerilerini güçlendirin.
              </p>
              <Link
                href="/tr/pakete/medizinischer-sprachweg"
                className="mt-7 inline-block text-sm font-semibold text-[#31175B]"
              >
                Öğrenme yolunu incele →
              </Link>
            </div>

            <div className="rounded-[2rem] bg-white p-8">
              <div className="text-xs font-bold text-[#17666a]">02</div>
              <h3 className="mt-5 text-2xl font-semibold">
                Sınava özel hazırlanın
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                FaMed sınavına yönelik yapılandırılmış hazırlık.
              </p>
              <a
                href="#wege"
                className="mt-7 inline-block text-sm font-semibold text-[#31175B]"
              >
                Kursları karşılaştır →
              </a>
            </div>

            <div className="rounded-[2rem] bg-white p-8">
              <div className="text-xs font-bold text-[#17666a]">03</div>
              <h3 className="mt-5 text-2xl font-semibold">
                Sınava neredeyse hazırız
              </h3>
              <p className="mt-4 leading-7 text-black/55">
                Gerçekçi bir şekilde simüle edin, geri bildirim alın ve son
                Belirsizliklerin farkına varın.
              </p>
              <Link
                href="/tr/simulationen"
                className="mt-7 inline-block text-sm font-semibold text-[#31175B]"
              >
                Gerçekçi sınav simülasyonu ve hedefli geri bildirim.
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              HÂLÂ EMİN DEĞİL MİSİNİZ?
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Bize sınav, seviye ve program hakkında bilgi verin.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Bir sonraki mantıklı adımı atmanıza yardımcı olacağız
              bir araya getirmek.
            </p>
          </div>

          <a
            href={whatsappLink(consultationMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            WhatsApp hakkında tavsiye alın
          </a>
        </div>
      </section>
    </main>
  );
}
