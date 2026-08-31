export const germanCourses = {
  a1: {
    level: "A1",
    title: "German A1",
    eyebrow: "YOUR START IN GERMANY",
    tagline: "The first step: understand, respond and start speaking for yourself.",
    description:
      "For beginners who want to learn German from the ground up and build a strong foundation for everyday life, work and the next level.",
    duration: "8 weeks",
    price: "165 €",
    forWhom:
      "For learners with little or no previous knowledge, especially those planning to live or work in Germany long term.",
    outcomes: [
      "Introduce yourself and exchange basic personal information",
      "Handle typical everyday situations in German",
      "Understand short, simple information and respond",
      "Build a clear foundation for A2",
    ],
    included: [
      "8 weeks strukturierte Progression",
      "Everyday communication instead of isolated rules",
      "Vocabulary, grammar and speaking as one connected learning path",
      "Clear next step: A2 or the complete A1–B2 path",
    ],
    nextLevel: "A2",
    source: "DEUTSCH-A1",
  },
  a2: {
    level: "A2",
    title: "German A2",
    eyebrow: "FROM FOUNDATIONS TO ROUTINE",
    tagline: "Do not just understand. Respond independently more often.",
    description:
      "For learners with an A1 foundation who want to handle everyday situations more confidently, expand their active vocabulary and prepare for longer conversations.",
    duration: "8 weeks",
    price: "165 €",
    forWhom:
      "For A1 graduates or learners with comparable basic knowledge who want to strengthen their communication.",
    outcomes: [
      "Speak in more detail about everyday life, appointments, work and personal topics",
      "Understand common questions and respond more spontaneously",
      "Form simple connected statements",
      "Strengthen the language foundation for B1",
    ],
    included: [
      "8 weeks strukturierter Aufbau auf A1",
      "More active communication and sentence confidence",
      "Grammar directly connected to real situations",
      "Clear next step: B1 or the complete A1–B2 path",
    ],
    nextLevel: "B1",
    source: "DEUTSCH-A2",
  },
  b1: {
    level: "B1",
    title: "German B1",
    eyebrow: "COMMUNICATE MORE INDEPENDENTLY",
    tagline: "From sentences to real conversations.",
    description:
      "For learners who want to move beyond practice and use German more independently in everyday and professional situations.",
    duration: "12 weeks",
    price: "250 €",
    forWhom:
      "For A2 learners who want to understand longer statements, express their thoughts more clearly and prepare for B2.",
    outcomes: [
      "Express experiences, plans and opinions coherently",
      "Participate more actively in everyday and professional conversations",
      "Understand longer texts and statements more effectively",
      "Create a strong language foundation for B2",
    ],
    included: [
      "12 weeks für nachhaltigere Sprachroutine",
      "More focus on connected speaking",
      "Grammar, vocabulary and expression as one integrated learning path",
      "Direct progression to B2",
    ],
    nextLevel: "B2",
    source: "DEUTSCH-B1",
  },
  b2: {
    level: "B2",
    title: "German B2",
    eyebrow: "MORE CONFIDENT. MORE PRECISE. READY FOR PROFESSIONAL COMMUNICATION.",
    tagline: "Use German without constantly searching for words.",
    description:
      "For advanced learners who want to understand more complex content, express arguments more precisely and develop their German for study, work or medical German.",
    duration: "12 weeks",
    price: "399 €",
    forWhom:
      "For B1 learners who want to significantly improve their language confidence and later progress into areas such as medical German.",
    outcomes: [
      "Follow more complex conversations and content confidently",
      "Express viewpoints, reasons and connections more precisely",
      "Communicate more confidently in professional contexts",
      "Build a strong foundation for medical German and further specialization",
    ],
    included: [
      "12 weeks fokussierter B2-Aufbau",
      "Confidence in expression instead of simply repeating rules",
      "Practical progression toward more advanced communication",
      "Option to continue into Libelle medical programs",
    ],
    nextLevel: "Medical German",
    source: "DEUTSCH-B2",
  },
} as const;

export type GermanLevel = keyof typeof germanCourses;
