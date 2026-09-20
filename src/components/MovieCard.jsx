import { getYear, formatRating } from '../api/tvmaze'

export default function MovieCard({ show, onSeeDetails }) {
  const poster = show.image?.medium
  const year = getYear(show.premiered)
  const rating = formatRating(show.rating)

  return (
    <article className="group flex flex-col bg-white border border-ink/10 rounded-sm overflow-hidden hover:border-marquee/60 transition-colors">
      <div className="relative aspect-[2/3] bg-ink-soft">
        {poster ? (
          <img
            src={poster}
            alt={`Poster for ${show.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-paper/40 font-display text-sm px-4 text-center">
            No artwork available
          </div>
        )}
      </div>

      <div
        aria-hidden="true"
        className="h-2 sprocket-edge"
        style={{ backgroundColor: 'var(--color-ink)' }}
      />

      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-display text-lg leading-tight line-clamp-2" title={show.name}>
          {show.name}
        </h3>
        <p className="mt-1.5 text-sm text-slate-dim">
          <span aria-hidden="true">⭐</span> {rating} &nbsp;•&nbsp; <span aria-hidden="true">📅</span> {year}
        </p>
        <button
          onClick={() => onSeeDetails(show)}
          className="mt-4 font-display uppercase tracking-widest text-xs px-4 py-2.5 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors self-start"
        >
          See details
        </button>
      </div>
    </article>
  )
}
