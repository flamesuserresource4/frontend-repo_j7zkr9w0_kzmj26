import { Feather, Palette, Shield } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center">
    <h2 className="font-serif text-3xl text-amber-50 md:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-amber-200/80">{subtitle}</p>
    )}
  </div>
);

export default function AboutVictorian() {
  const items = [
    {
      icon: <Feather className="h-6 w-6 text-yellow-400" />,
      title: 'Curated Scholarship',
      text: 'From textiles to typography, we document the practices that shaped everyday elegance.'
    },
    {
      icon: <Palette className="h-6 w-6 text-yellow-400" />,
      title: 'Restorative Craft',
      text: 'We restore heirlooms with period-accurate methods, materials, and finishes.'
    },
    {
      icon: <Shield className="h-6 w-6 text-yellow-400" />,
      title: 'Cultural Preservation',
      text: 'Workshops and open archives keep traditions alive for new generations.'
    }
  ];

  return (
    <section id="about" className="relative bg-[#16060b] py-20 text-amber-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),rgba(0,0,0,0))]"></div>
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Our Victorian Ethos"
          subtitle="Three pillars guide our work: knowledge, craft, and stewardship."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-amber-400/30 bg-[#1b0a0f]/70 p-6 transition-colors hover:bg-[#200a12]/80"
            >
              <div className="mb-3 inline-flex rounded-full bg-amber-500/10 p-2">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-amber-50">{item.title}</h3>
              <p className="mt-2 text-amber-200/80">{item.text}</p>
              <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 ring-1 ring-amber-400/40 transition-opacity group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
