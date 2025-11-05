import { Heart, Coffee, Mail, Gem } from 'lucide-react';

export default function DonationSection() {
  return (
    <section id="donate" className="relative bg-gradient-to-b from-[#16060b] to-[#120509] py-20 text-amber-100">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-[#1b0a0f]/70 px-4 py-2 text-amber-200">
            <Heart className="h-4 w-4 text-rose-300" />
            <span>Your patronage sustains our preservation work</span>
          </div>
          <h2 className="font-serif text-3xl text-amber-50 md:text-4xl">Become a Benefactor</h2>
          <p className="mt-3 text-amber-200/85">
            Donations fund restoration grants, research, and free community workshops. Choose a method that suits you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a
            href="https://paypal.me/"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-xl border border-amber-400/30 bg-[#1b0a0f]/70 p-6 transition-colors hover:bg-[#200a12]"
          >
            <div className="mb-3 inline-flex rounded-full bg-amber-500/10 p-2">
              <Gem className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="font-serif text-xl text-amber-50">One‑time Gift</h3>
            <p className="mt-2 text-amber-200/80">Support a project with a single contribution via PayPal.</p>
            <span className="mt-4 inline-block text-sm text-yellow-400">paypal.me →</span>
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 ring-1 ring-amber-400/40 transition-opacity group-hover:opacity-100"></div>
          </a>

          <a
            href="https://www.patreon.com/"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-xl border border-amber-400/30 bg-[#1b0a0f]/70 p-6 transition-colors hover:bg-[#200a12]"
          >
            <div className="mb-3 inline-flex rounded-full bg-amber-500/10 p-2">
              <Heart className="h-6 w-6 text-rose-300" />
            </div>
            <h3 className="font-serif text-xl text-amber-50">Monthly Patron</h3>
            <p className="mt-2 text-amber-200/80">Join our circle with recurring support and receive private updates.</p>
            <span className="mt-4 inline-block text-sm text-yellow-400">patreon.com →</span>
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 ring-1 ring-amber-400/40 transition-opacity group-hover:opacity-100"></div>
          </a>

          <a
            href="https://buymeacoffee.com/"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-xl border border-amber-400/30 bg-[#1b0a0f]/70 p-6 transition-colors hover:bg-[#200a12]"
          >
            <div className="mb-3 inline-flex rounded-full bg-amber-500/10 p-2">
              <Coffee className="h-6 w-6 text-yellow-300" />
            </div>
            <h3 className="font-serif text-xl text-amber-50">Buy Us a Coffee</h3>
            <p className="mt-2 text-amber-200/80">A small gesture that fuels our late‑night conservation sessions.</p>
            <span className="mt-4 inline-block text-sm text-yellow-400">buymeacoffee.com →</span>
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 ring-1 ring-amber-400/40 transition-opacity group-hover:opacity-100"></div>
          </a>
        </div>

        <div className="mt-8 rounded-xl border border-amber-400/30 bg-[#1b0a0f]/60 p-6 text-center">
          <p className="text-amber-200/85">
            Prefer a different method or in‑kind donation? Contact us and we’ll arrange details.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-400/60 px-5 py-2 text-amber-200 hover:bg-amber-400/10"
          >
            <Mail className="h-4 w-4" />
            hello@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
