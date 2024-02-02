import { ReactNode } from 'react'

export type SideBarProps = {
  navItems: ReactNode
  footerItems: ReactNode
  children: ReactNode
}

export default function SideBar({
  navItems,
  footerItems,
  children,
}: SideBarProps) {
  return (
    <div className="w-full h-full grid grid-cols-[auto,_1fr]">
      <div className="px-8 py-24 min-w-72 flex flex-col gap-32 bg-white overflow-y-auto">
        <nav>
          <ul>
            {navItems}
          </ul>
        </nav>

        <aside>
          <ul>
            {footerItems}
          </ul>
        </aside>
      </div>

      <div className="">{children}</div>
    </div>
  )
}
