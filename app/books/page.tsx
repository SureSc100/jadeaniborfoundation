import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Star, ShoppingCart, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Books | Jade Anibor - Educational Resources & Bestsellers',
  description: 'Explore Jade Anibor&apos;s bestselling books on business, personal development, and transformation. Discover practical insights for success.',
}

const books = [
  {
    id: 1,
    title: 'The Art of Strategic Transformation',
    author: 'Jade Anibor',
    year: 2023,
    rating: 4.9,
    reviews: 1250,
    price: 24.99,
    image: '4k-flyerArtboard-1.png',
    description:
      'Learn the principles of transforming vision into reality through strategic planning and decisive action. This comprehensive guide provides actionable frameworks used by Fortune 500 companies.',
    highlights: [
      'Strategic Planning Frameworks',
      'Change Management Strategies',
      'Leadership Development',
      'Organizational Transformation',
    ],
  },
  {
    id: 2,
    title: 'Building Business Excellence',
    author: 'Jade Anibor',
    year: 2022,
    rating: 4.8,
    reviews: 980,
    price: 22.99,
    image: '4k-flyerArtboard-1.png',
    description:
      'Master the fundamentals of creating sustainable, profitable businesses with lasting impact. Discover proven strategies for scaling, profitability, and building exceptional teams.',
    highlights: [
      'Business Development',
      'Team Building',
      'Profit Optimization',
      'Market Strategy',
    ],
  },
  {
    id: 3,
    title: 'The Path to Personal Power',
    author: 'Jade Anibor',
    year: 2021,
    rating: 4.9,
    reviews: 1450,
    price: 19.99,
    image: '4k-flyerArtboard-1.png',
    description:
      'Unlock your inner potential and cultivate the mindset needed for extraordinary success. A transformative journey through personal empowerment and achievement.',
    highlights: [
      'Mindset Development',
      'Goal Setting',
      'Personal Mastery',
      'Success Psychology',
    ],
  },
  {
    id: 4,
    title: 'Leadership in the Modern Age',
    author: 'Jade Anibor',
    year: 2023,
    rating: 4.7,
    reviews: 820,
    price: 26.99,
    image: '👥',
    description:
      'Navigate modern leadership challenges with proven strategies. Learn how to inspire, motivate, and lead diverse teams in today&apos;s dynamic business environment.',
    highlights: [
      'Emotional Intelligence',
      'Team Dynamics',
      'Crisis Management',
      'Organizational Culture',
    ],
  },
  {
    id: 5,
    title: 'Innovation & Disruptive Thinking',
    author: 'Jade Anibor',
    year: 2022,
    rating: 4.6,
    reviews: 650,
    price: 23.99,
    image: '💡',
    description:
      'Discover how to foster innovation and think disruptively. Essential strategies for staying ahead of market trends and creating breakthrough solutions.',
    highlights: [
      'Creative Problem Solving',
      'Market Innovation',
      'Future Thinking',
      'Competitive Advantage',
    ],
  },
  {
    id: 6,
    title: 'The Entrepreneur&apos;s Handbook',
    author: 'Jade Anibor',
    year: 2021,
    rating: 4.8,
    reviews: 1100,
    price: 21.99,
    image: '🚀',
    description:
      'A practical guide for aspiring and established entrepreneurs. From startup to scale-up, master the essential skills needed to build a thriving business.',
    highlights: [
      'Startup Strategies',
      'Funding & Finance',
      'Growth Hacking',
      'Business Scaling',
    ],
  },
]

export default function BooksPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 text-center mb-12">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase">Library</p>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground">
                Transformative Books by Jade Anibor
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Discover practical insights and proven strategies for personal development, business excellence, and organizational transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-card rounded-xl shadow-md border border-border/50 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  {/* Book Cover */}
                  <div className="h-80 bg-white flex items-center justify-center p-6 border-b border-border/40">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  {/* Book Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{book.title}</h3>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(book.rating) ? 'fill-accent text-accent' : 'text-muted'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-foreground/60">
                        {book.rating} ({book.reviews} reviews)
                      </span>
                    </div>

                    <p className="text-foreground/70 text-sm mb-4 flex-grow">{book.description}</p>

                    <div className="space-y-3 mb-4">
                      <p className="text-xs text-foreground/50 font-semibold tracking-wide uppercase">Key Topics</p>
                      <div className="flex flex-wrap gap-2">
                        {book.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div>
                        <p className="text-2xl font-bold text-primary">${book.price}</p>
                        <p className="text-xs text-foreground/50">{book.year}</p>
                      </div>
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Quote */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-3xl sm:text-4xl font-serif italic">
              "Books are not just repositories of knowledge—they are catalysts for transformation. Every page is an opportunity to evolve."
            </p>
            <p className="text-lg text-primary-foreground/80">— Jade Anibor</p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Bonus Resources</h2>
              <p className="text-lg text-foreground/70">Get additional materials with your book purchase</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Workbooks & Worksheets',
                  description:
                    'Practical exercises and worksheets to help you apply the concepts from each book to your own life and business.',
                  icon: '📋',
                },
                {
                  title: 'Video Training Series',
                  description:
                    'Exclusive video modules featuring Jade walking through key concepts and providing additional insights.',
                  icon: '🎥',
                },
                {
                  title: 'Community Access',
                  description: 'Join a community of readers and transform together. Share insights, ask questions, and grow.',
                  icon: '👫',
                },
              ].map((resource, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="text-5xl">{resource.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{resource.title}</h3>
                  <p className="text-foreground/70">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">Start Your Reading Journey</h2>
              <p className="text-lg text-accent-foreground/80">
                Order your copy today and unlock the insights that have transformed thousands of lives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors">
                Shop All Books
                <ArrowRight size={20} />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-foreground text-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
