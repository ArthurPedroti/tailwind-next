'use client'

import {
  BarChart,
  CheckSquare,
  ChevronDown,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Moon,
  Search,
  SquareStack,
  Sun,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { CollapsibleNavItem, MenuItem } from './CollapsibleNavItem'
import { Button } from '../Button'
import { useTheme } from 'next-themes'

const MenuItem: MenuItem[] = [
  {
    section: 'Geral',
    icon: 'apple',
    menus: [
      {
        title: 'Pedidos de Compra',
        link: '/purchases',
        icon: 'bar-chart',
      },
      {
        title: 'Expedição',
        link: '/gate',
        icon: 'check-square',
      },
    ],
  },
  {
    section: 'Compras',
    icon: 'badge-minus',
    menus: [
      {
        title: 'Pedidos de Compra',
        link: '/purchases',
        icon: 'ferris-wheel',
      },
      {
        title: 'Expedição',
        link: '/gate',
        icon: 'tablets',
      },
    ],
  },
  {
    section: 'Estoque',
    icon: 'send-to-back',
    menus: [
      {
        title: 'Pedidos de Compra',
        link: '/purchases',
        icon: 'save',
      },
      {
        title: 'Expedição',
        link: '/gate',
        icon: 'diamond',
      },
    ],
  },
]

export function Sidebar() {
  const { theme, setTheme } = useTheme()

  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <div>
          <Button
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light')
            }}
            variant="ghost"
          >
            {theme === 'light' ? (
              <Moon className="h-6 w-6" />
            ) : (
              <Sun className="h-6 w-6" />
            )}
          </Button>
          <Collapsible.Trigger asChild className="lg:hidden">
            <Button variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </Collapsible.Trigger>
        </div>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <CollapsibleNavItem menuItems={MenuItem} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
