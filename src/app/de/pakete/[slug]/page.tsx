import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { bundlePages, BundleSlug } from "@/lib/bundle-pages";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return Object.keys(bundlePages).map((slug) => ({ slug }));
}

export default async function BundlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bundle = bundlePages[slug as BundleSlug];

  if (!bundle) notFound();

  const general = "general" in bundle && bundle.general;

  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className={general ? "bg-[#D2ECFF]/45" : "bg-[#31175B] text-white"}>
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
          <Link
            href="/de"
            className={`text-sm font-semibold ${general ? "text-[#17666a]" : "text-[#58ECF1]"}`}
          >
            ← Zurück zur Libelle Akademie
          </Link>

          <div className={`mt-12 text-xs font-bold tracking-[0.18em] ${general ? "text-[#17666a]" : "text-[#58ECF1]"}`}>
            {bundle.eyebrow}
          </div>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            {bundle.title}
          </h1>

          <p className={`mt-7 max-w-3xl text-lg leading-8 ${general ? "text-black/55" : "text-white/60"}`}>
            {bundle.description}
          </p>

          {"price" in bundle && bundle.price && (
            <div className="mt-9 text-4xl font-semibold">{bundle.price}</div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24 lg:px-8">
        <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">
          IHR LERNWEG
        </div>

        <div className="mt-10 space-y-4">
          {bundle.steps.map((step, index) => (
            <div
              key={step}
              className="grid items-center gap-5 rounded-[2rem] bg-[#f7f5f9] p-6 sm:grid-cols-[70px_1fr]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#31175B] text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="text-xl font-semibold">{step}</div>
            </div>
          ))}
        </div>

        <a
          href={whatsappLink(
            `Hallo, ich interessiere mich für das Paket ${bundle.title}. Quelle: ${bundle.source}`
          )}
          className="mt-10 inline-block rounded-full bg-[#31175B] px-7 py-3.5 text-sm font-semibold text-white"
        >
          Paket über WhatsApp anfragen
        </a>
      </section>
    </main>
  );
}
