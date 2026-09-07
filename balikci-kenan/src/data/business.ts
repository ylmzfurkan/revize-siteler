// Bu dosya, research/business-profile.json içeriğinden doldurulmuştur.
// Kaynakta olmayan alanlar null bırakılmıştır — uydurulmamıştır.
export interface BusinessProfile {
  companyName: string;
  industry: string | null;
  tagline: string | null;
  contact: {
    phone: string | null;
    email: string | null;
    address: string | null;
  };
  socialMedia: Record<string, string | null>;
  services: string[];
  products: string[];
  aboutText: string | null;
  workingHours: string | null;
  brand: {
    colors: string[];
    fontHeading: string;
    fontBody: string;
  };
}

export const business: BusinessProfile = {
  companyName: "Balıkçı Kenan",
  industry: "Balıkçı / balık satışı ve ızgara balık servisi",
  tagline: "1960'dan bugüne İstanbul'un balıkçısı",
  contact: {
    phone: "0212 880 95 02",
    email: null,
    address: "Beylikdüzü Yeşilvadi, İstanbul",
  },
  socialMedia: {
    Instagram: "https://www.instagram.com/balikciniz",
    Facebook: "https://www.facebook.com/balikcikenan",
    YouTube: "https://www.youtube.com/channel/UCTtqYpaHoCQdSaq3Js42crQ",
  },
  services: ["Balık satışı", "Izgara balık"],
  products: ["Balık Çeşitleri", "Kalamar", "Kalkan", "Lüfer", "Izgara", "Tatlılar"],
  aboutText:
    "1960'lı yıllarda Kadıköy'de başlayan serüven, artık balıkta marka olmuş Balıkçı Kenan olarak hizmete devam etmektedir. Anadolu'dan göçle gelen, Kadıköy iskelesinde yorgan ipliği ile olta yapıp balık tutmaya çalışan küçük bir çocuğun hikayesi bu aslında. Tuttuğu birkaç istavriti sonraları çok ve devamlı olacak müşterilerine satmaya başlayan Balıkçı Kenan, zamanla balık konusunda tecrübe ve kendine göre müşteri kazanmıştır. Biz biliyoruz ki; dürüst, saygılı satıcı oldukça takdir eden müşteri sayımız da gün geçtikçe daha da çoğalacak!",
  workingHours: "Haftaiçi 12:00 - 22:00, Haftasonu 12:00 - 22:00",
  brand: {
    colors: ["#0B4F6C", "#E8642C", "#1B2A2F", "#F5F7F6", "#E7DCC8"],
    fontHeading: "Fraunces",
    fontBody: "Inter",
  },
};
