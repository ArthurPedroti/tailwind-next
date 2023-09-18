'use client'

import {
  BarChart,
  CheckSquare,
  ChevronDown,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import { CollapsibleNavItem, MenuItem } from './CollapsibleNavItem'

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
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
      <Logo />

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

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
