import { useEffect, useRef } from 'react'
import { getYear, formatRating, stripHtml } from '../api/tvmaze'

export default function MovieModal({ show, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    dialogRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!show) return null

  const backdrop = show.image?.original || show.image?.medium
  const genres = show.genres?.join(', ') || 'Unspecified'
  const network = show.network?.name || show.webChannel?.name || 'Unknown network'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Details for ${show.name}`}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-paper rounded-sm shadow-2xl outline-none"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 h-9 w-9 flex items-center justify-center rounded-sm bg-ink/70 text-paper hover:bg-velvet transition-colors"
        >
          ✕
        </button>

        <div className="relative bg-ink-soft aspect-[16/9]">
          {backdrop ? (
            <img
              src={backdrop}
              alt={`Artwork for ${show.name}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-paper/40 font-display">
              No artwork available
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="font-display text-3xl leading-tight">{show.name}</h2>
          <p className="mt-2 text-slate-dim text-sm font-display uppercase tracking-widest">
            <span aria-hidden="true">⭐</span> Rating {formatRating(show.rating)}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span aria-hidden="true">📅</span> {getYear(show.premiered)}
          </p>

          <p className="mt-6 text-ink/85 leading-relaxed">
            {stripHtml(show.summary) || 'No overview available for this title yet.'}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm border-t border-ink/10 pt-5">
            <div>
              <dt className="font-display uppercase tracking-widest text-xs text-slate-dim">Genre</dt>
              <dd className="mt-1">{genres}</dd>
            </div>
            <div>
              <dt className="font-display uppercase tracking-widest text-xs text-slate-dim">Network</dt>
              <dd className="mt-1">{network}</dd>
            </div>
            <div>
              <dt className="font-display uppercase tracking-widest text-xs text-slate-dim">Status</dt>
              <dd className="mt-1">{show.status || 'Unknown'}</dd>
            </div>
            <div>
              <dt className="font-display uppercase tracking-widest text-xs text-slate-dim">Runtime</dt>
              <dd className="mt-1">{show.runtime ? `${show.runtime} min` : 'Unknown'}</dd>
            </div>
          </dl>

          <button
            onClick={onClose}
            className="mt-8 font-display uppercase tracking-widest text-xs px-5 py-3 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  )
}
