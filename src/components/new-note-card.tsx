import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export function NewNoteCard() {
  return (
    <Dialog>
      <DialogTrigger className="relative flex max-h-[250px] flex-1 flex-col gap-6 rounded-md bg-slate-600 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-slate-500">
        <span className="text-sm font-medium text-slate-300">Add note</span>
        <p className="line-clamp-6 text-sm leading-6 text-slate-400">
          Record an audio note that it'll be converted to text automatically.
        </p>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 rounded-md" />
      </DialogTrigger>

      <DialogContent className="flex h-[60vh] w-full max-w-sm flex-col overflow-hidden rounded-md p-0 outline-none md:max-w-md xl:max-w-[640px] dark:bg-slate-700">
        <div className="flex flex-1 flex-col gap-3 px-8 py-6">
          <span className="text-sm font-medium text-slate-300">Add note</span>
          <p className="line-clamp-6 text-sm leading-6 text-slate-400">
            Start by{' '}
            <button
              className="font-medium text-lime-400 hover:underline"
              type="button"
            >
              recording an audio note
            </button>{' '}
            or{' '}
            <button
              className="font-medium text-lime-400 hover:underline"
              type="button"
            >
              use just text
            </button>{' '}
            if you want
          </p>
        </div>

        <button
          type="button"
          className="h-10 w-full bg-lime-400 text-center text-sm font-medium text-lime-950 outline-none hover:bg-lime-500"
        >
          Save note
        </button>
      </DialogContent>
    </Dialog>
  )
}
