/**
 * Tüm veriler https://kunefedeyiz.com arşivinden (2026-09-07) birebir alınmıştır.
 * Kaynakta bulunmayan hiçbir bilgi burada üretilmemiştir.
 * Ayrıntı: research/business-profile.json ve research/gaps.md
 */

export const business = {
  name: 'KÜNEFEDEYİZ',
  legalNote: 'Kahverengi Group Kuruluşudur',
  tagline: 'İstanbul’da En İyi Künefe Salonu',
  phoneGsm: '0530 446 31 36',
  phoneGsmHref: 'tel:+905304463136',
  phoneLandline: '0212 424 63 63',
  phoneLandlineHref: 'tel:+902124246363',
  whatsapp: 'https://wa.me/905304463136',
  email: 'info@kunefedeyiz.com',
  addressShort: 'Cumhuriyet Mah. Atatürk Bulvarı, Bizim Çarşı No:1/7',
  addressCity: '34400 Beylikdüzü / İstanbul',
  addressFull:
    'Cumhuriyet Mahallesi, Atatürk Bulvarı, Bizim Çarşı No:1/7, 34400 Beylikdüzü/İstanbul',
  geo: { lat: 41.0099417, lng: 28.6416326 },
  maps: 'https://www.google.com/maps/search/?api=1&query=41.0099417,28.6416326',
  mapsEmbed:
    'https://www.google.com/maps?q=41.0099417,28.6416326&hl=tr&z=16&output=embed',
  youtube: 'https://www.youtube.com/@kunefedeyiz',
  /** Kaynakta yalnızca sipariş/telefon saati olarak geçiyor; gün bazlı tablo yok. */
  orderHours: '10:00 – 02:00',
  serviceAreas: ['Beylikdüzü', 'Büyükçekmece', 'Esenyurt', 'Avcılar'],
} as const;

/**
 * 11 ürün. Ad ↔ görsel eşleşmesi kaynak sitedeki /urunler/ sayfasından
 * birebir korunmuştur. Fiyat ve ürün açıklaması kaynakta yayımlanmamıştır,
 * bu yüzden hiçbiri gösterilmez.
 */
export const products = [
  { name: 'SADE KÜNEFE',       image: '/images/urunler/sade-kunefe.jpg' },
  { name: 'KAYMAKLI KÜNEFE',   image: '/images/urunler/kaymakli-kunefe.jpg' },
  { name: 'MUZLU KÜNEFE',      image: '/images/urunler/muzlu-kunefe.jpg' },
  { name: 'DONDURMALI KÜNEFE', image: '/images/urunler/dondurmali-kunefe.jpg' },
  { name: 'FISTIKLI KÜNEFE',   image: '/images/urunler/fistikli-kunefe.jpg' },
  { name: 'CENNET ÇAMURU',     image: '/images/urunler/cennet-camuru.jpg' },
  { name: 'ANTEP KADAYIFI',    image: '/images/urunler/antep-kadayifi.jpg' },
  { name: 'BİLLURİYE TATLISI', image: '/images/urunler/billuriye-tatlisi.jpg' },
  { name: 'DÖRDÜ BİR ARADA',   image: '/images/urunler/dordu-bir-arada.jpg' },
  { name: 'FISTIKZADE',        image: '/images/urunler/fistikzade.jpg' },
  { name: 'HASIR KADAYIF',     image: '/images/urunler/hasir-kadayif.jpg' },
] as const;

/** Ana sayfadaki ikon bloğundan birebir. */
export const valueProps = [
  { title: 'HİJYEN',             text: 'Temiz, hijyenik ve güvenilir üretim' },
  { title: 'KALİTE',             text: 'Daima en iyi üretme politikası' },
  { title: 'UYGUN FİYAT',        text: 'Daima doğru kalite ve uygun fiyat' },
  { title: 'GÜLERYÜZLÜ & HIZLI', text: 'Güleryüzlü ve hızlı hizmet anlayışı' },
  { title: 'PAKET SERVİS',       text: 'Hızlı ve güleryüzlü paket servis hizmeti' },
  { title: 'MEMNUNİYET',         text: 'Memnuniyet garantili hizmet' },
] as const;

