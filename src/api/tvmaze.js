const BASE_URL = 'https://api.tvmaze.com'

export function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]+>/g, '')
}

export function getYear(premiered) {
  if (!premiered) return '-'
  return premiered.slice(0, 4)
}

export function formatRating(rating) {
  if (!rating || rating.average == null) return '-'
  return rating.average.toFixed(1)
}

export async function fetchAllShows() {
  const res = await fetch(`${BASE_URL}/shows`)
  if (!res.ok) throw new Error(`Failed to load shows (${res.status})`)
  return res.json()
}

export async function searchShows(query) {
  const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error(`Search failed (${res.status})`)
  const results = await res.json()
  return results.map((r) => r.show)
}

export async function fetchShowById(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}`)
  if (!res.ok) throw new Error(`Failed to load show ${id} (${res.status})`)
  return res.json()
}
