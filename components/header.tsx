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

  // YAHAN MAINE AAPKE SAARE NAYE PAGES KE LINKS SAHI KAR DIYE HAIN
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
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-900">Cecil Convent School</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link: any, index: number) => (
              <div key={index} className="relative group">
                {(link.subLinks || link.dropdownItems) ? (
                  <div className="flex items-center gap-1 cursor-pointer text-blue-900 font-semibold hover:text-blue-600">
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block">
                      {(link.subLinks || link.dropdownItems).map((subLink: any, subIndex: number) => (
                        <Link key={subIndex} href={subLink.href || '#'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={link.href || '#'} className="text-blue-900 font-semibold hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t-2 border-yellow-300 pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link: any, index: number) => (
                <div key={index} className="w-full">
                  {(link.subLinks || link.dropdownItems) ? (
                    <div className="flex flex-col">
                      <span className="text-blue-900 font-bold py-3 px-4 border-b border-blue-100 flex items-center justify-between">
                        {link.label} ▼
                      </span>
                      <div className="flex flex-col pl-6 bg-blue-50/50 py-2">
                        {(link.subLinks || link.dropdownItems).map((subLink: any, subIndex: number) => (
                          <Link
                            key={subIndex}
                            href={subLink.href || '#'}
                            className="text-blue-800 hover:text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors block"
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
                      className="block text-blue-900 hover:text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
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
  )
}