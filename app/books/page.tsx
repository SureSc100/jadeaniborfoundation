import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Books | Jade Anibor - Educational Resources & Bestsellers',
  description: "Explore Jade Anibor's books and shop via Amazon or Selar.",
}

// Store links (as provided)
const AMAZON_STORE_URL =
  'https://www.amazon.com/stores/JADE-GEORGE-ANIBOR/author/B0DH32BTDN?ref=ap_rdr&shoppingPortalEnabled=true'

const SELAR_STORE_URL = 'https://selar.com/m/jade-george-anibor1'

// Autographed ebook details
const WHATSAPP_NUMBER_INTL = '2348133337114'
const BANK_NAME = 'Zenith Bank'
const ACCOUNT_NUMBER = '1221037259'
const ACCOUNT_NAME = 'Jade Anibor Foundation'

// where your book cover images live
const BOOKS_IMG_PREFIX = '/books' // => /public/books
const BOOKS_IMG_EXT = 'jpeg' // change to 'jpg' if your files are .jpg

const books = [
  { id: 1, title: 'THE GIANT IN MY BED' },
  { id: 2, title: 'Beyond the Net Worth' },
  { id: 3, title: 'GET ANOTHER BOYFRIEND' },
  { id: 4, title: 'Take a Leap in Business' },
  { id: 5, title: 'Billionaire Husband' },
  { id: 6, title: 'Love in Verse' },
  { id: 7, title: 'A World Without Business is No Business' },
  { id: 8, title: 'THE INTRICACIES OF THE BUSINESS WORLD' },
  { id: 9, title: 'Fascinate Your Activities With Project Management' },
  { id: 10, title: 'MY UNCOMPREHENDING WIFE' },
  { id: 11, title: 'TWENTY WAYS I THOUGHT I DIED' },
  { id: 12, title: 'DO NOT ASK ME TO LOVE YOU IF YOU WILL NOT CHANGE MY NAME' },
  { id: 13, title: 'SCARED' },
  { id: 14, title: 'PATHETIC COUPLE' },
  { id: 15, title: 'SEVEN LIES YOU WERE TOLD' },
  { id: 16, title: 'WHAT DO YOU EXPECT' },
  { id: 17, title: 'PARADISE STREET' },
  { id: 18, title: 'PAINT MY HEART' },
  { id: 19, title: 'FIVE COMPETITIVE MANAGERIAL SKILLS' },
  { id: 20, title: 'THE BETTER VERSION OF A WOMAN' },
  { id: 21, title: 'A LONG RIDE' },
  { id: 22, title: 'THE CROSS BORDERS OF INFLATION WITHIN AFRICA' },
  { id: 23, title: 'How to Begin the year' },
].map((b) => ({
  ...b,
  image: `${BOOKS_IMG_PREFIX}/${b.id}.${BOOKS_IMG_EXT}`,
}))

export default function BooksPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-linear-to-b from-muted/40 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 text-center mb-12">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase">Library</p>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground">
                Transformative Books by Jade Anibor
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Buy from either Amazon or Selar.
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
                  className="group bg-card rounded-xl shadow-md border border-border/50 overflow-hidden
                             hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  {/* Book Cover */}
                  <div className="border-b border-border/40 bg-linear-to-b from-muted/30 to-background p-5">
                    <div className="mx-auto w-full max-w-[280px] rounded-2xl bg-linear-to-br from-primary/25 to-accent/25 p-px shadow-xl">
                      <div className="overflow-hidden rounded-2xl bg-white">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="aspect-3/4 w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title + Buy Buttons */}
                  <div className="p-6 flex flex-col gap-4">
                    <h3 className="font-serif text-xl font-bold text-foreground">{book.title}</h3>

                    <div className="space-y-3">
                      <p className="text-xs text-foreground/60 font-semibold tracking-wide uppercase">
                        Buy from:
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href={AMAZON_STORE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold
                                     bg-[#FF9900] text-black hover:bg-[#ff9900]/90 transition-colors"
                        >
                          Amazon
                        </Link>

                        <Link
                          href={SELAR_STORE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold
                                     bg-emerald-600 text-white hover:bg-emerald-600/90 transition-colors"
                        >
                          Selar
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Quote (gray bg, black text) */}
        <section className="py-20 bg-muted/40 text-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-3xl sm:text-4xl font-serif italic text-foreground">
              "Books are not just repositories of knowledge—they are catalysts for transformation.
              Every page is an opportunity to evolve."
            </p>
            <p className="text-lg text-foreground/70">— Jade Anibor</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-accent-foreground">
                Start Your Reading Journey
              </h2>
              <p className="text-lg text-accent-foreground/80">
                Order your copy today and unlock the insights that have transformed thousands of lives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href={AMAZON_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors"
              >
                Shop All Books on Amazon
                <ArrowRight size={20} />
              </Link>

              <Link
                href={SELAR_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-accent-foreground text-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors"
              >
                Shop All Books on Selar
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Autographed eBooks section (before Footer) */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
                <div className="relative aspect-4/5 sm:aspect-16/10 lg:aspect-4/5 w-full">
                  <Image
                    src="auto.jpeg"
                    alt="Autographed eBooks flyer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-2">
                    Special Offer
                  </p>
                  <h2 className="font-serif text-4xl font-bold text-foreground">
                    Hello dear readers!
                  </h2>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  Get autographed ebooks at the original price! DM{' '}
                  <span className="font-semibold text-foreground">+2348133337114</span> with your email
                  address.
                </p>

                <div className="rounded-xl border border-border/60 bg-muted/40 p-5 space-y-2">
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold text-foreground">Pay to:</span> {BANK_NAME}
                  </p>
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold text-foreground">Account number:</span> {ACCOUNT_NUMBER}
                  </p>
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold text-foreground">Account name:</span> {ACCOUNT_NAME}
                  </p>
                  <p className="text-sm text-foreground/80">Forward proof of payment. Thanks!</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`tel:+${WHATSAPP_NUMBER_INTL}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border/60 bg-background hover:bg-muted transition-colors font-semibold"
                  >
                    <Phone size={18} />
                    Call
                  </Link>

                  <Link
                    href={`https://wa.me/${WHATSAPP_NUMBER_INTL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-600/90 transition-colors font-semibold"
                  >
                    <MessageCircle size={18} />
                    WhatsApp DM
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}