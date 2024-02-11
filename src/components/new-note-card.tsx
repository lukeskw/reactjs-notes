import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Circle } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

type NewNoteCardProps = {
  onNoteCreated: (content: string) => void
}

let speechRecognition: SpeechRecognition | null = null

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true)
  const [content, setContent] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  function handleShowTextEditor() {
    setIsOnboardingOpen(false)
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault()

    setContent(event.target.value)

    if (event.target.value === '' && !isRecording) {
      setIsOnboardingOpen(true)
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()

    if (content === '') {
      return
    }

    onNoteCreated(content)

    setContent('')

    setIsOnboardingOpen(true)

    toast.success('Note created successfully', {
      duration: 5000,
      className:
        'dark:group-[.toaster]:bg-lime-950/80 flex flex-1 justify-center',
    })
  }

  function handleStartRecording() {
    const isSpeechRecognitionAPIAvailable =
      'SpeechRecognition' in window || 'webkitSpeechRecognition' in window

    if (!isSpeechRecognitionAPIAvailable) {
      alert(
        'Your browser does not support Speech Recognition, try it on chrome or edge',
      )
      return
    }
    setIsOnboardingOpen(false)

    setIsRecording(true)

    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition

    speechRecognition = new SpeechRecognitionAPI()

    speechRecognition.lang = 'en-US'

    speechRecognition.continuous = true

    speechRecognition.maxAlternatives = 1

    speechRecognition.interimResults = true

    speechRecognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript)
      }, '')
      console.log(transcription)

      setContent(transcription)
    }

    speechRecognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error(event)
    }

    speechRecognition.start()
  }

  function handleStopRecording() {
    if (speechRecognition !== null) {
      speechRecognition.stop()
    }

    setIsRecording(false)
  }

  function handleOnModalClose() {
    if (speechRecognition !== null) {
      speechRecognition.stop()
    }
    setTimeout(() => {
      setIsRecording(false)
      setContent('')
      setIsOnboardingOpen(true)
    }, 200)
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

      <DialogContent
        onClose={handleOnModalClose}
        className="flex h-[60vh] w-full max-w-sm flex-col overflow-hidden rounded-md p-0 outline-none md:max-w-md xl:max-w-[640px] dark:bg-slate-700"
      >
        <form className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-3 px-8 py-6">
            <span className="text-sm font-medium text-slate-300">Add note</span>
            {isOnboardingOpen ? (
              <p className="line-clamp-6 text-sm leading-6 text-slate-400">
                Start by{' '}
                <button
                  className="font-medium text-lime-400 hover:underline"
                  type="button"
                  onClick={handleStartRecording}
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
          {isRecording ? (
            <button
              type="button"
              className="flex h-10 w-full items-center justify-center gap-2 bg-slate-900 text-center text-sm font-medium text-slate-300 outline-none hover:bg-slate-800 hover:text-slate-100"
              onClick={handleStopRecording}
            >
              <Circle className="h-4 w-4 animate-pulse rounded-full bg-red-700 text-red-700" />
              Recording! (click here to stop)
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSaveNote}
              className="h-10 w-full bg-lime-400 text-center text-sm font-medium text-lime-950 outline-none hover:bg-lime-500"
            >
              Save note
            </button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
