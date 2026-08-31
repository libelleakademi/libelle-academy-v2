type Lang = "de" | "tr" | "en";
type Variant = "exam" | "fsp" | "famed" | "about";

const copy = {
  tr: {
    cards: [
      ["TIP EĞİTİMİ", "Charité Berlin deneyimi"],
      ["AKADEMİK ÇALIŞMA", "Nörobilim alanında doktora çalışması"],
      ["ÖĞRETİM DENEYİMİ", "Charité öğrenme merkezinde üniversite düzeyinde eğitim"],
      ["EĞİTİM PROJESİ", "Tıp profesyonellerine yönelik dil kursunun kurucu ekibi"],
    ],
    exam: {
      eyebrow: "EĞİTMEN KADROSU",
      title: "Medikal bağlamı anlayan bir ekip.",
      text: "Medikal Almanca eğitimlerimiz, Almanya'daki tıp eğitimi ve akademik çalışma ortamını yakından tanıyan eğitmenler tarafından yürütülür. Kadromuzdaki deneyim; Charité Berlin'de tıp eğitimi, üniversite düzeyinde öğretim ve medikal iletişim projelerini kapsar. Bu birikim, derslerin yalnızca dilbilgisine değil; klinik iletişime ve sınavda ihtiyaç duyulan uygulamaya odaklanmasını destekler.",
    },
    fsp: {
      eyebrow: "MEDİKAL DENEYİM",
      title: "Tıbbi iletişimi yalnızca dil açısından ele almıyoruz.",
      text: "FSP hazırlığında medikal eğitim geçmişi önemli bir avantajdır. Anamnez, dokümantasyon ve hasta sunumu yalnızca Almanca cümleler olarak değil, tıbbi iletişimin bütünü içinde çalışılır. Eğitmen kadromuzun Almanya'daki tıp eğitimi ve akademik ortam deneyimi, sınav dilini mesleki bağlamla birleştirmemize yardımcı olur.",
    },
    famed: {
      eyebrow: "ÖĞRETİM DENEYİMİ",
      title: "Akademik bilgiyi anlatabilmek de ayrı bir beceridir.",
      text: "FaMed hazırlığında yalnızca medikal bilgiye sahip olmak yeterli değildir; bu bilgiyi yapılandırılmış ve anlaşılır biçimde aktarabilmek gerekir. Eğitmen kadromuzda Charité Berlin'in öğrenme ortamında üniversite düzeyinde eğitim deneyimi bulunan eğitmenler yer alır. Bu öğretim deneyimini sınav formatına uygun iletişim çalışmaları ve aktif uygulamalarla birleştiriyoruz.",
    },
    about: {
      eyebrow: "EĞİTİM KALİTESİ",
      title: "Eğitim kalitesinin merkezinde eğitmenlerimiz var.",
      text: "Libelle'nin medikal programları; tıp eğitimi, akademik çalışma ve öğretim deneyimini dil eğitimiyle bir araya getiren bir ekip tarafından hazırlanır. Kadromuzdaki deneyimler arasında Charité Berlin'de tıp eğitimi, nörobilim alanında doktora çalışması, üniversite düzeyinde öğretim ve medikal iletişim odaklı eğitim projeleri bulunur. Amacımız yalnızca sınav kalıplarını öğretmek değil, dili mesleki ortamda kullanılabilir hale getirmektir.",
    },
  },

  de: {
    cards: [
      ["MEDIZINSTUDIUM", "Erfahrung an der Charité Berlin"],
      ["AKADEMISCHE ARBEIT", "Promotionsarbeit im Bereich Neurowissenschaften"],
      ["LEHRERFAHRUNG", "Universitäre Lehre am Lernzentrum der Charité"],
      ["BILDUNGSPROJEKT", "Mitgründung eines Sprachkurses für Mediziner"],
    ],
    exam: {
      eyebrow: "UNSER LEHRTEAM",
      title: "Ein Team, das den medizinischen Kontext versteht.",
      text: "Unsere medizinischen Deutschkurse werden von Lehrkräften begleitet, die das Medizinstudium und akademische Umfeld in Deutschland aus eigener Erfahrung kennen. Im Team kommen Erfahrungen aus dem Medizinstudium an der Charité Berlin, universitärer Lehre und Projekten zur medizinischen Kommunikation zusammen. Dadurch bleibt der Unterricht nicht bei Grammatik stehen, sondern verbindet Sprache mit klinischer Kommunikation und prüfungsnaher Anwendung.",
    },
    fsp: {
      eyebrow: "MEDIZINISCHE ERFAHRUNG",
      title: "Medizinische Kommunikation nicht nur sprachlich denken.",
      text: "In der FSP-Vorbereitung ist medizinischer Hintergrund ein wichtiger Vorteil. Anamnese, Dokumentation und Patientenvorstellung werden nicht als isolierte Sprachübungen, sondern im medizinischen Kommunikationskontext trainiert. Erfahrung aus Medizinstudium und akademischem Umfeld in Deutschland hilft uns, Prüfungssprache mit beruflichem Kontext zu verbinden.",
    },
    famed: {
      eyebrow: "LEHRERFAHRUNG",
      title: "Fachwissen vermitteln zu können, ist eine eigene Kompetenz.",
      text: "Für die FaMed-Vorbereitung reicht Fachwissen allein nicht aus; Inhalte müssen strukturiert und verständlich vermittelt werden. In unserem Team gibt es Erfahrung in universitärer Lehre am Lernzentrum der Charité. Diese Lehrerfahrung verbinden wir mit prüfungsorientierter Kommunikation und aktiver Anwendung.",
    },
    about: {
      eyebrow: "UNTERRICHTSQUALITÄT",
      title: "Die Qualität des Unterrichts beginnt bei den Lehrkräften.",
      text: "Die medizinischen Programme von Libelle verbinden Erfahrung aus Medizinstudium, akademischer Arbeit und Lehre mit Sprachtraining. Im Team finden sich Erfahrungen aus der Charité Berlin, einer Promotionsarbeit im Bereich Neurowissenschaften, universitärer Lehre und Projekten zur medizinischen Kommunikation. Unser Ziel ist nicht das Auswendiglernen von Prüfungsformeln, sondern anwendbare berufliche Kommunikation.",
    },
  },

  en: {
    cards: [
      ["MEDICAL EDUCATION", "Experience at Charité Berlin"],
      ["ACADEMIC WORK", "Doctoral research in neuroscience"],
      ["TEACHING EXPERIENCE", "University-level teaching at the Charité learning center"],
      ["EDUCATION PROJECT", "Co-founding team of a language course for medical professionals"],
    ],
    exam: {
      eyebrow: "OUR TEACHING TEAM",
      title: "A team that understands the medical context.",
      text: "Our Medical German courses are taught by educators who know medical education and the academic environment in Germany from first-hand experience. Our team's background includes medical studies at Charité Berlin, university-level teaching and projects focused on medical communication. This helps us connect language training with clinical communication and exam-relevant application rather than treating grammar in isolation.",
    },
    fsp: {
      eyebrow: "MEDICAL EXPERIENCE",
      title: "We do not treat medical communication as a language exercise alone.",
      text: "A medical background is a meaningful advantage in FSP preparation. History-taking, documentation and patient presentation are trained within the wider context of medical communication rather than as isolated German sentences. Our teaching team's experience in medical education and the academic environment in Germany helps connect exam language with professional practice.",
    },
    famed: {
      eyebrow: "TEACHING EXPERIENCE",
      title: "Knowing the subject and knowing how to teach it are different skills.",
      text: "FaMed preparation requires more than medical knowledge; complex content must also be communicated in a structured and understandable way. Members of our teaching team bring university-level teaching experience from the Charité learning environment. We combine this teaching experience with exam-focused communication and active practice.",
    },
    about: {
      eyebrow: "TEACHING QUALITY",
      title: "Strong teaching starts with the people who teach.",
      text: "Libelle's medical programs bring together experience in medical education, academic work and teaching with focused language training. Our team's background includes medical studies at Charité Berlin, doctoral research in neuroscience, university-level teaching and educational projects focused on medical communication. Our goal is not simply to teach exam phrases, but to develop language that can be used in professional medical settings.",
    },
  },
} as const;

export default function FacultyTrustSection({
  lang,
  variant,
}: {
  lang: Lang;
  variant: Variant;
}) {
  const section = copy[lang][variant];
  const cards = copy[lang].cards;

  return (
    <section className="bg-[#f7f5f9]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-xs font-bold tracking-[.18em] text-[#17666a]">
              {section.eyebrow}
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              {section.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
              {section.text}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map(([label, text]) => (
              <div
                key={label}
                className="rounded-[1.8rem] border border-black/5 bg-white p-6"
              >
                <div className="text-[10px] font-bold tracking-[.15em] text-[#17666a]">
                  {label}
                </div>
                <div className="mt-3 text-lg font-semibold leading-7">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
