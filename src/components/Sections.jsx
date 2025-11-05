import { Calendar, Clock, ChevronRight, Map, ScrollText, Shield, Star, Heart } from "lucide-react";

const chapters = [
  {
    id: 1,
    title: "Chapter 18 • Ash at Dawn",
    summary:
      "As the siege lifts, a messenger arrives with a sigil not seen since the First Sundering.",
    date: "Oct 2, 2025",
    readTime: "12 min",
    tag: "Arc II",
  },
  {
    id: 2,
    title: "Chapter 17 • The Oathkeeper",
    summary:
      "On the pilgrim road, Aerin crosses paths with an exile who knows her true name.",
    date: "Sep 25, 2025",
    readTime: "10 min",
    tag: "Arc II",
  },
  {
    id: 3,
    title: "Chapter 16 • Ember and Stone",
    summary:
      "Beneath the Bastion, the old wards hum again as something wakes in the deep.",
    date: "Sep 15, 2025",
    readTime: "9 min",
    tag: "Arc II",
  },
];

const wikiTopics = [
  {
    icon: Map,
    title: "Regions & Maps",
    blurb: "Explore kingdoms, trade routes, and the shifting borders of the Realm.",
  },
  {
    icon: Shield,
    title: "Orders & Factions",
    blurb: "From the Wardens of Ash to the Gilded Choir, learn who pulls the strings.",
  },
  {
    icon: ScrollText,
    title: "Magic & Relics",
    blurb: "Sutures, sigils, and artifacts left behind by sleeping gods.",
  },
  {
    icon: Star,
    title: "Legends & Myth",
    blurb: "Tales carried by sailors and sand—some true, most dangerous.",
  },
];

export default function Sections() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Latest Chapters */}
      <section id="latest" className="py-14 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Latest Chapters</h2>
            <p className="mt-1 text-neutral-600">Fresh from the quill — new entries added weekly.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center text-sm font-medium text-indigo-700 hover:text-indigo-800">
            View all <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c) => (
            <article key={c.id} className="group relative rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full font-semibold">
                {c.tag}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-neutral-900 group-hover:text-indigo-700">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{c.summary}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{c.date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{c.readTime}</span>
              </div>
              <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900 hover:text-indigo-700">
                Read chapter <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* World Wiki Preview */}
      <section id="wiki" className="py-14 sm:py-16 border-t border-neutral-200">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">World Wiki</h2>
            <p className="mt-1 text-neutral-600">Featured lore topics to get you started.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center text-sm font-medium text-indigo-700 hover:text-indigo-800">
            Explore wiki <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wikiTopics.map((t, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-neutral-900">{t.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{t.blurb}</p>
              <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-neutral-900 hover:text-indigo-700">
                Learn more <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-14 sm:py-16 border-t border-neutral-200">
        <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-gradient-to-br from-rose-50 via-white to-amber-50">
          <div className="p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="shrink-0 rounded-xl bg-white border border-rose-100 p-3 text-rose-600">
              <Heart className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">Support the Saga</h3>
              <p className="mt-2 text-neutral-700 max-w-2xl">
                If you’re enjoying the Chronicles, consider supporting the work. Your contribution helps fund more chapters, world‑building, and illustrations.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800">Donate once</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-50">Become a patron</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
