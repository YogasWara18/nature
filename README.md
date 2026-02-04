🌿 Home Design & Interior Nature
A Modern Interior Design Discovery Platform

Website ini adalah platform katalog interior yang menggabungkan estetika desain hunian dengan elemen alam (Biophilic Design). Dibangun dengan Next.js 15+ untuk performa maksimal dan SEO yang optimal.

🚀 Fitur Utama
App Router Architecture: Menggunakan struktur folder app/ untuk routing yang lebih cepat dan efisien.

Optimized Fonts: Menggunakan next/font untuk memuat font Geist secara lokal tanpa beban CLS (Cumulative Layout Shift).

Responsive Nature Gallery: Galeri foto interior bertema alam yang responsif dan cepat.

Server-Side Rendering (SSR): Memastikan konten desain cepat terindeks oleh mesin pencari.

🛠️ Tech Stack
Framework: Next.js (App Router)

Language: TypeScript

Styling: (Contoh: Tailwind CSS / CSS Modules)

Deployment: Vercel

🏃 Memulai Pengembangan
Pertama, instal dependensi terlebih dahulu:

Bash
npm install
# atau
yarn install
Kemudian, jalankan server pengembangan:

Bash
npm run dev
# atau
yarn dev
Buka http://localhost:3000 di browser Anda untuk melihat hasilnya. Anda bisa mulai mengubah desain dengan mengedit file app/page.tsx.

📁 Struktur Proyek
Plaintext
├── app/                 # Next.js App Router (Pages, Layouts, Components)
│   ├── favicon.ico      # Icon aplikasi
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Halaman utama (Home)
├── public/              # File statis (Gambar interior, logo)
├── next.config.mjs      # Konfigurasi Next.js
└── tailwind.config.ts   # Konfigurasi styling (jika digunakan)
🌐 Deployment
Cara termudah untuk mempublikasikan website Home Design ini adalah menggunakan Vercel:

Push kode Anda ke GitHub.

Impor repositori ke Vercel.

Klik Deploy.

Next.js akan secara otomatis melakukan optimasi gambar dan aset lainnya saat proses build.

📝 Catatan Tambahan
Proyek ini dikembangkan dengan fokus pada User Experience (UX) yang menenangkan, sesuai dengan tema Interior Nature. Pastikan setiap aset gambar yang diunggah ke folder public/ telah dikompresi untuk menjaga kecepatan pemuatan halaman.
