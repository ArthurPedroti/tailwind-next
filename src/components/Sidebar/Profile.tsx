import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/ArthurPedroti.png"
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Arthur Pedroti
        </span>
        <span className="text-sm text-zinc-500 truncate">
          arthurpedroti@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  )
}
