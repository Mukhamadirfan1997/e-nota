# Petunjuk Penggunaan SPBU Thermal Note

Aplikasi ini dirancang untuk memudahkan operator SPBU dalam mencetak struk BBM menggunakan printer termal 58mm, baik melalui laptop (USB/Bluetooth) maupun HP Android.

## 1. Cara Mengisi Form Website
Ikuti langkah-langkah berikut untuk menginput data dengan benar:
1.  **Pilih Jenis BBM**: Klik menu *Jenis BBM* dan pilih kategori yang sesuai (Pertalite, Pertamax, dll). Harga per liter akan terupdate secara otomatis.
2.  **Input Nominal**: Masukkan jumlah uang (dalam Rupiah) di kolom *Nominal*. Sistem akan menghitung jumlah *Liter* secara otomatis berdasarkan harga BBM saat ini.
3.  **Data Antrean**: Isi nomor **Pompa** dan nomor **Selang** tempat pengisian berlangsung.
4.  **Data Kendaraan**: Masukkan **Plat Nomor** kendaraan dan angka **Odometer** (opsional) jika diperlukan.
5.  **Setting Tanggal**: Secara default, sistem menggunakan waktu saat ini (Realtime). Jika ingin mencetak struk dengan waktu lampau, silakan isi kolom *Tanggal & Jam*.
6.  **Preview**: Selalu klik tombol **Preview** terlebih dahulu untuk memastikan data sudah benar sebelum mencetak.

---

## 2. Panduan Penggunaan di Laptop / PC

Untuk hasil cetak yang stabil di Windows, Anda perlu menginstal driver printer terlebih dahulu.

### Langkah Instalasi Driver:
1. **Download Driver**: [Klik di sini untuk mendownload Driver VSC](https://www.cnfujun.com/d/38).
2. **Instalasi**: Jalankan file `.exe` yang sudah didownload, pilih seri printer (POS-58), masukan kabel USB printer, dan ikuti petunjuk hingga selesai.
3. **Penyetingan Browser**:
   - Setelah driver terpasang, buka aplikasi ini di Chrome/Edge.
   - Klik **Preview**, lalu klik **Print Laptop**.
   - Pada jendela print yang muncul, pastikan:
     - **Destination**: Pilih nama printer Anda (misal: POS-58).
     - **Scale (Skala)**: Atur ke **100**.
     - **Margin**: Pilih **None** (Tidak ada).
     - **Headers & Footers**: Hilangkan centang.

---

## 2. Panduan Penggunaan di HP (Android)

Untuk mencetak via Bluetooth dari HP Android, kita menggunakan aplikasi **RawBT** sebagai perantara yang paling stabil.

### Langkah Penggunaan Mobile:
1. **Instal RawBT**: Cari dan instal aplikasi **RawBT** dari Google Play Store.
2. **Koneksi Bluetooth**: 
   - Hidupkan Bluetooth di HP dan printer.
   - Buka aplikasi RawBT, masuk ke menu **Settings** > **Configure Printer** > pilih **Bluetooth**.
   - Pilih nama printer Anda (biasanya RPP02N atau POS-58).
3. **Cetak dari Web**:
   - Buka aplikasi ini di Chrome HP.
   - Klik **Preview**, lalu klik **Cetak Mobile**.
   - Aplikasi RawBT akan otomatis terbuka, lalu klik ikon **Print** di dalam RawBT.

---

## 3. Tips Hemat Kertas & Cetak Jelas
- Gunakan kertas termal berkualitas agar tulisan tidak pudar.
- Jika tulisan terasa kurang hitam, Anda dapat menambah **Print Density** di pengaturan driver printer (pada Windows Printer Properties).
- Aplikasi ini sudah dioptimalkan untuk jarak baris yang rapat agar menghemat kertas.

---

## 4. Instalasi Sebagai Aplikasi (PWA)
Aplikasi ini mendukung **PWA (Progressive Web App)**, yang artinya Anda dapat menginstalnya di HP atau Laptop sehingga muncul di layar utama tanpa melalui Play Store.

### Keuntungan Instal:
- Akses lebih cepat dan lancar.
- Tampilan layar penuh tanpa bar browser.
- Tetap bisa dibuka meski koneksi internet tidak stabil.

### Cara Instal:
- **Android (Chrome)**: Klik menu titik tiga di pojok kanan atas browser, lalu pilih **"Instal aplikasi"** atau **"Tambahkan ke Layar Utama"**.
- **iPhone (Safari)**: Klik tombol **Share** (kotak dengan panah ke atas), lalu cari dan pilih **"Add to Home Screen"**.
- **Laptop (Chrome/Edge)**: Lihat di ujung kanan kolom alamat (address bar), klik ikon tanda panah/instal yang muncul di sana.

---
*Dikembangkan untuk kemudahan operasional SPBU.*
