import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Lightbulb } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-6 py-20 bg-black">
          <div className="absolute inset-0">
            <img
              src="/newo.jpg"
              alt="Jade Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-white">
            <div className="flex items-center justify-center text-center">
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <p className="text-orange-400 font-semibold text-sm tracking-wide uppercase">
                    WELCOME TO JADE ANIBOR FOUNDATION
                  </p>
                  <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight">
                    Alleviating Period Poverty and Community Impact
                  </h1>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Millions of girls and women face period poverty every day, lacking access to basic
                    menstrual hygiene. Through our books, outreach programs, and community initiatives,
                    we provide sanitary support — empowering lives and restoring dignity across Africa.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
                  <Link
                    href="/consulting"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Support the Mission
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/books"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                  >
                    Explore Our Books
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">Latest</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Featured Books
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Practical insights for leadership, growth, and personal transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'The Giant in my Bed', image: '/giants.jpeg' },
                { title: 'Pathetic Couples', image: '/pat.jpeg' },
                { title: 'Lies were Told', image: '/lies.jpeg' },
              ].map((book, idx) => (
                <Link
                  key={idx}
                  href="/books"
                  className="bg-card rounded-xl shadow-md group border border-border/50 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="border-b border-border/40 bg-linear-to-b from-muted/30 to-background p-5">
                    <div className="mx-auto w-full max-w-[280px] rounded-2xl bg-linear-to-br from-primary/25 to-accent/25 p-px shadow-xl">
                      <div className="overflow-hidden rounded-2xl bg-white">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="aspect-3/4 w-full object-cover object-center scale-[1.08] transition-transform duration-500 group-hover:scale-[1.12]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm pt-4">
                      Learn More <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/books"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-primary font-semibold hover:text-accent transition-colors"
              >
                View All Books
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Vision / Mission / Values (changed to light gray bg + black text/icons) */}
        <section className="py-20 bg-muted/40 text-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white rounded-lg border border-border/60 flex items-center justify-center">
                  <Lightbulb className="text-foreground" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                  <span className="font-semibold text-foreground">Empowering Lives Through Dignity and Access.</span>{' '}
                  We envision a future where no girl or woman is held back by lack of access to menstrual
                  hygiene. By reaching young girls and indigent women across Africa, we aim to create a
                  society where dignity, confidence, and proper hygiene are accessible to all.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 bg-white rounded-lg border border-border/60 flex items-center justify-center">
                  <Users className="text-foreground" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Mission</h3>
                <p className="text-foreground/70 leading-relaxed">
                  <span className="font-semibold text-foreground">Combating Period Poverty, One Book at a Time.</span>{' '}
                  We are committed to reducing period poverty by transforming knowledge into impact. Through
                  book-driven fundraising, outreach programs, and community support, we provide sanitary pads
                  and essential resources to those in need.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 bg-white rounded-lg border border-border/60 flex items-center justify-center">
                  <BookOpen className="text-foreground" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Values</h3>

                <ul className="text-foreground/70 leading-relaxed space-y-3">
                  <li>
                    <strong className="text-foreground">Compassion</strong> – We are driven by empathy and a
                    deep commitment to improving lives.
                  </li>
                  <li>
                    <strong className="text-foreground">Impact</strong> – We focus on creating meaningful and
                    lasting change in communities.
                  </li>
                  <li>
                    <strong className="text-foreground">Dignity</strong> – We believe every girl and woman
                    deserves confidence and self-worth.
                  </li>
                  <li>
                    <strong className="text-foreground">Empowerment</strong> – We equip individuals with the
                    resources and knowledge to thrive.
                  </li>
                  <li>
                    <strong className="text-foreground">Integrity</strong> – We operate with honesty,
                    transparency, and accountability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section (logo independent + add Visit Foundation button) */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              {/* Logo (no container/card) */}
              <div className="lg:col-span-2 flex justify-center lg:justify-start">
                <img
                  src="/logod.png"
                  alt="Jade Anibor Foundation"
                  className="w-44 sm:w-52 h-auto"
                />
              </div>

              {/* Text */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <p className="text-sm text-accent font-semibold tracking-wide uppercase mb-2">
                    About
                  </p>
                  <h2 className="font-serif text-4xl font-bold text-foreground">
                    Jade Anibor Foundation
                  </h2>
                </div>

                <div className="text-foreground/70 leading-relaxed">
                  <p>
                    Jade Anibor Foundation (Registration Number: 169471) is a nonprofit organization
                    registered with the Corporate Affairs Commission (CAC) since November 16, 2022.
                    We&apos;re dedicated to addressing period poverty among indigent women and girls in Africa.
                    Through the sale of books on Amazon and Selar, a portion of proceeds is allocated to
                    provide sanitary pads and support to those in need. With the help of generous friends
                    and supporters, we&apos;re working to make a difference in the lives of vulnerable women
                    and girls.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/foundation"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Visit Foundation
                    <ArrowRight size={18} />
                  </Link>
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
                Join the Mission
              </h2>
              <p className="text-lg text-accent-foreground/80">
                Every book purchased and every donation made brings us one step closer to ending period
                poverty. Together, we can restore dignity and create lasting impact..
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/consulting"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors"
              >
                Support the Mission
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-foreground text-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors"
              >
                Explore Our Books
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}