/**
 * ASAF — site içerik kaynağı.
 *
 * KURAL: Buradaki metinler firmanın *yetkinlik alanlarını* ve *çalışma
 * biçimini* anlatır. Doğrulanmamış sayısal iddia (tamamlanan proje sayısı,
 * kuruluş yılı, ekip büyüklüğü), müşteri adı, referans veya belge iddiası
 * İÇERMEZ. Bu tür bilgiler müşteriden geldiğinde business.ts'e yazılır.
 *
 * `scopePending: true` olan listeler, kapsamı müşteri onayı bekleyen
 * bölümlerdir; sayfa bunları görünür bir "onay bekliyor" şeridiyle sunar.
 */

export interface NavItem {
  label: string;
  path: string;
  description: string;
}

export const nav: NavItem[] = [
  { label: "Hakkımızda", path: "hakkimizda/", description: "Kim olduğumuz ve nasıl çalıştığımız" },
  { label: "İnşaat", path: "insaat/", description: "Konut, villa ve yapım hizmetleri" },
  { label: "Otomotiv", path: "otomotiv/", description: "Otomotiv tarafındaki faaliyet alanı" },
  { label: "Süreç", path: "surec/", description: "Fikirden anahtar teslime altı adım" },
  { label: "Projeler", path: "projeler/", description: "Sahadan kareler ve konsept çalışmalar" },
  { label: "İletişim", path: "iletisim/", description: "Bize ulaşın" },
];

/* ------------------------------------------------------------------ */
/* Marka sütunları                                                     */
/* ------------------------------------------------------------------ */

export interface Pillar {
  index: string;
  title: string;
  text: string;
}

export const pillars: Pillar[] = [
  {
    index: "01",
    title: "Tek çatı, iki disiplin",
    text: "İnşaat ve otomotiv aynı şirket kültürü altında yürütülür. Yapı tarafındaki planlama disiplini ile otomotiv tarafındaki hassasiyet birbirini besler.",
  },
  {
    index: "02",
    title: "Zemininden çatısına",
    text: "Temel, kaba yapı, cephe ve ince işler tek bir sorumluluk zinciri içinde ilerler. Her aşamanın nerede başlayıp nerede bittiği baştan bellidir.",
  },
  {
    index: "03",
    title: "Sahada görünür iş",
    text: "İlerleme, sözle değil sahadan gelen kayıtlarla anlatılır. Beton dökümünden cephe kaplamasına kadar her aşama belgelenir.",
  },
  {
    index: "04",
    title: "Uzun ömürlü karar",
    text: "Detaylar teslim gününe göre değil, yapının onuncu yılına göre seçilir. Malzeme ve çözüm tercihleri bu ölçüte göre yapılır.",
  },
];

/* ------------------------------------------------------------------ */
/* Hizmetler                                                           */
/* ------------------------------------------------------------------ */

export interface Service {
  index: string;
  title: string;
  text: string;
  points: string[];
}

export const constructionServices: Service[] = [
  {
    index: "01",
    title: "Villa ve müstakil konut",
    text: "Arsa değerlendirmesinden anahtar teslimine kadar müstakil yapı üretimi. Yerleşim, yönlenme ve manzara ilişkisi tasarımın ilk adımında kurulur.",
    points: ["Vaziyet ve kütle çalışması", "Kaba yapı ve betonarme", "Cephe ve ince iş", "Peyzaj ile bütünleşik teslim"],
  },
  {
    index: "02",
    title: "Betonarme ve kaba yapı",
    text: "Temel, kolon, perde ve döşeme imalatları; donatı yerleşimi, kalıp düzeni ve döküm planı saha koşullarına göre kurgulanır.",
    points: ["Temel ve radye uygulaması", "Kalıp ve donatı", "Beton döküm planlaması", "Kot ve aks kontrolü"],
  },
  {
    index: "03",
    title: "Cephe ve dış kabuk",
    text: "Yapının hava, ısı ve zamanla ilişkisini kuran katman. Kaplama, yalıtım ve su yönetimi tek bir detay dili içinde çözülür.",
    points: ["Isı ve su yalıtımı", "Kaplama uygulaması", "Balkon ve teras detayları", "Doğrama entegrasyonu"],
  },
  {
    index: "04",
    title: "İnce iş ve iç mekân",
    text: "Yüzeylerin, ışığın ve donanımın bir araya geldiği aşama. Islak hacimler, zemin geçişleri ve tesisat uçları burada kesinleşir.",
    points: ["Zemin ve duvar kaplaması", "Islak hacim uygulaması", "Elektrik ve mekanik uçlar", "Aydınlatma yerleşimi"],
  },
  {
    index: "05",
    title: "Tadilat ve yenileme",
    text: "Mevcut yapıda mekân kurgusunun, tesisatın veya cephenin yenilenmesi. İşe, yapının bugünkü durumunun tespitiyle başlanır.",
    points: ["Mevcut durum tespiti", "Mekân yeniden kurgusu", "Tesisat yenileme", "Yüzey yenileme"],
  },
  {
    index: "06",
    title: "Şantiye yönetimi",
    text: "İş programı, tedarik sırası, ekip koordinasyonu ve iş güvenliği uygulamalarının tek elden yürütülmesi.",
    points: ["İş programı ve termin", "Tedarik koordinasyonu", "Saha kalite kontrolü", "İş güvenliği uygulaması"],
  },
];

