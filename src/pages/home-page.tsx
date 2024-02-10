import mainLogo from '../assets/main-logo.svg'
import { NoteCard } from '../components/note-card'

export function HomePage() {
  return (
    <div className="mx-8 my-8 flex w-screen flex-col space-y-6 lg:mx-auto lg:my-12 lg:max-w-7xl">
      <img src={mainLogo} alt="Talki Notes" width={80} />

      <form className="w-full">
        <input
          type="text"
          name="search"
          placeholder="Search on your notes..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="auto-rows-fixed grid grid-cols-3 gap-6">
        <div className="max-h-[250px] space-y-6 overflow-hidden rounded-md bg-slate-600 p-5">
          <span className="text-sm font-medium text-slate-300">Add note</span>
          <p className="line-clamp-6 text-sm leading-6 text-slate-400">
            Record an audio note that it'll be converted to text automatically.
          </p>
        </div>
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  )
}
