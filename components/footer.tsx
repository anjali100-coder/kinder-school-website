import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 flex items-center justify-center text-blue-900 font-bold text-lg shadow-lg">
                CCS
              </div>
              <div>
                <h4 className="font-bold text-white">Cecil Convent School</h4>
                <p className="text-sm text-yellow-300 font-semibold">Junior Playway</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Building a strong foundation for your child&apos;s future through play-based learning and nurturing care in Ambala Cantt.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/cecilconventschooljunior" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-yellow-300 rounded-full flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 hover:text-blue-900" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 hover:bg-yellow-300 rounded-full flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 hover:text-blue-900" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 hover:bg-yellow-300 rounded-full flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 hover:text-blue-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-yellow-300 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About Us' },
                { href: '#principal', label: "Principal's Message" },
                { href: '#staff', label: 'Our Staff' },
                { href: '#gallery', label: 'Gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-blue-100 hover:text-yellow-300 transition-colors text-sm font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg text-yellow-300 mb-6">Our Programs</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="font-semibold">Playgroup (Age 2-3)</li>
              <li className="font-semibold">Nursery (Age 3-4)</li>
              <li className="font-semibold">LKG (Age 4-5)</li>
              <li className="font-semibold">UKG (Age 5-6)</li>
              <li className="font-semibold">Summer Camp</li>
              <li className="font-semibold">Day Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-yellow-300 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-blue-100">
                  Cecil Convent School Junior Playway<br />
                  Opposite GPO, Staff Road<br />
                  Ambala Cantt, Haryana 133001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                <a href="tel:01714002666" className="text-sm text-blue-100 hover:text-yellow-300 transition-colors font-semibold">
                  0171-4002666
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                <a href="mailto:ambalacantt@cecilconventschooljunior.com" className="text-sm text-blue-100 hover:text-yellow-300 transition-colors font-semibold">
                  ambalacantt@cecil...
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-blue-100">
                  Mon - Sat: 8:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border-2 border-yellow-300/50">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-xl font-bold text-yellow-300 mb-2">Stay Updated</h4>
                <p className="text-blue-100 text-sm">
                  Subscribe to receive updates about admissions, events, and activities.
                </p>
              </div>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-white text-blue-900 placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 font-semibold"
                />
                <Button className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 hover:from-yellow-400 hover:to-yellow-500 rounded-full font-bold px-6 shadow-lg transition-all">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p className="font-semibold">
              © 2024 Cecil Convent School Junior Playway. All rights reserved.
            </p>
            <span className="hidden md:inline text-blue-400">|</span>
            <Link 
              href="/admin" 
              className="text-xs text-blue-300 hover:text-yellow-300 transition-colors font-semibold flex items-center gap-1"
            >
              🔒 Admin Portal
            </Link>
          </div>
          <p className="flex items-center gap-1 font-semibold">
            Made with <Heart className="w-4 h-4 text-pink-400 fill-pink-400" /> for our little stars
          </p>
        </div>
      </div>
    </footer>
  )
}
