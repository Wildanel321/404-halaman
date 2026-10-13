import NotFoundAnimation from './NotFoundAnimation';

export default function ErrorContent() {
  return (
    <div className="flex flex-col items-center text-center relative z-10 max-w-xl mx-auto px-4 py-2">
      {/* Angka 404 — elemen typography terbesar di halaman */}
      <p
        className="text-[clamp(5.5rem,15vw,10.5rem)] font-extrabold leading-none tracking-tight text-[#14532d] select-none"
      >
        404
      </p>

      {/* Page Not Found */}
      <h1
        className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1b4332]"
      >
        Page Not Found
      </h1>

      {/* Deskripsi singkat bertema hutan */}
      <p
        className="mt-1.5 sm:mt-2 max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-[#55695d]"
      >
        Looks like this page got lost in the woods.
        <span className="block text-xs sm:text-sm text-[#7e9286] mt-0.5">
          The trail you're looking for seems to have wandered off into the trees.
        </span>
      </p>

      {/* Button Back to Home — Sebelum GIF */}
      <div className="mt-4 sm:mt-5">
        <a
          href="/"
          className="group inline-flex items-center gap-2 rounded-full bg-[#1b4332] px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#2d6a4f] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40916c] cursor-pointer"
        >
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="M11 18l-6-6 6-6" />
          </svg>
          Back to Home
        </a>
      </div>

      {/* 404 GIF — Tepat di bagian tengah halaman, di bawah button dan text */}
      <NotFoundAnimation />
    </div>
  );
}
