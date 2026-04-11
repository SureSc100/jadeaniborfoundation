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
              src="newo.jpg"
              alt="Jade Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-white">
            <div className="flex items-center justify-center text-center">
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <p className="text-orange-400 font-semibold text-sm tracking-wide uppercase">WELCOME TO JADE ANIBOR FOUNDATION</p>
                  <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight">
                    Ending Period Poverty, Restoring Dignity
                  </h1>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Millions of girls and women face period poverty every day, lacking access to basic menstrual hygiene. Through our books, outreach programs, and community initiatives, we provide sanitary support, education, and hope — empowering lives and restoring dignity across Africa.
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
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Books</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Practical insights for leadership, growth, and personal transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'The Art of Strategic Transformation',
                  description: 'Learn the principles of transforming vision into reality through strategic planning and decisive action.',
                  image: '4k-flyerArtboard-1.png',
                },
                {
                  title: 'Building Business Excellence',
                  description: 'Master the fundamentals of creating sustainable, profitable businesses with lasting impact.',
                  image: '4k-flyerArtboard-1.png',
                },
                {
                  title: 'The Path to Personal Power',
                  description: 'Unlock your inner potential and cultivate the mindset needed for extraordinary success.',
                  image: '4k-flyerArtboard-1.png',
                },
              ].map((book, idx) => (
                <Link
                  key={idx}
                  href="/books"
                  className="bg-card rounded-xl shadow-md group border border-border/50 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="h-80 bg-white flex items-center justify-center px-3 py-5">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full w-full max-w-none object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{book.description}</p>
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

        {/* Mission Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <Lightbulb className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Vision</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Empowering Lives Through Dignity and Access

                  We envision a future where no girl or woman is held back by lack of access to menstrual hygiene. By reaching young girls and indigent women across Africa, we aim to create a society where dignity, confidence, and proper hygiene are accessible to all. Our goal is to build stronger communities where every individual can thrive without limitation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <Users className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Mission</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Combating Period Poverty, One Book at a Time

                  We are committed to reducing period poverty by transforming knowledge into impact. Through book-driven fundraising, outreach programs, and community support, we provide sanitary pads and essential resources to those in need. Every initiative we undertake is focused on restoring dignity, improving health, and creating opportunities for a better future.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Values</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  <div className="mb-4">
                    <strong>Compassion</strong> – We are driven by empathy and a deep commitment to improving lives.
                  </div>

                  <div className="mb-4">
                    <strong>Impact</strong> – We focus on creating meaningful and lasting change in communities.
                  </div>

                  <div className="mb-4">
                    <strong>Dignity</strong> – We believe every girl and woman deserves confidence and self-worth.
                  </div>

                  <div className="mb-4">
                    <strong>Empowerment</strong> – We equip individuals with the resources and knowledge to thrive.
                  </div>

                  <div>
                    <strong>Integrity</strong> – We operate with honesty, transparency, and accountability.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="sticky top-24 bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden 
                ring-4 ring-white 
                shadow-[0_0_30px_rgba(34,197,94,0.25)] 
                transition duration-300 hover:scale-105">
                    <img
                      src="ceo.png"
                      alt="Jade Anibor"
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <div>
                  <p className="text-sm text-accent font-semibold tracking-wide uppercase mb-2">About</p>
                  <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Jade&apos;s Journey</h2>
                </div>

                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    With over two decades of experience in strategic business consulting and personal transformation, Jade Anibor has become a trusted voice in helping individuals and organizations unlock their full potential. Her unique approach combines practical business acumen with deep insights into human psychology and organizational behavior.
                  </p>

                  <p>
                    Jade&apos;s consulting firm has worked with hundreds of executives, entrepreneurs, and leaders across multiple industries, helping them navigate complex challenges and achieve breakthrough results. Her methodologies have been proven to increase organizational effectiveness, improve leadership capabilities, and drive sustainable growth.
                  </p>

                  <p>
                    As an accomplished author, Jade has published multiple bestselling books that have influenced thousands of readers worldwide. Her written work focuses on practical strategies for success, personal empowerment, and organizational transformation. Each publication is grounded in real-world experience and backed by comprehensive research.
                  </p>

                  <p>
                    Beyond consulting and writing, Jade is passionate about education and giving back to communities. Through the Jade Anibor Foundation, she provides scholarships, mentorship programs, and resources to emerging leaders and entrepreneurs who are committed to making a positive impact.
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Read Full Bio
                    <ArrowRight size={20} />
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
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">Join the Mission</h2>
              <p className="text-lg text-accent-foreground/80">
                Every book purchased and every donation made brings us one step closer to ending period poverty. Together, we can restore dignity and create lasting impact..
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
