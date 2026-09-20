import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { fetchAllShows, getYear, formatRating } from '../api/tvmaze'

export default function Home() {
  const [picks, setPicks] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false
    fetchAllShows()
      .then((shows) => {
        if (cancelled) return
        const withArt = shows.filter((s) => s.image?.medium)
        const sample = withArt.slice(10, 18)
        setPicks(sample)
        setStatus('ready')
      })
      .catch(() => !cancelled && setStatus('error'))
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <Hero />
    </>
  )
}
