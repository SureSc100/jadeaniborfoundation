'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 text-center mb-12">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase">Contact Us</p>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground">
                Get in Touch
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Have questions about books, consulting, or the foundation? Send a message or reach
                out directly using the contacts below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Author Email */}
              <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="text-primary" size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Author’s Email</h3>
                  <a
                    href="mailto:Jadeanibor@icloud.com"
                    className="text-primary hover:text-primary/80 transition-colors break-all"
                  >
                    Jadeanibor@icloud.com
                  </a>
                </div>
              </div>

              {/* Foundation Email */}
              <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="text-primary" size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Foundation Email</h3>
                  <a
                    href="mailto:Jadeaniborfoundation@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors break-all"
                  >
                    Jadeaniborfoundation@gmail.com
                  </a>
                </div>
              </div>

              {/* Consultancy Email */}
              <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="text-primary" size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Consultancy Email</h3>
                  <a
                    href="mailto:jfatrainingtools@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors break-all"
                  >
                    jfatrainingtools@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Phone className="text-primary" size={28} />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Phone</h3>

                  <div className="text-sm space-y-2">
                    <p className="text-foreground/70">
                      <span className="font-semibold text-foreground">Books:</span>{' '}
                      <a
                        href="tel:+2348133337114"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        +234 813 333 7114
                      </a>
                    </p>

                    <p className="text-foreground/70">
                      <span className="font-semibold text-foreground">Consultancy:</span>{' '}
                      <a
                        href="tel:+2348057183461"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        +234 805 718 3461
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional: Hours row (kept, but no location) */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-muted/30 rounded-xl border border-border/50 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="text-primary" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Response Time</p>
                  <p className="text-sm text-foreground/70">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl shadow-md border border-border/50 p-8">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 text-center space-y-3">
                      <p className="text-lg font-semibold text-primary">Thank You!</p>
                      <p className="text-foreground/70">
                        Your message has been received. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border-2 border-input rounded-lg focus:outline-none focus:border-primary bg-background text-foreground placeholder-foreground/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 border-2 border-input rounded-lg focus:outline-none focus:border-primary bg-background text-foreground placeholder-foreground/50 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Phone Number (optional)
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+234 813 333 7114"
                            className="w-full px-4 py-2 border-2 border-input rounded-lg focus:outline-none focus:border-primary bg-background text-foreground placeholder-foreground/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Subject
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border-2 border-input rounded-lg focus:outline-none focus:border-primary bg-background text-foreground transition-colors"
                          >
                            <option value="">Select a subject</option>
                            <option value="consulting">Consulting Inquiry</option>
                            <option value="speaking">Speaking Engagement</option>
                            <option value="books">Books</option>
                            <option value="foundation">Foundation Support</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your inquiry..."
                          rows={6}
                          className="w-full px-4 py-2 border-2 border-input rounded-lg focus:outline-none focus:border-primary bg-background text-foreground placeholder-foreground/50 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                      >
                        Send Message
                        <ArrowRight size={20} />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-primary text-primary-foreground rounded-xl p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold">Quick Response</h3>
                  <p className="text-primary-foreground/80">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground font-bold">✓</span>
                      <span>Professional support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground font-bold">✓</span>
                      <span>Confidential conversations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground font-bold">✓</span>
                      <span>Clear next steps</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Direct Contacts
                  </h3>
                  <p className="text-sm text-foreground/70">
                    For faster routing, contact the relevant department:
                  </p>

                  <div className="space-y-3 text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Author:</span>
                      <br />
                      <a
                        href="mailto:Jadeanibor@icloud.com"
                        className="text-primary hover:text-primary/80 break-all"
                      >
                        Jadeanibor@icloud.com
                      </a>
                    </p>

                    <p>
                      <span className="font-semibold text-foreground">Foundation:</span>
                      <br />
                      <a
                        href="mailto:Jadeaniborfoundation@gmail.com"
                        className="text-primary hover:text-primary/80 break-all"
                      >
                        Jadeaniborfoundation@gmail.com
                      </a>
                    </p>

                    <p>
                      <span className="font-semibold text-foreground">Consultancy:</span>
                      <br />
                      <a
                        href="mailto:jfatrainingtools@gmail.com"
                        className="text-primary hover:text-primary/80 break-all"
                      >
                        jfatrainingtools@gmail.com
                      </a>
                    </p>

                    <div className="pt-2 border-t border-border/50">
                      <p className="font-semibold text-foreground mb-2">Phone Lines</p>
                      <p className="text-foreground/70">
                        <span className="font-semibold text-foreground">Books:</span>{' '}
                        <a
                          href="tel:+2348133337114"
                          className="text-primary hover:text-primary/80"
                        >
                          +234 813 333 7114
                        </a>
                      </p>
                      <p className="text-foreground/70">
                        <span className="font-semibold text-foreground">Consultancy:</span>{' '}
                        <a
                          href="tel:+2348057183461"
                          className="text-primary hover:text-primary/80"
                        >
                          +234 805 718 3461
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How long does a typical consulting engagement last?',
                  a: 'Consulting engagements vary by scope. Share your needs via the form and we’ll advise the best structure and timeline.',
                },
                {
                  q: 'What is your consulting fee structure?',
                  a: 'We provide custom quotes based on your goals and project scope. Contact us for a proposal.',
                },
                {
                  q: 'Can Jade conduct workshops or speaking engagements?',
                  a: 'Yes. Please select “Speaking Engagement” and share event details in your message.',
                },
                {
                  q: 'How can I support the Foundation?',
                  a: 'You can donate, partner, or support outreach efforts. Use the “Foundation Support” subject or email the foundation directly.',
                },
                {
                  q: 'Where can I purchase your books?',
                  a: 'Books are available through major retailers (including Amazon) and other listed sales platforms. If you need help, contact the Books line.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-lg shadow-md border border-border/50 p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                  <p className="text-foreground/70 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">
                Ready to Connect?
              </h2>
              <p className="text-lg text-accent-foreground/80">
                Reach out today and we’ll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}