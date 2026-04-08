import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Heart, Users, BookOpen, Award, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Jade Anibor Foundation | Scholarships & Community Impact',
  description: 'Support transformative education and community development through the Jade Anibor Foundation. Donate to scholarships and mentorship programs.',
}

export default function FoundationPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-linear-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 text-center mb-12">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase">Community Impact</p>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground">
                Jade Anibor Foundation
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Investing in education, mentorship, and community development to empower the next generation of leaders and innovators.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {[
                { icon: '🎓', label: 'Scholarships', value: '$2M+' },
                { icon: '👥', label: 'Mentees', value: '500+' },
                { icon: '🌟', label: 'Impact', value: '100K+' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-card rounded-lg shadow-md border border-border/50 p-6 text-center">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <p className="text-foreground/60 text-sm uppercase tracking-wide mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                The Jade Anibor Foundation is dedicated to transforming lives and communities through education, mentorship, and strategic support. We believe that every individual has the potential to achieve extraordinary things when given the right tools, guidance, and opportunities.
              </p>
              <p className="text-lg leading-relaxed">
                By providing scholarships, mentorship programs, and access to world-class resources, we&apos;re building a pipeline of future leaders, entrepreneurs, and changemakers who will drive positive transformation in their industries and communities.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">What We Do</p>
              <h2 className="font-serif text-4xl font-bold text-foreground">Foundation Programs</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Educational Scholarships',
                  description:
                    'Full and partial scholarships for deserving students pursuing higher education in business, leadership, and transformational studies.',
                  highlights: [
                    'Full tuition scholarships',
                    'Merit-based selection',
                    'Mentorship included',
                    'Career support',
                  ],
                },
                {
                  icon: Users,
                  title: 'Mentorship Programs',
                  description:
                    'One-on-one mentorship with industry leaders, entrepreneurs, and experts who provide guidance, accountability, and strategic support.',
                  highlights: [
                    'Executive mentoring',
                    'Business coaching',
                    'Career development',
                    'Network access',
                  ],
                },
                {
                  icon: BookOpen,
                  title: 'Leadership Development',
                  description:
                    'Comprehensive leadership training programs designed to develop the next generation of visionary leaders and change agents.',
                  highlights: [
                    'Leadership workshops',
                    'Executive training',
                    'Skill development',
                    'Certification programs',
                  ],
                },
                {
                  icon: Heart,
                  title: 'Community Initiatives',
                  description:
                    'Direct community support through grants, programs, and partnerships that address social challenges and create lasting impact.',
                  highlights: [
                    'Community grants',
                    'Social programs',
                    'NGO partnerships',
                    'Local development',
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
                      <h3 className="font-serif text-2xl font-bold text-foreground">{program.title}</h3>
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

        {/* Impact Stories */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">Beneficiaries</p>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                Lives Changed, Futures Transformed
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Chen',
                  role: 'MBA Graduate & Startup Founder',
                  story:
                    'The Foundation&apos;s scholarship enabled me to pursue my MBA debt-free. The mentorship from Jade personally guided my journey to founding a successful tech startup that now employs 50 people.',
                  image: '👩‍💼',
                },
                {
                  name: 'Marcus Johnson',
                  role: 'Executive Director, Non-profit',
                  story:
                    'As a mentee, I gained invaluable insights into leadership and strategy. I now lead a non-profit serving 10,000+ people annually, directly inspired by the principles I learned.',
                  image: '👨‍💼',
                },
                {
                  name: 'Priya Patel',
                  role: 'Management Consultant',
                  story:
                    'The Foundation&apos;s leadership program transformed my career trajectory. I went from mid-level analyst to partner at a top consulting firm in just 5 years.',
                  image: '👩‍💻',
                },
              ].map((story, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl shadow-md border border-border/50 p-8 space-y-4 text-center hover:shadow-lg transition-all"
                >
                  <div className="text-6xl">{story.image}</div>
                  <blockquote className="text-foreground/70 italic leading-relaxed">
                    &quot;{story.story}&quot;
                  </blockquote>
                  <div className="pt-4 border-t border-border/50">
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-sm text-accent">{story.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-2">Make an Impact</p>
                  <h2 className="font-serif text-4xl font-bold text-foreground">Support Our Mission</h2>
                </div>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  Your donation directly impacts the lives of students, emerging leaders, and communities we serve. Every contribution, regardless of size, makes a meaningful difference.
                </p>

                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="text-2xl">🎓</div>
                    <div>
                      <p className="font-semibold text-foreground">$5,000 Scholarship</p>
                      <p className="text-sm text-foreground/70">Covers tuition for one student for one semester</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <p className="font-semibold text-foreground">$10,000 Mentorship</p>
                      <p className="text-sm text-foreground/70">Supports a full year of mentorship for one mentee</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-2xl">🌟</div>
                    <div>
                      <p className="font-semibold text-foreground">$25,000 Leadership Program</p>
                      <p className="text-sm text-foreground/70">Enables comprehensive training for 5 emerging leaders</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-foreground/60">
                  The Jade Anibor Foundation is a 501(c)(3) nonprofit organization. All donations are tax-deductible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">Make Your Donation</h3>

                  <div className="space-y-3">
                    {[25, 50, 100, 250, 500, 1000].map((amount) => (
                      <button
                        key={amount}
                        className="w-full py-3 px-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        ${amount}
                      </button>
                    ))}
                    <input
                      type="number"
                      placeholder="Custom Amount"
                      className="w-full py-3 px-4 border-2 border-input rounded-lg font-semibold text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary bg-background"
                    />
                  </div>

                  <button className="w-full py-3 px-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                    <Heart size={20} />
                    Donate Now
                  </button>

                  <p className="text-xs text-foreground/60 text-center">
                    Secure donation processed via Stripe. Your information is protected.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-xl p-6 space-y-2">
                  <p className="text-sm font-semibold text-foreground">Why Give?</p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>✓ Tax-deductible donations</li>
                    <li>✓ 100% impact on programs</li>
                    <li>✓ Annual impact reports</li>
                    <li>✓ Transparent financials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Funds */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">How We Use Your Donations</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-4 text-center">
              {[
                { percent: '60%', label: 'Scholarships & Grants' },
                { percent: '20%', label: 'Program Development' },
                { percent: '12%', label: 'Administration' },
                { percent: '8%', label: 'Fundraising' },
              ].map((item, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6 border border-border/50">
                  <p className="text-4xl font-bold text-primary mb-2">{item.percent}</p>
                  <p className="text-foreground/70 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">Join Our Movement</h2>
              <p className="text-lg text-accent-foreground/80">
                Every contribution creates lasting change. Together, we&apos;re building a future of unlimited potential.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors">
                Donate Now
                <Heart size={20} />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-foreground text-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
