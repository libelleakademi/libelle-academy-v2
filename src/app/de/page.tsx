import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { bundles, germanLevels, medicalCourses } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";

export default function GermanHomePage() {
  return (
    <main className="bg-white text-[#17131c]">
      <SiteHeader />

      <section className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="inline-flex rounded-full bg-[#31175B]/5 px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#31175B]">
            LIBELLE AKADEMIE
          </div>

          <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Deutsch für Ihren nächsten Schritt in Deutschland.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
            Medizinisches Deutsch, Prüfungsvorbereitung und Deutschkurse von A1 bis B2 –
            strukturiert, persönlich und praxisnah.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#medical" className="rounded-full bg-[#31175B] px-6 py-3.5 text-center text-sm font-semibold text-white">
              Medizinisches Deutsch
            </a>
            <a href="#deutsch" className="rounded-full border border-[#58ECF1] bg-[#58ECF1]/10 px-6 py-3.5 text-center text-sm font-semibold">
              Deutsch A1–B2
            </a>
          </div>

          <a
            href={whatsappLink("Hallo, ich möchte mich zu den Libelle-Kursen beraten lassen. Quelle: WEBSITE-HERO")}
            className="mt-6 inline-block text-sm font-semibold text-[#31175B]"
          >
            Beratung über WhatsApp →
          </a>
        </div>

        <div className="rounded-[2.5rem] bg-[#f7f5f9] p-5 shadow-[0_30px_80px_rgba(49,23,91,.12)]">
          <div className="rounded-[2rem] bg-[#31175B] p-8 text-white">
            <div className="text-xs font-bold tracking-[0.16em] text-white/50">
              MEDIZINISCHES DEUTSCH
            </div>
            <div className="mt-8 text-3xl font-semibold">
              Von der Sprache bis zur Prüfung.
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {["FSP", "FaMed", "Zahnmedizin", "Simulationen"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.6rem] bg-white p-5">
              <div className="text-xs font-bold text-[#31175B]">PELEXA</div>
              <div className="mt-3 text-lg font-semibold">Live + Digital Learning</div>
            </div>

            <div className="rounded-[1.6rem] bg-[#58ECF1] p-5">
              <div className="text-xs font-bold">DEUTSCH A1–B2</div>
              <div className="mt-3 text-lg font-semibold">Ein Weg. Vier Niveaus.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#fafafa]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-5 py-7 text-center md:grid-cols-4 lg:px-8">
          {["Seit 2022", "Kleine Gruppen", "Live + Digital", "Medizinischer Fokus"].map((item) => (
            <div key={item} className="font-semibold">{item}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">ZWEI LERNWELTEN</div>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Welcher Weg passt zu Ihrem Ziel?
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2.2rem] bg-[#31175B] p-9 text-white">
            <div className="text-xs font-bold tracking-[0.15em] text-white/45">MEDICAL</div>
            <h3 className="mt-7 text-3xl font-semibold">Medizinisches Deutsch</h3>
            <p className="mt-4 leading-7 text-white/65">
              FSP, FaMed, Zahnmedizin, Prüfungssimulationen und berufliche Kommunikation.
            </p>
            <a href="#medical" className="mt-9 inline-block font-semibold">Kurse ansehen →</a>
          </div>

          <div className="rounded-[2.2rem] border border-[#58ECF1] bg-[#D2ECFF]/40 p-9">
            <div className="text-xs font-bold tracking-[0.15em] text-[#17666a]">GENERAL GERMAN</div>
            <h3 className="mt-7 text-3xl font-semibold">Deutsch A1–B2</h3>
            <p className="mt-4 leading-7 text-black/55">
              Vom ersten Satz bis zur selbstständigen Kommunikation in Deutschland.
            </p>
            <a href="#deutsch" className="mt-9 inline-block font-semibold">Deutschkurse ansehen →</a>
          </div>
        </div>
      </section>

      <section id="medical" className="bg-[#f7f5f9] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">MEDICAL GERMAN</div>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Vorbereitung, die zu Ihrem nächsten Schritt passt.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {medicalCourses.map((course) => (
              <article key={course.title} className="rounded-[2rem] bg-white p-7">
                <div className="flex justify-between gap-4">
                  <span className="rounded-full bg-[#31175B]/7 px-3 py-1.5 text-xs font-bold text-[#31175B]">
                    MEDICAL
                  </span>
                  <div className="text-right">
                    <div className="text-xl font-semibold">{course.price}</div>
                    <div className="text-xs text-black/35">{course.duration}</div>
                  </div>
                </div>

                <h3 className="mt-8 text-2xl font-semibold"><Link href={course.href} className="hover:text-[#31175B]">{course.title} →</Link></h3>
                <p className="mt-4 leading-7 text-black/50">{course.description}</p>

                <a
                  href={whatsappLink(`Hallo, ich interessiere mich für den ${course.title}. Quelle: ${course.source}`)}
                  className="mt-8 inline-block rounded-full bg-[#31175B] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Über WhatsApp anfragen
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-[#17131c] text-white lg:grid-cols-2">
          <div className="p-9 sm:p-12">
            <span className="rounded-full bg-[#58ECF1] px-3 py-1.5 text-xs font-bold text-black">NEU</span>
            <h2 className="mt-7 text-4xl font-semibold tracking-tight">
              <Link href="/de/famed-offline" className="hover:underline">FaMed lernen – in Ihrem eigenen Tempo. →</Link>
            </h2>
            <p className="mt-5 leading-7 text-white/60">
              9 Module, Dokumentationen, Übungen und flexible Prüfungsvorbereitung.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <div className="text-xs text-white/50">FaMed Offline</div>
                <div className="mt-2 text-2xl font-semibold">200 €</div>
              </div>
              <div className="rounded-2xl bg-[#31175B] p-5">
                <div className="text-xs text-white/55">Offline + 5 Simulationen</div>
                <div className="mt-2 text-2xl font-semibold">575 €</div>
              </div>
            </div>

            <a
              href={whatsappLink("Hallo, ich interessiere mich für den FaMed Offline Kurs. Quelle: FAMED-OFFLINE")}
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              FaMed Offline entdecken
            </a>
          </div>

          <div className="bg-[#251c2e] p-8">
            <div className="rounded-[2rem] bg-[#f4f1f7] p-6 text-black">
              <div className="flex justify-between">
                <div>
                  <div className="text-xs font-bold text-[#31175B]">FAMED OFFLINE</div>
                  <div className="mt-1 font-semibold">Ihr Lernbereich</div>
                </div>
                <div className="rounded-full bg-[#31175B] px-3 py-1 text-xs text-white">9 Module</div>
              </div>

              <div className="mt-6 space-y-3">
                {["FaMed-Prüfung", "Anamnese", "Patientenaufklärung", "Patientenvorstellung", "Dokumentation"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-4">
                    <span className="text-xs font-bold text-[#31175B]">0{index + 1}</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#31175B] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-xs font-bold tracking-[0.18em] text-[#58ECF1]">LIBELLE LERNWEGE</div>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Nicht nur einen Kurs wählen. Den richtigen Lernweg wählen.
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {bundles.map((bundle) => (
              <div key={bundle.title} className="rounded-[2rem] border border-white/10 bg-white/8 p-7">
                <h3 className="text-xl font-semibold"><Link href={bundle.href}>{bundle.title} →</Link></h3>
                <div className="mt-6 space-y-2">
                  {bundle.steps.map((step) => (
                    <div key={step} className="rounded-xl bg-white/10 p-3 text-sm">{step}</div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-white/55">{bundle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="deutsch" className="bg-[#D2ECFF]/45 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-xs font-bold tracking-[0.18em] text-[#17666a]">DEUTSCH A1–B2</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Deutsch lernen. In Deutschland ankommen.
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {germanLevels.map((level) => (
              <div key={level} className="rounded-[2rem] border border-[#58ECF1] bg-white p-7">
                <Link href={`/de/deutsch/${level.toLowerCase()}`} className="block text-5xl font-semibold">{level}</Link>
                <div className="mt-10 text-sm font-semibold text-[#17666a]">Deutschkurs →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#31175B] p-10 text-white sm:p-14">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Noch unsicher, welcher Kurs zu Ihnen passt?
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Schreiben Sie uns. Gemeinsam finden wir den passenden nächsten Schritt.
          </p>
          <a
            href={whatsappLink("Hallo, ich möchte mich beraten lassen. Quelle: WEBSITE-FINAL")}
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#31175B]"
          >
            WhatsApp-Beratung starten
          </a>
        </div>
      </section>
    </main>
  );
}
