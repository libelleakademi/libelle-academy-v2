import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FaMed Offline Kursu | Libelle Academy",
  description:
    "FaMed flexibel vorbereiten: strukturierte Module, Dokümantasyonlar ve alıştırmalar. FaMed Offline Kurs für 200 € oder inklusive 5 Sınav simülasyonları für 575 €.",
};

const modules = [
  "FaMed sınavı",
  "Anamnese",
  "Hasta bilgilendirmesi",
  "Hasta sunumu",
  "Dokumentation",
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
  "Hallo, ich interessiere mich für den FaMed Offline Kurs für 200 €. Quelle: LANDING-FAMED-OFFLINE";

const bundleMessage =
  "Hallo, ich interessiere mich für FaMed Offline + 5 Simülasyonlar für 575 €. Quelle: LANDING-FAMED-OFFLINE-BUNDLE";

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
              Ein strukturierter Offline-Kurs mit digitalen Modulen, Dokümantasyonlar ve alıştırmalar für eine flexible FaMed-Vorbereitung.
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
                200 € FaMed Offline kursunu sor
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
                Mit Simülasyonlar kombinierbar
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
                + weitere Inhalte, Dokümantasyonlar ve alıştırmalar
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                ESNEK
              </div>
              <div className="mt-1 text-xs font-semibold">
                Eigenes Lerntempo
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                OFFLINE + LIVE
              </div>
              <div className="mt-1 text-xs font-semibold">
                Simülasyonlar ergänzen
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-FAMED-OFFLINE */}
      <EditorialStorySection
        eyebrow="ESNEK VORBEREITEN"
        title="Kendi başınıza öğrenin, ardından öğrendiklerinizi pratikte test edin."
        text="Der FaMed Offline Kurs ermöglicht eine flexible Vorbereitung mit digitalen Inhalten, Dokümantasyonlar ve alıştırmalar. Wer die Anwendung zusätzlich unter Prüfungsbedingungen trainieren möchte, kann den Lernweg mit Live-Simülasyonlar ergänzen."
        image="/images/home-medical-german-learning.jpg"
        alt="Medizinisches Lernen mit digitalen Materialien"
        chip="OFFLINE LERNEN · LIVE UYGULA"
        reverse
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">
              KURS İÇERİĞİ
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              FaMed hazırlığında adım adım ilerleyin.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/50">
              Die Module verbinden prüfungsrelevante Themen mit Dokümantasyonlar ve alıştırmalar, die Sie flexibel bearbeiten können.
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
              Esnek lernen oder mit Live-Simülasyonlar kombinieren.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2.2rem] border border-white/10 bg-white/8 p-8 sm:p-10">
              <div className="text-xs font-bold tracking-[0.16em] text-white/45">
                FAMED OFFLINE
              </div>
              <div className="mt-7 text-5xl font-semibold">200 €</div>
              <p className="mt-5 max-w-xl leading-7 text-white/60">
                Der komplette Offline-Kurs mit Esnekn, Dokümantasyonlar ve alıştırmalar.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/75">
                <li>✓ Esnek</li>
                <li>✓ Dokumentationen</li>
                <li>✓ Übungen</li>
                <li>✓ Flexible Selbstlernphase</li>
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
                FaMed Offline plus fünf Sınav simülasyonları für die anschließende Live-Prüfungspraxis.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-black/65">
                <li>✓ FaMed Offline Kurs</li>
                <li>✓ 5 Live-Simülasyonlar</li>
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
              ["01", "Esnek vorbereiten", "Bearbeiten Sie die Offline-Inhalte in Ihrem eigenen Tempo."],
              ["02", "Hedefli çalışın", "Nutzen Sie Dokümantasyonlar ve alıştırmalar zur Vertiefung."],
              ["03", "Canlı test edin", "Trainieren Sie anschließend in realistischen Sınav simülasyonları."],
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
              KURS HAKKINDA SORUNUZ MU VAR?
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Hangi seçenek hazırlığınıza daha uygun?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/55">
              Schreiben Sie uns über WhatsApp. Wir helfen Ihnen bei der Auswahl zwischen dem Offline-Kurs und dem Paket mit Simülasyonlar.
            </p>
            <a
              href={whatsappLink(
                "Hallo, ich habe eine Frage zum FaMed Offline Kurs. Quelle: LANDING-FAMED-OFFLINE-BERATUNG"
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17131c]"
            >
              Über WhatsApp beraten lassen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
