"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/whatsapp";

const navDE = [
  { label: "Deutsch A1–B2", href: "/de/pakete/deutsch-a1-b2" },
  { label: "Medizinische Kurse", href: "/de/pruefungsvorbereitung" },
  { label: "Simulationen", href: "/de/simulationen" },
  { label: "Über Libelle", href: "/de/ueber-libelle" },
  { label: "Ressourcen", href: "/de/ressourcen" },
  { label: "Blog", href: "/de/blog" },
];

const navTR = [
  { label: "Almanca A1–B2", href: "/tr/pakete/deutsch-a1-b2" },
  { label: "Medikal Kurslar", href: "/tr/pruefungsvorbereitung" },
  { label: "Simülasyonlar", href: "/tr/simulationen" },
  { label: "Libelle Hakkında", href: "/tr/ueber-libelle" },
  { label: "Kaynaklar", href: "/tr/ressourcen" },
  { label: "Blog", href: "/tr/blog" },
];

const navEN = [
  { label: "German A1–B2", href: "/en/pakete/deutsch-a1-b2" },
  { label: "Medical Courses", href: "/en/pruefungsvorbereitung" },
  { label: "Simulations", href: "/en/simulationen" },
  { label: "About Libelle", href: "/en/ueber-libelle" },
  { label: "Resources", href: "/en/ressourcen" },
  { label: "Blog", href: "/en/blog" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isTurkish = pathname.startsWith("/tr");
  const isEnglish = pathname.startsWith("/en");

  const navItems = isTurkish
    ? navTR
    : isEnglish
    ? navEN
    : navDE;

  const homeHref = isTurkish
    ? "/tr"
    : isEnglish
    ? "/en"
    : "/de";

  const headerMessage = isTurkish
    ? "Merhaba, Libelle Academy kursları hakkında bilgi almak istiyorum. Kaynak: WEBSITE-HEADER"
    : isEnglish
    ? "Hello, I would like information about Libelle Academy courses. Source: WEBSITE-HEADER"
    : "Hallo, ich interessiere mich für die Kurse der Libelle Akademie. Quelle: WEBSITE-HEADER";

  const menuLabel = menuOpen
    ? isTurkish
      ? "Menüyü kapat"
      : isEnglish
      ? "Close navigation"
      : "Navigation schließen"
    : isTurkish
    ? "Menüyü aç"
    : isEnglish
    ? "Open navigation"
    : "Navigation öffnen";

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Link
            href={homeHref}
            className="flex shrink-0 items-center"
            aria-label="Libelle Academy"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/libelle-logo.png"
              alt="Libelle Academy"
              className="h-12 w-auto max-w-[132px] object-contain sm:h-14 sm:max-w-[150px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 text-sm lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  isActive(item.href)
                    ? "font-semibold text-[#31175B]"
                    : "text-black/60 hover:text-[#31175B]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://www.instagram.com/almancahedefim/"
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm font-medium text-black/55 transition hover:text-[#31175B] xl:block"
            >
              Instagram
            </a>

            <div className="flex items-center gap-1 text-xs font-semibold text-black/40">
              <Link
                href="/de"
                className={`transition hover:text-[#31175B] ${
                  pathname.startsWith("/de")
                    ? "text-[#31175B]"
                    : ""
                }`}
              >
                DE
              </Link>

              <span>/</span>

              <Link
                href="/tr"
                className={`transition hover:text-[#31175B] ${
                  pathname.startsWith("/tr")
                    ? "text-[#31175B]"
                    : ""
                }`}
              >
                TR
              </Link>

              <span>/</span>

              <Link
                href="/en"
                className={`transition hover:text-[#31175B] ${
                  pathname.startsWith("/en")
                    ? "text-[#31175B]"
                    : ""
                }`}
              >
                EN
              </Link>
            </div>

            <a
              href={whatsappLink(headerMessage)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#31175B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4B238B]"
            >
              WhatsApp
            </a>
          </div>

          {/* MOBILE / TABLET ACTIONS */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappLink(headerMessage)}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#31175B] px-4 py-2.5 text-xs font-semibold text-white sm:inline-flex"
            >
              WhatsApp
            </a>

            <button
              type="button"
              aria-label={menuLabel}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-5 bg-[#17131c] transition ${
                    menuOpen
                      ? "translate-y-[7px] rotate-45"
                      : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-[#17131c] transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-[#17131c] transition ${
                    menuOpen
                      ? "-translate-y-[7px] -rotate-45"
                      : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE / TABLET MENU */}
        {menuOpen && (
          <div className="border-t border-black/5 pb-6 pt-5 lg:hidden">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base transition ${
                    isActive(item.href)
                      ? "bg-[#f3eff7] font-semibold text-[#31175B]"
                      : "text-black/70 hover:bg-[#f7f5f9]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-black/25">→</span>
                </Link>
              ))}
            </nav>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="https://www.instagram.com/almancahedefim/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#f7f5f9] px-4 py-4 text-center text-sm font-semibold"
              >
                Instagram
              </a>

              <a
                href={whatsappLink(
                  isTurkish
                    ? "Merhaba, Libelle Academy kursları hakkında bilgi almak istiyorum. Kaynak: WEBSITE-MOBILE-MENU"
                    : isEnglish
                    ? "Hello, I would like information about Libelle Academy courses. Source: WEBSITE-MOBILE-MENU"
                    : "Hallo, ich interessiere mich für die Kurse der Libelle Akademie. Quelle: WEBSITE-MOBILE-MENU"
                )}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#31175B] px-4 py-4 text-center text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 border-t border-black/5 pt-5 text-sm font-semibold">
              <Link
                href="/de"
                onClick={() => setMenuOpen(false)}
                className={
                  pathname.startsWith("/de")
                    ? "text-[#31175B]"
                    : "text-black/40"
                }
              >
                DE
              </Link>

              <span className="text-black/15">/</span>

              <Link
                href="/tr"
                onClick={() => setMenuOpen(false)}
                className={
                  pathname.startsWith("/tr")
                    ? "text-[#31175B]"
                    : "text-black/40"
                }
              >
                TR
              </Link>

              <span className="text-black/15">/</span>

              <Link
                href="/en"
                onClick={() => setMenuOpen(false)}
                className={
                  pathname.startsWith("/en")
                    ? "text-[#31175B]"
                    : "text-black/40"
                }
              >
                EN
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
