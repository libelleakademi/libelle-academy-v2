import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import HomeConversion from "@/components/tr/HomeConversion";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Libelle Academy | Almanca & Medikal Sınav Hazırlığı",
  description:
    "Almanca A1–B2, FSP, FaMed, diş hekimliği ve gerçekçi sınav simülasyonları.",
};

const problems = [
  {
    number: "01",
    title: "Çok çalışmak ama yine de net bir yön bulamamak.",
    text: "Daha fazla materyal, bir sonraki adımda gerçekten neyi çalışmanız gerektiği net değilse tek başına yeterli olmaz.",
  },
  {
    number: "02",
    title: "Teoride biliyorsunuz. Konuşurken her zaman aynı şekilde olmuyor.",
    text: "Dinlerken, cevap verirken ve düşüncelerinizi yapılandırırken dili aynı anda doğru şekilde kullanabilmeniz gerekir.",
  },
  {
    number: "03",
    title: "Sınav yaklaştıkça belirsizlik artabilir.",
    text: "Sınav öncesinde yalnızca bilgi değil, bu bilgiyi gerçekçi koşullarda kullanabilmek önemlidir.",
  },
];

const medical = [
  {
    label: "FSP TIP",
    title: "FSP Tıp",
    text: "Medikal iletişim, anamnez, dokümantasyon ve hasta sunumunu hedefli şekilde çalışın.",
    info: "8 hafta · 950 €",
    href: "/tr/fsp-medizin",
  },
  {
    label: "FAMED",
    title: "FaMed",
    text: "Medikal iletişiminizi FaMed sınav formatına göre geliştirin ve aktif olarak uygulayın.",
    info: "6 hafta · 600 €",
    href: "/tr/famed",
  },
  {
    label: "DİŞ HEKİMLİĞİ",
    title: "FSP & FaMed Diş Hekimliği",
    text: "Diş hekimlerine özel sınav odaklı hazırlık.",
    info: "8 hafta · 950 €",
    href: "/tr/fsp-zahnmedizin",
  },
  {
    label: "GERÇEKLİK KONTROLÜ",
    title: "Sınav simülasyonları",
    text: "Gerçekçi koşullarda kendinizi test edin, kişisel geri bildirim alın ve eksiklerinizi hedefli geliştirin.",
    info: "75 €'dan başlayan fiyatlarla",
    href: "/tr/simulationen",
  },
];

