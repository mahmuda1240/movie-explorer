export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a show — try “Girls” or “Friends”"
        className="w-full rounded-sm border border-ink/15 bg-white pl-5 pr-4 py-3.5 text-ink placeholder:text-slate-dim focus:border-marquee outline-none transition-colors"
        aria-label="Search for a show by title"
      />
    </div>
  )
}
