import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kaynaklar | Libelle Academy",
  description:
    "Almanca A1–B2 ve medikal sınav hazırlığı için öğrenme materyalleri, sınav ipuçları, dijital içerikler ve ek kaynaklar.",
};

const consultationMessage =
  "Merhaba, Libelle Academy'de öğrenme materyalleri veya kaynaklar arıyorum. Hedefime hangi içeriklerin uygun olduğunu öğrenmek istiyorum. Kaynak: KAYNAKLAR-SEITE";

const resourceGroups = [
  {
    label: "GENEL ALMANCA",
    title: "Almanca A1–B2",
    text: "Başlangıç seviyesinden B2'ye kadar genel Almanca için gramer, kelime bilgisi ve öğrenme destekleri.",
    href: "/tr/pakete/deutsch-a1-b2",
  },
  {
    label: "MEDİKAL ALMANCA",
    title: "FSP & FaMed",
    text: "Medikal mesleki dil, iletişim ve sınav hazırlığına yönelik öğrenme içerikleri ve sınav ipuçları.",
    href: "/tr/pruefungsvorbereitung",
  },
  {
    label: "SINAV PRATİĞİ",
    title: "Simülasyonlar",
    text: "Gerçek sınavdan önce sınava yakın uygulamalar, geri bildirim ve hedefli çalışma.",
    href: "/tr/simulationen",
  },
];

const digitalFeatures = [
  {
    number: "01",
    title: "Ders kayıtları",
    text: "Kursa bağlı olarak ders içeriklerine dijital öğrenme alanından tekrar erişilebilir.",
  },
  {
    number: "02",
    title: "Dijital materyaller",
    text: "Ek dijital içerikler canlı dersleri destekler ve konuları pekiştirmenize yardımcı olur.",
  },
  {
    number: "03",
    title: "Bağımsız öğrenme",
    text: "Dersler arasında içerikleri kendi başınıza tekrar edebilir ve çalışabilirsiniz.",
  },
  {
    number: "04",
    title: "Sınav odaklı içerikler",
    text: "Medikal alandaki dijital materyaller, ilgili sınav hazırlığıyla bağlantılı şekilde sunulur.",
  },
];

