"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SiteMotion() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    root.classList.add("libelle-motion");

    const cleanupFunctions: Array<() => void> = [];

    /* --------------------------------
       SCROLL PROGRESS
    -------------------------------- */
    const updateProgress = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        max > 0
          ? Math.min(Math.max(window.scrollY / max, 0), 1)
          : 0;

      progressRef.current?.style.setProperty(
        "--scroll-progress",
        String(progress)
      );
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    cleanupFunctions.push(() => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    });

    const main = document.querySelector("main");

    if (!main) {
      return () => {
        cleanupFunctions.forEach((cleanup) => cleanup());
      };
    }

    main.classList.remove("motion-page");
    void main.getBoundingClientRect();
    main.classList.add("motion-page");

    if (reduceMotion) {
      return () => {
        cleanupFunctions.forEach((cleanup) => cleanup());
      };
    }

    /* --------------------------------
       BUILD REVEAL SYSTEM
    -------------------------------- */
    const revealElements = new Set<HTMLElement>();

    const registerReveal = (
      element: Element | null,
      delay = 0,
      direction?: "left" | "right"
    ) => {
      if (!(element instanceof HTMLElement)) return;

      element.classList.add("motion-reveal");

      if (direction === "left") {
        element.classList.add("motion-from-left");
      }

      if (direction === "right") {
        element.classList.add("motion-from-right");
      }

      element.style.setProperty(
        "--motion-delay",
        `${Math.min(delay, 420)}ms`
      );

      revealElements.add(element);
    };

    const sections = Array.from(
      main.querySelectorAll("section")
    );

    sections.forEach((section, sectionIndex) => {
      section.classList.add("motion-section");

      const headings = section.querySelectorAll("h1, h2");

      headings.forEach((heading, index) => {
        registerReveal(
          heading,
          sectionIndex === 0 ? 80 + index * 90 : index * 70
        );

        heading.classList.add("motion-heading");
      });

      /* Eyebrows / small section labels */
      const labels = section.querySelectorAll(
        ".text-xs.font-bold"
      );

      labels.forEach((label, index) => {
        registerReveal(label, index * 45);
      });

      /* Stagger the direct children of grids */
      const grids = section.querySelectorAll(".grid");

      grids.forEach((grid) => {
        Array.from(grid.children).forEach((child, index) => {
          if (!(child instanceof HTMLElement)) return;

          registerReveal(child, index * 75);

          const className =
            typeof child.className === "string"
              ? child.className
              : "";

          if (
            child.tagName === "ARTICLE" ||
            child.tagName === "A" ||
            className.includes("rounded-[2") ||
            className.includes("rounded-2")
          ) {
            child.classList.add("motion-card");
          }
        });
      });

      /* Standalone articles */
      section.querySelectorAll("article").forEach((article, index) => {
        registerReveal(article, index * 70);
        article.classList.add("motion-card");
      });
    });

    /* --------------------------------
       HERO - MORE CINEMATIC
    -------------------------------- */
    const hero = sections[0];

    if (hero) {
      const heroGrid = hero.querySelector(".grid");

      if (heroGrid) {
        const children = Array.from(heroGrid.children);

        registerReveal(children[0] ?? null, 40, "left");
        registerReveal(children[1] ?? null, 170, "right");
      }

      const heroTitle = hero.querySelector("h1");

      if (heroTitle instanceof HTMLElement) {
        heroTitle.classList.add("motion-hero-title");
      }
    }

    /* --------------------------------
       INTERSECTION OBSERVER
    -------------------------------- */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target instanceof HTMLElement) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    cleanupFunctions.push(() => observer.disconnect());

    /* --------------------------------
       PREMIUM CTA MICRO-INTERACTION
    -------------------------------- */
    const magneticLinks = Array.from(
      main.querySelectorAll(
        'a[class*="rounded-full"]'
      )
    ).filter(
      (link): link is HTMLAnchorElement =>
        link instanceof HTMLAnchorElement &&
        !link.classList.contains("motion-reveal")
    );

    magneticLinks.forEach((link) => {
      link.classList.add("motion-magnetic");

      const move = (event: MouseEvent) => {
        if (window.innerWidth < 1024) return;

        const rect = link.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left -
          rect.width / 2;

        const y =
          event.clientY -
          rect.top -
          rect.height / 2;

        link.style.setProperty(
          "--mag-x",
          `${x * 0.08}px`
        );

        link.style.setProperty(
          "--mag-y",
          `${y * 0.12}px`
        );
      };

      const leave = () => {
        link.style.setProperty("--mag-x", "0px");
        link.style.setProperty("--mag-y", "0px");
      };

      link.addEventListener("mousemove", move);
      link.addEventListener("mouseleave", leave);

      cleanupFunctions.push(() => {
        link.removeEventListener("mousemove", move);
        link.removeEventListener("mouseleave", leave);
      });
    });

    /* --------------------------------
       HERO 3D TILT
    -------------------------------- */
    if (hero && window.matchMedia("(pointer: fine)").matches) {
      const candidates = Array.from(
        hero.querySelectorAll("div")
      ).filter((element) => {
        const className =
          typeof element.className === "string"
            ? element.className
            : "";

        return (
          className.includes("rounded-[2.8rem]") ||
          className.includes("rounded-[2.7rem]") ||
          className.includes("rounded-[2.5rem]")
        );
      });

      const tiltContainer =
        candidates.find((element) => {
          const rect = element.getBoundingClientRect();

          return (
            rect.width > 280 &&
            rect.height > 250
          );
        }) ?? null;

      if (tiltContainer instanceof HTMLElement) {
        const tiltSurface =
          tiltContainer.firstElementChild instanceof HTMLElement
            ? tiltContainer.firstElementChild
            : null;

        if (tiltSurface) {
          tiltContainer.classList.add("motion-tilt-container");
          tiltSurface.classList.add("motion-tilt-surface");

          const tiltMove = (event: MouseEvent) => {
            const rect =
              tiltContainer.getBoundingClientRect();

            const px =
              (event.clientX - rect.left) /
              rect.width;

            const py =
              (event.clientY - rect.top) /
              rect.height;

            const rotateY = (px - 0.5) * 4;
            const rotateX = (0.5 - py) * 4;

            tiltSurface.style.setProperty(
              "--tilt-x",
              `${rotateX}deg`
            );

            tiltSurface.style.setProperty(
              "--tilt-y",
              `${rotateY}deg`
            );
          };

          const tiltLeave = () => {
            tiltSurface.style.setProperty(
              "--tilt-x",
              "0deg"
            );

            tiltSurface.style.setProperty(
              "--tilt-y",
              "0deg"
            );
          };

          tiltContainer.addEventListener(
            "mousemove",
            tiltMove
          );

          tiltContainer.addEventListener(
            "mouseleave",
            tiltLeave
          );

          cleanupFunctions.push(() => {
            tiltContainer.removeEventListener(
              "mousemove",
              tiltMove
            );

            tiltContainer.removeEventListener(
              "mouseleave",
              tiltLeave
            );
          });
        }
      }
    }

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={progressRef}
        className="libelle-scroll-progress"
        aria-hidden="true"
      />
    </>
  );
}
