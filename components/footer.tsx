import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="bg-white p-2 rounded-md inline-block h-16">
              <img
                src="Jalogo.png"
                alt="Jade Anibor Foundation"
                className="h-12 w-auto"
              />
              <div>

              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering individuals and organizations through transformation, education, and strategic business consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/foundation" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Foundation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <a href="mailto:hello@jadeanibor.com" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  hello@jadeanibor.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <a href="tel:+1234567890" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span className="text-sm opacity-90">New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © 2026 Jade Anibor Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
