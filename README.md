# 🌲 Forest 404 - Page Not Found

Halaman 404 Not Found bertema hutan (*forest-inspired*), minimalis, modern, dan bersih dengan latar belakang **pure white** (`#ffffff`).

---

## ✨ Fitur & Karakteristik Desain

- **Pure White Background**: Tampilan minimalis, bersih, dan modern tanpa gradien berlebihan atau background gelap.
- **Dekorasi Hutan Organik**:
  - Beragam pohon SVG handcrafted (pohon pinus berjenjang, pohon daun bulat/oak, pohon cemara ramping, semak belukar, dan daun melayang).
  - Animasi goyangan angin lembut (*subtle wind sway*) pada kanopi pohon.
  - Pohon mengelilingi tepi layar dan dasar halaman tanpa menutupi konten utama.
- **Hierarki Tipografi Jelas**:
  - Angka **404** besar di tengah sebagai fokus utama.
  - Teks **Page Not Found** dan deskripsi bertema hutan yang ramah.
- **Tombol "Back to Home"**:
  - Tombol rounded pill modern mengarah ke `/`.
  - Efek hover halus dengan elevasi dan bayangan lembut.
- **Penempatan GIF Khusus**:
  - Terletak **tepat di bawah tombol dan teks**, di posisi tengah.
  - Menggunakan `object-fit: contain` sehingga animasi GIF tidak terpotong.
- **Fully Responsive**:
  - Tampilan proporsional di Desktop, Tablet, dan Mobile.
  - Bebas dari horizontal scrollbar.

---

## 📁 Struktur Direktori

```text
project2/
├── public/
│   └── assets/
│       └── 404.gif        <-- Letakkan file GIF 404 kamu di sini
│
├── src/
│   ├── components/
│   │   ├── ForestBackground.jsx  <-- Elemen pohon & dekorasi hutan
│   │   ├── ErrorContent.jsx      <-- Konten 404, judul, deskripsi, tombol
│   │   └── NotFoundAnimation.jsx <-- Wrapper GIF dengan fallback
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Menjalankan Project

1. **Install dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Akses di browser melalui `http://localhost:5173`.

3. **Build untuk production**:
   ```bash
   npm run build
   ```

---

## 🖼️ Mengganti Asset GIF

Jika ingin memperbarui GIF, cukup gantikan file di:
```text
public/assets/404.gif
```
Ukuran akan otomatis menyesuaikan secara proporsional tanpa terpotong (*object-fit: contain*).
