import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heart,
  ArrowRight,
  Droplet,
  PackageOpen,
  BookOpenCheck,
  HandHeart,
} from 'lucide-react'
import ImpactCarousel from '@/components/impact-carousel'

export const metadata = {
  title: 'Jade Anibor Foundation | Ending Period Poverty',
  description:
    'Jade Anibor Foundation (CAC Reg. No: 169471) is dedicated to addressing period poverty across Africa—one book at a time. Donate to support sanitary pad distribution and menstrual hygiene.',
}

export default function FoundationPage() {
  const flutterwaveDonateUrl = 'https://flutterwave.com/donate/kc59f1zzf9kx'
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    flutterwaveDonateUrl
  )}`

  return (
    <>
      <Navbar />
      <main>
        {/* HERO (pic1 flyer) */}
        <section className="relative pt-28 sm:pt-32 pb-16 min-h-[85vh] flex items-center bg-black">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/foundation/pic1.jpeg"
              alt="Jade Anibor Foundation flyer"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Bottom blend so the image doesn't end sharply */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-4 text-center mb-10 text-white">
                <p className="text-orange-300 font-semibold text-sm tracking-wide uppercase">
                  Community Impact
                </p>

                <h1 className="font-serif text-5xl sm:text-6xl font-bold">
                  Jade Anibor Foundation
                </h1>

                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Helping out with period poverty, one book at a time—supporting indigent women and
                  young girls across Africa with access to sanitary pads and proper menstrual hygiene.
                </p>

                <p className="text-sm text-white/70">
                  Registered Nonprofit (CAC Reg. No: <span className="font-semibold">169471</span>) •
                  Since Nov 16, 2022
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link
                    href={flutterwaveDonateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Donate Now
                    <Heart size={20} />
                  </Link>

                  <a
                    href="#what-we-do"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    What We Do
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* REMOVED: Scholarships / Mentees / Impact stats containers */}
            </div>
          </div>
        </section>

        {/* Mission + Vision + About */}
        <section className="py-20 text-slate-50 bg-linear-to-b from-[#050A18] via-[#070F22] to-[#050A18]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <div className="space-y-3">
                <h2 className="font-serif text-4xl font-bold">Our Mission</h2>
                <p className="text-lg leading-relaxed text-slate-200">
                  Helping out with period poverty, one book at a time—by channeling support and
                  resources to indigent women and young girls who need access to sanitary pads and
                  dignified menstrual care.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-bold">Our Vision</h3>
                <p className="text-lg leading-relaxed text-slate-200">
                  Empowering young girls and indigent women of Africa with sanitary pads to maintain
                  proper menstrual hygiene.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-bold">About the Foundation</h3>
                <p className="text-lg leading-relaxed text-slate-200">
                  Jade Anibor Foundation (Registration Number: 169471) is a nonprofit organization
                  registered with the Corporate Affairs Commission (CAC) since November 16, 2022.
                  We’re dedicated to addressing period poverty among indigent women and girls in
                  Africa. Through the sale of books on Amazon and Selar, a portion of proceeds is
                  allocated to provide sanitary pads and support to those in need. With the help of
                  generous friends and supporters, we’re working to make a difference in the lives
                  of vulnerable women and girls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel */}
        <ImpactCarousel />

        {/* What We Do */}
        <section id="what-we-do" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                What We Do
              </p>
              <h2 className="font-serif text-4xl font-bold text-foreground">
                How We Fight Period Poverty
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: PackageOpen,
                  title: 'Sanitary Pad Support & Distribution',
                  description:
                    'We provide sanitary pads to indigent women and young girls—helping them stay confident, hygienic, and supported.',
                  highlights: [
                    'Pad packs and essentials',
                    'Targeted community outreaches',
                    'Support for girls and women in need',
                    'Dignity-focused distribution',
                  ],
                },
                {
                  icon: Droplet,
                  title: 'Menstrual Hygiene Awareness',
                  description:
                    'We promote safe, proper menstrual hygiene practices so beneficiaries can manage their periods with confidence and care.',
                  highlights: [
                    'Practical hygiene guidance',
                    'Community-centered conversations',
                    'Reducing stigma through awareness',
                    'Sustainable menstrual health habits',
                  ],
                },
                {
                  icon: BookOpenCheck,
                  title: 'One Book at a Time Giving Model',
                  description:
                    'A portion of book proceeds (Amazon and Selar) is allocated to fund sanitary pad support for those who need it most.',
                  highlights: [
                    'Book-powered impact',
                    'Sustained support model',
                    'Clear mission-aligned giving',
                    'Scalable outreach funding',
                  ],
                },
                {
                  icon: HandHeart,
                  title: 'Friends, Supporters & Partnerships',
                  description:
                    'With the help of generous friends and supporters, we expand our reach and deepen the impact of every outreach.',
                  highlights: [
                    'Donor-funded outreaches',
                    'In-kind support opportunities',
                    'Volunteer collaboration',
                    'Transparent, mission-first impact',
                  ],
                },
              ].map((program, idx) => {
                const Icon = program.icon
                return (
                  <div
                    key={idx}
                    className="bg-card rounded-xl shadow-md border border-border/50 p-8 space-y-6 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={32} />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {program.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">{program.description}</p>
                    </div>

                    <ul className="space-y-2 pt-4 border-t border-border/50">
                      {program.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/80 text-sm">
                          <span className="text-primary font-bold">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-2">
                    Make an Impact
                  </p>
                  <h2 className="font-serif text-4xl font-bold text-foreground">
                    Support Our Mission
                  </h2>
                </div>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  Your donation helps us provide sanitary pads and support to indigent women and
                  young girls. Every contribution strengthens our outreaches and expands the number
                  of lives we can reach.
                </p>

                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="text-2xl">🩷</div>
                    <div>
                      <p className="font-semibold text-foreground">Pads & Essentials</p>
                      <p className="text-sm text-foreground/70">
                        Helps provide sanitary pads and basic menstrual care items to beneficiaries.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-2xl">📦</div>
                    <div>
                      <p className="font-semibold text-foreground">Outreach Support</p>
                      <p className="text-sm text-foreground/70">
                        Supports distribution logistics and reaching more communities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <p className="font-semibold text-foreground">Sustained Giving</p>
                      <p className="text-sm text-foreground/70">
                        Helps keep the “one book at a time” impact moving consistently.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-foreground/60">
                  Jade Anibor Foundation is registered with the CAC (Reg. No: 169471).
                </p>

                <div className="pt-2">
                  <Link
                    href={flutterwaveDonateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Donate via Flutterwave
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="text-center md:text-left space-y-2">
                      <p className="text-sm font-semibold text-foreground">Prefer to scan?</p>
                      <p className="text-sm text-foreground/70">
                        Scan this QR code to donate through Flutterwave.
                      </p>

                      <Link
                        href={flutterwaveDonateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        Open donation link
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    <div className="shrink-0">
                      <img
                        src={qrUrl}
                        alt="Flutterwave donation QR code"
                        className="rounded-lg border border-border bg-white p-2"
                        width={220}
                        height={220}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-xl p-6 space-y-2">
                  <p className="text-sm font-semibold text-foreground">Why Give?</p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>✓ Direct support for sanitary pad access</li>
                    <li>✓ Helps expand outreaches to more communities</li>
                    <li>✓ Sustains ongoing impact with supporters</li>
                    <li>✓ Mission-first, dignity-centered giving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">
                Join Our Movement
              </h2>
              <p className="text-lg text-accent-foreground/80">
                Together, we can restore dignity and improve menstrual hygiene—one outreach, one
                donation, and one book at a time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href={flutterwaveDonateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors"
              >
                Donate Now
                <Heart size={20} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-foreground text-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}