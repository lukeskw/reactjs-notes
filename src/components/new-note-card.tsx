import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

type NewNoteCardProps = {
  onNoteCreated: (content: string) => void
}

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true)
  const [content, setContent] = useState('')

  function handleShowTextEditor() {
    setIsOnboardingOpen(false)
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault()

    setContent(event.target.value)

    if (event.target.value === '') {
      setIsOnboardingOpen(true)
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()

    onNoteCreated(content)

    setContent('')

    setIsOnboardingOpen(true)

    toast.success('Note created successfully', {
      duration: 5000,
      className:
        'dark:group-[.toaster]:bg-lime-950/80 flex flex-1 justify-center',
    })
  }

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
        <form onSubmit={handleSaveNote} className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-3 px-8 py-6">
            <span className="text-sm font-medium text-slate-300">Add note</span>
            {isOnboardingOpen ? (
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
                  onClick={handleShowTextEditor}
                >
                  use just text
                </button>{' '}
                if you want
              </p>
            ) : (
              <textarea
                autoFocus
                className="flex-1 resize-none bg-transparent text-sm leading-6 text-slate-400 outline-none"
                onChange={handleContentChanged}
                value={content}
              />
            )}
          </div>

          <button
            type="submit"
            className="h-10 w-full bg-lime-400 text-center text-sm font-medium text-lime-950 outline-none hover:bg-lime-500"
          >
            Save note
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
