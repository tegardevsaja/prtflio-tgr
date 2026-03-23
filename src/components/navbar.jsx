import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl rounded-lg transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border border-slate-200"
          : "bg-white border border-slate-100 shadow-none"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        {/* Brand */}
        <div className="text-lg font-extrabold text-slate-800">
          Tegar Kurniawan
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          <li className="cursor-pointer hover:opacity-80">Portfolio</li>
          <li className="cursor-pointer hover:opacity-80">About</li>
          <li className="cursor-pointer hover:opacity-80">Experience</li>
          <li className="cursor-pointer hover:opacity-80">Products</li>
        </ul>

        {/* Button */}
        <button className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-slate-800 md:inline-flex">
          {'Inquiry/Collab \u2197'}
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex rounded-md border border-slate-300 bg-white p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 px-4 pb-4 bg-white rounded-b-xl">
          <ul className="flex flex-col gap-4 pt-4 text-sm font-semibold text-slate-700">
            <li className="cursor-pointer hover:text-slate-900">Portfolio</li>
            <li className="cursor-pointer hover:text-slate-900">About</li>
            <li className="cursor-pointer hover:text-slate-900">Experience</li>
            <li className="cursor-pointer hover:text-slate-900">Products</li>
          </ul>

          <button className="mt-4 w-full rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-slate-800">
            {'Inquiry/Collab \u2197'}
          </button>
        </div>
      )}
    </nav>
  );
}