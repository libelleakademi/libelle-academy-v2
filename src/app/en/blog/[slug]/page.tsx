import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { blogPostsEN, getBlogPostEN } from "@/lib/blog-posts-en";

export function generateStaticParams() {
  return blogPostsEN.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostEN(slug);

  if (!post) return {};

  return {
    title: `${post.title} | Libelle Academy`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostEN(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white text-[#17131c]">
      <SiteHeader />

      <article>
        <section className="bg-[#D2ECFF]/40">
          <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
            <Link
              href="/en/blog"
              className="text-sm font-semibold text-[#17666a]"
            >
              ← Back to Journal
            </Link>

            <div className="mt-10 text-xs font-bold tracking-[.18em] text-[#17666a]">
              {post.category}
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-6xl">
              {post.title}
            </h1>

            <div className="mt-7 text-sm text-black/40">
              Libelle Academy · {post.readingTime}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 pt-10 lg:px-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2.6rem]">
            <Image
              src={post.image}
              alt={post.alt}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <section className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-20">
          <p className="text-xl leading-9 text-black/65">
            {post.intro}
          </p>

          <div className="mt-14 space-y-14">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-semibold tracking-[-.03em]">
                  {section.title}
                </h2>

                <div className="mt-6 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[17px] leading-8 text-black/60"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-[#f3eff7] p-7 sm:p-8">
            <div className="text-xs font-bold tracking-[.16em] text-[#31175B]">
              OFFICIAL SOURCES
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-black/55">
              {post.sources.map((source) => (
                <li key={source}>• {source}</li>
              ))}
            </ul>

            <p className="mt-5 text-xs leading-5 text-black/40">
              Requirements may vary depending on the federal state,
              responsible authority and individual recognition procedure.
              Always check the current requirements with your responsible
              authority.
            </p>
          </div>

          <div className="mt-12 rounded-[2.3rem] bg-[#31175B] p-8 text-white sm:p-10">
            <div className="text-xs font-bold tracking-[.16em] text-[#58ECF1]">
              LIBELLE ACADEMY
            </div>

            <h2 className="mt-4 text-3xl font-semibold">
              Do not just learn medical German. Apply it.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-white/60">
              Explore our FSP, FaMed, dentistry and realistic exam simulation
              preparation.
            </p>

            <Link
              href="/en/pruefungsvorbereitung"
              className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#31175B]"
            >
              Explore exam preparation →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
