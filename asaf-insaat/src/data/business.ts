// ASAF Otomotiv ve İnşaat Ltd. Şti.
// Kaynak: research/business-profile.json (tek kaynak: Instagram @asaf.insaat).
// null olan alanlar KAYNAKTA YOK demektir — uydurulmaz. Bilgi geldiğinde
// buraya yazılır, site koşullu render sayesinde otomatik canlanır.

export interface Business {
  name: string;
  legalName: string;
  tagline: string;
  taglineSecondary: string;
  contact: {
    phone: string | null;
    email: string | null;
    address: string | null;
    city: string | null;
  };
  social: { instagram: string | null };
  workingHours: string | null;
  foundingYear: number | null;
}

export const business: Business = {
  name: "ASAF",
  legalName: "ASAF Otomotiv ve İnşaat Ltd. Şti.",
  // Her iki slogan da kaynaktaki Instagram biyografisinden birebir alındı.
  tagline: "Siz hayal edin, biz gerçekleştirelim",
  taglineSecondary: "Asaf inşaat güvencesiyle siz de geleceğe yatırım yapın",
  contact: {
    phone: null,   // kaynakta yok
    email: null,   // kaynakta yok
    address: null, // kaynakta yok
    city: null,    // kaynakta yok
  },
  social: {
    instagram: "https://www.instagram.com/asaf.insaat/",
  },
  workingHours: null, // kaynakta yok
  foundingYear: null, // kaynakta yok
};

/** Telefon/e-posta/adresten en az biri girildiyse iletişim bloğu gösterilir. */
export const hasDirectContact =
  business.contact.phone !== null ||
  business.contact.email !== null ||
  business.contact.address !== null;

export interface Project {
  slug: string;
  title: string;
  /** Yalnızca görselde GÖRÜNEN şey yazılır. Proje adı/konum/metrekare kaynakta yok. */
  caption: string;
  date: string;
  image: string;
  webp: string | null;
  width: number;
  height: number;
  alt: string;
  division: "insaat" | "otomotiv";
}

export const projects: Project[] = [
  {
    slug: "deniz-kiyisi-villa",
    title: "Deniz kıyısı villa projesi",
    caption: "Kaba inşaat aşaması — beton pompası ile temel dökümü, arka planda tamamlanmış villa sıraları ve açık deniz.",
    date: "2020-09",
    image: "villa-santiye-deniz.jpg",
    webp: "villa-santiye-deniz.webp",
    width: 1440,
    height: 1080,
    alt: "Deniz kıyısındaki villa şantiyesinde beton pompası ve demir donatılı temel",
    division: "insaat",
  },
  {
    slug: "villa-vaziyet-plani",
    title: "Villa cephe görünümü",
    caption: "Balkonları ve cephe kaplaması görülen iki katlı villa; ön planda inşaat malzemeleri.",
    date: "2020-01",
    image: "villa-vaziyet-plani.jpg",
    webp: "villa-vaziyet-plani.webp",
    width: 1440,
    height: 1440,
    alt: "Önünde inşaat malzemeleri bulunan iki katlı villanın cephe görünümü",
    division: "insaat",
  },

];

/**
 * Kullanılmayan kaynak görseller ve gerekçeleri:
 * - elektrikli-arac-konsept.jpg → firmanın ürünü olduğuna dair kaynakta ifade
 *   yok; sektörel/konsept paylaşımı. Firmanın işi gibi sunmak yanıltıcı olur.
 * - asaf-is-guvenligi-yelekleri.jpg → marka kanıtı olarak değerli ama proje
 *   değil; yalnızca kurumsal anlatı bölümünde kullanılabilir.
 */
