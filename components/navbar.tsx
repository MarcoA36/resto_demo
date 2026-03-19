"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#especialidades", label: "Especialidades" },
    { href: "#nosotros", label: "Sobre Nosotros" },
    { href: "#ubicacion", label: "Ubicación" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍽</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">La Casa del Sabor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/menu"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Menú Digital
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/menu"
              className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-center hover:bg-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menú Digital
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
