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
        <section className="relative min-h-screen flex items-center pt-20 pb-20 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-accent font-semibold text-sm tracking-wide uppercase">WELCOME TO JADE ANIBOR</p>
                  <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                    Transformational Leadership & Strategic Growth
                  </h1>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    Empowering individuals and organizations with over 20 years of experience in leadership, personal growth, and strategic consulting.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Link
                    href="/consulting"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/books"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                  >
                    Explore Books
                  </Link>
                </div>
              </div>

              <div className="relative h-96 sm:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
                <div className="relative bg-card rounded-2xl shadow-xl border border-border/50 p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="space-y-3">
                    <div className="w-38 h-38 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                      <img
                        src="/ceo.png"
                        alt="Jade Anibor"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">Jade Anibor</h2>
                    <p className="text-foreground/70">Visionary Consultant & Thought Leader</p>
                    <p className="text-sm text-foreground/60">
                      Helping individuals and organizations unlock clarity, growth, and lasting transformation.
                    </p>
                  </div>
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
                  image: '📚',
                },
                {
                  title: 'Building Business Excellence',
                  description: 'Master the fundamentals of creating sustainable, profitable businesses with lasting impact.',
                  image: '💼',
                },
                {
                  title: 'The Path to Personal Power',
                  description: 'Unlock your inner potential and cultivate the mindset needed for extraordinary success.',
                  image: '✨',
                },
              ].map((book, idx) => (
                <Link
                  key={idx}
                  href="/books"
                  className="group bg-card rounded-xl shadow-md border border-border/50 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                    {book.image}
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
                  To help individuals and organizations achieve clarity, growth, and lasting impact.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <Users className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Mission</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To empower individuals and businesses through strategic consulting, education, and practical tools that drive sustainable transformation and excellence.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Values</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Integrity, excellence, continuous growth, and meaningful impact are at the core of everything we do. We believe in creating lasting change.
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
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                    <span className="text-primary-foreground font-serif text-6xl font-bold">J</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Jade Anibor</h3>
                    <p className="text-accent font-semibold text-sm mt-2">Visionary Consultant & Author</p>
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
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">Ready to Work With Jade?</h2>
              <p className="text-lg text-accent-foreground/80">
                Take the first step towards achieving your goals. Explore our consulting services or connect with us today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/consulting"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors"
              >
                Explore Consulting
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-foreground text-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
