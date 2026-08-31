import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { blogPostsDE } from "@/lib/blog-posts-de";

export const metadata: Metadata = {
  title: "Blog | Deutsch, FSP & FaMed | Libelle Academy",
  description:
    "Artikel über Deutsch, medizinisches Deutsch, FSP, FaMed und den Berufsweg in Deutschland.",
};

export default function BlogPage() {
  const featured = blogPostsDE[0];
  const rest = blogPostsDE.slice(1);

  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <section className="bg-[#D2ECFF]/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            LIBELLE JOURNAL
          </div>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-.045em] sm:text-6xl lg:text-7xl">
            Wissen, das Sie auf Ihrem Weg wirklich weiterbringt.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
            Deutsch, medizinische Fachsprache, Prüfungsvorbereitung und
            der Berufsweg in Deutschland – klar und praxisnah erklärt.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {featured && (
          <Link
            href={`/de/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2.7rem] bg-[#17131c] text-white lg:grid-cols-2"
          >
            <div className="relative min-h-[320px] lg:min-h-[500px]">
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="text-xs font-bold tracking-[.16em] text-[#58ECF1]">
                FEATURED · {featured.category}
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">
                {featured.title}
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex gap-5 text-sm">
                <span className="text-white/40">
                  {featured.readingTime}
                </span>

                <span className="font-semibold text-[#58ECF1]">
                  Artikel lesen →
                </span>
              </div>
            </div>
          </Link>
        )}

        <div className="mt-16">
          <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
            AKTUELLE ARTIKEL
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em]">
            Medizin, Sprache und Deutschland.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/de/blog/${post.slug}`}
              className="group overflow-hidden rounded-[2.2rem] border border-black/5 bg-[#f7f9fb]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-7">
                <div className="text-[10px] font-bold tracking-[.15em] text-[#17666a]">
                  {post.category}
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-8">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-black/35">
                    {post.readingTime}
                  </span>

                  <span className="font-semibold text-[#31175B]">
                    Artikel lesen →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
