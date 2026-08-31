import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Eğitmenler | Libelle Academy",
  description:
    "Libelle Academy'nin medikal Almanca ve sınav hazırlığı eğitmenlerini tanıyın.",
};

const consultationMessage =
  "Merhaba, Libelle Academy'nin medikal kurslarıyla ilgileniyorum. Sınavıma hangi kursun uygun olduğunu öğrenmek istiyorum. Kaynak: EĞİTMENLER-SEITE";

const tutors = [
  {
    initials: "FM",
    name: "Firdevs Murad",
    area: "FSP TIP",
    title: "FSP Tıp Eğitmeni",
    text: "İstanbul Erkek Lisesi'nden mezun olduktan sonra Firdevs Murad tıp eğitimine Charité Berlin'de devam etti. Eğitim sırasında nörobilim alanında doktora çalışmaları başladı ve Charité'deki dokümantasyon ve doktorlar için “Doktorlar için Türkçe” dersinin kurucu ekibinde yer aldı.",
    course: "FSP Yoğun ipucu kursu",
    href: "/tr/fsp-medizin",
  },
  {
    initials: "AŞ",
    name: "Alkış Şensoy",
    area: "FAMED",
    title: "FaMed Eğitmeni",
    text: "Alkış Şensoy, İstanbul Erkek Lisesi'nden mezun olduktan sonra Charité Berlin'de tıp eğitimine başladı. 2021–2023 yılları arasında Charité öğrenme merkezinde ortopedi eğitimi verdi ve Libelle'de FaMed hazırlığını yürütmektedir.",
    course: "FaMed Yoğun Kursu",
    href: "/tr/famed",
  },
];

const principles = [
  {
    number: "01",
    title: "Pratik yapın",
    text: "Medikal dil yalnızca anlatılmaz; gerçek iletişim ve sınav durumlarında aktif olarak uygulanır.",
  },
  {
    number: "02",
    title: "Aktif iletişim kurun",
    text: "Anamnez, hasta görüşmesi, dokümantasyon ve hasta sunumu aktif uygulamalarla çalışılır.",
  },
  {
    number: "03",
    title: "Hedefli geri bildirim alın",
    text: "Geri bildirim, dilsel eksikleri ve sınav açısından önemli zayıf noktaları daha net görmenizi sağlar.",
  },
  {
    number: "04",
    title: "Yapılandırılmış hazırlanın",
    text: "Hazırlık, net ders programını dil eğitimi ve ilgili sınav yoluyla birleştirir.",
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
              Eğitmenlerimiz medikal dil ve sınav hazırlığında aktif iletişim, uygulama ve sınav pratiğine odaklanan yapılandırılmış bir öğrenme süreci sunar.
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
                MEDİKAL ALMANCA
              </div>
              <div className="mt-1 text-sm font-semibold">
                Medikal dili aktif kullanın
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                SINAVA YAKIN
              </div>
              <div className="mt-1 text-sm font-semibold">
                Pratik + Geri Bildirim + Uygulama
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-6 shadow-[0_30px_90px_rgba(49,23,91,.16)]">
              <div className="rounded-[2.1rem] bg-[#f3eff7] p-7 sm:p-9">
              <div className="text-xs font-bold tracking-[.17em] text-[#31175B]">
                MEDİKAL ALMANCA
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Sadece teori için değil, iletişim için öğrenin.
              </div>

              <div className="mt-7 space-y-3">
                {[
                  "Medikal mesleki dil",
                  "Hasta iletişimi",
                  "Sınav odaklı çalışma",
                  "Geri bildirim ve uygulama",
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
                  Medikal iletişimi yapılandırılmış şekilde öğrenin ve gerçek sınava yakın koşullarda aktif olarak uygulayın.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                MEDİKAL ALMANCA
              </div>
              <div className="mt-1 text-xs font-semibold">
                Medikal dili aktif kullanın
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                SINAVA YAKIN
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
            Eğitmen seçimi, ilgili medikal kursun ve sınavın odak noktalarına göre yapılır.
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
                    {tutor.course} incele
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
            Doğru sınav yolu, doğru eğitmen desteğiyle daha etkili hale gelir.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
            Önemli olan yalnızca kimin ders verdiği değil; hangi medikal sınava hazırlandığınız ve şu anda hangi çalışma biçimine ihtiyaç duyduğunuzdur.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Link
            href="/tr/fsp-medizin"
            className="rounded-[2rem] bg-[#f7f9fb] p-8 transition hover:-translate-y-1"
          >
            <div className="text-xs font-bold tracking-[.15em] text-[#17666a]">
              FSP TIP
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
              FSP Yoğun ipucu kursu
            </h3>

            <p className="mt-4 leading-7 text-black/50">
              Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
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
              FaMed Yoğun Kursu
            </h3>

            <p className="mt-4 leading-7 text-black/50">
              Medikal iletişim, hasta bilgilendirmesi, dokümantasyon ve sınav simülasyonları.
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
              DİŞ HEKİMLİĞİ
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
              FSP & FaMed Diş Hekimliği
            </h3>

            <p className="mt-4 leading-7 text-black/50">
              Medikal mesleki dil ve sınavlara özel olarak hazırlık
              Diş hekimleri.
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
              Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Öğrenmek, bunu altta yaptığınızda özellikle değerli hale gelir
              Sınav koşullarında test edin.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Sınav simülasyonları öğrendiklerinizi uygulamanıza ve sonraki hazırlığınız için hedefli geri bildirim almanıza yardımcı olur.
            </p>

            <Link
              href="/tr/simulationen"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Simülasyonları incele
            </Link>
          </div>

          <div className="rounded-[2.5rem] bg-white p-8 sm:p-10">
            <div className="space-y-4">
              {[
                ["01", "Sınav durumunu yaşayın"],
                ["02", "İletişimi uygula"],
                ["03", "Geri bildirim alın"],
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
              SONRAKİ ADIMINIZ
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Şu anda hangi sınava hazırlanıyorsunuz?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              Sınav hedefiniz ve mevcut hedefiniz hakkında bize kısaca yazın
              Dur. Doğru kursu bulmanıza yardımcı olacağız.
            </p>
          </div>

          <a
            href={whatsappLink(consultationMessage)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#31175B]"
          >
            FSP · FAMED · DİŞ HEKİMLİĞİ
          </a>
        </div>
      </section>
    </main>
  );
}
