import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  chip: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  reverse?: boolean;
  dark?: boolean;
};

export default function EditorialStorySection({
  eyebrow,
  title,
  text,
  image,
  alt,
  chip,
  secondaryImage,
  secondaryAlt,
  reverse = false,
  dark = false,
}: Props) {
  return (
    <section
      className={
        dark
          ? "overflow-hidden bg-[#17131c] py-24 text-white"
          : "overflow-hidden bg-white py-24 text-[#17131c]"
      }
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative min-h-[500px] sm:min-h-[610px]">
          <div className="absolute inset-x-0 top-0 h-[88%] overflow-hidden rounded-[2.8rem] shadow-[0_35px_90px_rgba(49,23,91,.13)]">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {secondaryImage && (
            <div className="absolute bottom-0 right-[-2%] h-[38%] w-[48%] overflow-hidden rounded-[2rem] border-[7px] border-white shadow-[0_25px_60px_rgba(49,23,91,.18)]">
              <Image
                src={secondaryImage}
                alt={secondaryAlt || ""}
                fill
                sizes="(max-width: 1024px) 48vw, 320px"
                className="object-cover"
              />
            </div>
          )}

          <div className="home-orbit absolute left-5 top-6 z-20 max-w-[240px] rounded-2xl bg-[#58ECF1] px-5 py-4 shadow-xl">
            <div className="text-[10px] font-bold tracking-[.13em]">
              {chip}
            </div>
          </div>
        </div>

        <div>
          <div
            className={`text-xs font-bold tracking-[.18em] ${
              dark ? "text-[#58ECF1]" : "text-[#17666a]"
            }`}
          >
            {eyebrow}
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p
            className={`mt-7 max-w-xl text-lg leading-8 ${
              dark ? "text-white/60" : "text-black/55"
            }`}
          >
            {text}
          </p>

          <div
            className={`mt-9 h-px w-28 ${
              dark ? "bg-[#58ECF1]" : "bg-[#31175B]"
            }`}
          />

          <p
            className={`mt-6 max-w-lg text-sm leading-7 ${
              dark ? "text-white/45" : "text-black/45"
            }`}
          >
            Lernen wird dort wirksam, wo Wissen nicht nur verstanden,
            sondern aktiv in realen Situationen eingesetzt wird.
          </p>
        </div>
      </div>
    </section>
  );
}
