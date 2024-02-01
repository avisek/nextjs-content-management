import { ReactNode } from 'react'

export type TopBarProps = {
  start: ReactNode
  end: ReactNode
  children: ReactNode
}

function TopBar({ start, end, children }: TopBarProps) {
  return (
    <div className="w-full h-full grid grid-rows-[auto,_1fr] bg-slate-100">
      <div className="px-14 py-[18px] flex justify-between items-center gap-8 bg-white rounded-[20px] overflow-x-auto">
        <div className="flex items-center gap-8">{start}</div>
        <div className="flex items-center gap-8">{end}</div>
      </div>

      <div className="px-14 py-14">{children}</div>
    </div>
  )
}

export type SearchProps = {}

TopBar.Search = function Search({}: SearchProps) {
  return (
    <div className="px-4 py-0 min-w-72 flex items-center rounded-3xl bg-slate-50 hover:bg-slate-100 focus-within:hover:bg-slate-50 focus-within:outline focus-within:outline-1 focus-within:outline-violet-700 transition">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
          stroke="#CECECE"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        className="px-2 py-4 w-full bg-transparent text-sm placeholder:text-zinc-300 outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default TopBar
