'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown, Loader2, Users } from 'lucide-react'
import dynamic from 'next/dynamic'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

export type MenuItem = {
  section: string
  icon: keyof typeof dynamicIconImports
  menus: {
    title: string
    link: string
    icon: keyof typeof dynamicIconImports
  }[]
}

export type CollapsibleNavItemProps = {
  menuItems: MenuItem[]
}

export function CollapsibleNavItem({ menuItems }: CollapsibleNavItemProps) {
  return (
    <>
      {menuItems.map((section) => {
        const LucideIcon = dynamic(dynamicIconImports[section.icon], {
          loading: () => (
            <Loader2 className="h-5 w-5 animate-spin text-zinc-500" />
          ),
        })
        return (
          <Collapsible.Root
            key={section.section}
            className="group/root flex flex-col"
          >
            <Collapsible.Trigger className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800">
              <LucideIcon className="h-5 w-5 text-zinc-500" />
              <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
                {section.section}
              </span>

              <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform  group-hover:text-violet-300 group-data-[state=open]/root:rotate-180 dark:text-zinc-600" />
            </Collapsible.Trigger>
            <Collapsible.Content className="ml-2 overflow-hidden px-3 py-0.5 data-[state=closed]:animate-collapsible-close data-[state=open]:animate-collapsible-open">
              {section.menus.map((menu) => {
                const LucideIcon = dynamic(dynamicIconImports[menu.icon], {
                  loading: () => (
                    <Loader2 className="h-5 w-5 animate-spin text-zinc-500" />
                  ),
                })
                return (
                  <a
                    key={menu.title}
                    href=""
                    className="group/item flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
                  >
                    {/* <Suspense fallback={fallback}> */}
                    <LucideIcon className="h-5 w-5 text-zinc-500" />
                    {/* </Suspense> */}
                    {/* <SquareStack className="h-5 w-5 text-zinc-500" /> */}
                    {/* {menu.icon} */}

                    <span className="font-medium text-zinc-700 group-hover/item:text-violet-500 dark:text-zinc-100 dark:group-hover/item:text-violet-300">
                      {menu.title}
                    </span>
                  </a>
                )
              })}
            </Collapsible.Content>
          </Collapsible.Root>
        )
      })}
    </>
  )
}
