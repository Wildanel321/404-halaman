import { useState } from 'react';

/*
 * Path file asset 404.gif
 * Lokasi: public/assets/404.gif
 */
const GIF_SRC = '/assets/404.gif';

export default function NotFoundAnimation() {
  const [gifFailed, setGifFailed] = useState(false);

  return (
    <div className="mt-8 sm:mt-11 md:mt-14 flex items-center justify-center w-full">
      {gifFailed ? (
        /* Placeholder jika GIF belum dimasukkan atau gagal dimuat */
        <div className="flex h-[180px] w-[280px] sm:h-[220px] sm:w-[360px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#b7e4c7] bg-[#f6fbf8] px-4 text-center">
          <svg
            viewBox="0 0 120 160"
            className="h-9 w-auto text-[#95d5b2]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M60 4 L84 42 L36 42 Z" />
            <path d="M60 26 L96 78 L24 78 Z" />
            <path d="M60 52 L108 118 L12 118 Z" />
            <rect x="53" y="114" width="14" height="30" rx="2" />
          </svg>
          <p className="text-xs leading-relaxed text-[#7a917f]">
            GIF 404 kamu akan muncul di sini.
            <br />
            Letakkan file di{' '}
            <span className="font-mono font-medium text-[#2d6a4f]">public/assets/404.gif</span>
          </p>
        </div>
      ) : (
        /* Container GIF: Lebih besar dan diposisikan lebih ke bawah */
        <div className="flex w-[290px] sm:w-[380px] md:w-[440px] lg:w-[480px] max-h-[230px] sm:max-h-[290px] md:max-h-[330px] items-center justify-center">
          <img
            src={GIF_SRC}
            alt="404 animation"
            className="w-full h-auto max-h-[230px] sm:max-h-[290px] md:max-h-[330px] object-contain rounded-xl select-none"
            onError={() => setGifFailed(true)}
          />
        </div>
      )}
    </div>
  );
}
