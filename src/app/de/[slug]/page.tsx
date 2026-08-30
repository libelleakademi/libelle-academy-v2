import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { coursePages, getCoursePage } from "@/lib/course-pages";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return coursePages.filter((course) => course.slug !== "famed-offline").map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCoursePage(slug);

  if (!course) return {};

  return {
    title: `${course.title} | Libelle Academy`,
    description: course.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCoursePage(slug);

  if (!course) notFound();

  const message = `Hallo, ich interessiere mich für ${course.title}. Quelle: ${course.source}`;

  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="bg-[#f7f5f9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
          <div>
            <Link href="/de" className="text-sm font-semibold text-[#31175B]">
              ← Zurück zur Übersicht
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[0.18em] text-[#31175B]">
              {course.eyebrow}
            </div>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl">
              {course.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
              {course.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsappLink(message)}
                className="rounded-full bg-[#31175B] px-6 py-3.5 text-sm font-semibold text-white"
              >
                Über WhatsApp anmelden
              </a>

              <a
                href="#programm"
                className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold"
              >
                Programm ansehen
              </a>
            </div>
          </div>

          <div className="rounded-[2.3rem] bg-[#31175B] p-8 text-white">
            <div className="text-xs font-bold tracking-[0.16em] text-white/45">
              KURSÜBERSICHT
            </div>

            <div className="mt-8 text-5xl font-semibold">{course.price}</div>
            <div className="mt-2 text-white/50">{course.duration}</div>

            <div className="mt-10 space-y-3">
              {course.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-sm"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programm" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">
              PROGRAMM
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Was Sie erwartet.
            </h2>
          </div>

          <div className="grid gap-3">
            {course.program.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 rounded-[1.4rem] bg-[#f7f5f9] p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#31175B] text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {course.specialBundle && (
        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="grid gap-8 rounded-[2.4rem] bg-[#17131c] p-8 text-white md:grid-cols-[1fr_auto] md:items-center sm:p-12">
            <div>
              <div className="text-xs font-bold tracking-[0.16em] text-[#58ECF1]">
                KOMPLETTPAKET
              </div>
              <h2 className="mt-4 text-3xl font-semibold">
                {course.specialBundle.title}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/55">
                {course.specialBundle.description}
              </p>
            </div>

            <div>
              <div className="text-4xl font-semibold">
                {course.specialBundle.price}
              </div>
              <a
                href={whatsappLink(
                  `Hallo, ich interessiere mich für ${course.specialBundle.title}. Quelle: ${course.source}-BUNDLE`
                )}
                className="mt-5 inline-block rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#17131c]"
              >
                Paket anfragen
              </a>
            </div>
          </div>
        </section>
      )}

      {course.path && (
        <section className="bg-[#31175B] py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-xs font-bold tracking-[0.18em] text-[#58ECF1]">
              EMPFOHLENER LERNWEG
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {course.path.map((step, index) => (
                <div key={step}>
                  <div className="rounded-[1.6rem] bg-white/10 p-6">
                    <div className="text-xs text-white/35">SCHRITT {index + 1}</div>
                    <div className="mt-3 text-xl font-semibold">{step}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#D2ECFF]/45 p-9 sm:p-12">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">
            Passt dieser Kurs zu Ihrem aktuellen Sprachniveau?
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-black/50">
            Schreiben Sie uns über WhatsApp. Wir helfen Ihnen, den passenden Kurs
            oder Lernweg auszuwählen.
          </p>

          <a
            href={whatsappLink(message)}
            className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3 text-sm font-semibold text-white"
          >
            Persönlich beraten lassen
          </a>
        </div>
      </section>
    </main>
  );
}
