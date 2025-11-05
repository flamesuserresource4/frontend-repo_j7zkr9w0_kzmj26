import { BookOpen, ChevronRight } from 'lucide-react';

const sampleChapters = [
  {
    number: 1,
    title: 'Dawn Over the Shattered Sea',
    summary:
      'On the day the aurora touched the water, the tides carried more than foam to the harbor of Eryth.',
    length: '12 min read',
    date: 'Oct 15, 2025',
  },
  {
    number: 2,
    title: 'The Archivist of Dust',
    summary:
      'In the catacombs beneath the City of Glass, an old secret wakes with a borrowed heartbeat.',
    length: '10 min read',
    date: 'Oct 22, 2025',
  },
  {
    number: 3,
    title: 'Embers in a Winter Sky',
    summary:
      'A messenger arrives with ash-stained hands and a map that refuses to stay the same.',
    length: '14 min read',
    date: 'Oct 29, 2025',
  },
];

export default function ChapterList() {
  return (
    <section id="chapters" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          Latest Chapters
        </h2>
        <a href="#" className="text-sm font-medium text-indigo-700 hover:text-indigo-900">
          View all
        </a>
      </div>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {sampleChapters.map((ch) => (
          <a
            key={ch.number}
            href={`#chapter-${ch.number}`}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-mono text-slate-500">Chapter {ch.number}</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{ch.title}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">{ch.summary}</p>
                <div className="mt-3 text-xs text-slate-500">{ch.length} • {ch.date}</div>
              </div>
              <div className="mt-1">
                <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
