import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { formatDistanceToNow } from 'date-fns'

type NoteCardProps = {
  note: {
    date: Date
    content: string
  }
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog>
      <DialogTrigger className="relative max-h-[250px] flex-1 space-y-6 rounded-md bg-slate-800 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(note.date, { addSuffix: true })}
        </span>
        <p className="line-clamp-6 text-sm leading-6 text-slate-400">
          {note.content}
        </p>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 rounded-md bg-gradient-to-t from-black/50 to-black/0" />
      </DialogTrigger>

      <DialogContent className="flex h-[60vh] w-full max-w-sm flex-col overflow-hidden rounded-md p-0 outline-none md:max-w-md xl:max-w-[640px] dark:bg-slate-700">
        <div className="flex flex-1 flex-col gap-3 px-8 py-6">
          <span className="text-sm font-medium text-slate-300">
            {formatDistanceToNow(note.date, { addSuffix: true })}
          </span>
          <p className="line-clamp-6 text-sm leading-6 text-slate-400">
            {note.content}
          </p>
        </div>

        <button
          type="button"
          className="group h-10 w-full bg-slate-800 text-center text-sm font-medium text-slate-300 outline-none"
        >
          Do you wish to{' '}
          <span className="text-red-400 group-hover:underline group-hover:underline-offset-1">
            erase this note
          </span>
          ?
        </button>
      </DialogContent>
    </Dialog>
  )
}
