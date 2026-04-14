import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Award, Briefcase, Globe, BookOpen, HandHeart, Building2 } from 'lucide-react'

export const metadata = {
  title: 'About | Jade George Anibor',
  description:
    'Meet Jade George Anibor—Nigerian author, business consultant, and social entrepreneur. Learn about her work, credentials, books, and the mission behind Jade Anibor Foundation.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-linear-to-b from-muted/40 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-2">
                    About
                  </p>
                  <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground">
                    Jade George Anibor
                  </h1>
                  <p className="text-xl text-primary font-semibold mt-3">
                    Author • Business Consultant • Social Entrepreneur
                  </p>
                </div>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  Jade George Anibor is a Nigerian author, business consultant, and social
                  entrepreneur with over 15 years of writing experience. She has published multiple
                  books across genres including business, motivation, thrillers, poetry, and romance.
                </p>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  She is the founder of Jade Anibor Foundation—an initiative focused on reducing
                  period poverty in Africa by supporting indigent women and young girls with sanitary
                  pads and menstrual hygiene resources.
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

              <div className="relative mx-auto flex h-full w-full max-w-md items-center justify-center rounded-3xl border border-border/40 bg-card/80 p-5 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.45)] backdrop-blur">
                {/* Premium thin gradient frame */}
                <div className="w-full rounded-3xl bg-linear-to-br from-primary/35 to-accent/35 p-px shadow-2xl">
                  <div className="overflow-hidden rounded-3xl bg-background">
                    <img
                      src="/ceo.png"
                      alt="Jade George Anibor"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                The Story
              </p>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Jade&apos;s Journey
              </h2>
            </div>

            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Jade’s work sits at the intersection of storytelling, strategy, and service. As an
                author, her writing explores themes of self-growth, love, entrepreneurship, and
                social impact—bringing practical lessons and emotional depth to every page.
              </p>

              <p>
                Across her catalog, she has published books in diverse genres—including business,
                motivation, thrillers, poetry, and romance. Notable titles include{' '}
                <span className="font-semibold text-foreground">
                  “Twenty Ways I Thought I Died”
                </span>
                ,{' '}
                <span className="font-semibold text-foreground">
                  “The Better Version of a Woman”
                </span>
                , and{' '}
                <span className="font-semibold text-foreground">
                  “A World Without Business Is No Business.”
                </span>
              </p>

              <p>
                As a business consultant, Jade supports individuals and organizations with
                practical, results-driven guidance shaped by real-world experience and continuous
                learning across business, HR, projects, and operations.
              </p>

              <p>
                Her commitment to social impact is reflected through the Jade Anibor Foundation,
                where she works to reduce period poverty in Africa—helping vulnerable women and
                girls access sanitary pads and maintain proper menstrual hygiene.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise / Credentials Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                Credentials
              </p>
              <h2 className="font-serif text-4xl font-bold text-foreground">Areas of Expertise</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: 'Business Consulting',
                  description:
                    'Certified Business Consultant (CBC) with a focus on practical strategy, operations, and growth support for individuals and businesses.',
                },
                {
                  icon: Award,
                  title: 'Human Resources & People Strategy',
                  description:
                    'Chartered Human Resource Manager (ACHRM), Associate Member (CIHRSM), supporting people development and effective workplace practices.',
                },
                {
                  icon: Building2,
                  title: 'Facilities & Project Management',
                  description:
                    'Certified Facility Manager (CFM) and Associate Member (GIPM), with training and certifications spanning project and operational execution.',
                },
                {
                  icon: BookOpen,
                  title: 'Writing & Thought Leadership',
                  description:
                    'Multi-genre author with 15+ years of writing experience, exploring self-growth, love, entrepreneurship, and social impact.',
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
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {expertise.title}
                    </h3>
                    <p className="text-foreground/70">{expertise.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Certifications (mobile-friendly chips) */}
            <div className="max-w-5xl mx-auto mt-14">
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <p className="text-sm font-semibold text-foreground mb-4">
                  Selected Qualifications & Certificates
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'BSc in Business Administration',
                    'MBA (in view)',
                    'ACHRM (Chartered HR Manager)',
                    'Associate Member, CIHRSM',
                    'CFM (Certified Facility Manager)',
                    'Associate Member, GIPM',
                    'CBC (Certified Business Consultant)',
                    'Associate Member, ICBC',
                    'Project Management',
                    'English for Career Development',
                    'Psychology',
                    'Mental Health Support Worker',
                    'Digital Marketing',
                    'Soft Skills',
                    'Creativity',
                    'Problem-Solving Skills',
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full bg-muted text-foreground/80 border border-border/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section (updated to only what we know) */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                Key Highlights
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  year: '15+ Years',
                  title: 'Writing & Publishing Journey',
                  description:
                    'Over 15 years of writing experience with published works across business, motivation, thrillers, poetry, and romance.',
                },
                {
                  year: 'Books',
                  title: 'Notable Titles',
                  description:
                    "Includes 'Twenty Ways I Thought I Died', 'The Better Version of a Woman', and 'A World Without Business Is No Business'.",
                },
                {
                  year: 'Career',
                  title: 'Consulting & Professional Development',
                  description:
                    'Business consulting supported by ongoing training and professional certifications across HR, facilities, and project management.',
                },
                {
                  year: 'Nov 16, 2022',
                  title: 'Jade Anibor Foundation Registered',
                  description:
                    'Founded to reduce period poverty in Africa and support indigent women and young girls with sanitary pads and menstrual hygiene resources.',
                },
                {
                  year: 'In View',
                  title: 'MBA (In Progress)',
                  description:
                    'Continuing her academic and professional growth while expanding her work in consulting, writing, and social impact.',
                },
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-6 sm:gap-8 items-start relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    {idx < 4 && <div className="w-1 h-20 bg-border/50 mt-4 flex-grow" />}
                  </div>

                  <div className="pt-2 pb-8">
                    <p className="text-sm text-accent font-semibold tracking-wide uppercase mb-1">
                      {milestone.year}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-foreground/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section (changed from green to faded navy/black) */}
        <section className="py-20 text-slate-50 bg-linear-to-b from-[#050A18] via-[#070F22] to-[#050A18]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold">Personal Philosophy</h2>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold">Growth Through Story & Strategy</h3>
                  <p className="leading-relaxed text-slate-200">
                    Jade believes growth is both personal and practical—shaped by the stories we
                    tell ourselves and the strategies we build. Through writing and consulting, she
                    helps people strengthen mindset, direction, and execution.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold">Impact That Protects Dignity</h3>
                  <p className="leading-relaxed text-slate-200">
                    Social impact should be human-centered. Her foundation work is rooted in dignity
                    and access—supporting menstrual hygiene and helping reduce period poverty for
                    women and girls who need it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section (updated to facts we have) */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-10 text-center">
              {[
                { value: '15+', label: 'Years Writing Experience' },
                { value: 'Multi', label: 'Genre Author' },
                { value: 'CAC', label: 'Foundation Registered' },
                { value: 'MBA', label: 'In View' },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="font-serif text-5xl font-bold text-primary">{stat.value}</p>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-sm text-foreground/60">
              Foundation Registration Number: <span className="font-semibold">169471</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">
                Work With Jade
              </h2>
              <p className="text-lg text-accent-foreground/80">
                For consulting, speaking, collaborations, or media enquiries—reach out and let’s
                connect.
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
                Contact
              </Link>
            </div>

            <div className="pt-4">
              <Link
                href="/foundation"
                className="inline-flex items-center justify-center gap-2 text-accent-foreground/90 hover:text-accent-foreground underline-offset-4 hover:underline"
              >
                <HandHeart size={18} />
                Learn about the Foundation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}