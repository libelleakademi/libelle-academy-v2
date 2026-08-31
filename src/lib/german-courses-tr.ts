export const germanCourses = {
  a1: {
    level: "A1",
    title: "Almanca A1",
    eyebrow: "ALMANYA YOLCULUĞUNUZUN BAŞLANGICI",
    tagline: "İlk adım: anlamak, cevap vermek ve kendi cümlelerinizi kurmak.",
    description:
      "Almancayı sıfırdan, yapılandırılmış şekilde öğrenmek ve günlük yaşam, iş hayatı ve sonraki seviyeler için güçlü bir temel oluşturmak isteyenler için.",
    duration: "8 hafta",
    price: "165 €",
    forWhom:
      "Hiç Almanca bilmeyen veya çok az bilgisi olan, özellikle Almanya'da uzun vadeli yaşamak ya da çalışmak isteyenler için.",
    outcomes: [
      "Kendinizi tanıtmak ve basit kişisel bilgiler paylaşmak",
      "Tipik günlük yaşam durumlarında iletişim kurmak",
      "Kısa ve basit bilgileri anlayıp yanıt vermek",
      "A2'ye geçiş için sağlam bir temel oluşturmak",
    ],
    included: [
      "8 hafta strukturierte Progression",
      "Ezber kurallar yerine günlük yaşam odaklı iletişim",
      "Kelime, gramer ve konuşmayı bütünsel şekilde geliştirme",
      "Net sonraki adım: A2 veya A1–B2 öğrenme yolu",
    ],
    nextLevel: "A2",
    source: "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
  },
  a2: {
    level: "A2",
    title: "Almanca A2",
    eyebrow: "TEMELDEN DAHA AKICI İLETİŞİME",
    tagline: "Sadece anlamak değil; giderek daha fazla kendiniz yanıt vermek.",
    description:
      "A1 temeline sahip, günlük durumlarda daha rahat iletişim kurmak, aktif kelime dağarcığını genişletmek ve daha uzun konuşmalara hazırlanmak isteyenler için.",
    duration: "8 hafta",
    price: "165 €",
    forWhom:
      "A1 seviyesini tamamlayan veya benzer temel bilgiye sahip olup iletişimini güçlendirmek isteyenler için.",
    outcomes: [
      "Günlük yaşam, randevular, iş ve kişisel konular hakkında daha detaylı konuşmak",
      "Sık kullanılan soruları anlayıp daha hızlı yanıtlamak",
      "Basit ve bağlantılı ifadeler kurmak",
      "B1 için dil temelini güçlendirmek",
    ],
    included: [
      "A1 üzerinde 8 haftalık yapılandırılmış yapı",
      "Daha fazla aktif iletişim ve cümle kurma güveni",
      "Grameri gerçek durumlarla bağlantılı öğrenme",
      "Net sonraki adım: B1 veya A1–B2 öğrenme yolu",
    ],
    nextLevel: "B1",
    source: "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
  },
  b1: {
    level: "B1",
    title: "Almanca B1",
    eyebrow: "DAHA BAĞIMSIZ İLETİŞİM",
    tagline: "Cümlelerden gerçek konuşmalara.",
    description:
      "Almancayı yalnızca çalışmak değil, günlük yaşamda ve iş ortamında giderek daha bağımsız kullanmak isteyenler için.",
    duration: "12 hafta",
    price: "250 €",
    forWhom:
      "A2 seviyesinde olup daha uzun ifadeleri anlamak, düşüncelerini daha düzenli ifade etmek ve B2'ye hazırlanmak isteyenler için.",
    outcomes: [
      "Deneyimleri, planları ve fikirleri bağlantılı şekilde ifade etmek",
      "Günlük ve birçok profesyonel ortamda daha aktif konuşmak",
      "Daha uzun metin ve ifadeleri daha iyi anlamak",
      "B2 için sağlam bir dil temeli oluşturmak",
    ],
    included: [
      "Hedefinize uygun yapılandırılmış öğrenme ve sınav hazırlığı.",
      "Bağlantılı konuşmaya daha fazla odaklanma",
      "Gramer, kelime ve ifadeyi bütünsel geliştirme",
      "Doğrudan B2'ye devam imkânı",
    ],
    nextLevel: "B2",
    source: "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
  },
  b2: {
    level: "B2",
    title: "Almanca B2",
    eyebrow: "DAHA GÜVENLİ. DAHA GELİŞMİŞ. PROFESYONEL HAYATA DAHA HAZIR.",
    tagline: "Almancayı sürekli kelime aramak zorunda kalmadan kullanın.",
    description:
      "Daha karmaşık içerikleri anlamak, düşüncelerini daha detaylı ifade etmek ve Almancasını eğitim, iş veya medikal Almanca için geliştirmek isteyen ileri seviye öğrenciler için.",
    duration: "12 hafta",
    price: "399 €",
    forWhom:
      "B1 seviyesinde olup dil güvenini ciddi şekilde geliştirmek ve sonrasında örneğin medikal Almanca programlarına geçmek isteyenler için.",
    outcomes: [
      "Daha karmaşık konuşma ve içerikleri daha rahat takip etmek",
      "Fikirleri, gerekçeleri ve bağlantıları daha detaylı ifade etmek",
      "Profesyonel ortamda daha özgüvenli iletişim kurmak",
      "Medikal Almanca ve sonraki uzmanlaşmalar için güçlü temel oluşturmak",
    ],
    included: [
      "12 haftalık odaklı B2 yapısı",
      "Sadece kural tekrarı yerine ifade güveni",
      "Daha ileri iletişime pratik odaklı geçiş",
      "Libelle medikal programlarına devam imkânı",
    ],
    nextLevel: "Medikal Almanca",
    source: "Almanca seviyenize uygun yapılandırılmış öğrenme adımı.",
  },
} as const;

export type GermanLevel = keyof typeof germanCourses;