/**
 * Otomotiv kapsamı: firma unvanında "Otomotiv" geçiyor ve kaynak hesapta
 * otomotiv içerikli paylaşımlar var. Ancak sunulan hizmetlerin listesi
 * kaynakta AÇIKÇA YAZMIYOR. Aşağıdaki başlıklar, müşteri onayına sunulmak
 * üzere hazırlanmış tasarım yer tutucularıdır.
 */
export const automotiveScopePending = true;

export const automotiveServices: Service[] = [
  {
    index: "01",
    title: "Araç tedarik ve danışmanlık",
    text: "İhtiyaca uygun araç seçimi, karşılaştırma ve tedarik sürecinin yürütülmesi.",
    points: ["İhtiyaç analizi", "Model ve donanım karşılaştırması", "Tedarik takibi", "Teslim öncesi kontrol"],
  },
  {
    index: "02",
    title: "Filo çözümleri",
    text: "Şantiye ve kurumsal kullanım için araç filosunun planlanması ve yönetilmesi.",
    points: ["Filo planlama", "Kullanım takibi", "Periyodik bakım düzeni", "Maliyet raporlaması"],
  },
  {
    index: "03",
    title: "Elektrikli araç geçişi",
    text: "Elektrikli araca geçiş sürecinin, şarj altyapısı ihtiyacıyla birlikte değerlendirilmesi.",
    points: ["Kullanım profili analizi", "Menzil ve şarj planı", "Şarj noktası altyapısı", "Geçiş takvimi"],
  },
  {
    index: "04",
    title: "Şarj altyapısı uygulaması",
    text: "İnşaat tarafıyla en doğrudan birleşen alan: yapıya şarj altyapısının projelendirilerek entegre edilmesi.",
    points: ["Elektrik altyapısı projelendirme", "Kablolama ve pano", "Ünite montajı", "Devreye alma"],
  },
];

/* ------------------------------------------------------------------ */
/* Çalışma süreci                                                      */
/* ------------------------------------------------------------------ */

export interface Step {
  index: string;
  title: string;
  text: string;
  outputs: string[];
}

export const process: Step[] = [
  {
    index: "01",
    title: "Tanışma ve ihtiyaç",
    text: "Ne yapmak istediğinizi, arsanın ya da mevcut yapının durumunu ve bütçe çerçevesini birlikte netleştiriyoruz. Bu görüşmenin çıktısı, üzerinde konuşulabilir somut bir çerçevedir.",
    outputs: ["İhtiyaç çerçevesi", "Ön bütçe aralığı", "Zaman beklentisi"],
  },
  {
    index: "02",
    title: "Yerinde inceleme",
    text: "Arsa veya yapı yerinde görülür; kot, yönlenme, ulaşım, zemin ve komşu yapı ilişkileri kaydedilir. Kâğıt üzerindeki her karar buradan beslenir.",
    outputs: ["Saha tespit notu", "Fotoğraf kaydı", "Kısıt listesi"],
  },
  {
    index: "03",
    title: "Tasarım ve planlama",
    text: "Vaziyet planı, kütle ve mekân kurgusu oluşturulur; imalat kalemleri ve iş programı bu tasarımın üzerine oturtulur.",
    outputs: ["Vaziyet ve kat planı", "İmalat kalem listesi", "İş programı taslağı"],
  },
  {
    index: "04",
    title: "Sözleşme ve teyit",
    text: "Kapsam, malzeme sınıfı, ödeme planı ve termin yazılı hâle getirilir. Sürpriz kalem çıkmaması için sınırlar burada çizilir.",
    outputs: ["Kapsam tanımı", "Malzeme sınıfı", "Ödeme ve termin planı"],
  },
  {
    index: "05",
    title: "Uygulama",
    text: "Kaba yapıdan ince işe kadar imalat yürütülür. Her aşama kayıt altına alınır ve ilerleme düzenli olarak paylaşılır.",
    outputs: ["Aşama fotoğrafları", "İlerleme raporu", "Kalite kontrol"],
  },
  {
    index: "06",
    title: "Teslim ve sonrası",
    text: "Eksik listesi birlikte gezilerek çıkarılır, kapatılır ve yapı teslim edilir. Teslim, ilişkinin sonu değil kullanım döneminin başlangıcıdır.",
    outputs: ["Eksik listesi", "Anahtar teslim", "Kullanım dönemi desteği"],
  },
];

