import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { whatsappLink } from "@/lib/whatsapp";

export type NavPageCard = {
  title: string;
  text: string;
  href?: string;
  label?: string;
};

export type NavPageData = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: NavPageCard[];
  closingTitle: string;
  closingText: string;
};

export default function NavPage({ data }: { data: NavPageData }) {
  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="bg-[#f7f5f9]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">
            {data.eyebrow}
          </div>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl">
            {data.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/55">
            {data.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-64 flex-col justify-between rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_14px_50px_rgba(49,23,91,0.06)]"
            >
              <div>
                {card.label && (
                  <div className="text-xs font-bold tracking-[0.14em] text-[#31175B]">
                    {card.label}
                  </div>
                )}
                <h2 className="mt-3 text-2xl font-semibold">{card.title}</h2>
                <p className="mt-4 leading-7 text-black/50">{card.text}</p>
              </div>

              {card.href && (
                <Link
                  href={card.href}
                  className="mt-8 text-sm font-semibold text-[#31175B]"
                >
                  Mehr erfahren →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#31175B] p-9 text-white sm:p-12">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">
            {data.closingTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
            {data.closingText}
          </p>
          <a
            href={whatsappLink(
              `Hallo, ich möchte mich beraten lassen. Quelle: WEBSITE-${data.eyebrow}`
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#31175B]"
          >
            Über WhatsApp beraten lassen
          </a>
        </div>
      </section>
    </main>
  );
}
