'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = {
  image: string
  title: string
  description: string
  tag?: string
}

export default function ImpactCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        image: '/foundation/outreach-3.jpeg',
        tag: 'Community Impact',
        title: 'Pad Distribution & Menstrual Health Education',
        description:
          'We provide sanitary pads and practical education to help girls manage their periods safely and stay in school with confidence.',
      },
      {
        image: '/foundation/outreach-2.jpeg',
        tag: 'Community Impact',
        title: 'Community Visits & Needs Assessment',
        description:
          'We meet women where they are, listen to their challenges, and connect them to the right support and resources.',
      },
      {
        image: '/foundation/outreach-1.jpeg',
        tag: 'Community Impact',
        title: 'Mentorship, Encouragement & Dignity',
        description:
          'Beyond materials, we offer encouragement and mentorship—reminding every girl and woman that she matters.',
      },
      {
        image: '/foundation/pic2.jpeg',
        tag: 'Community Support',
        title: 'Supporting Women Through Direct Assistance',
        description:
          'We support indigent women with timely, practical help—meeting real needs and strengthening livelihoods through community-based outreach.',
      },
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const pointerStartX = useRef<number | null>(null)

  const goTo = (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  // Auto-play
  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [paused, slides.length])

  return (
    <section
      className="py-20 bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Our Impact
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Outreach in Action
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Real moments from the communities we serve—pad distribution, community visits,
            and one-on-one support that restore dignity and keep girls in school.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm"
          role="region"
          aria-roledescription="carousel"
          aria-label="Foundation outreach photos"
          onPointerDown={(e) => {
            pointerStartX.current = e.clientX
          }}
          onPointerUp={(e) => {
            if (pointerStartX.current === null) return
            const delta = e.clientX - pointerStartX.current
            pointerStartX.current = null
            if (Math.abs(delta) < 50) return
            delta < 0 ? next() : prev()
          }}
        >
          {/* Track */}
          <div
            className="flex w-full motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={i} className="relative min-w-full">
                <div className="relative w-full h-[70vh] sm:h-[520px] lg:h-[580px]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                </div>

                {/* Text overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                  <div className="max-w-2xl">
                    {s.tag ? (
                      <p className="text-xs font-semibold tracking-wide uppercase text-orange-300">
                        {s.tag}
                      </p>
                    ) : null}
                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 text-white p-2
                       hover:bg-black/60 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 text-white p-2
                       hover:bg-black/60 transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? 'bg-white w-7' : 'bg-white/50 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}