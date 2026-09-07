# Künefedeyiz — Yeniden Tasarlanmış Web Sitesi

Kaynak: <https://kunefedeyiz.com> (WordPress + Elementor)
Yeniden inşa: Astro statik site, 5 sayfa.

## Sayfalar

- `/` — Ana sayfa
- `/lezzetler/` — 11 ürün (kaynakta fiyat yayımlanmadığı için fiyat gösterilmez)
- `/hikayemiz/` — Biz kimiz, Erdal Şayir, künefe bilgisi
- `/galeri/` — 12 mekân fotoğrafı + 14 video
- `/iletisim/` — Telefon, WhatsApp, adres, harita, paket servis bölgeleri

## Geliştirme

```
npm ci
npm run dev      # geliştirme sunucusu
npm run build    # dist/ üretir
npm run preview  # üretim çıktısını sunar
```

## Önemli notlar

- Tüm iç bağlantı ve varlık yolları `import.meta.env.BASE_URL` üzerinden
  kurulur; site GitHub Pages'te alt dizinde yayınlanabilir. Yol ayarı
  `astro.config.mjs` içindeki `site` + `base` değerleridir.
- İçeriğin tamamı kaynak siteden birebir alınmıştır. Kaynakta bulunmayan
  hiçbir bilgi (fiyat, çalışma saati, sosyal medya, müşteri yorumu)
  üretilmemiştir — ayrıntı: `../research/gaps.md`.
- Ürün adı ↔ görsel eşleşmesi kaynak sitedeki `/urunler/` sayfasıyla aynıdır.
