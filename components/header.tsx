'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AdmissionModal } from './admission-modal'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#principal', label: "Principal's Message" },
    { href: '#staff', label: 'Our Staff' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-4 border-yellow-300">
        {/* Top bar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-3 text-sm font-semibold">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4" />
                0171-4002666
              </span>
              <span className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="w-4 h-4" />
                ambalacantt@cecilconventschoolijunior.com
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <MapPin className="w-4 h-4" />
              Opposite GPO, Staff Road, Ambala Cantt
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity">
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg border-3 border-blue-300 bg-white flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Cecil Convent School Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-base md:text-lg text-blue-900 leading-tight">Cecil Convent School</h1>
                <p className="text-xs md:text-sm text-yellow-600 font-bold">Junior Playway</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-900 hover:text-blue-600 font-bold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                onClick={() => setIsAdmissionModalOpen(true)}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-500 hover:to-yellow-600 rounded-full font-bold shadow-lg px-8 py-2 transform hover:scale-105 transition-all text-base"
              >
                Enroll Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t-3 border-yellow-300 pt-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-blue-900 hover:text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  onClick={() => {
                    setIsAdmissionModalOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-500 hover:to-yellow-600 rounded-full font-bold mt-2 w-full py-3"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Admission Modal */}
      <AdmissionModal 
        isOpen={isAdmissionModalOpen} 
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </>
  )
}

