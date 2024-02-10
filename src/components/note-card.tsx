export function NoteCard() {
  return (
    <div className="relative max-h-[250px] flex-1 space-y-6 rounded-md bg-slate-800 p-5">
      <span className="text-sm font-medium text-slate-300">2 days ago</span>
      <p className="line-clamp-6 text-sm leading-6 text-slate-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        minus maxime ut, totam itaque dolorum tempore ea corrupti suscipit
        magnam rem reiciendis. Neque deserunt veritatis ab architecto dicta quos
        voluptatibus?
      </p>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 rounded-md bg-gradient-to-t from-black/60 to-black/0" />
    </div>
  )
}
