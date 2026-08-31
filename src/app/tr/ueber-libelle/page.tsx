import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Libelle Academy Hakkında",
  description:
    "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
};

const consultationMessage =
  "Merhaba, kurslar ve öğrenme yolları hakkında bilgi almak istiyorum. Kaynak: UEBER-LIBELLE";

const principles = [
  {
    number: "01",
    title: "Canlı öğrenme",
    text: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
  },
  {
    number: "02",
    title: "Dijital pekiştirme",
    text: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
  },
  {
    number: "03",
    title: "Küçük gruplarda çalışma",
    text: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
  },
  {
    number: "04",
    title: "Net bir hedefle öğrenme",
    text: "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
  },
];

const learningWorlds = [
  {
    label: "GENEL ALMANCA",
    title: "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
    text: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
    href: "/tr/pakete/deutsch-a1-b2",
  },
  {
    label: "MEDİKAL ALMANCA",
    title: "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
    text: "FaMed sınavına yönelik yapılandırılmış hazırlık.",
    href: "/tr/pruefungsvorbereitung",
  },
];

export default function UeberLibellePage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[680px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              LIBELLE HAKKINDA
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Canlı öğrenin. Dijital olarak pekiştirin. Hedefli ilerleyin.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">Almanca seviyenize uygun yapılandırılmış öğrenme adımı.</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tr/kurse"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Kursları keşfedin
              </Link>

              <a
                href={whatsappLink(consultationMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Ücretsiz yönlendirme alın
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                CANLI + DİJİTAL
              </div>
              <div className="mt-1 text-sm font-semibold">
                Öğrenme ders bittiğinde bitmez
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                NET ÖĞRENME YOLU
              </div>
              <div className="mt-1 text-sm font-semibold">
                Mevcut seviyenizden bir sonraki hedefe
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-6 shadow-[0_30px_90px_rgba(49,23,91,.16)]">
              <div className="rounded-[2.1rem] bg-[#f3eff7] p-7 sm:p-9">
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                LIBELLE ÖĞRENME PRENSİBİ
              </div>

              <div className="mt-3 text-3xl font-semibold">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</div>

              <div className="mt-7 space-y-3">
                {[
                  "Canlı dersler",
                  "Küçük gruplar",
                  "Dijital öğrenme materyalleri",
                  "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
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

                <p className="mt-2 leading-7 text-white/70">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                CANLI + DİJİTAL
              </div>
              <div className="mt-1 text-xs font-semibold">
                Öğrenme ders bittiğinde bitmez
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                NET ÖĞRENME YOLU
              </div>
              <div className="mt-1 text-xs font-semibold">
                Mevcut seviyenizden bir sonraki hedefe
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-ABOUT */}
      <EditorialStorySection
        eyebrow="BİR HEDEFLE ÖĞRENME"
        title="Ders önemlidir. Asıl önemli olan sonrasında neyi kullanabildiğinizdir."
        text="Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı."
        image="/images/home-general-german-learning.jpg"
        alt="Almanca seviyenize uygun yapılandırılmış öğrenme adımı."
        chip="Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı."
      />

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            NASIL ÖĞRENİYORUZ?
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map((item) => (
            <article
              key={item.number}
              className="rounded-[2rem] border border-black/5 bg-[#f7f9fb] p-8"
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

      {/* TWO LEARNING WORLDS */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              İKİ ÖĞRENME ALANI
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Almanca seviyenize uygun yapılandırılmış öğrenme adımı.</h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {learningWorlds.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[2.3rem] bg-white/10 p-9 transition hover:bg-white/15"
              >
                <div className="text-xs font-bold tracking-[.16em] text-[#58ECF1]">
                  {item.label}
                </div>

                <h3 className="mt-6 text-3xl font-semibold">{item.title}</h3>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
                  {item.text}
                </p>

                <div className="mt-8 text-sm font-semibold text-[#58ECF1]">
                  Daha fazla bilgi →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PELEXA */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              CANLI + DİJİTAL
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Ders, öğrenme sürecinin yalnızca bir parçasıdır.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>

            <p className="mt-5 max-w-xl leading-7 text-black/50">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
          </div>

          <div className="rounded-[2.5rem] bg-[#f3eff7] p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
              PELEXA ÖĞRENME ALANI
            </div>

            <div className="mt-7 space-y-4">
              {[
                ["01", "Ders kayıtları", "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı."],
                [
                  "02",
                  "Dijital materyaller",
                  "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
                ],
                [
                  "03",
                  "Eigenes Lerntempo",
                  "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-[1.7rem] bg-white p-6"
                >
                  <div className="text-xs font-bold text-[#31175B]">
                    {number}
                  </div>

                  <div className="mt-3 text-xl font-semibold">{title}</div>

                  <p className="mt-2 leading-7 text-black/50">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="bg-[#f7f5f9]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8">
              <div className="text-xs font-bold text-[#17666a]">01</div>
              <h3 className="mt-5 text-2xl font-semibold">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</h3>
              <p className="mt-4 leading-7 text-black/50">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
            </div>

            <div className="rounded-[2rem] bg-white p-8">
              <div className="text-xs font-bold text-[#17666a]">02</div>
              <h3 className="mt-5 text-2xl font-semibold">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</h3>
              <p className="mt-4 leading-7 text-black/50">Almanca seviyenize uygun yapılandırılmış öğrenme adımı.</p>
            </div>

            <div className="rounded-[2rem] bg-white p-8">
              <div className="text-xs font-bold text-[#17666a]">03</div>
              <h3 className="mt-5 text-2xl font-semibold">
                FSP · FAMED · DİŞ HEKİMLİĞİ
              </h3>
              <p className="mt-4 leading-7 text-black/50">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE FOCUS ON */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              UNSER FOKUS
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
                "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
              ],
              [
                "Klare Lernziele",
                "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
              ],
              [
                "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
                "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
              ],
              [
                "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
                "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] bg-[#f7f9fb] p-7"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-black/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="bg-[#D2ECFF]/50">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <Link
            href="/tr/kurse"
            className="rounded-[2.5rem] bg-white p-9 sm:p-11"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#17666a]">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</h2>

            <p className="mt-6 text-lg leading-8 text-black/55">Almanca seviyenize uygun yapılandırılmış öğrenme adımı.</p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</div>
          </Link>

          <Link
            href="/tr/pruefungsvorbereitung"
            className="rounded-[2.5rem] bg-[#31175B] p-9 text-white sm:p-11"
          >
            <div className="text-xs font-bold tracking-[.17em] text-[#58ECF1]">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">FaMed sınavına yönelik yapılandırılmış hazırlık.</h2>

            <p className="mt-6 text-lg leading-8 text-white/60">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>

            <div className="mt-8 text-sm font-semibold text-[#58ECF1]">
              Sınav hazırlığını incele →
            </div>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              SONRAKİ ADIMINIZ
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.</p>
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