/** /kunefeci/ sayfasındaki mekân özellikleri listesinden birebir. */
export const amenities = [
  'Farklı lezzetler ve özelliklerde künefe çeşitleri',
  'Künefe yanında verilen bol ikramlıklar',
  'Beylikdüzü ve çevresinde paket servis',
  'Soğuk ve sıcak içecek servisleri',
  'Hijyenik çalışma prensipleri',
  'Ücretsiz Wi-Fi hizmeti',
  'Ücretsiz otopark ve vale hizmeti',
  'Rahat, geniş, konforlu mekân',
] as const;

/** Mekân ve servis fotoğrafları. mekan-2 dükkân cephesidir. */
export const galleryPhotos = [
  { src: '/images/mekan/mekan-2.jpg',  alt: 'Künefedeyiz’in Beylikdüzü’ndeki dükkân cephesi' },
  { src: '/images/mekan/mekan-1.jpg',  alt: 'Çilekli ve fıstıklı katmerli tatlı sunumu' },
  { src: '/images/mekan/mekan-5.jpg',  alt: 'Bakır tepside servise hazır fıstıklı künefe' },
  { src: '/images/mekan/mekan-4.jpg',  alt: 'Antep fıstığı ve nar ile süslenmiş künefe tabağı' },
  { src: '/images/mekan/mekan-3.jpg',  alt: 'Künefe yanında sunulan ikramlıklar ve içecekler' },
  { src: '/images/mekan/mekan-6.jpg',  alt: 'Ahşap tabakta fıstık döşenmiş billuriye tatlısı' },
  { src: '/images/mekan/mekan-8.jpg',  alt: 'Gümüş tepside dördü bir arada tatlı tabağı' },
  { src: '/images/mekan/mekan-9.jpg',  alt: 'Ahşap tepside ikili künefe servisi' },
  { src: '/images/mekan/mekan-10.jpg', alt: 'Muzlu künefe porsiyonu' },
  { src: '/images/mekan/mekan-7.jpg',  alt: 'Çikolata ve fıstıkla sunulan tatlı tabağı' },
  { src: '/images/mekan/mekan-11.jpg', alt: 'Tepsiden alınan taze fıstıklı katmer' },
  { src: '/images/mekan/mekan-12.jpg', alt: 'Kaymaklı künefe porsiyonu' },
] as const;

/** YouTube kanalı: Künefedeyiz Beylikdüzü. Başlıklar oEmbed ile doğrulandı. */
export const videos = [
  { id: 'UK30IdL_dwU', title: 'Künefedeyiz Eşsiz Lezzetler — Erdal Şayir Hazırlanış' },
  { id: '7-oUMjusHZI', title: 'Künefedeyiz Erdal Şayir Ateş Show' },
  { id: 'gIWTvp834Ak', title: 'Neden Künefedeyiz' },
  { id: 'c34T51j-CAE', title: 'Künefedeyiz Künefe Hazırlık' },
  { id: 'xCTLoB00xkw', title: 'Künefedeyiz Eşsiz Lezzetler Hazırlanışı' },
  { id: '3wA8St5Nlhk', title: 'Harika Lezzetler — Künefedeyiz' },
  { id: 'SZ9YLheHXXo', title: 'Künefedeyiz Katmer Lezzeti' },
  { id: 'hsw7_fQh7Gg', title: 'Bol Fıstıklı Baklava — Künefedeyiz' },
  { id: 'FpgJweRgzao', title: 'Künefedeyiz Revani Tatlısı Servis' },
  { id: 'VkZBBPqta_I', title: 'Beylikdüzü’nün Uğrak Mekânı — Künefedeyiz' },
  { id: 'QR3sDnh4Jgc', title: 'Künefedeyiz Paket Servis Ekibi' },
  { id: 'dI7pAM8AtUw', title: 'Erdal Şayir — Künefedeyiz' },
  { id: 'WGTKn-p85Pc', title: 'Künefedeyiz — Açıyorum' },
  { id: 'zo-cTyvvkAs', title: 'Erdal Şayir — Kurtlar Vadisi — Künefedeyiz' },
] as const;
