import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Award, Briefcase, Globe, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'About | Jade Anibor - Biography & Background',
  description: 'Learn about Jade Anibor&apos;s journey, expertise, and commitment to transforming lives through consulting, education, and community impact.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-2">About</p>
                  <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground">Jade Anibor</h1>
                  <p className="text-xl text-primary font-semibold mt-3">Visionary Consultant & Transformational Leader</p>
                </div>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  With over two decades of experience in strategic business consulting, executive leadership, and organizational transformation, Jade Anibor has become a trusted authority in helping individuals and organizations unlock their extraordinary potential.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/consulting"
                    className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              <div className="relative h-96 sm:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
                <div className="relative bg-card rounded-2xl shadow-xl border border-border/50 p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                    <span className="text-primary-foreground font-serif text-8xl font-bold">J</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Jade Anibor</h2>
                  <p className="text-accent font-semibold mb-4">Consultant & Author</p>
                  <p className="text-sm text-foreground/70">20+ Years in Transformational Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">The Story</p>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Jade&apos;s Journey</h2>
            </div>

            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Jade&apos;s journey began with a simple but powerful belief: that every person and organization has the capacity for extraordinary transformation. What started as a passion for helping others grow has evolved into a comprehensive practice spanning strategic consulting, executive coaching, thought leadership, and community impact.
              </p>

              <p>
                Early in her career, Jade recognized a critical gap in the market. While many consultants focused solely on metrics and processes, she understood that sustainable transformation required addressing both the strategic and human elements of change. This insight became the foundation of her unique consulting methodology—one that combines rigorous business analysis with deep understanding of organizational psychology and individual development.
              </p>

              <p>
                Over the past two decades, Jade has worked with Fortune 500 companies, innovative startups, non-profit organizations, and government agencies. Her clients span industries from technology and manufacturing to healthcare and education. Across all these diverse environments, one principle remains constant: lasting transformation comes from aligning strategy with culture and developing people to execute with excellence.
              </p>

              <p>
                As an author, Jade has published multiple bestselling books that have influenced thousands of readers worldwide. Her written work translates complex consulting insights into practical, actionable strategies that individuals and organizations can immediately apply. Each publication reflects her commitment to democratizing the transformational knowledge that has made her consulting practice so successful.
              </p>

              <p>
                Perhaps most importantly, Jade has never forgotten where she came from. Through the Jade Anibor Foundation, she provides scholarships, mentorship, and resources to emerging leaders and entrepreneurs from underrepresented backgrounds. For her, transformation is not a personal achievement—it&apos;s a movement that lifts communities and creates lasting change.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">Credentials</p>
              <h2 className="font-serif text-4xl font-bold text-foreground">Areas of Expertise</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: 'Strategic Consulting',
                  description:
                    'Deep expertise in developing comprehensive business strategies, organizational transformation, and change management across multiple industries.',
                },
                {
                  icon: Award,
                  title: 'Executive Leadership',
                  description:
                    'Proven track record of developing executive teams, building organizational culture, and improving leadership effectiveness at all levels.',
                },
                {
                  icon: BookOpen,
                  title: 'Thought Leadership',
                  description:
                    'Author of multiple bestselling books on business, leadership, and personal transformation with global readership.',
                },
                {
                  icon: Globe,
                  title: 'Global Experience',
                  description:
                    'International consulting experience across North America, Europe, Asia, and emerging markets with diverse cultural contexts.',
                },
              ].map((expertise, idx) => {
                const Icon = expertise.icon
                return (
                  <div
                    key={idx}
                    className="bg-card rounded-xl shadow-md border border-border/50 p-8 space-y-4 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{expertise.title}</h3>
                    <p className="text-foreground/70">{expertise.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Key Milestones</h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  year: '2000',
                  title: 'Career Foundation',
                  description: 'Launched first consulting practice with focus on organizational transformation.',
                },
                {
                  year: '2008',
                  title: 'Industry Recognition',
                  description: 'Named one of the Top 50 Consultants in the industry by leading business publications.',
                },
                {
                  year: '2010',
                  title: 'First Book Published',
                  description: 'Published bestselling first book, establishing thought leadership in the field.',
                },
                {
                  year: '2015',
                  title: 'Foundation Established',
                  description: 'Launched the Jade Anibor Foundation to provide scholarships and mentorship.',
                },
                {
                  year: '2019',
                  title: 'Global Expansion',
                  description: 'Expanded consulting practice to serve clients across six continents.',
                },
                {
                  year: '2024',
                  title: 'Continued Impact',
                  description: 'Over $2M in scholarships awarded and 500+ mentees supported through foundation.',
                },
              ].map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex gap-8 items-start relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    {idx < 5 && (
                      <div className="w-1 h-20 bg-border/50 mt-4 flex-grow" />
                    )}
                  </div>

                  <div className="pt-2 pb-8">
                    <p className="text-sm text-accent font-semibold tracking-wide uppercase mb-1">{milestone.year}</p>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-foreground/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold">Personal Philosophy</h2>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold">The Power of Transformation</h3>
                  <p className="leading-relaxed text-primary-foreground/80">
                    Jade believes that transformation is not a destination but a continuous journey. She&apos;s dedicated to helping others discover their own capacity for growth and change, whether it&apos;s personal development, organizational excellence, or community impact.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold">Creating Lasting Impact</h3>
                  <p className="leading-relaxed text-primary-foreground/80">
                    Every consulting engagement, book, and foundation initiative is designed with one question in mind: What lasting impact can we create? This commitment to significance over mere success guides all of Jade&apos;s work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '20+', label: 'Years of Experience' },
                { value: '500+', label: 'Companies Served' },
                { value: '5', label: 'Bestselling Books' },
                { value: '$2M+', label: 'Scholarships Awarded' },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="font-serif text-5xl font-bold text-primary">{stat.value}</p>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">Ready to Transform?</h2>
              <p className="text-lg text-accent-foreground/80">
                Let&apos;s discuss how Jade&apos;s expertise can help you achieve your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/consulting"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-foreground text-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