export default function RessourcenPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[650px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              KAYNAKLAR
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Derslerin arasında da Almanca öğrenmeye devam edin.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Dijital öğrenme materyalleri, sınav ipuçları ve ek içerikler dersleri pekiştirmenize ve düzenli şekilde öğrenmeye devam etmenize yardımcı olur.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#ressourcen"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Kaynakları keşfet
              </a>

              <a
                href={whatsappLink(consultationMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Uygun içerikleri bul
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                PELEXA
              </div>
              <div className="mt-1 text-sm font-semibold">
                Canlı dersler arasında öğrenmeye devam
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                ÖĞRENMEYE DEVAM
              </div>
              <div className="mt-1 text-sm font-semibold">
                Tekrar et · pekiştir · uygula
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-6 shadow-[0_30px_90px_rgba(49,23,91,.16)]">
              <div className="rounded-[2.1rem] bg-[#f3eff7] p-7 sm:p-9">
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                DİJİTAL ÖĞRENME
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Canlı dersleri destekleyin. Tekrar edin. Öğrenmeye devam edin.
              </div>

              <div className="mt-7 space-y-3">
                {[
                  "Pelexa öğrenme alanı",
                  "Ders kayıtları",
                  "Dijital öğrenme materyalleri",
                  "Sınav odaklı içerikler",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-[#31175B] p-5 text-white">
                <div className="text-xs font-bold tracking-[.15em] text-[#58ECF1]">
                  HEDEF
                </div>

                <p className="mt-2 leading-7 text-white/70">
                  Öğrenmeyi yalnızca canlı derslerle sınırlamayın; içerikleri düzenli olarak tekrar edin, pekiştirin ve uygulayın.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                PELEXA
              </div>
              <div className="mt-1 text-xs font-semibold">
                Canlı dersler arasında öğrenmeye devam
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                ÖĞRENMEYE DEVAM
              </div>
              <div className="mt-1 text-xs font-semibold">
                Tekrar et · pekiştir · uygula
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-RESOURCES */}
      <EditorialStorySection
        eyebrow="DERSLER ARASINDA ÖĞRENME"
        title="İlerleme yalnızca canlı ders sırasında gerçekleşmez."
        text="Dijital materyaller, tekrar ve bireysel çalışmalar; dersler arasında içeriklere erişmeye ve hedefli şekilde ilerlemeye devam etmenizi sağlar."
        image="/images/resources-digital-study.jpg"
        alt="Dizüstü bilgisayar ve öğrenme materyalleriyle dijital çalışma"
        chip="PELEXA · MATERYALLER · TEKRAR"
      />

      {/* RESOURCE TYPES */}
      <section id="ressourcen" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            ÖĞRENME ALANLARI
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Hedefinize uygun kaynaklar.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Genel Almanca ile medikal sınav hazırlığının odak noktaları farklıdır. Bu nedenle sizi doğrudan hedefinize uygun öğrenme alanına yönlendiriyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {resourceGroups.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-[2.2rem] bg-[#f7f9fb] p-8 transition hover:-translate-y-1"
            >
              <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                {item.label}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-7 text-black/50">{item.text}</p>

              <div className="mt-8 text-sm font-semibold text-[#31175B]">
                Daha fazla bilgi →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PELEXA */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              PELEXA ÖĞRENME ALANI
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Canlı dersler arasında öğrenmeye devam.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Dijital öğrenme alanı, seçili kursları ders kayıtları, materyaller ve ek öğrenme içerikleriyle destekler.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {digitalFeatures.map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] bg-white/10 p-7"
              >
                <div className="text-xs font-bold text-[#58ECF1]">
                  {item.number}
                </div>

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-8 rounded-[2.7rem] bg-[#f3eff7] p-9 sm:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              INSTAGRAM
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">
              Almanca ve sınav ipuçları Instagram'da da.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
              Kısa Almanca ipuçları, sınav odaklı içerikler ve öğrenme önerileri için Instagram hesabımızı da takip edebilirsiniz.
            </p>
          </div>

          <a
            href="https://www.instagram.com/almancahedefim/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#31175B] px-8 py-4 text-center text-sm font-semibold text-white"
          >
            Instagram'ı aç
          </a>
        </div>
      </section>

      {/* WHERE TO GO */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            NEREDE ÖĞRENMEYE DEVAM ETMEK İSTİYORSUNUZ?
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Doğrudan size uygun alana gidin.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Link
            href="/tr/kurse"
            className="rounded-[2.4rem] bg-[#D2ECFF]/60 p-9 sm:p-10"
          >
            <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
              TÜM KURSLAR
            </div>

            <h3 className="mt-5 text-3xl font-semibold">
              Almanca ve medikal kursları inceleyin.
            </h3>

            <p className="mt-5 text-lg leading-8 text-black/55">
              A1'den B2'ye genel Almanca ve medikal Almanca kurslarını tek bir yerde karşılaştırın.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Kurslara git →
            </div>
          </Link>

          <Link
            href="/tr/pruefungsvorbereitung"
            className="rounded-[2.4rem] bg-[#31175B] p-9 text-white sm:p-10"
          >
            <div className="text-xs font-bold tracking-[.16em] text-[#58ECF1]">
              SINAV HAZIRLIĞI
            </div>

            <h3 className="mt-5 text-3xl font-semibold">
              FSP, FaMed veya Diş Hekimliği?
            </h3>

            <p className="mt-5 text-lg leading-8 text-white/60">
              Size uygun medikal sınav yolunu ve ilgili hazırlık programını bulun.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#58ECF1]">
              Sınav hazırlığını incele →
            </div>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              BELİRLİ BİR İÇERİK Mİ ARIYORSUNUZ?
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Şu anda ne çalıştığınızı bize söyleyin.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Dil seviyenizi veya hazırlandığınız sınavı bize kısaca yazın. Size uygun içerikleri veya kursları bulmanıza yardımcı olalım.
            </p>
          </div>

          <a
            href={whatsappLink(consultationMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            WhatsApp'tan sor
          </a>
        </div>
      </section>
    </main>
  );
}
