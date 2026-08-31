import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FSP · FAMED · DİŞ HEKİMLİĞİ",
  description:
    "FaMed'e esnek şekilde hazırlanın: yapılandırılmış modüller, dokümantasyonlar ve alıştırmalar. FaMed Offline Kursuuuuuuu 200 €, 5 sınav simülasyonu dahil paket 575 €.",
};

const modules = [
  "FaMed sınavı",
  "Anamnez",
  "Hasta bilgilendirmesi",
  "Hasta sunumu",
  "Dokümantasyon",
  "Medikal gramer",
  "Sınav simülasyonları",
  "Zihinsel sınav hazırlığı",
];

const benefits = [
  "Yapılandırılmış modüller",
  "Dokümantasyonlar ve alıştırmalar",
  "Kendi hızınızda öğrenin",
  "Sınav hazırlığı için dijital materyaller",
];

const courseMessage =
  "Merhaba, 200 €'luk FaMed Offline Kursuuuuuuu ile ilgileniyorum. Kaynak: LANDING-FAMED-OFFLINE";

const bundleMessage =
  "Merhaba, 575 €'luk FaMed Offline + 5 sınav simülasyonu paketi ile ilgileniyorum. Kaynak: LANDING-FAMED-OFFLINE-BUNDLE";

export default function FamedOfflinePage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="overflow-hidden bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <Link href="/tr" className="text-sm font-semibold text-[#31175B]">
              ← Genel Bakışa Dön
            </Link>

            <div className="mt-10 inline-flex rounded-full bg-[#58ECF1] px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#172426]">
              FAMED OFFLINE · YENİ
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              FaMed'e kendi hızınızda hazırlanın.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
              FaMed sınavına yönelik yapılandırılmış hazırlık.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full border border-[#31175B]/10 bg-white px-4 py-2 text-sm text-black/65"
                >
                  {benefit}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(courseMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#31175B] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#4B238B]"
              >
                200 € FaMed Çevrimdışı kursunu sor
              </a>
              <a
                href="#pakete"
                className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-center text-sm font-semibold"
              >
                Paketleri karşılaştır
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                ESNEK
              </div>
              <div className="mt-1 text-sm font-semibold">
                Kendi hızınızda öğrenin
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                OFFLINE + LIVE
              </div>
              <div className="mt-1 text-sm font-semibold">
                Simülasyonlarla birleştirilebilir
              </div>
            </div>

            <div className="rounded-[2.6rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,0.16)] sm:p-7">
            <div className="rounded-[2rem] bg-[#f3eff7] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold tracking-[0.14em] text-[#31175B]">
                    LIBELLE DIGITAL LEARNING
                  </div>
                  <div className="mt-2 text-2xl font-semibold">FaMed öğrenme alanı</div>
                </div>
                <div className="rounded-full bg-[#31175B] px-4 py-2 text-xs font-semibold text-white">
                  Esnek
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {modules.slice(0, 5).map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4"
                  >
                    <span className="text-xs font-bold text-[#31175B]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-[#31175B]/10 bg-white/55 px-5 py-4 text-sm text-black/45">
                + diğer içerikler, dokümantasyonlar ve alıştırmalar
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                ESNEK
              </div>
              <div className="mt-1 text-xs font-semibold">
                Kendi hızınızda
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                OFFLINE + LIVE
              </div>
              <div className="mt-1 text-xs font-semibold">
                Simülasyonlarla destekleyin
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-FAMED-OFFLINE */}
      <EditorialStorySection
        eyebrow="ESNEK HAZIRLIK"
        title="Kendi başınıza öğrenin, ardından öğrendiklerinizi pratikte test edin."
        text="FaMed çevrimdışı kursu, dijital içerik, belgeleme ve alıştırmalar ile esnek hazırlıklara olanak tanır. Uygulamayı sınav koşullarında ek olarak eğitmek isterseniz canlı simülasyonlarla öğrenme yolunu destekleyebilirsiniz."
        image="/images/home-medical-german-learning.jpg"
        alt="Dijital materyallerle medikal öğrenme"
        chip="Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı."
        reverse
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">
              DERS İÇERİĞİ
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              FaMed hazırlığında adım adım ilerleyin.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/50">
              Modüller, sınavla ilgili konuları kendi hızınızda çalışabileceğiniz dokümantasyonlar ve alıştırmalarla birleştirir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-black/5 bg-[#f7f5f9] p-6"
              >
                <div className="text-xs font-bold text-[#31175B]">
                  MODÜL {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 text-lg font-semibold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pakete" className="bg-[#31175B] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[0.18em] text-[#58ECF1]">
              İKİ SEÇENEK
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Esnek öğrenin veya canlı simülasyonlarla birleştirin.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2.2rem] border border-white/10 bg-white/8 p-8 sm:p-10">
              <div className="text-xs font-bold tracking-[0.16em] text-white/45">
                FAMED OFFLINE
              </div>
              <div className="mt-7 text-5xl font-semibold">200 €</div>
              <p className="mt-5 max-w-xl leading-7 text-white/60">
                Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/75">
                <li>✓ Yapılandırılmış modüller</li>
                <li>✓ Dokümantasyonen</li>
                <li>✓ Alıştırmalar</li>
                <li>✓ Esnek bireysel çalışma</li>
              </ul>
              <a
                href={whatsappLink(courseMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#31175B]"
              >
                Offline kursu sor
              </a>
            </article>

            <article className="relative rounded-[2.2rem] bg-white p-8 text-[#17131c] sm:p-10">
              <div className="absolute right-7 top-7 rounded-full bg-[#58ECF1] px-3 py-1.5 text-xs font-bold">
                KOMPLE PAKET
              </div>
              <div className="text-xs font-bold tracking-[0.16em] text-[#31175B]">
                OFFLINE + LIVE
              </div>
              <div className="mt-7 text-5xl font-semibold">575 €</div>
              <p className="mt-5 max-w-xl leading-7 text-black/55">
                FaMed Offline Kursuuuu + sınav pratiği için 5 canlı simülasyon.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-black/65">
                <li>✓ FaMed Offline Kursuuuuu</li>
                <li>✓ 5 canlı simülasyon</li>
                <li>✓ Sınav durumlarını çalışın</li>
                <li>✓ Kişisel geri bildirim</li>
              </ul>
              <a
                href={whatsappLink(bundleMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-block rounded-full bg-[#31175B] px-6 py-3 text-sm font-semibold text-white"
              >
                Komple paketi sor
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">
              NEDEN OFFLINE + SİMÜLASYON?
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Bilgiyi oluşturun. Ardından sınav koşullarında uygulayın.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              ["01", "Esnek hazırlanın", "Offline içerikleri kendi hızınızda çalışın."],
              ["02", "Hedefli çalışın", "Dokümantasyonlar ve alıştırmalarla konuları pekiştirin."],
              ["03", "Canlı test edin", "Ardından gerçekçi sınav simülasyonlarında pratik yapın."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-[1.8rem] bg-[#f7f5f9] p-6">
                <div className="text-xs font-bold text-[#31175B]">{number}</div>
                <div className="mt-3 text-xl font-semibold">{title}</div>
                <p className="mt-2 leading-7 text-black/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#17131c] p-9 text-white sm:p-14">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[0.18em] text-[#58ECF1]">
              VAR'DA HAKKINDA SORUNUZ NEREDE?
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Hangi seçenek hazırlığınıza daha uygun?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/55">
              Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
            </p>
            <a
              href={whatsappLink(
                "Merhaba, FaMed Offline Kursuuuuuuu hakkında bir sorum var. Kaynak: LANDING-FAMED-OFFLINE-BERATUNG"
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17131c]"
            >
              FSP · FAMED · DİŞ HEKİMLİĞİ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
