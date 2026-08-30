import type { NavPageData } from "@/components/NavPage";

export const navPages: Record<string, NavPageData> = {
  kurse: {
    eyebrow: "KURSE",
    title: "Der passende Deutschkurs für Ihren nächsten Schritt.",
    intro:
      "Von A1 bis B2 und von medizinischer Fachsprache bis zur Prüfungsvorbereitung: Libelle verbindet Live-Unterricht mit digitalen Lernmaterialien.",
    cards: [
      { label: "MEDICAL", title: "FSP Medizin", text: "Intensive Vorbereitung auf Fachsprache, Kommunikation und Prüfungssituationen.", href: "/de/fsp-medizin" },
      { label: "MEDICAL", title: "FaMed Intensivkurs", text: "Strukturierte Vorbereitung auf medizinische Kommunikation und die FaMed-Prüfung.", href: "/de/famed" },
      { label: "ZAHNMEDIZIN", title: "FSP & FaMed Zahnmedizin", text: "Prüfungsorientierte Vorbereitung speziell für Zahnärztinnen und Zahnärzte.", href: "/de/fsp-zahnmedizin" },
      { label: "FLEXIBEL", title: "FaMed Offline", text: "Neun Module, Dokumentationen und Übungen für flexibles Selbstlernen.", href: "/de/famed-offline" },
      { label: "GENERAL GERMAN", title: "Deutsch A1–B2", text: "Ein klarer Lernweg vom Einstieg bis zur selbstständigen Kommunikation.", href: "/de/pakete/deutsch-a1-b2" },
      { label: "PRÜFUNG", title: "Simulationen", text: "Realistische Prüfungssituationen mit individuellem Feedback.", href: "/de/simulationen" },
    ],
    closingTitle: "Noch unsicher, welcher Kurs zu Ihnen passt?",
    closingText: "Schreiben Sie uns. Wir helfen Ihnen, den passenden Kurs oder Lernweg auszuwählen.",
  },

  pruefung: {
    eyebrow: "PRÜFUNGSVORBEREITUNG",
    title: "Vorbereitung, die sich an Ihrer Prüfung orientiert.",
    intro:
      "FSP, FaMed, Zahnmedizin und realistische Simulationen: Wir verbinden Sprachkompetenz mit gezieltem Prüfungstraining.",
    cards: [
      { label: "FSP", title: "FSP Medizin Intensivkurs", text: "Fachsprache, Anamnese, Dokumentation, Patientenvorstellung und Simulationen.", href: "/de/fsp-medizin" },
      { label: "FAMED", title: "FaMed Intensivkurs", text: "Medizinische Kommunikation und strukturierte Vorbereitung auf das FaMed-Format.", href: "/de/famed" },
      { label: "ZAHNMEDIZIN", title: "FSP & FaMed Zahnmedizin", text: "Fachsprache und Prüfungstraining für Zahnärztinnen und Zahnärzte.", href: "/de/fsp-zahnmedizin" },
      { label: "SIMULATION", title: "Prüfungssimulationen", text: "Prüfungssituationen realistisch trainieren und individuelles Feedback erhalten.", href: "/de/simulationen" },
      { label: "OFFLINE", title: "FaMed Offline", text: "Flexibel lernen und anschließend mit Live-Simulationen kombinieren.", href: "/de/famed-offline" },
      { label: "LERNWEG", title: "Medizinischer Sprachweg", text: "Sprachkompetenz stärken, Prüfungsvorbereitung absolvieren und anschließend simulieren.", href: "/de/pakete/medizinischer-sprachweg" },
    ],
    closingTitle: "Prüfungstermin im Blick?",
    closingText: "Wir helfen Ihnen, aus Sprachniveau, Prüfung und verfügbarem Zeitraum einen sinnvollen Lernweg zusammenzustellen.",
  },

  libelle: {
    eyebrow: "ÜBER LIBELLE",
    title: "Live lernen. Digital vertiefen. Gezielt weiterkommen.",
    intro:
      "Libelle Academy verbindet persönlichen Unterricht in kleinen Gruppen mit digitalen Lernmaterialien und einem klaren Fokus auf Deutsch in Deutschland.",
    cards: [
      { label: "SEIT 2022", title: "Praxisnah lernen", text: "Kurse werden auf konkrete Kommunikationssituationen und klare Lernziele ausgerichtet." },
      { label: "KLEINE GRUPPEN", title: "Persönliche Begleitung", text: "Überschaubare Gruppen schaffen Raum für Fragen, Feedback und aktive Teilnahme." },
      { label: "LIVE + DIGITAL", title: "Pelexa Lernbereich", text: "Aufzeichnungen, Lernmaterialien und digitale Inhalte ergänzen den Live-Unterricht." },
      { label: "MEDICAL", title: "Medizinischer Fokus", text: "FSP, FaMed, Zahnmedizin und Simulationen bilden einen Schwerpunkt der Akademie." },
      { label: "A1–B2", title: "Allgemeines Deutsch", text: "Auch der allgemeine Deutschweg von A1 bis B2 ist Teil des Angebots.", href: "/de/pakete/deutsch-a1-b2" },
      { label: "BERATUNG", title: "Der passende Lernweg", text: "Kurse und Pakete können passend zum aktuellen Niveau und Ziel kombiniert werden.", href: "/de/kurse" },
    ],
    closingTitle: "Ihr Ziel bestimmt den nächsten Schritt.",
    closingText: "Sagen Sie uns, wo Sie aktuell stehen und welches Ziel Sie erreichen möchten.",
  },

  tutoren: {
    eyebrow: "TUTOREN",
    title: "Von Kolleginnen und Kollegen lernen.",
    intro:
      "Unsere Tutorinnen und Tutoren begleiten die medizinische Sprach- und Prüfungsvorbereitung mit praxisnaher Perspektive.",
    cards: [
      { label: "FSP MEDIZIN", title: "Firdevs Murad", text: "Tutorin für FSP Medizin. Profilfoto und ausführliche Qualifikationen werden im finalen Content-Schritt ergänzt." },
      { label: "FAMED", title: "Alkış Şensoy", text: "Tutor für FaMed. Profilfoto und ausführliche Qualifikationen werden im finalen Content-Schritt ergänzt." },
      { label: "DEM NÄCHST", title: "Weitere Tutor:innen", text: "Weitere Profile können jederzeit ergänzt werden, sobald die finalen Angaben und Bilder vorliegen." },
    ],
    closingTitle: "Sie möchten wissen, welcher Kurs zu Ihrem Ziel passt?",
    closingText: "Schreiben Sie uns und wir leiten Sie zum passenden Kurs und Lernformat weiter.",
  },

  ressourcen: {
    eyebrow: "RESSOURCEN",
    title: "Deutsch lernen – auch zwischen den Unterrichtsstunden.",
    intro:
      "Kostenlose Inhalte, Lernmaterialien und digitale Ressourcen ergänzen die Kurse und helfen beim kontinuierlichen Lernen.",
    cards: [
      { label: "INSTAGRAM", title: "@almancahedefim", text: "Grammatik, Prüfungstipps und Einblicke in die Libelle Academy.", href: "https://www.instagram.com/almancahedefim/" },
      { label: "PELEXA", title: "Digitaler Lernbereich", text: "Kursteilnehmende erhalten Zugriff auf Aufzeichnungen, Materialien und digitale Lerninhalte." },
      { label: "COMING SOON", title: "PDF-Ressourcen", text: "Kostenlose und kostenpflichtige Lernmaterialien können hier später als eigene Landingpages ergänzt werden." },
      { label: "MEDICAL", title: "Prüfungstipps", text: "Ressourcen zu FSP, FaMed und medizinischer Kommunikation werden hier gebündelt." },
      { label: "GENERAL GERMAN", title: "A1–B2 Inhalte", text: "Grammatik, Wortschatz und Lernhilfen für den allgemeinen Deutschweg." },
      { label: "BERATUNG", title: "Passende Ressourcen finden", text: "Bei Fragen zu Kursen oder Materialien können Sie uns direkt kontaktieren." },
    ],
    closingTitle: "Suchen Sie etwas Bestimmtes?",
    closingText: "Schreiben Sie uns kurz, was Sie lernen oder für welche Prüfung Sie sich vorbereiten.",
  },
};
