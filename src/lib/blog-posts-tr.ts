export type BlogPostTR = {
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

export const blogPostsTR: BlogPostTR[] = [
  {
    slug: "fsp-oder-famed",
    title: "FSP mi FaMed mi? Doktorlar için medikal dil sınavları",
    excerpt:
      "FSP ve FaMed arasındaki fark nedir ve hazırlık sürecinde gerçekten nelere odaklanmalısınız?",
    category: "MEDİKAL ALMANCA",
    image: "/images/blog-doctor-patient-communication.jpg",
    alt: "Doktor ve hasta görüşmesi",
    readingTime: "6 dk.",
    intro:
      "Almanya'da doktor olarak çalışmak isteyenlerin karşısına FSP, Fachsprachprüfung ve FaMed gibi kavramlar çıkar. Doğru hazırlık için önemli olan, kendi denklik sürecinizde hangi sınav formatının geçerli olduğunu bilmektir.",
    sections: [
      {
        title: "FSP ne anlama gelir?",
        paragraphs: [
          "FSP, Fachsprachprüfung yani mesleki dil sınavıdır. Buradaki temel amaç tıbbi bilginizi yeniden ölçmek değil, Almanca medikal iletişimi güvenli ve yapılandırılmış biçimde kullanıp kullanamadığınızı değerlendirmektir.",
          "Sınavın organizasyonu ve ayrıntıları eyalete ve yetkili kuruma göre değişebilir. Bu nedenle hazırlığın kendi sınav yolunuza uygun olması önemlidir."
        ]
      },
      {
        title: "FaMed nasıl yapılandırılır?",
        paragraphs: [
          "FaMed belirli medikal iletişim durumlarına dayanır. Bunlar doktor-hasta iletişimi, doktor-doktor iletişimi ve yazılı bir bölümü içerir.",
          "Asıl zorluk, tıbbi bilgiyi duruma göre hasta tarafından anlaşılabilecek şekilde, profesyonel medikal dille veya yazılı olarak yapılandırılmış biçimde aktarabilmektir."
        ]
      },
      {
        title: "Neden uygulama, kelime listelerinden daha önemlidir?",
        paragraphs: [
          "Medikal terimleri bilmek önemlidir. Ancak sınav sırasında bu bilgilerin konuşma baskısı altında da kullanılabilmesi gerekir.",
          "Hasta görüşmesinde anlaşılır bir dil, meslektaş görüşmesinde doğru Fachsprache, dokümantasyonda ise yapılandırılmış ve doğru yazılı iletişim gerekir."
        ]
      },
      {
        title: "Hangi hazırlık yolu sizin için daha uygun?",
        paragraphs: [
          "Kurs seçmeden önce üç noktayı netleştirin: Hangi sınava hazırlanıyorsunuz? Medikal Almancanız şu anda ne kadar güvenli? Sınava ne kadar zaman kaldı?",
          "Dil temeli hâlâ zayıfsa önce bunu güçlendirmek gerekir. İçerikler zaten oturduysa sınava yakın uygulamalar ve simülasyonlar daha önemli hale gelir."
        ]
      }
    ],
    sources: [
      "FaMed – resmi sınav süreci",
      "Anerkennung in Deutschland – doktorlar için denklik süreci"
    ]
  },

  {
    slug: "medizinisches-deutsch-b2",
    title: "Medikal Almanca: Neden yalnızca B2 seviyesi çoğu zaman yeterli değildir?",
    excerpt:
      "B2 önemli bir temeldir. Ancak medikal iletişim için ek dil becerileri ve mesleki uygulama gerekir.",
    category: "MEDİKAL ALMANCA",
    image: "/images/blog-medical-professional-germany.jpg",
    alt: "Almanya'da çalışan sağlık profesyoneli",
    readingTime: "6 dk.",
    intro:
      "B2 seviyesi, Almanya'daki medikal kariyer yolunda önemli bir adımdır. Ancak birçok doktor hasta görüşmelerinde veya sınav hazırlığında genel Almanca ile medikal iletişimin aynı şey olmadığını fark eder.",
    sections: [
      {
        title: "B2 seviyesi ne ifade eder?",
        paragraphs: [
          "B2 seviyesinde daha karmaşık içerikleri anlayabilir, nispeten spontane iletişim kurabilir ve düşüncelerinizi açık biçimde ifade edebilirsiniz.",
          "Bu beceriler günlük ve profesyonel yaşam için güçlü bir temel oluşturur. Ancak medikal görüşmelerin zaman baskısı altında otomatik olarak güvenli ilerleyeceği anlamına gelmez."
        ]
      },
      {
        title: "Medikal iletişim farklı dil biçimleri gerektirir",
        paragraphs: [
          "Hasta görüşmesinde tıbbi bilgiler anlaşılır şekilde açıklanmalıdır. Bir meslektaşla konuşurken ise daha kesin ve profesyonel Fachsprache kullanılır.",
          "Buna ek olarak bilgilerin yazılı şekilde dokümante edilmesi gerekir. Asıl beceri bu farklı iletişim biçimleri arasında güvenli geçiş yapabilmektir."
        ]
      },
      {
        title: "Neden medikal Fachsprache ayrıca çalışılır?",
        paragraphs: [
          "Genel gramer ve kelime bilgisi temel olmaya devam eder. Medikal alanda bunlara mesleki terimler, tipik görüşme yapıları ve profesyonel ifadeler eklenir.",
          "Anamnez, hasta bilgilendirme, hasta sunumu ve dokümantasyon yalnızca anlaşılmamalı, aktif biçimde uygulanabilmelidir."
        ]
      },
      {
        title: "B2'den güvenli medikal iletişime",
        paragraphs: [
          "Amaç genel Almancayı bırakıp yalnızca medikal terimler öğrenmek değildir. İki alanın birbirine bağlanması gerekir.",
          "Düzenli konuşma pratiği, vaka çalışmaları ve gerçekçi sınav senaryoları mevcut bilgilerin daha hızlı ve güvenli kullanılmasına yardımcı olur."
        ]
      }
    ],
    sources: [
      "Anerkennung in Deutschland – doktorlar için Almanca gereklilikleri",
      "Make it in Germany – Almanya'da doktor olarak çalışmak",
      "Goethe-Institut – B2 dil seviyesi"
    ]
  },
  {
    slug: "fachsprachpruefung-arzt-patient-arzt-arzt-dokumentation",
    title: "Fachsprachprüfung Medizin: Doktor-hasta, doktor-doktor ve dokümantasyon nasıl çalışılmalı?",
    excerpt:
      "Üç farklı iletişim alanı, üç farklı beklenti ve ortak bir hedef: tıbbi bilgiyi doğru biçimde aktarmak.",
    category: "SINAV HAZIRLIĞI",
    image: "/images/blog-arzt-arzt-kommunikation.jpg",
    alt: "Doktorlar arasında medikal iletişim",
    readingTime: "7 dk.",
    intro:
      "Birçok aday medikal dil sınavı öncesinde uzun kelime listeleri çalışır. Asıl zorluk ise bilgiyi aynı anda anlayıp yapılandırarak doğru iletişim biçiminde aktarabilmektir.",
    sections: [
      {
        title: "1. Doktor-hasta: Öncelik anlaşılabilirlik",
        paragraphs: [
          "Hasta görüşmesinde amaç mümkün olduğunca fazla tıbbi terim kullanmak değildir. Hasta hangi soruların sorulduğunu ve sonraki adımların ne olduğunu anlayabilmelidir.",
          "Bu nedenle yalnızca soru listeleri değil; ek sorular, geçiş ifadeleri ve anlaşılır açıklamalar da çalışılmalıdır."
        ]
      },
      {
        title: "2. Doktor-doktor: Kesin ve yapılandırılmış anlatım",
        paragraphs: [
          "Meslektaş görüşmesinde dil biçimi değişir. Medikal terimlerin doğru kullanımı ve bilgilerin mantıklı sırayla aktarılması önem kazanır.",
          "Vakaları sesli şekilde sunmak ve sonrasında hangi bilgilerin eksik, tekrar eden veya gereksiz karmaşık olduğunu değerlendirmek faydalıdır."
        ]
      },
      {
        title: "3. Dokümantasyon: Konuşulanı yazılı dile aktarmak",
        paragraphs: [
          "Yazılı medikal iletişim yapı, doğruluk ve profesyonel ifade gerektirir.",
          "Sadece hazır örnek metinleri okumak yerine yeni vakaları kendiniz dokümante etmek, eksikleri çok daha net gösterir."
        ]
      },
      {
        title: "Üç alanı birlikte çalışın",
        paragraphs: [
          "Aynı vakayı birkaç adımda kullanmak özellikle etkilidir: önce anamnez, ardından hasta sunumu ve son olarak dokümantasyon.",
          "Böylece yalnızca kalıpları değil, farklı medikal iletişim durumları arasında geçiş yapmayı da öğrenirsiniz."
        ]
      }
    ],
    sources: [
      "FaMed – resmi sınav süreci",
      "Anerkennung in Deutschland – medikal Fachsprachprüfung bilgileri"
    ]
  },

  {
    slug: "als-arzt-in-deutschland-arbeiten-offizielle-quellen",
    title: "Almanya'da doktor olarak çalışmak: Hangi resmi kaynaklar gerçekten önemli?",
    excerpt:
      "Denklik, Approbation ve dil sınavı sürecinde hangi resmi kaynakları takip etmeniz gerektiğini öğrenin.",
    category: "ALMANYA'DA ÇALIŞMA",
    image: "/images/blog-working-in-germany.jpg",
    alt: "Almanya'da doktor olarak çalışmak",
    readingTime: "6 dk.",
    intro:
      "Almanya'da doktor olarak çalışmak isteyen uluslararası mezunlar internette çok fazla bilgiyle karşılaşır. Buradaki en önemli nokta, resmi gereklilikleri kişisel deneyimlerden ve eski bilgilerden ayırabilmektir.",
    sections: [
      {
        title: "1. Anerkennung in Deutschland",
        paragraphs: [
          "Anerkennung in Deutschland, yabancı mesleki yeterliliklerin tanınması konusunda temel resmi kaynaklardan biridir.",
          "Anerkennungs-Finder üzerinden mesleğinize ve çalışmak istediğiniz bölgeye göre hangi kurumun yetkili olduğunu kontrol edebilirsiniz."
        ]
      },
      {
        title: "2. Eyaletinizdeki yetkili kurum",
        paragraphs: [
          "Doktorluk mesleği için tek bir merkezi federal başvuru kurumu yoktur. Süreç eyalete göre farklı yetkili kurumlar üzerinden ilerler.",
          "Belge listesi, başvuru formları ve güncel şartlar için doğrudan kendi yetkili kurumunuzun bilgilerini kontrol etmelisiniz."
        ]
      },
      {
        title: "3. Make it in Germany",
        paragraphs: [
          "Make it in Germany, Almanya Federal Hükümeti'nin uluslararası nitelikli çalışanlara yönelik resmi portalıdır.",
          "Çalışma, göç, denklik ve Almanya'daki mesleki yaşam hakkında genel yol haritası sunar."
        ]
      },
      {
        title: "4. Dil sınavını ayrıca doğrulayın",
        paragraphs: [
          "Medikal dil sınavı konusunda yalnızca forumlara veya sosyal medya deneyimlerine güvenmeyin.",
          "Sınav formatı ve yetkili kurum eyalete ve başvuru sürecine göre değişebileceği için güncel gereklilikleri resmi kaynaktan kontrol edin."
        ]
      },
      {
        title: "Araştırma için basit bir yöntem",
        paragraphs: [
          "Önce resmi portallardan başlayın, sonra kendi yetkili kurumunuzu belirleyin ve güncel belge ile dil şartlarını oradan kontrol edin.",
          "Forumlar ve sosyal medya sonrasında yardımcı olabilir; ancak resmi bilgilerin yerine geçmemelidir."
        ]
      }
    ],
    sources: [
      "Anerkennung in Deutschland – resmi denklik portalı",
      "Make it in Germany – Almanya Federal Hükümeti'nin resmi portalı",
      "İlgili eyaletteki yetkili denklik kurumu"
    ]
  },
  {
    slug: "deutsch-b2-was-sie-koennen-sollten",
    title: "Almanca B2: Bu seviyede gerçekten neleri yapabiliyor olmalısınız?",
    excerpt:
      "B2 yalnızca gramer kurallarını bilmek değildir. Asıl önemli olan dili bağımsız ve esnek şekilde kullanabilmektir.",
    category: "ALMANCA B2",
    image: "/images/blog-deutsch-b2-level.jpg",
    alt: "B2 seviyesinde Almanca öğrenmek",
    readingTime: "6 dk.",
    intro:
      "Birçok öğrenci B2 seviyesine gerçekten ulaşıp ulaşmadığını nasıl anlayacağını merak eder. Bir kitabı bitirmek veya bir alıştırmayı doğru yapmak tek başına yeterli değildir. B2 seviyesi en çok, dili günlük hayatta, eğitimde ve iş yaşamında ne kadar bağımsız kullanabildiğinizde kendini gösterir.",
    sections: [
      {
        title: "B2 bağımsız dil kullanımı demektir",
        paragraphs: [
          "B2 seviyesinde daha karmaşık metinlerin ana fikrini anlayabilmeli ve hem tanıdık hem de daha soyut konularda konuşmaları takip edebilmelisiniz.",
          "Aynı zamanda her cümleyi önceden kafanızda hazırlamadan, nispeten spontane şekilde kendinizi ifade edebilmeniz beklenir."
        ]
      },
      {
        title: "Konuşma: Kusursuz değil, işlevsel",
        paragraphs: [
          "B2 seviyesinde ana dili konuşan biri gibi hatasız konuşmanız beklenmez. Hatalar hâlâ olabilir.",
          "Asıl önemli olan konuşmaya aktif katılabilmeniz, sorulara cevap verebilmeniz, açıklama yapabilmeniz ve düşüncenizi anlaşılır şekilde gerekçelendirebilmenizdir."
        ]
      },
      {
        title: "Okuma ve dinleme: Sadece kelimeleri değil, anlamı yakalamak",
        paragraphs: [
          "Okurken yalnızca bildiğiniz kelimeleri seçmek değil, metnin genel bağlamını ve önemli ayrıntılarını anlayabilmek gerekir.",
          "Dinlemede de her kelimeyi anlamasanız bile konuşmanın ana akışını takip edebilmeniz önemlidir."
        ]
      },
      {
        title: "Yazma: Düşünceleri yapılandırmak",
        paragraphs: [
          "B2 seviyesinde daha uzun ve bağlantılı metinler yazabilmelisiniz. Paragraflar, fikirlerin sıralaması ve bağlaçların doğru kullanımı önem kazanır.",
          "Profesyonel hayatta buna ek olarak bilgiyi net, doğru ve amaca uygun şekilde yazabilmek gerekir."
        ]
      },
      {
        title: "Gerçek seviyenizi nasıl anlarsınız?",
        paragraphs: [
          "İyi bir ölçüt, bildiğiniz konuları yalnızca hazırlıkla mı yapabildiğiniz yoksa yeni durumlarda da dili kullanıp kullanamadığınızdır.",
          "Spontane açıklama yapabiliyor, tepki verebiliyor, soru sorabiliyor ve bilgiyi yapılandırabiliyorsanız bu, B2 seviyesine dair güçlü bir işarettir."
        ]
      }
    ],
    sources: [
      "Goethe-Institut – B2 dil seviyesi açıklaması",
      "Diller için Avrupa Ortak Başvuru Metni"
    ]
  },

  {
    slug: "leben-und-arbeiten-in-deutschland-sprache",
    title: "Almanya'da yaşamak ve çalışmak: Günlük hayatta ve işte dilin rolü",
    excerpt:
      "Almanca yalnızca sınavlar için gerekli değildir. Günlük yaşamda ve iş hayatında ne kadar bağımsız hareket edebileceğinizi de etkiler.",
    category: "ALMANYA'DA YAŞAM",
    image: "/images/blog-life-in-germany-secondary.jpg",
    alt: "Almanya'da yaşamak ve çalışmak",
    readingTime: "6 dk.",
    intro:
      "Almanya'ya taşındığınızda Almancanın ders ve sınavlardan çok daha fazlası olduğunu hızla fark edersiniz. Dil; resmi işlemlerden ev aramaya, iş hayatından doktor randevularına kadar günlük yaşamın pek çok alanında karşınıza çıkar.",
    sections: [
      {
        title: "Almanca günlük hayatta daha fazla bağımsızlık sağlar",
        paragraphs: [
          "Randevu almak, bir sözleşmeyi anlamak, resmi kurumlarda soru sormak veya telefonda bir problemi açıklamak yeni bir dilde zorlayıcı olabilir.",
          "Diliniz geliştikçe başkalarının sizin yerinize konuşmasına veya sürekli çeviri yapmasına olan ihtiyacınız azalır."
        ]
      },
      {
        title: "İş hayatında dil beklentileri değişir",
        paragraphs: [
          "Profesyonel iletişim genellikle günlük konuşmadan daha yapılandırılmış ve daha nettir. Bilgiyi anlamanız, doğru sorular sormanız ve düşüncelerinizi anlaşılır biçimde ifade etmeniz gerekir.",
          "Medikal mesleklerde buna hasta dili, mesleki dil ve yazılı dokümantasyon arasında geçiş yapabilme becerisi de eklenir."
        ]
      },
      {
        title: "Günlük Almanca ve mesleki Almanca birlikte gelişir",
        paragraphs: [
          "Genel Almanca medikal çalışanlar için de önemlidir. İş arkadaşlarıyla günlük konuşmalar, organizasyonel konular ve beklenmedik durumlar yalnızca medikal kelimelerle yönetilemez.",
          "Bu nedenle A1'den B2'ye kadar sağlam bir genel Almanca temeli, mesleki ve medikal Almancanın üzerine kurulabileceği önemli bir altyapıdır."
        ]
      },
      {
        title: "Dil gerçek kullanım ile daha kalıcı hale gelir",
        paragraphs: [
          "İlerleme yalnızca yeni kelimeler ezberlemekle oluşmaz. Dil farklı durumlarda düzenli şekilde kullanıldığında daha sağlam hale gelir.",
          "Okuma, dinleme, yazma ve konuşmayı birlikte çalışmak, bildiğiniz yapıların daha hızlı ve spontane kullanılmasını kolaylaştırır."
        ]
      },
      {
        title: "Asıl hedef sertifikanın ötesindedir",
        paragraphs: [
          "Bir sertifika eğitim, iş veya denklik süreci için gerekli olabilir. Ancak günlük hayatta asıl önemli olan o dille gerçekten neler yapabildiğinizdir.",
          "Almanca öğrenmek yalnızca bir seviyeyi tamamlamak değil, Almanya'daki hayatınızı adım adım daha bağımsız yönetebilmek anlamına gelir."
        ]
      }
    ],
    sources: [
      "Make it in Germany – Almanya'da yaşam ve çalışma",
      "Goethe-Institut – Almanca öğrenme ve dil seviyeleri",
      "Anerkennung in Deutschland – uluslararası çalışanlar için bilgiler"
    ]
  }
];

export function getBlogPostTR(slug: string) {
  return blogPostsTR.find((post) => post.slug === slug);
}
