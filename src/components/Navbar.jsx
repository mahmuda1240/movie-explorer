import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-ink text-paper border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-wide">
            Reel<span className="text-marquee">ist</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6 font-display text-sm uppercase tracking-widest">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors hover:text-marquee ${isActive ? 'text-marquee' : 'text-paper/80'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `rounded-sm px-4 py-2 border transition-colors ${
                isActive
                  ? 'bg-marquee text-ink border-marquee'
                  : 'border-marquee/60 text-marquee hover:bg-marquee hover:text-ink'
              }`
            }
          >
            Browse
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
