import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { germanCourses, GermanLevel } from "@/lib/german-courses";
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

      <section className="overflow-hidden bg-[#D2ECFF]/45">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <Link href="/de#deutsch" className="text-sm font-semibold text-[#17666a]">
              ← Alle Deutschkurse
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[0.18em] text-[#17666a]">
              DEUTSCH A1–B2
            </div>

            <h1 className="mt-5 text-6xl font-semibold tracking-[-0.04em] sm:text-7xl">
              {course.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              {course.description}
            </p>

            <a
              href={whatsappLink(
                `Hallo, ich interessiere mich für ${course.title}. Quelle: ${course.source}`
              )}
              className="mt-9 inline-block rounded-full bg-[#17666a] px-6 py-3.5 text-sm font-semibold text-white"
            >
              Kurs über WhatsApp anfragen
            </a>
          </div>

          <div className="rounded-[2.8rem] border border-[#58ECF1] bg-white p-8 sm:p-10">
            <div className="text-xs font-bold tracking-[0.16em] text-[#17666a]">
              IHR LERNWEG
            </div>

            <div className="mt-8 flex aspect-square items-center justify-center rounded-[2rem] bg-[#58ECF1]">
              <div className="text-[8rem] font-semibold tracking-[-0.08em] text-[#122628]">
                {course.level}
              </div>
            </div>

            <div className="mt-6 text-sm leading-7 text-black/50">
              Kursdetails wie Unterrichtsstunden, Termine und aktuelle Gruppen
              werden zentral ergänzt.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-xs font-bold tracking-[0.18em] text-[#17666a]">
          DER WEG BIS B2
        </div>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight">
          Schritt für Schritt weiterlernen.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {["A1", "A2", "B1", "B2"].map((item) => (
            <Link
              key={item}
              href={`/de/deutsch/${item.toLowerCase()}`}
              className={`rounded-[2rem] border p-7 ${
                item === course.level
                  ? "border-[#17666a] bg-[#58ECF1]"
                  : "border-[#58ECF1] bg-white"
              }`}
            >
              <div className="text-4xl font-semibold">{item}</div>
              <div className="mt-8 text-sm font-semibold">Deutschkurs →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
