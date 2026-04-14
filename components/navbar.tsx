'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/books', label: 'Books' },
    { href: '/consulting', label: 'Consulting' },
    { href: '/foundation', label: 'Foundation' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  // Exact match for "/", "startsWith" for other sections (so /books/123 still highlights Books)
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const linkBase =
    'text-foreground/80 hover:text-primary transition-colors text-sm font-medium'
  const linkActive =
    'text-green-600 font-semibold' // change to "text-primary" if your primary is already green

  const mobileBase =
    'block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors text-sm font-medium'
  const mobileActive =
    'text-orange-600 font-semibold bg-muted'

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-23">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 h-16">
            <img
              src="/logod.png"
              alt="Jade Anibor Foundation"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${linkBase} ${active ? linkActive : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Donate Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/foundation"
              className="hidden sm:inline-flex px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm"
            >
              Donate
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-3">
            {links.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${mobileBase} ${active ? mobileActive : ''}`}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}

            <Link
              href="/foundation"
              className="block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}