"use client"

import { Ban, Vote, ShoppingCart, Music2 } from "lucide-react"

const navItems = [
  {
    label: "Baneos",
    icon: Ban,
    href: "#baneos",
  },
  {
    label: "Votar",
    icon: Vote,
    href: "#votar",
  },
  {
    label: "Tienda",
    icon: ShoppingCart,
    href: "#tienda",
  },
  {
    label: "TikTok",
    icon: Music2,
    href: "#tiktok",
  },
]

export function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="flex flex-wrap items-center justify-center gap-3">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => scrollToSection(e, item.href)}
          className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 hover:border-red-500/60 text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
        >
          <item.icon className="w-4 h-4 text-red-400" />
          <span className="font-medium text-sm">{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
