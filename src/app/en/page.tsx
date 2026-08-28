import Link from "next/link";

export default function EnglishPlaceholder() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div className="max-w-xl">
        <div className="mb-4 text-sm font-bold tracking-[0.22em] text-[#31175B]">
          LIBELLE ACADEMY
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-[#17131c]">
          English website is being prepared.
        </h1>
        <p className="mt-5 text-black/55">
          The multilingual architecture is ready. English content will be added next.
        </p>
        <Link
          href="/de"
          className="mt-8 inline-block rounded-full bg-[#31175B] px-6 py-3 text-sm font-semibold text-white"
        >
          View German website
        </Link>
      </div>
    </main>
  );
}
