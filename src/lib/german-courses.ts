export const germanCourses = {
  a1: {
    level: "A1",
    title: "Deutsch A1",
    description: "Der Einstieg in die deutsche Sprache – strukturiert, verständlich und alltagsnah.",
    source: "DEUTSCH-A1",
  },
  a2: {
    level: "A2",
    title: "Deutsch A2",
    description: "Grundkenntnisse festigen und sicherer in typischen Alltagssituationen kommunizieren.",
    source: "DEUTSCH-A2",
  },
  b1: {
    level: "B1",
    title: "Deutsch B1",
    description: "Selbstständiger kommunizieren und Deutsch sicherer im Alltag und Beruf einsetzen.",
    source: "DEUTSCH-B1",
  },
  b2: {
    level: "B2",
    title: "Deutsch B2",
    description: "Komplexere Inhalte verstehen und sich differenziert und sicher ausdrücken.",
    source: "DEUTSCH-B2",
  },
} as const;

export type GermanLevel = keyof typeof germanCourses;
