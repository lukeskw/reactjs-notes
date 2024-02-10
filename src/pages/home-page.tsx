import { ChangeEvent, useState } from 'react'
import mainLogo from '../assets/main-logo.svg'
import { NewNoteCard } from '../components/new-note-card'
import { NoteCard } from '../components/note-card'
import { useDebounce } from 'use-debounce'

interface Note {
  id: string
  date: Date
  content: string
}

export function HomePage() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnLocalStorage = localStorage.getItem('notes')

    if (notesOnLocalStorage) {
      return JSON.parse(notesOnLocalStorage)
    }
    return []
  })

  const [search, setSearch] = useState('')

  const [debouncedSearch] = useDebounce(search, 300)

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const notesArr = [newNote, ...notes]

    setNotes(notesArr)

    localStorage.setItem('notes', JSON.stringify(notesArr))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const query = event.target.value
    setSearch(query)
  }

  const filteredNotes =
    debouncedSearch !== ''
      ? notes.filter((note) =>
          note.content.toLowerCase().includes(debouncedSearch.toLowerCase()),
        )
      : notes

  return (
    <div className="flex w-screen flex-col space-y-6 px-8 py-8 xl:mx-auto xl:my-12 xl:max-w-7xl">
      <img src={mainLogo} alt="Talki Notes" width={80} />

      <form className="w-full">
        <input
          type="text"
          name="search"
          placeholder="Search on your notes..."
          className="w-full bg-transparent text-xl font-semibold tracking-tight outline-none placeholder:text-slate-500 lg:text-3xl"
          value={search}
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="auto-rows-fixed grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes?.map((note) => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}
