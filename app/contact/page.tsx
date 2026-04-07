'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
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
                Have questions or ready to start your transformation journey? We&apos;re here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:hello@jadeanibor.com" className="text-primary hover:text-primary/80 transition-colors">
                    hello@jadeanibor.com
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Phone className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:+1234567890" className="text-primary hover:text-primary/80 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-foreground/70 text-sm">New York, NY 10001</p>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Clock className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-foreground/70 text-sm">Mon - Fri: 9am - 6pm EST</p>
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
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>

                  {submitted ? (
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 text-center space-y-3">
                      <p className="text-lg font-semibold text-primary">Thank You!</p>
                      <p className="text-foreground/70">
                        Your message has been received. We&apos;ll get back to you within 24 hours.
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
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (234) 567-8900"
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
                            <option value="books">Book Orders</option>
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
                    We typically respond to all inquiries within 24 hours during business hours.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground font-bold">✓</span>
                      <span>Professional team standing by</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground font-bold">✓</span>
                      <span>Confidential consultations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-foreground font-bold">✓</span>
                      <span>Customized solutions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-foreground">Alternative Contact</h3>
                  <p className="text-sm text-foreground/70">
                    For urgent matters or specific departments, reach out directly:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Consulting:</span>
                      <br />
                      <a href="mailto:consulting@jadeanibor.com" className="text-primary hover:text-primary/80">
                        consulting@jadeanibor.com
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Foundation:</span>
                      <br />
                      <a href="mailto:foundation@jadeanibor.com" className="text-primary hover:text-primary/80">
                        foundation@jadeanibor.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-12">Our Location</h2>

            <div className="rounded-xl overflow-hidden shadow-lg border border-border/50 h-96 bg-muted flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-5xl">📍</p>
                <h3 className="font-serif text-2xl font-bold text-foreground">New York, NY</h3>
                <p className="text-foreground/70">123 Consulting Drive, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How long does a typical consulting engagement last?',
                  a: 'Consulting engagements typically range from 3 to 12 months depending on the scope and complexity of the project.',
                },
                {
                  q: 'What is your consulting fee structure?',
                  a: 'We provide custom quotes based on your specific needs. Contact us for a detailed proposal and pricing information.',
                },
                {
                  q: 'Can Jade conduct workshops or speaking engagements?',
                  a: 'Yes, Jade regularly conducts keynote speeches, workshops, and training sessions. Contact us to discuss your event needs.',
                },
                {
                  q: 'How do I apply for a Foundation scholarship?',
                  a: 'Visit our Foundation page for detailed information about scholarship programs and application requirements.',
                },
                {
                  q: 'Where can I purchase your books?',
                  a: 'Our books are available through major retailers including Amazon, bookstores, and our website.',
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
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">Ready to Connect?</h2>
              <p className="text-lg text-accent-foreground/80">
                Reach out today and let&apos;s discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
