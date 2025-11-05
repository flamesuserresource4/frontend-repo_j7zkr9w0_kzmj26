import { ArrowRight, Globe, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              New: Arc II now available
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              The Chronicles of the Shattered Realm
            </h1>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Dive into an ever‑growing saga of kingdoms, wanderers, and forgotten gods. Read the latest chapters and explore the living world wiki packed with lore, maps, and timelines.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#latest"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800"
              >
                <BookOpen className="h-4 w-4" /> Read Chapters
              </a>
              <a
                href="#wiki"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                <Globe className="h-4 w-4" /> Explore the Wiki <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-pink-100 border border-neutral-200 shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
