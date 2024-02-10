import mainLogo from '../assets/main-logo.svg'
import { NewNoteCard } from '../components/new-note-card'
import { NoteCard } from '../components/note-card'

export function HomePage() {
  return (
    <div className="flex w-screen flex-col space-y-6 px-8 py-8 xl:mx-auto xl:my-12 xl:max-w-7xl">
      <img src={mainLogo} alt="Talki Notes" width={80} />

      <form className="w-full">
        <input
          type="text"
          name="search"
          placeholder="Search on your notes..."
          className="w-full bg-transparent text-xl font-semibold tracking-tight outline-none placeholder:text-slate-500 lg:text-3xl"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="auto-rows-fixed grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <NewNoteCard />
        <NoteCard
          note={{
            date: new Date('2024-02-08T12:00:00'),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et error dolor dignissimos illum voluptas quia voluptatibus explicabo quo, est accusamus! Porro ducimus animi vel esse explicabo quisquam odio molestias natus.',
          }}
        />
        <NoteCard
          note={{
            date: new Date('2024-02-06T12:00:00'),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et error dolor dignissimos illum voluptas quia voluptatibus explicabo quo, est accusamus! Porro ducimus animi vel esse explicabo quisquam odio molestias natus.',
          }}
        />
        <NoteCard
          note={{
            date: new Date('2024-02-04T12:00:00'),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et error dolor dignissimos illum voluptas quia voluptatibus explicabo quo, est accusamus! Porro ducimus animi vel esse explicabo quisquam odio molestias natus.',
          }}
        />
      </div>
    </div>
  )
}
