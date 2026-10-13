import React from 'react';

export const FloatingLeaf = ({ className = '', style = {} }) => (
  <svg
    viewBox="0 0 32 32"
    className={`absolute pointer-events-none select-none text-emerald-800/20 ${className}`}
    style={style}
    width="18"
    height="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2 C23 7 28 15 24 23 C18 28 9 26 3 19 C2 11 8 4 16 2 Z"
      fill="currentColor"
    />
    <path
      d="M16 4 C17 12 19 19 22 22"
      stroke="#ffffff"
      strokeWidth="1.2"
      strokeOpacity="0.4"
      fill="none"
    />
  </svg>
);

export default function ForestBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Daun melayang lembut di latar belakang */}
      <FloatingLeaf className="leaf-float-1 top-10 left-[18%]" />
      <FloatingLeaf className="leaf-float-2 top-16 right-[20%]" />
      <FloatingLeaf className="leaf-float-3 top-28 left-[50%]" />

      {/* ========================================================
          KANOPY ATAS KIRI & KANAN (Framing sudut atas di desktop)
          ======================================================== */}
      <div className="hidden lg:block absolute -top-10 -left-6 tree-sway-slow opacity-80">
        <svg width="130" height="200" viewBox="0 0 130 200" fill="none">
          <rect x="58" y="150" width="8" height="50" rx="3" fill="#4a3627" />
          <path d="M62 20 L104 85 Q62 76 20 85 Z" fill="#2d5738" />
          <path d="M62 65 L112 130 Q62 120 12 130 Z" fill="#234a2e" />
          <path d="M62 110 L122 175 Q62 165 2 175 Z" fill="#1b3c24" />
        </svg>
      </div>

      <div className="hidden lg:block absolute -top-10 -right-6 tree-sway-right opacity-80">
        <svg width="130" height="200" viewBox="0 0 130 200" fill="none">
          <rect x="58" y="150" width="7" height="50" rx="3" fill="#443224" />
          <path d="M62 15 L88 65 Q62 58 36 65 Z" fill="#254e32" />
          <path d="M62 50 L98 105 Q62 98 26 105 Z" fill="#1e4429" />
          <path d="M62 90 L108 150 Q62 142 16 150 Z" fill="#14321d" />
        </svg>
      </div>

      {/* ========================================================
          POHON SISI KIRI (Berdiri utuh & berpijak di dasar)
          ======================================================== */}
      <div className="absolute left-0 bottom-0 pointer-events-none flex items-end -translate-x-12 sm:translate-x-0 z-0">
        <svg
          className="w-40 sm:w-56 md:w-72 h-auto max-h-[46vh]"
          viewBox="0 0 280 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pohon Cemara Latar Belakang */}
          <g className="tree-sway-left opacity-75">
            <rect x="56" y="240" width="8" height="120" fill="#3a2a1d" />
            <path d="M60 80 L95 150 Q60 143 25 150 Z" fill="#1a3b23" />
            <path d="M60 135 L105 205 Q60 198 15 205 Z" fill="#16341e" />
            <path d="M60 190 L115 265 Q60 256 5 265 Z" fill="#122c19" />
          </g>

          {/* Pohon Pinus Utama */}
          <g className="tree-sway-right opacity-95">
            <rect x="125" y="230" width="10" height="130" fill="#4d3726" />
            <path d="M130 50 L175 120 Q130 112 85 120 Z" fill="#285233" />
            <path d="M130 100 L185 175 Q130 166 75 175 Z" fill="#22482c" />
            <path d="M130 155 L195 235 Q130 224 65 235 Z" fill="#1c3d24" />
            <path d="M130 210 L205 295 Q130 282 55 295 Z" fill="#16331e" />
          </g>

          {/* Pohon Daun Bulat (Oak) Utuh */}
          <g className="tree-sway-slow opacity-85">
            <rect x="195" y="245" width="10" height="115" fill="#58402c" />
            <circle cx="200" cy="180" r="48" fill="#325f3c" />
            <circle cx="172" cy="190" r="30" fill="#2b5334" />
            <circle cx="228" cy="190" r="30" fill="#2b5334" />
            <circle cx="200" cy="150" r="34" fill="#3c7047" />
          </g>

          {/* Semak Belukar Utuh di Bawah */}
          <g opacity="0.95">
            <ellipse cx="230" cy="340" rx="38" ry="20" fill="#43774e" />
            <circle cx="210" cy="330" r="16" fill="#396843" />
            <circle cx="250" cy="330" r="16" fill="#396843" />
          </g>
        </svg>
      </div>

      {/* ========================================================
          POHON SISI KANAN (Berdiri utuh & berpijak di dasar)
          ======================================================== */}
      <div className="absolute right-0 bottom-0 pointer-events-none flex items-end translate-x-12 sm:translate-x-0 z-0">
        <svg
          className="w-40 sm:w-56 md:w-72 h-auto max-h-[46vh]"
          viewBox="0 0 280 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pohon Cemara Latar Belakang */}
          <g className="tree-sway-right opacity-75">
            <rect x="216" y="240" width="8" height="120" fill="#3a2a1d" />
            <path d="M220 80 L255 150 Q220 143 185 150 Z" fill="#1a3b23" />
            <path d="M220 135 L265 205 Q220 198 175 205 Z" fill="#16341e" />
            <path d="M220 190 L275 265 Q220 256 165 265 Z" fill="#122c19" />
          </g>

          {/* Pohon Pinus Utama */}
          <g className="tree-sway-left opacity-95">
            <rect x="145" y="230" width="10" height="130" fill="#4d3726" />
            <path d="M150 45 L195 115 Q150 107 105 115 Z" fill="#285233" />
            <path d="M150 95 L205 170 Q150 161 95 170 Z" fill="#22482c" />
            <path d="M150 150 L215 230 Q150 219 85 230 Z" fill="#1c3d24" />
            <path d="M150 205 L225 290 Q150 277 75 290 Z" fill="#16331e" />
          </g>

          {/* Pohon Daun Bulat Utuh */}
          <g className="tree-sway-slow opacity-85">
            <rect x="75" y="245" width="10" height="115" fill="#58402c" />
            <circle cx="80" cy="180" r="48" fill="#325f3c" />
            <circle cx="52" cy="190" r="30" fill="#2b5334" />
            <circle cx="108" cy="190" r="30" fill="#2b5334" />
            <circle cx="80" cy="150" r="34" fill="#3c7047" />
          </g>

          {/* Semak Belukar Utuh di Bawah */}
          <g opacity="0.95">
            <ellipse cx="50" cy="340" rx="38" ry="20" fill="#43774e" />
            <circle cx="30" cy="330" r="16" fill="#396843" />
            <circle cx="70" cy="330" r="16" fill="#396843" />
          </g>
        </svg>
      </div>

      {/* ========================================================
          GARIS HUTAN DASAR (FOREST HORIZON / TREE-LINE)
          - Desain utuh, bersih, tidak ada pohon terpotong
          - Bagian tengah lapang agar GIF terlihat menyatu
          ======================================================== */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-0">
        <svg
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Kontur bukit siluet latar lembut */}
          <path
            d="M0 90 L0 65 Q180 50 360 62 Q540 75 720 60 Q900 48 1080 62 L1200 68 L1200 90 Z"
            fill="#e2ece4"
            opacity="0.75"
          />

          {/* Pohon-pohon utuh di sisi kiri horizon */}
          <g opacity="0.9" className="tree-sway-left">
            {/* Pohon 1 */}
            <rect x="120" y="52" width="4" height="38" fill="#4a3627" />
            <path d="M122 25 L136 56 Q122 52 108 56 Z" fill="#254d31" />
            <path d="M122 12 L132 34 Q122 31 112 34 Z" fill="#2e5d3c" />
            {/* Semak kecil */}
            <circle cx="150" cy="78" r="12" fill="#386b46" />
            {/* Pohon bulat 2 */}
            <rect x="180" y="56" width="4" height="34" fill="#523d2e" />
            <circle cx="182" cy="46" r="16" fill="#2d5b3a" />
            <circle cx="182" cy="36" r="12" fill="#386c47" />
          </g>

          {/* Kelompok pohon mid-kiri */}
          <g opacity="0.85" className="tree-sway-slow hidden sm:block">
            <rect x="290" y="55" width="4" height="35" fill="#443223" />
            <path d="M292 30 L304 60 Q292 56 280 60 Z" fill="#264e30" />
            <path d="M292 18 L300 38 Q292 35 284 38 Z" fill="#31603d" />
            <circle cx="320" cy="78" r="10" fill="#3e6f4a" />
          </g>

          {/* Area tengah dibiarkan bersih & lapang sebagai panggung GIF */}

          {/* Kelompok pohon mid-kanan */}
          <g opacity="0.85" className="tree-sway-slow hidden sm:block">
            <circle cx="880" cy="78" r="10" fill="#3e6f4a" />
            <rect x="910" y="55" width="4" height="35" fill="#443223" />
            <path d="M912 30 L924 60 Q912 56 900 60 Z" fill="#264e30" />
            <path d="M912 18 L920 38 Q912 35 904 38 Z" fill="#31603d" />
          </g>

          {/* Pohon-pohon utuh di sisi kanan horizon */}
          <g opacity="0.9" className="tree-sway-right">
            {/* Pohon bulat 3 */}
            <rect x="1020" y="56" width="4" height="34" fill="#523d2e" />
            <circle cx="1022" cy="46" r="16" fill="#2d5b3a" />
            <circle cx="1022" cy="36" r="12" fill="#386c47" />
            {/* Semak kecil */}
            <circle cx="1050" cy="78" r="12" fill="#386b46" />
            {/* Pohon 4 */}
            <rect x="1080" y="52" width="4" height="38" fill="#4a3627" />
            <path d="M1082 25 L1096 56 Q1082 52 1068 56 Z" fill="#254d31" />
            <path d="M1082 12 L1092 34 Q1082 31 1072 34 Z" fill="#2e5d3c" />
          </g>

          {/* Garis tanah dasar lembut berpijak ke dasar */}
          <path
            d="M0 90 L0 82 Q300 78 600 82 Q900 78 1200 82 L1200 90 Z"
            fill="#d8e7dc"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
}
