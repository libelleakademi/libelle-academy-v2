export const bundlePages = {
  "medizinischer-sprachweg": {
    title: "Medizinischer Sprachweg",
    eyebrow: "MEDICAL BUNDLE",
    description:
      "Ein kombinierbarer Lernweg für Teilnehmende, die zunächst ihre medizinische Sprachkompetenz stärken und anschließend gezielt in die Prüfungsvorbereitung gehen möchten.",
    steps: ["Exzellenz / Feinschliff", "FSP oder FaMed", "Simulationen"],
    source: "BUNDLE-MEDICAL-PATH",
  },
  "famed-flex": {
    title: "FaMed Flex",
    eyebrow: "FAMED BUNDLE",
    description:
      "Flexible Selbstlernvorbereitung mit anschließendem Live-Training unter realistischen Prüfungsbedingungen.",
    steps: ["FaMed Offline Kurs – 200 €", "5 Simulationen – 375 €"],
    price: "575 €",
    source: "BUNDLE-FAMED-FLEX",
  },
  "deutsch-a1-b2": {
    title: "Deutsch A1–B2 Lernweg",
    eyebrow: "GERMAN BUNDLE",
    description:
      "Ein durchgehender Lernweg vom ersten Einstieg bis zum B2-Niveau.",
    steps: ["A1", "A2", "B1", "B2"],
    source: "BUNDLE-DEUTSCH-A1-B2",
    general: true,
  },
} as const;

export type BundleSlug = keyof typeof bundlePages;
