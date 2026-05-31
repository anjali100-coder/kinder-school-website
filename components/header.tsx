// @ts-nocheck
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AdmissionModal } from './admission-modal'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-school', label: 'About School' },
    { 
      label: 'Explore',
      subLinks: [
        { href: '/academic', label: 'Academic' },
        { href: '/facilities', label: 'Facilities' },
        { href: '/achievements', label: 'Achievements' },
        { href: '/students-corner', label: 'Students Corner' }
      ]
    },
    { href: '/gallery', label: 'Gallery' },
    { 
      label: 'Admission',
      subLinks: [
        { href: '/admission-info', label: 'Admission Information' },
        { href: '/book-list', label: 'Book List 2026-2027' }
      ]
    },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 w-full">
        
        {/* TOP BLUE BAR */}
        <div className="bg-[#243bb5] text-white py-2 text-xs sm:text-sm font-medium w-full">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                0171-4002666
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                ambalacantt@cecilconventschooljunior.com
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Opposite GPO, Staff Road, Ambala Cantt
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3">
          <div className="flex justify-between items-center">
            
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="School Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                 <span className="text-sm sm:text-lg lg:text-xl font-extrabold text-[#243bb5] leading-tight">Cecil Convent<br/>School</span>
                 <span className="text-[10px] sm:text-xs text-gray-500 font-semibold tracking-wide">Junior Playway</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link: any, index: number) => (
                <div key={index} className="relative group py-4 flex items-center"> 
                  {link.subLinks ? (
                    <>
                      <div className="flex items-center gap-1 cursor-pointer text-[#243bb5] font-bold text-[13px] hover:text-[#f07b46] transition-colors">
                        {link.label}
                        <ChevronDown className="w-4 h-4 mt-[2px] text-gray-400 group-hover:text-[#f07b46] transition-transform duration-300 group-hover:rotate-180" />
                      </div>
                      
                      {/* Fixed Dropdown Menu - No gap, smooth fade in */}
                      <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
                          {link.subLinks.map((subLink: any, subIndex: number) => (
                            <Link key={subIndex} href={subLink.href || '#'} className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-[#f07b46] border-b border-gray-50 last:border-0 text-center transition-colors">
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={link.href || '#'} className="flex items-center text-[#243bb5] font-bold text-[13px] hover:text-[#f07b46]">
    {link.label}
</Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Buttons */}
            <div className="hidden xl:flex items-center gap-3">
               <Link href="/fee-structure">
                 <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-semibold px-5 h-9 text-xs">
                   Fee Structure
                 </Button>
               </Link>
               <Button className="bg-[#f28b5a] hover:bg-[#d96b3a] text-white rounded-full font-bold px-6 h-9 text-xs shadow-sm" onClick={() => setIsAdmissionModalOpen(true)}>
                 Enroll Now
               </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-[#243bb5] hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link: any, index: number) => (
                  <div key={index} className="w-full">
                    {link.subLinks ? (
                      <div className="flex flex-col">
                        <span className="text-[#243bb5] font-bold py-3 px-4 border-b border-gray-50 flex items-center justify-between bg-blue-50/30 rounded-lg">
                          {link.label} <ChevronDown className="w-4 h-4" />
                        </span>
                        <div className="flex flex-col pl-6 py-2">
                          {link.subLinks.map((subLink: any, subIndex: number) => (
                            <Link
                              key={subIndex}
                              href={subLink.href || '#'}
                              className="text-gray-600 hover:text-[#f07b46] font-semibold py-2 px-4 block"
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
                        className="block text-[#243bb5] font-bold py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors border-b border-transparent"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Buttons */}
                <div className="flex flex-col gap-2 px-4 mt-4">
                   <Link href="/fee-structure" className="w-full">
                     <Button variant="outline" className="w-full border-gray-300 rounded-full">Fee Structure</Button>
                   </Link>
                   <Button className="w-full bg-[#f28b5a] hover:bg-[#d96b3a] text-white rounded-full" onClick={() => { setIsMenuOpen(false); setIsAdmissionModalOpen(true); }}>
                     Enroll Now
                   </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <AdmissionModal isOpen={isAdmissionModalOpen} onClose={() => setIsAdmissionModalOpen(false)} />
    </>
  )
}