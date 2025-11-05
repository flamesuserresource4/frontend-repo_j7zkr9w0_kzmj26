export default function Footer() {
  return (
    <footer className="mt-12 border-t border-neutral-200 bg-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Chronicles. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Privacy</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Terms</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
