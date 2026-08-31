export type BlogPostEN = {
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

export const blogPostsEN: BlogPostEN[] = [
  {
    slug: "fsp-oder-famed",
    title: "FSP or FaMed? Medical Language Exams for Doctors Explained",
    excerpt:
      "What is the difference between FSP and FaMed, and what should doctors actually focus on during preparation?",
    category: "MEDICAL GERMAN",
    image: "/images/blog-doctor-patient-communication.jpg",
    alt: "Doctor speaking with a patient",
    readingTime: "6 min.",
    intro:
      "Doctors planning to work in Germany quickly encounter terms such as FSP, Fachsprachprüfung and FaMed. The key to effective preparation is understanding which exam format is relevant to your own recognition pathway.",
    sections: [
      {
        title: "What does FSP mean?",
        paragraphs: [
          "FSP stands for Fachsprachprüfung, or professional language examination. Its main purpose is not to retest your medical knowledge, but to assess whether you can communicate medically in German in a safe, structured and appropriate way.",
          "The exact organisation and requirements may vary depending on the federal state and responsible authority. Preparation should therefore always match your actual exam pathway."
        ]
      },
      {
        title: "How is FaMed structured?",
        paragraphs: [
          "FaMed is based on defined medical communication situations. These include doctor-patient communication, doctor-doctor communication and a written component.",
          "The challenge is being able to communicate medical information in the form required by each situation: understandable language for patients, precise professional language for colleagues, and structured written documentation."
        ]
      },
      {
        title: "Why application matters more than vocabulary lists",
        paragraphs: [
          "Knowing medical terminology is important. During an exam, however, that knowledge must remain accessible under conversational pressure.",
          "Patient communication requires understandable language, professional discussions require precise medical terminology, and documentation requires accurate and structured written communication."
        ]
      },
      {
        title: "Which type of preparation makes sense?",
        paragraphs: [
          "Before choosing a course, clarify three things: Which exam are you preparing for? How confident is your medical German today? And how much time remains before the exam?",
          "If your language foundation is still unstable, strengthen it first. If the content is already solid, exam-focused practice and simulations become increasingly important."
        ]
      }
    ],
    sources: [
      "FaMed – official examination process",
      "Recognition in Germany – recognition process for doctors"
    ]
  },

  {
    slug: "medizinisches-deutsch-b2",
    title: "Medical German: Why B2 Alone Is Often Not Enough for Professional Practice",
    excerpt:
      "B2 is an important foundation, but medical communication requires additional language confidence and professional application.",
    category: "MEDICAL GERMAN",
    image: "/images/blog-medical-professional-germany.jpg",
    alt: "Medical professional working in Germany",
    readingTime: "6 min.",
    intro:
      "B2 is an important milestone on the path toward a medical career in Germany. Many doctors nevertheless discover that general German and medical communication place different demands on their language skills.",
    sections: [
      {
        title: "What does B2 actually mean?",
        paragraphs: [
          "At B2 level, learners can understand more complex content, communicate relatively spontaneously and express their ideas clearly.",
          "These abilities create an important foundation for everyday and professional life, but they do not automatically make medical conversations under time pressure easy."
        ]
      },
      {
        title: "Medical communication requires different language registers",
        paragraphs: [
          "Medical information must be explained clearly during patient conversations. When speaking with colleagues, more precise professional terminology is expected.",
          "Information must also be documented in writing. The real skill is being able to switch confidently between these different forms of communication."
        ]
      },
      {
        title: "Why medical terminology needs separate training",
        paragraphs: [
          "General grammar and vocabulary remain the foundation. Medical German adds professional terminology, typical consultation structures and specialised expressions.",
          "Taking a medical history, explaining procedures, presenting patients and documenting cases must not only be understood but actively performed."
        ]
      },
      {
        title: "From B2 to confident medical communication",
        paragraphs: [
          "The goal is not to replace general German with medical terminology. Both levels of language need to work together.",
          "Regular speaking practice, structured case work and realistic exam scenarios help turn existing knowledge into language that can be accessed quickly and confidently."
        ]
      }
    ],
    sources: [
      "Recognition in Germany – German language requirements for doctors",
      "Make it in Germany – working as a doctor",
      "Goethe-Institut – B2 language level"
    ]
  },
  {
    slug: "fachsprachpruefung-arzt-patient-arzt-arzt-dokumentation",
    title: "Medical Language Exam: How to Train Doctor-Patient, Doctor-Doctor and Documentation Skills",
    excerpt:
      "Three communication settings, three different demands, and one shared goal: communicating medical information safely and clearly.",
    category: "EXAM PREPARATION",
    image: "/images/blog-arzt-arzt-kommunikation.jpg",
    alt: "Medical communication between doctors",
    readingTime: "7 min.",
    intro:
      "Many candidates prepare for a medical language exam by memorising long vocabulary lists. The greater challenge often appears when information must be understood, structured and communicated in the appropriate form at the same time.",
    sections: [
      {
        title: "1. Doctor-patient: Clarity before terminology",
        paragraphs: [
          "The goal of a patient consultation is not to use as much medical terminology as possible. Patients need to understand the questions being asked and what the next steps mean.",
          "Train not only lists of questions, but also follow-up questions, transitions and clear explanations."
        ]
      },
      {
        title: "2. Doctor-doctor: Report precisely and structurally",
        paragraphs: [
          "The language register changes when speaking with colleagues. Professional terminology, precision and a clear information hierarchy become more important.",
          "Practise presenting cases aloud and review whether important information is missing, repeated or unnecessarily complicated."
        ]
      },
      {
        title: "3. Documentation: Transfer spoken information into writing",
        paragraphs: [
          "Written medical communication requires structure, accuracy and professional wording.",
          "Instead of working only with completed model texts, document new patient cases yourself. This makes language gaps much easier to identify."
        ]
      },
      {
        title: "Train all three areas together",
        paragraphs: [
          "A particularly effective approach is to use the same case for several steps: first the medical history, then the patient presentation, and finally the written documentation.",
          "This trains not only individual expressions but also the ability to move flexibly between different medical communication situations."
        ]
      }
    ],
    sources: [
      "FaMed – official examination process",
      "Recognition in Germany – medical professional language examination"
    ]
  },

  {
    slug: "als-arzt-in-deutschland-arbeiten-offizielle-quellen",
    title: "Working as a Doctor in Germany: Which Official Sources Really Matter?",
    excerpt:
      "Recognition, medical licensing and language examinations: these are the official sources international doctors should know.",
    category: "WORKING IN GERMANY",
    image: "/images/blog-working-in-germany.jpg",
    alt: "Working as a doctor in Germany",
    readingTime: "6 min.",
    intro:
      "Internationally trained doctors planning to work in Germany encounter a huge amount of information online. The important part is distinguishing official requirements from personal experiences and outdated advice.",
    sections: [
      {
        title: "1. Recognition in Germany",
        paragraphs: [
          "Recognition in Germany is a central official portal for information about the recognition of foreign professional qualifications.",
          "Its recognition finder can help you identify the authority responsible for your profession and intended place of work."
        ]
      },
      {
        title: "2. The responsible authority in your federal state",
        paragraphs: [
          "Medical licensing is not handled by one single nationwide authority. Different state authorities are responsible depending on the federal state.",
          "Document requirements, application forms and individual procedural steps should therefore always be checked directly with the authority responsible for your case."
        ]
      },
      {
        title: "3. Make it in Germany",
        paragraphs: [
          "Make it in Germany is the official federal government portal for international professionals.",
          "It provides an overview of working, immigration, recognition and professional life in Germany and is useful for understanding the broader pathway."
        ]
      },
      {
        title: "4. Verify your language exam requirements separately",
        paragraphs: [
          "Do not rely only on forums or social media experiences when researching medical language examinations.",
          "Exam formats and responsibilities can vary depending on the federal state and recognition pathway, so current requirements should always be confirmed through official sources."
        ]
      },
      {
        title: "A simple rule for your research",
        paragraphs: [
          "Start with official portals, identify the authority responsible for your case and then check its current document and language requirements.",
          "Forums and personal experiences can provide useful additional context, but they should not replace official information."
        ]
      }
    ],
    sources: [
      "Recognition in Germany – official recognition portal",
      "Make it in Germany – official federal government portal",
      "Responsible state authority for the individual recognition process"
    ]
  },
  {
    slug: "deutsch-b2-was-sie-koennen-sollten",
    title: "German B2: What You Should Really Be Able to Do at This Level",
    excerpt:
      "B2 is more than knowing grammar rules. The real question is whether you can use German independently and flexibly.",
    category: "GERMAN B2",
    image: "/images/blog-deutsch-b2-level.jpg",
    alt: "Learning German at B2 level",
    readingTime: "6 min.",
    intro:
      "Many learners wonder how to tell whether they have truly reached B2. Finishing a textbook or completing an exercise correctly is not enough on its own. B2 is best reflected in how independently you can use the language in everyday life, education and work.",
    sections: [
      {
        title: "B2 means independent language use",
        paragraphs: [
          "At B2 level, you should be able to understand the main ideas of more complex texts and follow conversations on both familiar and more abstract topics.",
          "You should also be able to express yourself relatively spontaneously without preparing every sentence completely in advance."
        ]
      },
      {
        title: "Speaking: Not perfect, but functional",
        paragraphs: [
          "B2 does not mean speaking like a native speaker without mistakes. Errors can still occur.",
          "What matters is being able to participate actively in conversations, answer questions, ask for clarification, explain ideas and justify your opinion clearly."
        ]
      },
      {
        title: "Reading and listening: Understand meaning, not just words",
        paragraphs: [
          "When reading, you should be able to understand the overall context, argument and important details rather than only recognising familiar words.",
          "When listening, you should be able to follow the main thread of a conversation or presentation even if you do not understand every single word."
        ]
      },
      {
        title: "Writing: Structure your thoughts clearly",
        paragraphs: [
          "At B2 level, you should be able to write longer, connected texts with clear paragraphs, logical ideas and appropriate linking expressions.",
          "In professional settings, it also becomes important to communicate information precisely and appropriately for the reader."
        ]
      },
      {
        title: "How can you assess your real level?",
        paragraphs: [
          "A useful question is whether you can only complete familiar tasks with preparation, or whether your German also works in new situations.",
          "If you can explain, react, ask questions and organise information spontaneously, that is a much stronger sign of B2 than simply knowing isolated grammar topics."
        ]
      }
    ],
    sources: [
      "Goethe-Institut – description of B2 language level",
      "Common European Framework of Reference for Languages"
    ]
  },

  {
    slug: "leben-und-arbeiten-in-deutschland-sprache",
    title: "Living and Working in Germany: The Role of Language in Daily and Professional Life",
    excerpt:
      "German is not only needed for exams. It also affects how independently you can manage everyday and professional life.",
    category: "LIFE IN GERMANY",
    image: "/images/blog-life-in-germany-secondary.jpg",
    alt: "Living and working in Germany",
    readingTime: "6 min.",
    intro:
      "After moving to Germany, it quickly becomes clear that learning German goes far beyond classes and exams. Language plays a role in appointments, housing, work, healthcare and many small everyday decisions.",
    sections: [
      {
        title: "German creates more independence in everyday life",
        paragraphs: [
          "Making appointments, understanding contracts, asking questions at public offices or explaining a problem on the phone can be difficult in a new language.",
          "As your German improves, you become less dependent on other people to translate or manage important situations for you."
        ]
      },
      {
        title: "Professional communication brings different demands",
        paragraphs: [
          "Communication at work is often more structured and precise than everyday conversation. You need to understand information, ask relevant questions and express your own points clearly.",
          "In medical professions, there is the additional challenge of moving between patient-friendly language, professional terminology and written documentation."
        ]
      },
      {
        title: "Everyday German and professional German develop together",
        paragraphs: [
          "General German remains important even for medical professionals. Small talk with colleagues, organisational conversations and unexpected situations cannot be managed using medical vocabulary alone.",
          "A strong general German pathway from A1 to B2 therefore creates an important foundation for later professional and medical language development."
        ]
      },
      {
        title: "Language becomes stronger through real use",
        paragraphs: [
          "Progress does not come only from learning new words. Language becomes more stable when it is used regularly in different situations.",
          "Reading, listening, writing and speaking should therefore be connected so familiar structures become easier to access spontaneously."
        ]
      },
      {
        title: "The real goal lies beyond the certificate",
        paragraphs: [
          "A certificate may be necessary for education, employment or a recognition procedure. In everyday life, however, what matters more is what you can actually do with the language.",
          "Learning German is therefore not only about completing a level. It is about gaining more independence and more possibilities for your life in Germany."
        ]
      }
    ],
    sources: [
      "Make it in Germany – living and working in Germany",
      "Goethe-Institut – learning German and language levels",
      "Recognition in Germany – information for international professionals"
    ]
  }
];

export function getBlogPostEN(slug: string) {
  return blogPostsEN.find((post) => post.slug === slug);
}
