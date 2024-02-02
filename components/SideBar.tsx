'use client'

import { ReactNode, useEffect, useRef } from 'react'

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
  const sidebarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  function onResize() {
    if (window.innerWidth < 1024 && containerRef.current && sidebarRef.current) {
      containerRef.current.scrollLeft = sidebarRef.current.offsetWidth + containerRef.current.offsetWidth - containerRef.current.clientWidth
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative grid grid-cols-[auto,_1fr] overflow-x-auto NoScrollbar snap-mandatory snap-x">
      <div ref={sidebarRef} className="px-8 py-24 min-w-72 w-dvw sm:w-auto flex flex-col gap-32 bg-white overflow-y-auto snap-start">
        <nav>
          <ul>{navItems}</ul>
        </nav>

        <aside>
          <ul>{footerItems}</ul>
        </aside>
      </div>

      <div className="lg:w-auto w-dvw overflow-y-auto snap-start">
        {children}
      </div>
    </div>
  )
}
