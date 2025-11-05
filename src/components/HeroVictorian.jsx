import { Crown, Gem, Scroll } from 'lucide-react';

const OrnateBorder = ({ children }) => {
  return (
    <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-yellow-500 via-yellow-400 to-amber-500 shadow-[0_0_0_1px_rgba(212,175,55,0.4)]">
      <div className="relative rounded-2xl bg-[#1b0a0f]/90">
        {/* corner ornaments */}
        <svg className="pointer-events-none absolute -top-1 -left-1 h-8 w-8 text-yellow-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2 10c6-4 4-6 10-8-2 6-4 4-8 10z" />
        </svg>
        <svg className="pointer-events-none absolute -top-1 -right-1 h-8 w-8 rotate-90 text-yellow-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2 10c6-4 4-6 10-8-2 6-4 4-8 10z" />
        </svg>
        <svg className="pointer-events-none absolute -bottom-1 -left-1 h-8 w-8 -rotate-90 text-yellow-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2 10c6-4 4-6 10-8-2 6-4 4-8 10z" />
        </svg>
        <svg className="pointer-events-none absolute -bottom-1 -right-1 h-8 w-8 rotate-180 text-yellow-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2 10c6-4 4-6 10-8-2 6-4 4-8 10z" />
        </svg>
        {children}
      </div>
    </div>
  );
};

export default function HeroVictorian() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2b0a18] via-[#230812] to-[#16060b] text-amber-100">
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.6))]"></div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="mb-10 flex items-center justify-center gap-3 text-yellow-400">
          <Crown className="h-6 w-6" />
          <span className="tracking-widest">VICTORIAN SOCIETY</span>
          <Gem className="h-6 w-6" />
        </div>

        <OrnateBorder>
          <div className="relative z-10 mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 px-8 py-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <h1 className="font-serif text-4xl leading-tight text-amber-50 drop-shadow md:text-5xl">
                Elegance, Ornament, and Timeless Craft
              </h1>
              <p className="mt-4 text-amber-200/90">
                Step into a world of burgundy velvets and gilded details. We curate, restore, and celebrate the artistry of the Victorian era.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#donate"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-yellow-400 to-amber-500 px-6 py-3 font-medium text-[#2b0a18] shadow hover:from-yellow-300 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                >
                  Become a Patron
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-transparent px-6 py-3 font-medium text-amber-200 hover:bg-amber-400/10"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-amber-500/30 via-yellow-400/20 to-transparent blur"></div>
                <div className="relative rounded-xl border border-amber-400/40 bg-[#120509]/70 p-6 text-center">
                  <Scroll className="mx-auto mb-4 h-10 w-10 text-yellow-400" />
                  <p className="text-sm text-amber-200/90">
                    “Beauty and refinement are acts of preservation.”
                  </p>
                  <p className="mt-2 text-xs text-amber-300/70">— The Conservator’s Creed</p>
                </div>
              </div>
            </div>
          </div>
        </OrnateBorder>
      </div>
    </section>
  );
}
