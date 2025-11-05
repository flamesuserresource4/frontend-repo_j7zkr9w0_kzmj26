import { Search, BookOpen, Globe, Heart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = document.querySelector("#search-results");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900">
          <BookOpen className="h-5 w-5 text-indigo-600" />
          <span className="tracking-tight">Chronicles</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#latest" className="text-neutral-700 hover:text-neutral-900 transition-colors">Chapters</a>
          <a href="#wiki" className="text-neutral-700 hover:text-neutral-900 transition-colors">Wiki</a>
          <a href="#donate" className="inline-flex items-center gap-1 text-neutral-700 hover:text-neutral-900 transition-colors">
            <Heart className="h-4 w-4 text-rose-500" /> Donate
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chapters & lore"
              className="pl-9 pr-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm w-48 sm:w-64 bg-white/80"
            />
          </div>
          <button
            type="submit"
            className="hidden sm:inline-flex items-center rounded-md bg-neutral-900 text-white px-3 py-2 text-sm font-medium hover:bg-neutral-800"
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}
