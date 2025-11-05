import { Library, ArrowRight } from 'lucide-react';

const topics = [
  {
    title: 'Pantheon of the North',
    description:
      'The seven cold gods and the covenants they demand from their followers.',
    tag: 'Lore',
  },
  {
    title: 'Cartography of the Shards',
    description:
      'A living atlas of the island continents scattered across the Shattered Sea.',
    tag: 'World',
  },
  {
    title: 'Orders of the Prism',
    description:
      'Guilds who work the light itself: weavers, binders, and the forbidden refractionists.',
    tag: 'Factions',
  },
  {
    title: 'Common Flora & Fauna',
    description:
      'From lantern eels to aurora pines—field notes of a traveling naturalist.',
    tag: 'Bestiary',
  },
];

export default function WikiPreview() {
  return (
    <section id="wiki" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
          <Library className="h-6 w-6 text-indigo-600" />
          World Wiki
        </h2>
        <a href="#" className="text-sm font-medium text-indigo-700 hover:text-indigo-900">
          Browse all articles
        </a>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {topics.map((t) => (
          <a
            key={t.title}
            href={`#wiki-${t.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                  {t.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">{t.description}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
