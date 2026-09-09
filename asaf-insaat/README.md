# ASAF Otomotiv ve İnşaat — İlk taslak

> **Not:** Bu klasör, `website-rebuild-factory` çalışma alanındaki kaynağın
> yayın kopyasıdır. Aşağıda geçen `../qa`, `../research` ve `../assets` yolları
> o çalışma alanına aittir ve bu repoda bulunmaz.
>
> Yayın adresi: https://ylmzfurkan.github.io/revize-siteler/asaf-insaat/
> Yerel önizleme kök dizinde: `SITE_BASE=/ npm run dev`

Astro tabanlı beş sayfalı responsive site. Kaynaklar ../research ve ../source/instagram içinde. Araştırma kapsamı korunur; bilinmeyen şirket bilgisi eklenmez.

## Çalıştırma

- `npm install`
- `npm run dev -- --background --host 127.0.0.1`
- `npm run build`
- `npm run astro -- dev status`

Yerel önizleme bu çalışmada http://127.0.0.1:4323/ adresindedir.

İşletme iletişim bilgisi: src/data/business.ts.
Yayın URL'si SITE_URL ve alt dizin SITE_BASE ortam değişkenleriyle verilebilir. Varsayılan kök dizindir. Taslak noindex olarak bırakılmıştır; yayın öncesi kaldırılmalı ve mutlak canonical/OG bilgileri eklenmelidir. Fontlar yerel WOFF2 olarak src/styles/fonts içinde sunulur; Türkçe Latin Extended alt kümesi ve OFL lisansları dahildir.

## Doğrulama

`../qa/browser-check.mjs`: kurulu yerel Chromium ile 7 genişlik x 5 sayfa; yatay taşma, görseller, sayfa yanıtları, tek H1, mobil menü ve dahili bağlantılar. Sonuçlar ../qa/results.json. Ekran görüntüleri ../qa/desktop-home.png ve ../qa/mobile-home.png.

Henüz dışarıya yayınlanmadı. Yayın hedefi ayrıca seçilecek.


## V2 — Sinematik görsel yenileme

- Tam ekran iki sahneli banner: yumuşak geçiş, pan/zoom, sahne seçimi ve duraklatma. Bu bir video değil, hareketli görsel sunumudur.
- Üç özgün AI konsept görseli, responsive WebP, yerel fontlar.
- Destekleyen tarayıcılarda native sayfa geçişleri; IntersectionObserver ile giriş hareketleri. Destek yoksa standart gezinme sürer.
- Reduced-motion, klavye erişimi, doğal dialog ile fotoğraf görüntüleyici.
- Gerçek Instagram arşivi, konseptlerden ayrı tutulur.
- Görsel değiştirme noktası: src/data/visuals.ts. Üretim promptları ve orijinaller ../assets/concepts/README.md içinde.
- Ek etkileşim kontrolü: ../qa/interactions-v2.mjs. Görsel animasyon tercihinin değişmesi, otomatik geçiş, CTA, lightbox, Escape ve mobil menü test edilir.

## V3 — Premium yeniden yapım (Claude / Opus 5)

Site sıfırdan yeniden kuruldu. Beş sayfa yerine yedi sayfa var; tasarım sistemi,
bileşenler ve içerik katmanı yeniden yazıldı.

### Sayfalar

`/` · `/hakkimizda/` · `/insaat/` · `/otomotiv/` · `/surec/` · `/projeler/` · `/iletisim/`

`hakkimizda` ve `surec` bu sürümde eklendi.

### Logo animasyonu

`src/components/BrandMark.astro` — logo, Y ekseninde madeni para gibi döner:
bir yüzü beyaz, diğer yüzü altın. Her iki yüz de aynı SVG'nin CSS maskesidir,
bu yüzden altın yüze kayan folyo parıltısı uygulanabiliyor. Başlık, hero,
iç sayfa başlıkları, CTA ve altbilgide farklı boyutlarda kullanılır.
`prefers-reduced-motion` açıkken dönüş durur, logo sabit altın kalır.

Parametreler: `size`, `glyph` (wordmark|mark|full), `duration`, `halo`, `still`.

### Tasarım sistemi

- `src/styles/tokens.css` — renk, akışkan tipografi, boşluk, hareket jetonları.
  Üst tipografi basamaklarının alt sınırı Türkçenin uzun kelimelerine göre
  belirlendi ("gerçekleştirelim" 320px'te kırpılmamalı).
- `src/styles/base.css` — reset, tipografi, beliriş, erişilebilirlik.
- `src/styles/ui.css` — düğme, kart, etiket, spec listesi gibi paylaşılan ilkeller.
- `.on-light` sınıfı, bölümü açık zemine çevirir (jeton değişimiyle).

### Bileşenler

`BrandMark`, `SiteHeader`, `SiteFooter`, `CinematicHero`, `PageHero`, `Figure`,
`ServiceGrid`, `ProcessTimeline`, `Faq`, `Marquee`, `CtaBand`.

### İçerik katmanı

`src/data/content.ts` — sütunlar, hizmetler, süreç adımları, değerler, SSS,
hero sahneleri. Doğrulanmamış sayısal iddia, müşteri adı veya belge iddiası
içermez. Otomotiv hizmet listesi `automotiveScopePending` ile işaretlidir ve
sayfada görünür bir "onay bekliyor" şeridiyle sunulur.

### Kullanılan tarayıcı özellikleri

Astro `ClientRouter` sayfa geçişleri, CSS mask, `color-mix()`, container
queries, `::details-content` + `interpolate-size` ile akordiyon animasyonu,
scroll-driven animation (`animation-timeline: view()`) ile dolan süreç çizgisi,
`text-wrap: balance/pretty`, native `<dialog>` lightbox. Hepsi `@supports` veya
aşamalı bozulma ile korunur.

### Bilinen tuzak

`ClientRouter`, ilk `astro:page-load` olayını sayfa betikleri çalışmadan önce
gönderiyor. Bu yüzden her betik kurulum fonksiyonunu hem doğrudan hem de olay
üzerinden çağırır. Ayrıca lightbox tıklama dinleyicisi **yakalama fazında**
bağlanır; aksi hâlde ClientRouter aynı kaynaklı görsel bağlantısını sayfa
geçişi sanıp yönlendiriyor.

### Doğrulama

`../qa/check-v3.mjs` — 7 genişlik x 7 sayfa (49 kontrol): yatay taşma, öğe
düzeyinde kırpma, bozuk görsel, tek H1, sayfa yanıtı. Ardından mobil menü,
logo dönüşü, hero sahne sekmeleri, SSS, galeri filtresi, lightbox, iletişim
formu ve sayfa geçişi sonrası yeniden bağlanma. Sonuç: `../qa/results-v3.json`.
