import { Crown } from 'lucide-react';

export default function FooterVictorian() {
  return (
    <footer className="relative border-t border-amber-400/20 bg-[#120509] py-10 text-amber-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10">
              <Crown className="h-5 w-5 text-yellow-400" />
            </span>
            <div>
              <p className="font-serif text-amber-50">Victorian Society</p>
              <p className="text-sm text-amber-300/70">Since 1887 (spirit), revived for today</p>
            </div>
          </div>

          <p className="text-sm text-amber-300/70">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
