import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Eğitmenler | Libelle Academy",
  description:
    "Lernen Sie die Tutorinnen und Tutoren der medizinischen Sprach- und Prüfungsvorbereitung bei Libelle Academy kennen.",
};

const consultationMessage =
  "Hallo, ich interessiere mich für einen medizinischen Kurs bei Libelle Academy und möchte wissen, welcher Kurs zu meiner Prüfung passt. Quelle: EĞİTMENLER-SEITE";

const tutors = [
  {
    initials: "FM",
    name: "Firdevs Murad",
    area: "FSP MEDIZIN",
    title: "FSP Medizin Eğitmeni",
    text: "İstanbul Erkek Lisesi'nden mezun olduktan sonra Firdevs Murad tıp eğitimine Charité Berlin'de devam etti. Eğitimi sırasında nörobilim alanında doktora çalışmasına başladı ve Charité'deki öğrenciler ve doktorlar için oluşturulan “Türkisch für Mediziner” kursunun kurucu ekibinde yer aldı.",
    course: "FSP Medizin Intensivkurs",
    href: "/tr/fsp-medizin",
  },
  {
    initials: "AŞ",
    name: "Alkış Şensoy",
    area: "FAMED",
    title: "FaMed Eğitmeni",
    text: "Alkış Şensoy, İstanbul Erkek Lisesi'nden mezun olduktan sonra Charité Berlin'de tıp eğitimine başladı. 2021–2023 yılları arasında Charité öğrenme merkezinde ortopedi eğitimi verdi ve Libelle'de FaMed hazırlığını yürütmektedir.",
    course: "FaMed Intensivkurs",
    href: "/tr/famed",
  },
];

const principles = [
  {
    number: "01",
    title: "Pratik yapın",
    text: "Medizinische Sprache wird nicht nur erklärt, sondern in konkreten Kommunikations- und Prüfungssituationen angewendet.",
  },
  {
    number: "02",
    title: "Aktif iletişim kurun",
    text: "Anamnese, Patientengespräch, Dokumentation oder Patientenvorstellung werden durch aktive Anwendung trainiert.",
  },
  {
    number: "03",
    title: "Hedefli geri bildirim alın",
    text: "Rückmeldung hilft dabei, sprachliche Unsicherheiten und prüfungsrelevante Schwachstellen konkreter zu erkennen.",
  },
  {
    number: "04",
    title: "Yapılandırılmış hazırlanın",
    text: "Die Vorbereitung folgt klaren Kursinhalten und verbindet Sprachtraining mit dem jeweiligen Prüfungsweg.",
  },
];

