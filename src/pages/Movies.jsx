import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'
import { fetchAllShows, searchShows } from '../api/tvmaze'

export default function Movies() {
  const [allShows, setAllShows] = useState([])
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [status, setStatus] = useState('loading')
  const [searching, setSearching] = useState(false)
  const [selectedShow, setSelectedShow] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchAllShows()
      .then((shows) => {
        if (cancelled) return
        setAllShows(shows)
        setStatus('ready')
      })
      .catch(() => !cancelled && setStatus('error'))
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults(null)
      return
    }
    setSearching(true)
    const handle = setTimeout(() => {
      searchShows(query.trim())
        .then((results) => setSearchResults(results))
        .catch(() => setSearchResults([]))
        .finally(() => setSearching(false))
    }, 350)
    return () => clearTimeout(handle)
  }, [query])

  const shows = useMemo(() => {
    if (searchResults !== null) return searchResults
    return allShows.slice(0, 60)
  }, [searchResults, allShows])

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-14">
      <h1 className="font-display text-3xl sm:text-4xl">Browse shows</h1>

      <div className="mt-6 max-w-xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-8">
        {status === 'loading' && (
          <p className="text-slate-dim">Loading…</p>
        )}
        {status === 'error' && (
          <p className="text-velvet">
            Check your connection and refresh the page.
          </p>
        )}

        {status === 'ready' && (
          <>
            {searching && <p className="text-slate-dim text-sm mb-4">Searching…</p>}

            {searchResults !== null && searchResults.length === 0 && !searching && (
              <p className="text-slate-dim">
                No shows matched “{query}”. Try a different title.
              </p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {shows.map((show) => (
                <MovieCard key={show.id} show={show} onSeeDetails={setSelectedShow} />
              ))}
            </div>
          </>
        )}
      </div>

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  )
}
