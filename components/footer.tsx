import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16.7 3c.6 2.6 2.4 4.6 5 5.2v3.2c-1.9 0-3.7-.6-5.1-1.6v6.3c0 4.1-3.4 7.5-7.5 7.5S1.6 20.2 1.6 16.1s3.4-7.5 7.5-7.5c.4 0 .9 0 1.3.1v3.5c-.4-.1-.8-.2-1.3-.2-2.2 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1 4.1-1.8 4.1-4.1V3h3.7z"
      />
    </svg>
  )
}

function ThreadsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.3 12.4c-.4 2.5-2.3 4.2-5.1 4.2-3.3 0-5.6-2.3-5.6-5.6 0-3 2-5.2 5-5.2 2.1 0 3.7 1.1 4.5 2.9l-2 .7c-.4-1-1.3-1.6-2.5-1.6-1.7 0-2.8 1.3-2.8 3.1 0 2 1.3 3.3 3.3 3.3 1.5 0 2.6-.7 2.9-2-.8-.4-1.7-.6-2.8-.6h-.1v-2c1.6 0 3 .3 4.2 1 .4.2.7.4 1 .7z"
      />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.4 20.4h-3.5v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6H9.5V9h3.3v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.2 2.4 4.2 5.4v6.2zM5.6 7.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-1.8 12.9V9h3.5v11.4H3.8z"
      />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM18 6.8a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 6.8z"
      />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H2l7.4-8.5L1 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L6.5 4H4.7l13.1 16z"
      />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V11H7.3v3H10v8h3.5z"
      />
    </svg>
  )
}

export function Footer() {
  const socials = [
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@jadegeorgeanibor?_r=1&_t=ZS-95Vx0dO5Vm0',
      Icon: TikTokIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jade-george-anibor-206777150?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      Icon: LinkedInIcon,
    },
    { name: 'Threads', href: 'https://www.threads.com/@jadegeorgeanibor.', Icon: ThreadsIcon },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jadegeorgeanibor?igsh=ZTczcm5zb2Qwemxn',
      Icon: InstagramIcon,
    },
    { name: 'X', href: 'https://x.com/jadegeorgea?s=21', Icon: XIcon },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/14dcuQxT74A/?mibextid=wwXIfr',
      Icon: FacebookIcon,
    },
  ]

  return (
    <footer className="bg-black text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="rounded-md inline-block">
              <img src="/logo.png" alt="Jade Anibor Foundation" className="h-20 w-auto" />
            </div>

            <p className="text-sm opacity-80 leading-relaxed">
              Writing, consulting, and community impact—working to empower people and reduce period
              poverty across Africa.
            </p>

            <div className="pt-2">
              <p className="text-sm font-semibold mb-3">Connect</p>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
                    title={name}
                  >
                    <Icon className="w-5 h-5 text-white/90" />
                  </a>
                ))}
              </div>
            </div>
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
                <Link
                  href="/books"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
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
                <Link
                  href="/foundation"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Foundation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
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
                <div className="text-sm opacity-90 leading-relaxed">
                  <span className="font-semibold text-white/90">Foundation:</span>{' '}
                  <a
                    href="mailto:Jadeaniborfoundation@gmail.com"
                    className="hover:opacity-100 transition-opacity break-all"
                  >
                    Jadeaniborfoundation@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <div className="text-sm opacity-90 leading-relaxed">
                  <span className="font-semibold text-white/90">Author:</span>{' '}
                  <a
                    href="mailto:Jadeanibor@icloud.com"
                    className="hover:opacity-100 transition-opacity break-all"
                  >
                    Jadeanibor@icloud.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <div className="text-sm opacity-90 leading-relaxed">
                  <span className="font-semibold text-white/90">Consultancy:</span>{' '}
                  <a
                    href="mailto:jfatrainingtools@gmail.com"
                    className="hover:opacity-100 transition-opacity break-all"
                  >
                    jfatrainingtools@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <div className="text-sm opacity-90 leading-relaxed">
                  <span className="font-semibold text-white/90">Books:</span>{' '}
                  <a
                    href="tel:+2348133337114"
                    className="hover:opacity-100 transition-opacity"
                  >
                    +234 813 333 7114
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <div className="text-sm opacity-90 leading-relaxed">
                  <span className="font-semibold text-white/90">Consultancy:</span>{' '}
                  <a
                    href="tel:+2348057183461"
                    className="hover:opacity-100 transition-opacity"
                  >
                    +234 805 718 3461
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © {new Date().getFullYear()} Jade Anibor Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}