export default function TutorenPage() {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      {/* HERO */}
      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[650px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              EĞİTMENLER
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Medikal Almancayı kişisel destekle geliştirin.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Unsere Tutorinnen und Tutoren begleiten die medizinische Sprach-
              und Prüfungsvorbereitung mit einem klaren Fokus auf aktive
              Kommunikation, Anwendung und Prüfungstraining.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#team"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Eğitmenleri tanıyın
              </a>

              <Link
                href="/tr/pruefungsvorbereitung"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Sınav hazırlığını incele
              </Link>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                MEDICAL GERMAN
              </div>
              <div className="mt-1 text-sm font-semibold">
                Medikal dili aktif kullanın
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                PRÜFUNGSNAH
              </div>
              <div className="mt-1 text-sm font-semibold">
                Pratik + Geri Bildirim + Uygulama
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-6 shadow-[0_30px_90px_rgba(49,23,91,.16)]">
              <div className="rounded-[2.1rem] bg-[#f3eff7] p-7 sm:p-9">
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                MEDICAL GERMAN
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Sadece teori için değil, iletişim için öğrenin.
              </div>

              <div className="mt-7 space-y-3">
                {[
                  "Medizinische Fachsprache",
                  "Patientenkommunikation",
                  "Prüfungsorientiertes Training",
                  "Feedback & Anwendung",
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
                  ODAK
                </div>

                <p className="mt-2 leading-7 text-white/70">
                  Medizinische Kommunikation strukturiert lernen und aktiv
                  unter prüfungsnahen Bedingungen anwenden.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                MEDICAL GERMAN
              </div>
              <div className="mt-1 text-xs font-semibold">
                Medikal dili aktif kullanın
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                PRÜFUNGSNAH
              </div>
              <div className="mt-1 text-xs font-semibold">
                Pratik + Geri Bildirim + Uygulama
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            EKİP
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Medikal sınav hazırlığında yanınızdaki ekip.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Die Tutorenzuordnung orientiert sich an den jeweiligen
            medizinischen Kurs- und Prüfungsschwerpunkten.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tutors.map((tutor) => (
            <article
              key={tutor.name}
              className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-[#f7f9fb]"
            >
              <div className="grid min-h-[430px] sm:grid-cols-[.8fr_1.2fr]">
                <div className="flex items-center justify-center bg-[#31175B] p-8">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10 text-5xl font-semibold text-white">
                    {tutor.initials}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="text-xs font-bold tracking-[.16em] text-[#17666a]">
                    {tutor.area}
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold">
                    {tutor.name}
                  </h3>

                  <div className="mt-2 text-lg font-medium text-[#31175B]">
                    {tutor.title}
                  </div>

                  <p className="mt-5 leading-7 text-black/55">
                    {tutor.text}
                  </p>

                  <Link
                    href={tutor.href}
                    className="mt-8 inline-flex w-fit rounded-full bg-[#31175B] px-6 py-3 text-sm font-semibold text-white"
                  >
                    {tutor.course} ansehen
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#31175B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              DERSTE
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              İyi sınav hazırlığı aktif uygulamayla oluşur.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] bg-white/10 p-8"
              >
                <div className="text-xs font-bold text-[#58ECF1]">
                  {item.number}
                </div>

                <h3 className="mt-5 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL PATHS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            MEDİKAL ÖĞRENME YOLLARI
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Der passende Tutor gehört zum passenden Prüfungsweg.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Entscheidend ist nicht nur, wer unterrichtet, sondern welche
            medizinische Prüfung Sie vorbereiten und welche Trainingsform Sie
            aktuell benötigen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Link
            href="/tr/fsp-medizin"
            className="rounded-[2rem] bg-[#f7f9fb] p-8 transition hover:-translate-y-1"
          >
            <div className="text-xs font-bold tracking-[.15em] text-[#17666a]">
              FSP MEDIZIN
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
              FSP Medizin Intensivkurs
            </h3>

            <p className="mt-4 leading-7 text-black/50">
              Medizinische Fachsprache, Anamnese, Dokumentation und
              Patientenvorstellung.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Kursu incele →
            </div>
          </Link>

          <Link
            href="/tr/famed"
            className="rounded-[2rem] bg-[#f7f9fb] p-8 transition hover:-translate-y-1"
          >
            <div className="text-xs font-bold tracking-[.15em] text-[#17666a]">
              FAMED
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
              FaMed Intensivkurs
            </h3>

            <p className="mt-4 leading-7 text-black/50">
              Medizinische Kommunikation, Patientenaufklärung,
              Dokumentation und Prüfungssimulationen.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Kursu incele →
            </div>
          </Link>

          <Link
            href="/tr/fsp-zahnmedizin"
            className="rounded-[2rem] bg-[#D2ECFF]/60 p-8 transition hover:-translate-y-1"
          >
            <div className="text-xs font-bold tracking-[.15em] text-[#17666a]">
              ZAHNMEDIZIN
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
              FSP & FaMed Zahnmedizin
            </h3>

            <p className="mt-4 leading-7 text-black/50">
              Medizinische Fachsprache und Prüfungsvorbereitung speziell für
              Zahnärztinnen und Zahnärzte.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#31175B]">
              Kursu incele →
            </div>
          </Link>
        </div>
      </section>

      {/* SIMULATIONS */}
      <section className="bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              VOM UNTERRICHT ZUR PRÜFUNG
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Lernen wird besonders wertvoll, wenn Sie es unter
              Prüfungsbedingungen testen.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Prüfungssimulationen helfen dabei, das Gelernte praktisch
              anzuwenden und gezieltes Feedback für die weitere Vorbereitung
              zu erhalten.
            </p>

            <Link
              href="/tr/simulationen"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Simulationen ansehen
            </Link>
          </div>

          <div className="rounded-[2.5rem] bg-white p-8 sm:p-10">
            <div className="space-y-4">
              {[
                ["01", "Prüfungssituation erleben"],
                ["02", "Kommunikation anwenden"],
                ["03", "Feedback erhalten"],
                ["04", "Gezielter weitertrainieren"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="flex items-center gap-5 rounded-[1.6rem] bg-[#f7f9fb] p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#31175B] text-xs font-bold text-white">
                    {number}
                  </span>

                  <span className="font-semibold">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#17131c] p-9 text-white sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              IHR NÄCHSTER SCHRITT
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Welche Prüfung bereiten Sie gerade vor?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Schreiben Sie uns kurz Ihr Prüfungsziel und Ihren aktuellen
              Stand. Wir helfen Ihnen beim passenden Kurs.
            </p>
          </div>

          <a
            href={whatsappLink(consultationMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            Über WhatsApp beraten lassen
          </a>
        </div>
      </section>
    </main>
  );
}
