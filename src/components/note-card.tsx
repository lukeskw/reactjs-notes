type NoteCardProps = {
  note: {
    date: Date
    content: string
  }
}

export function NoteCard({ note }: NoteCardProps) {
  const diffInMs = Date.now() - note.date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

  const formattedDate = rtf.format(-diffInDays, 'day')

  return (
    <button className="relative max-h-[250px] flex-1 space-y-6 rounded-md bg-slate-800 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">
        {formattedDate}
      </span>
      <p className="line-clamp-6 text-sm leading-6 text-slate-400">
        {note.content}
      </p>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 rounded-md bg-gradient-to-t from-black/60 to-black/0" />
    </button>
  )
}
