export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  readingTime: string;
  intro: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  sources: string[];
};

export const blogPostsDE: BlogPost[] = [
{
  slug: "fsp-oder-famed",
  title: "FSP oder FaMed? Fachsprachprüfungen für Ärztinnen und Ärzte erklärt",
  excerpt:
    "Was unterscheidet FSP und FaMed – und worauf sollten Ärztinnen und Ärzte bei ihrer Vorbereitung wirklich achten?",
  category: "MEDICAL GERMAN",
  image: "/images/blog-doctor-patient-communication.jpg",
  alt: "Ärztliches Gespräch mit einer Patientin",
  readingTime: "6 Min.",
  intro:
    "Wer als Ärztin oder Arzt in Deutschland arbeiten möchte, begegnet schnell Begriffen wie FSP, Fachsprachprüfung und FaMed. Für eine sinnvolle Vorbereitung ist entscheidend, welches Prüfungsformat für den eigenen Anerkennungsweg relevant ist.",
  sections: [
    {
      title: "Was bedeutet FSP?",
      paragraphs: [
        "FSP steht für Fachsprachprüfung. Im Mittelpunkt steht die Frage, ob medizinische Kommunikation auf Deutsch sicher, strukturiert und situationsgerecht funktioniert.",
        "Die konkrete Organisation kann sich je nach Bundesland und zuständiger Stelle unterscheiden. Deshalb sollte die Vorbereitung immer zum tatsächlichen Prüfungsweg passen."
      ]
    },
    {
      title: "Wie ist FaMed aufgebaut?",
      paragraphs: [
        "FaMed arbeitet mit definierten medizinischen Kommunikationssituationen. Dazu gehören Arzt-Patienten-Kommunikation, Arzt-Arzt-Kommunikation und eine schriftliche Station.",
        "Die Herausforderung besteht darin, medizinische Informationen je nach Situation verständlich, fachsprachlich oder schriftlich strukturiert zu vermitteln."
      ]
    },
    {
      title: "Warum Anwendung wichtiger ist als Vokabellisten",
      paragraphs: [
        "Medizinische Fachbegriffe zu kennen ist wichtig. In der Prüfung müssen diese Kenntnisse jedoch unter Gesprächsdruck abrufbar sein.",
        "Mit Patientinnen und Patienten braucht es verständliche Sprache. Im Kollegengespräch wird präzise Fachsprache erwartet. In der Dokumentation müssen Informationen schriftlich korrekt und strukturiert formuliert werden."
      ]
    },
    {
      title: "Welche Vorbereitung ist sinnvoll?",
      paragraphs: [
        "Vor der Kurswahl sollten drei Punkte geklärt sein: Welche Prüfung steht an? Wie sicher ist die medizinische Kommunikation aktuell? Und wie viel Zeit bleibt bis zum Prüfungstermin?",
        "Wenn die sprachliche Grundlage noch unsicher ist, sollte sie zuerst stabilisiert werden. Wenn die Inhalte bereits sitzen, werden prüfungsnahe Übungen und Simulationen wichtiger."
      ]
    }
  ],
  sources: [
    "FaMed – offizieller Prüfungsablauf",
    "Anerkennung in Deutschland – Anerkennungsverfahren für Ärztinnen und Ärzte"
  ]
},
{
  slug: "medizinisches-deutsch-b2",
  title: "Medizinisches Deutsch: Warum B2 allein für den Berufsalltag oft nicht reicht",
  excerpt:
    "B2 ist eine wichtige Grundlage. Medizinische Kommunikation verlangt jedoch zusätzliche sprachliche Sicherheit.",
  category: "MEDIZINISCHES DEUTSCH",
  image: "/images/blog-medical-professional-germany.jpg",
  alt: "Medizinische Fachkraft in Deutschland",
  readingTime: "6 Min.",
  intro:
    "Ein B2-Niveau ist ein wichtiger Schritt auf dem Weg in den medizinischen Berufsalltag in Deutschland. Trotzdem merken viele Ärztinnen und Ärzte schnell, dass allgemeines Deutsch und medizinische Kommunikation unterschiedliche Anforderungen stellen.",
  sections: [
    {
      title: "Was bedeutet B2?",
      paragraphs: [
        "Auf B2-Niveau können Lernende komplexere Inhalte verstehen, sich relativ spontan verständigen und eigene Gedanken klar ausdrücken.",
        "Das ist eine wichtige Grundlage für Alltag und Beruf. Es bedeutet jedoch nicht automatisch, dass medizinische Gespräche unter Zeitdruck bereits sicher funktionieren."
      ]
    },
    {
      title: "Medizinische Kommunikation braucht mehrere Sprachregister",
      paragraphs: [
        "Im Patientengespräch muss medizinische Information verständlich erklärt werden. Im Kollegengespräch wird dagegen präzise Fachsprache erwartet.",
        "Zusätzlich müssen Informationen schriftlich dokumentiert werden. Die Herausforderung besteht deshalb darin, flexibel zwischen diesen Kommunikationsformen zu wechseln."
      ]
    },
    {
      title: "Warum medizinische Fachsprache zusätzlich trainiert wird",
      paragraphs: [
        "Allgemeine Grammatik und Wortschatz bleiben die Grundlage. Im medizinischen Bereich kommen jedoch typische Gesprächsstrukturen, Fachbegriffe und professionelle Formulierungen hinzu.",
        "Anamnese, Patientenaufklärung, Patientenvorstellung und Dokumentation müssen nicht nur verstanden, sondern aktiv angewendet werden können."
      ]
    },
    {
      title: "Von B2 zur sicheren medizinischen Kommunikation",
      paragraphs: [
        "Der sinnvollste Weg besteht nicht darin, allgemeines Deutsch durch Fachsprache zu ersetzen. Beide Ebenen müssen miteinander verbunden werden.",
        "Regelmäßiges Sprechen, strukturierte Fallarbeit und realistische Prüfungssituationen helfen dabei, vorhandenes Wissen schneller und sicherer abzurufen."
      ]
    }
  ],
  sources: [
    "Anerkennung in Deutschland – Deutschkenntnisse für Ärztinnen und Ärzte",
    "Make it in Germany – Arbeiten als Ärztin oder Arzt",
    "Goethe-Institut – Sprachniveau B2"
  ]
},
{
  slug: "fachsprachpruefung-arzt-patient-arzt-arzt-dokumentation",
  title: "Fachsprachprüfung Medizin: Arzt-Patient, Arzt-Arzt und Dokumentation richtig trainieren",
  excerpt:
    "Drei Kommunikationssituationen, drei unterschiedliche Anforderungen – und ein gemeinsames Ziel: medizinische Informationen sicher vermitteln.",
  category: "PRÜFUNGSVORBEREITUNG",
  image: "/images/blog-arzt-arzt-kommunikation.jpg",
  alt: "Medizinische Kommunikation zwischen Ärztinnen und Ärzten",
  readingTime: "7 Min.",
  intro:
    "Viele Kandidatinnen und Kandidaten lernen vor einer medizinischen Sprachprüfung lange Vokabellisten. Die größere Herausforderung entsteht jedoch häufig dann, wenn Informationen gleichzeitig verstanden, strukturiert und in der passenden Sprache weitergegeben werden müssen.",
  sections: [
    {
      title: "1. Arzt-Patient: Verständlichkeit vor Fachsprache",
      paragraphs: [
        "Im Patientengespräch geht es nicht darum, möglichst viele Fachbegriffe zu verwenden. Patientinnen und Patienten müssen verstehen, welche Fragen gestellt werden und welche nächsten Schritte vorgesehen sind.",
        "Trainieren Sie deshalb nicht nur Fragenlisten, sondern auch Nachfragen, Übergänge und verständliche Erklärungen."
      ]
    },
    {
      title: "2. Arzt-Arzt: Präzise und strukturiert berichten",
      paragraphs: [
        "Im Kollegengespräch verändert sich das Sprachregister. Fachsprachliche Präzision und eine klare Informationshierarchie werden wichtiger.",
        "Üben Sie Fälle laut vorzustellen und achten Sie darauf, relevante Informationen in einer nachvollziehbaren Reihenfolge weiterzugeben."
      ]
    },
    {
      title: "3. Dokumentation: Informationen schriftlich übertragen",
      paragraphs: [
        "Schriftliche medizinische Kommunikation verlangt Struktur, Genauigkeit und professionelle Formulierungen.",
        "Arbeiten Sie deshalb nicht ausschließlich mit fertigen Mustertexten. Übertragen Sie neue Patientenfälle selbst in eine passende Dokumentationsform."
      ]
    },
    {
      title: "Die drei Bereiche gemeinsam trainieren",
      paragraphs: [
        "Besonders sinnvoll ist es, denselben Fall für mehrere Schritte zu verwenden: zuerst Anamnese, anschließend Patientenvorstellung und danach Dokumentation.",
        "So trainieren Sie nicht nur einzelne Formulierungen, sondern den flexiblen Wechsel zwischen verschiedenen medizinischen Kommunikationssituationen."
      ]
    }
  ],
  sources: [
    "FaMed – offizieller Prüfungsablauf",
    "Anerkennung in Deutschland – medizinische Fachsprachprüfung"
  ]
},
{
  slug: "als-arzt-in-deutschland-arbeiten-offizielle-quellen",
  title: "Als Arzt in Deutschland arbeiten: Welche offiziellen Quellen wirklich wichtig sind",
  excerpt:
    "Anerkennung, Approbation und Sprachprüfung: Diese offiziellen Stellen sollten Ärztinnen und Ärzte bei ihrer Planung kennen.",
  category: "ARBEITEN IN DEUTSCHLAND",
  image: "/images/blog-working-in-germany.jpg",
  alt: "Arbeiten als Ärztin oder Arzt in Deutschland",
  readingTime: "6 Min.",
  intro:
    "Wer als international ausgebildete Ärztin oder international ausgebildeter Arzt in Deutschland arbeiten möchte, findet online unzählige Informationen. Entscheidend ist jedoch, offizielle Anforderungen von persönlichen Erfahrungen und veralteten Informationen zu unterscheiden.",
  sections: [
    {
      title: "1. Anerkennung in Deutschland",
      paragraphs: [
        "Das Portal Anerkennung in Deutschland ist eine zentrale offizielle Informationsquelle für die Anerkennung ausländischer Berufsqualifikationen.",
        "Über den Anerkennungs-Finder können Sie unter anderem prüfen, welche Stelle für Ihren Beruf und Ihren geplanten Arbeitsort zuständig ist."
      ]
    },
    {
      title: "2. Die zuständige Behörde Ihres Bundeslandes",
      paragraphs: [
        "Die ärztliche Berufszulassung wird nicht über eine einzige bundesweite Behörde abgewickelt. Je nach Bundesland ist eine bestimmte Landesbehörde für Ihr Verfahren zuständig.",
        "Dokumentenlisten, Antragsformulare und einzelne Verfahrensschritte sollten deshalb immer direkt bei der für Sie zuständigen Stelle geprüft werden."
      ]
    },
    {
      title: "3. Make it in Germany",
      paragraphs: [
        "Make it in Germany ist das offizielle Portal der Bundesregierung für internationale Fachkräfte.",
        "Dort finden Sie Informationen zu Arbeiten, Einreise, Anerkennung und beruflichen Perspektiven in Deutschland. Das Portal eignet sich besonders für einen ersten Überblick über den gesamten Weg."
      ]
    },
    {
      title: "4. Sprachprüfung immer konkret prüfen",
      paragraphs: [
        "Auch bei der medizinischen Sprachprüfung sollten Sie sich nicht ausschließlich auf Erfahrungsberichte verlassen. Prüfungsformat und Zuständigkeit können sich je nach Bundesland und Verfahren unterscheiden.",
        "Nutzen Sie Erfahrungsberichte zur Orientierung, aber prüfen Sie verbindliche Anforderungen immer bei offiziellen Stellen."
      ]
    },
    {
      title: "Eine einfache Regel für Ihre Recherche",
      paragraphs: [
        "Beginnen Sie mit offiziellen Portalen, identifizieren Sie anschließend Ihre zuständige Behörde und prüfen Sie dort die aktuelle Dokumenten- und Sprachanforderung.",
        "Foren, soziale Medien und Erfahrungsberichte können danach wertvolle zusätzliche Einblicke geben. Sie sollten offizielle Informationen jedoch nicht ersetzen."
      ]
    }
  ],
  sources: [
    "Anerkennung in Deutschland – offizielles Anerkennungsportal",
    "Make it in Germany – offizielles Portal der Bundesregierung",
    "Zuständige Landesbehörde für das jeweilige Anerkennungsverfahren"
  ]
},
{
  slug: "deutsch-b2-was-sie-koennen-sollten",
  title: "Deutsch B2: Was Sie auf diesem Niveau wirklich können sollten",
  excerpt:
    "B2 bedeutet mehr als Grammatikregeln zu kennen. Entscheidend ist, ob Sie Sprache selbstständig und flexibel verwenden können.",
  category: "DEUTSCH B2",
  image: "/images/blog-deutsch-b2-level.jpg",
  alt: "Deutsch lernen auf B2-Niveau",
  readingTime: "6 Min.",
  intro:
    "Viele Lernende fragen sich, woran man erkennt, ob B2 wirklich erreicht ist. Ein abgeschlossenes Lehrbuch oder eine bestandene Übung allein beantwortet diese Frage nicht. B2 zeigt sich vor allem darin, wie selbstständig Sprache im Alltag, Studium und Beruf eingesetzt werden kann.",
  sections: [
    {
      title: "B2 bedeutet selbstständige Sprachverwendung",
      paragraphs: [
        "Auf B2-Niveau sollten Sie die Hauptinhalte komplexerer Texte verstehen und Gesprächen zu vertrauten sowie abstrakteren Themen folgen können.",
        "Ebenso wichtig ist, dass Sie sich relativ spontan ausdrücken können, ohne jede Aussage vorher vollständig im Kopf vorbereiten zu müssen."
      ]
    },
    {
      title: "Sprechen: Nicht perfekt, aber handlungsfähig",
      paragraphs: [
        "B2 bedeutet nicht, fehlerfrei wie eine Muttersprachlerin oder ein Muttersprachler zu sprechen. Fehler können weiterhin vorkommen.",
        "Entscheidend ist vielmehr, dass Sie Gespräche aktiv mitgestalten, Fragen beantworten, nachfragen, erklären und Ihre Meinung verständlich begründen können."
      ]
    },
    {
      title: "Lesen und Hören: Mehr als einzelne Wörter verstehen",
      paragraphs: [
        "Beim Lesen sollten Sie nicht nur einzelne bekannte Wörter erkennen, sondern den Zusammenhang, die Argumentation und wichtige Details erfassen.",
        "Beim Hören geht es ähnlich darum, dem roten Faden eines Gesprächs oder Beitrags folgen zu können, auch wenn nicht jedes einzelne Wort verstanden wird."
      ]
    },
    {
      title: "Schreiben: Gedanken klar strukturieren",
      paragraphs: [
        "Auf B2-Niveau sollten Sie längere zusammenhängende Texte verfassen können. Dazu gehören klare Absätze, nachvollziehbare Argumente und passende Verknüpfungen zwischen Gedanken.",
        "Im beruflichen Kontext wird zusätzlich wichtig, Informationen präzise und adressatengerecht zu formulieren."
      ]
    },
    {
      title: "Woran erkennen Sie Ihren tatsächlichen Stand?",
      paragraphs: [
        "Ein guter Selbsttest ist die Frage, ob Sie bekannte Aufgaben nur mit Vorbereitung lösen können oder ob die Sprache auch in neuen Situationen funktioniert.",
        "Wenn Sie spontan erklären, reagieren, nachfragen und Informationen strukturieren können, ist das ein deutlich stärkeres Zeichen für B2 als das reine Beherrschen einzelner Grammatikthemen."
      ]
    }
  ],
  sources: [
    "Goethe-Institut – Beschreibung des Sprachniveaus B2",
    "Gemeinsamer Europäischer Referenzrahmen für Sprachen"
  ]
},
{
  slug: "leben-und-arbeiten-in-deutschland-sprache",
  title: "Leben und Arbeiten in Deutschland: Sprache im Alltag und Beruf",
  excerpt:
    "Deutsch wird nicht nur für Prüfungen gebraucht. Im Alltag und Berufsleben entscheidet Sprache oft darüber, wie selbstständig Sie handeln können.",
  category: "LEBEN IN DEUTSCHLAND",
  image: "/images/blog-life-in-germany-secondary.jpg",
  alt: "Leben und Arbeiten in Deutschland",
  readingTime: "6 Min.",
  intro:
    "Wer nach Deutschland zieht, merkt schnell, dass Deutschlernen weit über Unterricht und Prüfungen hinausgeht. Sprache begleitet Behördentermine, Wohnungssuche, Arbeit, Arztbesuche und viele kleine Entscheidungen des Alltags.",
  sections: [
    {
      title: "Deutsch bedeutet mehr Selbstständigkeit im Alltag",
      paragraphs: [
        "Viele Alltagssituationen wirken zunächst einfach, werden in einer neuen Sprache aber anspruchsvoller. Dazu gehören Termine vereinbaren, Verträge verstehen, Fragen bei Behörden stellen oder ein Problem telefonisch erklären.",
        "Je sicherer Sie sprachlich werden, desto weniger sind Sie darauf angewiesen, dass andere Personen übersetzen oder wichtige Situationen für Sie übernehmen."
      ]
    },
    {
      title: "Im Beruf verändern sich die sprachlichen Anforderungen",
      paragraphs: [
        "Berufliche Kommunikation ist häufig strukturierter und präziser als Alltagssprache. Sie müssen Informationen verstehen, Rückfragen stellen und eigene Aussagen nachvollziehbar formulieren können.",
        "In medizinischen Berufen kommt zusätzlich die Fähigkeit hinzu, zwischen Patientensprache, Fachsprache und schriftlicher Dokumentation zu wechseln."
      ]
    },
    {
      title: "Alltagssprache und Berufssprache entwickeln sich gemeinsam",
      paragraphs: [
        "Allgemeines Deutsch bleibt auch für medizinische Fachkräfte wichtig. Small Talk mit Kolleginnen und Kollegen, organisatorische Gespräche oder spontane Situationen lassen sich nicht ausschließlich mit medizinischem Fachwortschatz bewältigen.",
        "Deshalb ist ein stabiler allgemeiner Sprachweg von A1 bis B2 eine wichtige Grundlage, auf der berufliche und medizinische Sprache später gezielt aufgebaut werden kann."
      ]
    },
    {
      title: "Sprache wird durch echte Anwendung stabiler",
      paragraphs: [
        "Fortschritt entsteht nicht nur dadurch, dass neue Wörter gelernt werden. Sprache wird besonders dann sicherer, wenn sie regelmäßig in unterschiedlichen Situationen eingesetzt wird.",
        "Lesen, Hören, Schreiben und Sprechen sollten deshalb miteinander verbunden werden. Je häufiger bekannte Strukturen aktiv verwendet werden, desto leichter lassen sie sich später spontan abrufen."
      ]
    },
    {
      title: "Das eigentliche Ziel liegt hinter dem Sprachzertifikat",
      paragraphs: [
        "Ein Zertifikat kann für Studium, Beruf oder Anerkennungsverfahren notwendig sein. Für den Alltag ist jedoch entscheidender, was Sie mit der Sprache tatsächlich tun können.",
        "Deutsch zu lernen bedeutet deshalb nicht nur, ein Niveau abzuschließen. Es bedeutet, Schritt für Schritt mehr Möglichkeiten zu gewinnen, das eigene Leben in Deutschland selbstständig zu gestalten."
      ]
    }
  ],
  sources: [
    "Make it in Germany – Leben und Arbeiten in Deutschland",
    "Goethe-Institut – Deutschlernen und Sprachniveaus",
    "Anerkennung in Deutschland – Informationen für internationale Fachkräfte"
  ]
}
];

export function getBlogPostDE(slug: string) {
  return blogPostsDE.find((post) => post.slug === slug);
}
