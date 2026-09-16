# GODZ Cafe & Restaurant — QR Menü

Tek sayfalık, mobil uyumlu bir QR menü sitesi. Video kapak ekranı, Instagram /
Google Maps / WiFi / WhatsApp butonları ve kategorilere ayrılmış tam menüyü
içerir. Menü içeriği isteğe bağlı olarak bir Google Sheets dosyasından canlı
olarak okunabilir.

## İçindekiler

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Sitenin tamamı (yapı + tasarım + davranış) |
| `config.js` | İşletmeye özel ayarlar (isim, sosyal medya, WiFi, Google Sheets linki) |
| `godz-logo.png` | Kapak ekranındaki logo (şeffaf arka plan) |
| `godz-hero.mp4` | Kapak ekranındaki tanıtım videosu |
| `GODZ_Menu_GoogleSheets.xlsx` | Menüyü düzenlemek için hazır tablo (bu klasörde değil, sohbette ayrıca gönderildi) |

Bu dört dosya (`index.html`, `config.js`, `godz-logo.png`, `godz-hero.mp4`)
**aynı klasörde** olmalı — hiçbiri diğerine göre taşınamaz.

## Yayına Alma

### Netlify (en hızlı yol)

1. [app.netlify.com/drop](https://app.netlify.com/drop) adresine gidin.
2. Bu klasörü (4 dosyanın tamamını) tarayıcıya sürükleyip bırakın.
3. Netlify size birkaç saniye içinde bir `.netlify.app` linki verir — QR kodunuzu bu linke yönlendirin.
4. Daha sonra menüyü güncellemek isterseniz (logo/video değişikliği gibi), aynı klasörü tekrar sürükleyip bırakmanız yeterli; menü metni Google Sheets üzerinden zaten otomatik güncellenir (aşağıya bakın).

Kalıcı bir proje olarak bağlamak isterseniz Netlify'da "Add new site > Import
an existing project" ile bu dosyaları içeren bir GitHub reposuna da
bağlayabilirsiniz — GitHub adımı aşağıda.

### GitHub Pages

1. GitHub'da yeni bir repo oluşturun (örn. `godz-qr-menu`).
2. Bu 4 dosyayı repoya yükleyin (sürükle-bırak veya `git push`).
3. Repo **Settings > Pages** bölümünden Source olarak `main` dalını ve `/ (root)` klasörünü seçip kaydedin.
4. GitHub size `https://<kullanıcı-adı>.github.io/godz-qr-menu/` şeklinde bir link verecek — QR kodunuzu bu linke yönlendirin.

```bash
# Terminalden yükleme örneği
git init
git add index.html config.js godz-logo.png godz-hero.mp4
git commit -m "GODZ QR menü"
git branch -M main
git remote add origin https://github.com/<kullanici-adiniz>/godz-qr-menu.git
git push -u origin main
```

## İşletme Bilgilerini Değiştirmek

`index.html` dosyasına dokunmadan, sadece **`config.js`** içindeki değerleri
düzenleyin: işletme adı, slogan, Instagram, Google Maps arama metni,
WhatsApp numarası/mesajı, WiFi bilgisi. Dosyanın içinde her satırın ne işe
yaradığı Türkçe açıklanmıştır.

Bu şablonu başka bir işletmeye satarken de genelde tek değişmesi gereken
şeyler: `config.js`, `godz-logo.png` ve `godz-hero.mp4`. `index.html`'in
kendisi değişmeden kalabilir.

## Menüyü Google Sheets ile Yönetmek (kod bilmeden düzenleme)

Sohbette ayrıca gönderilen **`GODZ_Menu_GoogleSheets.xlsx`** dosyası, menüdeki
81 ürünü ve her ürünün kategorisini, açıklamasını ve fiyatını içerir. İşletme
sahibi bu tabloyu Google Sheets'te düzenleyerek siteyi kod bilmeden
güncelleyebilir.

**Kurulum (tek seferlik):**

1. `GODZ_Menu_GoogleSheets.xlsx` dosyasını Google Drive'a yükleyin.
2. Dosyaya sağ tıklayıp **Uygulamayla aç > Google E-Tablolar** seçin — artık düzenlenebilir bir Google Sheets kopyanız var.
3. Üst menüden **Dosya > Paylaş > Web'de Yayınla**.
4. Açılan pencerede sekme olarak **Menü**'yü, biçim olarak **Virgülle ayrılmış değerler (.csv)**'i seçin ve **Yayınla**'ya basın.
5. Size verilen linki kopyalayın (`https://docs.google.com/spreadsheets/d/e/.../pub?output=csv` şeklinde olacaktır).
6. `config.js` dosyasını açın, en alttaki `sheetCsvUrl: ""` satırını bulun ve tırnakların arasına bu linki yapıştırın:
   ```js
   sheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/XXXXXXXX/pub?output=csv"
   ```
7. Değişikliği kaydedip siteyi yeniden yayınlayın (Netlify'a klasörü tekrar sürükleyin, veya GitHub'a `git push` yapın).

**Kurulumdan sonra:** İşletme sahibi artık sadece Google Sheets dosyasındaki
"Menü" sekmesini düzenler (ürün ekler/siler, fiyat değiştirir, `Görünür`
sütununa `HAYIR` yazarak bir ürünü geçici olarak menüden kaldırır) — site
birkaç dakika içinde otomatik güncellenir. Kod dosyalarına dokunmaya veya
tekrar yayına almaya gerek yoktur.

Tablodaki sütunların ne işe yaradığı `GODZ_Menu_GoogleSheets.xlsx` içindeki
**"Nasıl Kullanılır"** sekmesinde detaylıca anlatılmıştır.

**Not:** `sheetCsvUrl` boş bırakılırsa (varsayılan), site `index.html`
içine gömülü olan menüyü gösterir — yani Google Sheets kurulumu
yapılmadan da site tam çalışır durumdadır. Sheets bağlantısı kurulamazsa
veya geçici olarak erişilemezse site otomatik olarak bu dahili menüye
geri döner; hiçbir zaman boş görünmez.

## Teknik Notlar

- Tamamen statik dosyalardır; sunucu tarafı kod veya veritabanı gerekmez.
- Video, sayfa açılır açılmaz sessiz ve otomatik oynar (mobil tarayıcı
  kurallarına uymak için); ziyaretçi sağ üstteki simgeden sesi açabilir.
- Google Sheets bağlantısı sadece **okuma** amaçlıdır; ziyaretçiler tabloyu
  değiştiremez, sadece işletme sahibi düzenler.
