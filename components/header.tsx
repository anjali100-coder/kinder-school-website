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
  { 
    label: 'Academic',
    subLinks: [
      { href: '/admission', label: 'Admission Info' },
      { href: '/fee-structure', label: 'Fee Structure' },
      { href: '/book-list', label: 'Book List' }
    ]
  },
  { href: '#facilities', label: 'Facilities' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#staff', label: 'Our Staff' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#students-corner', label: 'Students Corner' },
  { href: '#admission', label: 'Admission' },
  { href: '#contact', label: 'Contact' }
];

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
              <Link href="#home" className="text-blue-900 hover:text-blue-600 font-bold transition-colors">Home</Link>
          
          {/* Dropdown 1: About School */}
          <div className="relative group">
            <button className="text-blue-900 hover:text-blue-600 font-bold transition-colors flex items-center gap-1 py-2">
              About School ▾
            </button>
            <div className="absolute left-0 top-full mt-0 w-48 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
              <Link href="#about" className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 font-medium">About Us</Link>
              <Link href="#principal" className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 font-medium">Principal's Message</Link>
              <Link href="#staff" className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 font-medium">Our Staff</Link>
            </div>
          </div>

          {/* Dropdown 2: Explore */}
          <div className="relative group">
            <button className="text-blue-900 hover:text-blue-600 font-bold transition-colors flex items-center gap-1 py-2">
              Explore ▾
            </button>
            <div className="absolute left-0 top-full mt-0 w-52 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
              <Link href="/academic" className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 font-medium">Academic</Link>
              <Link href="/facilities" className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 font-medium">Facilities</Link>
              <Link href="/achievements" className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 font-medium">Achievements</Link>
              <Link href="/students-corner" className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 font-medium">Students Corner</Link>
            </div>
          </div>

          <Link href="#gallery" className="text-blue-900 hover:text-blue-600 font-bold transition-colors">Gallery</Link>
          {/* Dropdown 3: Admission */}
          <div className="relative group">
            <button className="text-blue-900 hover:text-blue-600 font-bold transition-colors flex items-center gap-1 py-2">
              Admission ▾
            </button>
            <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50">
              <Link href="/admission-info" className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 font-medium">
                Admission Information
              </Link>
              <Link href="/book-list" className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 font-medium">
                Book List 2026-2027
              </Link>
            </div>
          </div>
          <Link href="#contact" className="text-blue-900 hover:text-blue-600 font-bold transition-colors">Contact</Link>
              <Link href="/fee-structure" className="mr-4">
  <button className="bg-white border-2 border-blue-900 text-blue-900 px-5 py-2 rounded-full hover:bg-blue-50 transition duration-300 font-medium hidden md:inline-block">
    Fee Structure
  </button>
</Link>
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
                {navLinks.map((link: any) => (
  <div key={link.label} className="w-full">
    
    {(link.subLinks || link.dropdownItems).map((subLink: any) => (
<Link
key={subLink.label}
href={subLink.href}
className="text-blue-800 hover:text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors block"
onClick={() => setIsMenuOpen(false)}
>
{subLink.label}

))}


) : (
<Link
href={link.href}
className="block text-blue-900 hover:text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
onClick={() => setIsMenuOpen(false)}
>
{link.label}

)}
        </div>
      </div>
    ) : (
      /* Agar simple seedha link hai */
      <Link
        href={link.href}
        className="block text-blue-900 hover:text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        {link.label}
      </Link>
    )}
  </div>
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