/* ------------------------------------------------------------------ */
/* Değerler ve çalışma ilkeleri                                        */
/* ------------------------------------------------------------------ */

export interface Value {
  title: string;
  text: string;
}

export const values: Value[] = [
  {
    title: "Söz verilen kapsam",
    text: "Sözleşmede yazan iş yapılır. Kapsam değişikliği gerekiyorsa uygulanmadan önce konuşulur.",
  },
  {
    title: "Görünür ilerleme",
    text: "Şantiyeye her gün gelemeyecek olanlar için ilerleme fotoğraf ve raporla aktarılır.",
  },
  {
    title: "İş güvenliği",
    text: "Sahada koruyucu ekipman kullanımı ve düzen, işin hızından önce gelen bir standarttır.",
  },
  {
    title: "Malzemede dürüstlük",
    text: "Hangi malzemenin hangi sınıfta kullanıldığı yazılıdır; muadil değişiklik habersiz yapılmaz.",
  },
];

/* ------------------------------------------------------------------ */
/* Sıkça sorulan sorular                                               */
/* ------------------------------------------------------------------ */

export interface Faq {
  q: string;
  a: string;
}

export const faq: Faq[] = [
  {
    q: "Süreç nasıl başlıyor?",
    a: "Bir görüşmeyle. İhtiyacınızı, arsanın veya yapının durumunu ve bütçe çerçevesini konuşuyoruz. Ardından yeri yerinde görüyor, ancak bundan sonra plan ve teklif hazırlıyoruz.",
  },
  {
    q: "Yalnızca uygulama yapıyor musunuz, tasarım da veriyor musunuz?",
    a: "İkisi de mümkün. Elinizde hazır proje varsa uygulamayı üstleniyoruz; yoksa vaziyet planı ve mekân kurgusundan başlayarak süreci baştan yürütüyoruz.",
  },
  {
    q: "İnşaat ve otomotiv birlikte nasıl anlam kazanıyor?",
    a: "En somut kesişim şarj altyapısı: bir yapının elektrik altyapısı planlanırken elektrikli araç şarjının da düşünülmesi, sonradan yapılan eklemelere göre çok daha temiz bir sonuç veriyor.",
  },
  {
    q: "İşin ilerleyişini nasıl takip edeceğim?",
    a: "Aşama fotoğrafları ve ilerleme bilgisi düzenli olarak paylaşılıyor. Şantiyeyi yerinde görmek isterseniz ziyaret için uygun zaman planlanıyor.",
  },
  {
    q: "Teslimden sonra ne oluyor?",
    a: "Teslimden önce eksik listesi birlikte çıkarılıp kapatılıyor. Teslim sonrasında kullanım döneminde ortaya çıkan konular için iletişim açık kalıyor.",
  },
  {
    q: "Hangi bölgelerde çalışıyorsunuz?",
    a: "Çalışma bölgesi bilgisi web sitesine henüz işlenmedi. Doğrudan bize ulaşırsanız projenizin konumuna göre net bir yanıt veriyoruz.",
  },
];

/* ------------------------------------------------------------------ */
/* Ana sayfa hero sahneleri                                            */
/* ------------------------------------------------------------------ */

export interface Scene {
  id: string;
  kicker: string;
  title: string;
  titleAccent: string;
  text: string;
  cta: { label: string; path: string };
  visual: "architecture" | "automotive" | "detail";
}

export const scenes: Scene[] = [
  {
    id: "insaat",
    kicker: "İnşaat",
    title: "Siz hayal edin,",
    titleAccent: "biz gerçekleştirelim",
    text: "Temelden anahtar teslimine kadar tek sorumluluk zinciri. Villa ve müstakil konut üretiminde planlama, uygulama ve teslim aynı ekipte.",
    cta: { label: "İnşaat hizmetleri", path: "insaat/" },
    visual: "architecture",
  },
  {
    id: "otomotiv",
    kicker: "Otomotiv",
    title: "Yapının içinde",
    titleAccent: "hareket de var",
    text: "Otomotiv tarafı, yapı ile aynı masada planlanıyor. Şarj altyapısından filo düzenine kadar hareket ihtiyacı tasarımın parçası.",
    cta: { label: "Otomotiv tarafı", path: "otomotiv/" },
    visual: "automotive",
  },
  {
    id: "detay",
    kicker: "Detay",
    title: "Fark,",
    titleAccent: "detayda kalıcı",
    text: "Bir yapının kalitesi ilk gün değil, onuncu yılında belli olur. Malzeme ve detay tercihlerini bu ölçüte göre yapıyoruz.",
    cta: { label: "Çalışma sürecimiz", path: "surec/" },
    visual: "detail",
  },
];
