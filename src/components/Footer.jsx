export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-display text-lg text-paper tracking-wide">
            Reel<span className="text-marquee">ist</span>
          </p>
          <p className="text-sm mt-1">© 2026 Reelist.</p>
        </div>
        <div className="flex gap-5 text-sm font-display uppercase tracking-widest">
          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noreferrer"
            className="hover:text-marquee transition-colors"
          >
            TVMaze API
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-marquee transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
