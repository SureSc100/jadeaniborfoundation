import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Briefcase, TrendingUp, Users, Target } from 'lucide-react'

export const metadata = {
  title: 'Business Consulting | Jade Anibor - Strategic Solutions',
  description: 'Transform your business with strategic consulting from Jade Anibor. Expert guidance on growth, leadership, and organizational excellence.',
}

const services = [
  {
    id: 1,
    icon: Target,
    title: 'Strategic Planning',
    description:
      'Develop comprehensive strategies that align your vision with actionable goals and measurable results.',
    features: [
      '5-Year Strategic Planning',
      'Market Analysis & Positioning',
      'Competitive Intelligence',
      'Goal Setting & Tracking',
    ],
  },
  {
    id: 2,
    icon: Users,
    title: 'Leadership Development',
    description:
      'Build exceptional leaders who inspire teams, drive innovation, and create lasting organizational impact.',
    features: [
      'Executive Coaching',
      'Team Building Programs',
      'Emotional Intelligence Training',
      'Succession Planning',
    ],
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Business Growth',
    description:
      'Scale your business with proven frameworks for revenue growth, market expansion, and profitability.',
    features: [
      'Revenue Optimization',
      'Market Expansion Strategy',
      'Sales Excellence Programs',
      'Profitability Analysis',
    ],
  },
  {
    id: 4,
    icon: Briefcase,
    title: 'Organizational Transformation',
    description: 'Modernize your operations, improve efficiency, and create a culture of continuous improvement.',
    features: [
      'Change Management',
      'Process Optimization',
      'Cultural Transformation',
      'Digital Modernization',
    ],
  },
]

const caseStudies = [
  {
    id: 1,
    company: 'TechVenture Inc.',
    industry: 'Technology',
    challenge: 'Rapid scaling creating organizational chaos',
    result: '150% revenue growth with 40% improved efficiency',
    quote:
      'Jade&apos;s strategic guidance transformed our chaotic growth into a well-oiled machine. We went from $5M to $12.5M revenue in 18 months.',
  },
  {
    id: 2,
    company: 'Global Manufacturing Co.',
    industry: 'Manufacturing',
    challenge: 'Leadership transition and market competitiveness',
    result: 'New leadership model, 25% market share increase',
    quote:
      'The executive coaching and strategic planning sessions gave our new leadership team the tools and confidence needed to lead effectively.',
  },
  {
    id: 3,
    company: 'Innovation Startup',
    industry: 'Healthcare Tech',
    challenge: 'Funding acquisition and market positioning',
    result: '$20M Series B funding secured',
    quote:
      'Jade helped us refine our narrative and strategy, making us an attractive investment. Our Series B was oversubscribed 3x.',
  },
]

export default function ConsultingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 text-center mb-12">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase">Services</p>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground">
                Strategic Business Consulting
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Transform your business, develop your leadership, and achieve extraordinary growth with strategic consulting tailored to your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    className="bg-card rounded-xl shadow-md border border-border/50 p-8 space-y-6 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={32} />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-border/50">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">Our Approach</p>
              <h2 className="font-serif text-4xl font-bold text-foreground">
                A Proven Consulting Process
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Discovery',
                  description: 'We conduct in-depth interviews, assessments, and analysis to understand your business, challenges, and goals.',
                },
                {
                  step: 2,
                  title: 'Strategy',
                  description: 'We develop comprehensive strategies, frameworks, and roadmaps tailored to your specific needs and opportunities.',
                },
                {
                  step: 3,
                  title: 'Implementation',
                  description: 'We guide you through implementation, providing training, coaching, and ongoing support for your teams.',
                },
                {
                  step: 4,
                  title: 'Optimization',
                  description: 'We monitor progress, measure results, and continuously optimize strategies to ensure sustainable success.',
                },
              ].map((phase, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                      {phase.step}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{phase.title}</h3>
                    <p className="text-foreground/70 text-sm">{phase.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:flex items-center justify-center absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="text-primary" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">Success Stories</p>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                Real Results from Real Clients
              </h2>
            </div>

            <div className="space-y-8">
              {caseStudies.map((study, idx) => (
                <div
                  key={study.id}
                  className="bg-card rounded-xl shadow-md border border-border/50 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{study.company}</h3>
                        <p className="text-sm text-accent font-semibold">{study.industry}</p>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-border/50">
                        <div>
                          <p className="text-xs font-semibold text-foreground/60 uppercase mb-2">The Challenge</p>
                          <p className="text-foreground/80">{study.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-accent uppercase mb-2">The Result</p>
                          <p className="text-lg font-bold text-primary">{study.result}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <blockquote className="text-lg italic text-foreground/70 border-l-4 border-accent pl-6 py-4">
                        &quot;{study.quote}&quot;
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-black text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold mb-4">Industry Expertise</h2>
              <p className="text-lg text-primary-foreground/80">
                Proven experience across diverse industries and business sizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { label: 'Years of Experience', value: '20+' },
                { label: 'Clients Served', value: '500+' },
                { label: 'Industries Covered', value: '15+' },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-5xl font-bold">{stat.value}</p>
                  <p className="text-primary-foreground/80">{stat.label}</p>
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
                Let&apos;s discuss how strategic consulting can accelerate your business growth and leadership excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors"
              >
                Schedule Consultation
                <ArrowRight size={20} />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-foreground text-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors">
                Download Services Guide
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
