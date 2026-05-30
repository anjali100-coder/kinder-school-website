// @ts-nocheck
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

  // Aapke original dropdown links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/#principal', label: "Principal's Message" },
    { 
      label: 'Academic',
      subLinks: [
        { href: '/admission-info', label: 'Admission Info' },
        { href: '/fee-structure', label: 'Fee Structure' },
        { href: '/book-list', label: 'Book List' }
      ]
    },
    { href: '/facilities', label: 'Facilities' },
    { href: '/#achievements', label: 'Achievements' },
    { href: '/#staff', label: 'Our Staff' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/students-corner', label: 'Students Corner' },
    { href: '/#contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100">
        
        {/* Aapka original Blue Top Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 text-sm font-medium">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4">
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start w-full sm:w-auto">
              <span className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4" />
                0171-4002666
              </span>
              <span className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="w-4 h-4" />
                ambalacantt@cecilconventschooljunior.com
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Opposite GPO, Staff Road, Ambala
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                 <span className="text-2xl font-extrabold text-blue-900 leading-tight">Cecil Convent School</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link: any, index: number) => (
                <div key={index} className="relative group">
                  {link.subLinks ? (
                    <div className="flex items-center gap-1 cursor-pointer text-blue-900 font-bold hover:text-orange-500 transition-colors py-2">
                      {link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden hidden group-hover:block transition-all">
                        {link.subLinks.map((subLink: any, subIndex: number) => (
                          <Link key={subIndex} href={subLink.href || '#'} className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900 border-b border-gray-50 last:border-0">
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href || '#'} className="text-blue-900 font-bold hover:text-orange-500 transition-colors py-2">
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-4">
               <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold px-6 shadow-md" onClick={() => setIsAdmissionModalOpen(true)}>
                 Enroll Now
               </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors text-blue-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className="xl:hidden mt-4 pb-4 border-t-2 border-orange-500 pt-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link: any, index: number) => (
                  <div key={index} className="w-full">
                    {link.subLinks ? (
                      <div className="flex flex-col">
                        <span className="text-blue-900 font-bold py-3 px-4 border-b border-blue-50 flex items-center justify-between bg-blue-50/50">
                          {link.label} ▼
                        </span>
                        <div className="flex flex-col pl-6 bg-white py-2">
                          {link.subLinks.map((subLink: any, subIndex: number) => (
                            <Link
                              key={subIndex}
                              href={subLink.href || '#'}
                              className="text-gray-700 hover:text-blue-900 font-semibold py-2 px-4 block border-b border-gray-50"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href || '#'}
                        className="block text-blue-900 font-bold py-3 px-4 hover:bg-blue-50 transition-colors border-b border-blue-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Agar AdmissionModal alag se hai, toh usko handle karne ke liye */}
      <AdmissionModal isOpen={isAdmissionModalOpen} onClose={() => setIsAdmissionModalOpen(false)} />
    </>
  )
}