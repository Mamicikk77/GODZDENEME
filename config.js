/*
 * GODZ Cafe & Restaurant — QR Menü Ayarları
 * ------------------------------------------
 * Bu dosyadaki değerleri değiştirerek işletme bilgilerini güncelleyebilirsiniz.
 * index.html dosyasına DOKUNMANIZA gerek yok.
 *
 * Bu şablonu başka bir işletmeye satarken de sadece bu dosyayı (ve logo/video
 * dosyalarını) değiştirmeniz yeterlidir.
 */
window.GODZ_CONFIG = {
  // Kapak ekranında görünen kısa isim ("<businessName> Menü" başlığında kullanılır)
  businessName: "GODZ",

  // Logonun "alt" metni ve iç kullanım için tam işletme adı
  displayName: "GODZ Cafe & Restaurant",

  // Logo altındaki ve menü başlığındaki slogan
  tagline: "Lezzetle, buluştuğunuz yer",

  // Instagram kullanıcı adı ("@" olmadan) veya tam link
  instagramUrl: "godz.alanya",

  // Google Maps'te "Değerlendir" butonunun arayacağı isim
  // Not: Gerçek işletme kaydınızın Google Maps linkini biliyorsanız,
  // onu buraya tam URL olarak da yazabilirsiniz.
  mapsQuery: "GODZ Cafe & Restaurant",

  // WhatsApp numarası (ülke koduyla, boşluk/parantez olmadan)
  whatsappNumber: "79651900413",

  // WhatsApp'a tıklandığında otomatik dolacak mesaj
  whatsappMessage: "Merhaba, GODZ Cafe & Restaurant menüsünden yazıyorum.",

  // WiFi kutusunda gösterilecek ağ adı ve şifre notu
  wifiSsid: "GODZ_CAFE",
  wifiPasswordNote: "Personele danışınız",

  // ---- CANLI MENÜ (Google Sheets) ----
  // Menüyü kod dosyasına dokunmadan güncelleyebilmek için bir Google Sheet'i
  // "web'de yayınla" (Publish to web) yapıp CSV linkini buraya yapıştırın.
  // Boş bırakılırsa index.html içindeki dahili (varsayılan) menü kullanılır.
  // Adım adım talimat: README.md
  sheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTo9NT4snqEI5AUIZC7Vyr65HsZ-v1aieV89VU_SSrlDa9Tednk5TZehMbvLgSL4Q/pub?gid=705480923&single=true&output=csv"
};
