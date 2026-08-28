export type CoursePage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  source: string;
  features: string[];
  program: string[];
  path?: string[];
  specialBundle?: {
    title: string;
    price: string;
    description: string;
  };
};

export const coursePages: CoursePage[] = [
  {
    slug: "fsp-medizin",
    eyebrow: "FSP MEDIZIN",
    title: "FSP Medizin Intensivkurs",
    description:
      "Intensive Vorbereitung auf medizinische Fachsprache, Kommunikation und realistische Prüfungssituationen.",
    price: "950 €",
    duration: "8 Wochen",
    source: "COURSE-FSP",
    features: [
      "68 Unterrichtsstunden + Blended Learning",
      "6 Prüfungssimulationen",
      "Kleine Gruppen",
      "Digitale Lernmaterialien über Pelexa",
    ],
    program: [
      "Medizinische Fachsprache",
      "Anamnese und Arzt-Patienten-Kommunikation",
      "Dokumentation",
      "Patientenvorstellung",
      "Prüfungssimulationen",
    ],
    path: ["Exzellenz / Feinschliff", "FSP Medizin", "Simulationen"],
  },
  {
    slug: "famed",
    eyebrow: "FAMED",
    title: "FaMed Intensivkurs",
    description:
      "Strukturierte Vorbereitung auf medizinische Kommunikation und die Anforderungen der FaMed-Prüfung.",
    price: "600 €",
    duration: "6 Wochen",
    source: "COURSE-FAMED",
    features: [
      "54 Unterrichtsstunden",
      "6 Prüfungssimulationen",
      "Medizinische Kommunikation",
      "Digitale Lernmaterialien",
    ],
    program: [
      "FaMed-Prüfungsformat",
      "Anamnese",
      "Patientenaufklärung",
      "Patientenvorstellung",
      "Dokumentation",
      "Prüfungssimulationen",
    ],
    path: ["Exzellenz / Feinschliff", "FaMed", "Simulationen"],
  },
  {
    slug: "fsp-zahnmedizin",
    eyebrow: "ZAHNMEDIZIN",
    title: "FSP & FaMed Zahnmedizin Intensivkurs",
    description:
      "Sprachliche und prüfungsorientierte Vorbereitung speziell für Zahnärztinnen und Zahnärzte.",
    price: "950 €",
    duration: "8 Wochen",
    source: "COURSE-ZAHN",
    features: [
      "8 Wochen Intensivvorbereitung",
      "Zahnmedizinische Fachsprache",
      "Prüfungsorientiertes Training",
      "Simulationen und Feedback",
    ],
    program: [
      "Zahnmedizinische Fachsprache",
      "Patientengespräch",
      "Anamnese",
      "Dokumentation",
      "Patientenvorstellung",
      "Prüfungstraining",
    ],
    path: ["Sprachkompetenz stärken", "Zahnmedizin Intensivkurs", "Simulationen"],
  },
  {
    slug: "simulationen",
    eyebrow: "PRÜFUNGSTRAINING",
    title: "Prüfungsvorbereitende Simulationen",
    description:
      "Realistische Prüfungssituationen mit individuellem Feedback für eine gezielte Vorbereitung.",
    price: "ab 75 €",
    duration: "Einzeln oder als Paket",
    source: "COURSE-SIMULATION",
    features: [
      "Realistische Prüfungssituationen",
      "Individuelles Feedback",
      "Gezielte Prüfungsvorbereitung",
      "Einzeln oder als Paket buchbar",
    ],
    program: [
      "Prüfungssituation durchführen",
      "Kommunikation analysieren",
      "Feedback erhalten",
      "Schwachstellen identifizieren",
      "Gezielt weitertrainieren",
    ],
  },
  {
    slug: "famed-offline",
    eyebrow: "FAMED OFFLINE",
    title: "FaMed Offline Kurs",
    description:
      "Flexible FaMed-Vorbereitung mit neun Modulen, Dokumentationen und Übungen – in Ihrem eigenen Tempo.",
    price: "200 €",
    duration: "9 Module",
    source: "COURSE-FAMED-OFFLINE",
    features: [
      "9 strukturierte Module",
      "Dokumentationen",
      "Übungen",
      "Flexible Selbstlernphase",
    ],
    program: [
      "Modul 1 – Inhalt wird ergänzt",
      "Modul 2 – Die FaMed-Prüfung",
      "Modul 3 – Anamnese",
      "Modul 4 – Patientenaufklärung",
      "Modul 5 – Patientenvorstellung",
      "Modul 6 – Dokumentation",
      "Modul 7 – Medizinische Grammatik",
      "Modul 8 – Prüfungssimulationen",
      "Modul 9 – Mentale Prüfungsvorbereitung",
    ],
    path: ["FaMed Offline", "5 Live-Simulationen", "Prüfung"],
    specialBundle: {
      title: "FaMed Offline + 5 Simulationen",
      price: "575 €",
      description:
        "Offline lernen und anschließend das Gelernte in fünf realistischen Simulationen anwenden.",
    },
  },
];

export function getCoursePage(slug: string) {
  return coursePages.find((course) => course.slug === slug);
}
