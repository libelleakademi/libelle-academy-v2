export const germanCourses = {
  a1: {
    level: "A1",
    title: "Deutsch A1",
    eyebrow: "IHR START IN DEUTSCHLAND",
    tagline: "Der erste Schritt: verstehen, antworten, selbst sprechen.",
    description:
      "Für Einsteigerinnen und Einsteiger, die Deutsch von Grund auf strukturiert lernen und eine belastbare Basis für Alltag, Beruf und den nächsten Kurs aufbauen möchten.",
    duration: "8 Wochen",
    price: "165 €",
    forWhom:
      "Für Lernende ohne oder mit sehr geringen Vorkenntnissen – besonders sinnvoll, wenn Sie langfristig in Deutschland leben oder arbeiten möchten.",
    outcomes: [
      "Sich vorstellen und einfache persönliche Informationen austauschen",
      "Typische Alltagssituationen sprachlich bewältigen",
      "Kurze, einfache Informationen verstehen und darauf reagieren",
      "Eine klare Grundlage für den Übergang zu A2 aufbauen",
    ],
    included: [
      "8 Wochen strukturierte Progression",
      "Alltagsnahe Kommunikation statt isolierter Regeln",
      "Wortschatz, Grammatik und Sprechen als zusammenhängender Lernweg",
      "Klare nächste Stufe: A2 oder kompletter A1–B2 Lernweg",
    ],
    nextLevel: "A2",
    source: "DEUTSCH-A1",
  },
  a2: {
    level: "A2",
    title: "Deutsch A2",
    eyebrow: "VON GRUNDLAGEN ZU ROUTINE",
    tagline: "Nicht nur verstehen. Immer häufiger selbst reagieren.",
    description:
      "Für Lernende mit A1-Grundlage, die typische Alltagssituationen sicherer bewältigen, ihren aktiven Wortschatz erweitern und längere Gespräche vorbereiten möchten.",
    duration: "8 Wochen",
    price: "165 €",
    forWhom:
      "Für A1-Absolventinnen und -Absolventen oder Lernende mit vergleichbaren Grundkenntnissen, die ihre Kommunikation stabilisieren möchten.",
    outcomes: [
      "Über Alltag, Termine, Arbeit und persönliche Themen ausführlicher sprechen",
      "Häufige Fragen verstehen und spontaner beantworten",
      "Einfache zusammenhängende Aussagen formulieren",
      "Die sprachliche Basis für B1 gezielt festigen",
    ],
    included: [
      "8 Wochen strukturierter Aufbau auf A1",
      "Mehr aktive Kommunikation und Satzsicherheit",
      "Grammatik im direkten Zusammenhang mit realen Situationen",
      "Klare nächste Stufe: B1 oder kompletter A1–B2 Lernweg",
    ],
    nextLevel: "B1",
    source: "DEUTSCH-A2",
  },
  b1: {
    level: "B1",
    title: "Deutsch B1",
    eyebrow: "SELBSTSTÄNDIGER KOMMUNIZIEREN",
    tagline: "Vom Satz zur echten Unterhaltung.",
    description:
      "Für Lernende, die Deutsch nicht mehr nur üben, sondern zunehmend selbstständig im Alltag und im beruflichen Umfeld einsetzen möchten.",
    duration: "12 Wochen",
    price: "250 €",
    forWhom:
      "Für Lernende auf A2-Niveau, die längere Aussagen verstehen, eigene Gedanken strukturierter ausdrücken und sich auf B2 vorbereiten möchten.",
    outcomes: [
      "Erfahrungen, Pläne und Meinungen zusammenhängend ausdrücken",
      "Gespräche im Alltag und in vielen beruflichen Situationen aktiver führen",
      "Längere Texte und Aussagen besser erfassen",
      "Eine stabile sprachliche Ausgangslage für B2 schaffen",
    ],
    included: [
      "12 Wochen für nachhaltigere Sprachroutine",
      "Mehr Fokus auf zusammenhängendes Sprechen",
      "Grammatik, Wortschatz und Ausdruck als integrierter Lernweg",
      "Direkter Übergang zu B2 möglich",
    ],
    nextLevel: "B2",
    source: "DEUTSCH-B1",
  },
  b2: {
    level: "B2",
    title: "Deutsch B2",
    eyebrow: "SICHERER. DIFFERENZIERTER. BERUFLICH ANSCHLUSSFÄHIG.",
    tagline: "Deutsch so einsetzen, dass Sie nicht ständig nach Worten suchen.",
    description:
      "Für fortgeschrittene Lernende, die komplexere Inhalte verstehen, differenzierter argumentieren und ihre Deutschkenntnisse für Studium, Beruf oder den Einstieg in medizinisches Deutsch ausbauen möchten.",
    duration: "12 Wochen",
    price: "399 €",
    forWhom:
      "Für Lernende auf B1-Niveau, die ihre sprachliche Sicherheit deutlich erhöhen und anschließend beispielsweise in medizinische Fachsprachkurse wechseln möchten.",
    outcomes: [
      "Komplexere Gespräche und Inhalte sicherer verfolgen",
      "Standpunkte, Begründungen und Zusammenhänge differenzierter formulieren",
      "Im beruflichen Kontext souveräner kommunizieren",
      "Eine starke Basis für medizinisches Deutsch und weitere Spezialisierung schaffen",
    ],
    included: [
      "12 Wochen fokussierter B2-Aufbau",
      "Ausdruckssicherheit statt reiner Regelwiederholung",
      "Praxisorientierter Übergang zu anspruchsvollerer Kommunikation",
      "Anschlussmöglichkeit an medizinische Libelle-Programme",
    ],
    nextLevel: "Medizinisches Deutsch",
    source: "DEUTSCH-B2",
  },
} as const;

export type GermanLevel = keyof typeof germanCourses;
