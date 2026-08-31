import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import EditorialStorySection from "@/components/EditorialStorySection";
import { germanCourses, GermanLevel } from "@/lib/german-courses-en";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return Object.keys(germanCourses).map((level) => ({ level }));
}

export default async function GermanCoursePage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const course = germanCourses[level as GermanLevel];

  if (!course) notFound();

  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="overflow-hidden bg-[#D2ECFF]/55">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:min-h-[680px] lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <div>
            <Link href="/en/kurse" className="text-sm font-semibold text-[#17666a]">
              ← All German Courses
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[0.18em] text-[#17666a]">
              {course.eyebrow}
            </div>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">
              {course.tagline}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-[#58ECF1] bg-white px-5 py-3 text-sm font-semibold">
                {course.level}
              </div>
              <div className="rounded-full border border-[#58ECF1] bg-white px-5 py-3 text-sm font-semibold">
                {course.duration}
              </div>
              <div className="rounded-full border border-[#58ECF1] bg-white px-5 py-3 text-sm font-semibold">
                {course.price}
              </div>
            </div>

            <a
              href={whatsappLink(
                `Hallo, ich interessiere mich für ${course.title} (${course.price}). Quelle: ${course.source}`
              )}
              className="mt-9 inline-block rounded-full bg-[#17666a] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Ask about availability & current group on WhatsApp
            </a>
          </div>

          <div className="relative mt-8 lg:mt-0">

            <div className="home-orbit absolute right-10 -top-10 z-20 hidden rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.18)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em]">
                {course.level} · YOUR NEXT STEP
              </div>
              <div className="mt-1 text-sm font-semibold">
                Learn with clear progression
              </div>
            </div>

            <div className="home-orbit-delay absolute bottom-[-46px] left-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(49,23,91,.16)] lg:block">
              <div className="text-[10px] font-bold tracking-[.14em] text-[#17666a]">
                THINK AHEAD TO B2
              </div>
              <div className="mt-1 text-sm font-semibold">
                Every level prepares the next step
              </div>
            </div>

            <div className="rounded-[2.8rem] border border-[#58ECF1] bg-white p-7 shadow-[0_30px_80px_rgba(49,23,91,0.08)] sm:p-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="text-xs font-bold tracking-[0.16em] text-[#17666a]">
                  YOUR COURSE
                </div>
                <div className="mt-3 text-3xl font-semibold">{course.title}</div>
              </div>
              <div className="rounded-full bg-[#58ECF1] px-4 py-2 text-sm font-bold text-[#122628]">
                {course.level}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-[1.5rem] bg-[#D2ECFF]/60 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-black/45">Duration</div>
                <div className="mt-2 text-2xl font-semibold">{course.duration}</div>
              </div>
              <div className="rounded-[1.5rem] bg-[#D2ECFF]/60 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-black/45">Price</div>
                <div className="mt-2 text-2xl font-semibold">{course.price}</div>
              </div>
            </div>

            <div className="mt-5 rounded-[1.7rem] bg-[#31175B] p-6 text-white">
              <div className="text-xs font-bold tracking-[0.15em] text-[#58ECF1]">
                WHO IS IT FOR?
              </div>
              <p className="mt-3 leading-7 text-white/75">{course.forWhom}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
            <div className="home-orbit rounded-2xl bg-[#58ECF1] px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em]">
                {course.level} · NEXT STEP
              </div>
              <div className="mt-1 text-xs font-semibold">
                Klare Progression
              </div>
            </div>

            <div className="home-orbit-delay rounded-2xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(49,23,91,.12)]">
              <div className="text-[9px] font-bold tracking-[.13em] text-[#17666a]">
                BIS B2
              </div>
              <div className="mt-1 text-xs font-semibold">
                Schritt für Schritt weiter
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* PHOTO-STORY-GERMAN-LEVEL */}
      <EditorialStorySection
        eyebrow={`${course.level} IN EVERYDAY LIFE`}
        title="A language level is more than a list of grammar topics."
        text="With every level, you expand what you can understand, express and use independently in everyday life. Each course is therefore part of a larger learning path, not just an isolated certificate level."
        image="/images/a1-b2-life-in-germany.jpg"
        alt="Leben und Alltag in Deutschland"
        chip={`${course.level} · NEXT STEP`}
        reverse
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.18em] text-[#17666a]">
            WHAT YOU WILL BUILD
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Progress you can notice in everyday life.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {course.outcomes.map((item, index) => (
            <div key={item} className="rounded-[2rem] bg-[#f7f9fb] p-7">
              <div className="text-sm font-bold text-[#17666a]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mt-5 text-xl font-semibold leading-8">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#31175B] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-[#58ECF1]">
              WHY THIS LEARNING PATH?
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Not four isolated topics. One clear step after another.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Das Ziel ist nicht, möglichst viele Regeln zu sammeln. Sie bauen Wortschatz,
              Grammatik, Verständnis und aktive Kommunikation so auf, dass der nächste
              Sprachniveau-Schritt logisch anschließt.
            </p>
          </div>

          <div className="space-y-3">
            {course.included.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-white/10 p-5 text-lg font-medium">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-[#17666a]">
              THE PATH TO B2
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Where are you now — and what comes next?
            </h2>
          </div>
          <Link
            href="/en/pakete/deutsch-a1-b2"
            className="text-sm font-semibold text-[#31175B]"
          >
            Explore the complete A1–B2 path →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {["A1", "A2", "B1", "B2"].map((item) => (
            <Link
              key={item}
              href={`/de/deutsch/${item.toLowerCase()}`}
              className={`rounded-[2rem] border p-7 transition hover:-translate-y-1 ${
                item === course.level
                  ? "border-[#17666a] bg-[#58ECF1]"
                  : "border-[#58ECF1] bg-white"
              }`}
            >
              <div className="text-4xl font-semibold">{item}</div>
              <div className="mt-8 text-sm font-semibold">
                {item === course.level ? "Current course" : "Explore course →"}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#D2ECFF]/55 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-[#17666a]">
                STILL NOT SURE?
              </div>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Which level is right for you — and does the complete A1–B2 path make sense?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-black/55">
                Schreiben Sie uns. Wir helfen Ihnen, den sinnvollsten Einstieg und den
                nächsten Schritt zu wählen, bevor Sie buchen.
              </p>
            </div>
            <a
              href={whatsappLink(
                `Hallo, ich möchte wissen, welcher Deutschkurs zu meinem Niveau passt. Ich interessiere mich aktuell für ${course.title}. Quelle: ${course.source}-BOTTOM`
              )}
              className="inline-block rounded-full bg-[#31175B] px-7 py-4 text-sm font-semibold text-white"
            >
              Get guidance on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
