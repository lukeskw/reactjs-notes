export function NewNoteCard() {
  return (
    <div className="max-h-[250px] space-y-6 overflow-hidden rounded-md bg-slate-600 p-5">
      <span className="text-sm font-medium text-slate-300">Add note</span>
      <p className="line-clamp-6 text-sm leading-6 text-slate-400">
        Record an audio note that it'll be converted to text automatically.
      </p>
    </div>
  )
}
