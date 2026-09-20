import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-ink text-paper overflow-hidden flex-1 h-[80vh] flex items-center">
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-0 top-0 h-full w-24 sprocket-edge opacity-20"
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-0 top-0 h-full w-3 bg-marquee/40"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28 md:pr-32">
        <h1 className="font-display text-5xl sm:text-7xl leading-[0.95] mt-4 max-w-xl">
          Find the show worth staying up for.
        </h1>
        <p className="mt-6 max-w-md text-paper/75 text-base sm:text-lg">
          Explore and discover your favorite movies from around the world.
        </p>
        <Link
          to="/movies"
          className="mt-9 inline-flex items-center gap-3 bg-marquee text-ink font-display uppercase tracking-widest text-sm px-7 py-3.5 rounded-sm hover:bg-marquee-dim transition-colors"
        >
          Explore now
        </Link>
      </div>
    </section>
  );
}