export default function TurkishHomePage() {
  return (
    <main className="bg-white text-[#17131c]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#D2ECFF]/45">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#58ECF1]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#31175B]/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-bold tracking-[.16em] text-[#31175B] shadow-sm">
              <span className="home-pulse-dot h-2 w-2 rounded-full bg-[#58ECF1]" />
              LIBELLE ACADEMY
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.01] tracking-[-.05em] sm:text-6xl lg:text-7xl">
              Almancanız bir sonraki adımı atmanıza engel olmamalı.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
              İster A1 seviyesinden başlayın, ister B2'ye ulaşmak ya da medikal bir sınava hazırlanmak isteyin: yalnızca daha fazla materyale değil, net bir öğrenme yoluna ve gerçek uygulamaya ihtiyacınız var.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lernweg"
                className="rounded-full bg-[#31175B] px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Öğrenme yolumu bul
              </a>

              <a
                href={whatsappLink(
                  "Merhaba, mevcut durumuma hangi öğrenme yolunun uygun olduğunu öğrenmek istiyorum. Kaynak: HOME-HERO"
                )}
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold"
              >
                Ücretsiz yönlendirme alın
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-black/45">
              <span>✓ Canlı dersler</span>
              <span>✓ Dijital öğrenme içerikleri</span>
              <span>✓ Küçük gruplar</span>
              <span>✓ Sınav simülasyonları</span>
            </div>
          </div>

          <div className="relative">
            <div className="home-orbit absolute left-8 -top-10 z-10 hidden rounded-2xl bg-white px-5 py-4 shadow-xl lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                CANLI + DİJİTAL
              </div>
              <div className="mt-1 text-sm font-semibold">
                Dersler arasında öğrenmeye devam
              </div>
            </div>

            <div className="home-orbit-delay absolute -right-2 -bottom-6 z-10 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-xl lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                SINAVA YAKIN
              </div>
              <div className="mt-1 text-sm font-semibold">
                Sadece okumak yerine uygulayın
              </div>
            </div>

            <div className="rounded-[2.8rem] bg-[#17131c] p-5 shadow-[0_35px_100px_rgba(49,23,91,.20)]">
              <div className="rounded-[2.2rem] bg-[#f3eff7] p-7">
                <div className="text-[10px] font-bold tracking-[.17em] text-[#31175B]">
                  LIBELLE ÖĞRENME YOLU
                </div>

                <h2 className="mt-3 text-2xl font-semibold">
                  Bir sonraki adımınız ne?
                </h2>

                <div className="mt-7 space-y-3">
                  {[
                    ["01", "Almancayı geliştirin", "A1 → B2"],
                    ["02", "Medikal alanda uzmanlaşın", "FSP · FaMed"],
                    ["03", "Gerçekçi şekilde test edin", "Simülasyonlar"],
                  ].map(([number, title, meta], index) => (
                    <div
                      key={number}
                      className={`flex items-center gap-4 rounded-[1.4rem] p-4 ${
                        index === 1
                          ? "bg-[#31175B] text-white"
                          : "bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${
                          index === 1
                            ? "bg-white/10 text-[#58ECF1]"
                            : "bg-[#f3eff7] text-[#31175B]"
                        }`}
                      >
                        {number}
                      </span>

                      <div>
                        <div className="font-semibold">{title}</div>
                        <div
                          className={`mt-1 text-xs ${
                            index === 1 ? "text-white/45" : "text-black/35"
                          }`}
                        >
                          {meta}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.5rem] bg-[#D2ECFF]/70 p-5">
                  <div className="text-xs font-bold text-[#17666a]">
                    EMİN DEĞİL MİSİNİZ?
                  </div>
                  <p className="mt-2 text-sm leading-6 text-black/55">
                    İlk yönlendirme için seviyeniz, hedefiniz ve varsa sınav tarihiniz yeterlidir.
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE / TABLET HERO CARDS */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:hidden">
              <div className="home-orbit rounded-2xl bg-white px-5 py-4 shadow-xl">
                <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                  CANLI + DİJİTAL
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Dersler arasında öğrenmeye devam
                </div>
              </div>

              <div className="home-orbit-delay rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-xl">
                <div className="text-[10px] font-bold tracking-[.14em]">
                  SINAVA YAKIN
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Sadece okumak yerine uygulayın
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* MARKETING-PROOF */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[2.8rem] bg-[#17131c] text-white shadow-[0_30px_90px_rgba(49,23,91,.12)]">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_.85fr]">

              <div className="p-8 sm:p-10 lg:p-14">
                <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                  NEDEN LIBELLE?
                </div>

                <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-.04em] sm:text-4xl lg:text-5xl">
                  Tek bir öğrenme yolu.
                  <span className="block text-white/55">
                    Genel Almancadan medikal sınava kadar.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
                  Libelle Academy; genel Almanca, medikal mesleki dil ve gerçekçi sınav hazırlığını yapılandırılmış tek bir öğrenme yolunda birleştirir.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Almanca A1–B2",
                    "FSP Tıp",
                    "FaMed",
                    "Diş Hekimliği",
                    "Simülasyonlar",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[.06] px-4 py-2 text-xs font-semibold text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="m-5 rounded-[2.2rem] bg-[#f3eff7] p-8 text-[#17131c] sm:m-7 sm:p-10 lg:m-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#58ECF1]/35 px-4 py-2 text-[10px] font-bold tracking-[.15em] text-[#17666a]">
                  DIŞ KAYNAKTA LİSTELENME
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight sm:text-3xl">
                  FaMed’in dil okulları listesinde yer alıyoruz.
                </h3>

                <p className="mt-5 leading-7 text-black/55">
                  Libelle Academy, FaMed’in sınav formatına hazırlık sunan dil okulları listesinde yer almaktadır.
                </p>

                <a
                  href="https://famed-test.de/sprachschulen/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#31175B] px-6 py-3 text-sm font-semibold text-white"
                >
                  FaMed listesini görüntüle
                  <span aria-hidden="true">↗</span>
                </a>

                <p className="mt-5 text-xs leading-5 text-black/35">
                  FaMed, listelenen dil okulları için hazırlık kurslarına yönelik belirli kalite kriterleri tanımlamaktadır.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-7 text-center md:grid-cols-4 lg:px-8">
          {[
            ["Canlı", "Canlı ve kişisel eğitim"],
            ["Dijital", "Pelexa & materyaller"],
            ["Küçük Grup", "Küçük gruplar"],
            ["Gerçekçi", "Sınav simülasyonları"],
          ].map(([title, text]) => (
            <div key={title}>
              <div className="font-semibold text-[#31175B]">{title}</div>
              <div className="mt-1 text-xs text-black/40">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FUTURE IN GERMANY */}
      <section className="overflow-hidden bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">

          <div className="relative min-h-[570px] sm:min-h-[650px]">
            <div className="absolute left-0 top-0 h-[82%] w-[78%] overflow-hidden rounded-[2.8rem] shadow-[0_35px_90px_rgba(49,23,91,.12)]">
              <Image
                src="/images/home-germany-future.jpg"
                alt="Almanya’da günlük yaşam"
                fill
                sizes="(max-width: 1024px) 78vw, 520px"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[46%] w-[54%] overflow-hidden rounded-[2.2rem] border-[8px] border-white shadow-[0_28px_70px_rgba(49,23,91,.18)]">
              <Image
                src="/images/home-general-german-learning.jpg"
                alt="Çevrimiçi Almanca öğrenin"
                fill
                sizes="(max-width: 1024px) 54vw, 360px"
                className="object-cover"
              />
            </div>

            <div className="home-orbit absolute right-[4%] top-[8%] z-20 rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-xl">
              <div className="text-[10px] font-bold tracking-[.14em]">
                A1 → B2
              </div>
              <div className="mt-1 max-w-[170px] text-sm font-semibold leading-5">
                İlk cümleden bağımsız iletişime
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              BİR DİL KURSUNDAN DAHA FAZLASI
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-5xl lg:text-6xl">
              Asıl hedef yalnızca Almanca değil.
              <span className="block text-[#31175B]">
                Asıl hedef, Almancanın mümkün kıldığı hayat.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">
              Günlük yaşamda bağımsız iletişim kurun. İş hayatında daha güvenli hissedin. Konuşmaları anlayın, kararlarınızı kendiniz verin ve Almanya’da adım adım kendinizi daha rahat hissedin.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ["GÜNLÜK YAŞAM", "Bağımsız iletişim"],
                ["KARİYER", "Daha güvenli iletişim"],
                ["GELECEK", "Yeni fırsatlar"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.6rem] bg-[#f3eff7] p-5"
                >
                  <div className="text-[10px] font-bold tracking-[.14em] text-[#31175B]">
                    {title}
                  </div>
                  <div className="mt-3 text-sm font-semibold leading-6">
                    {text}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/tr/pakete/deutsch-a1-b2"
              className="mt-9 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
            >
              A1–B2 öğrenme yolunu keşfedin
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              NEDEN HÂLÂ ZOR HİSSETTİREBİLİR?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Sorun her zaman yeterince çalışmamanız değildir.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Çoğu zaman eksik olan motivasyon değil, doğru yönlendirme ve gerçek uygulamadır.
            </p>
          </div>

          <div className="space-y-4">
            {problems.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 rounded-[2rem] bg-[#f7f9fb] p-7 sm:grid-cols-[auto_1fr]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#31175B] text-xs font-bold text-white">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-black/50">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="lernweg">
        <HomeConversion />
      </div>



      {/* SOCIAL-PROOF */}
      <section className="bg-[#D2ECFF]/30 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">

            <div>
              <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
                ÖĞRENCİ DENEYİMLERİ
              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-.045em] sm:text-5xl">
                Yalnızca öğrenme yolu önemli değildir.
                <span className="block text-[#31175B]">
                  Asıl önemli olan bu yolun uygulamada nasıl ilerlediğidir.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-black/50">
                Libelle Academy hakkında daha önce herkese açık olarak paylaşılmış iki öğrenci deneyimi.
              </p>
            </div>

            <div className="grid gap-4">

              <article className="rounded-[2.2rem] bg-white p-7 shadow-[0_20px_60px_rgba(49,23,91,.07)] sm:p-9">
                <div className="text-4xl leading-none text-[#58ECF1]">
                  “
                </div>

                <blockquote className="mt-3 text-xl font-medium leading-8 sm:text-2xl">
                  Çok etkili ve öğretici bir kurstu. Özellikle Almanya'da çalışmak isteyen meslektaşlarıma tavsiye ediyorum.
                </blockquote>

                <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-black/5 pt-6">
                  <div>
                    <div className="font-semibold">
                      Dr. Hayriye Erpak
                    </div>
                    <div className="mt-1 text-sm text-black/40">
                      Diş Hekimi · Hamburg · Almancadan çeviri
                    </div>
                  </div>

                  <div className="rounded-full bg-[#f3eff7] px-4 py-2 text-xs font-semibold text-[#31175B]">
                    FSP Diş Hekimliği
                  </div>
                </div>
              </article>

              <article className="rounded-[2.2rem] bg-[#17131c] p-7 text-white shadow-[0_20px_60px_rgba(49,23,91,.10)] sm:p-9">
                <div className="text-4xl leading-none text-[#58ECF1]">
                  “
                </div>

                <blockquote className="mt-3 text-xl font-medium leading-8 sm:text-2xl">
                  Özellikle bu kursu son derece verimli ve üretken şekilde yapılandırdığı için Ezgi'ye teşekkür etmek istiyorum.
                </blockquote>

                <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    <div className="font-semibold">
                      Doz. Dr. Özge Özdal Zincir
                    </div>
                    <div className="mt-1 text-sm text-white/40">
                      İç Hastalıkları Uzmanı · Berlin · Almancadan çeviri
                    </div>
                  </div>

                  <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-[#58ECF1]">
                    FSP Tıp
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL COURSES */}
      <section className="bg-[#f7f5f9] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              MEDİKAL SINAV HAZIRLIĞI
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Her sınav aynı hazırlık sürecini gerektirmez.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
              Önemli olan sınav formatınız, mevcut dil seviyeniz ve bugün hazırlığın hangi aşamasında olduğunuzdur.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[2.8rem] bg-[#31175B] lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative min-h-[340px] lg:min-h-[430px]">
              <Image
                src="/images/home-medical-german-learning.jpg"
                alt="Medikal Almancayı dijital olarak öğrenme"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="flex items-center p-8 text-white sm:p-10 lg:p-12">
              <div>
                <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
                  MEDİKAL ALMANCA
                </div>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">
                  Medikal bilginizi Almanca olarak da aktif kullanabilmelisiniz.
                </h3>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
                  Genel Almancanın tek başına yeterli olmadığı noktada mesleki dil, hasta görüşmesi ve sınav iletişimi önem kazanır.
                </p>

                <Link
                  href="/tr/pruefungsvorbereitung"
                  className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#31175B]"
                >
                  Medikal öğrenme yollarını incele
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {medical.map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className="group flex min-h-[310px] flex-col justify-between rounded-[2.2rem] bg-white p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-5">
                    <div className="text-xs font-bold tracking-[.15em] text-[#17666a]">
                      {course.label}
                    </div>

                    <div className="text-right text-sm font-semibold text-black/55">
                      {course.info}
                    </div>
                  </div>

                  <h3 className="mt-8 text-3xl font-semibold">
                    {course.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">
                    {course.text}
                  </p>
                </div>

                <div className="mt-8 text-sm font-semibold text-[#31175B]">
                  Uygun hazırlık yolunu incele →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PELEXA */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              CANLI + DİJİTAL
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Öğrenme canlı ders bittiğinde sona ermemeli.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Pelexa, seçili kursları ders kayıtları, öğrenme materyalleri ve dijital içeriklerle destekler. Böylece dersler arasında tekrar yapabilir ve konuları pekiştirebilirsiniz.
            </p>

            <Link
              href="/tr/ueber-libelle"
              className="mt-8 inline-block rounded-full border border-black/10 px-6 py-3.5 text-sm font-semibold"
            >
              Libelle öğrenme modelini incele
            </Link>
          </div>

          <div className="rounded-[2.6rem] bg-[#17131c] p-5 shadow-[0_30px_90px_rgba(49,23,91,.14)]">
            <div className="rounded-[2rem] bg-[#f3eff7] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold tracking-[.16em] text-[#31175B]">
                    PELEXA
                  </div>
                  <div className="mt-2 text-xl font-semibold">
                    Öğrenme alanım
                  </div>
                </div>

                <div className="rounded-full bg-[#31175B] px-3 py-1.5 text-[10px] font-bold text-white">
                  DIGITAL
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  ["Ders kayıtları", "Tekrar et"],
                  ["Öğrenme materyalleri", "Pekiştir"],
                  ["Sınav içerikleri", "Uygula"],
                ].map(([title, action], index) => (
                  <div key={title} className="rounded-2xl bg-white p-5">
                    <div className="flex justify-between gap-4">
                      <span className="font-medium">{title}</span>
                      <span className="text-xs font-bold text-[#17666a]">
                        {action}
                      </span>
                    </div>

                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/5">
                      <div
                        className="h-full rounded-full bg-[#31175B]"
                        style={{
                          width:
                            index === 0
                              ? "82%"
                              : index === 1
                                ? "61%"
                                : "42%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A1-B2 */}
      <section className="bg-[#D2ECFF]/45 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              ALMANCA A1–B2
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              A1'den B2'ye kadar her seviyeyi bir sonraki adıma bağlayan net bir öğrenme yolu.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Hedefiniz B2 ise seviyeler birbirinin üzerine inşa edilmelidir; dört ayrı karar gibi hissettirmemelidir.
            </p>

            <Link
              href="/tr/pakete/deutsch-a1-b2"
              className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3.5 text-sm font-semibold text-white"
            >
              A1–B2 öğrenme yolunu incele
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["A1", "8 hafta", "165 €"],
              ["A2", "8 hafta", "165 €"],
              ["B1", "12 hafta", "250 €"],
              ["B2", "12 hafta", "399 €"],
            ].map(([level, duration, price]) => (
              <Link
                key={level}
                href={`/tr/deutsch/${level.toLowerCase()}`}
                className="rounded-[2rem] border border-[#58ECF1]/50 bg-white p-6 sm:p-7"
              >
                <div className="text-4xl font-semibold text-[#31175B] sm:text-5xl">
                  {level}
                </div>

                <div className="mt-8 text-sm text-black/40">
                  {duration}
                </div>

                <div className="mt-1 font-semibold">{price}</div>

                <div className="mt-6 text-sm font-semibold text-[#17666a]">
                  Seviyeyi incele →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TUTORS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#31175B]">
              MEDİKAL EĞİTMENLER
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Medikal dil, medikal bağlam içinde öğrenilmelidir.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Medikal programlarda, ilgili sınav hazırlığını yürüten eğitmenlerle birlikte çalışın.
            </p>

            <Link
              href="/tr/tutoren"
              className="mt-8 inline-block rounded-full border border-black/10 px-6 py-3.5 text-sm font-semibold"
            >
              Eğitmenleri tanıyın
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["FM", "Firdevs Murad", "FSP Tıp"],
              ["AŞ", "Alkış Şensoy", "FaMed"],
            ].map(([initials, name, role]) => (
              <Link
                key={name}
                href="/tr/tutoren"
                className="rounded-[2.2rem] bg-[#f7f5f9] p-7"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#31175B] text-xl font-semibold text-white">
                  {initials}
                </div>

                <div className="mt-7 text-2xl font-semibold">{name}</div>
                <div className="mt-2 text-sm font-semibold text-[#31175B]">
                  {role}
                </div>

                <div className="mt-8 text-sm font-semibold text-black/40">
                  Profili incele →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-[#31175B] p-9 text-white sm:p-14">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[.18em] text-[#58ECF1]">
              İLK ADIM KÜÇÜK
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Bugün hemen bir dersi seçmek zorunda değilsiniz.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Bize mevcut seviyenizi, hedefinizi ve varsa hazırlandığınız sınavı yazın. Önce sizin için hangi sonraki adımın gerçekten mantıklı olduğunu birlikte belirleyelim.
            </p>

            <a
              href={whatsappLink(
                "Merhaba, bir sonraki öğrenme adımımı belirlemek istiyorum. Seviyem: ___. Hedefim / sınavım: ___. Kaynak: HOME-FINAL"
              )}
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#31175B]"
            >
              Durumumu kısaca paylaş
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
